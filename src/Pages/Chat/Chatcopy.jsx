import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import io from "socket.io-client";
import { GetApi } from "../utilis/Api_Calling";
import useSocket from "./useSocket";
import RightChat from "./RightChat";
import LeftChat from "./LeftChat";

const ChatComponent = () => {
  const studentId = localStorage.getItem("Studentid");
  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [companies, setCompanies] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [currentCompany, setCurrentCompany] = useState(null);
  const [loadingCompanies, setLoadingCompanies] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [showOldMessages, setShowOldMessages] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useSocket(studentId);

  const getCompanies = async () => {
    try {
      const response = await GetApi("api/adminroutes/GetAllCompany");
      const companiesData = response?.data?.data;

      companiesData.sort((a, b) => {
        const aDate = new Date(a.lastActiveDate || 0).getTime();
        const bDate = new Date(b.lastActiveDate || 0).getTime();
        return bDate - aDate;
      });

      setCompanies(companiesData);
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoadingCompanies(false);
    }
  };

  const getMessages = async (conversationId) => {
    try {
      setLoadingMessages(true);
      const response = await GetApi(
        `api/chatroutes/conversations/${conversationId}/messages`
      );
      setMessages(response?.data?.data);
      scrollToBottom();
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoadingMessages(false);
    }
  };

  useEffect(() => {
    socket.on("userStatus", ({ userId, online }) => {
      setOnlineUsers((prevUsers) => {
        const updatedUsers = prevUsers.filter((user) => user.userId !== userId);
        if (online) {
          updatedUsers.push({ userId, online });
        }
        return updatedUsers;
      });
    });

    socket.emit("getConversations", studentId);
    socket.on("conversationsList", (conversations) => {
      setConversations(conversations);
      console.log(conversations);
    });

    socket.on("conversationsList", (conversations) => {
      console.log(conversations);
      setConversations(conversations);
    });

    return () => {
      socket.off("userStatus");
      socket.off("conversationsList");
    };
  }, [socket, studentId]);

  useEffect(() => {
    if (currentConversationId) {
      socket.emit("joinConversation", currentConversationId);
      getMessages(currentConversationId);

      socket.on("receiveMessage", (newMessage) => {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages, newMessage];
          setCompanies((prevCompanies) =>
            prevCompanies.map((company) =>
              company._id === newMessage.companyId
                ? { ...company, lastActiveDate: new Date().toISOString() }
                : company
            )
          );
          return updatedMessages;
        });
      });

      return () => {
        socket.off("receiveMessage");
      };
    }
  }, [currentConversationId]);

  const sendMessage = () => {
    if (message.trim() && currentConversationId) {
      const data = {
        conversationId: currentConversationId,
        senderId: studentId,
        senderType: "Student",
        message,
      };
      // console.log(data);
      socket.emit("sendMessage", data);
      setMessage("");
    }
  };

  const handleCompanyClick = async (companyId, company) => {
    try {
      if (companyId == currentCompany?._id) {
        return;
      }
      setSearchQuery("");
      const response = await GetApi(
        `api/chatroutes/conversation/${studentId}/${companyId}`
      );
      const conversationId = response?.data?.data?._id;
      setCurrentConversationId(conversationId);
      setCurrentCompany(company);
      setMessages([]);
      setShowOldMessages(false);
      scrollToBottom();
    } catch (error) {
      console.error("Error fetching or creating conversation:", error);
    } finally {
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadOldMessages = () => {
    setShowOldMessages(false);
  };

  return (
    <Box className="flex overflow-hidden overflow-y-hidden min-h-full max-h-full bg-white shadow-lg rounded-lg">
      <LeftChat
        handleCompanyClick={handleCompanyClick}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        loadingCompanies={loadingCompanies}
        companies={companies}
        messages={messages}
        currentConversationId={currentConversationId}
        currentCompany={currentCompany}
        onlineUsers={onlineUsers}
      />
      <RightChat
        sendMessage={sendMessage}
        message={message}
        setMessage={setMessage}
        messages={messages}
        loadingMessages={loadingMessages}
        messagesEndRef={messagesEndRef}
        currentCompany={currentCompany}
        loadOldMessages={loadOldMessages}
        showOldMessages={showOldMessages}
      />
    </Box>
  );
};

export default ChatComponent;

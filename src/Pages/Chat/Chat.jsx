import React, { useEffect, useState, useRef, useCallback } from "react";
import useSocket from "./useSocket";
import { Box } from "@mui/material";
import RightChat from "./RightChat";
import LeftChat from "./LeftChat";

const ChatComponent = () => {
  const studentId = localStorage.getItem("Studentid");
  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [currentCompany, setCurrentCompany] = useState(null);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [showOldMessages, setShowOldMessages] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useSocket(studentId);

  useEffect(() => {
    socket.on("userStatus", (onlineUsers) => {
      setOnlineUsers(onlineUsers);
    });

    socket.emit("getConversations", studentId);

    socket.on("conversationsList", (conversations) => {
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
      const handleNewMessage = (newMessage, conversation) => {
        setConversations((prev) =>
          prev.map((oldConversation) =>
            oldConversation._id === conversation._id
              ? { ...oldConversation, ...conversation }
              : oldConversation
          )
        );

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        scrollToBottom();
      };

      socket.on("receiveMessage", handleNewMessage);

      return () => {
        socket.off("receiveMessage", handleNewMessage);
      };
    }
  }, [currentConversationId, socket]);

  const sendMessage = useCallback(() => {
    if (message.trim() && currentConversationId) {
      const data = {
        conversationId: currentConversationId,
        senderId: studentId,
        senderType: "Student",
        message,
      };
      socket.emit("sendMessage", data);
      setTimeout(() => {
        socket.emit("getConversationMessages", currentConversationId);
        socket.emit("getConversations", studentId);
        socket.on("receiveMessage", (chatMessages, conversation) => {
          setConversations((prev) =>
            prev.map((oldConversation) =>
              oldConversation._id === conversation._id
                ? { ...oldConversation, ...conversation }
                : oldConversation
            )
          );
        });
      }, 500);
      setMessage("");
      scrollToBottom();
    }
  }, [message, currentConversationId, studentId, socket]);

  const handleCompanyClick = useCallback(
    async (companyId, company, conversation) => {
      if (companyId !== currentCompany?._id) {
        setSearchQuery("");
        scrollToBottom();
        setCurrentConversationId(conversation?._id);
        setCurrentCompany(company);
        setMessages([]);
        setShowOldMessages(false);
      }
      try {
        setLoadingMessages(true);
        socket.emit("getConversationMessages", conversation._id);

        socket.on("conversationMessages", (response) => {
          if (response) {
            setMessages(response);
            scrollToBottom();
          }
        });
      } catch (error) {
        console.error("Error fetching messages via socket:", error);
      } finally {
        setLoadingMessages(false);
      }
    },
    [currentCompany, socket]
  );

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Box className="flex overflow-hidden overflow-y-hidden min-h-full max-h-full bg-white shadow-lg rounded-lg">
      <LeftChat
        handleCompanyClick={handleCompanyClick}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        conversations={conversations}
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
        showOldMessages={showOldMessages}
      />
    </Box>
  );
};

export default ChatComponent;

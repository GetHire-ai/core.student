import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { GetApi } from "../utilis/Api_Calling";
import {
  Box,
  Button,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Socket connection
const socket = io("https://gethire-backend.onrender.com", {
  withCredentials: true,
});

// Styled components
const SearchInput = styled(InputBase)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const ChatComponent = () => {
  console.log( "chat component clicked")
  const studentId = localStorage.getItem("Studentid");
  const messagesEndRef = useRef(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [companies, setCompanies] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [currentCompany, setCurrentCompany] = useState(null);
  const [loadingCompanies, setLoadingCompanies] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [showOldMessages, setShowOldMessages] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState({});

  // Fetch companies
  const getCompanies = async () => {
    try {
      const response = await GetApi("api/adminroutes/GetAllCompany");
      setCompanies(response?.data?.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoadingCompanies(false);
    }
  };

  // Fetch messages
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
    getCompanies();
    socket.emit("userConnected", studentId);

    socket.on("userStatus", ({ userId, online }) => {
      setOnlineUsers((prevUsers) => ({
        ...prevUsers,
        [userId]: online,
      }));
    });

    return () => {
      socket.emit("userDisconnected");
      socket.off("userStatus");
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (currentConversationId) {
      socket.emit("joinConversation", currentConversationId);
      getMessages(currentConversationId);

      socket.on("receiveMessage", (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
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
      socket.emit("sendMessage", data);
      setMessage("");
    }
  };

  const handleCompanyClick = async (companyId, company) => {
    try {
      setSearchQuery("");
      const response = await GetApi(
        `api/chatroutes/conversation/${studentId}/${companyId}`
      );
      setCurrentConversationId(response?.data?.data?._id);
      setCurrentCompany(company);
      setMessages([]);
      setShowOldMessages(false);
    } catch (error) {
      console.error("Error fetching or creating conversation:", error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadOldMessages = () => {
    setShowOldMessages(false);
  };

  return (
    <Box className="flex overflow-hidden min-h-full max-h-full">
      <Box
        component="aside"
        className="w-1/4 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto"
      >
        <Typography variant="h6" gutterBottom>
          Companies
        </Typography>
        {loadingCompanies ? (
          <CircularProgress />
        ) : (
          <List>
            <ListItem>
              <SearchInput
                placeholder="Search by name or email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
            </ListItem>
            {companies
              .filter((company) =>
                company.Name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((company) => (
                <ListItem
                  key={company._id}
                  button
                  selected={company._id === currentCompany?._id}
                  onClick={() => handleCompanyClick(company._id, company)}
                >
                  <ListItemText
                    primary={company.Name}
                    secondary={onlineUsers[company._id] ? "Online" : "Offline"}
                  />
                </ListItem>
              ))}
          </List>
        )}
      </Box>
      <Box className="w-3/4 flex flex-col relative max-h-[86vh] overflow-hidden">
        {currentCompany && (
          <Box className="p-2 bg-blue-400 text-white text-lg font-semibold rounded-t flex flex-col">
            <Typography variant="h6">{currentCompany.Name}</Typography>
            <Typography variant="body2">{currentCompany.Email}</Typography>
          </Box>
        )}
        <Box
          className="flex-1 p-4 overflow-y-auto bg-gray-100"
          style={{ paddingBottom: "4rem" }}
        >
          {loadingMessages ? (
            <CircularProgress />
          ) : (
            <Box className="messages flex flex-col p-2">
              {showOldMessages && (
                <Button
                  onClick={loadOldMessages}
                  variant="text"
                  color="primary"
                  className="mb-2 self-center"
                >
                  Load older messages
                </Button>
              )}
              {messages.slice(-10).map((msg, index) => (
                <Box
                  key={index}
                  className={`p-2 my-2 rounded-lg inline-block max-w-xs ${
                    msg.senderId === studentId
                      ? "bg-blue-200 self-end text-right"
                      : "bg-gray-200 text-left self-start"
                  }`}
                >
                  <Typography variant="body1">{msg.message}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {new Date(msg.timestamp).toLocaleString()}
                  </Typography>
                </Box>
              ))}
              <div ref={messagesEndRef}></div>
            </Box>
          )}
        </Box>
        <Box className="absolute bottom-0 left-0 w-full flex p-4 bg-white border-t border-gray-300">
          <InputBase
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            fullWidth
            sx={{ padding: 1, borderRadius: 1, border: "1px solid #ccc" }}
          />
          <Button
            onClick={sendMessage}
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatComponent;

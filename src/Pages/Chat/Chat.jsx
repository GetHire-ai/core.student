import React, { useEffect, useState, useRef } from "react";
import { FaImage, FaPaperclip, FaSmile, FaRegFileImage } from "react-icons/fa";
import io from "socket.io-client";
import { GetApi } from "../utilis/Api_Calling";
import { IoIosSend } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Box,
  Button,
  InputBase,
  List,
  ListItem,
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
  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleGifClick = () => {
    gifInputRef.current.click();
  };

  const handleImageClick = () => {
    // Logic to open emoji picker
  };
  const handleEmojiClick = () => {
    // Logic to open emoji picker
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Logic to send file
  };
  // Refs for input elements
  const imageInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const gifInputRef = useRef(null);
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

  // Initialize the user ID
  const studentId = localStorage.getItem("Studentid");

  // Fetch companies
  const getCompanies = async () => {
    try {
      const response = await GetApi("api/adminroutes/GetAllCompany");
      const companiesData = response?.data?.data;

      // Sort companies by last message date
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

  // UseEffect hooks
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
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages, newMessage];
          // Update the last message date for the company
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
      const conversationId = response?.data?.data?._id;
      setCurrentConversationId(conversationId);
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

  const [activeTab, setActiveTab] = useState("Contacts");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectTab, setSelectTab] = useState("Other");
  const tabs = ["Contacts", "Unread", "My Connections", "Other"];
  const dropdownOptions = ["Focused", "Archived", "Spam"];

  const handleTabClick = (tab) => {
    if (tab === "Other") {
      setShowDropdown(!showDropdown);
    } else {
      setActiveTab(tab);
      setShowDropdown(false);
    }
  };

  return (
    <Box className="flex overflow-hidden overflow-y-hidden min-h-full max-h-full bg-white shadow-lg rounded-lg">
      <Box
        component="aside"
        className="w-[35%] bg-white border-r max-h-[600px] border-gray-300 p-4 overflow-y-scroll"
      >
        <Typography variant="h6" className="text-gray-800 font-semibold mb-4">
          <div className="w-full border-b border-gray-300 mb-4 relative">
            <nav className="flex justify-evenly">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`text-[15px] py-2 px-4 transition-colors duration-300 ${
                    activeTab === tab
                      ? "text-green-700 border-b-2 border-green-700 font-semibold"
                      : "text-gray-700 hover:text-green-700  "
                  }`}
                >
                  {tab === "Other" ? (
                    <div className="flex items-center cursor-pointer">
                      {selectTab} <MdKeyboardArrowDown size={20} />
                    </div>
                  ) : (
                    <div>{tab}</div>
                  )}
                </button>
              ))}
            </nav>
            {showDropdown && (
              <div className="absolute top-full left-[75%] mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {dropdownOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setActiveTab(option);
                      setSelectTab(option);
                      setShowDropdown(false);
                    }}
                    className="block w-full text-[14px] text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-700"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Typography>
        {loadingCompanies ? (
          <CircularProgress className="text-blue-900" />
        ) : (
          <List className="space-y-2">
            <ListItem className="pb-4">
              <SearchInput
                placeholder="Search by name or email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                inputProps={{ "aria-label": "search" }}
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </ListItem>
            {companies
              .filter((company) =>
                company.Name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((company) => {
                const lastMessage = messages
                  .filter((msg) => msg.conversationId === currentConversationId)
                  .slice(-1)[0];

                return (
                  <ListItem
                    key={company._id}
                    button
                    selected={company._id === currentCompany?._id}
                    onClick={() => handleCompanyClick(company._id, company)}
                    className={`flex items-center p-3 rounded-lg ${
                      company._id === currentCompany?._id
                        ? "bg-blue-50"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <img
                      src={
                        "https://static.vecteezy.com/system/resources/previews/009/383/461/non_2x/man-face-clipart-design-illustration-free-png.png" ||
                        "default-profile.png"
                      }
                      alt={company.Name}
                      className="w-8 h-8 mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <Typography
                          variant="body1"
                          className="text-gray-800 font-medium"
                        >
                          {company.Name}
                        </Typography>
                        <Typography variant="body2" className="text-gray-500">
                          {company.lastActiveDate || "08 Apr"}
                        </Typography>
                      </div>
                      <Typography variant="body2" className="text-gray-600">
                        {onlineUsers[company._id]
                          ? "Online"
                          : company.statusMessage || ""}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-gray-500 truncate"
                      >
                        {/* {lastMessage
                          ? `${lastMessage.senderId === studentId ? "You: " : ""}${lastMessage.message}`
                          : "No messages yet"} */}
                      </Typography>
                    </div>
                  </ListItem>
                );
              })}
          </List>
        )}
      </Box>

      <Box className="w-3/4 flex flex-col relative max-h-[86vh] overflow-hidden">
        {currentCompany && (
          <Box className="p-3 bg-blue-500 text-white text-lg font-semibold rounded-t-md">
            <Typography variant="h6">{currentCompany.Name}</Typography>
            <Typography variant="body2" className="text-blue-200">
              {currentCompany.Email}
            </Typography>
          </Box>
        )}
        <Box
          className="flex-1 p-6 overflow-y-auto bg-gray-50"
          style={{ paddingBottom: "4rem" }}
        >
          {loadingMessages ? (
            <CircularProgress className="text-blue-500" />
          ) : (
            <Box className="messages flex flex-col space-y-4 p-2">
              {showOldMessages && (
                <Button
                  onClick={loadOldMessages}
                  variant="text"
                  color="primary"
                  className="mb-2 self-center text-blue-500"
                >
                  Load older messages
                </Button>
              )}

              {Object.entries(
                messages.reduce((acc, msg) => {
                  const messageDate = new Date(
                    msg.timestamp
                  ).toLocaleDateString();
                  if (!acc[messageDate]) {
                    acc[messageDate] = [];
                  }
                  acc[messageDate].push(msg);
                  return acc;
                }, {})
              ).map(([date, msgs]) => (
                <React.Fragment key={date}>
                  <Typography
                    variant="subtitle2"
                    className="text-gray-500 text-center my-4"
                  >
                    {date}
                  </Typography>
                  {msgs.map((msg, index) => (
                    <Box
                      key={msg._id || index}
                      className={`flex items-start space-x-3 mb-2 ${msg.senderType === "Student" ? "justify-end" : ""}`}
                    >
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/009/383/461/non_2x/man-face-clipart-design-illustration-free-png.png"
                        alt={msg.senderName}
                        className="w-10 h-10 rounded-full"
                      />
                      <Box className="flex flex-col mb-2">
                        <Box className="flex items-center space-x-2">
                          <Typography variant="body2" className="font-semibold">
                            {msg.senderName}
                          </Typography>
                          {msg.pronouns && (
                            <Typography
                              variant="caption"
                              className="text-gray-500"
                            >
                              ({msg.pronouns})
                            </Typography>
                          )}
                          <Typography
                            variant="caption"
                            className="text-gray-500"
                          >
                            •{" "}
                            {new Date(msg.timestamp).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </Typography>
                        </Box>
                        <Box className="bg-gray-200 text-black p-3 rounded-lg mt-1">
                          <Typography variant="body2">{msg.message}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </React.Fragment>
              ))}
              <div ref={messagesEndRef}></div>
            </Box>
          )}
        </Box>
        <Box className="absolute bottom-0 left-0 w-full flex p-4 bg-white border-t border-gray-300">
          <input
            type="file"
            ref={imageInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <input
            type="file"
            ref={gifInputRef}
            style={{ display: "none" }}
            accept=".gif"
            onChange={handleFileChange}
          />

          <Button onClick={handleImageClick} className="ml-2">
            <FaImage size={24} />
          </Button>
          <Button onClick={handleFileClick} className="ml-2">
            <FaPaperclip size={24} />
          </Button>
          <Button onClick={handleGifClick} className="ml-2">
            <FaRegFileImage size={24} />
          </Button>
          <Button onClick={handleEmojiClick} className="ml-2">
            <FaSmile size={24} />
          </Button>

          <InputBase
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            fullWidth
            className="p-3 border border-gray-300 rounded-md"
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            onKeyDown={(e) => {
              if (e.shiftKey && e.key === "Enter") {
                setMessage(message + "\n");
              }
            }}
          />
          <Button
            onClick={sendMessage}
            variant="contained"
            color="primary"
            className="ml-2 bg-blue-500 hover:bg-blue-600"
          >
            <IoIosSend size={40} color="white" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatComponent;
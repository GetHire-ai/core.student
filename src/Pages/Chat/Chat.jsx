import React, { useEffect, useState, useRef } from "react";
// import { useState, useRef } from "react";
import { FaImage, FaPaperclip, FaSmile, FaRegFileImage } from 'react-icons/fa';
// import { InputBase, Typography } from '@mui/material';
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
 // Refs for input elements
 const imageInputRef = useRef(null);
 const fileInputRef = useRef(null);
 const gifInputRef = useRef(null);

//  Handlers for opening file pickers
 const handleImageClick = () => {
   imageInputRef.current.click();
 };

 const handleFileClick = () => {
   fileInputRef.current.click();
 };

 const handleGifClick = () => {
   gifInputRef.current.click();
 };

 const handleEmojiClick = () => {
   // Logic to open emoji picker
 };

 const handleFileChange = (e) => {
   const file = e.target.files[0];
   // Logic to send file
 };



//  ----------------------------------------------
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

  // ------------
  const [activeTab, setActiveTab] = useState('Contacts');
  const [showDropdown, setShowDropdown] = useState(false);
 const [selectTab , setSelectTab] = useState('Other');
  const tabs = ['Contacts', 'Unread', 'My Connections', 'Other'];
  const dropdownOptions = ['Focused', 'Archived', 'Spam'];

  const handleTabClick = (tab) => {
    if (tab === 'Other') {
      setShowDropdown(!showDropdown);
    } else {
      setActiveTab(tab);
      setShowDropdown(false);
    }
  };


  return (
    // <Box className="flex overflow-hidden min-h-full max-h-full">
    //   <Box
    //     component="aside"
    //     className="w-1/4 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto"
    //   >
    //     <Typography variant="h6" gutterBottom>
    //       Companies
    //     </Typography>
    //     {loadingCompanies ? (
    //       <CircularProgress />
    //     ) : (
    //       <List>
    //         <ListItem>
    //           <SearchInput
    //             placeholder="Search by name or email"
    //             value={searchQuery}
    //             onChange={(e) => setSearchQuery(e.target.value)}
    //             inputProps={{ "aria-label": "search" }}
    //           />
    //         </ListItem>
    //         {companies
    //           .filter((company) =>
    //             company.Name.toLowerCase().includes(searchQuery.toLowerCase())
    //           )
    //           .map((company) => (
    //             <ListItem
    //               key={company._id}
    //               button
    //               selected={company._id === currentCompany?._id}
    //               onClick={() => handleCompanyClick(company._id, company)}
    //             >
    //               <ListItemText
    //                 primary={company.Name}
    //                 secondary={onlineUsers[company._id] ? "Online" : "Offline"}
    //               />
    //             </ListItem>
    //           ))}
    //       </List>
    //     )}
    //   </Box>
    //   <Box className="w-3/4 flex flex-col relative max-h-[86vh] overflow-hidden">
    //     {currentCompany && (
    //       <Box className="p-2 bg-blue-400 text-white text-lg font-semibold rounded-t flex flex-col">
    //         <Typography variant="h6">{currentCompany.Name}</Typography>
    //         <Typography variant="body2">{currentCompany.Email}</Typography>
    //       </Box>
    //     )}
    //     <Box
    //       className="flex-1 p-4 overflow-y-auto bg-gray-100"
    //       style={{ paddingBottom: "4rem" }}
    //     >
    //       {loadingMessages ? (
    //         <CircularProgress />
    //       ) : (
    //         <Box className="messages flex flex-col p-2">
    //           {showOldMessages && (
    //             <Button
    //               onClick={loadOldMessages}
    //               variant="text"
    //               color="primary"
    //               className="mb-2 self-center"
    //             >
    //               Load older messages
    //             </Button>
    //           )}
    //           {messages.slice(-10).map((msg, index) => (
    //             <Box
    //               key={index}
    //               className={`p-2 my-2 rounded-lg inline-block max-w-xs ${
    //                 msg.senderId === studentId
    //                   ? "bg-blue-200 self-end text-right"
    //                   : "bg-gray-200 text-left self-start"
    //               }`}
    //             >
    //               <Typography variant="body1">{msg.message}</Typography>
    //               <Typography variant="caption" color="textSecondary">
    //                 {new Date(msg.timestamp).toLocaleString()}
    //               </Typography>
    //             </Box>
    //           ))}
    //           <div ref={messagesEndRef}></div>
    //         </Box>
    //       )}
    //     </Box>
    //     <Box className="absolute bottom-0 left-0 w-full flex p-4 bg-white border-t border-gray-300">
    //       <InputBase
    //         value={message}
    //         onChange={(e) => setMessage(e.target.value)}
    //         placeholder="Type a message..."
    //         fullWidth
    //         sx={{ padding: 1, borderRadius: 1, border: "1px solid #ccc" }}
    //       />
    //       <Button
    //         onClick={sendMessage}
    //         variant="contained"
    //         color="primary"
    //         sx={{ ml: 2 }}
    //       >
    //         Send
    //       </Button>
    //     </Box>
    //   </Box>
    // </Box>

    // <Box className="flex overflow-hidden overflow-y-hidden min-h-full max-h-full bg-white shadow-lg rounded-lg">
    //   <Box
    //     component="aside"
    //     className="w-1/4 bg-gray-50 border-r max-h-[600px] border-gray-300 p-4 overflow-y-scroll "
    //   >
    //     <Typography variant="h6" className="text-gray-800 font-semibold" gutterBottom>
    //       Companies
    //     </Typography>
    //     {loadingCompanies ? (
    //         <CircularProgress className="text-blue-900 " />
    //     ) : (
    //       <List className="space-y-2">
    //         <ListItem className="pb-4">
    //           <SearchInput
    //             placeholder="Search by name or email"
    //             value={searchQuery}
    //             onChange={(e) => setSearchQuery(e.target.value)}
    //             inputProps={{ "aria-label": "search" }}
    //             className="border border-gray-300 rounded-lg p-2 w-full"
    //           />
    //         </ListItem>
    //         {companies
    //           .filter((company) =>
    //             company.Name.toLowerCase().includes(searchQuery.toLowerCase())
    //           )
    //           .map((company) => (
    //             <ListItem
    //               key={company._id}
    //               button
    //               selected={company._id === currentCompany?._id}
    //               onClick={() => handleCompanyClick(company._id, company)}
    //               className={`p-3 rounded-lg ${
    //                 company._id === currentCompany?._id
    //                   ? "bg-blue-100"
    //                   : "hover:bg-gray-200"
    //               }`}
    //             >
    //               <ListItemText
    //                 primary={company.Name}
    //                 secondary={onlineUsers[company._id] ? "Online" : "Offline"}
    //                 className="text-gray-700"
    //               />
    //             </ListItem>
    //           ))}
    //       </List>
    //     )}
    //   </Box>

    // <Box className="w-3/4 flex  flex-col relative max-h-[86vh] overflow-hidden">
    //   {currentCompany && (
    //     <Box className="p-3 bg-blue-500 text-white text-lg font-semibold rounded-t-md">
    //       <Typography variant="h6">{currentCompany.Name}</Typography>
    //       <Typography variant="body2" className="text-blue-200">{currentCompany.Email}</Typography>
    //     </Box>
    //   )}
    //   <Box
    //     className="flex-1 p-6 overflow-y-auto bg-gray-50"
    //     style={{ paddingBottom: "4rem" }}
    //   >
    //     {loadingMessages ? (
    //       <CircularProgress className="text-blue-500" />
    //     ) : (
    //       <Box className="messages flex flex-col space-y-4 p-2">
    //         {showOldMessages && (
    //           <Button
    //             onClick={loadOldMessages}
    //             variant="text"
    //             color="primary"
    //             className="mb-2 self-center text-blue-500"
    //           >
    //             Load older messages
    //           </Button>
    //         )}
    //         {messages.slice(-10).map((msg, index) => (
    //           <Box
    //             key={index}
    //             className={`p-3 my-2 rounded-lg inline-block max-w-xs shadow-md ${
    //               msg.senderId === studentId
    //                 ? "bg-blue-100 self-end text-right"
    //                 : "bg-gray-200 text-left self-start"
    //             }`}
    //           >
    //             <Typography variant="body1">{msg.message}</Typography>
    //             <Typography variant="caption" className="text-gray-600">
    //               {new Date(msg.timestamp).toLocaleString()}
    //             </Typography>
    //           </Box>
    //         ))}
    //         <div ref={messagesEndRef}></div>
    //       </Box>
    //     )}
    //   </Box>
    //   <Box className="absolute bottom-0 left-0 w-full flex p-4 bg-white border-t border-gray-300">
    //     <InputBase
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //       placeholder="Type a message..."
    //       fullWidth
    //       className="p-3 border border-gray-300 rounded-md"
    //         onKeyPress={(e) => {
    //           if (e.key === 'Enter') {
    //             sendMessage();
    //           }
    //         }}
    //     />
    //     <Button
    //       onClick={sendMessage}
    //       variant="contained"
    //       color="primary"
    //       className="ml-2 bg-blue-500 hover:bg-blue-600"
    //     >
    //       Send
    //     </Button>
    //   </Box>

    // </Box>
    // </Box>

    <Box className="flex overflow-hidden overflow-y-hidden min-h-full max-h-full bg-white shadow-lg rounded-lg">

       {/* <Box
          component="aside"
          className="w-1/4 bg-white border-r max-h-[600px] border-gray-300 p-4 overflow-y-scroll"
        >
          <Typography variant="h6" className="text-gray-800 font-semibold mb-4">
            Contacts
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
                .map((company) => (
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
                      src={"https://static.vecteezy.com/system/resources/previews/009/383/461/non_2x/man-face-clipart-design-illustration-free-png.png" || "default-profile.png"}
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
                        <Typography
                          variant="body2"
                          className="text-gray-500"
                        >
                          {company.lastActiveDate || "08 Apr"}
                        </Typography>
                      </div>
                      <Typography
                        variant="body2"
                        className="text-gray-600"
                      >
                        {onlineUsers[company._id] ? "Online" : company.statusMessage || ""}
                      </Typography>
                    </div>
                  </ListItem>
                ))}
            </List>
          )}
        </Box> */}

      <Box
          component="aside"
          className="w-[35%] bg-white border-r max-h-[600px] border-gray-300 p-4 overflow-y-scroll"
        >
          {/* here you have to apply filter for each buttons */}
          <Typography variant="h6" className="text-gray-800 font-semibold mb-4">
           <div className="w-full border-b border-gray-300 mb-4 relative">
                <nav className="flex justify-evenly">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabClick(tab)}
                      className={`text-[15px] py-2 px-4 transition-colors duration-300 ${
                        activeTab === tab
                          ? 'text-green-700 border-b-2 border-green-700 font-semibold'
                          : 'text-gray-700 hover:text-green-700  '
                      }`}
                    >
                      {/* {tab} */}
                      {tab === "Other" ? <div className=" flex felx-row items-center  cursor-pointer"> {selectTab} <MdKeyboardArrowDown size={20}/> </div> : <div> {tab} </div> }
                    </button>
                  ))}
                </nav>

                {/* Dropdown for "Other" tab */}
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
                  // Get the last message for the current company
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
                          {lastMessage
                            ? `${lastMessage.senderId === studentId ? "You: " : ""}${
                                lastMessage.message
                              }`
                            : "No messages yet"}
                        </Typography>
                      </div>
                    </ListItem>
                  );
                })}
            </List>
          )}
     </Box>

     {/* <Box
        component="aside"
        className="w-1/4 bg-white border-r max-h-[600px] border-gray-300 p-4 overflow-y-scroll"
      >
        <Typography variant="h6" className="text-gray-800 font-semibold mb-4">
          Contacts
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
                // Filter messages by the company's conversation ID
                const lastMessage = messages
                  .filter((msg) => msg.conversationId === company.conversationId)
                  .slice(-1)[0]; // Get the last message

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
                        {lastMessage
                          ? `${lastMessage.senderId === studentId ? "You: " : ""}${
                              lastMessage.message
                            }`
                          : "No messages yet"}
                      </Typography>
                    </div>
                  </ListItem>
                );
              })}
          </List>
        )}
      </Box> */}








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
                    const messageDate = new Date(msg.timestamp).toLocaleDateString();
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
                        className="flex items-start space-x-3"
                      >
                        <img
                          // src={msg.senderAvatar}
                          src="https://static.vecteezy.com/system/resources/previews/009/383/461/non_2x/man-face-clipart-design-illustration-free-png.png"
                          alt={msg.senderName}
                          className="w-10 h-10 rounded-full"
                        />
                        <Box className="flex flex-col">
                          <Box className="flex items-center space-x-2">
                            <Typography variant="body2" className="font-semibold">
                              {msg.senderName}
                            </Typography>
                            {msg.pronouns && (
                              <Typography variant="caption" className="text-gray-500">
                                ({msg.pronouns})
                              </Typography>
                            )}
                            <Typography
                              variant="caption"
                              className="text-gray-500"
                            >
                              • {new Date(msg.timestamp).toLocaleTimeString([], {
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
              className="ml-2  bg-blue-500 hover:bg-blue-600"
            >
              <IoIosSend size={40} color="white" />
            </Button>
          </Box>
      </Box>
         {/* <Box className="w-3/4 flex flex-col relative max-h-[86vh] overflow-hidden">
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
              style={{ paddingBottom: '4rem' }}
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
                      const messageDate = new Date(msg.timestamp).toLocaleDateString();
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
                          className="flex items-start space-x-3"
                        >
                          <img
                            // src={msg.senderAvatar}
                            src="https://static.vecteezy.com/system/resources/previews/009/383/461/non_2x/man-face-clipart-design-illustration-free-png.png"
                            alt={msg.senderName}
                            className="w-10 h-10 rounded-full"
                          />
                          <Box className="flex flex-col">
                            <Box className="flex items-center space-x-2">
                              <Typography variant="body2" className="font-semibold">
                                {msg.senderName}
                              </Typography>
                              {msg.pronouns && (
                                <Typography variant="caption" className="text-gray-500">
                                  ({msg.pronouns})
                                </Typography>
                              )}
                              <Typography
                                variant="caption"
                                className="text-gray-500"
                              >
                                • {new Date(msg.timestamp).toLocaleTimeString([], {
                                  hour: '2-digit',
                                  minute: '2-digit',
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
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
              />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <input
                type="file"
                ref={gifInputRef}
                style={{ display: 'none' }}
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
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.shiftKey && e.key === 'Enter') {
                    setMessage(message + '\n');
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
          </Box> */}


      
      
    </Box>


     
  );
};

export default ChatComponent;

// {/* <Box
//         component="aside"
//         className="w-1/4 bg-gray-50 border-r max-h-[600px] border-gray-300 p-4 overflow-y-scroll"
//       >
//         <Typography variant="h6" className="text-gray-800 font-semibold" gutterBottom>
//           Companies
//         </Typography>
//         {loadingCompanies ? (
//           <CircularProgress className="text-blue-900" />
//         ) : (
//           <List className="space-y-2">
//             <ListItem className="pb-4">
//               <SearchInput
//                 placeholder="Search by name or email"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 inputProps={{ "aria-label": "search" }}
//                 className="border border-gray-300 rounded-lg p-2 w-full"
//               />
//             </ListItem>
//             {companies
//               .filter((company) =>
//                 company.Name.toLowerCase().includes(searchQuery.toLowerCase())
//               )
//               .map((company) => (
//                 <ListItem
//                   key={company._id}
//                   button
//                   selected={company._id === currentCompany?._id}
//                   onClick={() => handleCompanyClick(company._id, company)}
//                   className={`p-3 rounded-lg ${
//                     company._id === currentCompany?._id
//                       ? "bg-blue-100"
//                       : "hover:bg-gray-200"
//                   }`}
//                 >
//                   <ListItemText
//                     primary={company.Name}
//                     secondary={onlineUsers[company._id] ? "Online" : "Offline"}
//                     className="text-gray-700"
//                   />
//                 </ListItem>
//               ))}
//           </List>
//         )}
//       </Box> */}





// /*

// <Box className="w-3/4 flex flex-col relative max-h-[86vh] overflow-hidden">
//         {currentCompany && (
//           <Box className="p-3 bg-blue-500 text-white text-lg font-semibold rounded-t-md">
//             <Typography variant="h6">{currentCompany.Name}</Typography>
//             <Typography variant="body2" className="text-blue-200">
//               {currentCompany.Email}
//             </Typography>
//           </Box>
//         )}
//         <Box
//           className="flex-1 p-6 overflow-y-auto bg-gray-50"
//           style={{ paddingBottom: "4rem" }}
//         >
//           {loadingMessages ? (
//             <CircularProgress className="text-blue-500" />
//           ) : (
//             <Box className="messages flex flex-col space-y-4 p-2">
//               {showOldMessages && (
//                 <Button
//                   onClick={loadOldMessages}
//                   variant="text"
//                   color="primary"
//                   className="mb-2 self-center text-blue-500"
//                 >
//                   Load older messages
//                 </Button>
//               )}

//               {Object.entries(
//                 messages.reduce((acc, msg) => {
//                   const messageDate = new Date(msg.timestamp).toLocaleDateString();
//                   if (!acc[messageDate]) {
//                     acc[messageDate] = [];
//                   }
//                   acc[messageDate].push(msg);
//                   return acc;
//                 }, {})
//               ).map(([date, msgs]) => (
//                 <React.Fragment key={date}>
//                   <Typography
//                     variant="subtitle2"
//                     className="text-gray-500 text-center my-4"
//                   >
//                     {date}
//                   </Typography>
//                   {msgs.map((msg, index) => (
//                     <Box
//                       key={msg._id || index}
//                       className={`p-3 my-2 rounded-lg flex flex-col  max-w-xs  ${
//                         msg.senderId === studentId
//                           ? " self-end text-right"
//                           : "bg-gray-200 text-left self-start"
//                       }`}
//                     >
//                       {/* <Typography variant="body1 ">{msg.message}</Typography> */}
//                       <div class=" relative bg-purple-500 -mt-8 text-white p-3 rounded-lg inline-block max-w-xs">
//                       <div className="flex flex-row gap-5">
//                        <p class="text-sm">{msg.message}</p>
//                        <p className="text-[9px] mt-6">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
//                       </div>
//                      </div>
//                    {/* <Typography variant="caption" className="text-gray-600 ml-5"> */}
//                    {/* <div className="text-sm">
//                      {new Date(msg.timestamp).toLocaleTimeString()}
//                    </div> */}
//                    {/* </Typography> */}
//                  </Box>
                 
//                ))}
//              </React.Fragment>
//            ))}
//            <div ref={messagesEndRef}></div>
//          </Box>
//        )}
//      </Box>
//      <Box className="absolute bottom-0 left-0 w-full flex p-4 bg-white border-t border-gray-300">
//        <InputBase
//          value={message}
//          onChange={(e) => setMessage(e.target.value)}
//          placeholder="Type a message..."
//          fullWidth
//          className="p-3 border border-gray-300 rounded-md"
//          onKeyPress={(e) => {
//            if (e.key === 'Enter' && !e.shiftKey) {
//              // Prevents the default behavior of Enter key, which is to create a new line
//              e.preventDefault();
//              sendMessage();
//            }
//          }}
//          onKeyDown={(e) => {
//            if (e.shiftKey && e.key === 'Enter') {
//              // Allows the creation of a new line when Shift + Enter is pressed
//              setMessage(message + "\n");
//            }
//          }}
//        />
//        <Button
//          onClick={sendMessage}
//          variant="contained"
//          color="primary"
//          className="ml-2 bg-blue-500 hover:bg-blue-600"
//        >
//          <IoIosSend size={40}/>
//        </Button>
//      </Box>
//    </Box>









// */
import React, { useRef } from "react";
import { FaImage, FaPaperclip, FaSmile, FaRegFileImage } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import {
  Box,
  Button,
  InputBase,
  Typography,
  CircularProgress,
} from "@mui/material";

const RightChat = ({
  sendMessage,
  message,
  setMessage,
  messages,
  loadingMessages,
  messagesEndRef,
  currentCompany,
  loadOldMessages,
  showOldMessages,
}) => {
  const imageInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const gifInputRef = useRef(null);
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
    console.log(file);
  };
  return (
    <Box className="w-3/4 flex flex-col relative min-h-[90vh] max-h-[90vh] overflow-hidden">
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
                    className={`flex items-start space-x-3 mb-2 ${
                      msg.senderType === "Student" ? "justify-end" : ""
                    }`}
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
                        <Typography variant="caption" className="text-gray-500">
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
  );
};

export default RightChat;

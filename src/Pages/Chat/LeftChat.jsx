import React, { useState } from "react";
import {
  Box,
  InputBase,
  List,
  ListItem,
  Typography,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { MdKeyboardArrowDown } from "react-icons/md";

const SearchInput = styled(InputBase)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));
const LeftChat = ({
  handleCompanyClick,
  searchQuery,
  setSearchQuery,
  loadingCompanies,
  companies,
  messages,
  currentConversationId,
  currentCompany,
  onlineUsers,
}) => {
  const [selectTab, setSelectTab] = useState("Other");
  const tabs = ["Contacts", "Unread", "My Connections", "Other"];
  const dropdownOptions = ["Focused", "Archived", "Spam"];
  const [activeTab, setActiveTab] = useState("Contacts");
  const [showDropdown, setShowDropdown] = useState(false);
  const handleTabClick = (tab) => {
    if (tab === "Other") {
      setShowDropdown(!showDropdown);
    } else {
      setActiveTab(tab);
      setShowDropdown(false);
    }
  };
  return (
    <Box
      component="aside"
      className="w-[35%] bg-white border-r min-h-[90vh] max-h-[90vh] border-gray-300 p-4 overflow-y-scroll"
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
        <List className="space-y-2 ">
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
                      {onlineUsers[company._id] ? (
                        <span className="ml-2 text-green-500"> ●Online</span>
                      ) : (
                        company.statusMessage || ""
                      )}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-500 truncate"
                    ></Typography>
                  </div>
                </ListItem>
              );
            })}
        </List>
      )}
    </Box>
  );
};

export default LeftChat;

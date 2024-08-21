import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialog-paper": {
//     padding: theme.spacing(2),
//     borderRadius: 20,
//     boxShadow: theme.shadows[5],
//     minWidth: "30rem",
//     maxWidth: "90vw",
//     minHeight: "80vh",
//     position: "fixed",
//     right: 20,
//     bottom: 20,
//     display: "flex",
//     flexDirection: "column",
//   },
// }));


// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: theme.spacing(1),
//   borderBottom: `1px solid ${theme.palette.divider}`,
//   fontSize: "1rem",
//   backgroundColor: theme.palette.background.paper,
// }));


const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    padding: theme.spacing(3), // Increased padding for better spacing
    borderRadius: 25, // Slightly more rounded corners
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Softer shadow for a subtle 3D effect
    minWidth: "30rem",
    maxWidth: "90vw",
    minHeight: "80vh",
    position: "fixed",
    right: 20,
    bottom: 20,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff", // Clean white background
    border: `2px solid ${theme.palette.primary.main}`, // Border color matching the theme's primary color
    transition: "transform 0.3s ease-in-out", // Smooth open/close animation
    transform: "translateY(0)",

    "&:hover": {
      boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)", // Stronger shadow on hover
      transform: "translateY(-5px)", // Slight lift on hover
    },

    [theme.breakpoints.down("sm")]: {
      minWidth: "90vw", // Full width on small screens
      minHeight: "60vh", // Reduced height on small screens
      right: 10,
      bottom: 10,
      padding: theme.spacing(2),
    },
  },
}));
const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2), // Slightly increased padding for better spacing
  borderBottom: `2px solid ${theme.palette.primary.main}`, // Thicker border with the primary theme color
  fontSize: "1.2rem", // Slightly larger font size for emphasis
  fontWeight: "600", // Bolder font for the title
  backgroundColor: theme.palette.background.default, // Use a default background for a soft contrast
  color: theme.palette.text.primary, // Ensure text color aligns with the theme's primary text color

  "& .close-icon": {
    color: theme.palette.grey[500], // Subtle color for the close icon
    transition: "color 0.3s ease",

    "&:hover": {
      color: theme.palette.error.main, // Color change on hover for the close icon
    },
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem", // Adjust font size for smaller screens
    padding: theme.spacing(1), // Adjust padding for smaller screens
  },
}));




// const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
//   padding: theme.spacing(2),
//   flexGrow: 1,
//   overflowY: "auto",
// }));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3), // Increased padding for a more spacious layout
  flexGrow: 1,
  overflowY: "auto", // Ensures content remains scrollable
  backgroundColor: theme.palette.background.default, // Consistent background with the theme
  color: theme.palette.text.secondary, // Use a secondary text color for softer contrast
  borderRadius: "12px", // Slight rounding for a modern look

  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.light, // Scrollbar thumb in a lighter primary color
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: theme.palette.primary.main, // Darker on hover for better visibility
  },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2), // Adjust padding for smaller screens
    borderRadius: "8px", // Slightly reduce border radius on smaller screens
  },
}));



// const ChatContainer = styled(List)(({ theme }) => ({
//   padding: theme.spacing(1),
//   display: "flex",
//   flexDirection: "column",
// }));
const ChatContainer = styled(List)(({ theme }) => ({
  padding: theme.spacing(2), // Comfortable padding
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.paper, // Matches theme background
  boxShadow: theme.shadows[1], // Subtle shadow for a clean lifted effect
  borderRadius: "12px", // Rounded corners for a modern touch
  overflowY: "auto", // Handles overflow if content exceeds
  maxHeight: "80vh", // Limits height to prevent overflow

  // Spacing between chat items
  "& > * + *": {
    margin: theme.spacing(1),
  },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1), // Adjust padding for smaller screens
    borderRadius: "8px", // Slightly reduced border radius on smaller screens
    maxHeight: "70vh", // Adjust max height for smaller screens
  },
}));




// const MessageItem = styled(ListItem)(({ theme, type }) => ({
//   backgroundColor:
//     type === "user" ? theme.palette.primary.main : theme.palette.grey[300],
//   color:
//     type === "user"
//       ? theme.palette.primary.contrastText
//       : theme.palette.text.primary,
//   borderRadius: 20,
//   marginBottom: theme.spacing(1),
//   maxWidth: "70%",
//   alignSelf: type === "user" ? "flex-end" : "flex-start",
//   padding: "8px 12px",
//   wordBreak: "break-word",
//   position: "relative",
// }));
const MessageItem = styled(ListItem)(({ theme, type }) => ({
  backgroundColor:
    type === "user" ? theme.palette.primary.main : theme.palette.grey[200],
  color:
    type === "user"
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary,
  borderRadius: "15px", // Rounded corners for a softer look
  marginBottom: theme.spacing(1.5), // Increased spacing between messages
  maxWidth: "70%",
  alignSelf: type === "user" ? "flex-end" : "flex-start",
  padding: theme.spacing(1, 2), // More consistent padding
  wordBreak: "break-word",
  position: "relative",
  boxShadow: theme.shadows[2], // Add a subtle shadow for depth
  display: "flex",
  alignItems: "center", // Center content vertically
  justifyContent: "center", // Center content horizontally
  fontSize: "0.875rem", // Slightly smaller font size for better readability
  lineHeight: "1.4", // Increased line height for better readability

  // Optional: add a slight hover effect
  "&:hover": {
    backgroundColor:
      type === "user" ? theme.palette.primary.dark : theme.palette.grey[300],
    cursor: "pointer",
  },

  // Optional: add a responsive design tweak
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%", // Ensure the message takes up more space on smaller screens
    padding: theme.spacing(1), // Adjust padding for smaller screens
  },
}));




const JobApplyModelChat = ({
  onOpen,
  onClose,
  onSubmit,
  setEducationDetails,
}) => {
  const [step, setStep] = useState(0);
  const [qualification, setQualification] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [company, setCompany] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const addBotMessage = (message) => {
    setChatHistory((prev) => [...prev, { type: "bot", message }]);
  };

  const addUserMessage = (message) => {
    setChatHistory((prev) => [...prev, { type: "user", message }]);
  };

  const logAnswersAndClose = () => {
    setEducationDetails({
      qualification,
      skills: selectedSkills,
      experience,
      company,
      yearsOfExperience,
    });
    onSubmit();
  };

  const handleNext = () => {
    setIsInputDisabled(true);
    switch (step) {
      case 0:
        addUserMessage(qualification);
        setStep(step + 1);
        setTimeout(() => {
          addBotMessage("Please select your skills.");
          setIsInputDisabled(false);
        }, 500);
        break;
      case 1:
        addUserMessage(selectedSkills.join(", "));
        setStep(step + 1);
        setTimeout(() => {
          addBotMessage("Do you have any work experience?");
          setIsInputDisabled(false);
        }, 500);
        break;
      case 2:
        addUserMessage(experience);
        if (experience === "Experienced") {
          setStep(step + 1);
          setTimeout(() => {
            addBotMessage(
              "Please provide your company name and years of experience."
            );
            setIsInputDisabled(false);
          }, 500);
        } else {
          logAnswersAndClose();
        }
        break;
      case 3:
        addUserMessage(
          `Company: ${company}, Years of Experience: ${yearsOfExperience}`
        );
        logAnswersAndClose();
        break;
      default:
        setIsInputDisabled(false);
        break;
    }
  };

  const renderInput = () => {
    switch (step) {
      case 0:
        return (
          <Autocomplete
            options={["10th", "12th", "Graduate", "Post Graduate", "PhD"]}
            value={qualification}
            onChange={(event, newValue) => setQualification(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Highest Qualification"
                disabled={isInputDisabled}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && qualification) {
                    handleNext();
                  }
                }}
              />
            )}
           className="sticky bottom-0 z-10 bg-white p-2 mt-44"
          />
        );
      case 1:
        return (
          <Autocomplete
            multiple
            options={[
              "JavaScript",
              "Python",
              "React",
              "Node.js",
              "Java",
              "C++",
            ]}
            value={selectedSkills}
            onChange={(event, newValue) => setSelectedSkills(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Skills"
                disabled={isInputDisabled}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && selectedSkills.length > 0) {
                    handleNext();
                  }
                }}
              />
            )}
            className="sticky bottom-0 z-10 bg-white p-2 mt-44"
          />
        );
      case 2:
        return (
          <Autocomplete
            options={["Fresher", "Experienced"]}
            value={experience}
            onChange={(event, newValue) => setExperience(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Experience"
                disabled={isInputDisabled}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && experience) {
                    handleNext();
                  }
                }}
              />
            )}
            className="sticky bottom-0 z-10 bg-white p-2 mt-44"
          />
        );
      case 3:
        return (
          <>
            <TextField
              label="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              fullWidth
              disabled={isInputDisabled}
              onKeyPress={(e) => {
                if (e.key === "Enter" && company && yearsOfExperience) {
                  handleNext();
                }
              }}
              className="sticky bottom-0 z-10 bg-white p-2 mt-44"
            />
            <TextField
              label="Years of Experience"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
              type="number"
              fullWidth
              disabled={isInputDisabled}
              onKeyPress={(e) => {
                if (e.key === "Enter" && company && yearsOfExperience) {
                  handleNext();
                }
              }}
            className="sticky bottom-0 z-10 bg-white p-2 mt-44"
            />
          </>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (step === 0) addBotMessage("What is your highest qualification?");
  }, [step]);

  return (
    <StyledDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={onOpen}
    >
      <StyledDialogTitle>
        Job Application Chat
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <StyledDialogContent>
        <ChatContainer>
          {chatHistory.map((chat, index) => (
            <MessageItem key={index} type={chat.type}>
              <ListItemText primary={chat.message} />
            </MessageItem>
          ))}
        </ChatContainer>
        {renderInput()}
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default JobApplyModelChat;

import React, { useState, useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import { GetApi } from "../utilis/Api_Calling";
import { Link, Navigate, useNavigate } from "react-router-dom";

const noticePeriodOptions = ["15 Days", "30 Days", "2 Months", "3 Months"];

const JobApplyModelChat = ({ onOpen, onClose, onSubmit, job }) => {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState([]);
  const [resumePreview, setResumePreview] = useState(""); // New state for resume preview
  const [isTyping, setIsTyping] = useState(false);
  const [progress, setProgress] = useState(10);
  const progressRef = useRef(0);
  const [Loading, setLoading] = useState(true);
  const [studentprofile, setstudentprofile] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [resumeFile, setResumeFile] = useState(null); // New state for resume file

  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedResume = studentprofile?.aiResumes?.find(
      (resume) => resume?._id === selectedValue
    );

    if (selectedValue === "add_resume") {
      navigate("/blank/ai-tools/resume-builder");
    } else {
      setSelectedValue(event.target.value);
      setResumePreview(selectedResume?.jobTitle || ""); // Set job title as preview
      handleNextStep();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Check file size (max 3MB) and type (only PDF)
    if (
      file &&
      file.size <= 3 * 1024 * 1024 &&
      file.type === "application/pdf"
    ) {
      setResumeFile(file);
      setResumePreview(URL.createObjectURL(file)); // Use URL.createObjectURL to display the PDF
      handleNextStep();
    } else {
      alert("Please upload a valid PDF file of size less than 3MB."); // Alert for invalid file
    }
  };

  const Getstudentprofile = async () => {
    setLoading(true);
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setstudentprofile(Getjobdata?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const handleNextStep = (response) => {
    setIsTyping(true);

    setTimeout(() => {
      const newResponses = [
        ...responses,
        { question: getQuestionText(), answer: response },
      ];
      setResponses(newResponses);
      setIsTyping(false);

      if (step < 4) {
        setStep(step + 1);
      } else {
        setStep(step + 1);
      }
    }, 300);
  };

  const getQuestionText = () => {
    if (step === 0)
      return `This job requires a minimum education level of ${job.minEducation}. Do you meet this requirement?`;
    if (step === 1)
      return `This job requires ${job.expRequired} years of experience. Do you have this experience?`;
    if (step === 2) return "What is your notice period?";
  };

  const checkRequirements = () => {
    const educationMet = responses[0]?.answer === "Yes";
    const experienceMet = responses[1]?.answer === "Yes";
    const noticePeriodMet = responses[2]?.answer === job?.noticePeriod;

    return { educationMet, experienceMet, noticePeriodMet };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          return 0;
        }
        return Math.min(prevProgress + 10, 100);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog
      open={onOpen}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          position: "fixed",
          top: "10%",
          right: 20,
          margin: 0,
          borderRadius: "10px",
          width: "400px",
          minHeight: "80vh",
          overflowY: "auto",
        },
      }}
    >
      <DialogTitle>
        Quick Job Apply
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection="column" gap={2}>
          {responses.map((response, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="start"
            >
              <Box sx={{ maxWidth: "100%", textAlign: "left" }}>
                <p>{response.question}</p>
              </Box>
              <Chip
                label={response.answer}
                color="primary"
                sx={{ alignSelf: "flex-end", mt: 1 }}
              />
            </Box>
          ))}

          {isTyping && (
            <Box display="flex" justifyContent="flex-end" mt={1}>
              <Box sx={{ width: "100%" }}>
                <LinearProgress value={progress} />
              </Box>
            </Box>
          )}

          {!isTyping && step === 0 && (
            <FormControl component="fieldset" sx={{ alignItems: "flex-end" }}>
              <FormLabel component="legend" sx={{ textAlign: "left" }}>
                {`This job requires a minimum education level of ${job.minEducation}. Do you meet this requirement?`}
              </FormLabel>
              <RadioGroup
                row
                sx={{ justifyContent: "flex-end" }}
                onChange={(e) => handleNextStep(e.target.value)}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          )}

          {!isTyping && step === 1 && (
            <FormControl component="fieldset" sx={{ alignItems: "flex-end" }}>
              <FormLabel component="legend" sx={{ textAlign: "left" }}>
                {`This job requires ${job.expRequired} years of experience. Do you have this experience?`}
              </FormLabel>
              <RadioGroup
                row
                sx={{ justifyContent: "flex-end" }}
                onChange={(e) => handleNextStep(e.target.value)}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          )}

          {!isTyping && step === 2 && (
            <Box>
              <FormLabel component="legend" sx={{ textAlign: "start" }}>
                What is your notice period?
              </FormLabel>
              <div className="flex flex-wrap w-full">
                {noticePeriodOptions.map((option) => (
                  <Chip
                    key={option}
                    label={`${option} or less`}
                    clickable
                    onClick={() => handleNextStep(option)}
                    color="primary"
                    sx={{ mt: 1 }}
                  />
                ))}
                <Chip
                  label="More Than 3 Months"
                  clickable
                  onClick={() => handleNextStep("More Than 3 Months")}
                  color="primary"
                  sx={{ mt: 1 }}
                />
              </div>
            </Box>
          )}

          {!isTyping && step === 3 && (
            <Box>
              <FormLabel component="legend" sx={{ textAlign: "start" }}>
                Kindly Select Resume or Upload a New One
              </FormLabel>
              <div className="flex flex-wrap w-full">
                <FormControl fullWidth>
                  <InputLabel id="select-label">Select Item</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Select Item"
                  >
                    {studentprofile?.aiResumes?.map((resume) => (
                      <MenuItem key={resume?._id} value={resume?._id}>
                        {resume?.jobTitle}
                      </MenuItem>
                    ))}
                    <MenuItem value="add_resume">Add Resume</MenuItem>
                  </Select>
                </FormControl>

                {/* Upload resume option */}
                <Box mt={2}>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                </Box>

                {/* Display resume preview */}
                <Box mt={2}>
                  {resumePreview ? (
                    <iframe
                      src={resumePreview}
                      width="100%"
                      height="400px"
                      title="Resume Preview"
                    />
                  ) : (
                    <p>
                      <strong>Selected Resume:</strong> No resume selected
                    </p>
                  )}
                </Box>
              </div>
            </Box>
          )}

          {!isTyping && step === 4 && (
            <Box>
              <FormLabel component="legend" sx={{ textAlign: "start" }}>
                Review your responses:
              </FormLabel>
              {!checkRequirements().educationMet ||
              !checkRequirements().experienceMet ||
              !checkRequirements().noticePeriodMet ? (
                <Box mt={2} sx={{ color: "red" }}>
                  <Alert severity="warning" color="error" borderRadius="10">
                    You have indicated that you do not meet some of the job
                    requirements. Do you still want to apply?
                  </Alert>
                </Box>
              ) : null}

              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    let data = {
                      minEducation: responses[0].answer === "Yes",
                      expRequired: responses[1].answer === "Yes",
                      noticePeriod: responses[2].answer === job?.noticePeriod,
                      Resume: selectedValue,
                      resumeFile: resumeFile,
                    };
                    onSubmit(data);
                  }}
                >
                  Apply
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplyModelChat;

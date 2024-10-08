import React, { useEffect, useState, useRef } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  TextField,
} from "@mui/material";
import { GetApi, PostApi } from "../utilis/Api_Calling";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const tabOptions = ["Applied Jobs", "Interview", "Onboarding"];

const ApplicationManager = () => {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);
  const [allappiledjobs, setAllAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [studentprofile, setstudentprofile] = useState({});
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [hoveredModalIndex, setHoveredModalIndex] = useState(null);
  const [value, setValue] = useState(0);
  const [interviewModal, setInterviewModal] = useState(false);
  const [onboardingModal, setOnboardingModal] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [editing, setEditing] = useState(false); // To toggle edit mode
  const cardRefs = useRef([]);
  const timeoutRef = useRef(null);

  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setstudentprofile(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const Getallappiledjob = async () => {
    try {
      const res = await GetApi(`api/StudentRoutes/GetAllAppiledJobsofaStudent`);
      setAllAppliedJobs(res?.data?.data);
      setFilteredJobs(res?.data?.data);
      setSelectedJob(res?.data?.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
    Getallappiledjob();
  }, []);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHoveredCardIndex(index);
    setSelectedJob(allappiledjobs[index]);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSelectedJob(null);
      setHoveredCardIndex(null);
    }, 300);
  };

  const handleModalMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setHoveredModalIndex(hoveredCardIndex);
  };

  const handleModalMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSelectedJob(null);
      setHoveredCardIndex(null);
    }, 300);
  };

  useEffect(() => {
    setSelectedJob(null);
    if (allappiledjobs.length > 0) {
      if (tabOptions[value] === "Applied Jobs") {
        setFilteredJobs(allappiledjobs);
      } else if (tabOptions[value] === "Interview") {
        setFilteredJobs(
          allappiledjobs.filter(
            (job) =>
              job?.isinterviewScheduled &&
              !job?.isInterviewcompleted &&
              !job?.IsSelectedforjob
          )
        );
      } else if (tabOptions[value] === "Onboarding") {
        const filteredOnboardingJobs = allappiledjobs.filter(
          (job) => job?.status === "selected"
        );
        setFilteredJobs(filteredOnboardingJobs);
      }
    }
  }, [value]);

  const handleClick = (job, index) => {
    setSelectedJob(job);
    if (tabOptions[value] === "Interview") {
      setInterviewModal(true);
      setSelectedInterview(job);
    } else if (tabOptions[value] === "Onboarding") {
      setOnboardingModal(true);
    } else {
      navigate(`/blank/allrounds/${job?.JobId?._id}`);
    }
  };

  const handleReschedule = async (id) => {
    try {
      const data = {
        date: newDate,
        Time: newTime,
      };
      let res = await PostApi(
        `api/studentroutes/interview/reschedule/${id}`,
        data
      );
      toast.success("Interview Rescheduled", { autoClose: 1000 });
      setEditing(false);
    } catch (error) {
      toast.error("Interview Rescheduled failed", { autoClose: 1000 });
      console.error(error.response);
    } finally {
      setInterviewModal(false);
    }
  };

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  // Get the current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  };

  return (
    <>
      <div className="relative pl-3 min-h-screen">
        <Box sx={{ width: "100%", marginY: 2 }}>
          <Tabs
            centered
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            aria-label="dynamic tabs example"
          >
            {tabOptions.map((option, index) => (
              <Tab key={index} label={option} />
            ))}
          </Tabs>
        </Box>
        <div className="grid grid-cols-4 gap-4">
          {Loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                minWidth: "100vw",
                minHeight: "30vh",
                alignItems: "center",
              }}
            >
              <CircularProgress size={40} color="primary" />
            </Box>
          ) : (
            <>
              {filteredJobs?.length === 0 && (
                <Box
                  sx={{
                    minWidth: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "300px",
                    textAlign: "center",
                    gap: 2,
                  }}
                >
                  <Typography variant="h6" color="textSecondary">
                    No {tabOptions[value]} Available
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/")}
                  >
                    Explore Now
                  </Button>
                </Box>
              )}
            </>
          )}

          {filteredJobs.map((job, index) => (
            <div
              key={index}
              onClick={() => handleClick(job, index)}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="bg-[#fff] p-[20px] max-h-[350px] max-w-[250px] rounded-[20px] shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
            >
              <div className="flex justify-between items-center gap-4">
                <p className="text-[16px] font-[700]">
                  {job.JobId.positionName}
                </p>
                <img
                  src="/images/material-symbols-light_share.svg"
                  alt="Share"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div className="flex gap-[5px] mt-[18px]">
                <p className="text-black text-opacity-[60%] text-[14px] font-[500]">
                  {job.CompanyId.Name}
                </p>
              </div>
              <div className="flex gap-[5px] mt-[20px]">
                <img
                  src="/images/carbon_location.svg"
                  className="w-[18px] h-[22px]"
                  alt="Location"
                />
                <p className="text-black text-opacity-[60%] text-[14px] font-[500]">
                  {job.JobId.location}
                </p>
              </div>
              <div className="flex mt-[20px] gap-4 justify-between items-center">
                <img
                  src={job.CompanyId.Image}
                  alt={job.CompanyId.Name}
                  className="w-[50px] h-[50px] rounded-[10px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={interviewModal}
        onClose={() => setInterviewModal(false)}
        aria-labelledby="interview-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="interview-dialog-title" textAlign={"center"}>
          Reschedule Interview
        </DialogTitle>
        <DialogContent>
          <Typography textAlign={"center"} gutterBottom>
            Current Interview Date: {selectedInterview?.interviewSchedule?.date}
            &nbsp;&nbsp;&nbsp; Current Time:{" "}
            {selectedInterview?.interviewSchedule?.Time}
          </Typography>

          {!editing ? (
            <Button onClick={() => setEditing(true)}>Edit Schedule</Button>
          ) : (
            <div className="w-full flex gap-1">
              <div className="w-1/2">
                <TextField
                  label="New Date"
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  inputProps={{ min: getTodayDate() }} // Disable past dates
                />
              </div>

              <div className="w-1/2">
                <TextField
                  label="New Time"
                  type="time"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  inputProps={{ min: getCurrentTime() }} // Disable past times
                />
              </div>
            </div>
          )}
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setInterviewModal(false)}
            color="secondary"
            variant="outlined"
          >
            Cancel
          </Button>
          {editing && (
            <Button
              onClick={() => handleReschedule(selectedInterview._id)}
              color="primary"
              variant="contained"
            >
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ApplicationManager;

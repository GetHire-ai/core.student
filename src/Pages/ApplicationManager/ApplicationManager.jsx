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
} from "@mui/material";
import "react-circular-progressbar/dist/styles.css";
import { GetApi } from "../utilis/Api_Calling";
import { useNavigate } from "react-router-dom";

const tabOptions = ["Applied Jobs", "Interview", "Onboarding"];

const ApplicationManager = () => {
  const navigate = useNavigate();
  const [AllJobs, setAllJobs] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [appiledjobs, setappiledjobs] = useState([]);
  const [allappiledjobs, setallappiledjobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [allinterview, setallinterview] = useState([]);
  const [allTestResults, setAllTestResults] = useState([]);
  const [studentprofile, setstudentprofile] = useState({});
  const [selectedJob, setSelectedJob] = useState(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [hoveredModalIndex, setHoveredModalIndex] = useState(null);
  const [value, setValue] = useState(0);
  const [interviewModal, setInterviewModal] = useState(false);
  const [onboardingModal, setOnboardingModal] = useState(false);

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

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const GetAllJobs = async () => {
    try {
      const Getjobdata = await GetApi(`api/AdminRoutes/GetAllJobs`);
      setAllJobs(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const Getallappiledjob = async () => {
    try {
      const res = await GetApi(`api/StudentRoutes/GetAllAppiledJobsofaStudent`);
      setallappiledjobs(res?.data?.data);
      setFilteredJobs(res?.data?.data);
      setSelectedJob(res?.data?.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllJobs();
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

  const getContainerStyle = (index) => {
    const card = cardRefs.current[index];
    if (!card) return {};

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = card;
    const containerWidth = 350;
    const containerHeight = 400; // Increase height to fit content

    let top = offsetTop + offsetHeight + 20; // Increased gap
    let left = offsetLeft + offsetWidth + 20; // Increased gap

    // Adjust left position if necessary
    const viewportWidth = window.innerWidth;
    const adjustedLeft =
      left + containerWidth > viewportWidth
        ? Math.max(left - containerWidth - 20, 0)
        : left;

    // Adjust top position if necessary
    const viewportHeight = window.innerHeight;
    const adjustedTop =
      top + containerHeight > viewportHeight
        ? Math.max(top - containerHeight - 20, 0)
        : top;

    return {
      top: adjustedTop,
      left: adjustedLeft,
      width: containerWidth,
      height: containerHeight,
      zIndex: 9999,
      position: "fixed",
      // overflow: 'auto',
      padding: "24px",
    };
  };

  useEffect(() => {
    setSelectedJob(null);
    if (allappiledjobs) {
      if (tabOptions[value] === "Applied Jobs") setFilteredJobs(allappiledjobs);
      if (tabOptions[value] === "Interview")
        setFilteredJobs(
          allappiledjobs?.filter(
            (job) =>
              job?.isInterviewScheduled === true &&
              job?.job?.isInterviewCompleted === false &&
              job?.IsSelectedforjob === false
          )
        );

      if (tabOptions[value] === "Onboarding")
        setFilteredJobs(
          allappiledjobs?.filter((job) => job?.status === "selected")
        );
    }
  }, [value, allappiledjobs]);

  const handleClick = (job, index) => {
    setSelectedJob(job);
    if (tabOptions[value] === "Interview") {
      setInterviewModal(true);
    } else if (tabOptions[value] === "Onboarding") {
      setOnboardingModal(true);
    } else {
      navigate(`/blank/allrounds/${job?.JobId?._id}`);
      console.log(job)
    }
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
        <DialogTitle id="interview-dialog-title">Interview Details</DialogTitle>
        <DialogContent>
          {/* Place the Interview details here */}
          <Typography variant="body1">
            Interview Date: {selectedJob?.job?.interviewDate}
          </Typography>
          <Typography variant="body1">
            Interview Time: {selectedJob?.job?.interviewTime}
          </Typography>
          {/* Add more details as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setInterviewModal(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={onboardingModal}
        onClose={() => setOnboardingModal(false)}
        aria-labelledby="onboarding-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="onboarding-dialog-title">
          Onboarding Details
        </DialogTitle>
        <DialogContent>
          {/* Place the Onboarding details here */}
          <Typography variant="body1">
            Onboarding Date: {selectedJob?.job?.onboardingDate}
          </Typography>
          <Typography variant="body1">
            Onboarding Location: {selectedJob?.job?.onboardingLocation}
          </Typography>
          {/* Add more details as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOnboardingModal(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ApplicationManager;

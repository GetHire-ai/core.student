import React, { useState } from "react";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { styled } from "@mui/system";
import ReSchedule from "./ReSchedule";

const CustomStepConnector = styled(StepConnector)({
  "& .MuiStepConnector-line": {
    borderColor: "#ccc",
    // borderWidth: 2,
  },
});

const InterviewJobs = ({
  allinterview,
  navigate,
  loading,
  Getallinterview,
}) => {
  const [interviewModal, setInterviewModal] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [editing, setEditing] = useState(false);

  const handleRescheduleClick = (interview) => {
    setSelectedInterview(interview); // Set the selected interview
    setInterviewModal(true); // Open the modal
  };

  const getStepDate = (app, step) => {
    switch (step) {
      case "applied":
        return app.appliedAt
          ? new Date(app.appliedAt).toLocaleDateString()
          : null;
      case "shortlisted":
        return app.shortlistedAt
          ? new Date(app.shortlistedAt).toLocaleDateString()
          : null;
      case "interview":
        return app.interviewSchedule?.date
          ? new Date(app.interviewSchedule.date).toLocaleDateString()
          : null;
      case "selected":
        return app.selectedAt
          ? new Date(app.selectedAt).toLocaleDateString()
          : null;
      case "rejected":
        return app.rejectedAt
          ? new Date(app.rejectedAt).toLocaleDateString()
          : null;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 w-full -mt-8">
      <div
        className="grid grid-cols-1 w-full gap-6 items-center mx-auto max-h-screen overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>
          {`
            ::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {allinterview.map((app) => (
          <div
            key={app?._id}
            className="bg-white shadow-lg rounded-lg p-4 w-full border"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-[15px] font-semibold">
                  {app?.JobId?.positionName}
                </h2>
                <p className="text-gray-500 text-[13px]">
                  {app?.CompanyId?.Name}
                </p>
              </div>
              <button
                onClick={() => navigate(`/blank/jobviewdetails/${app?.JobId?._id}`)}
                className="text-blue-600 border border-blue-600 rounded-full px-3 py-1 text-xs hover:bg-blue-50"
              >
                View Job
              </button>
            </div>

            <div className="mt-4">
              <div className="mt-1 bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                <h5 className="text-red-600 font-semibold">
                  Interview Details
                </h5>
                <p className="text-gray-600 text-sm">
                  Your {app?.interviewSchedule?.type} Interview is scheduled on{" "}
                  {app?.interviewSchedule?.date} at{" "}
                  {app?.interviewSchedule?.Time}
                </p>
                <div className="mt-2 flex space-x-3">
                  {app?.interviewSchedule?.canditateAccepted ? (
                    // <button className="text-green-600 text-sm">Accepted</button>
                    <></>
                  ) : (
                    <button className="text-blue-600 text-sm">Accept</button>
                  )}

                  <button
                    className="text-blue-600 text-sm"
                    onClick={() => handleRescheduleClick(app)}
                  >
                    Reschedule
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-1">
              <h3 className="text-[14px] font-medium">Application Status</h3>
              <Stepper
                activeStep={
                  app.status === "rejected"
                    ? 1
                    : [
                        "applied",
                        "shortlisted",
                        "interview",
                        "selected",
                        "rejected",
                      ].indexOf(app.status.toLowerCase())
                }
                orientation="vertical"
                connector={<CustomStepConnector />}
              >
                {app.status === "rejected"
                  ? ["applied", "rejected"].map((label, index) => (
                      <Step key={index}>
                        <StepLabel>
                          <span
                            style={{
                              color: label === "rejected" ? "red" : "inherit",
                              fontWeight:
                                label === "rejected" ? "bold" : "normal",
                            }}
                          >
                            {label.charAt(0).toUpperCase() + label.slice(1)}{" "}
                          </span>
                          {getStepDate(app, label) && (
                            <span
                              style={{
                                fontSize: "1em",
                                color: label === "rejected" ? "red" : "#995",
                              }}
                            >
                              ({getStepDate(app, label)})
                            </span>
                          )}
                        </StepLabel>
                      </Step>
                    ))
                  : ["applied", "shortlisted", "interview", "selected"].map(
                      (label, index) => (
                        <Step key={index}>
                          <StepLabel>
                            {label.charAt(0).toUpperCase() + label.slice(1)}{" "}
                            {getStepDate(app, label) && (
                              <span
                                style={{
                                  fontSize: "0.8em",
                                  color: "#999",
                                }}
                              >
                                ({getStepDate(app, label)})
                              </span>
                            )}
                          </StepLabel>
                        </Step>
                      )
                    )}
              </Stepper>
            </div>
          </div>
        ))}
      </div>
      <ReSchedule
        interviewModal={interviewModal}
        setInterviewModal={setInterviewModal}
        selectedInterview={selectedInterview}
        newDate={newDate}
        setNewDate={setNewDate}
        newTime={newTime}
        setNewTime={setNewTime}
        editing={editing}
        setEditing={setEditing}
        Getallinterview={Getallinterview}
      />
    </div>
  );
};

export default InterviewJobs;

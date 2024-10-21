import React from "react";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { styled } from "@mui/system";

const CustomStepConnector = styled(StepConnector)({
  "& .MuiStepConnector-line": {
    borderColor: "#ccc",
  },
});

const getStepDate = (step, selectedJob) => {
  switch (step) {
    case "applied":
      return selectedJob?.appliedAt
        ? new Date(selectedJob.appliedAt).toLocaleDateString()
        : null;
    case "shortlisted":
      return selectedJob?.shortlistedAt
        ? new Date(selectedJob.shortlistedAt).toLocaleDateString()
        : null;
    case "interview":
      return selectedJob?.interviewSchedule?.date
        ? new Date(selectedJob.interviewSchedule.date).toLocaleDateString()
        : null;
    case "selected":
      return selectedJob?.selectedAt
        ? new Date(selectedJob.selectedAt).toLocaleDateString()
        : null;
    case "rejected":
      return selectedJob?.rejectedAt
        ? new Date(selectedJob.rejectedAt).toLocaleDateString()
        : null;
    default:
      return null;
  }
};

const AppliedJobs = ({
  allappiledjobs,
  sectionRefs,
  handleJobClick,
  selectedJob,
  navigate,
}) => {
  if (!selectedJob) {
    return <div>No selected job to display.</div>;
  }

  return (
    <>
      {allappiledjobs?.length === 0 ? (
        <>No Applied Jobs!</>
      ) : (
        <>
          <div
            className="flex flex-col pl-7 gap-2 w-1/2 max-h-[calc(100vh-175px)] overflow-y-scroll"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {allappiledjobs.map((job, index) => (
              <div
                key={index}
                onClick={() => handleJobClick(job)}
                ref={sectionRefs.section2}
                id="section2"
                className="bg-[#fff] p-[14px] flex flex-col -ml-5 max-2xl:h-38 w-full max-lg:w-48 max-sm:w-36 max-sm:h-40 rounded-[20px] shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
              >
                {/* Job details card */}
                <div className="flex justify-between max-2xl:-mb-3 -mb-3 items-center gap-4 max-lg:gap-1 max-sm:gap-0">
                  <p className="text-[15px] max-2xl:text-[14px] max-sm:text-[16px] font-[400]">
                    {job.JobId.positionName}
                  </p>
                  <img
                    src="/images/material-symbols-light_share.svg"
                    alt="Share"
                    className="w-[17px] h-[17px] max-lg:w-[15px] max-lg:h-[15px]"
                  />
                </div>
                <div className="flex gap-[5px] max-2xl:-mb-4 -mb-4 mt-[18px] max-lg:gap-[6px]">
                  <p className="text-black text-opacity-[60%] text-[12px] max-lg:text-[11px] max-sm:text-[10px] font-[500]">
                    {job.CompanyId.Name}
                  </p>
                </div>
                <div className="flex gap-[5px] max-2xl:-mb-3 -mb-3 mt-[20px] max-lg:gap-[6px]">
                  <img
                    src="/images/carbon_location.svg"
                    className="w-[16px] h-[20px] max-lg:w-[15px] max-lg:h-[18px]"
                    alt="Location"
                  />
                  <p className="text-black text-opacity-[60%] text-[12px] max-lg:text-[11px] max-sm:text-[10px] font-[500]">
                    {job.JobId.location}
                  </p>
                </div>
                <div className="flex mt-[20px] gap-4 max-2xl:gap-1 max-sm:gap-2 justify-between">
                  <p className="text-black text-opacity-[60%] text-[12px] font-[500] max-lg:text-[13px] max-sm:text-[11px]">
                    {job.JobId.time}
                  </p>
                  <p
                    className={
                      job.status === "rejected"
                        ? "text-red-500 max-lg:text-[13px] text-[12px]"
                        : "text-blue-500 text-[11px] max-lg:text-[10px]"
                    }
                  >
                    {job.status}
                  </p>
                </div>
                {/* Show application dates */}
                <div className="mt-2">
                  {job.appliedAt && (
                    <p className="text-[10px] text-gray-500">
                      Applied on: {new Date(job.appliedAt).toLocaleDateString()}
                    </p>
                  )}
                  {job.rejectedAt && (
                    <p className="text-[10px] text-red-500">
                      Rejected on:{" "}
                      {new Date(job.rejectedAt).toLocaleDateString()}
                    </p>
                  )}
                  {job.selectedAt && (
                    <p className="text-[10px] text-green-500">
                      Selected on:{" "}
                      {new Date(job.selectedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-[#fff] p-[24px] rounded-[20px] shadow-xl border border-[#d9d9d9]">
            <div className="flex flex-row justify-between">
              <div>
                <h2 className="text-[17px] font-[500] max-lg:text-[16px] max-2xl:text-[16px]">
                  {selectedJob?.JobId?.positionName}
                </h2>
                <p className="text-[12px]">{selectedJob?.CompanyId?.Name}</p>
                <p className="text-[10px]">{selectedJob?.JobId?.location}</p>
              </div>
              <div>
                <button
                  className="bg-blue-600 p-3 text-[11px] h-9 flex items-center max-2xl:text-[10px] max-2xl:p-1 max-2xl:rounded-lg max-2xl:h-7 rounded-md shadow-lg text-white max-lg:p-2 hover:bg-blue-900 hover:shadow-2xl"
                  onClick={() =>
                    navigate(`/blank/JobViewDetails/${selectedJob?.JobId?._id}`)
                  }
                >
                  View Jobs
                </button>
              </div>
            </div>
            <hr className="border-t-2 border-gray-300 my-2" />
            <p className="text-[16px] max-2xl:text-[15px]">
              Application Status
            </p>
            <div className="ml-4 mt-4">
              <Stepper
                activeStep={
                  selectedJob?.status === "rejected"
                    ? 1
                    : [
                        "applied",
                        "shortlisted",
                        "video interview",
                        "interview",
                        "selected",
                        "rejected",
                      ].indexOf(selectedJob?.status.toLowerCase())
                }
                orientation="vertical"
                connector={<CustomStepConnector />}
              >
                {/* Display the steps */}
                {selectedJob?.status === "rejected"
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
                          {getStepDate(label, selectedJob) && (
                            <span
                              style={{
                                fontSize: "1em",
                                color: label === "rejected" ? "red" : "#995",
                              }}
                            >
                              ({getStepDate(label, selectedJob)})
                            </span>
                          )}
                        </StepLabel>
                      </Step>
                    ))
                  : [
                      "applied",
                      "shortlisted",
                      "video interview",
                      "interview",
                      "selected",
                    ].map((label, index) => (
                      <Step key={index}>
                        <StepLabel>
                          {label.charAt(0).toUpperCase() + label.slice(1)}{" "}
                          {getStepDate(label, selectedJob) && (
                            <>
                              <span
                                style={{ fontSize: "0.8em", color: "#999" }}
                              >
                                {label === "video interview" ? (
                                  <span>
                                    {selectedJob?.videoInterviewDate ? (
                                      <>
                                        {new Date(
                                          selectedJob.videoInterviewDate
                                        ).toLocaleDateString()}{" "}
                                        at{" "}
                                        {new Date(
                                          selectedJob.videoInterviewDate
                                        ).toLocaleTimeString()}
                                      </>
                                    ) : (
                                      <button
                                        className="mt-2 bg-blue-600 p-0.5 text-white text-sm rounded-md shadow-md hover:bg-blue-700"
                                        onClick={() =>
                                          navigate(
                                            `/blank/ScheduleVideoInterview/${selectedJob?.JobId?._id}`
                                          )
                                        }
                                      >
                                        Start
                                      </button>
                                    )}
                                  </span>
                                ) : (
                                  <>({getStepDate(label, selectedJob)})</>
                                )}
                              </span>
                            </>
                          )}
                        </StepLabel>
                        {/* Add conditional logic for the video interview step */}
                        {label === "video interview" && (
                          <>
                            {selectedJob?.videoInterviewDate ? (
                              <span
                                style={{ fontSize: "0.8em", color: "#999" }}
                              >
                                {new Date(
                                  selectedJob.videoInterviewDate
                                ).toLocaleDateString()}{" "}
                                at{" "}
                                {new Date(
                                  selectedJob.videoInterviewDate
                                ).toLocaleTimeString()}
                              </span>
                            ) : (
                              <button
                                className="mt-2 bg-blue-600 p-0.5 text-white text-sm rounded-md shadow-md hover:bg-blue-700"
                                onClick={() =>
                                  navigate(
                                    `/blank/ScheduleVideoInterview/${selectedJob?.JobId?._id}`
                                  )
                                }
                              >
                                Start
                              </button>
                            )}
                          </>
                        )}
                      </Step>
                    ))}
              </Stepper>
            </div>
            <div className="flex items-center mt-5">
              <div>
                <div className="ml-1 mt-2">
                  <p className="text-[15px]">{selectedJob?.status}</p>
                  <br />
                  <hr />
                  <p className="font-extralight text-[13px]">
                    Your application would be shown on the priority list to the
                    recruiter.
                  </p>
                  <div className="flex flex-row gap-6 mt-2">
                    <button className="hover:text-blue-500 text-[14px] hover:scale-105 duration-300">
                      Continue
                    </button>
                    <button className="text-red-400 hover:scale-105 text-sm duration-300">
                      Explore similar jobs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppliedJobs;

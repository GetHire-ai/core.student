import React from "react";
const applicationData = [
  {
    id: 1,
    jobTitle: "Human Resource Intern",
    company: "GoodSpace",
    status: [
      {
        stage: "Applied",
        passed: true,
        date: "26 Jul, 2024",
        feedback: "Shortlisted",
      },
      {
        stage: "AI Interview",
        passed: false,
        date: "26 Jul, 2024",
        feedback: "...Pending",
      },
      { stage: "Recruiter viewed your application", passed: true },
    ],
  },
  {
    id: 2,
    jobTitle: "Software Developer Intern",
    company: "TechStart",
    status: [
      {
        stage: "Applied",
        passed: true,
        date: "20 Jul, 2024",
        feedback: "Shortlisted",
      },
      {
        stage: "Technical Interview",
        passed: true,
        date: "22 Jul, 2024",
        feedback: "Passed",
      },
      {
        stage: "Final Interview",
        passed: false,
        date: "25 Jul, 2024",
        feedback: "...Pending",
      },
    ],
  },
  {
    id: 3,
    jobTitle: "Marketing Intern",
    company: "BrandBoost",
    status: [
      {
        stage: "Applied",
        passed: true,
        date: "15 Jul, 2024",
        feedback: "Shortlisted",
      },
      {
        stage: "HR Interview",
        passed: true,
        date: "18 Jul, 2024",
        feedback: "Passed",
      },
      {
        stage: "Offer Sent",
        passed: false,
        date: "20 Jul, 2024",
        feedback: "...Pending",
      },
    ],
  },
  {
    id: 4,
    jobTitle: "Finance Analyst Intern",
    company: "WealthManage",
    status: [
      {
        stage: "Applied",
        passed: true,
        date: "10 Jul, 2024",
        feedback: "Shortlisted",
      },
      {
        stage: "Assessment",
        passed: true,
        date: "12 Jul, 2024",
        feedback: "Passed",
      },
      {
        stage: "HR Interview",
        passed: false,
        date: "15 Jul, 2024",
        feedback: "...Pending",
      },
    ],
  },
  {
    id: 5,
    jobTitle: "Content Writer Intern",
    company: "WriteUp",
    status: [
      {
        stage: "Applied",
        passed: true,
        date: "28 Jun, 2024",
        feedback: "Shortlisted",
      },
      {
        stage: "Writing Test",
        passed: true,
        date: "30 Jun, 2024",
        feedback: "Passed",
      },
      {
        stage: "Interview",
        passed: false,
        date: "02 Jul, 2024",
        feedback: "...Pending",
      },
    ],
  },
];

const InterviewJobs = ({ allinterview, navigate, loading }) => {
  return (
    <div className="p-4 w-full  -mt-8">
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

        {applicationData.map((app) => (
          <div
            key={app.id}
            className="bg-white shadow-lg rounded-lg p-4 w-full border w-3/4"
          >
            {/* Job Title and Company */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-[15px] font-semibold">{app.jobTitle}</h2>
                <p className="text-gray-500 text-[13px]">{app.company}</p>
              </div>
              <button
                onClick={() =>
                  navigate(`/blank/${app.jobTitle.replace(/\s+/g, "")}`)
                }
                className="text-blue-600 border border-blue-600 rounded-full px-3 py-1 text-xs hover:bg-blue-50"
              >
                View Job
              </button>
            </div>

            {/* Application Status */}
            <div className="mt-1">
              <h3 className="text-[14px] font-medium">Application Status</h3>
              <div className="mt-2 space-y-4">
                {app.status.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 ">
                    <div className="flex-shrink-0 flex flex-col items-center -mb-3">
                      <div
                        className={`w-3 h-3 ${
                          item.passed
                            ? "bg-blue-600"
                            : "bg-white border border-gray-400"
                        } rounded-full`}
                      ></div>
                      {index < app.status.length - 1 && (
                        <div className="w-px h-10 bg-gray-300"></div>
                      )}
                    </div>
                    <div className="flex-grow -mb-3">
                      <h4 className="text-sm font-medium">{item.stage}</h4>
                      {item.feedback && (
                        <p
                          className={`text-xs ${
                            item.passed ? "text-green-600" : "text-gray-500"
                          }`}
                        >
                          {item.feedback}
                        </p>
                      )}
                      {item.date && (
                        <p className="text-gray-500 text-xs">On {item.date}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Product */}
            <div className="mt-4">
              <h4 className="text-md font-medium">Our Suggested Product</h4>
              <div className="mt-1 bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                <h5 className="text-red-600 font-semibold">Profile Boost</h5>
                <p className="text-gray-500 text-xs">
                  Your application would be shown on priority list to the
                  recruiters.
                </p>
                <div className="mt-2 flex space-x-3">
                  <button className="text-blue-600 text-xs">Buy Now</button>
                  <button className="text-blue-600 text-xs">Explore</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewJobs;

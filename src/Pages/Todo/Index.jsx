import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetApi } from "../utilis/Api_Calling";

const Index = () => {
  const navigate = useNavigate();
  const [allInterviews, setAllInterviews] = useState([]);
  const [allAppliedJobs, setAllAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allTestResults, setAllTestResults] = useState([]);

  const getAllInterviews = async () => {
    try {
      const data = await GetApi(
        `api/StudentRoutes/GetAllJobinterviewofaStudent`
      );
      setAllInterviews(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllAppliedJobs = async () => {
    try {
      const getBookmark = await GetApi(
        `api/StudentRoutes/GetAllAppiledJobsofaStudent`
      );
      setAllAppliedJobs(getBookmark?.data?.data);
      console.log(getBookmark.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getAllTestResults = async () => {
    let id = localStorage.getItem("Studentid");
    try {
      const res = await GetApi(`api/testRoutes/result/multiid/${id}`);
      setAllTestResults(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllInterviews();
    getAllAppliedJobs();
    getAllTestResults();
  }, []);

  const hasTakenTest = (jobId) => {
    return allTestResults.some((test) => test.job === jobId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1382b2]">
        All Interview Jobs
      </h2>
      {allAppliedJobs.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-[#1382b2] text-white">
              <tr>
                <th className="py-3 px-6 text-left border-b border-gray-200 font-semibold ">
                  Company Name
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200 font-semibold ">
                  Position
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200 font-semibold ">
                  Years of Experience
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200 font-semibold ">
                  Skill Assessment
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200 font-semibold ">
                  Video Interview
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200 font-semibold ">
                  Interview Scheduled
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-200 font-semibold ">
                  Interview Schedule Details
                </th>
              </tr>
            </thead>
            <tbody>
              {allAppliedJobs.map((data) => (
                <tr
                  key={data._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{data.CompanyId.Name}</td>
                  <td className="py-3 px-6">{data.JobId.positionName}</td>
                  <td className="py-3 px-6">
                    {data.JobId.minExp}-{data.JobId.maxExp} Years
                  </td>
                  <td className="py-3 px-6">
                    {data.assessment.map((round) => (
                      <span key={round.Round}>
                        {round.Round === "Skill Assessment"
                          ? "Completed"
                          : "Pending"}
                      </span>
                    ))}
                  </td>
                  <td className="py-3 px-6">
                    {data.assessment.map((round) => (
                      <span key={round.Round}>
                        {round.Round === "AI Video" ? "Completed" : "Pending"}
                      </span>
                    ))}
                  </td>
                  <td className="py-3 px-6">
                    {data.interviewSchedule ? "Yes" : "No"}
                  </td>
                  <td className="py-3 px-6">
                    {data.interviewSchedule
                      ? `${data.interviewSchedule.date} - ${data.interviewSchedule.Time}`
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 mt-4">No applied jobs found.</p>
      )}
    </div>
  );
};

export default Index;

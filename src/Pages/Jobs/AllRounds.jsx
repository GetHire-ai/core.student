import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GetApi } from "../utilis/Api_Calling";

const AllRounds = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const [allTestResults, setAllTestResults] = useState([]);
  const [allAiTest, setAllAiTest] = useState(null);

  const GetAllJobs = async () => {
    try {
      const Getjobdata = await GetApi(`api/AdminRoutes/GetAJobs/${id}`);
      setJob(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const GetAllTest = async () => {
    let studentId = localStorage.getItem("Studentid");
    try {
      const res = await GetApi(`api/testRoutes/result/multiid/${studentId}`);
      setAllTestResults(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllAiTest = async (id) => {
    let studentId = localStorage.getItem("Studentid");
    try {
      const res = await GetApi(
        `api/testRoutes/result/aitestresult/bystudentid/${studentId}/${id}`
      );
      setAllAiTest(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllJobs();
    GetAllTest();
  }, []);

  useEffect(() => {
    if (job) {
      GetAllAiTest(id);
    }
  }, [job]);

  const hasTakenTest = (jobId) => {
    return allTestResults.some((test) => test.job === jobId);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="p-8 pt-2 font-Outfit flex flex-col justify-center items-center w-full">
          <div className="w-full flex justify-start items-center ">
            <p className="text-lg text-gray-500">
              <Link to="/">Home</Link> &gt; <Link to="/jobs">Jobs</Link>
            </p>
          </div>
          <div className="w-full flex justify-center items-center mb-5">
            <p className="text-2xl font-medium">Job Details</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="bg-white w-full rounded-lg flex flex-col items-start p-6 border border-gray-300 shadow-md">
              <p className="text-xl font-semibold mb-4">{job.positionName}</p>
              <p className="text-gray-500  mb-2">Company: {job.companyName}</p>
              <p className="text-gray-500 mb-2">
                Experience: {job.minExp}-{job.maxExp} Years
              </p>
              <p className="text-gray-500 mb-2">Location: {job.location}</p>
              <p className="text-gray-500 mb-2">
                Salary: {job.currency} {job.minSalary} - {job.maxSalary}
              </p>
              <p className="text-gray-500 mb-2">Type: {job.type}</p>
              <div className="flex flex-wrap gap-2 mb-4 text-gray-500">
                skills:
                {job.skillsRequired.map((skill, index) => (
                  <div
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-4 text-gray-500">
                Perks:
                {job.perks.map((perk, index) => (
                  <div
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md"
                  >
                    {perk}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              {job.rounds?.map((round, index) => {
                const jobId = job._id;
                const takenTest = hasTakenTest(jobId);

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-300 p-6 shadow-md"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-xl font-medium">{round.Assessment}</p>
                      <p className="text-blue-500">Round - {index + 1}</p>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-gray-500">
                        {round.Assessment === "Skill Assessment"
                          ? "Skill assessment details here."
                          : "AI-based video interview details here."}
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src="/images/pepicons-pencil_rewind-time.svg"
                          className="w-6 h-6"
                          alt="Icon"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end items-center">
                      {round.Assessment === "Skill Assessment" && (
                        <button
                          onClick={() => {
                            if (!takenTest) {
                              navigate(`/blank/start/${job._id}`);
                            }
                          }}
                          disabled={takenTest}
                          className={`px-4 py-2 text-white rounded-md ${
                            takenTest
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-gradient-to-tl from-blue-600 to-purple-600"
                          }`}
                        >
                          {takenTest ? "Applied" : "Apply Now"}
                        </button>
                      )}
                      {round.Assessment === "AI Based Video" && (
                        <button
                          disabled={allAiTest !== null}
                          onClick={() => {
                            navigate(`/blank/successful/${job._id}`);
                          }}
                          className={`px-4 py-2 text-white rounded-md ${
                            allAiTest !== null
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-gradient-to-tl from-blue-600 to-purple-600"
                          }`}
                        >
                          {allAiTest !== null ? "Applied" : "Apply Now"}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllRounds;

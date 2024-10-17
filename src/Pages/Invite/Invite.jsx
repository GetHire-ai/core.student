import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GetApi, PostApi } from "../utilis/Api_Calling";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";

const Invite = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  let getInvitedJobs = async () => {
    try {
      setLoading(true);
      let res = await GetApi(`api/studentroutes/invitedjobs/all`);
      setApplications(res?.data?.data);
    } catch (error) {
      toast.error("internal server error", { autoClose: 1000 });
    } finally {
      setLoading(false);
    }
  };

  let handleReject = async (id) => {
    try {
      setLoading(true);
      let res = await PostApi(`api/studentroutes/invitedjobs/reject/${id}`, {});
      toast.success("Invite Rejected", { autoClose: 1000 });
      getInvitedJobs();
    } catch (error) {
      toast.error("internal server error", { autoClose: 1000 });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getInvitedJobs();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {loading && <LinearProgress />}
      <div className="container mx-auto">
        <div className="flex flex-row justify-between ml-4 mt-6">
          <p className="text-4xl font-semibold text-gray-800">Talent Booking</p>
        </div>
        {!loading && (
          <div className="flex flex-row flex-wrap justify-start items-start bg-gray-50 mt-4">
            {applications.map((application) => (
              <div className="2xl:w-1/2 w-full p-2">
                <div
                  className="flex flex-row justify-between items-center w-full bg-white border border-gray-500 rounded-xl shadow-lg hover:shadow-2xl hover:border-gray-800 transform transition-all duration-300 p-4"
                  key={application?._id}
                >
                  <div className="flex flex-row items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-h_idden border-2 border-gray-300 shadow-md">
                      <img
                        src={
                          application?.companyLogo ||
                          "data:image/jpeg;base64,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"
                        }
                        alt={application?.companyName}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-lg text-gray-800 font-semibold">
                        {application?.companyName}
                      </p>
                      <p className="text-gray-500 flex items-center text-sm gap-2">
                        <CiLocationOn />
                        {application?.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-xl font-semibold text-gray-800">
                      {application?.positionName}
                    </p>
                    <p
                      className={`text-sm font-medium px-2 py-1 rounded-lg cursor-pointer ${
                        application?.type === "FULL-TIME"
                          ? "text-green-800 bg-green-100"
                          : "text-blue-800 bg-blue-100"
                      }`}
                    >
                      {application?.type}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Salary: {application?.minSalary}-{application?.maxSalary}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-center">
                    <p className="text-gray-500 text-sm">
                      {application?.applicants}+ applicants
                    </p>
                    <div className="flex mt-2 justify-between items-center">
                      <button
                        className="border text-sm border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                        onClick={() => handleReject(application._id)}
                      >
                        Reject
                      </button>
                      <button
                        className="bg-blue-500 text-sm text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ml-2"
                        onClick={() =>
                          navigate(`/blank/JobViewDetails/${application._id}`)
                        }
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                  <div className="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500 transition ml-2">
                    {/* Bookmark icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeW_idth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 3v18l6-6 6 6V3H6z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Invite;

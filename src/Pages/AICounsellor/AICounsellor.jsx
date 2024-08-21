import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GetApi } from "../utilis/Api_Calling";

const AICounsellor = () => {
  const navigate = useNavigate();
  const [allappiledjobs, setallappiledjobs] = useState([]);
  const [AllJobs, setAllJobs] = useState([]);
  const [Loading, setLoading] = useState(true);

  const Getallappiledjob = async () => {
    try {
      const res = await GetApi(`api/StudentRoutes/GetAllAppiledJobsofaStudent`);
      setallappiledjobs(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const GetAllJobs = async () => {
    try {
      const Getjobdata = await GetApi(`api/AdminRoutes/GetAllJobs`);
      console.log(Getjobdata?.data);
      setAllJobs(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    Getallappiledjob();
    GetAllJobs();
  }, []);

  return (
    <>
      <div className="px-[36px] font-[outfit]">
        <div className="pt-[31px] pb-[36px] px-[10px] lg:pl-[40px] lg:pr-[27px] bg-[#0f87b3] bg-opacity-[10%]">
          <div className="flex flex-col lg:flex-row gap-[20px] lg:justify-between lg:items-center">
            <div>
              <p className="text-[24px] font-[500] ">Jobs</p>
              <p className="text-[16px] font-[400] ">Personalised Jobs</p>
            </div>
            <div className="flex gap-[27px] items-center">
              <p className="text-[16px] font-[500] border-b-[1px] border-[#000]">
                Suggested Jobs
              </p>
              <Link className="bg-[#141111] flex text-white gap-[7px] rounded-[6px] p-[11px]">
                <img src="/images/pencil.svg" alt="" />
                <p className="text-[16px] font-[500]">Edit Preference</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-6 mt-[41px] gap-[25px]">
            <div className=" lg:mt-[50px] w-full flex flex-col lg:flex-row col-start-1 col-end-5 bg-gradient-to-br from-[#2f52a9] to-[#147eb4] rounded-[16px]">
              <div className="flex flex-col gap-[36px] p-[34px] w-full justify-center items-start">
                <p className="text-[32px] font-[500] text-white">
                  Search job with Ai
                </p>
                <button className="bg-white rounded-[8px] py-[13px] px-[26px]">
                  Search Job
                </button>
              </div>
              <div className="flex justify-center items-center lg:relative w-full">
                <img
                  src="/images/searchJob?.svg"
                  className="lg:absolute lg:bottom-[-25px] w-full"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full col-start-5 col-end-7">
              <p className="text-[24px] font-[500]">Our Top Skills</p>
              <div className="bg-white mt-[15px] py-[31px] px-[28px] rounded-[16px]">
                <div className="flex justify-between border-b-[1px] border-[#ebe6e6] pb-[12px]">
                  <div className="text-[16px] font-[400]">
                    <p>Adobe Illustrator</p>
                    <p className="text-[#000] text-opacity-[50%]">
                      Beginner 2 Year
                    </p>
                  </div>
                  <img
                    src="/images/pencil2.svg"
                    className="w-[16px] h-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex justify-between border-b-[1px] mt-[8px] border-[#ebe6e6] pb-[12px]">
                  <div className="text-[16px] font-[400]">
                    <p>Figma</p>
                    <p className="text-[#000] text-opacity-[50%]">
                      Advanced 2 Year
                    </p>
                  </div>
                  <img
                    src="/images/pencil2.svg"
                    className="w-[16px] h-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex justify-between border-b-[1px] border-[#ebe6e6] pb-[12px]">
                  <div className="text-[16px] font-[400]">
                    <p>Adobe Illustrator</p>
                    <p className="text-[#000] text-opacity-[50%]">
                      Beginner 2 Year
                    </p>
                  </div>
                  <img
                    src="/images/pencil2.svg"
                    className="w-[16px] h-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex justify-between border-b-[1px] mt-[8px] border-[#ebe6e6] pb-[12px]">
                  <div className="text-[16px] font-[400]">
                    <p>Figma</p>
                    <p className="text-[#000] text-opacity-[50%]">
                      Advanced 2 Year
                    </p>
                  </div>
                  <img
                    src="/images/pencil2.svg"
                    className="w-[16px] h-[15px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[46px]">
          <p className="text-[24px] font-[500]">On Going Job Apllication</p>
          <div className="overflow-x-auto rounded-[14px] mt-[25px] shadow-lg border-t-[2px]">
            <table className="w-full rounded-[14px]">
              <thead className="bg-[#e3eff7] text-[13px] font-[400] font-[Outfit] h-[63px]">
                <tr>
                  <th className="text-left  pl-[27px] pr-[77px] pt-[27px] pb-[19px]">
                    COMPANY
                  </th>
                  <th className="text-left  pr-[115px] pt-[27px] pb-[19px]">
                    PROFILE
                  </th>
                  <th className="text-left  pr-[128px] pt-[27px] pb-[19px]">
                    APPLICATION STATUS
                  </th>
                  <th className="text-left pr-[64px] pt-[27px] pb-[19px]">
                    REVIEW APPLICATION
                  </th>
                </tr>
              </thead>
              <tbody className="text-[16px] bg-[#fff] font-[400] font-[Outfit] text-center">
                {allappiledjobs.map((job, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      navigate(`/blank/allrounds/${job?.JobId?._id}`);
                    }}
                  >
                    <td className="px-[25px] py-[25px] text-black text-opacity-[50%] text-left">
                      {job?.CompanyId?.Name}
                    </td>
                    <td className="pr-[10px] pl-[3px] flex gap-[29px] py-[25px] text-black text-opacity-[50%] text-left">
                      {job?.JobId?.positionName}
                    </td>
                    <td className="pl-[6px] pr-[40px] py-[30px] text-left">
                      <div className="bg-[#e3eff7] px-[19px] py-[7px] flex  justify-center items-center rounded-[5px]">
                        <p className="text-[#4234a2]">{job?.status}</p>
                        <p className="text-[#97969d] text-[14.52px] ml-[17px]">
                          {job?.ApplicationStatusB}
                        </p>
                        {job?.requestStatusC === "2" && (
                          <p className="text-[#97969d] ml-[5px] border-[0.85px] border-[#97969d] rounded-[50%] w-[18.67px] h-[18.67px] flex justify-center items-center">
                            {job?.ApplicationStatusC}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className=" flex items-start justify-start px-[5px] py-[30px]">
                      <img className="w-[24px] h-[24px]" alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-[38px]">
          <p className="text-[24px] font-[500]">Suggested Jobs</p>
          <div className="bg-white mt-[33px] flex flex-wrap gap-5">
            {AllJobs?.map((job) => (
              <div
                className="bg-white shadow-lg rounded-lg p-6 mb-6 min-w-[30%]"
                key={job._id}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="border-[1px] rounded-[3px] w-[125px] h-[26px] p-[4px] border-[#d9d9d9] flex items-center gap-[7px]">
                    <img
                      src="/images/Vector 4.svg"
                      className="w-[16px] h-[8px]"
                      alt=""
                    />
                    <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                      Actively hiring
                    </p>
                  </div>
                  <i className="fa-solid fa-briefcase text-gray-400"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {job?.positionName}
                </h3>
                <p className="text-gray-600 mb-2">{job?.companyName}</p>
                <br />
                <hr />
                <br />
                <div className="flex items-center text-gray-500 mb-2">
                  <i className="fa-solid fa-location-dot mr-3 text-gray-300"></i>
                  {job?.location}
                </div>
                <div className="flex items-center text-gray-500 mb-2">
                  <i className="fa-solid fa-sack-dollar mr-3 text-gray-300"></i>₹{" "}
                  {job?.minSalary}-{job?.maxSalary}/Year
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <i className="fa-solid fa-briefcase mr-3 text-gray-300"></i>
                  {job?.minExp}-{job?.maxExp} Years
                </div>
                <div className="flex justify-between px-3">
                  <button className="text-gray-500 rounded">{job?.type}</button>
                  <button
                    className="text-blue-500 rounded"
                    onClick={() => {
                      navigate(`/blank/JobViewDetails/${job._id}`);
                    }}
                  >
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AICounsellor;

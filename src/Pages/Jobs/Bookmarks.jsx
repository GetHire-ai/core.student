import React, { useEffect, useState } from "react";
import { GetApi, PostApi } from "../utilis/Api_Calling";
import { useNavigate } from "react-router-dom";

function Bookmarks() {
  const navigate = useNavigate();

  const [GetAllBookmarkjobs, setGetAllBookmarkjobs] = useState([]);
  const [appiledjobs, setappiledjobs] = useState([]);

  const Getallbookmarkjob = async () => {
    try {
      const Getbookmark = await GetApi(
        `api/StudentRoutes/GetAllBookmarkjobsofaStudent`
      );
      setGetAllBookmarkjobs(Getbookmark?.data?.data?.bookmarkedJobs);
    } catch (error) {
      console.log(error);
    }
  };
  const Getallappiledjobid = async () => {
    try {
      const Getbookmark = await GetApi(
        `api/StudentRoutes/GetAllAppiledJobidsofaStudent`
      );
      setappiledjobs(Getbookmark?.data?.data?.appliedJobIds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Getallappiledjobid();
    Getallbookmarkjob();
  }, []);

  const formatSalary = (salary) => {
    if (salary >= 1000) {
      return (salary / 1000).toFixed(1) + "k";
    } else {
      return salary.toString();
    }
  };

  function NewformatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate;
  }

  const jobDetail = async (id) => {
    navigate(`/blank/JobViewDetails/${id}`);
  };
  const removefromBookmark = async (id) => {
    try {
      let obj = {
        jobId: id,
      };
      const responce = await PostApi(
        "api/StudentRoutes/RemovefromBookmark",
        obj
      );
      // console.log(responce?.data)
      Getallbookmarkjob();
      alert(responce?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex gap-[30px] flex-col">
        {GetAllBookmarkjobs?.length > 0 ? (
          GetAllBookmarkjobs?.map((job, index) => {
            const isJobApplied = appiledjobs.includes(job?.jobId?._id);
            return (
              <div
                key={index}
                className="bg-white rounded-[16px] border-[1px] border-[#efecec] p-[27px]"
              >
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
                <div className="mt-[8px]">
                  <div className="flex justify-between gap-[20px] lg:gap-[66px] lg:items-center flex-col lg:flex-row-reverse">
                    <img
                      src="/images/jobsIcon.svg"
                      className="w-[60px] h-[60px]"
                      alt=""
                    />
                    <p className="text-[20px] lg:w-[476px] flex-wrap font-[400]">
                      {job?.jobId?.positionName}
                    </p>
                  </div>

                  <p className="text-black mt-[12px] text-opacity-[50%] text-[14px] font-[400]">
                    {job?.jobId?.Company?.Name}
                  </p>
                  <div className="flex gap-[5px] items-center mt-[24px]">
                    <img src="/images/carbon_location.svg" alt="" />
                    <p className="text-black text-opacity-[50%] text-[14px] font-[400]">
                      {job?.jobId?.addlocation}
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row text-[14px] font-[400] text-black text-opacity-[50%] mt-[22px] gap-[10px] lg:gap-[54px]">
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/carbon_play-outline.svg" alt="" />
                        <p>START DATE</p>
                      </div>
                      <p>Immediately</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/ctcVector.svg" alt="" />
                        <p>Salary</p>
                      </div>
                      <p>
                        Rs.{job?.jobId?.minSalary}-{job?.jobId?.maxSalary}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/bytesize_work.svg" alt="" />
                        <p>EXPERIENCE</p>
                      </div>
                      <p>
                        {job?.jobId?.minExp}-{job?.jobId?.maxExp} Years
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-[28px] gap-[28px] border-b-[1px] border-[#ebe6e6] pb-[13px]">
                    <div className="flex gap-[4px] bg-[#f1ffe5] rounded-[3px] px-[6px] py-[2px]">
                      <img
                        src="/images/pepicons-pencil_rewind-time.svg"
                        className="w-[18px] h-[18px]"
                        alt=""
                      />
                      <p>{NewformatDate(job?.jobId?.createdAt)}</p>
                    </div>
                    <p className="text-[12px] font-[400] text-[#000] text-opacity-[50%] bg-[#d9d9d9] bg-opacity-[50%] p-[4px] ">
                      {job?.contractDetails}
                    </p>
                  </div>
                  <div className="flex w-full pt-[18px] gap-[15px] justify-end items-center">
                    <div
                      onClick={() => {
                        removefromBookmark(job?.jobId?._id);
                      }}
                      className="border-[1px] flex justify-center items-center text-[#4234a2] text-[14px] font-[500] border-[#4234a2] rounded-[5px] w-[117px] h-[32px]"
                    >
                      Remove
                    </div>
                    {isJobApplied ? (
                      <button className="w-[103px] h-[32px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] flex justify-center items-center">
                        Applied
                      </button>
                    ) : (
                      <button className="w-[103px] h-[32px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] flex justify-center items-center">
                        Apply now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-[16px] border-[1px] border-[#efecec] p-[27px]">
              No Book Marked Jobs Found{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;

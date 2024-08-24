import React, { useState } from "react";

const JobCard = ({ job, isJobApplied, jobDetail }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const toggleSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  const NewformatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-3xl border-[1px] border-[#efecec] p-5">
      <div className="mt-[8px]">
        <div className="flex justify-between gap-[20px]">
          <p className="text-xl font-medium lg:w-[476px] flex-wrap">
            {job?.positionName}
          </p>
          <p>
            {isJobApplied ? (
              <button className="w-[103px] h-[32px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] flex justify-center items-center">
                Applied
              </button>
            ) : (
              <button
                onClick={() => {
                  jobDetail(job?._id);
                }}
                className="w-[103px] h-[32px] text-white  hover:scale-105  bg-blue-500 hover:bg-blue-900 duration-200  rounded-[5px] flex justify-center items-center"
              >
                Apply now
              </button>
            )}
          </p>
        </div>
        <p className="text-gray-600 hover:text-blue-500 hover:cursor-pointer inline-block p-2 text-md font-normal">
          {job?.Company?.Name}
        </p>
        <div className="flex flex-col text-[14px] font-[400] text-black text-opacity-[50%] mt-[5px] gap-2">
          <div className="flex justify-start items-center flex-wrap gap-3">
            <span>
              <i className="fa-solid fa-briefcase mr-2"></i> {job?.minExp}-
              {job?.maxExp} Years &nbsp; |
            </span>
            <span>
              {job.minSalary === 0 ? (
                <>
                  {job?.minSalary / 100000}-{job?.minSalary / 100000} LPA CTC
                </>
              ) : (
                <>Not Defined</>
              )}
              &nbsp; |
            </span>
            <span>
              <i className="fa-solid fa-location-dot mr-2"></i> {job?.location}{" "}
              &nbsp; |
            </span>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col items-start gap-3">
            <span>
              <i className="fa-solid fa-clipboard mr-2"></i> Must have
              <span className="mx-1">
                {job?.skillAssessment?.[0]?.skill || "No skills available"}
              </span>
              {job?.skillAssessment?.length > 1 && (
                <button
                  onClick={toggleSkills}
                  className="text-blue-500 hover:underline ml-2"
                >
                  {showAllSkills ? "View Less" : "View More"}
                </button>
              )}
            </span>

            {showAllSkills && (
              <div className="">
                {job?.skillAssessment?.slice(1).map((skill, index) => (
                  <div key={index} className="mx-1">
                    {skill.skill}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* <div className="flex justify-start items-center flex-wrap gap-3">
            {job?.skillsRequired?.map((skill, index) => (
              <span key={index}>{skill} &nbsp;&nbsp; .</span>
            ))}
          </div> */}
          <div className="w-full flex justify-between items-center flex-wrap gap-3">
            <span className="flex gap-3">
              <img
                src="/images/pepicons-pencil_rewind-time.svg"
                className="w-[18px]"
                alt=""
              />{" "}
              {NewformatDate(job?.createdAt)}
            </span>
            <span className="cursor-pointer">
              <i className="fa-solid fa-bookmark mr-3"></i> Save
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

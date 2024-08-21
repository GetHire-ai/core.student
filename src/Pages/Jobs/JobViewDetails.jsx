import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetApi, PostApi } from "../utilis/Api_Calling";
import { ThreeDots } from 'react-loader-spinner'
import {
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import JobApplyModel from "./JobApplyModel";
import JobApplyModelResumeCheck from "./JobApplyModelResumeCheck";
import { toast } from "react-toastify";
import JobApplyModelChat from "./JobApplyModelChat";
const stepsHead = ["View Job", "Job Apply", "Shortlisted"];


const JobViewDetails = () => {
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [educationDetails, setEducationDetails] = useState({});
  const [Jobdetail, setJobdetail] = useState({});
  const [chatModal, setChatModal] = useState(false);
  const [isbookmarked, setisbookmarked] = useState(false);
  const [isappiled, setisappiled] = useState(false);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  const [AllJobs, setAllJobs] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [appiledjobs, setappiledjobs] = useState([]);
  const [totaljob, Settotaljob] = useState("");
  const [Applymodel, setApplymodel] = useState(false);
  const [ApplymodelResumeCheck, setApplymodelResumeCheck] = useState(false);

  const GetAllJobs = async () => {
    try {
      const Getjobdata = await GetApi(`api/AdminRoutes/GetAllJobs`);
      setAllJobs(Getjobdata?.data?.data);
      Settotaljob(Getjobdata?.data?.data?.length);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const Getallbookmark = async () => {
    try {
      const Getbookmark = await GetApi(`api/StudentRoutes/getallbookmark`);
      setBookmarkedJobs(Getbookmark?.data?.data?.bookmarkedJobs);
    } catch (error) {
      console.log(error);
    }
  };
  const Getallappiledjob = async () => {
    try {
      const res = await GetApi(
        `api/StudentRoutes/GetAllAppiledJobidsofaStudent`
      );
      setappiledjobs(res?.data?.data?.appliedJobIds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Getallbookmark();
    Getallappiledjob();
  }, []);

  const GetJobdetails = async () => {
    try {
      const Getjobdata = await GetApi(`api/AdminRoutes/GetAJobs/${id}`);
      setJobdetail(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    GetJobdetails();
    GetAllJobs();
  }, [id]);

  function formatDate(dateString) {
    const [day, month, year] = dateString?.split("-");
    const date = new Date(`${month}-${day}-${year}`);
    const options = { day: "numeric", month: "short", year: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate;
  }

  function NewformatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate;
  }

  const AddtoBookmark = async () => {
    try {
      let obj = {
        jobId: id,
      };
      const responce = await PostApi("api/StudentRoutes/AddToBookmark", obj);
      Getallbookmark();
      toast.success(responce?.data?.message, { autoClose: 1000 });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isBookmarked = bookmarkedJobs.includes(id);
    setisbookmarked(isBookmarked);
  }, [bookmarkedJobs, id]);

  useEffect(() => {
    const isappiled = appiledjobs.includes(id);
    setisappiled(isappiled);
  }, [appiledjobs, id]);

  const removefromBookmark = async () => {
    try {
      let obj = {
        jobId: id,
      };
      const responce = await PostApi(
        "api/StudentRoutes/RemovefromBookmark",
        obj
      );
      Getallbookmark();
      toast.success(responce?.data?.message, { autoClose: 1000 });
    } catch (error) {
      console.log(error);
    }
  };

  const jobapplymodelopen = () => {
    setApplymodel(true);
  };
  const jobapplymodelclose = () => {
    setApplymodel(false);
  };

  useEffect(() => {
    if (isappiled) {
      setActiveStep(1);
    }
    // if(){
    //   setActiveStep(2);
    // }
  }, []);

  return (
    <>
      {Loading ? (
        <div className="bg-white flex justify-center pt-20 min-w-[100vw] min-h-[100vh] text-2xl">
          {/* Loading... */}
          <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="blue"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              />
        </div>
      ) : (
        <div className="w-full flex justify-center items-start gap-10 font-[poppins] bg-[#f8f9fa]">
          <div className="w-3/6 pt-5 mb-10">
            <Box sx={{ width: "100%", marginY: "15px" }}>
              <Stepper activeStep={activeStep}>
                {stepsHead.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
            <div className="flex gap-[10px] flex-col  px-2 bg-[#f8f9fa]">
              <div className="bg-white rounded-3xl border-[1px] border-[#efecec] p-5">
                <div className="mt-[8px]">
                  <div className="flex justify-between gap-[20px]">
                    <p className="text-xl font-medium inline-block lg:w-[476px] flex-wrap ">
                      {Jobdetail?.positionName}
                    </p>
                  </div>
                  <p className="text-gray-600  text-md font-normal hover:text-blue-600 cursor-pointer" onClick={()=>{alert("redirecting to company page")}}>
                    {Jobdetail?.Company?.Name}
                  </p>
                  <div className="flex flex-col text-[14px] font-[400] text-black text-opacity-[50%] mt-[5px] gap-2">
                    <div className="flex justify-start items-center flex-wrap gap-3 mt-4">
                      <span>
                        <i className="fa-solid fa-briefcase mr-2"></i> 0-5 Years
                        &nbsp;&nbsp;
                      </span>
                      <span>
                        {/* <i className="fa-solid fa-dollar-sign mr-2"></i>{" "} */}
                        {/* {Jobdetail?.minSalary}-{Jobdetail?.maxSalary} salary */}
                        10-12 LPA CTC
                        &nbsp;&nbsp;
                      </span>
                    </div>
                    <div className="flex justify-start items-center flex-wrap gap-3 border-b-[1px] pb-3">
                      <span>
                        {" "}
                        <i className="fa-solid fa-location-dot mr-2"></i>
                        {Jobdetail?.location} &nbsp;
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <div className="flex w-3/4 justify-start gap-5 items-center">
                        <span>
                          Posted: <span className="text-gray-950">1</span>{" "}
                        </span>
                        <span>
                          Openings:{" "}
                          <span className="text-gray-950">
                            {Jobdetail?.openings}
                          </span>{" "}
                        </span>
                        <span>
                          Applicants:{" "}
                          <span className="text-gray-950">
                            {Jobdetail?.totalApplicationCount}
                          </span>
                        </span>
                      </div>
                      <div className="flex w-1/3 justify-between items-center">
                        <img
                          className="w-5 cursor-pointer"
                          src="/images/material-symbols-light_share.svg"
                          alt=""
                        />
                        <div className="flex gap-3">
                          {isbookmarked ? (
                            <div
                              onClick={() => {
                                removefromBookmark();
                              }}
                            >
                              <img
                                className="w-3 cursor-pointer"
                                src="/images/saved.svg"
                                alt=""
                              />
                            </div>
                          ) : (
                            <div
                              onClick={() => {
                                AddtoBookmark();
                              }}
                            >
                              <img
                                className="w-3 cursor-pointer"
                                src="/images/save.svg"
                                alt=""
                              />
                            </div>
                          )}
                        </div>
                        <button
                          className="py-2 px-3 bg-[#256aac] text-white text-xs font-semibold rounded-3xl hover:bg-blue-900 "
                          disabled={isappiled}
                          // onClick={() => setApplymodelResumeCheck(true)}
                          onClick={() => setChatModal(true)}
                        >
                          {isappiled ? "Already Applied" : "Quick Apply"}
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className="mt-1">
                      <p className="text-sm text-black font-medium">
                        Job Description
                      </p>
                      <p className="text-[16px] font-[500] text-[#000] text-opacity-[50%]">
                        <span className="text-xs">
                          {Jobdetail?.description ? (
                            <>{Jobdetail?.description}</>
                          ) : (
                            <>
                              Developing software solutions by writing code,
                              testing, and debugging programs according to
                              specifications. Responsible for maintaining and
                              improving existing internal tools or software.
                              Works collaboratively with other engineers and
                              team members to design, develop and deliver
                              quality software on time according to the project
                              requirements. 1. Write code for applications and
                              programs according to technical specifications 2.
                              Test software to ensure it performs as expected
                              and is free of bugs 3. Debug issues and provide
                              fixes to resolve software problems 4. Collaborate
                              with other engineers, designers and team members
                              5. Maintain and improve existing internal tools
                              and applications 6. Design software architectures
                              and provide technical solutions 7. Analyze
                              requirements and design specifications to estimate
                              timelines 8. Ensure software is properly
                              documented and meets quality standards 9.
                              Continuously learn and upgrade skills to stay
                              updated with new technologies 10. Provide
                              technical support and help to other teams using
                              internal tools
                            </>
                          )}
                        </span>
                      </p>
                      <br />
                      <hr />
                      <div className="mt-2">
                        <div className="mt-3 mb-5 flex flex-col gap-2">
                          <span className="text-sm font-[500] text-black">
                            Role :
                            <span className="text-sm font-normal text-gray-700 ml-2">
                              {Jobdetail?.positionName}
                            </span>
                          </span>
                          <span className="text-sm font-[500] text-black">
                            Employment Type :
                            <span className="text-sm font-normal text-gray-700 ml-2">
                              {Jobdetail?.shift}
                            </span>
                          </span>
                          <span className="text-sm font-[500] text-black">
                            Location :
                            <span className="text-sm font-normal text-gray-700 ml-2">
                              {Jobdetail?.jobType}
                            </span>
                          </span>
                          <span className="text-sm font-[500] text-black">
                            Min Education :
                            <span className="text-sm font-normal text-gray-700 ml-2">
                              {Jobdetail?.minEducation}
                            </span>
                          </span>
                          <span className="text-sm font-[500] text-black">
                            English :
                            <span className="text-sm font-normal text-gray-700 ml-2">
                              {Jobdetail?.englishLevel}
                            </span>
                          </span>
                        </div>
                        <p className="text-sm font-[500] text-black">
                          Key Skills :
                        </p>
                        <p className="text-sm text-gray-600 my-2">
                          Skills highlighted with "
                          <i className="fa-regular fa-star"></i>" are prefered
                          skills
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {Jobdetail?.skillAssessment?.map((skill, index) => (
                            <p
                              key={index}
                              className=" text-sm text-center border rounded-[20px] px-4 text-gray-600 mt-2"
                            >
                              <i className="fa-regular fa-star m-1"></i>{" "}
                              {skill?.type}
                            </p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {Jobdetail?.skillsRequired?.map((skill, index) => (
                            <p
                              key={index}
                              className=" text-sm text-center border rounded-[20px] px-4 text-gray-600 mt-2"
                            >
                              {skill}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-1/3 rounded-3xl mt-5 flex justify-center items-center border-[1px]">
            <div className="flex gap-[10px] flex-col w-full max-h-[100vh] overflow-scroll overflow-x-hidden px-2 bg-[#f8f9fa]">
              <div className="w-full flex justify-between items-center my-1 px-4">
                <span className="text-md text-gray-900">
                  jobs you might be intrested
                </span>
              </div>
              {AllJobs?.length > 0 ? (
                AllJobs.map((job) => {
                  const isJobApplied = appiledjobs.includes(job._id);
                  return (
                    <div
                      // onClick={() => jobDetail(job._id)}
                      key={job._id}
                      className="bg-white rounded-3xl border-[1px] border-[#efecec] p-5 cursor-pointer"
                    >
                      <div className="mt-[8px]">
                        <div className="flex justify-between gap-[20px]">
                          <p className="text-xl font-medium lg:w-[476px] flex-wrap">
                            {job.positionName}
                          </p>
                        </div>
                        <p className="text-gray-600 text-md font-normal">
                          {job.Company?.Name}
                        </p>
                        <div className="flex flex-col text-[14px] font-[400] text-black text-opacity-[50%] mt-[5px] gap-2">
                          <div className="flex justify-start items-center flex-wrap gap-3">
                            <span>
                              <i className="fa-solid fa-briefcase mr-2"></i> 0-5
                              Years &nbsp; |
                            </span>
                            <span>
                              {/* <i className="fa-solid fa-dollar-sign mr-2"></i>{" "} */}
                              {/* {job.minSalary}-{job.maxSalary} salary &nbsp; | */}
                              12-14 LPA CTC &nbsp; |
                            </span>
                            <span>
                              <i className="fa-solid fa-location-dot mr-2"></i>{" "}
                              {job.location} &nbsp; |
                            </span>
                          </div>
                          <div className="flex justify-start items-center flex-wrap gap-3">
                            <span>
                              <i className="fa-solid fa-clipboard mr-2"></i>{" "}
                              Must have
                              {job.skillAssessment?.map((skill) => (
                                <span className="mx-1" key={skill.skill}>
                                  {skill.skill},
                                </span>
                              ))}
                            </span>
                          </div>
                          <div className="flex justify-start items-center flex-wrap gap-3">
                            {job.skillsRequired?.map((skill, index) => (
                              <span key={index}>{skill} &nbsp;&nbsp; .</span>
                            ))}
                          </div>
                          <div className="w-full flex justify-between items-center flex-wrap gap-3">
                            <span className="flex gap-3">
                              <img
                                src="/images/pepicons-pencil_rewind-time.svg"
                                className="w-[18px]"
                                alt="Date Icon"
                              />{" "}
                              {NewformatDate(job.createdAt)}
                            </span>
                            <span className="cursor-pointer">
                              <i className="fa-solid fa-bookmark mr-3"></i> Save
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="bg-white rounded-[16px] border-[1px] border-[#efecec] p-[27px]">
                  No Jobs Found With This query
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {Applymodel && (
        <JobApplyModel
          onOpen={jobapplymodelopen}
          onClose={jobapplymodelclose}
          Jobdetail={Jobdetail}
        />
      )}
      {JobApplyModelResumeCheck && (
        <JobApplyModelResumeCheck
          onOpen={ApplymodelResumeCheck}
          onClose={() => setApplymodelResumeCheck(false)}
          openModal={() => {
            setApplymodelResumeCheck(false);
            setApplymodel(true);
          }}
          educationDetails={educationDetails}
        />
      )}
      {chatModal && (
        <JobApplyModelChat
          onOpen={chatModal}
          onClose={() => setChatModal(false)}
          onSubmit={() => {
            setChatModal(false);
            setApplymodelResumeCheck(true);
          }}
          openModal={() => setApplymodel(true)}
          setEducationDetails={setEducationDetails}
        />
      )}
    </>
  );
};

export default JobViewDetails;

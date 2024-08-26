import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import "react-circular-progressbar/dist/styles.css";
import { GetApi } from "../utilis/Api_Calling";
import logo from "../../assets/Images/Gethire SVG.svg";
import { IoIosArrowForward } from "react-icons/io";
import { Construction } from "@mui/icons-material";
import AIToolsModal from "../AI Tools/AIToolsModal";
const Home = ({ onSectionVisible, onSectionHidden }) => {
  const navigate = useNavigate();
  const path = useLocation();

  // const skillData = [
  //   {
  //     image: "/images/Ellipse 3290.svg",
  //     name: "Kimaya",
  //     skillName: "Ai Carrer Counsellor",
  //     buttonData: "comming soon !",
  //   },
  //   {
  //     image: "/images/Ellipse 3291.svg",
  //     name: "Kimaya",
  //     skillName: "Ai Carrer Counsellor",
  //     buttonData: "comming soon !",
  //   },
  //   {
  //     image: "/images/Ellipse 3292.svg",
  //     name: "Kimaya",
  //     skillName: "Skill Gap Analys",
  //     buttonData: "comming soon !",
  //   },
  //   {
  //     image: "/images/Ellipse 3293.svg",
  //     name: "Kimaya",
  //     skillName: "Mock interview",
  //     buttonData: "comming soon !",
  //   },
  // ];
  // dummy data for my interview
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

  // dummy data for companies
  const companies = [
    {
      id: 1,
      name: "SkillGenic",
      logo: "https://via.placeholder.com/50", // Replace with actual image URLs
      rating: 3.6,
      reviews: "2.8K+",
    },
    {
      id: 2,
      name: "Seclore",
      logo: "https://via.placeholder.com/50", // Replace with actual image URLs
      rating: 3.9,
      reviews: "54",
    },
    {
      id: 3,
      name: "Morgan Stanley",
      logo: "https://via.placeholder.com/50", // Replace with actual image URLs
      rating: 3.7,
      reviews: "1K+",
    },
    {
      id: 4,
      name: "Morgan ",
      logo: "https://via.placeholder.com/50", // Replace with actual image URLs
      rating: 3.2,
      reviews: "1.6K+",
    },
    {
      id: 5,
      name: " Stanley",
      logo: "https://via.placeholder.com/50", // Replace with actual image URLs
      rating: 3.1,
      reviews: "1.5K+",
    },
  ];

  const [selectedtab, setselectedtab] = useState("MyJobs");
  const [AllJobs, setAllJobs] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [appiledjobs, setappiledjobs] = useState([]);
  const [allappiledjobs, setallappiledjobs] = useState([]);
  const [allinterview, setallinterview] = useState([]);
  const [allTestResults, setAllTestResults] = useState([]);
  const [studentprofile, setstudentprofile] = useState({});

  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setstudentprofile(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const GetAllJobs = async () => {
    try {
      const Getjobdata = await GetApi(`api/AdminRoutes/GetAllJobs`);
      // console.log(Getjobdata?.data)
      setAllJobs(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const Getallappiledjobid = async () => {
    try {
      const res = await GetApi(
        `api/StudentRoutes/GetAllAppiledJobidsofaStudent`
      );
      setappiledjobs(res?.data?.data?.appliedJobIds);
    } catch (error) {
      console.log(error);
    }
  };

  const Getallappiledjob = async () => {
    try {
      const res = await GetApi(`api/StudentRoutes/GetAllAppiledJobsofaStudent`);
      setallappiledjobs(res?.data?.data);
      setSelectedJob(res?.data?.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const Getallinterview = async () => {
    try {
      const res = await GetApi(
        `api/StudentRoutes/GetAllJobinterviewofaStudent`
      );
      setallinterview(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllTest = async () => {
    let id = localStorage.getItem("Studentid");
    try {
      const res = await GetApi(`api/testRoutes/result/multiid/${id}`);
      setAllTestResults(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllJobs();
    Getallappiledjobid();
    Getallappiledjob();
    Getallinterview();
    GetAllTest();
  }, []);

  const formatSalary = (salary) => {
    if (salary >= 1000) {
      return (salary / 1000).toFixed(1) + "k";
    } else {
      return salary.toString();
    }
  };

  const hasTakenTest = (jobId) => {
    return allTestResults.some((test) => test.job === jobId);
  };

  // for jobs
  const [selectedJob, setSelectedJob] = useState(allappiledjobs[0]);

  // Handle job card click
  const handleJobClick = (job) => {
    setSelectedJob(job);
  };
  const cardsToShow = 3;
  const totalCards = companies.length;
  const [offset, setOffset] = useState(0);

  const handleMove = () => {
    setOffset(
      (prevOffset) => (prevOffset + 1) % (totalCards - cardsToShow + 1)
    );
  };

  // for generate the random number
  const [random, setRandom] = useState(2);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 3) + 1);
    console.log("random number is ", random);
  }, []);

  useEffect(() => {
    // Optionally, you could fetch or process additional data when a job is selected
  }, [selectedJob]);

  // this belew is all for scrollable effect in the home , companies and all 4 sections
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            onSectionVisible(sectionId);
          } else {
            onSectionHidden(sectionId);
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [onSectionVisible, onSectionHidden]);


// for ai modal opener
// const [aiModal, setAiModal] = useState(false);

// this below is for search bar
const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Python', 'Java', 'C++','Management','Verbal','SQL','Express','GraphQL','Tailwind'];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on input value
    if (value) {
      const filteredSuggestions = skills.filter((skill) =>
        skill.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  // for ai modal opener
  const [aiModal, setAiModal] = useState(false);
  return (
    <>
      <div className="py-4 font-[Outfit] w-[100%] items-center mt-3">
        <div
          ref={sectionRefs.section1}
          id="section1"
          className="  h-48 mb-12 max-2xl:h-[180px]  mx-auto p-6 bg-gradient-to-r from-teal-400 via-green-400 to-teal-300 rounded-2xl shadow-xl flex items-center justify-between space-x-8"
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs  bg-green-100 text-green-800 font-semibold px-3   py-1 rounded-full">
                Introducing
              </span>
            </div>
            <div>
              <h2 className="text-3xl max-lg:text-2xl max-xl:text-2xl max-2xl:text-[25px] font-extrabold text-white leading-tight">
                Climb the career ladder
              </h2>
              <p className="text-sm  max-lg:text-base max-xl:text-base text-white font-medium">
                GetHire tools and resources help you take your career to the
                next level
              </p>
            </div>
            <button
              className="mt-4 bg-blue-600 max-2xl:text-[13px] max-2xl:font-normal max-2xl:w-[150px] text-sm hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105"
              onClick={() => {
                setAiModal(true);
              }}
            >
              Start exploring
            </button>
          </div>
          <div className="hidden md:block">
            <div className="relative flex justify-center items-center bg-white w-24 h-24 max-2xl:w-20 max-2xl:h-20   rounded-full">
              <img
                src={logo}
                alt="GetHire Logo"
                className="w-20 max-lg:w-16 max-2xl:w-16 transform transition hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-6 w-full -mt-7">
          <div className="bg-white w-full mt-[1px] col-start-1 col-end-7 px-[39px] py-[49px] rounded-[30px] border-[1px] border-[#efecec] ">
            <div className="text-[20px] flex w-full   font-[400] justify-start items-center text-[#545454] -mt-8">
              <div className=" flex flex-row">
                <div
                  onClick={() => {
                    setselectedtab("MyJobs");
                  }}
                  className={`pb-[6px] text-md px-[20px] hover:cursor-pointer ${
                    selectedtab === "MyJobs"
                      ? "border-b-[3px] text-[#5356e9]  border-[#5356e9] "
                      : "border-b-[3px] border-[#D9D9D9]"
                  }`}
                >
                  Applied
                </div>
                <div
                  onClick={() => {
                    setselectedtab("MyInterview");
                  }}
                  className={`pb-[6px] pl-[14px] text-md pr-[27px] hover:cursor-pointer ${
                    selectedtab === "MyInterview"
                      ? "border-b-[3px] text-[#5356e9]  border-[#5356e9]"
                      : "border-b-[3px] border-[#D9D9D9]"
                  }`}
                >
                  Interviews
                </div>
              </div>
            </div>
            <div className="bg-[#d9d9d9] w-full bg-opacity-[20%] mt-5 max-lg:justify-between rounded-[16px] flex items-center justify-start gap-[14px] p-[10px]">
              <img
                src="/images/search.svg"
                className="w-[17px] h-[17px]"
                alt=""
              />
              {/* <input
                type="text"
                className="w-[60%] bg-[#d9d9d9] bg-opacity-[1%] outline-none"
                placeholder="Search Skills"
              /> */}
               <div className="relative w-[60%] ">
                  <input
                    type="text"
                    className="w-full h-4 bg-[#d9d9d9] bg-opacity-[1%] outline-none p-2"
                    placeholder="Search Skills"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  {suggestions.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-200 shadow-lg mt-1 max-h-40 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="p-2 hover:bg-blue-100 cursor-pointer"
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              {/* /> */}
              <p className="text-[16px] max-lg:text-[13px] font-[500] hover:cursor-pointer text-[#4234a2] ml-auto">
                View all
              </p>
            </div>
            <div className="w-full  mt-[26px] gap-2 flex">
              {selectedtab === "MyJobs" && (
                <>
                  <div className="flex flex-col gap-4 w-1/2">
                    {allappiledjobs.map((job, index) => (
                      <div
                        key={index}
                        onClick={() => handleJobClick(job)}
                        ref={sectionRefs.section2}
                        id="section2"
                        className="bg-[#fff] p-[14px] flex flex-col -ml-5  max-2xl:h-38 w-full  max-lg:w-48 max-sm:w-36 max-sm:h-40 rounded-[20px] shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
                      >
                        <div className="flex justify-between max-2xl:-mb-3 -mb-3  items-center gap-4 max-lg:gap-1 max-sm:gap-0">
                          <p className="text-[15px] max-2xl:text-[14px] max-sm:text-[16px] font-[700]">
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
                          {job.status === "rejected" ? (
                            <p className="text-red-500 max-lg:text-[13px] text-[12px] ">
                              X {job.status}
                            </p>
                          ) : (
                            <p className="text-blue-500 text-[11px] max-lg:text-[10px]">
                              {job.status}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedJob && (
                    <div className="w-full bg-[#fff] p-[24px] rounded-[20px] shadow-xl border border-[#d9d9d9]">
                      <div className="flex flex-row justify-between">
                        <div>
                          <h2 className="text-[17px] font-[700] max-lg:text-[16px] max-2xl:text-[16px]">
                            {selectedJob.JobId.positionName}
                          </h2>
                          <p className="text-[12px]">
                            {selectedJob.CompanyId.Name}
                          </p>
                          <p className="text-[10px]">
                            {selectedJob.JobId.location}
                          </p>
                        </div>
                        <div>
                          <button
                            className="bg-blue-600 p-3 text-[11px] h-9 flex items-center max-2xl:text-[10px] max-2xl:p-1 max-2xl:rounded-lg max-2xl:h-7 rounded-md shadow-lg text-white max-lg:p-2 hover:bg-blue-900 hover:shadow-2xl"
                            onClick={() => navigate(`/blank/JobViewDetails/${selectedJob?.JobId._id}`)}
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
                        {["pending", "shortlisted", "selected", "rejected"].map(
                          (status, index, statuses) => {
                            const currentIndex = statuses.findIndex(
                              (s) =>
                                s.toLowerCase() ===
                                selectedJob?.status?.toLowerCase()
                            );
                            const isActive = index === currentIndex;
                            const isBeforeActive = index <= currentIndex;
                            const isPending = index > currentIndex;

                            return (
                              <div
                                key={index}
                                className="flex items-center mb-4"
                              >
                                <div className="relative flex items-center justify-center">
                                  <div
                                    className={`w-3 h-3 rounded-full ${status === "Rejected" && isActive ? "bg-red-600" : isBeforeActive ? "bg-blue-600" : "bg-white border border-blue-600"}`}
                                  ></div>
                                  {index < statuses.length - 1 && (
                                    <div
                                      className={`absolute w-[2px] h-8 top-3/4 left-1/2 -translate-x-1/2 ${isBeforeActive ? "bg-blue-600" : "bg-gray-300"}`}
                                    ></div>
                                  )}
                                </div>
                                <div className="ml-4">
                                  <p
                                    className={`text-[14px] ${isBeforeActive ? "text-blue-600" : "text-gray-500"}`}
                                  >
                                    {status}
                                  </p>
                                  {isPending && (
                                    <p className="text-[12px] text-red-400">
                                      Pending...
                                    </p>
                                  )}
                                  {isActive &&
                                    !isPending &&
                                    status !== "Rejected" && (
                                      <p className="text-[12px] text-gray-400">
                                        On 26 Jul, 2024
                                      </p>
                                    )}
                                  {status === "Rejected" && isActive && (
                                    <p className="text-[12px] text-red-600">
                                      Rejected on 26 Jul, 2024
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>

                      <div className="flex items-center mt-5">
                        <div>
                          <p className="text-[15px] font-extralight">
                            Our Suggested Product
                          </p>
                          <div className="ml-4 mt-2">
                            <p className="text-red-500 text-[16px]">
                              Profile Boost
                            </p>
                            <p className="font-extralight text-[13px]">
                              Your application would be shown on the priority
                              list to the recruiter
                            </p>
                            <div className="flex flex-row gap-6 mt-2">
                              <button className="hover:text-blue-500 text-[14px] hover:scale-105 duration-300">
                                Buy Now
                              </button>
                              <button className="text-red-400 hover:scale-105 text-sm duration-300">
                                Explore
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              {selectedtab === "MyInterview" && (
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
                            <h2 className="text-[15px] font-semibold">
                              {app.jobTitle}
                            </h2>
                            <p className="text-gray-500 text-[13px]">
                              {app.company}
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              navigate(
                                `/blank/${app.jobTitle.replace(/\s+/g, "")}`
                              )
                            }
                            className="text-blue-600 border border-blue-600 rounded-full px-3 py-1 text-xs hover:bg-blue-50"
                          >
                            View Job
                          </button>
                        </div>

                        {/* Application Status */}
                        <div className="mt-1">
                          <h3 className="text-[14px] font-medium">
                            Application Status
                          </h3>
                          <div className="mt-2 space-y-4">
                            {app.status.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-start space-x-3 "
                              >
                                <div className="flex-shrink-0 flex flex-col items-center -mb-3">
                                  <div
                                    className={`w-3 h-3 ${item.passed ? "bg-blue-600" : "bg-white border border-gray-400"} rounded-full`}
                                  ></div>
                                  {index < app.status.length - 1 && (
                                    <div className="w-px h-10 bg-gray-300"></div>
                                  )}
                                </div>
                                <div className="flex-grow -mb-3">
                                  <h4 className="text-sm font-medium">
                                    {item.stage}
                                  </h4>
                                  {item.feedback && (
                                    <p
                                      className={`text-xs ${item.passed ? "text-green-600" : "text-gray-500"}`}
                                    >
                                      {item.feedback}
                                    </p>
                                  )}
                                  {item.date && (
                                    <p className="text-gray-500 text-xs">
                                      On {item.date}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Suggested Product */}
                        <div className="mt-4">
                          <h4 className="text-md font-medium">
                            Our Suggested Product
                          </h4>
                          <div className="mt-1 bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                            <h5 className="text-red-600 font-semibold">
                              Profile Boost
                            </h5>
                            <p className="text-gray-500 text-xs">
                              Your application would be shown on priority list
                              to the recruiters.
                            </p>
                            <div className="mt-2 flex space-x-3">
                              <button className="text-blue-600 text-xs">
                                Buy Now
                              </button>
                              <button className="text-blue-600 text-xs">
                                Explore
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {random === 1 && (
          <div className="flex flex-col md:flex-row items-center justify-between mt-6 p-6 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 bg-gradient-to-r from-purple-400 hover:-rotate-180 to-purple-600 p-1 rounded-full transform -translate-x-4 hover:scale-105 transition-transform duration-300">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQ4_SojBval7Ne73wYjEscH0OpO5BIqWmzw&s"
                  alt="logo"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg font-bold text-gray-900">
                  Increase your chances in interviews with AI
                </h2>
                <p className="text-sm text-gray-700 mt-1">
                  Access AI-powered mock interviews and question banks for your
                  desired role.
                </p>
              </div>
            </div>
            <button
              className="mt-4 md:mt-0 px-8 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
              onClick={() => navigate("/blank/ai-tools/mockinterview")}
            >
              Start preparing
            </button>
          </div>
        )}
        {/* src="https://static.jobscan.co/blog/uploads/How-to-write-a-resume.jpg" */}
        {random === 2 && (
          <div className="flex h-32 flex-col md:flex-row items-center justify-between mt-6 p-6 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 bg-white p-1 rounded-lg transform transition-transform duration-300 hover:-rotate-12">
                <img
                  src="https://static.jobscan.co/blog/uploads/How-to-write-a-resume.jpg"
                  alt="Resume Update"
                  className="w-28 h-28 rounded-lg object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg font-bold text-gray-900">
                  Update your resume Now!
                </h2>
                <p className="text-sm text-gray-700 mt-1">
                  Update your resume to increase your chances of selection.
                </p>
              </div>
            </div>
            <button
              className="mt-4 md:mt-0 px-8 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
              onClick={() => navigate("/blank/ai-tools/resume-builder")}
            >
              Update Now
            </button>
          </div>
        )}
        {random === 3 && (
          <div className="flex h-32 flex-col md:flex-row items-center justify-between mt-6 p-6 bg-gradient-to-r from-blue-200 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 bg-white p-1 rounded-lg transform transition-transform duration-300 hover:rotate-45">
                <img
                  src="data:image/png;base64,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"
                  alt="Telegram type"
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg font-bold text-gray-900">
                  3 Early access roles from top companies
                </h2>
                <p className="text-sm text-gray-700 mt-1">
                  See what recruiter are searching for.
                </p>
              </div>
            </div>
            <button className="mt-4 md:mt-0 px-8 py-3 text-sm font-semibold text-blue-500 hover:text-white rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300">
              View all
            </button>
          </div>
        )}

        {/* for ai modal */}
        {aiModal && (
          <AIToolsModal open={aiModal} onClose={() => setAiModal(false)} />
        )}

        <div
          ref={sectionRefs.section3}
          id="section3"
          className="relative bg-white p-6 rounded-lg shadow-xl mt-12 scrollable-div"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
            Trending Jobs
            </h2>
            <a href="#" className="text-blue-600 hover:underline">
              View all
            </a>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${offset * (100 / cardsToShow)}%)`,
              }}
            >
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="flex-none w-full sm:w-1/3 p-4" // Adjust width to fit three cards
                  style={{ flex: "0 0 33.333%" }} // Adjust width for three cards
                >
                  <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 border-2 border-y-blue-200 border-x-blue-200 border-b-blue-200">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 mb-4"
                    />
                    <h3 className="text-sm font-semibold text-gray-900 text-center truncate">
                      {company.name}
                    </h3>
                    <div className="flex items-center mt-2 -mb-2">
                      <span className="text-yellow-500 text-sm">★</span>
                      <span className="ml-1 text-sm font-medium text-gray-800">
                        {company.rating}
                      </span>
                      <span className="ml-2 text-xs text-gray-600">
                        | {company.reviews} reviews
                      </span>
                    </div>
                    <a
                      href="#"
                      className="mt-4 text-base font-semibold text-blue-600 hover:underline"
                    >
                      View jobs
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleMove}
            className="absolute top-1/2 mt-7 right-4 transform -translate-y-1/2 bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 focus:outline-none"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

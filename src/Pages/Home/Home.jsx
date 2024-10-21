import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import { GetApi } from "../utilis/Api_Calling";
import logo from "../../assets/Images/Gethire SVG.svg";
import { IoIosArrowForward } from "react-icons/io";
import AIToolsModal from "../AI Tools/AIToolsModal";
import { LinearProgress } from "@mui/material";
import AppliedJobs from "./AppliedJobs";
import InterviewJobs from "./InterviewJobs";
const Home = ({ onSectionVisible, onSectionHidden }) => {
  const navigate = useNavigate();
  const [selectedtab, setselectedtab] = useState("MyJobs");
  const [random, setRandom] = useState(2);
  const [loading, setLoading] = useState(true);
  const [allappiledjobs, setallappiledjobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [aiModal, setAiModal] = useState(false);
  const [allinterview, setallinterview] = useState([]);
  const [allTestResults, setAllTestResults] = useState([]);
  const [studentprofile, setstudentprofile] = useState({});
  const [offset, setOffset] = useState(0);

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
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Python",
    "Java",
    "C++",
    "Management",
    "Verbal",
    "SQL",
    "Express",
    "GraphQL",
    "Tailwind",
  ];

  const Getstudentprofile = async () => {
    try {
      setLoading(true);
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setstudentprofile(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const Getallappiledjob = async () => {
    try {
      setLoading(true);
      const res = await GetApi(`api/StudentRoutes/GetAllAppiledJobsofaStudent`);
      setallappiledjobs(res?.data?.data);
      setSelectedJob(res?.data?.data[0]);      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const Getallinterview = async () => {
    try {
      setLoading(true);
      const res = await GetApi(
        `api/StudentRoutes/GetAllJobinterviewofaStudent`
      );
      setallinterview(res?.data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const GetAllTest = async () => {
    let id = localStorage.getItem("Studentid");
    try {
      setLoading(true);
      const res = await GetApi(`api/testRoutes/result/multiid/${id}`);
      setAllTestResults(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };
  const cardsToShow = 3;
  const totalCards = companies.length;

  const handleMove = () => {
    setOffset(
      (prevOffset) => (prevOffset + 1) % (totalCards - cardsToShow + 1)
    );
  };

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };

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

  useEffect(() => {
    setLoading(true);
    Getstudentprofile();
    Getallappiledjob();
    Getallinterview();
    GetAllTest();
    setLoading(false);
    setRandom(Math.floor(Math.random() * 3) + 1);
  }, []);
  return (
    <>
      {loading && (
        <div className="mt- min-w-[100vw] ml-[-25vw]">
          <LinearProgress />
        </div>
      )}
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
              <div className=" flex flex-row font-[poppins]">
                <div
                  onClick={() => {
                    setselectedtab("MyJobs");
                  }}
                  className={`pb-[6px] text-[1.1rem] px-[20px] hover:cursor-pointer ${
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
                  className={`pb-[6px] pl-[14px] text-[1.1rem] pr-[27px] hover:cursor-pointer ${
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
              <p className="text-[16px] max-lg:text-[13px] font-[500] hover:cursor-pointer text-[#4234a2] ml-auto">
                View all
              </p>
            </div>
            <div className="w-full  mt-[26px] flex font-[poppins]">
              {selectedtab === "MyJobs" && (
                <AppliedJobs
                  allappiledjobs={allappiledjobs}
                  sectionRefs={sectionRefs}
                  handleJobClick={handleJobClick}
                  selectedJob={selectedJob}
                  navigate={navigate}
                  loading={loading}
                />
              )}
              {selectedtab === "MyInterview" && (
                <InterviewJobs
                  allinterview={allinterview}
                  navigate={navigate}
                  Getallinterview={Getallinterview}
                  loading={loading}
                />
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
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8jndE9rNv7+/v+/v78/Pz9/f0jms09qdcjm88+rdv///0AmM8Als46q9stqNkuo9WTyeTy+fwqodPm8vlTs93T6fSw1+u+3e6AxOSJx+Vqu+Gh0urg7/jO5vNzveCr0+hhsdfD4PCg0uqNyeZyvuJSq9R+vds6odBlstbP5/TX6PFLp9KFwN+g2fGXAAAOYklEQVR4nNWd62KiOhCAidyKBEHES1u11nbb7mn7/q93CIgiJCGTTNDlxy7aUeZjLrlN0PGd6vDdoD5xXa/633Pd+o3A7Yr4JxEV2Z6I14ggy0rUNAF0hmRxlA5M7i38k1pXQbYKQNYzAXSGZDmA6tZGsqCreBUcpW/gopXIXSYZM0C/AzhaDI7loteyoyk9XpLpqHmPMehxLKiv5j3HoFEz0WkQ7ykGeRY0aM1GV9osyShf+iKrCnjTZsKoR2kR8ObNhNPcW0tKm/VFEXoyZ9l/JgYtAt5lVy0OYkU1/80YzDebw3pzVJK9Qxcdurf5YZJlWVoe2fPGjYfUBFzFLqBSQ1+KrB7TdPbwMKmOWTbd4wHqWBvXgn6cr5fpbPLQAJYns/RJrqZdQNSumhOvHmcl3xVg+W/6LHW0cZTGSDLuYZnNLlytE/LXk6r5bzQTq8eH7JrrfLIIk8OIgPjNRJkry+jLulwtwDAiheR779xFu8mzCzgtAQmhnxI17xowiPPtsk4uYguS8khyiZoCRe5hRO8fX1LGNwhI6DoWfi8iIHIMFm8PFZ4EkJwASfQaAwFv3lULNstFOplIAWeNBUlJKlRTdpURAHkNfZk8v59maYOjYMHyJBKqOQQ4elctcIpD3TODWJDQXPy9OBZEisE4OD6n7eQpBmxbkFSEyoA3bCZ28zp3DgNOrgFJJFbzDpqJE2BxeG2SC9SChGRiNe+lmTg+z1o9MyggfZd0zhCV1rOgH5e5s+qYKQJOe4Ak2Qd3CxjHRdMx0weMSCC89PWr8WMw3zw3HTN9QBL9xsJLGwMaWXv/8pDNuhhDgFEPkCTf4kujK61uwd08SzkYcAuS8MeTXfoWLuqV3eol4wMDpjxAOrcGqGVtJ87XVfDBASdcwJB+yy6NtPgCsDbLLTztdS0YRg/SS48bg/7qadHPLaqAGReQ0K3cDqe3x4jB3fsyTUUdTV0XLTNpYQcQYu247LdUDbtwRskAkDmp5N5qKw2xoBOw2XhBbjF00bJPepCq2bGgFcB885J1+y14gOXQ0BtQ0+6I3uP2W8AuKgaM/vZHgKiAEtnyn/37hNdvQQQkySaQq2nLRQMvqEbs0txi7qLlsCIP5Gpaaibib9Ytk1gFCZCEf50BNa24KJsuu55wseSiJEqOQ2qqKq2eZE4tg1RpCOBCBthMBUu6wVBAqYvGJd6fTGEyFw2Q/g6pyX9bC9CL83olZUTAMFkNqQkElFg7Pr5MrxaKUJKMDJANK8iQmr5UaXULev89LcqWgek0pgVJNfYdUtMcMNg9TbNUVWlMQJLsVABNumrlmGE1XwLmOtEA62HFj4IdTGIwjnfbaWfMMKYFmZMOq2mQRdmI72rMgBuDIsNdAAktgmE1dQGL7fMiBc51IluwdNIYD/A6Bstuyww+1wkD5Ez8dk/oIR5uzaAWjAPPq+YCe0oju6gE8PwnWoh61a1kDwQsx+uPpyGDTcCZEmD44QwDBiDAslf2kPKr51BdVBGQrocBfUgM7h8nWT+34ANOZ7IsehkYhonLU7OHpGLBwAlW71kqno/AdFE54MWCYfSiYkFHoa4tdnfvU2lx2XgWbAGSeuyrMOgZAmS9Mnlx2U1cNIoWOd9FYYDF9iEdKi5DBUxVLUjoiyEgK1w9LM9DBrH2qDGoDkjoXm3igQ/Iaq82z63C1XEsOAEAkoXizAoXMHY3fyZKtVcjArZjkJnwSXnyrwfoHT8z1dorXBeN1C1IklWgOH3bAWQNXzZT0gjZgjDAiPRGtqLZzatX3+/L/lTgWC4qAyQdwHLs66lOwLfmOtdT3lTgSIAZCLCaoFGJwfNRppzdlJtbRopBKWDXRdmwIla04AVwzZ/rHCkGM0AzwU6SLRhwm3IVuTMXjZoTWnRcVLxOewLc3xIQ7KJh9KFqwWaNNJ8BXRQ3BoEuGpJq7KtcSsBePaU8Re40BsNO3boKYHFTQGgMsh0yjlIzcalrm6c3c9HJAhqDhBUnQKpd2Kvp7Rp6HUBCPfVql1oqu09AvotWY18YoHO8WV9Uy4KEHgPVGDyty6yzfygGyz8s8mZdXaUosiLsboO7awsS+hkDAKtZ/bXqXhxkQMCIvv0Xuld30UrE9VepovaYLjqTcoktSMIvoAXZq+xfAgzfYYDVXMDz+JNOqi7a/0s99gXsfvDqVDMyoJRLEoPlyQIUg6fDV/C/O3HRujAfsn+lPtbZmBY0AawK80EbdOq3g+fx1iamckC5ixI29oXtQKrfdvLRVpcGAAcsyJwUvFG1flXMZmLtEWPQEJBERQyyYGuVu1hm929BNvaFAl5qhd23hXBTBBpgahKDpH7CBxDQaQ208rep3ToZUwuWIjnUgs3RpKc1z1exANnShCFgU5ivDejE7nra3Rw4vosKRZKNNuD57fIDB8jeeIgFVQEFMVieJHBA/8qCzdvb5tE3mF21TO5/ChYMw184oMsDdOJ8O+VP89uyoBpgsocCCuvaPCffpooDDowko+SiIcl8sAUD2dLpPB16jNG4Lkqq3SNgQEkXIc7nkxQFcIoCSOhKw0XPq9z8oqFi3vLVWwMS+X7fgVVu4Sfz94VlF1WMwaow3wIg89VHwz28SBYkdDe031cHsPpk8cjpro7tooR8De33dfoxKKxr635y93h5ghMUEKOZqEy4jTUsKKhr61fox8UfvaHVQrWzPQRIkmJgvy8f0FNPT7s/fF+VA2K5KIk+us/vxgZkvvpyqXhDtuCwF9ODMmDnGZOA6PWC1TNoaCUHBMRg+X+Y61nQ6T2vbeDWlIzKQytEC4anTekagA7Y9v+9KlZnogLSDVBNOOBZxAv2S4X9vjNUwIjkliwoeJD4fjpYAk4wY5DQZ10LulALNp88Lru+2gGUKg20IKl2j0DU7D77A3JrmqFVsFlKVgLw2sGw7nXrWrAp+4JasN6PsZmKnrMtB4S6KGFjX0011QDFz7rf8B8Fj+yirDDf0wZU+FUyye9NxPF62v21gmpiGxeQZK4+4PCvkg38zIlfMl43E/iAdN7d7wtR0xCQ/eFw2fw1aEF4DDIn/Y6H1BRacBBQ/MlLmxl72+aXNWy4KAl/DAA9gdLqFqyv4r5NUksuWg4rtkOAMjWNLdjI5m9pOgRItABDutO34LkqysyC1UmczwlV7apBAOtHWxqkChQL1rL+XG2bOQiQ1GNfmJpOS9Yki/avsqfogOzXOYzURAV04g+FNkC9mWD/nwrz9R0NFdAN9gmyBavdI0aRhApYivxEuIBRlFsBBCeZsywzIiJgXZhvkgsRLXiS/ZGkU2gMEjb29cxShfKtcYYAmy8/JogWZIX52s1EI2vW0PfnDYKfjp1MAEn0KfwRIFU1MWOwko03FM1FCWkebWmgJmoM1l+XCbSHW5CIf+VIXU20ZuIM6DAjorhoefJkasHmQLRgeTxEWID1oy3Nkj0u4GmCqpdOtWKw/FAGvbQVQLdjwVL2K0KxYP1oS8NcaAUwXlMUQEIL8/6I9q2RynoZCmBdmG/cmpk19ALZAzWOQSIozAer2a9RQfnZNZHSEEASFf3mGq6mePFFLwZPJ4cEAfADpT+CHoOnk0Vk6KLVoy1RepS6t0ZmwcCNt9TQgmyCxhdd+vaAvpMrr7CJAKNX4Q9xjQM4JPtGzQAlhfkgO1gDdHKjGGQnOQLgqcVHd9HqmCcmFgyr32k2tiATsQUYuNTIgnTf+bpRAdU6hPOBdCrvFHzl+pe+krUGGDh5JF2okQPSR8fUgt26NlQXrWXnsnQ60K3jF+Zr9Sh1b43CVXJ9QPazDkijOhPAQdlfqgnIL8zXUdPTvzUKfuLniSYgSXaxeTNRndgELP/yy0+nw0OrL96gR1dNWy7KRHKqB0jnvcJ8/VRhE9BxPjnpVGFwTHuF+fpq2nPRSragOoDRhye1CkhNlBG9RPZTA5A0hfkoPUp1QJ2reP4uggOGYaF/aZSyLwdyG18oHPADBbDFZ8tFK5EiAQN2CvPNJv+0b40qoOM8UyAgob6DtEbkINa1iW/jLgECVk9OwJr88/WUBliwPP7CAKsJGpR7e5K1Dej53xQEGBHPrJnoVCbYaibaV/lLAYCEfuJOPNiNwVp2RQGAJNnHSEmmPrHsorXIawRYqPnKUdeIDD6pDuisEnVA+hvjOI+vBogQ6ez4UAYkdH/udaMMeuC3RkdWWJTJGVacHm2JNujBB+xbkGXGV25RJmfsWBUnIAL6I7hoJbunaoBh0gwrELKoFUChtWVFmS3AU2E+5sSDfRetT/a9KiLu9Ea9ewT13o4E6Dhfatthc3PA3qX5n0SMwUo2OA6lUwZYFeYjz40hAkqtLapxvx47ssJ85BUGE6UBFmSyG2k6DethRYHUVbvIat8aMOBQjTs7KZ0U3XmGADEivZHtF2V2pzfoxsONwUoWvasmAnRiYTptRh6Ri21BNMBhF3VYjbsgnZ73+77EFpzHejPRll1IAc+F+biTf9abibbsmrdlqDU4xo/B82HfRStZL+un0xbgr5V7OyZgqyiTB1gX5iMn8M4rmzFYn3yJAaOHQPHS4Lo2pAUClZtxKsrkTvPTJzigwqXNlVa3YCVLIgEgqTalIzfBlazlrlpXdksFgNEP73sRepS2u2rdr/PauxTaM3BsSc3KBLztrlpPkXXCBWTTF3aWUMaMweok+MtbqIloYS2Bn96220y0vi5wf/oLNVHpozZi0AhQy9qVSP5Fuws1CRRQ3Q7mSsMsWIu80KssShc7e03wTQAd5/iT0LphjCJK5r7dBD5iDJ5FYmf/u0jYQV8PuaVmggPoqH5SPwZbIp7/fdznGn1RoJrj9GT4Sjc+aze/jQ6IVSejrOaYzYRIaSsxeFZTX2lDFx2rCR4ZELNORvHS41xldBdtqamrNG9/tF0X1b23/wOEF9kurDJQawAAAABJRU5ErkJggg=="
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

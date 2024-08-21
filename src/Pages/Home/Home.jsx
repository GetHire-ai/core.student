// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import moment from "moment";
// import "react-circular-progressbar/dist/styles.css";
// import { GetApi } from "../utilis/Api_Calling";

// const Home = () => {
//   const navigate = useNavigate();
  
//   const dummyJobs = [
//     {
//       JobId: {
//         _id: "job1",
//         positionName: "Software Engineer",
//         location: "New York, NY",
//         minExp: 2,
//         maxExp: 5,
//         maxSalary: 120000,
//         Openings: 3,
//         time: "2 days ago",
//         result: "Not shortlisted",
//       },
//       CompanyId: {
//         Image: "/images/company1.png",
//         Name: "Tech Innovations Inc.",
//       },
//     },
//     {
//       JobId: {
//         _id: "job2",
//         positionName: "Product Manager",
//         location: "San Francisco, CA",
//         minExp: 4,
//         maxExp: 7,
//         maxSalary: 150000,
//         Openings: 2,
//         time: "2 days ago",
//         result: "Resume Rejected",
//       },
//       CompanyId: {
//         Image: "/images/company2.png",
//         Name: "Product Solutions LLC",
//       },
//     },
//     {
//       JobId: {
//         _id: "job3",
//         positionName: "UI/UX Designer",
//         location: "Chicago, IL",
//         minExp: 1,
//         maxExp: 3,
//         maxSalary: 80000,
//         Openings: 5,
//         time: "2 days ago",
//         result: "Cleared",
//       },
//       CompanyId: {
//         Image: "/images/company3.png",
//         Name: "Creative Studios",
//       },
//     },
//   ];

//   const [selectedtab, setselectedtab] = useState("MyJobs");
//   const [Loading, setLoading] = useState(true);
//   const [allappiledjobs, setallappiledjobs] = useState(dummyJobs);
//   const [selectedJob, setSelectedJob] = useState(dummyJobs[0]); // Initialize with the first job

//   // Handle job card click
//   const handleJobClick = (job) => {
//     setSelectedJob(job);
//   };

//   useEffect(() => {
//     setLoading(false);
//   }, []);

//   return (
//     <div className="py-[14px] pl-[16px] pr-[14.56px] font-[Outfit]">
//       <div className="w-full border rounded-3xl p-5 min-h-[20vh] my-5 flex justify-start items-start bg-[#13d0a6] text-white flex-col">
//         <h2 className="text-xl font-bold">Climb the career ladder</h2>
//         <br />
//         <p>gethire ai tools and resources to help you take your career to the next level</p>
//         <br />
//         <button className="px-3 py-1 bg-blue-500 text-white font-semibold rounded-3xl mt-5">
//           Get Started
//         </button>
//       </div>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white col-span-1 lg:col-span-1 px-6 py-6 rounded-3xl border-2 border-gray-200">
//           <div className="text-[24px] flex w-full font-[400] justify-center items-center text-[#545454] mb-4">
//             <div className="flex-col lg:flex-row gap-10 flex">
//               <div
//                 onClick={() => {
//                   setselectedtab("MyJobs");
//                 }}
//                 className={`pb-[12px] px-[30px] cursor-pointer ${
//                   selectedtab === "MyJobs"
//                     ? "border-b-[3px] text-[#5356e9]  border-[#5356e9]"
//                     : "border-b-[3px] border-[#D9D9D9]"
//                 }`}
//               >
//                 Applied
//               </div>
//               <div
//                 onClick={() => {
//                   setselectedtab("MyInterview");
//                 }}
//                 className={`pb-[12px] pl-[14px] pr-[27px] cursor-pointer ${
//                   selectedtab === "MyInterview"
//                     ? "border-b-[3px] text-[#5356e9]  border-[#5356e9]"
//                     : "border-b-[3px] border-[#D9D9D9]"
//                 }`}
//               >
//                 Interviews
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4 overflow-auto h-[60vh]">
//             {allappiledjobs.map((job, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleJobClick(job)}
//                 className={`cursor-pointer bg-white p-4 rounded-xl shadow-sm border ${
//                   selectedJob.JobId._id === job.JobId._id ? "border-blue-500" : "border-gray-200"
//                 }`}
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="text-lg font-semibold">{job.JobId.positionName}</h4>
//                     <p className="text-sm text-gray-600">{job.JobId.location}</p>
//                     <p className="text-sm text-gray-500 mt-2">{job.JobId.time}</p>
//                   </div>
//                   <img
//                     src={job.CompanyId.Image}
//                     alt={job.CompanyId.Name}
//                     className="w-12 h-12 rounded-full"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="bg-white col-span-1 lg:col-span-1 p-6 rounded-3xl border-2 border-gray-200 h-[60vh] overflow-auto">
//           {selectedJob ? (
//             <div>
//               <h3 className="text-2xl font-bold mb-4">{selectedJob.JobId.positionName}</h3>
//               <p className="text-lg font-semibold mb-2">Company: {selectedJob.CompanyId.Name}</p>
//               <p className="text-gray-700 mb-4">{selectedJob.JobId.location}</p>
//               <p className="text-gray-600 mb-4">
//                 Experience Required: {selectedJob.JobId.minExp} - {selectedJob.JobId.maxExp} years
//               </p>
//               <p className="text-gray-600 mb-4">Salary: Rs. {selectedJob.JobId.maxSalary}</p>
//               <p className="text-gray-600 mb-4">Openings: {selectedJob.JobId.Openings}</p>
//               <p className="text-gray-600 mb-4">Application Status: {selectedJob.JobId.result}</p>
//             </div>
//           ) : (
//             <p>Select a job to see the details.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;






















import React, { useEffect, useState , useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import "react-circular-progressbar/dist/styles.css";
import { GetApi } from "../utilis/Api_Calling";

// import Logo from "../../assets/Images/Gethire SVG.svg";
import logo from "../../assets/Images/Gethire SVG.svg"
import { IoIosArrowForward } from "react-icons/io";
import { Construction } from "@mui/icons-material";

import AIToolsModal from "../AI Tools/AIToolsModal";

const Home = ({ onSectionVisible, onSectionHidden }) => {
  const path = useLocation();
  const navigate = useNavigate();
  const skillData = [
    {
      image: "/images/Ellipse 3290.svg",
      name: "Kimaya",
      skillName: "Ai Carrer Counsellor",
      buttonData: "comming soon !",
    },
    {
      image: "/images/Ellipse 3291.svg",
      name: "Kimaya",
      skillName: "Ai Carrer Counsellor",
      buttonData: "comming soon !",
    },
    {
      image: "/images/Ellipse 3292.svg",
      name: "Kimaya",
      skillName: "Skill Gap Analys",
      buttonData: "comming soon !",
    },
    {
      image: "/images/Ellipse 3293.svg",
      name: "Kimaya",
      skillName: "Mock interview",
      buttonData: "comming soon !",
    },
  ];

// this is dummy data for interviews
const dummyJobs = [
  {
    JobId: {
      _id: 'job1',
      positionName: 'Software Engineer',
      location: 'New York, NY',
      minExp: 2,
      maxExp: 5,
      maxSalary: 120000,
      Openings: 3,
      time:'2 days ago',
      result:'shortlisted'
    },
    CompanyId: {
      Image: '/images/company1.png',
      Name: 'Tech Innovations Inc.',
    },
  },
  {
    JobId: {
      _id: 'job2',
      positionName: 'Product Manager',
      location: 'San Francisco, CA',
      minExp: 4,
      maxExp: 7,
      maxSalary: 150000,
      Openings: 2,
       time:'2 days ago',
      result:'rejected'
    },
    CompanyId: {
      Image: '/images/company2.png',
      Name: 'Product Solutions LLC',
    },
  },
  {
    JobId: {
      _id: 'job3',
      positionName: 'UI/UX Designer',
      location: 'Chicago, IL',
      minExp: 1,
      maxExp: 3,
      maxSalary: 80000,
      Openings: 5,
       time:'2 days ago',
      result:'selected'
    },
    CompanyId: {
      Image: '/images/company3.png',
      Name: 'Creative Studios',
    },
  },
];


// dummy data for my interview
const applicationData = [
  {
    id: 1,
    jobTitle: 'Human Resource Intern',
    company: 'GoodSpace',
    status: [
      { stage: 'Applied', passed: true, date: '26 Jul, 2024', feedback: 'Shortlisted' },
      { stage: 'AI Interview', passed: false, date: '26 Jul, 2024', feedback: '...Pending' },
      { stage: 'Recruiter viewed your application', passed: true },
    ]
  },
  {
    id: 2,
    jobTitle: 'Software Developer Intern',
    company: 'TechStart',
    status: [
      { stage: 'Applied', passed: true, date: '20 Jul, 2024', feedback: 'Shortlisted' },
      { stage: 'Technical Interview', passed: true, date: '22 Jul, 2024', feedback: 'Passed' },
      { stage: 'Final Interview', passed: false, date: '25 Jul, 2024', feedback: '...Pending' },
    ]
  },
  {
    id: 3,
    jobTitle: 'Marketing Intern',
    company: 'BrandBoost',
    status: [
      { stage: 'Applied', passed: true, date: '15 Jul, 2024', feedback: 'Shortlisted' },
      { stage: 'HR Interview', passed: true, date: '18 Jul, 2024', feedback: 'Passed' },
      { stage: 'Offer Sent', passed: false, date: '20 Jul, 2024', feedback: '...Pending' },
    ]
  },
  {
    id: 4,
    jobTitle: 'Finance Analyst Intern',
    company: 'WealthManage',
    status: [
      { stage: 'Applied', passed: true, date: '10 Jul, 2024', feedback: 'Shortlisted' },
      { stage: 'Assessment', passed: true, date: '12 Jul, 2024', feedback: 'Passed' },
      { stage: 'HR Interview', passed: false, date: '15 Jul, 2024', feedback: '...Pending' },
    ]
  },
  {
    id: 5,
    jobTitle: 'Content Writer Intern',
    company: 'WriteUp',
    status: [
      { stage: 'Applied', passed: true, date: '28 Jun, 2024', feedback: 'Shortlisted' },
      { stage: 'Writing Test', passed: true, date: '30 Jun, 2024', feedback: 'Passed' },
      { stage: 'Interview', passed: false, date: '02 Jul, 2024', feedback: '...Pending' },
    ]
  }
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
  const [allappiledjobs, setallappiledjobs] = useState(dummyJobs);
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
    // Getallappiledjob();
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
  const [selectedJob, setSelectedJob] = useState(allappiledjobs[0]); // Initialize with the first job

  // Handle job card click
  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

//  for moving the company images---
// Determine how many cards to show at a time
const cardsToShow = 3;
const totalCards = companies.length;
const [offset, setOffset] = useState(0);

const handleMove = () => {
  setOffset((prevOffset) => (prevOffset + 1) % (totalCards - cardsToShow + 1));
};

// for generate the random number
const [random , setRandom] = useState(2);

useEffect(() => {
  setRandom(Math.floor(Math.random() * 3) + 1);  
  console.log("random number is " , random);
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
const [aiModal, setAiModal] = useState(false);

// this below is for my interview section


  return (
    
  //   <>
  //   <div className="py-4 pl-4 pr-4 font-[Outfit] sm:py-[14px] sm:pl-[16px] sm:pr-[14.56px]">
  //     <div className="max-w-full sm:max-w-4xl mb-8 sm:mb-12 mx-auto p-4 sm:p-6 bg-gradient-to-r from-teal-400 via-green-400 to-teal-300 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-8">
  //       <div className="space-y-4 text-center sm:text-left">
  //         <div className="flex items-center justify-center sm:justify-start space-x-2">
  //           <span className="text-xs bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full">
  //             Introducing
  //           </span>
  //         </div>
  //         <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
  //           Climb the career ladder
  //         </h2>
  //         <p className="text-base sm:text-lg text-white font-medium">
  //           GetHire tools and resources help you take your career to the next level
  //         </p>
  //         <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg transform transition hover:scale-105">
  //           Start exploring
  //         </button>
  //       </div>
  //       <div className="hidden md:block">
  //         <div className="relative flex justify-center items-center bg-white w-32 sm:w-48 h-32 sm:h-48 rounded-full">
  //           <img
  //             src={logo}
  //             alt="GetHire Logo"
  //             className="w-24 sm:w-36 transform transition hover:scale-110"
  //           />
  //         </div>
  //       </div>
  //     </div>
  
  //     <div className="grid lg:grid-cols-6">
  //       <div className="bg-white mt-1 col-start-1 col-end-7 px-4 py-6 sm:px-[39px] sm:py-[49px] rounded-[20px] sm:rounded-[30px] border-[1px] border-[#efecec]">
  //         <div className="text-lg sm:text-[24px] flex w-full font-[400] justify-center items-center text-[#545454]">
  //           <div className="flex flex-col sm:flex-row gap-2 sm:gap-[10px] lg:gap-0">
  //             <div
  //               onClick={() => {
  //                 setselectedtab("MyJobs");
  //               }}
  //               className={`pb-2 sm:pb-[12px] px-4 sm:px-[30px] hover:cursor-pointer ${
  //                 selectedtab === "MyJobs"
  //                   ? "border-b-2 sm:border-b-[3px] text-[#5356e9]  border-[#5356e9]"
  //                   : "border-b-2 sm:border-b-[3px] border-[#D9D9D9]"
  //               }`}
  //             >
  //               Applied
  //             </div>
  //             <div
  //               onClick={() => {
  //                 setselectedtab("MyInterview");
  //               }}
  //               className={`pb-2 sm:pb-[12px] pl-2 sm:pl-[14px] pr-4 sm:pr-[27px] hover:cursor-pointer ${
  //                 selectedtab === "MyInterview"
  //                   ? "border-b-2 sm:border-b-[3px] text-[#5356e9]  border-[#5356e9]"
  //                   : "border-b-2 sm:border-b-[3px] border-[#D9D9D9]"
  //               }`}
  //             >
  //               Interviews
  //             </div>
  //           </div>
  //         </div>
  //         <div className="bg-[#d9d9d9] mt-4 sm:mt-[31px] bg-opacity-[20%] rounded-[10px] sm:rounded-[16px] flex items-center justify-center gap-2 sm:gap-[14px] p-4 sm:p-[16px]">
  //           <img
  //             src="/images/search.svg"
  //             className="w-4 sm:w-[17px] h-4 sm:h-[17px]"
  //             alt=""
  //           />
  //           <input
  //             type="text"
  //             className="w-[80%] bg-[#d9d9d9] bg-opacity-[1%] outline-none"
  //             placeholder="Search Skills"
  //           />
  //           <p className="text-sm sm:text-[16px] font-[500] text-[#4234a2]">View all</p>
  //         </div>
  //         <div className="grid md:grid-cols-2 mt-8 sm:mt-[46px] gap-6 sm:gap-[40px]">
  //           {selectedtab === "MyJobs" && (
  //             <div className="relative">
  //               <div className="flex flex-wrap gap-4">
  //                 {allappiledjobs.map((job, index) => (
  //                   <div
  //                     key={index}
  //                     onClick={() => handleJobClick(job)}
  //                     className="bg-[#fff] p-4 sm:p-[16px] rounded-[16px] shadow-lg sm:shadow-xl hover:shadow-2xl cursor-pointer"
  //                   >
  //                     <div className="flex justify-between items-center gap-4 sm:gap-16">
  //                       <p className="text-lg sm:text-[20px] font-[600]">
  //                         {job?.JobId?.positionName}
  //                       </p>
  //                       <img src="/images/material-symbols-light_share.svg" alt="Share" />
  //                     </div>
  //                     <div className="flex gap-2 sm:gap-[7px] mt-4 sm:mt-[15px]">
  //                       <img
  //                         src="/images/carbon_location.svg"
  //                         className="w-4 sm:w-[15.13px] h-4 sm:h-[19.25px]"
  //                         alt="Location"
  //                       />
  //                       <p className="text-black text-opacity-[50%] text-sm sm:text-[14px] font-[400]">
  //                         {job?.JobId?.location}
  //                       </p>
  //                     </div>
  //                     <div className="flex mt-4 sm:mt-[15px] gap-4 sm:gap-7 justify-between">
  //                       <p className="text-black text-opacity-[50%] text-sm sm:text-[14px] font-[400]">
  //                         {job?.JobId?.time}
  //                       </p>
  //                       {job?.JobId?.result === "Cleared" ? (
  //                         <p className="text-blue-500">{job?.JobId?.result}</p>
  //                       ) : (
  //                         <p className="text-red-500">X {job?.JobId?.result}</p>
  //                       )}
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  
  //               {selectedJob && (
  //                 <div
  //                   className="absolute top-0 right-0 h-full w-[320px] sm:w-[500px] bg-[#fff] p-4 sm:p-[16px] rounded-[16px] shadow-xl border border-[#d9d9d9]"
  //                   style={{ top: "10px", right: "-300px" }}
  //                 >
  //                   <div className="flex flex-row justify-between">
  //                     <div>
  //                       <h2 className="text-lg sm:text-[20px] font-[600]">
  //                         {selectedJob.JobId.positionName}
  //                       </h2>
  //                       <p>{selectedJob.JobId.location}</p>
  //                     </div>
  //                     <div>
  //                       <button
  //                         className="bg-blue-600 p-2 rounded-md shadow-lg text-white hover:bg-blue-900 hover:shadow-2xl"
  //                         onClick={() => alert("View job button is clicked")}
  //                       >
  //                         View Jobs
  //                       </button>
  //                     </div>
  //                   </div>
  //                   <hr className="border-t-2 border-gray-300 my-4" />
  //                   <p className="text-lg sm:text-xl">Application status</p>
  //                   <div className="ml-4">
  //                     <p>Applied</p>
  //                     <div className="flex flex-row gap-4 sm:gap-10">
  //                       {selectedJob.JobId.result === "Cleared" ? (
  //                         <p className="text-blue-500">{selectedJob.JobId.result}</p>
  //                       ) : (
  //                         <p className="text-red-500">X {selectedJob.JobId.result}</p>
  //                       )}
  //                       <div className="flex flex-col">
  //                         <button className="text-blue-500 hover:text-blue-700">
  //                           View Feedback
  //                         </button>
  //                         <hr className="border-t-1 border-blue-300" />
  //                       </div>
  //                     </div>
  //                     <p className="text-blue-600">On 7 Aug 2024</p>
  //                   </div>
  //                   <div className="flex items-center mt-4 sm:mt-7">
  //                     <div>
  //                       <p className="text-base font-extralight">
  //                         Our Suggested Product
  //                       </p>
  //                       <div className="ml-2 sm:ml-3 mt-2 sm:mt-3">
  //                         <p className="text-red-500 text-lg sm:text-xl">Profile Boost</p>
  //                         <p className="font-extralight mt-1 sm:mt-3">
  //                           Increase your chances of selection by using Profile Boost service.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="mt-4 sm:mt-8 flex flex-col items-center">
  //                     <button
  //                       className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition hover:scale-105"
  //                       onClick={() => alert("Boost your profile")}
  //                     >
  //                       Boost your Profile
  //                     </button>
  //                   </div>
  //                 </div>
  //               )}
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </>
  


    <>
      <div className="py-[13px] pl-[16px] pr-[14.56px] font-[Outfit] w-[68%] items-center mt-3   ">
        {/* <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-6  lg:gap-[27px]">
          <div className="bg-white w-full col-start-1 col-end-7 mb-[59px]  px-[29px] py-[42px] flex border-[1px] border-[#efecec] rounded-[30px]">
            <div className="w-full  flex-col lg:flex-row flex gap-[5px]">
              <div className="flex self-center w-[148px] justify-center items-center flex-col">
                <img
                  src={
                    studentprofile?.Image
                      ? studentprofile?.Image
                      : "data:image/png;base64,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"
                  }
                  className="w-full rounded-[50%]"
                  alt=""
                />
                <div className="bg-[#4234a2] mt-[-20px] px-[22px] text-white py-[1.56px] rounded-[28px] flex justify-center items-center text-[14px] font-[500]">
                  5%
                </div>
              </div>
              <div className=" w-full lg:ml-[58px]">
                <div className="flex gap-[14.19px]">
                  <img
                    src="/images/diamondBlue.svg"
                    className="w-[35.63px] h-[32.06px]"
                    alt=""
                  />
                  <p className="text-[24px] font-[500]">Step into the future</p>
                </div>
                <div className="mt-[30px] flex  flex-row">
                  <div className="flex overflow-x-scroll w-[600px] gap-[30px]">
                    {skillData.map((d, index) => (
                      <div
                        key={index}
                        className="bg-[#d9d9d9] rounded-[8px] flex w-[147px] flex-col justify-center items-center gap-[6.56px] bg-opacity-[10%]"
                      >
                        <img
                          src={d.image}
                          className="w-[100px] rounded-[50%] h-[100px]"
                          alt=""
                        />
                        <div className="w-full flex justify-center items-center flex-col">
                          <p className="text-[14px] pb-[2px] font-[500]">
                            {d.name}
                          </p>
                          <p className="text-[12px] pb-[10px] font-[400]">
                            {d.skillName}
                          </p>
                          <button className="bg-[#4234a2] rounded-[4px] text-[12px] font-[400] text-white w-[107px] h-[27px] flex justify-center items-center">
                            {d.buttonData}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="w-full border rounded-3xl p-5 min-h-[20vh] my-5 flex justify-start items-start bg-[#13d0a6] text-white flex-col">
          <h2 className="text-xl font-bold">Climb the career ladder</h2>
          <br />
          <p>
            gethire ai tools and resorces to help you take your career to the
            next level
          </p>
          <br />
          <button className="px-3 py-1 bg-blue-500 text-white font-semibold rounded-3xl mt-5">
            Get Started
          </button>
        </div> */}
        
        <div ref={sectionRefs.section1} id="section1" className="  h-48 mb-12 max-2xl:h-[180px]  mx-auto p-6 bg-gradient-to-r from-teal-400 via-green-400 to-teal-300 rounded-2xl shadow-xl flex items-center justify-between space-x-8">
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
                    GetHire tools and resources help you take your career to the next
                    level
                  </p>
              </div>
              <button className="mt-4 bg-blue-600 max-2xl:text-[13px] max-2xl:font-normal max-2xl:w-[150px] text-sm hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105"
               onClick={()=>{setAiModal(true)}}
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


             {/* <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-teal-400 to-green-300 rounded-2xl shadow-xl flex items-center justify-between">
      <div className="space-y-4 pl-6">
        <div className="flex items-center space-x-2">
          <span className="text-xs bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full">
            Introducing
          </span>
        </div>
        <h2 className="text-4xl font-extrabold text-white leading-tight">
          Climb the career ladder
        </h2>
        <p className="text-lg text-white font-medium">
          Naukri 360's tools and resources help you take your career to the next
          level
        </p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105">
          Start exploring
        </button>
      </div>
      <div className="flex justify-center items-center w-1/3 relative">
        <div className="bg-white rounded-r-2xl flex items-center justify-center w-full h-full">
          <div className="bg-white rounded-full p-4 shadow-md">
            <img
              src={logo}
              alt="Naukri 360 Logo"
              className="w-28 md:w-36"
            />
          </div>
        </div>
      </div>
             </div>  */}
         






        <div className="grid lg:grid-cols-6 -mt-7">
          <div className="bg-white mt-[1px] col-start-1 col-end-7 px-[39px] py-[49px] rounded-[30px] border-[1px] border-[#efecec] ">
            <div className="text-[24px] flex w-ful  font-[400] justify-center items-center text-[#545454] -mt-8">
              <div className=" flex flex-row  gap-0 ">
                {/* <div
                  onClick={() => {
                    setselectedtab("AllJobs");
                  }}
                  className={`pb-[12px] pr-[8px] pl-[32px] ${
                    selectedtab === "AllJobs"
                      ? "border-b-[3px] text-[#5356e9]  border-[#5356e9]"
                      : "border-b-[3px] border-[#D9D9D9]"
                  } `}
                >
                  All Jobs
                </div> */}
                <div
                  onClick={() => {
                    setselectedtab("MyJobs");
                  }}
                  className={`pb-[12px] text-lg px-[30px] hover:cursor-pointer ${
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
                  className={`pb-[12px] pl-[14px] text-lg pr-[27px] hover:cursor-pointer ${
                    selectedtab === "MyInterview"
                      ? "border-b-[3px] text-[#5356e9]  border-[#5356e9]"
                      : "border-b-[3px] border-[#D9D9D9]"
                  }`}
                >
                  Interviews
                </div>
              </div>
            </div>
            <div className="bg-[#d9d9d9] max-2xl:ml-7 ml-16 mt-2 bg-opacity-[20%] w-96 max-lg:justify-between rounded-[16px] flex items-center justify-center gap-[14px] p-[10px]">
              <img
                src="/images/search.svg"
                className="w-[17px] h-[17px]"
                alt=""
              />
              <input
                type="text"
                className="w-[60%] bg-[#d9d9d9] bg-opacity-[1%] outline-none"
                placeholder="Search Skills"
              />
              <p className="text-[16px] max-lg:text-[13px] font-[500] hover:cursor-pointer text-[#4234a2]">View all</p>
            </div>
            <div className="grid md:grid-cols-2 w-full  mt-[46px] gap-[40px] ">
              {/* <div
                className="rounded-[16px] py-[26px] px-[20px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1]"
                onClick={() => navigate("/premium")}
                style={{ cursor: "pointer" }}
               >
                <div className="flex gap-[10px]">
                  <img
                    src="/images/Star 1.svg"
                    className="w-[22px] h-[22px]"
                    alt=""
                  />
                  <p className="text-[18px] font-[500] text-white">
                    120 Premium members received job opportunities this week
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-[10px] mt-[15px]">
                  <div className="relative">
                    <img
                      src="/images/Polygon 1.svg"
                      className="w-[72px] h-[72px]"
                      alt=""
                    />
                    <img
                      src="/images/diamondBlue.svg"
                      className="w-[35.63px] absolute top-[22px] left-[18px] h-[32.06px]"
                      alt=""
                    />
                  </div>
                  <p className="text-[40px] font-[500] text-white">
                    Go Premium
                  </p>
                </div>
              </div> */}

              {/* {selectedtab === "AllJobs" &&
                AllJobs?.map((job, index) => {
                  const isJobApplied = appiledjobs.includes(job._id);
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(`/blank/JobViewDetails/${job._id}`);
                      }}
                      className="bg-[#fff] p-[16px] rounded-[16px] shadow-sm"
                    >
                      <div className="flex justify-between items-center">
                        <p className="text-[20px] font-[600]">
                          {job?.positionName}
                          <br />
                          <span>
                            <p className="text-black text-opacity-[50%] text-[14px] font-[400]">
                              {moment(job.createdAt).fromNow()}
                              {moment(job.createdAt)
                                .fromNow()
                                .includes("hours") &&
                              moment(job.createdAt).fromNow() !==
                                "a few seconds ago" &&
                              moment(job.createdAt).fromNow() !==
                                "in a few seconds"
                                ? " ago"
                                : ""}
                            </p>
                          </span>
                        </p>

                        <img
                          src="/images/material-symbols-light_share.svg"
                          alt=""
                        />
                      </div>
                      <div className="flex gap-[7px] mt-[15px]">
                        <img
                          src="/images/carbon_location.svg"
                          className="w-[15.13px] h-[19.25px]"
                          alt=""
                        />
                        <p className="text-black text-opacity-[50%] text-[14px] font-[400]">
                          {job?.location}
                        </p>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-[16px] mt-[10px]">
                        <div className="w-[150px]  justify-center h-[30px] rounded-[8px] items-center border-[1px] border-[#d9d9d9] text-black text-opacity-[50%] flex gap-[4px]">
                          <img
                            src="/images/home.svg"
                            className="w-[18px] h-[18px]"
                            alt=""
                          />
                          <p className="text-[14px] font-[400]">
                            Work From Home
                          </p>
                        </div>
                        <div className="w-[100px] justify-center h-[30px] rounded-[8px] items-center border-[1px] border-[#d9d9d9] text-black text-opacity-[50%] flex gap-[4px]">
                          <img src="/images/bytesize_work.svg" alt="" />
                          <p className="text-[12px] font-[400]">
                            {job?.minExp} to {job?.maxExp} Years
                          </p>
                        </div>
                        <div className="w-[115px] flex justify-center h-[30px] rounded-[8px] items-center border-[1px] border-[#d9d9d9] text-[#4234a2]">
                          <p className="text-[11px] font-[400]">
                            Rs. {job?.minSalary} to {job?.maxSalary}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row w-full gap-[20px] justify-between mt-[20px] lg:items-center">
                        <div className="flex gap-[10px]">
                          <img
                            src={
                              job?.Company?.Image
                                ? job?.Company?.Image
                                : "https://cdn.vectorstock.com/i/1000v/64/35/icon-logo-for-construction-business-vector-19196435.jpg"
                            }
                            className="w-[38px] h-[38px] rounded-[50%]"
                            alt=""
                          />
                          <div>
                            <p className="text-[15px] font-[500]">
                              {job?.Company?.Name}
                            </p>
                            <p className="text-[13px] font-[400] text-black text-opacity-[50%]">
                              Available Post {job?.Openings}
                            </p>
                          </div>
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
                  );
                })}
              {Loading && (
                <div className="flex justify-center items-center text-2xl">
                  Loading...
                </div>
              )} */}


              {/* --------------------------------------------------------------------------------- */}
              {/* {selectedtab === "MyJobs" && 
                allappiledjobs?.map((job, index) => {
                  const jobId = job?.JobId?._id;
                  const takenTest = hasTakenTest(jobId);
                  return (
                    <div
                      key={index}
                      className="bg-[#fff] p-[16px] rounded-[16px] shadow-xl hover:shadow-2xl "
                     >
                      

                          <div className="flex justify-between items-center">
                            <p className="text-[20px] font-[600]">
                              {job?.JobId?.positionName}
                            </p>
                            <img
                              src="/images/material-symbols-light_share.svg"
                              alt=""
                            />
                          </div>
                          <div className="flex gap-[7px] mt-[15px]">
                            <img
                              src="/images/carbon_location.svg"
                              className="w-[15.13px] h-[19.25px]"
                              alt=""
                            />
                            <p className="text-black text-opacity-[50%] text-[14px] font-[400]">
                              {job?.JobId?.location}
                            </p>
                          </div>
                          <div className="flex  mt-[15px] gap-7 justify-between  ">
                                <p className="text-black text-opacity-[50%] text-[14px] font-[400]">{job?.JobId?.time}</p>
                                <p className=" text-red-500 ">{job?.JobId?.result}</p>
                          </div>
                     
                    </div>
                  );
                })} */}

                
                     
                      {/* <div className="relative">
                          <div className="flex flex-wrap gap-4">
                            {allappiledjobs.map((job, index) => (
                              <div
                                key={index}
                                onClick={() => handleJobClick(job)}
                                className="bg-[#fff] p-[16px] rounded-[16px] shadow-xl hover:shadow-2xl cursor-pointer"
                              >
                                <div className="flex justify-between items-center">
                                  <p className="text-[20px] font-[600]">{job?.JobId?.positionName}</p>
                                  <img src="/images/material-symbols-light_share.svg" alt="Share" />
                                </div>
                                <div className="flex gap-[7px] mt-[15px]">
                                  <img src="/images/carbon_location.svg" className="w-[15.13px] h-[19.25px]" alt="Location" />
                                  <p className="text-black text-opacity-[50%] text-[14px] font-[400]">{job?.JobId?.location}</p>
                                </div>
                                <div className="flex mt-[15px] gap-7 justify-between">
                                  <p className="text-black text-opacity-[50%] text-[14px] font-[400]">{job?.JobId?.time}</p>
                                  <p className="text-red-500">{job?.JobId?.result}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {selectedJob && (
                                <div
                                  className="absolute top-0 right-0 h-96 bg-[#fff] p-[16px] rounded-[16px] shadow-xl border border-[#d9d9d9]"
                                  style={{ width: '300px', top: '10px', right: '10px' }}
                                >
                                  <h2 className="text-[20px] font-[600]">{selectedJob.JobId.positionName}</h2>
                                  <p><strong>Location:</strong> {selectedJob.JobId.location}</p>
                                  <p><strong>Time:</strong> {selectedJob.JobId.time}</p>
                                  <p><strong>Result:</strong> {selectedJob.JobId.result}</p>
                                  <div className="flex items-center mt-4">
                                    <img src={selectedJob.CompanyId.Image} className="w-[38px] h-[38px] rounded-[50%]" alt="Company" />
                                    <div className="ml-2">
                                      <p className="text-[15px] font-[500]">{selectedJob.CompanyId.Name}</p>
                                    </div>
                                  </div>
                                </div>
                              )}

                        </div>  */}
                        
                        {/* {selectedtab === "MyJobs" && 
                           <div className="relative">
                            <div className="flex flex-wrap gap-4 max-2xl:gap-3 max-2xl:w-60">
                              {allappiledjobs.map((job, index) => (
                                <div
                                  key={index}
                                  onClick={() => handleJobClick(job)}
                                  className="bg-[#fff] p-[16px] rounded-[16px] shadow-xl hover:shadow-2xl cursor-pointer"
                                >
                                  <div className="flex justify-between items-center gap-16">
                                    <p className="text-[20px] font-[600]">{job?.JobId?.positionName}</p>
                                    <img src="/images/material-symbols-light_share.svg" alt="Share" />
                                  </div>
                                  <div className="flex gap-[7px] mt-[15px]">
                                    <img src="/images/carbon_location.svg" className="w-[15.13px] h-[19.25px]" alt="Location" />
                                    <p className="text-black text-opacity-[50%] text-[14px] font-[400]">{job?.JobId?.location}</p>
                                  </div>
                                  <div className="flex mt-[15px] gap-7 justify-between">
                                    <p className="text-black text-opacity-[50%] text-[14px] font-[400]">{job?.JobId?.time}</p>
                                      {job?.JobId?.result === 'Cleared' ? (
                                          <p className=" text-blue-500"> {job?.JobId?.result}</p> 
                                        ) : (
                                            <p className=" text-red-500">X {job?.JobId?.result}</p> 
                                          )}
                                  </div>
                                </div>
                              ))}
                            </div>
                            </div>
                        } */}
                         
                       {/* my original one main -----------------------------------------------------------------  */}
                           {/* <div className="flex flex-row gap-6  max-lg:pr-7 max-2xl:-mt-6 -mt-6 w-full ">
                              <div className=" w-40 max-lg:w-14 max-lg:-pl-5  ">
                                      {selectedtab === "MyJobs" && (
                                        <div className="flex flex-col flex-1 gap-1 max-sm:gap-3  ">
                                          {dummyJobs.map((job, index) => (
                                            <div
                                              key={index}
                                              onClick={() => handleJobClick(job)}
                                              ref={sectionRefs.section2} id="section2" 
                                              className="bg-[#fff] p-[14px] -ml-5  max-2xl:h-36 w-48 max-lg:w-48 max-sm:w-36 max-sm:h-40 rounded-[20px] shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
                                            >
                                              <div className="flex justify-between max-2xl:-mb-3 -mb-3  items-center gap-4 max-lg:gap-2 max-sm:gap-1">
                                                <p className="text-[15px] max-2xl:text-[14px] max-sm:text-[16px] font-[700]">{job.JobId.positionName}</p>
                                                <img src="/images/material-symbols-light_share.svg" alt="Share" className="w-[17px] h-[17px] max-lg:w-[15px] max-lg:h-[15px]" />
                                              </div>
                                              <div className="flex gap-[5px] max-2xl:-mb-3 -mb-3 mt-[20px] max-lg:gap-[6px]">
                                                <img src="/images/carbon_location.svg" className="w-[16px] h-[20px] max-lg:w-[15px] max-lg:h-[18px]" alt="Location" />
                                                <p className="text-black text-opacity-[60%] text-[12px] max-lg:text-[11px] max-sm:text-[10px] font-[500]">{job.JobId.location}</p>
                                              </div>
                                              <div className="flex mt-[20px] gap-8 max-sm:gap-2 justify-between">
                                                <p className="text-black text-opacity-[60%] text-[12px] font-[500] max-lg:text-[13px] max-sm:text-[11px]">{job.JobId.time}</p>
                                                {job.JobId.result === 'Cleared' ? (
                                                  <p className="text-blue-500 text-[11px] max-lg:text-[10px]">{job.JobId.result}</p>
                                                ) : (
                                                  <p className="text-red-500 max-lg:text-[13px] text-[12px] ">X {job.JobId.result}</p>
                                                )}
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                              </div>
                              <div className=" w-96  ">
                                      {selectedJob && (
                                        <div
                                          className="w-72  max-2xl:w-[290px] max-xl:w-[300px] bg-[#fff] p-[24px] rounded-[20px] shadow-xl border border-[#d9d9d9] "
                                        >
                                          <div className="flex flex-row justify-between">
                                            <div>
                                              <h2 className="text-[19px] font-[700] max-lg:text-[17px]">{selectedJob.JobId.positionName}</h2>
                                              <p className="text-[12px]">{selectedJob.JobId.location}</p>
                                            </div>
                                            <div>
                                              <button
                                                className="bg-blue-600 p-3 text-[12px] h-9 flex items-center rounded-md shadow-lg text-white max-lg:p-2 hover:bg-blue-900 hover:shadow-2xl"
                                                onClick={() => alert("View job button is clicked")}
                                              >
                                                View Jobs
                                              </button>
                                            </div>
                                          </div>
                                          <hr className="border-t-2 border-gray-300 my-2" />
                                          <p className="text-[17px]">Application status</p>
                                          <div className="ml-4">
                                            <p className=" text-[14px] mb-[3px]">Applied</p>
                                            <div className="flex flex-row gap-12">
                                              {selectedJob.JobId.result === 'Cleared' ? (
                                                <p className="text-blue-500 text-[14px]">{selectedJob.JobId.result}</p>
                                              ) : (
                                                <p className="text-red-500 text-[14px]">X {selectedJob.JobId.result}</p>
                                              )}
                                              <div className="flex flex-col -ml-2">
                                                <button className="text-blue-500 text-xs hover:text-blue-700">View Feedback</button>
                                                <hr className="border-t-1 border-blue-300" />
                                              </div>
                                            </div>
                                            <p className="text-blue-600 text-[14px] mt-[2px]">On 7 Aug 2024</p>
                                          </div>
                                          <div className="flex items-center mt-5">
                                            <div className="">
                                              <p className="text-base font-extralight">Our Suggested Product</p>
                                              <div className="ml-4 mt-2">
                                                <p className="text-red-500 text-lg">Profile Boost</p>
                                                <p className="font-extralight text-sm">Your application would be shown on the priority list to the recruiter</p>
                                                <div className="flex flex-row gap-6 mt-2">
                                                  <button className="hover:text-blue-500 text-[14px] hover:scale-105 duration-300">Buy Now</button>
                                                  <button className="text-red-400 hover:scale-105 text-sm duration-300">Explore</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                              </div>
                          </div> */}

                      <div className="flex flex-row gap-6   max-lg:pr-7 max-2xl:-mt-6 -mt-6 w-full ">
                              <div className=" w-[90%] max-lg:w-14 max-lg:-pl-5  ">
                                      {selectedtab === "MyJobs" && (
                                        <div className=" flex flex-row gap-3  -ml-3 ">
                                                <div className="flex flex-col flex-1 gap-1 max-sm:gap-3  ">
                                                {dummyJobs.map((job, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => handleJobClick(job)}
                                                    ref={sectionRefs.section2} id="section2" 
                                                    className="bg-[#fff] p-[14px] flex flex-col -ml-5  max-2xl:h-28 w-52 max-lg:w-48 max-sm:w-36 max-sm:h-40 rounded-[20px] shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
                                                  >
                                                    <div className="flex justify-between max-2xl:-mb-3 -mb-3  items-center gap-4 max-lg:gap-1 max-sm:gap-0">
                                                      <p className="text-[15px] max-2xl:text-[14px] max-sm:text-[16px] font-[700]">{job.JobId.positionName}</p>
                                                      <img src="/images/material-symbols-light_share.svg" alt="Share" className="w-[17px] h-[17px] max-lg:w-[15px] max-lg:h-[15px]" />
                                                    </div>
                                                    <div className="flex gap-[5px] max-2xl:-mb-4 -mb-4 mt-[18px] max-lg:gap-[6px]">
                                                      <p className="text-black text-opacity-[60%] text-[12px] max-lg:text-[11px] max-sm:text-[10px] font-[500]">{job.CompanyId.Name}</p>
                                                    </div>
                                                    <div className="flex gap-[5px] max-2xl:-mb-3 -mb-3 mt-[20px] max-lg:gap-[6px]">
                                                      <img src="/images/carbon_location.svg" className="w-[16px] h-[20px] max-lg:w-[15px] max-lg:h-[18px]" alt="Location" />
                                                      <p className="text-black text-opacity-[60%] text-[12px] max-lg:text-[11px] max-sm:text-[10px] font-[500]">{job.JobId.location}</p>
                                                    </div>
                                                    <div className="flex mt-[20px] gap-4 max-2xl:gap-1 max-sm:gap-2 justify-between">
                                                      <p className="text-black text-opacity-[60%] text-[12px] font-[500] max-lg:text-[13px] max-sm:text-[11px]">{job.JobId.time}</p>
                                                      {job.JobId.result === 'rejected' ? (
                                                        <p className="text-red-500 max-lg:text-[13px] text-[12px] ">X {job.JobId.result}</p>
                                                      ) : (
                                                        <p className="text-blue-500 text-[11px] max-lg:text-[10px]">{job.JobId.result}</p>
                                                      )}
                                                    </div>
                                                  </div>
                                                ))}
                                                </div>
                                                {/* <div
                                                  className="min-w-[300px] flex-grow-1 max-2xl:min-w-[260px] max-xl:min-w-[270px] max-2xl:-ml-2 bg-[#fff] p-[24px] rounded-[20px] shadow-xl border border-[#d9d9d9] "
                                                 >
                                                  <div className="flex flex-row justify-between">
                                                    <div>
                                                      <h2 className="text-[17px] font-[700] max-lg:text-[16px] max-2xl:text-[16px] ">{selectedJob.JobId.positionName}</h2>
                                                      <p className="text-[12px]">{selectedJob.CompanyId.Name}</p>
                                                      <p className="text-[10px]">{selectedJob.JobId.location}</p>
                                                    </div>
                                                    <div>
                                                      <button
                                                        className="bg-blue-600 p-3 text-[11px] h-9 flex items-center max-2xl:text-[10px] max-2xl:p-1 max-2xl:rounded-lg max-2xl:h-7  rounded-md shadow-lg text-white max-lg:p-2 hover:bg-blue-900 hover:shadow-2xl"
                                                        onClick={() => alert("View job button is clicked")}
                                                      >
                                                        View Jobs
                                                      </button>
                                                    </div>
                                                  </div>
                                                  <hr className="border-t-2 border-gray-300 my-2" />
                                                  <p className="text-[16px] max-2xl:text-[15px]">Application status</p>
                                                  <div className="ml-4">
                                                    <p className=" text-[14px] mb-[3px]">Applied</p>
                                                    <div className="flex flex-row gap-12">
                                                      {selectedJob.JobId.result === 'Cleared' ? (
                                                        <p className="text-blue-500 text-[14px] mb-1">{selectedJob.JobId.result}</p>
                                                      ) : (
                                                        <p className="text-red-500 text-[14px] mb-1 ">X {selectedJob.JobId.result}</p>
                                                      )}
                                                      <div className="flex flex-col -ml-2">
                                                        <button className="text-blue-500 text-xs hover:text-blue-700">View Feedback</button>
                                                        <hr className="border-t-1 border-blue-300" />
                                                      </div>
                                                    </div>
                                                    <p className="text-blue-600 text-[14px] mt-[2px]">On 7 Aug 2024</p>
                                                  </div>
                                                  <div className="flex items-center mt-5">
                                                    <div className="">
                                                      <p className="text-[15px] font-extralight">Our Suggested Product</p>
                                                      <div className="ml-4 mt-2">
                                                        <p className="text-red-500 text-[16px]">Profile Boost</p>
                                                        <p className="font-extralight text-[13px]">Your application would be shown on the priority list to the recruiter</p>
                                                        <div className="flex flex-row gap-6 mt-2">
                                                          <button className="hover:text-blue-500 text-[14px] hover:scale-105 duration-300">Buy Now</button>
                                                          <button className="text-red-400 hover:scale-105 text-sm duration-300">Explore</button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div> */}
                                             <div className="min-w-[300px] flex-grow-1 max-2xl:min-w-[260px] max-xl:min-w-[270px] max-2xl:-ml-2 bg-[#fff] p-[24px] rounded-[20px] shadow-xl border border-[#d9d9d9]">
                                                <div className="flex flex-row justify-between">
                                                  <div>
                                                    <h2 className="text-[17px] font-[700] max-lg:text-[16px] max-2xl:text-[16px]">
                                                      {selectedJob.JobId.positionName}
                                                    </h2>
                                                    <p className="text-[12px]">{selectedJob.CompanyId.Name}</p>
                                                    <p className="text-[10px]">{selectedJob.JobId.location}</p>
                                                  </div>
                                                  <div>
                                                    <button
                                                      className="bg-blue-600 p-3 text-[11px] h-9 flex items-center max-2xl:text-[10px] max-2xl:p-1 max-2xl:rounded-lg max-2xl:h-7 rounded-md shadow-lg text-white max-lg:p-2 hover:bg-blue-900 hover:shadow-2xl"
                                                      onClick={() => alert("View job button is clicked")}
                                                    >
                                                      View Jobs
                                                    </button>
                                                  </div>
                                                </div>
                                                <hr className="border-t-2 border-gray-300 my-2" />
                                                <p className="text-[16px] max-2xl:text-[15px]">Application Status</p>

                                                <div className="ml-4 mt-4">
                                                  {["Applied", "Shortlisted", "Selected", "Rejected"].map((status, index, statuses) => {
                                                    const currentIndex = statuses.findIndex(
                                                      (s) => s.toLowerCase() === selectedJob.JobId.result.toLowerCase()
                                                    );
                                                    const isActive = index === currentIndex;
                                                    const isBeforeActive = index <= currentIndex;
                                                    const isPending = index > currentIndex;

                                                    return (
                                                      <div key={index} className="flex items-center mb-4">
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
                                                          <p className={`text-[14px] ${isBeforeActive ? "text-blue-600" : "text-gray-500"}`}>
                                                            {status}
                                                          </p>
                                                          {isPending && <p className="text-[12px] text-red-400">Pending...</p>}
                                                          {isActive && !isPending && status !== "Rejected" && (
                                                            <p className="text-[12px] text-gray-400">On 26 Jul, 2024</p>
                                                          )}
                                                          {status === "Rejected" && isActive && (
                                                            <p className="text-[12px] text-red-600">Rejected on 26 Jul, 2024</p>
                                                          )}
                                                        </div>
                                                      </div>
                                                    );
                                                  })}
                                                </div>

                                                <div className="flex items-center mt-5">
                                                  <div>
                                                    <p className="text-[15px] font-extralight">Our Suggested Product</p>
                                                    <div className="ml-4 mt-2">
                                                      <p className="text-red-500 text-[16px]">Profile Boost</p>
                                                      <p className="font-extralight text-[13px]">
                                                        Your application would be shown on the priority list to the recruiter
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






                       




                                        </div>
                                      )}
                              </div>
                              {/* <div className=" w-96  ">
                                      {selectedJob && (
                                        <div
                                          className="w-72  max-2xl:w-[290px] max-xl:w-[300px] bg-[#fff] p-[24px] rounded-[20px] shadow-xl border border-[#d9d9d9] "
                                        >
                                          <div className="flex flex-row justify-between">
                                            <div>
                                              <h2 className="text-[19px] font-[700] max-lg:text-[17px]">{selectedJob.JobId.positionName}</h2>
                                              <p className="text-[12px]">{selectedJob.JobId.location}</p>
                                            </div>
                                            <div>
                                              <button
                                                className="bg-blue-600 p-3 text-[12px] h-9 flex items-center rounded-md shadow-lg text-white max-lg:p-2 hover:bg-blue-900 hover:shadow-2xl"
                                                onClick={() => alert("View job button is clicked")}
                                              >
                                                View Jobs
                                              </button>
                                            </div>
                                          </div>
                                          <hr className="border-t-2 border-gray-300 my-2" />
                                          <p className="text-[17px]">Application status</p>
                                          <div className="ml-4">
                                            <p className=" text-[14px] mb-[3px]">Applied</p>
                                            <div className="flex flex-row gap-12">
                                              {selectedJob.JobId.result === 'Cleared' ? (
                                                <p className="text-blue-500 text-[14px]">{selectedJob.JobId.result}</p>
                                              ) : (
                                                <p className="text-red-500 text-[14px]">X {selectedJob.JobId.result}</p>
                                              )}
                                              <div className="flex flex-col -ml-2">
                                                <button className="text-blue-500 text-xs hover:text-blue-700">View Feedback</button>
                                                <hr className="border-t-1 border-blue-300" />
                                              </div>
                                            </div>
                                            <p className="text-blue-600 text-[14px] mt-[2px]">On 7 Aug 2024</p>
                                          </div>
                                          <div className="flex items-center mt-5">
                                            <div className="">
                                              <p className="text-base font-extralight">Our Suggested Product</p>
                                              <div className="ml-4 mt-2">
                                                <p className="text-red-500 text-lg">Profile Boost</p>
                                                <p className="font-extralight text-sm">Your application would be shown on the priority list to the recruiter</p>
                                                <div className="flex flex-row gap-6 mt-2">
                                                  <button className="hover:text-blue-500 text-[14px] hover:scale-105 duration-300">Buy Now</button>
                                                  <button className="text-red-400 hover:scale-105 text-sm duration-300">Explore</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                              </div> */}
                      </div>
                   

                        



                            {/* {selectedJob && (
                             <div
                             className="absolute top-0 right-0 h-full w-[500px] bg-[#fff] p-[16px] rounded-[16px] shadow-xl border border-[#d9d9d9] max-2xl:w-[400px] "
                             style={{ top: '10px', right: '-430px' }}
                           >
                             <div className="flex flex-row  justify-between">
                               <div>
                                 <h2 className="text-[20px] font-[600]">{selectedJob.JobId.positionName}</h2>
                                 <p> {selectedJob.JobId.location}</p>
                               </div>
                               <div>
                                 <button className=" bg-blue-600 p-2 rounded-md shadow-lg text-white hover:bg-blue-900 hover:shadow-2xl "
                                  onClick={()=> alert("View job button is clicked")} >
                                  View Jobs</button>
                               </div>
                             </div>
                               <hr className="border-t-2 border-gray-300 my-4" />
                               <p className=" text-xl ">Application status</p>
                               <div className=" ml-4">
                                 <p>Applied</p>
                                 <div className="flex flex-row gap-10">
                                        {selectedJob.JobId.result === 'Cleared' ? (
                                          <p className=" text-blue-500"> {selectedJob.JobId.result}</p> 
                                        ) : (
                                            <p className=" text-red-500">X {selectedJob.JobId.result}</p> 
                                          )}
                                   <div className="flex flex-col">
                                       <button className="text-blue-500 hover:text-blue-700">View Feedback</button>
                                       <hr className="border-t-1 border-blue-300 " />
                                   </div>
                                 </div>
                                   <p className="text-blue-600">On 7 Aug 2024</p>
                               </div>
                             <div className="flex items-center mt-7">
                               <div className="">
                                 <p className="text-base font-extralight ">Our Suggested Product</p>
                                 <div className=" ml-3 mt-3">
                                    <p className=" text-red-500 text-xl">Profile Boost</p>
                                    <p className=" font-extralight ">Your application would be shown on priority list to the recruiter</p>
                                      <div className="flex flex-row gap-5 mt-4  ">
                                         <button className="hover:text-blue-500 hover:scale-105 duration-300">Buy Now</button>
                                         <button className=" text-red-400 hover:scale-105 duration-300">Explore</button>
                                      </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           
                            )} */}
                    {/* {selectedJob && (
                      <div
                        className={`absolute top-0 h-full w-[500px] bg-[#fff] p-[16px] rounded-[16px] shadow-xl border border-[#d9d9d9]
                          max-2xl:w-[400px] 
                          max-xl:w-[350px] 
                        max-lg:w-[300px] 
                          `}
                        style={{ top: '10px', 
                          right: (() => {
                            if (window.innerWidth <= 1024) return '-300px'; // max-lg
                            if (window.innerWidth <= 1280) return '-350px'; // max-xl
                            if (window.innerWidth <= 1536) return '-380px'; // max-2xl
                            return '-430px'; // Default
                          })(),
                        }}
                      >
                        <div className="flex flex-row justify-between">
                          <div>
                            <h2 className="text-[20px] font-[600]">{selectedJob.JobId.positionName}</h2>
                            <p>{selectedJob.JobId.location}</p>
                          </div>
                          <div>
                            <button
                              className="bg-blue-600 p-2 rounded-md shadow-lg text-white hover:bg-blue-900 hover:shadow-2xl"
                              onClick={() => alert("View job button is clicked")}
                            >
                              View Jobs
                            </button>
                          </div>
                        </div>
                        <hr className="border-t-2 border-gray-300 my-4" />
                        <p className="text-xl">Application status</p>
                        <div className="ml-4">
                          <p>Applied</p>
                          <div className="flex flex-row gap-10">
                            {selectedJob.JobId.result === 'Cleared' ? (
                              <p className="text-blue-500">{selectedJob.JobId.result}</p>
                            ) : (
                              <p className="text-red-500">X {selectedJob.JobId.result}</p>
                            )}
                            <div className="flex flex-col">
                              <button className="text-blue-500 hover:text-blue-700">View Feedback</button>
                              <hr className="border-t-1 border-blue-300" />
                            </div>
                          </div>
                          <p className="text-blue-600">On 7 Aug 2024</p>
                        </div>
                        <div className="flex items-center mt-7">
                          <div>
                            <p className="text-base font-extralight">Our Suggested Product</p>
                            <div className="ml-3 mt-3">
                              <p className="text-red-500 text-xl">Profile Boost</p>
                              <p className="font-extralight">Your application would be shown on priority list to the recruiter</p>
                              <div className="flex flex-row gap-5 mt-4">
                                <button className="hover:text-blue-500 hover:scale-105 duration-300">Buy Now</button>
                                <button className="text-red-400 hover:scale-105 duration-300">Explore</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )} */}





                            
                          {/* </div>
                           } */}






                {/* -------------------------------------------------------------- */}
                {/* {selectedtab === "MyInterview" &&
                allinterview?.map((job, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(`/blank/JobViewDetails/${job._id}`);
                      }}
                      className="bg-[#fff] p-[16px] rounded-[16px] shadow-sm"
                    >
                      <div className="flex justify-between items-center">
                        <p className="text-[20px] font-[600]">
                          {job?.JobId?.positionName}
                        </p>
                        <img
                          src="/images/material-symbols-light_share.svg"
                          alt=""
                        />
                      </div>
                      <div className="flex gap-[7px] mt-[15px]">
                        <img
                          src="/images/carbon_location.svg"
                          className="w-[15.13px] h-[19.25px]"
                          alt=""
                        />
                        <p className="text-black text-opacity-[50%] text-[14px] font-[400]">
                          {job?.JobId?.addlocation}
                        </p>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-[16px] mt-[10px]">
                        <div className="w-[150px]  justify-center h-[30px] rounded-[8px] items-center border-[1px] border-[#d9d9d9] text-black text-opacity-[50%] flex gap-[4px]">
                          <img
                            src="/images/home.svg"
                            className="w-[18px] h-[18px]"
                            alt=""
                          />
                          <p className="text-[14px] font-[400]">
                            Work From Home
                          </p>
                        </div>
                        <div className="w-[95.75px] justify-center h-[30px] rounded-[8px] items-center border-[1px] border-[#d9d9d9] text-black text-opacity-[50%] flex gap-[4px]">
                          <img src="/images/bytesize_work.svg" alt="" />
                          <p className="text-[14px] font-[400]">
                            {job?.JobId?.Experience} Years
                          </p>
                        </div>
                        <div className="w-[65px] flex justify-center h-[30px] rounded-[8px] items-center border-[1px] border-[#d9d9d9] text-[#4234a2]">
                          <p className="text-[14px] font-[400]">
                            Rs. {formatSalary(job?.JobId?.maxSalary)}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row w-full gap-[20px] justify-between mt-[20px] lg:items-center">
                        <div className="flex gap-[10px]">
                          <img
                            src={job?.CompanyId?.Image}
                            className="w-[38px] h-[38px] rounded-[50%]"
                            alt=""
                          />
                          <div>
                            <p className="text-[15px] font-[500]">
                              {job?.CompanyId?.Name}
                            </p>
                            <p className="text-[13px] font-[400] text-black text-opacity-[50%]">
                              Available Post {job?.JobId?.Openings}
                            </p>
                          </div>
                        </div>
                        <button className="w-[103px] h-[32px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] flex justify-center items-center">
                          Applied
                        </button>
                      </div>
                    </div>
                  );
                })} */}
                {selectedtab === "MyInterview" && (
                    <div className="p-4  -mt-14">
                    <div
                      className="grid grid-cols-1 gap-6 -ml-64 mx-auto max-h-screen overflow-y-auto"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // For Firefox and Internet Explorer/Edge
                    >
                      {/* Hide scrollbar for WebKit browsers (Chrome, Safari) */}
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
                          className="bg-white shadow-lg rounded-lg p-4 w-full"
                        >
                          {/* Job Title and Company */}
                          <div className="flex justify-between items-start">
                            <div>
                              <h2 className="text-[15px] font-semibold">{app.jobTitle}</h2>
                              <p className="text-gray-500 text-[13px]">{app.company}</p>
                            </div>
                            <button
                              onClick={() => navigate(`/blank/${app.jobTitle.replace(/\s+/g, '')}`)}
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
                                <div
                                  key={index}
                                  className="flex items-start space-x-3 "
                                >
                                  <div className="flex-shrink-0 flex flex-col items-center -mb-3">
                                    <div
                                      className={`w-3 h-3 ${item.passed ? 'bg-blue-600' : 'bg-white border border-gray-400'} rounded-full`}
                                    ></div>
                                    {index < app.status.length - 1 && (
                                      <div className="w-px h-10 bg-gray-300"></div>
                                    )}
                                  </div>
                                  <div className="flex-grow -mb-3">
                                    <h4 className="text-sm font-medium">{item.stage}</h4>
                                    {item.feedback && (
                                      <p
                                        className={`text-xs ${item.passed ? 'text-green-600' : 'text-gray-500'}`}
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
                            <h4 className="text-md font-medium">Our Suggested Product</h4>
                            <div className="mt-1 bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                              <h5 className="text-red-600 font-semibold">Profile Boost</h5>
                              <p className="text-gray-500 text-xs">
                                Your application would be shown on priority list to the recruiters.
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
                    Access AI-powered mock interviews and question banks for your desired role.
                  </p>
                </div>
              </div>
              <button className="mt-4 md:mt-0 px-8 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
               onClick={()=>(navigate('/blank/ai-tools/mockinterview'))}
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
                    <button className="mt-4 md:mt-0 px-8 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
                     onClick={()=>(navigate('/blank/ai-tools/resume-builder'))}
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



            {/* <div className="bg-white p-6 rounded-lg shadow-xl mt-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Top companies</h2>
                <a href="#" className="text-blue-600 hover:underline">
                  View all
                </a>
              </div>
              <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company) => (
                  <div key={company.id} className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 border-2 border-y-blue-200 border-x-blue-200 border-b-blue-200">
                    <img src={company.logo} alt={company.name} className="w-16 h-16 mb-4" />
                    <h3 className="text-sm font-semibold text-gray-900 text-center truncate">{company.name}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500 text-sm">★</span>
                      <span className="ml-1 text-sm font-medium text-gray-800">{company.rating}</span>
                      <span className="ml-2 text-xs text-gray-600">| {company.reviews} reviews</span>
                    </div>
                    <a href="#" className="mt-4 text-base font-semibold text-blue-600 hover:underline">
                      View jobs
                    </a>
                  </div>
                ))}
              </div>
            </div> */}

                  <div ref={sectionRefs.section3} id="section3" className="relative bg-white p-6 rounded-lg shadow-xl mt-12 scrollable-div">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Top companies</h2>
                        <a href="#" className="text-blue-600 hover:underline">View all</a>
                      </div>
                      <div className="overflow-hidden">
                        <div
                          className="flex transition-transform duration-500"
                          style={{ transform: `translateX(-${offset * (100 / cardsToShow)}%)` }}
                        >
                          {companies.map((company) => (
                            <div
                              key={company.id}
                              className="flex-none w-full sm:w-1/3 p-4" // Adjust width to fit three cards
                              style={{ flex: '0 0 33.333%' }} // Adjust width for three cards
                            >
                              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 border-2 border-y-blue-200 border-x-blue-200 border-b-blue-200">
                                <img src={company.logo} alt={company.name} className="w-16 h-16 mb-4" />
                                <h3 className="text-sm font-semibold text-gray-900 text-center truncate">{company.name}</h3>
                                <div className="flex items-center mt-2 -mb-2">
                                  <span className="text-yellow-500 text-sm">★</span>
                                  <span className="ml-1 text-sm font-medium text-gray-800">{company.rating}</span>
                                  <span className="ml-2 text-xs text-gray-600">| {company.reviews} reviews</span>
                                </div>
                                <a href="#" className="mt-4 text-base font-semibold text-blue-600 hover:underline">View jobs</a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={handleMove}
                        className="absolute top-1/2 mt-7 right-4 transform -translate-y-1/2 bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 focus:outline-none"
                      >
                      <IoIosArrowForward/>
                      </button>
                    </div>
   






      </div>
    </>
  );
};

export default Home;



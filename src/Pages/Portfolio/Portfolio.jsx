import React, { useState } from 'react';

// Importing components from Portfolio
import PersonalDetails from '../Portfolio/PersonalDetails';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Skills from './Skills';
import Experience from './Experience';
import EducationForm from './Education';
import ProjectDetails from './ProjectDetails';
import SocialMediaForm from './SocialLink';
import CertificationForm from './CertificationSection';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <PersonalDetails />;
      case 'skills':
        return <Skills/>;
      case 'experience':
        return <Experience/>;
      case 'education':
        return <EducationForm/>;
      case 'projects':
        return <ProjectDetails/>;
      case 'certifications&Awards':
        return <CertificationForm/>;
      case 'social_links':
        return <SocialMediaForm/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full pl-4">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full">
        <Sidebar />
      </div>

      <div className="lg:w-3/4 w-full lg:ml-8">
        {/* Navigation Bar - Now Aligned to the Top Left */}
        <nav className="flex flex-wrap space-x-6 p-4  pb-5 rounded justify-start gap-[3.5%] ">
          {['about', 'skills', 'experience', 'education', 'projects', 'certifications&Awards', 'social_links'].map((tab) => (
            <button
            key={tab}
            className={`relative group hover:text-blue-500 pb-2 ${activeTab === tab ? 'text-blue-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace('&', ' & ')}
            <span className={`absolute bottom-0 left-0 right-0 h-1 bg-indigo-500 transition-all duration-300 ${activeTab === tab ? 'w-full' : 'w-0 group-hover:w-3/6'}`}></span>
          </button>
          
          ))}
        </nav>
          
          <hr className="border-1 -mt-5 w-[84%] border-gray-300" />

        {/* Content Section */}
        <div className="mt-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
















// import React, { useEffect, useState } from "react";
// import { IoMdInformationCircleOutline } from "react-icons/io";
// import PersonalDetailsModal from "./PersonalDetailsModal";
// import AddIntroductionVideo from "./AddIntroductionVideo";
// import JobDetailsModal from "./JobDetailsModal";
// import InternshipDetailsModal from "./InternshipDetailsModal";
// import PositionOfResponsibilityModal from "./PositionOfResponsibilityModal";
// import TrainingDetailsModal from "./TrainingDetailsModal";
// import AcademicAndPersonalProjectModal from "./AcademicAndPersonalProjectModal";
// import moment from "moment";
// import ResumeParser from "./ResumeParser";
// import WorkSampleModal from "./WorkSampleModal";
// import AdditionalDetailsModal from "./AdditionalDetailsModal";
// import AddEducationModal from "./AddEducationModal";
// import { GetApi } from "../utilis/Api_Calling";
// import SkillModel from "./SkillModel";

// const Portfolio = () => {
//   const [studentprofile, setstudentprofile] = useState({});
//   const [Loading, setLoading] = useState(true);

//   const Getstudentprofile = async () => {
//     try {
//       const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       setstudentprofile(Getjobdata?.data?.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     Getstudentprofile();
//   }, []);

//   const [isPersonalDetailModal, setIsPersonalDetailModal] = useState(false);
//   const [addVideoModal, setAddVideoModal] = useState(false);
//   const [jobDetailsModal, setJobDetailsModal] = useState(false);
//   const [internshipModal, setInternshipModal] = useState(false);
//   const [positionOfResponsibilityModal, setPositionOfResponsibilityModal] =
//     useState(false);
//   const [trainingDetailsModal, setTrainingDetailsModal] = useState(false);
//   const [workSampleModal, setWorkSampleModal] = useState(false);
//   const [addEducationModal, setaddEducationModal] = useState(false);
//   const [additionalDetailsModal, setAdditionalDetailsModal] = useState(false);
//   const [academicAndPersonalProjectModal, setAcademicAndPersonalProjectModal] =
//     useState(false);
//   const [skillsModal, setSkillsModal] = useState(false);
//   const [skills, setSkills] = useState([
//     {
//       name: "Adobe Illustrator",
//       experience: "Beginner - 2 Year",
//     },
//     {
//       name: "Adobe Photoshop",
//       experience: "Beginner - 2 Year",
//     },
//   ]);
//   const [newSkill, setNewSkill] = useState([
//     {
//       name: "",
//       experience: "",
//     },
//   ]);

//   const addSkills = (newSkill) => {
//     setSkills([...skills, newSkill]);
//   };
//   const handleAddSkillSubmit = () => {
//     addSkills(newSkill);
//     setNewSkill({ name: "", experience: " " });
//   };

//   const toggleSkillModalOpen = () => {
//     setSkillsModal(true);
//   };
//   const toggleSkillModalClose = () => {
//     Getstudentprofile();
//     setSkillsModal(false);
//   };

//   const togglePersonalDetailModalOpen = () => {
//     setIsPersonalDetailModal(true);
//   };

//   const togglePersonalDetailModalClose = () => {
//     Getstudentprofile();
//     setIsPersonalDetailModal(false);
//   };

//   const toggleAddVideoModalOpen = () => {
//     setAddVideoModal(true);
//   };
//   const toggleAddVideoModalClose = () => {
//     Getstudentprofile();
//     setAddVideoModal(false);
//   };
//   const toggleJobDetailsModalOpen = () => {
//     setJobDetailsModal(true);
//   };
//   const toggleJobDetailsModalClose = () => {
//     Getstudentprofile();
//     setJobDetailsModal(false);
//   };
//   const toggleInternshipModalOpen = () => {
//     setInternshipModal(true);
//   };
//   const toggleInternshipModalClose = () => {
//     Getstudentprofile();
//     setInternshipModal(false);
//   };
//   const togglePositionOfResponsibilityModalOpen = () => {
//     setPositionOfResponsibilityModal(true);
//   };
//   const togglePositionOfResponsibilityModalClose = () => {
//     Getstudentprofile();
//     setPositionOfResponsibilityModal(false);
//   };
//   const toggleTrainingDetailsModalOpen = () => {
//     setTrainingDetailsModal(true);
//   };
//   const toggleTrainingDetailsModalClose = () => {
//     Getstudentprofile();
//     setTrainingDetailsModal(false);
//   };
//   const toggleAcademicAndPersonalProjectModalOpen = () => {
//     setAcademicAndPersonalProjectModal(true);
//   };
//   const toggleAcademicAndPersonalProjectModalClose = () => {
//     Getstudentprofile();
//     setAcademicAndPersonalProjectModal(false);
//   };
//   const toggleWorkSampleModalOpen = () => {
//     setWorkSampleModal(true);
//   };
//   const toggleWorkSampleModalClose = () => {
//     Getstudentprofile();
//     setWorkSampleModal(false);
//   };
//   const toggleAdditionalDetailsModalOpen = () => {
//     setAdditionalDetailsModal(true);
//   };
//   const toggleAdditionalDetailsModalClose = () => {
//     Getstudentprofile();
//     setAdditionalDetailsModal(false);
//   };
//   const toggleAddEducationModalOpen = () => {
//     setaddEducationModal(true);
//   };
//   const toggleAddEducationModalClose = () => {
//     Getstudentprofile();
//     setaddEducationModal(false);
//   };

//   const formatDate = (dateString) => {
//     const formattedDate = moment(dateString).format("D MMM YY");
//     return formattedDate;
//   };

  

//   return (
//     <>
//       {Loading ? (
//         <div>Loading</div>
//       ) : (
//         <div className="font-[Outfit] p-[20px] lg:pt-[89px] lg:px-[105px] flex flex-col justify-center items-center">
//           <ResumeParser />
//           <p className="text-[32px] font-[400]">Your portfolio</p>
//           <div className="flex p-[21px] border-[2px] w-full border-[#8feafe] rounded-[3px] mt-[27px] items-center gap-[18px]">
//             <IoMdInformationCircleOutline size="18px" color="#4234a2" />
//             <p className="text-[16px] font-[400] text-[#4234a2] text-opacity-[50%]">
//               This is the resume that the employer will see: Please complete
//               your resume to increase your chances of hining
//             </p>
//           </div>
//           <div className="bg-white rounded-[12px] w-full p-[10px] lg:py-[50px] lg:px-[76px] mt-[33px]">
//             <div className="flex flex-col gap-[20px] lg:flex-row justify-between border-b-[1px] border-[#ebe6e6] pb-[29px]">
//               <div>
//                 <div className="flex items-center gap-[9px]">
//                   <p className="text-[32px] font-[400]">
//                     {studentprofile?.Name}
//                   </p>
//                   <div onClick={togglePersonalDetailModalOpen}>
//                     <img src="/images/pencil2.svg" alt="" />
//                   </div>
//                 </div>
//                 <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                   {studentprofile?.Email}
//                 </p>
//                 <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                   {studentprofile?.Number}
//                 </p>
//                 <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                   {studentprofile?.Address}
//                 </p>
//                 <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                   Languages: {studentprofile?.Languages_you_know?.join(", ")}
//                 </p>
//               </div>
//               <div className="flex gap-[23px] mt-[3px]">
//                 <div className="flex gap-[2px]">
//                   <img
//                     src="/images/dashicons_portfolio.svg"
//                     className="w-[24px] h-[24px]"
//                     alt=""
//                   />
//                   <p className="text-[16px] font-[600]">Ai Portfolio Builder</p>
//                 </div>
//                 <div className="flex gap-[2px]">
//                   <img
//                     src="/images/material-symbols_download-sharp.svg"
//                     className="w-[24px] h-[24px]"
//                     alt=""
//                   />
//                   <p className="text-[16px] font-[600] text-[#4234a2]">
//                     Download Resume
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col lg:flex-row py-[25px] border-b-[1px] gap-[10px] lg:gap-[87px] border-[#ebe6e6]">
//               <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
//                 INTRODUCTION VIDEO
//               </p>
//               <div
//                 onClick={toggleAddVideoModalOpen}
//                 className="flex gap-[3px] lg:justify-center items-center cursor-pointer"
//               >
//                 <img
//                   src="/images/mingcute_add-fill.svg"
//                   className="w-[14px] h-[14px]"
//                   alt=""
//                 />
//                 <p className="text-[16px] font-[500] text-[#4234a2]">
//                   Add Video
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[162px] pt-[14px] pb-[30px] border-b-[1px] border-[#ebe6e6]">
//               <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
//                 EDUCATION
//               </p>
//               <div className="w-full">
//                 {studentprofile?.Education?.map((education, index) => (
//                   <div key={index}>
//                     <div className="flex justify-between items-center">
//                       <p className="text-[16px] font-[400]">
//                         {education?.Class}
//                       </p>
//                       <img
//                         src="/images/pencil2.svg"
//                         className="w-[16px] h-[16px] mt-[-25px] lg:mt-0 lg:mr-[51px]"
//                         alt=""
//                       />
//                     </div>
//                     <p className="text-[16px] font-[400]">
//                       {education?.Degree}({education?.Stream})
//                     </p>
//                     <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                       {education?.PerformanceScale} - {education?.Performance}
//                     </p>
//                     <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                       {education?.CollegeName}
//                     </p>
//                     <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                       {education?.StartYear}-{education?.EndYear}
//                     </p>
//                   </div>
//                 ))}
//                 <div
//                   onClick={toggleAddEducationModalOpen}
//                   className="flex gap-[3px] items-center mt-[18px] cursor-pointer"
//                 >
//                   <img
//                     src="/images/mingcute_add-fill.svg"
//                     className="w-[14px] h-[14px]"
//                     alt=""
//                   />
//                   <p className="text-[16px] font-[500] text-[#4234a2]">
//                     Add education
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col lg:flex-row py-[25px] border-b-[1px] gap-[10px] lg:gap-[110px] border-[#ebe6e6]">
//               <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
//                 WORK EXPERIENCE
//               </p>
//               <div className="flex gap-[30px]">
//                 <div className="w-full">
//                   {studentprofile?.JobDetails?.map((Job, index) => (
//                     <div key={index} className="mb-5">
//                       <div className="flex justify-between items-center">
//                         <p className="text-[16px] font-[400]">
//                           {Job?.Designation} - {Job?.Profile}
//                         </p>
//                       </div>
//                       <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                         {Job?.Organization}
//                       </p>
//                       <p>Job Type - {Job?.Type}</p>
//                       <div className="flex items-center">
//                         <img
//                           src="/images/carbon_location.svg"
//                           className="w-[16px] h-[16px] mt-[-25px] lg:mt-0 lg:mr-[51px]"
//                           alt=""
//                         />
//                         <p className="text-[16px] font-[400]">
//                           {Job?.Location}
//                         </p>
//                       </div>
//                       {Job?.Currentlyworking ? (
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           Notice Period - {Job?.NoticePeriod}
//                         </p>
//                       ) : (
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           Not Currently Working
//                         </p>
//                       )}
//                       <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                         Join Date - {formatDate(Job?.Start_date)}{" "}
//                         {Job?.Currentlyworking
//                           ? "- Currently Working"
//                           : "End date " - formatDate(Job?.End_date)}
//                       </p>
//                       <div className="flex">
//                         <p className="text-[16px] font-[400]">Describtion - </p>
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           {Job?.Description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                   <div className="flex justify-between items-center mt-5">
//                     <div
//                       onClick={toggleJobDetailsModalOpen}
//                       className="flex gap-[3px] justify-center items-center cursor-pointer"
//                     >
//                       <img
//                         src="/images/mingcute_add-fill.svg"
//                         className="w-[14px] h-[14px]"
//                         alt=""
//                       />
//                       <p className="text-[16px] font-[500] text-[#4234a2]">
//                         Add job
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col lg:flex-row py-[25px] border-b-[1px] gap-[10px] lg:gap-[87px] border-[#ebe6e6]">
//               <p className="text-[14px] font-[400] text-[#000] w-[150px] text-opacity-[50%]">
//                 POSITIONS OF RESPONSIBILITY
//               </p>
//               <div className="flex gap-[30px]">
//                 <div className="w-full">
//                   <p>{studentprofile?.position_of_responsibility}</p>
//                   <div
//                     onClick={togglePositionOfResponsibilityModalOpen}
//                     className="flex gap-[3px] lg:justify-center items-center mt-4 cursor-pointer"
//                   >
//                     <img
//                       src="/images/mingcute_add-fill.svg"
//                       className="w-[14px] h-[14px]"
//                       alt=""
//                     />
//                     <p className="text-[16px] font-[500] text-[#4234a2]">
//                       Add position of responsibility
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col lg:flex-row py-[25px] border-b-[1px] gap-[10px] lg:gap-[95px] border-[#ebe6e6]">
//               <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
//                 TRAININGS/ COURSES
//               </p>
//               <div className="flex gap-[30px]">
//                 <div className="w-full">
//                   {studentprofile?.Training_details?.map((Training, index) => (
//                     <div key={index} className="mb-5">
//                       <div className="flex justify-between items-center">
//                         <p className="text-[16px] font-[400]">
//                           {Training?.Training_program}
//                         </p>
//                       </div>
//                       <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                         {Training?.Organization}
//                       </p>
//                       <div className="flex items-center">
//                         <img
//                           src="/images/carbon_location.svg"
//                           className="w-[16px] h-[16px] mt-[-25px] lg:mt-0 lg:mr-[51px]"
//                           alt=""
//                         />
//                         <p className="text-[16px] font-[400]">
//                           {Training?.Location}
//                         </p>
//                       </div>
//                       <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                         Join Date - {formatDate(Training?.Start_date)}{" "}
//                         {Training?.CurrentlyOngoing
//                           ? "Currently Ongoing"
//                           : "End Date - " + formatDate(Training?.End_date)}
//                       </p>
//                       <div className="flex">
//                         <p className="text-[16px] font-[400]">Describtion - </p>
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           {Training?.Description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                   <div className="flex justify-between items-center mt-5">
//                     <div
//                       onClick={toggleTrainingDetailsModalOpen}
//                       className="flex gap-[3px] lg:justify-center items-center cursor-pointer"
//                     >
//                       <img
//                         src="/images/mingcute_add-fill.svg"
//                         className="w-[14px] h-[14px]"
//                         alt=""
//                       />
//                       <p className="text-[16px] font-[500] text-[#4234a2]">
//                         Add training/course
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col lg:flex-row py-[25px] border-b-[1px] gap-[10px] lg:gap-[88px] border-[#ebe6e6]">
//               <p className="text-[14px] font-[400] text-[#000] w-[150px] text-opacity-[50%]">
//                 ACADEMICS/ PERSONAL PROJECTS
//               </p>
//               <div className="flex gap-[30px]">
//                 <div className="w-full">
//                   {studentprofile?.Projects?.map((Project, index) => (
//                     <div key={index} className="mb-5">
//                       <div className="flex justify-between items-center">
//                         <p className="text-[16px] font-[400]">
//                           {Project?.Title}
//                         </p>
//                       </div>
//                       <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                         Join Date - {formatDate(Project?.Start_date)}{" "}
//                         {Project?.CurrentlyOngoing
//                           ? "Currently Ongoing"
//                           : "End Date - " + formatDate(Project?.End_date)}
//                       </p>
//                       <div className="flex">
//                         <p className="text-[16px] font-[400]">Describtion - </p>
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           {Project?.Description}
//                         </p>
//                       </div>
//                       <div>
//                         <p>Project Link - {Project?.Project_link}</p>
//                       </div>
//                     </div>
//                   ))}
//                   <div className="flex justify-between items-center mt-5">
//                     <div
//                       onClick={toggleAcademicAndPersonalProjectModalOpen}
//                       className="flex gap-[3px] lg:justify-center items-center cursor-pointer"
//                     >
//                       <img
//                         src="/images/mingcute_add-fill.svg"
//                         className="w-[14px] h-[14px]"
//                         alt=""
//                       />
//                       <p className="text-[16px] font-[500] text-[#4234a2]">
//                         Add academic/ personal project
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col lg:flex-row py-[25px] border-b-[1px] gap-[10px] lg:gap-[90px] border-[#ebe6e6]">
//               <p className="text-[14px] font-[400] text-[#000] w-[150px] text-opacity-[50%]">
//                 SKILLS
//               </p>
//               <div>
//                 <div className="grid  lg:grid-cols-2 gap-[20px] w-full">
//                   {studentprofile?.Skill_Set.map((skill, index) => (
//                     <div key={index}>
//                       <div className="flex gap-[15px] justify-between items-center">
//                         <p className="text-[16px] font-[400]">{skill.Skill}</p>
//                         <div className="flex gap-[30px]">
//                           <img src="/images/pencil2.svg" alt="" />
//                           <img src="/images/deleteIcon.svg" alt="" />
//                         </div>
//                       </div>
//                       <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                         {skill.Rate}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <div>
//                   <div
//                     onClick={toggleSkillModalOpen}
//                     className="flex gap-[3px] items-center mt-[18px] cursor-pointer"
//                   >
//                     <img
//                       src="/images/mingcute_add-fill.svg"
//                       className="w-[14px] h-[14px]"
//                       alt=""
//                     />
//                     <p className="text-[16px] font-[500] text-[#4234a2]">
//                       Add skill
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col gap-[10px] lg:flex-row py-[25px] border-b-[1px] lg:gap-[88px] border-[#ebe6e6]">
//               <p className="text-[14px] font-[400] text-[#000] w-[150px] text-opacity-[50%]">
//                 PORTFOLIO/ WORK SAMPLES
//               </p>
//               <div>
//                 <div className=" w-full">
//                   {studentprofile?.Work_Samples?.map((Samples, index) => (
//                     <div key={index} className="mb-5">
//                       <div className="flex justify-between items-center">
//                         <p className="text-[16px] font-[400]">
//                           Blog Link - {Samples?.Blog_link}
//                         </p>
//                       </div>
//                       <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                         GitHub_profile - {Samples?.GitHub_profile}
//                       </p>
//                       <div className="flex">
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           Play store developer public link -{" "}
//                         </p>
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           {Samples?.Playstoredeveloperpubliclink}
//                         </p>
//                       </div>
//                       <div className="flex">
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           Behance portfolio link -{" "}
//                         </p>
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           {Samples?.Behance_portfolio_link}
//                         </p>
//                       </div>
//                       <div className="flex">
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           Other work sample link -{" "}
//                         </p>
//                         <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
//                           {Samples?.Other_work_sample_link}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                   <div
//                     onClick={toggleWorkSampleModalOpen}
//                     className="flex gap-[3px] items-center cursor-pointer"
//                   >
//                     <img
//                       src="/images/mingcute_add-fill.svg"
//                       className="w-[14px] h-[14px]"
//                       alt=""
//                     />
//                     <p className="text-[16px] font-[500] text-[#4234a2]">
//                       Add portfolio/ work sample
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col lg:flex-row py-[25px] border-b-[1px] gap-[10px] lg:gap-[88px] border-[#ebe6e6]">
//               <p className="text-[14px] font-[400] text-[#000] w-[150px] text-opacity-[50%]">
//                 ACCOMPLISHMENTS/ ADDITIONAL DETAILS
//               </p>
//               <div className="flex gap-[30px]">
//                 <div className="w-full">
//                   <p>{studentprofile?.Additional_Info}</p>
//                   <div
//                     onClick={toggleAdditionalDetailsModalOpen}
//                     className="flex gap-[3px] items-center mt-4 cursor-pointer"
//                   >
//                     <img
//                       src="/images/mingcute_add-fill.svg"
//                       className="w-[14px] h-[14px] "
//                       alt=""
//                     />
//                     <p className="text-[16px] font-[500] text-[#4234a2]">
//                       Add accomplishment/ additional detail
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full flex justify-end items-center my-[45px]">
//             <p className="text-[16px] font-[500] text-[#fff] bg-gradient-to-tl flex justify-center items-center from-[#0f87b3] to-[#462da1] rounded-[6px] w-[251px] h-[49px] ">
//               Proceed to application
//             </p>
//           </div>
//           {/* Job Details Modal */}
//           {skillsModal && (
//             <SkillModel
//               profile={studentprofile}
//               onOpen={toggleSkillModalOpen}
//               onClose={toggleSkillModalClose}
//             />
//           )}
//           {isPersonalDetailModal && (
//             <PersonalDetailsModal
//               profile={studentprofile}
//               onOpen={togglePersonalDetailModalOpen}
//               onClose={togglePersonalDetailModalClose}
//             />
//           )}
//           {addVideoModal && (
//             <AddIntroductionVideo
//               profile={studentprofile}
//               onOpen={toggleAddVideoModalOpen}
//               onClose={toggleAddVideoModalClose}
//             />
//           )}
//           {jobDetailsModal && (
//             <JobDetailsModal
//               profile={studentprofile}
//               onOpen={toggleJobDetailsModalOpen}
//               onClose={toggleJobDetailsModalClose}
//             />
//           )}
//           {internshipModal && (
//             <InternshipDetailsModal
//               onOpen={toggleInternshipModalOpen}
//               onClose={toggleInternshipModalClose}
//             />
//           )}
//           {positionOfResponsibilityModal && (
//             <PositionOfResponsibilityModal
//               profile={studentprofile}
//               onOpen={togglePositionOfResponsibilityModalOpen}
//               onClose={togglePositionOfResponsibilityModalClose}
//             />
//           )}
//           {trainingDetailsModal && (
//             <TrainingDetailsModal
//               profile={studentprofile}
//               onOpen={toggleTrainingDetailsModalOpen}
//               onClose={toggleTrainingDetailsModalClose}
//             />
//           )}
//           {academicAndPersonalProjectModal && (
//             <AcademicAndPersonalProjectModal
//               profile={studentprofile}
//               onOpen={toggleAcademicAndPersonalProjectModalOpen}
//               onClose={toggleAcademicAndPersonalProjectModalClose}
//             />
//           )}
//           {workSampleModal && (
//             <WorkSampleModal
//               profile={studentprofile}
//               onOpen={toggleWorkSampleModalOpen}
//               onClose={toggleWorkSampleModalClose}
//             />
//           )}
//           {additionalDetailsModal && (
//             <AdditionalDetailsModal
//               profile={studentprofile}
//               onOpen={toggleAdditionalDetailsModalOpen}
//               onClose={toggleAdditionalDetailsModalClose}
//             />
//           )}
//           {addEducationModal && (
//             <AddEducationModal
//               profile={studentprofile}
//               onOpen={toggleAddEducationModalOpen}
//               onClose={toggleAddEducationModalClose}
//             />
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default Portfolio;

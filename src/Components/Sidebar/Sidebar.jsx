import React, { useEffect, useState, useRef } from "react";
import { GetApi, PutApi } from "../../Pages/utilis/Api_Calling";
import { IoIosArrowForward } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Navigate, useNavigate } from "react-router";

import { CiEdit } from "react-icons/ci";


const Sidebar = ({ activeSection, scrollToSection }) => {
  const [profile, setProfile] = useState({});
  const [Loading, setLoading] = useState(false);

  const requiredFields = [
    "Name",
    "Email",
    "Number",
    "Image",
    "Website",
    "Gender",
    "introductionVideo",
    "Address",
    "highestQualification",
    "position_of_responsibility",
    "Training_details",
    "Projects",
    "Skill_Set",
    "Work_Samples",
    "Additional_Info",
    "Expected_Salary",
    "Current_Salary",
    "Experience",
    "exprienceIn",
    "Joining_Date",
    "Resume",
  ];

  function calculateProfileCompletion(studentData) {
    let totalFields = 0;
    let completedFields = 0;

    requiredFields.forEach((field) => {
      // Check for fields that are arrays (for example, Training_details, Projects)
      if (Array.isArray(studentData[field])) {
        totalFields += 1;
        if (studentData[field].length > 0) {
          completedFields += 1;
        }
      } else if (typeof studentData[field] === "string") {
        totalFields += 1;
        if (studentData[field].trim() !== "") {
          completedFields += 1;
        }
      } else if (typeof studentData[field] === "boolean") {
        totalFields += 1;
        if (studentData[field] === true) {
          completedFields += 1;
        }
      }
    });

    return (completedFields / totalFields) * 100;
  }

  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      // console.log(Getjobdata?.data?.data);
      console.log(calculateProfileCompletion(Getjobdata?.data?.data));
      setProfile(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const updateProfile = async (data) => {
    try {
      const response = await PutApi(
        "api/StudentRoutes/UpdateStudentProfile",
        data
      );
      alert("Profile updated successfully.");
    } catch (error) {
      console.log(error.response);
      alert("Error updating ");
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const navigate = useNavigate();
  const [currentProgress, setCurrentProgress] = useState(0);

  const progress = calculateProfileCompletion(profile).toFixed(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentProgress(progress);
    }, 500);
    return () => clearTimeout(timer);
  }, [progress]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (currentProgress / 100) * circumference;
  const dotPosition = circumference - dashoffset;

  // this is for our scrollable section ------------
  const getSectionClassName = (sectionId) =>
    activeSection === sectionId ? "bg-blue-200" : "";

  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  // for taking images input---------------
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    // Trigger the hidden file input click event
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the selected image file here (e.g., preview, upload, etc.)
      console.log('Selected file:', file);
    }
  };



  return (
    <div className="border sticky z-0 top-24 rounded-2xl p-5 min-h-[60vh] bg-white min-w-[15vw] shadow-lg mt-3 ">
      <div className="profile w-full flex flex-col justify-start items-center">
        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "rotate(190deg)" }}
          >
            <CircularProgressbar
              value={currentProgress}
              // text={`${currentProgress}%`}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: "#f8ab29",
                textColor: "#4F46E5",
                trailColor: "#E5E7EB",
                pathTransitionDuration: 1,
                textSize: "16px",
              })}
            />
          </div>
            <img
              className="h-20 w-20 rounded-full object-cover border-2 border-blue-200"
              // src="" // Provide the src if available
              src="data:image/png;base64,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"
              alt="Profile"
            />
            <span className="absolute mt-[70px] text-[#f8ab29] font-bold bg-white rounded-3xl text-[10px] p-[3px]">
              {currentProgress}%
            </span>
          </div>
          {/* <p className=" ml-20 -mt-4"><CiEdit size={20} className=" text-blue-800"/></p> */}
              <p className="ml-20 -mt-4 cursor-pointer" onClick={handleIconClick}>
                <CiEdit size={20} className="text-blue-800" />
              </p>

                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />

        <h2 className="text-lg font-semibold text-gray-900 mt-3">
          {profile?.Name}
        </h2>
        <h6 className=" text-sm font-normal  text-gray-900">
          Developer at @ GetHire
        </h6>
        <p className="text-xs text-gray-500 mt-1">Last updated 7m ago</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full mt-5 hover:bg-blue-700 transition duration-300"
          onClick={() => {
            navigate("/blank/portfolio");
          }}
        >
          Complete Profile
        </button>
      </div>

      <div className="rounded-lg bg-blue-50 flex flex-col justify-center max-lg:p-1 items-center p-4 mt-4 shadow-md">
        <h1 className="text-lg max-xl:text-[14px] max-lg:text-sm font-semibold text-gray-900">
          Profile Performance
        </h1>
        <div className="flex items-center justify-between w-full mt-4">
          <div className="flex-1 text-sm text-gray-600 px-2 max-xl:-ml-3 max-xl:text-[12px] max-lg:-ml-2 max-lg:text-xs max-2xl:-ml-3">
            Invites
            <br />
            <span className="font-semibold text-blue-600">
              <div className=" flex flex-row justify-center items-center gap-2">
                <p>0</p>
                <IoIosArrowForward
                  color="#1E88E5"
                  onClick={() => navigate("/blank/invite")}
                  className=" hover:cursor-pointer"
                />
              </div>
            </span>
          </div>
          <div className="border-l border-light-blue-300 h-12 mx-4 max-xl:-ml-1 w-1 "></div>
          <div className="flex-1 text-sm text-gray-600 px-2 max-xl:-ml-3 max-xl:text-[12px] max-lg:text-xs max-lg:-ml-4">
            Applications <br />
            <span className="font-semibold text-blue-600">
              <div className=" flex flex-row justify-center items-center gap-2">
                <p>0</p>
                <IoIosArrowForward
                  color="#1E88E5"
                  onClick={() => navigate("/blank/applicationManager")}
                  className=" hover:cursor-pointer"
                />
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col">
        <span
          className={`cursor-pointer p-2 ${getSectionClassName("section1")} -mb-2 flex flex-row justify-normal items-center gap-1 text-md text-gray-600 font-semibold px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg transition duration-200"`}
          onClick={() => handleClick("section1")}
        >
          <p>
            <CiHome />
          </p>
          <p>My Home</p>
        </span>
        <span
          className={` cursor-pointer p-2 ${getSectionClassName("section2")} -mb-2 flex flex-row justify-normal items-center gap-1 text-md text-gray-600 font-semibold px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg transition duration-200`}
          onClick={() => handleClick("section2")}
        >
          <p>
            <BsFillSuitcaseLgFill />
          </p>
          <p>Jobs</p>
        </span>
        <span
          className={`cursor-pointer p-2 ${getSectionClassName("section3")} -mb-2 flex flex-row justify-normal items-center gap-1 text-md text-gray-600 font-semibold px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg transition duration-200`}
          onClick={() => handleClick("section3")}
        >
          <p>
            <FaRegBuilding />
          </p>
          <p>Companies</p>
        </span>
        <span
          className={` -mb-2 flex flex-row justify-normal hover:text-blue-700 items-center gap-1 text-md text-gray-600 font-semibold px-4 py-2  cursor-pointer rounded-lg transition duration-200`}
          onClick={() => navigate("/blank/career")}
        >
          <p>
            <FiBookOpen />
          </p>
          <p>Training Centre</p>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useEffect, useState } from "react";
import { GetApi, PutApi } from "../utilis/Api_Calling";
import PersonalDetails from "../Portfolio/PersonalDetails";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Skills from "./Skills";
import Experience from "./Experience";
import EducationForm from "./Education";
import ProjectDetails from "./ProjectDetails";
import SocialMediaForm from "./SocialLink";
import CertificationForm from "./CertificationSection";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [profile, setProfile] = useState({});
  const [Loading, setLoading] = useState(false);

  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
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

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <PersonalDetails
            profile={profile}
            updateProfile={updateProfile}
            loading={Loading}
          />
        );
      case "skills":
        return <Skills updateProfile={updateProfile} loading={Loading} />;
      case "experience":
        return (
          <Experience
            profile={profile}
            updateProfile={updateProfile}
            loading={Loading}
          />
        );
      case "education":
        return (
          <EducationForm
            profile={profile}
            updateProfile={updateProfile}
            loading={Loading}
          />
        );
      case "projects":
        return (
          <ProjectDetails
            profile={profile}
            updateProfile={updateProfile}
            loading={Loading}
          />
        );
      case "certifications&Awards":
        return (
          <CertificationForm
            profile={profile}
            updateProfile={updateProfile}
            loading={Loading}
          />
        );
      case "social_links":
        return (
          <SocialMediaForm
            profile={profile}
            updateProfile={updateProfile}
            loading={Loading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full pl-4">
      <div className="lg:w-1/4 w-full">
        <Sidebar />
      </div>

      <div className="lg:w-3/4 w-full lg:ml-8 mt-4">
        <nav className="flex flex-wrap space-x-6 p-4  pb-5 rounded justify-start gap-[2.5%] ">
          {[
            "about",
            "skills",
            "experience",
            "education",
            "projects",
            "certifications&Awards",
            "social_links",
          ].map((tab) => (
            <button
              key={tab}
              className={`relative text-[18px] font-semibold group hover:text-blue-500 pb-2 ${activeTab === tab ? "text-blue-500" : "text-gray-600"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("&", " & ")}
              <span
                className={`absolute bottom-0 left-0 right-0 h-1 bg-indigo-500 transition-all duration-300 ${activeTab === tab ? "w-full" : "w-0 group-hover:w-3/6"}`}
              ></span>
            </button>
          ))}
        </nav>
        <hr className="border-1 -mt-5 w-[84%] border-gray-300" />
        <div className="mt-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Portfolio;

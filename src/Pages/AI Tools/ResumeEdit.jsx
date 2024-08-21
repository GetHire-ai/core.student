import React, { useEffect, useState } from "react";
import ResumeBuilerForm from "./ResumeBuilderForm";
import { useParams } from "react-router-dom";
import { GetApi } from "../utilis/Api_Calling";
const ResumeEdit = () => {
  const [resumeData, setResumeData] = useState("");
  const { id } = useParams();
  let getAiResume = async () => {
    try {
      let res = await GetApi(`api/studentroutes/ai-resume/${id}`);
      setResumeData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAiResume();
  }, []);
  return (
    <div className="w-full min-h-screen overflow-y-auto flex gap-10 ">
      {" "}
      <ResumeBuilerForm
        id={id}
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <div className="w-1/2 bg-white p-4 rounded shadow overflow-y-auto max-h-[100vh]">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4 pb-2">
          <div className="text-lg">
            {resumeData.firstName} {resumeData.lastName}
            <br />
            <p className="text-sm text-gray-500">{resumeData?.jobTitle}</p>
            <p className="text-sm text-gray-800 w-3/4 mx-auto">
              {resumeData?.email} &nbsp; {resumeData?.phone} &nbsp;{" "}
              {resumeData?.location} &nbsp; {resumeData?.city} &nbsp;
              {resumeData?.state} &nbsp; {resumeData?.country} &nbsp;
              {resumeData?.openForRemote && "open For Remote"} &nbsp;{" "}
              {resumeData?.openForRelocate && "open For Relocate"} &nbsp;
            </p>
          </div>
        </h2>

        <div className="mt-4">
          <h3 className="text-md font- border-b">Summary</h3>
          <p className="text-sm">{resumeData?.summary}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-md font- border-b">Skills</h3>
          <ul className="list-disc ml-5">
            {resumeData?.skills?.map((skill, index) => (
              <li key={index} className="">
                {skill?.category}
                <ul>
                  {skill?.skill?.map((skil) => (
                    <li>{skil}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-md border-b">Work Experience</h3>
          <ul className="list-disc ml-5">
            {resumeData?.workExperience?.map((exp, index) => (
              <li key={index}>{exp?.title}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-md border-b">Education</h3>
          <ul className="list-disc ml-5">
            {resumeData?.education?.map((edu, index) => (
              <li key={index}>{edu?.degree}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeEdit;

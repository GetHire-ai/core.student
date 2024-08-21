import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { PostApi } from "../utilis/Api_Calling";

const ResumeModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState({});
  const [step, setStep] = useState(0);

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  const handleInputChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  let createResume = async () => {
    if (resumeData.jobTitle === "" || resumeData.jobDescription === "") {
      alert("please fill details");
      return;
    }
    try {
      let res = await PostApi(`api/studentroutes/ai-resume`, resumeData);
      if (res.status === 200) {
        navigate(`/blank/ai-tools/resume-builder/edit/${res.data.data._id}`);
        closeModal();
      }
    } catch (error) {
      alert("error in create");
      console.log(error);
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center font-[poppins]"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white px-6 py-4 rounded shadow-lg w-3/6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-between items-center border-gray-500 border-b">
          <h2 className="text-lg mb-4">Create New Resume</h2>
          <i
            className="fa-solid fa-xmark cursor-pointer"
            onClick={handleOutsideClick}
          ></i>
        </div>

        {step === 0 && (
          <div className="w-full">
            <div className="w-full flex flex-col">
              <div className="text-md font-semibold text-gray-800 my-3">
                How Do you want to started ?
              </div>
              <div className="text-sm text-gray-500">
                Browse Styles to march your profile and aspirations you pick
                from the base of your publish resumes.
              </div>
            </div>
            <div className="flex gap-5 w-full justify-around my-5">
              <div
                className="flex flex-col max-w-[15rem] border rounded p-3 items-start cursor-pointer bg-gray-100"
                onClick={handleNextStep}
              >
                <i class="fa-brands fa-linkedin bg-blue-500 text-white text-4xl rounded flex justify-center items-center p-5"></i>
                <span className="text-gray-900 text-lg my-2">
                  Start From Scratch
                </span>
                <span className="text-gray-500 text-sm">
                  Build your resume from the ground up using our intuitive
                  editor
                </span>
              </div>
              <div
                className="flex flex-col max-w-[15rem] border rounded p-3 items-start cursor-pointer bg-gray-100"
                onClick={handleNextStep}
              >
                <i class="fa-brands fa-linkedin bg-blue-500 text-white text-4xl rounded flex justify-center items-center p-5"></i>
                <span className="text-gray-900 text-lg my-2">
                  Start From Scratch
                </span>
                <span className="text-gray-500 text-sm">
                  Build your resume from the ground up using our intuitive
                  editor
                </span>
              </div>
              <div
                className="flex flex-col max-w-[15rem] border rounded p-3 items-start cursor-pointer bg-gray-100"
                onClick={handleNextStep}
              >
                <i class="fa-brands fa-linkedin bg-blue-500 text-white text-4xl rounded flex justify-center items-center p-5"></i>
                <span className="text-gray-900 text-lg my-2">
                  Start From Scratch
                </span>
                <span className="text-gray-500 text-sm">
                  Build your resume from the ground up using our intuitive
                  editor
                </span>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="w-full">
            <h3 className="text-md my-4">Target Job Title</h3>
            <p className="text-sm text-gray-600 mb-3">
              Enter the job title you are aiming for or targetting your job
              search . This helps tailor your job search and alerts to match
              your career goal.
            </p>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={resumeData.jobTitle}
              onChange={handleInputChange}
              className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <div className="w-full flex justify-end">
              <button
                onClick={() => {
                  if (resumeData.jobTitle === "") {
                    alert("please fill details");
                    return;
                  }
                  handleNextStep();
                }}
                className="px-3 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 ml-auto"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-full">
            <h3 className="text-md my-4">Target Job Description</h3>
            <p className="text-sm text-gray-600 mb-3">
              Enter the job description you are aiming for or targetting your
              job search . This helps tailor your job search and alerts to match
              your career goal.
            </p>
            <textarea
              type="text"
              rows={5}
              name="jobDescription"
              placeholder="Job Description"
              value={resumeData.jobDescription}
              onChange={handleInputChange}
              className="mb-4 p-2 border border-gray-300 rounded w-full"
            ></textarea>
            <div className="w-full flex justify-end">
              <button
                onClick={createResume}
                className="px-3 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 ml-auto"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ResumeModal;

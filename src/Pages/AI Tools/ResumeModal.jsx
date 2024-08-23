import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { PostApi } from "../utilis/Api_Calling";

import { FaFileAlt } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";


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
    // <div
    //   className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center font-[poppins]"
    //   onClick={handleOutsideClick}
    // >
    //   <div
    //     className="bg-white px-6 py-4 rounded shadow-lg w-3/6"
    //     onClick={(e) => e.stopPropagation()}
    //   >
    //     <div className="w-full flex justify-between items-center border-gray-500 border-b">
    //       <h2 className="text-lg mb-4">Create New Resume</h2>
    //       <i
    //         className="fa-solid fa-xmark cursor-pointer"
    //         onClick={handleOutsideClick}
    //       ></i>
    //     </div>

    //     {step === 0 && (
    //       <div className="w-full">
    //         <div className="w-full flex flex-col">
    //           <div className="text-md font-semibold text-gray-800 my-3">
    //             How Do you want to started ?
    //           </div>
    //           <div className="text-sm text-gray-500">
    //             Browse Styles to march your profile and aspirations you pick
    //             from the base of your publish resumes.
    //           </div>
    //         </div>
    //         <div className="flex gap-5 w-full justify-around my-5">
    //           <div
    //             className="flex flex-col max-w-[15rem] border rounded p-3 items-start cursor-pointer bg-gray-100"
    //             onClick={handleNextStep}
    //           >
    //             <i class="fa-brands fa-linkedin bg-blue-500 text-white text-4xl rounded flex justify-center items-center p-5"></i>
    //             <span className="text-gray-900 text-lg my-2">
    //               Start From Scratch
    //             </span>
    //             <span className="text-gray-500 text-sm">
    //               Build your resume from the ground up using our intuitive
    //               editor
    //             </span>
    //           </div>
    //           <div
    //             className="flex flex-col max-w-[15rem] border rounded p-3 items-start cursor-pointer bg-gray-100"
    //             onClick={handleNextStep}
    //           >
    //             <i class="fa-brands fa-linkedin bg-blue-500 text-white text-4xl rounded flex justify-center items-center p-5"></i>
    //             <span className="text-gray-900 text-lg my-2">
    //               Start From Scratch
    //             </span>
    //             <span className="text-gray-500 text-sm">
    //               Build your resume from the ground up using our intuitive
    //               editor
    //             </span>
    //           </div>
    //           <div
    //             className="flex flex-col max-w-[15rem] border rounded p-3 items-start cursor-pointer bg-gray-100"
    //             onClick={handleNextStep}
    //           >
    //             <i class="fa-brands fa-linkedin bg-blue-500 text-white text-4xl rounded flex justify-center items-center p-5"></i>
    //             <span className="text-gray-900 text-lg my-2">
    //               Start From Scratch
    //             </span>
    //             <span className="text-gray-500 text-sm">
    //               Build your resume from the ground up using our intuitive
    //               editor
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     )}

    //     {step === 1 && (
    //       <div className="w-full">
    //         <h3 className="text-md my-4">Target Job Title</h3>
    //         <p className="text-sm text-gray-600 mb-3">
    //           Enter the job title you are aiming for or targetting your job
    //           search . This helps tailor your job search and alerts to match
    //           your career goal.
    //         </p>
    //         <input
    //           type="text"
    //           name="jobTitle"
    //           placeholder="Job Title"
    //           value={resumeData.jobTitle}
    //           onChange={handleInputChange}
    //           className="mb-4 p-2 border border-gray-300 rounded w-full"
    //         />
    //         <div className="w-full flex justify-end">
    //           <button
    //             onClick={() => {
    //               if (resumeData.jobTitle === "") {
    //                 alert("please fill details");
    //                 return;
    //               }
    //               handleNextStep();
    //             }}
    //             className="px-3 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 ml-auto"
    //           >
    //             Next
    //           </button>
    //         </div>
    //       </div>
    //     )}

    //     {step === 2 && (
    //       <div className="w-full">
    //         <h3 className="text-md my-4">Target Job Description</h3>
    //         <p className="text-sm text-gray-600 mb-3">
    //           Enter the job description you are aiming for or targetting your
    //           job search . This helps tailor your job search and alerts to match
    //           your career goal.
    //         </p>
    //         <textarea
    //           type="text"
    //           rows={5}
    //           name="jobDescription"
    //           placeholder="Job Description"
    //           value={resumeData.jobDescription}
    //           onChange={handleInputChange}
    //           className="mb-4 p-2 border border-gray-300 rounded w-full"
    //         ></textarea>
    //         <div className="w-full flex justify-end">
    //           <button
    //             onClick={createResume}
    //             className="px-3 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 ml-auto"
    //           >
    //             Next
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>,
    // document.body
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center font-poppins"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6 ">
          <h2 className="text-2xl font-semibold text-gray-900">Create New Resume</h2>
          <i
            className="fa-solid fa-xmark cursor-pointer text-gray-500 hover:text-gray-700 transition"
            onClick={handleOutsideClick}
          ></i>
        </div>

        {step === 0 && (
          <div className="flex flex-col gap-6 ">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How Do You Want to Start?
              </h3>
              <p className="text-sm text-gray-600">
                Choose a style to match your profile and aspirations. You can start from scratch or use a template.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
              {["Start From Scratch", "Choose a Template", "Upload Existing Resume"].map((option, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start bg-gray-100 border border-gray-300 rounded-lg p-5 cursor-pointer hover:bg-gray-200 transition"
                  onClick={handleNextStep}
                >
                  {/* <i className="fa-solid fa-file bg-blue-500 text-white text-3xl rounded-full flex justify-center items-center p-4 mb-3"></i> */}
                  {index === 0 ? (
                      <FaFileAlt size={40} color="blue" />
                    ) : index === 1 ? (
                      <RiFileEditFill size={40} color="blue" />
                    ) : (
                      <FaFileUpload size={40} color="blue" />
                    )}
                    <span className="text-gray-900 text-sm font-semibold mt-1 mb-1">{option}</span>
                    <span className="text-gray-500 text-[12px] h-16">
                      {index === 0
                        ? "Build your resume from scratch using our intuitive editor."
                        : index === 1
                        ? "Select from a range of professionally designed templates."
                        : "Upload your existing resume to modify and improve it."
                      }
                    </span>

                </div>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col gap-6  ">
            <h3 className="text-lg font-semibold text-gray-800">Target Job Title</h3>
            <p className="text-sm text-gray-600">
              Enter the job title you're targeting to tailor your resume and job search.
            </p>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={resumeData.jobTitle}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <div className="flex justify-end">
              <button
                onClick={() => {
                  if (resumeData.jobTitle.trim() === "") {
                    alert("Please fill in the job title.");
                    return;
                  }
                  handleNextStep();
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-gray-800">Target Job Description</h3>
            <p className="text-sm text-gray-600">
              Enter the job description to tailor your resume and job search to your career goals.
            </p>
            <textarea
              name="jobDescription"
              placeholder="Job Description"
              value={resumeData.jobDescription}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg w-full"
              rows="5"
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={createResume}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Create Resume
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

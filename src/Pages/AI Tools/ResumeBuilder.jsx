import React, { useEffect, useState } from "react";
import ResumeModal from "./ResumeModal";
import { GetApi, DeleteApi } from "../utilis/Api_Calling";
import { useNavigate } from "react-router-dom";
import moment from "moment"; // Importing moment for date formatting

const ResumeBuilder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resumeData, setResumeData] = useState([]);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchResumeData = async () => {
    try {
      const res = await GetApi("api/studentroutes/ai-resume");
      setResumeData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (resume) => {
    navigate(`/blank/ai-tools/resume-builder/edit/${resume._id}`);
  };

  const handleDelete = async (resumeId) => {
    try {
      let res = await DeleteApi(`api/studentroutes/ai-resume`, resumeId);
      fetchResumeData();
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchResumeData();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full border-b pb-3">
        <div className="w-full flex justify-between items-center px-5">
          <div className="w-full flex flex-col items-start">
            <span className="text-3xl text-gray-900 font-semibold">
              My Resumes
            </span>
            <span className="text-xl text-gray-500 ">
              Create, edit, analyze, and organize your resumes for diverse
              opportunities
            </span>
          </div>
          <div className="w-1/4 flex justify-end">
            <button
              onClick={() => {
                openModal();
              }}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
            >
              Add Resume
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind CSS Table */}
      <div className="w-full p-5">
        <table className="min-w-full bg-white border border-gray-300 rounded">
          <thead>
            <tr>
              <td className="py-2 text-center px-4 border-b">Job Title</td>
              <td className="py-2 text-center px-4 border-b">Created At</td>
              <td className="py-2 text-center px-4 border-b">Actions</td>
            </tr>
          </thead>
          <tbody>
            {resumeData.map((resume) => (
              <tr key={resume._id}>
                <td
                  className="py-2 px-4 border-b text-center text-blue-400 cursor-pointer"
                  onClick={() => handleEdit(resume)}
                >
                  {resume.jobTitle}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {moment(resume.createdAt).format("YYYY-MM-DD")}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button onClick={() => handleEdit(resume)}>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button onClick={() => handleDelete(resume._id)}>
                    <i className="fa-solid fa-trash ml-3"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && <ResumeModal closeModal={closeModal} />}
    </div>
  );
};

export default ResumeBuilder;

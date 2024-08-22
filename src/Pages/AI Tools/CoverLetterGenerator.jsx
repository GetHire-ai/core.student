import React, { useState } from 'react';

import { MdOutlineWatchLater } from "react-icons/md";

function CoverLetterGenerator() {
  const [resume, setResume] = useState(null);
  const [advancedSettingsVisible, setAdvancedSettingsVisible] = useState(false);
  const [formData, setFormData] = useState({
    jobDescription: '',
    jobTitle: '',
    companyName: '',
    template: '',
    additionalContext: '',
    tone: 'Professional',
    length: 'Medium',
    language: '',
  });

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResume(file);
      setFormData((prevState) => ({ ...prevState, resume: file }));
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="w-full h-screen -mt-9 flex justify-center items-center bg-gray-100">
      {/* Main Container with Full Width */}
      <div className="w-full flex justify-center gap-4">
        {/* Form Container with 60% Width */}
        <div className="w-3/6 bg-white pl-5 p-5 rounded-lg shadow-md max-h-[85vh] overflow-y-auto">
          <div className=' flex justify-between  mt-5 -ml-14 h-8 pl-12  bg-white '>
              <p className="text-2xl font-semibold -mt-3 p-2 mb-4">AI Cover Letter Generator</p>
              <div className=' flex flex-row items-center text-blue-600 gap-1 p-2 border-[1px] border-blue-600 rounded-sm hover:bg-blue-100 cursor-pointer '>
               <p>View History</p>
               <span className=' mt-1'><MdOutlineWatchLater/></span>
              </div>
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Job Description*</label>
            <textarea
              name="jobDescription"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Job Description"
              rows="4"
              onChange={handleInputChange}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Job Title*</label>
            <input
              name="jobTitle"
              type="text"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Job Title"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Company Name</label>
            <input
              name="companyName"
              type="text"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Company Name"
              onChange={handleInputChange}
            />
          </div>
          
          <div className="mb-6">
              <div className="border-4 border-dashed border-blue-300 p-8 rounded-xl shadow-md flex flex-col items-center justify-center">
                  <label className="block text-gray-800 text-lg font-medium mb-4">Resume Upload</label>
                  <input
                      type="file"
                      accept=".pdf"
                      onChange={handleResumeUpload}
                      className="hidden"
                      id="resume-upload"
                  />
                  <label
                      htmlFor="resume-upload"
                      className="cursor-pointer bg-blue-600 text-white font-semibold py-3 px-6 rounded-full inline-block hover:bg-blue-700 transition duration-200 ease-in-out shadow-md"
                  >
                      {resume ? "Resume Uploaded" : "Upload your resume"}
                  </label>
                  {resume && (
                      <p className="mt-4 text-sm text-gray-700">File: {resume.name}</p>
                  )}
              </div>
          </div>





          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Template</label>
            <select
              name="template"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
            >
              <option value="">Select Template</option>
              <option value="Default">Default</option>
              <option value="Classic Cover Letter">Classic Cover Letter</option>
              <option value="Skills-Focused Cover Letter">Skills-Focused Cover Letter</option>
              <option value="Creative Cover Letter">Creative Cover Letter</option>
            </select>
          </div>
          
          {/* Advanced Settings Section */}
          <div className="mb-4">
            <button
              className="w-full text-left text-gray-700 text-sm font-medium mb-2 flex items-center justify-between focus:outline-none"
              onClick={() => setAdvancedSettingsVisible(!advancedSettingsVisible)}
            >
              Advanced Settings
              <span>{advancedSettingsVisible ? '▲' : '▼'}</span>
            </button>
            {advancedSettingsVisible && (
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Additional Context</label>
                  <textarea
                    name="additionalContext"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter any additional instructions or information"
                    rows="4"
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Tone</label>
                  <div className="flex space-x-4">
                    {['Professional', 'Casual', 'Enthusiastic', 'Informational'].map((tone) => (
                      <label key={tone} className="flex items-center">
                        <input
                          type="radio"
                          name="tone"
                          value={tone}
                          checked={formData.tone === tone}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        {tone}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Length</label>
                  <div className="flex space-x-4">
                    {['Short', 'Medium', 'Long'].map((length) => (
                      <label key={length} className="flex items-center">
                        <input
                          type="radio"
                          name="length"
                          value={length}
                          checked={formData.length === length}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        {length}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Language</label>
                  <select
                    name="language"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                    onChange={handleInputChange}
                  >
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    {/* Add more language options as needed */}
                  </select>
                </div>
              </div>
            )}
          </div>

          <button
                // onClick={handleSubmit}
                className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
                 onClick={()=>alert("Please wait ... Comming soon ...")}
                >
                {/* Generate */}
                Comming Soon ...
         </button>

        </div>

        <div className="relative w-2/5 h-[600px] flex justify-center items-center bg-blue-50 rounded-lg shadow-md p-6 overflow-hidden">
            {/* Running Lines Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950 to-transparent opacity-50 transform translate-x-[-100%] animate-running-lines"></div>
            </div>

            {/* Blurred Cover Letter Content */}
            <div className="absolute inset-0 bg-white bg-opacity-70 rounded-lg"></div>

            {/* Lock and Text */}
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                {/* Lock Icon */}
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11V7a4 4 0 00-8 0v4m0 0v10h12V11H4z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-lg font-medium text-gray-700 mb-4">
                Unlock the AI generated Cover Letter
              </p>
              <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-200">
                Upgrade to Premium
              </button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default CoverLetterGenerator;

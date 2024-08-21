import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const companies = ['Company A', 'Company B', 'Company C'];
const jobTitles = ['Developer', 'Designer', 'Manager'];
const workTypes = ['Remote', 'On-site', 'Hybrid'];
const locations = ['New York', 'San Francisco', 'Chicago'];

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    jobType: 'full-time',
    workType: '',
    description: '',
    location: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleAddExperience = () => {
    setFormData({
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      jobType: 'full-time',
      workType: '',
      description: '',
      location: ''
    });
    setEditingIndex(null);
    setShowForm(true);
  };

  const handleEditExperience = (index) => {
    setFormData(experiences[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleSaveExperience = () => {
    if (editingIndex !== null) {
      const updatedExperiences = [...experiences];
      updatedExperiences[editingIndex] = formData;
      setExperiences(updatedExperiences);
    } else {
      setExperiences([...experiences, formData]);
    }
    setShowForm(false);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto p-4 shadow-md h-screen">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>

      <button
        className="px-4 py-2 text-sm  text-blue-500 hover:text-blue-700 rounded-md mb-4"
        onClick={handleAddExperience}
      >
        Add your Experience +
      </button>

      {/* {showForm && (
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md mb-4">
          <h4 className="text-lg font-medium text-gray-600 mb-2">
            {editingIndex !== null ? 'Edit Experience' : 'Add Experience'}
          </h4>
          <form>
            <div className="mb-4">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="Job Title"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <label className="mr-4">Job Type:</label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="jobType"
                    value="full-time"
                    checked={formData.jobType === 'full-time'}
                    onChange={handleInputChange}
                  />
                  Full-Time
                </label>
                <label>
                  <input
                    type="radio"
                    name="jobType"
                    value="part-time"
                    checked={formData.jobType === 'part-time'}
                    onChange={handleInputChange}
                  />
                  Part-Time
                </label>
              </div>
            </div>
            <div className="mb-4">
              <select
                name="workType"
                value={formData.workType}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>Select Work Type</option>
                {workTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                onClick={handleSaveExperience}
              >
                Save
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                onClick={handleCancelForm}
              >
                <FaTimes />
              </button>
            </div>
          </form>
        </div>
      )} */}
           
              {showForm && (
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                        <h4 className="text-xl font-semibold text-gray-700 mb-4">
                        {editingIndex !== null ? 'Edit Experience' : 'Add Experience'}
                        </h4>
                        <form className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder="Company Name"
                                className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                            />
                            </div>
                            <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Job Title</label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleInputChange}
                                placeholder="Job Title"
                                className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                            />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Start Date</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleInputChange}
                                className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                            />
                            </div>
                            <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">End Date</label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleInputChange}
                                className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                            />
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <fieldset className="flex items-center gap-4">
                            <legend className="block text-sm font-medium text-gray-600">Job Type</legend>
                            <label className="flex items-center gap-2">
                                <input
                                type="radio"
                                name="jobType"
                                value="full-time"
                                checked={formData.jobType === 'full-time'}
                                onChange={handleInputChange}
                                className="form-radio"
                                />
                                <span className="text-gray-600">Full-Time</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                type="radio"
                                name="jobType"
                                value="part-time"
                                checked={formData.jobType === 'part-time'}
                                onChange={handleInputChange}
                                className="form-radio"
                                />
                                <span className="text-gray-600">Part-Time</span>
                            </label>
                            </fieldset>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Work Type</label>
                            <select
                                name="workType"
                                value={formData.workType}
                                onChange={handleInputChange}
                                className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                            >
                                <option value="" disabled>Select Work Type</option>
                                {workTypes.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                                ))}
                            </select>
                            </div>
                            <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="Location"
                                className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                            />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                            <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Description"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                            rows="4"
                            />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                            type="button"
                            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
                            onClick={handleSaveExperience}
                            >
                            Save
                            </button>
                            <button
                            type="button"
                            className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition flex items-center justify-center"
                            onClick={handleCancelForm}
                            >
                            <FaTimes className="text-xl" />
                            </button>
                        </div>
                        </form>
                    </div>
                    )}




      {experiences.map((experience, index) => (
        <div key={index} className="bg-white p-4 border border-gray-300 rounded-lg shadow-md mb-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-bold text-gray-600">
              {experience.companyName}, {experience.location}
            </h4>
            <button
              className="text-blue-500 hover:underline"
              onClick={() => handleEditExperience(index)}
            >
              Edit
            </button>
          </div>
          <p className="text-gray-700 mb-1 text-sm">
            {experience.jobTitle} | {experience.startDate} To {experience.endDate}
          </p>
          <hr className="border-gray-300 my-2" />
          <p className="text-gray-600 text-sm">{experience.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;

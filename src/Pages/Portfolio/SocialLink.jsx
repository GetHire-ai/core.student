import React, { useState } from 'react';
import { FaPencilAlt, FaSave } from 'react-icons/fa';
import { RiEditLine } from "react-icons/ri";

function SocialMediaForm() {
  const [formData, setFormData] = useState({
    linkedIn: '',
    github: '',
    twitter: '',
    instagram: '',
    facebook: '',
    other: ''
  });

  const [editField, setEditField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = (field) => {
    setEditField(field);
  };

  const handleSaveClick = () => {
    setEditField(null);
  };

  const renderField = (field, label) => (
    <div className="flex items-center my-3">
      <label className="w-32 text-gray-700 text-[13px] font-semibold">{label}</label>
      {editField === field ? (
        <div className="flex-1  flex gap-2">
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleInputChange}
            className="w-full text-[12px] p-2 border-b-2 -ml-10 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
          />
          <button
            onClick={handleSaveClick}
            className="text-blue-600 hover:text-blue-800"
          >
            <FaSave  className=' mr-48'  />
          </button>
        </div>
      ) : (
        <div className="flex-1 flex justify-between items-center">
          {formData[field] ? (
            <a href={formData[field]} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-[12px] hover:underline">
              {formData[field]}
            </a>
          ) : (
            <span className="text-gray-500 text-[12px]">{`Enter your ${label}`}</span>
          )}
          <button
            onClick={() => handleEditClick(field)}
            className="text-blue-600 hover:text-blue-800"
          >
            <RiEditLine size={15} className=' mr-48' />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-6 mx-auto flex flex-col gap-4 bg-white  rounded-lg">
      {renderField('linkedIn', 'LinkedIn')}
      {renderField('github', 'GitHub')}
      {renderField('twitter', 'Twitter')}
      {renderField('instagram', 'Instagram')}
      {renderField('facebook', 'Facebook')}
      {renderField('other', 'Other')}
    </div>
  );
}

export default SocialMediaForm;

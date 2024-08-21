import React, { useState } from 'react';

import { LuPencilLine } from "react-icons/lu";
import { FaFileAlt } from "react-icons/fa";


const applications = [
    {
      company: "Xboom Utilities Private Limited",
      profile: "Social Media Marketing Internship",
      status: "Applied",
      round: "Round 2",
    },
    {
      company: "Xboom Utilities Private Limited",
      profile: "Social Media Marketing Internship",
      status: "Applied",
      round: "LastFinal Round",
    },
    {
      company: "Xboom Utilities Private Limited",
      profile: "Social Media Marketing Internship",
      status: "Applied",
      round: "Interview Scheduled",
    },
    // Add more data as needed
  ];

  const trainings = [
    {
      image: "https://via.placeholder.com/300x200?text=UI+UX+Designer",
      title: "UI UX DESIGNER",
      description: "INTERVIEW QUESTIONS AND ANSWERS in 2023",
      location: "Indore",
      time: "3:00 AM",
      details: "As the field of UI/UX design continues to grow and evolve, it’s important for both designers",
    },
    {
      image: "https://via.placeholder.com/300x200?text=Resume+Paper",
      title: "What Is Resume Paper? (And How To Choose The Best Kind)",
      description: "",
      location: "Indore",
      time: "3:00 AM",
      details: "As the field of UI/UX design continues to grow and evolve, it’s important for both designers",
    },
    {
      image: "https://via.placeholder.com/300x200?text=UI+UX+Designer",
      title: "UI UX DESIGNER",
      description: "INTERVIEW QUESTIONS AND ANSWERS in 2023",
      location: "Indore",
      time: "3:00 AM",
      details: "As the field of UI/UX design continues to grow and evolve, it’s important for both designers",
    },
    {
      image: "https://via.placeholder.com/300x200?text=Graphic+Designer",
      title: "Graphic Designer",
      description: "Best Practices in 2023",
      location: "Bhopal",
      time: "4:00 PM",
      details: "Learn the latest design techniques and tools in the field of Graphic Design.",
    },
    // Add more training cards as needed
  ];

const skillsData = [
  { skill: 'Adobe Illustrator', level: 'Beginner', years: '2 Year' },
  { skill: 'Figma', level: 'Advanced', years: '2 Year' },
  { skill: 'Adobe Illustrator', level: 'Beginner', years: '2 Year' },
  { skill: 'Figma', level: 'Advanced', years: '2 Year' },
];

function MainEvent() {
  const [skills, setSkills] = useState(skillsData);
  const [editIndex, setEditIndex] = useState(null);
  const [editedSkill, setEditedSkill] = useState({ skill: '', level: '', years: '' });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedSkill(skills[index]);
  };

  const handleSaveClick = () => {
    const updatedSkills = [...skills];
    updatedSkills[editIndex] = editedSkill;
    setSkills(updatedSkills);
    setEditIndex(null);
  };

  const handleChange = (e) => {
    setEditedSkill({ ...editedSkill, [e.target.name]: e.target.value });
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTraining, setSelectedTraining] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : trainings.length - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < trainings.length - 3 ? prevIndex + 1 : 0
    );
  };

  const handleReadMore = (training) => {
    setSelectedTraining(training);
  };

  const handleCloseModal = () => {
    setSelectedTraining(null);
  };


  return (
    <div>
        <div className="flex flex-col lg:flex-row items-center bg-blue-100 p-4 gap-6">
        {/* Left Section */}
        <div className="flex-1 p-6 ">
            <h1 className="text-2xl font-bold">Jobs</h1>
            <p className="text-gray-600">Personalised Jobs</p>
            <div className=' bg-gradient-to-r from-purple-800 to-slate-400 rounded-lg'>
                <div className="relative mt-11">
                <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/online-job-finding-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--search-offer-recruitment-business-employee-illustrations-4379119.png?f=webp"
                    alt="Search Job with AI"
                    className="w-[50%] h-[20%]  rounded-xl ml-[40%] "
                />
                <div className="absolute top-8 left-8 text-white">
                    <h2 className="text-xl font-bold">Search job with AI</h2>
                    <button className="mt-4 px-4 py-2 bg-white text-blue-600 font-bold rounded-md">Search Job</button>
                </div>
                </div>
            </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 items-center ">
            <div className="flex justify-start gap-[20%] items-center mb-2">
            <a href="#" className="text-gray-600 underline font-semibold">Suggested Jobs</a>
            <button className="px-4 py-2 flex flex-row items-center bg-black text-white text-sm font-bold rounded-md "><LuPencilLine size={18}/>Edit Preference</button>
            </div>
            <h2 className="text-xl font-bold mb-3 ">Our Top Skills</h2>
            <div className="bg-white p-6 w-[60%] rounded-xl shadow-md">
            {skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center mb-4">
                {editIndex === index ? (
                    <>
                    <input
                        type="text"
                        name="skill"
                        value={editedSkill.skill}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="level"
                        value={editedSkill.level}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="years"
                        value={editedSkill.years}
                        onChange={handleChange}
                        className="w-1/3 p-2 border border-gray-300 rounded"
                    />
                    <button
                        onClick={handleSaveClick}
                        className="text-blue-500 p-2 ml-2"
                    >
                        Save
                    </button>
                    </>
                ) : (
                    <div>
                    <div className=' flex flex-row justify-between '>
                        <div>
                            <p className="font-semibold text-[16px] min-w-10">{skill.skill}</p>
                            <p className="text-gray-500">{skill.level} · {skill.years}</p>
                        </div>
                        <button
                                onClick={() => handleEditClick(index)}
                                className="text-gray-500 p-2 ml-48"
                            >
                                <LuPencilLine size={20}/>
                        </button>
                    </div>
                    <div className='border h-[1px] border-gray-300  rounded-lg mt-1'></div>
                    </div>
                )}
                </div>  
            ))
            }
            </div>
        </div>
        </div>
         
        <div className="flex flex-col mt-6 items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4">Suggested Training</h2>
            <div className="relative w-full max-w-4xl">
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <button
                    onClick={handlePrev}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                    >
                    &#8249;
                    </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                    onClick={handleNext}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                    >
                    &#8250;
                    </button>
                </div>
                <div className="flex justify-center space-x-4 overflow-hidden">
                    {trainings.slice(currentIndex, currentIndex + 3).map((training, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-64 h-80 max-w-xs"
                    >
                        <img
                        src={training.image}
                        alt={training.title}
                        className="rounded-md mb-4 h-32 w-full object-cover"
                        />
                        <h3 className="text-lg font-semibold mb-2 truncate w-full">
                        {training.title}
                        </h3>
                        <p className="text-gray-500 mb-4 truncate w-full">
                        {training.details}
                        </p>
                        <div className="flex items-center justify-between w-full text-gray-500 mb-4 text-sm">
                        <span className="flex items-center">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            {training.location}
                        </span>
                        <span className="flex items-center">
                            <i className="fas fa-clock mr-2"></i>
                            {training.time}
                        </span>
                        </div>
                        <button
                        onClick={() => handleReadMore(training)}
                        className="text-blue-500 hover:underline text-sm font-semibold"
                        >
                        Read More &rarr;
                        </button>
                    </div>
                    ))}
                </div>
            </div>


            {/* Modal */}
            {selectedTraining && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white w-1/2 p-6 rounded-lg">
                    <button
                    onClick={handleCloseModal}
                    className="text-gray-600 hover:text-gray-900 float-right"
                    >
                    &times;
                    </button>
                    <img
                    src={selectedTraining.image}
                    alt={selectedTraining.title}
                    className="rounded-md mb-4 w-full object-cover"
                    />
                    <h3 className="text-2xl font-semibold mb-2">
                    {selectedTraining.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{selectedTraining.details}</p>
                    <div className="flex items-center justify-between w-full text-gray-500 mb-4 text-sm">
                    <span className="flex items-center">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {selectedTraining.location}
                    </span>
                    <span className="flex items-center">
                        <i className="fas fa-clock mr-2"></i>
                        {selectedTraining.time}
                    </span>
                    </div>
                    <p className="text-gray-700">{selectedTraining.description}</p>
                </div>
                </div>
            )}
       </div>


        <div className="w-full  mx-auto my-8 p-8  rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Application Manager</h2>
            <div className="overflow-x-auto rounded-lg ">
                <table className="w-full text-left table-auto">
                <thead className="bg-blue-100 ">
                    <tr className=' '>
                    <th className="py-2 px-4">COMPANY</th>
                    <th className="py-2 px-4">PROFILE</th>
                    <th className="py-2 px-4">APPLICATION STATUS</th>
                    <th className="py-2 px-4">REVIEW APPLICATION</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application, index) => (
                    <tr key={index} className="border-t">
                        <td className="py-3 px-4">{application.company}</td>
                        <td className="py-3 px-4">{application.profile}</td>
                        <td className="py-3 px-4">
                        <span className="inline-flex items-center bg-blue-100 text-blue-700 font-semibold rounded-lg px-3 py-1">
                            {application.status}
                        </span>
                        <span className="ml-2 inline-flex items-center text-gray-600 bg-gray-100 rounded-lg px-2 py-1">
                            {application.round}
                        </span>
                        </td>
                        <td className="py-3 px-4">
                        <FaFileAlt color='blue'/>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default MainEvent;

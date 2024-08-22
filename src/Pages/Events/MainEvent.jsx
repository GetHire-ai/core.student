import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GetApi } from "../utilis/Api_Calling";

import { LuPencilLine } from "react-icons/lu";
// import { FaFileAlt } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import EventCarousel from './EventCarousel';


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

  const jobData = [
    {
      title: "Technical Specialist",
      type: "PART-TIME",
      salary: "20,000 INR - 25,000 INR",
      companyLogo: "https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&P=0&h=180",
      companyName: "Google Inc.",
      location: "New Delhi, India",
      applicants: [
        { image: "https://path-to-applicant1-image.png" },
        { image: "https://path-to-applicant2-image.png" },
        { image: "https://path-to-applicant3-image.png" },
        { image: "https://path-to-applicant4-image.png" },
      ],
    },
    {
      title: "Backend Developer",
      type: "FULL-TIME",
      salary: "10,000 INR - 20,000 INR",
      companyLogo: "https://tse2.mm.bing.net/th?id=OIP.ZtrNE9GnhsrUDpGXFZ2gagHaJG&pid=Api&P=0&h=180",
      companyName: "Apple",
      location: "Bangalore, India",
      applicants: [
        { image: "https://path-to-applicant1-image.png" },
        { image: "https://path-to-applicant2-image.png" },
        { image: "https://path-to-applicant3-image.png" },
        { image: "https://path-to-applicant4-image.png" },
        { image: "https://path-to-applicant4-image.png" },
        { image: "https://path-to-applicant4-image.png" },
      ],
    },
    // Add more job objects here
    {
      title: "Frontend Engineer",
      type: "PART-TIME",
      salary: "10,000 INR - 20,000 INR",
      companyLogo: "https://tse4.mm.bing.net/th?id=OIP.l55ETJUkcgE1M3wmL6V2_gAAAA&pid=Api&P=0&h=180",
      companyName: "SkillGenic",
      location: "Bangalore, India",
      applicants: [
        { image: "https://path-to-applicant1-image.png" },
        { image: "https://path-to-applicant2-image.png" },
        { image: "https://path-to-applicant3-image.png" },
        { image: "https://path-to-applicant4-image.png" },
      ],
    },
    {
      title: "Software Engineer",
      type: "FULL-TIME",
      salary: "50,000 INR - 70,000 INR",
      companyLogo: "https://tse2.mm.bing.net/th?id=OIP.PWoq1WvDQDxc_MPv4Jt0GwHaHa&pid=Api&P=0&h=180",
      companyName: "Microsoft",
      location: "Bangalore, India",
      applicants: [
        { image: "https://path-to-applicant1-image.png" },
        { image: "https://path-to-applicant2-image.png" },
        { image: "https://path-to-applicant3-image.png" },
        { image: "https://path-to-applicant4-image.png" },
      ],
    },
    // Continue adding jobs to test the carousel functionality
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

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [selectedTraining, setSelectedTraining] = useState(null);

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex > 0 ? prevIndex - 1 : trainings.length - 3
  //   );
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex < trainings.length - 3 ? prevIndex + 1 : 0
  //   );
  // };

  // const handleReadMore = (training) => {
  //   setSelectedTraining(training);
  // };

  // const handleCloseModal = () => {
  //   setSelectedTraining(null);
  // };

// ----------------
  const navigate = useNavigate();

  const [allappiledjobs, setallappiledjobs] = useState([]);
  const [Loading, setLoading] = useState(true);

  const Getallappiledjob = async () => {
    try {
      const res = await GetApi(`api/StudentRoutes/GetAllAppiledJobsofaStudent`);
      setallappiledjobs(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
   
  useEffect(() => {
    Getallappiledjob();
  }, []);


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
                {/* <div className="absolute inset-y-0 left-0 flex items-center">
                    <button
                    onClick={handlePrev}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                    >
                    &#8249;
                    </button>
                </div> */}
                {/* <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                    onClick={handleNext}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                    >
                    &#8250;
                    </button>
                </div> */}

                <div className="p-10">
                  <EventCarousel jobs={jobData} />
                </div>


            </div>


            {/* Modal */}
            {/* {selectedTraining && (
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
            )} */}
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
                {/* <tbody>
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
                </tbody> */}
                <tbody className="text-[16px] bg-[#fff] font-[400] font-[Outfit] text-center ">
                {allappiledjobs.map((Application, index) => (
                  <tr
                    key={index}
                    // onClick={() => {
                    //   navigate(`/blank/allrounds/${Application.JobId._id}`);
                    // }}
                    // className="cursor-pointer "
                    className=' '
                  >
                    <td className="px-[25px] py-[30px] text-black text-opacity-[50%] text-left">
                      {Application?.CompanyId?.Name}
                    </td>
                    <td className="px-[25px] flex gap-[29px] py-[30px] text-black text-opacity-[50%] text-left">
                      {Application.JobId?.positionName}
                    </td>
                    <td className=" px-[19px] py-[7px]  items-center rounded-[5px] text-left ">
                      {/* {Application.createdAt} */}
                      <p className="text-[#4234a2] ">{Application.status}</p>
                    </td>
                    <td className="px-[25px] py-[30px] text-left hover:cursor-pointer" 
                      onClick={() => {
                        navigate(`/blank/allrounds/${Application.JobId._id}`);
                      }}
                     >
                      <div className=" px-[19px] py-[7px] flex  justify-center items-center rounded-[5px]">
                        <p className="text-[#4234a2]"><FaFileAlt size={20}/></p>
                        <p className="text-[#97969d] text-[14.52px] ml-[17px]">
                          {Application.applicationStatusB}
                        </p>
                        {Application.applicationStatusC === "2" && (
                          <p className="text-[#97969d] ml-[5px] border-[0.85px] border-[#97969d] rounded-[50%] w-[18.67px] h-[18.67px] flex justify-center items-center">
                            {Application.applicationStatusC}
                          </p>
                        )}
                      </div>
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

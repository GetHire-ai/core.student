import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const EventCard = ({ job }) => {
  return (
    <div className="max-w-lg rounded-lg shadow-lg bg-white border border-gray-200 p-5">
      <div className="flex justify-between items-start">
        <p className="text-lg font-medium text-gray-900">{job.title}</p>
        <div className="w-5 h-5 text-gray-400 cursor-pointer">
          {/* Bookmark icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v18l6-6 6 6V3H6z" />
          </svg>
        </div>
      </div>
      <div className='flex flex-row items-center gap-6'>
         <p className={`text-green-500 text-[11px] mt-2 p-1 rounded-md ${job.type === 'FULL-TIME' ? 'bg-green-100' : 'bg-blue-200'} `}>{job.type}</p>
         <p className="text-gray-500 text-[12px] mt-1">{job.salary}</p>
      </div>
      <div className="flex items-center mt-3">
        <img src={job.companyLogo} alt={job.companyName} className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <p className="text-gray-900 font-medium">{job.companyName}</p>
          <p className="text-gray-500 flex flex-row items-center text-[13px] gap-2"><CiLocationOn/>{job.location}</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <div className="flex -space-x-2">
          {job.applicants.map((applicant, index) => (
            <img
              key={index}
              src={applicant.image}
              alt="Applicant"
              className="w-6 h-6 rounded-full bg-transparent border-2  border-white"
              style={{ zIndex: index }}
            />
          ))}
        </div>
        <p className="text-gray-500 text-sm ml-3">{job.applicants.length}+ applicants</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <button className="border text-[12px] border-purple-500 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition">View details</button>
        <button className="bg-purple-600 text-[12px] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">Apply now</button>
      </div>
    </div>
  );
};

export default EventCard;

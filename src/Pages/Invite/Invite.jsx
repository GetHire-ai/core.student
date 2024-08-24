import React from 'react';
import InviteCard from './InviteCard';
import { CiLocationOn } from "react-icons/ci";
  

const Invite = () => {

    const performers = [
        // {
        //     id: 1,
        //     name: 'Mark S.',
        //     role: 'Comedian',
        //     availability: 'AVAILABLE',
        //     rating: 5.0,
        //     category: 'STAND-UP COMEDY',
        //     description: 'Winner of prestigious comedy competitions...',
        //     image: 'path_to_image1.jpg',
        //     isTopPerformer: true,
        //     web:'www.google.com'
        //   },
        //   {
        //     id: 2,
        //     name: 'Lisa J.',
        //     role: 'Musician',
        //     availability: 'BUSY',
        //     rating: 4.7,
        //     category: 'JAZZ',
        //     description: 'Award-winning jazz musician...',
        //     image: 'path_to_image2.jpg',
        //     isTopPerformer: false,
        //     web:'www.google.com'
        //   },
        //   {
        //     id: 3,
        //     name: 'Mark S.',
        //     role: 'Comedian',
        //     availability: 'AVAILABLE',
        //     rating: 5.0,
        //     category: 'STAND-UP COMEDY',
        //     description: 'Winner of prestigious comedy competitions...',
        //     image: 'path_to_image1.jpg',
        //     isTopPerformer: false,
        //     web:'www.google.com'
        //   },
        //   {
        //     id: 4,
        //     name: 'Lisa J.',
        //     role: 'Musician',
        //     availability: 'BUSY',
        //     rating: 4.7,
        //     category: 'JAZZ',
        //     description: 'Award-winning jazz musician...',
        //     image: 'path_to_image2.jpg',
        //     isTopPerformer: true,
        //     web:'www.google.com'
        //   },
        //   {
        //     id: 5,
        //     name: ' J.',
        //     role: 'Musician',
        //     availability: 'BUSY',
        //     rating: 4.7,
        //     category: 'JAZZ',
        //     description: 'Award-winning jazz musician...',
        //     image: 'path_to_image2.jpg',
        //     isTopPerformer: true,
        //     web:'www.google.com'
        //   },
        //   {
        //     id: 6,
        //     name: 'isa .',
        //     role: 'Musician',
        //     availability: 'BUSY',
        //     rating: 4.7,
        //     category: 'JAZZ',
        //     description: 'Award-winning jazz musician...',
        //     image: 'path_to_image2.jpg',
        //     isTopPerformer: false,
        //     web:'www.google.com'
        //   },
        //   {
        //     id: 7,
        //     name: 'Lia J.',
        //     role: 'Musician',
        //     availability: 'BUSY',
        //     rating: 4.7,
        //     category: 'JAZZ',
        //     description: 'Award-winning jazz musician...',
        //     image: 'path_to_image2.jpg',
        //     isTopPerformer: true,
        //     web:'www.google.com'
        //   },
        //   {
        //     id: 8,
        //     name: 'a J.',
        //     role: 'Musician',
        //     availability: 'BUSY',
        //     rating: 4.7,
        //     category: 'JAZZ',
        //     description: 'Award-winning jazz musician...',
        //     image: 'path_to_image2.jpg',
        //     isTopPerformer: false,
        //     web:'www.google.com'
        //   },
          {
            id:1,
            title: "Technical Specialist",
            type: "PART-TIME",
            salary: "20,000 INR - 25,000 INR",
            companyLogo: "https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&P=0&h=180",
            companyName: "Google Inc.",
            location: "New Delhi, India",
            applicants: "14"
          },
          {
            id:2,
            title: "Technical Specialist",
            type: "FULL-TIME",
            salary: "20,000 INR - 25,000 INR",
            companyLogo: "https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&P=0&h=180",
            companyName: "Google Inc.",
            location: "New Delhi, India",
            applicants: "14"
          },
          {
            id:3,
            title: "Technical Specialist",
            type: "FULL-TIME",
            salary: "20,000 INR - 25,000 INR",
            companyLogo: "https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&P=0&h=180",
            companyName: "Google Inc.",
            location: "New Delhi, India",
            applicants: "14"
          },
          {
            id:4,
            title: "Technical Specialist",
            type: "PART-TIME",
            salary: "20,000 INR - 25,000 INR",
            companyLogo: "https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&P=0&h=180",
            companyName: "Google Inc.",
            location: "New Delhi, India",
            applicants: "14"
          },
          {
            id:5,
            title: "Technical Specialist",
            type: "FULL-TIME",
            salary: "20,000 INR - 25,000 INR",
            companyLogo: "https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&P=0&h=180",
            companyName: "Google Inc.",
            location: "New Delhi, India",
            applicants: "14"
          },
        // {
        //   id: 5,
        //   name: 'Lisa Jask',
        //   role: 'Musician',
        //   availability: 'BUSY',
        //   rating: 4.7,
        //   category: 'JAZZ',
        //   description: 'Award-winning jazz musician with a reputation for soulful performances.',
        //   image: 'path_to_image2.jpg'
        // },  
        // Add more performer objects here
      ];
    
      return (
        // <div className=' bg-gray-100 min-h-screen'>
        //     <div className='flex flex-row justify-between ml-4 mt-2'>
        //         <div>
        //             <p className=' text-2xl font-semibold'>Talent Booking</p>
        //             <p>Find comedians by availability, ratings, and past performance success .</p>
        //         </div>
        //         <div className='flex gap-4 mr-4 items-center'>
        //             <button className=' p-2 h-10 items-center border-[1.5px] border-black'>Contract</button>
        //             <button className=' p-2 h-10 items-center border-[1.5px] border-black'>Book</button>
        //         </div>
        //     </div>
        //     <div className="flex flex-wrap justify-center items-start  p-4">
        //         {performers.map((performer) => (
        //             <InviteCard key={performer.id} performer={performer} />
        //         ))}
        //     </div>
        // </div>
        <div className=' bg-gray-100 min-h-screen'>
            <div className='flex flex-row justify-between ml-4 mt-2'>
                <div>
                    <p className=' text-2xl font-semibold'>Talent Booking</p>
                    <p>Find comedians by availability, ratings, and past performance success .</p>
                </div>
                <div className='flex gap-4 mr-4 items-center'>
                    <button className=' p-2 h-10 items-center border-[1.5px] border-black rounded-md'>Contact</button>
                    {/* <button className=' p-2 h-10 items-center border-[1.5px] border-black'>Book</button> */}
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-start gap-7  p-4">
                {performers.map((performer) => (
                    <div className="min-w-80 h-60 rounded-lg shadow-lg bg-white border hover:scale-105 duration-300 border-gray-200 p-5">
                    <div className="flex justify-between items-start">
                      <p className="text-xl font-medium text-gray-900">{performer.title}</p>
                      <div className="w-5 h-5 text-gray-400 cursor-pointer">
                        {/* Bookmark icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v18l6-6 6 6V3H6z" />
                        </svg>
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-6'>
                       <p className={`text-green-500 text-[14px] mt-2 p-1 rounded-md ${performer.type === 'FULL-TIME' ? 'bg-green-100' : 'text-blue-800 bg-blue-100'} `}>{performer.type}</p>
                       <p className="text-gray-500 text-[13px] mt-1">Salary: {performer.salary}</p>
                    </div>
                    <div className="flex items-center mt-3">
                      <img src={performer.companyLogo} alt={performer.companyName} className="w-12 h-12 rounded-full" />
                      <div className="ml-3 mt-2">
                        <p className="text-gray-900 font-medium">{performer.companyName}</p>
                        <p className="text-gray-500 flex flex-row items-center text-[13px] gap-2"><CiLocationOn/>{performer.location}</p>
                      </div>
                    </div>
                    {/* <div className="flex items-center mt-4">
                      <div className="flex -space-x-2">
                        {performer.applicants.map((applicant, index) => (
                          <img
                            key={index}
                            src={applicant.image}
                            alt="Applicant"
                            className="w-6 h-6 rounded-full bg-transparent border-2  border-white"
                            style={{ zIndex: index }}
                          />
                        ))}
                      </div>
                      <p className="text-gray-500 text-sm ml-3">{performer.applicants.length}+ applicants</p>
                    </div> */}
                    <div className=' mt-2'>
                      <p>{performer.applicants} + applicants</p>
                    </div>
                    <div className="flex mt-3 justify-between items-center ">
                      <button className="border text-[12px] border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                       onClick={()=>alert("success fully rejected")}
                       >Reject</button>
                      <button className="bg-purple-600 text-[12px] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                        onClick={()=>alert("View job")}
                       >Apply now</button>
                    </div>
                  </div>
                ))}
            </div>
        </div>
      );
    };

export default Invite;

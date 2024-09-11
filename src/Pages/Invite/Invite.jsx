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
      id: 1,
      title: "Technical Specialist",
      type: "PART-TIME",
      salary: "20,000 INR - 25,000 INR",
      companyLogo: "https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&P=0&h=180",
      companyName: "Google Inc.",
      location: "New Delhi, India",
      applicants: "14"
    },
    {
      id: 2,
      title: "Technical Specialist",
      type: "FULL-TIME",
      salary: "20,000 INR - 25,000 INR",
      companyLogo: "https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&P=0&h=180",
      companyName: "Google Inc.",
      location: "New Delhi, India",
      applicants: "14"
    },
    {
      id: 3,
      title: "Technical Specialist",
      type: "FULL-TIME",
      salary: "20,000 INR - 25,000 INR",
      companyLogo: "https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&P=0&h=180",
      companyName: "Google Inc.",
      location: "New Delhi, India",
      applicants: "14"
    },
    {
      id: 4,
      title: "Technical Specialist",
      type: "PART-TIME",
      salary: "20,000 INR - 25,000 INR",
      companyLogo: "https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&P=0&h=180",
      companyName: "Google Inc.",
      location: "New Delhi, India",
      applicants: "14"
    },
    {
      id: 5,
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
    // <div className=' bg-gray-50 min-h-screen'>
    //     <div className='flex flex-row justify-between ml-4 mt-2'>
    //         <div>
    //             <p className=' text-2xl font-semibold'>Talent Booking</p>
    //         </div>
    //         {/* <div className='flex gap-4 mr-4 items-center'> */}
    //             {/* <button className=' p-2 h-10 items-center border-[1.5px] border-black rounded-md'>Contact</button> */}
    //             {/* <button className=' p-2 h-10 items-center border-[1.5px] border-black'>Book</button> */}
    //         {/* </div> */}
    //     </div>
    //     <div className="flex flex-wrap justify-center items-start gap-8 p-6 bg-gray-50">
    //       {performers.map((performer) => (
    //         <div className="min-w-[22rem] h-auto rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-2xl transform transition-all duration-300 p-6">
    //           <div className="flex justify-between items-start mb-4">
    //             <p className="text-xl font-semibold text-gray-800">{performer.title}</p>
    //             <div className="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500 transition">
    //               {/* Bookmark icon */}
    //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v18l6-6 6 6V3H6z" />
    //               </svg>
    //             </div>
    //           </div>
    //           <div className="flex items-center gap-4 mb-4">
    //             <p className={`text-sm font-medium px-2 py-1 rounded-lg ${performer.type === 'FULL-TIME' ? 'text-green-800 bg-green-100' : 'text-blue-800 bg-blue-100'}`}>
    //               {performer.type}
    //             </p>
    //             <p className="text-gray-600 text-sm">Salary: {performer.salary}</p>
    //           </div>
    //           <div className="flex items-center mb-4">
    //             <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
    //               <img 
    //                 src={performer.companyLogo} 
    //                 alt={performer.companyName} 
    //                 className="object-cover w-full h-full" 
    //               />
    //             </div>
    //             <div className="ml-4">
    //               <p className="text-lg text-gray-800 font-semibold">{performer.companyName}</p>
    //               <p className="text-gray-500 flex items-center text-sm gap-2">
    //                 <CiLocationOn />{performer.location}
    //               </p>
    //             </div>
    //           </div>
    //           <div className="mt-2 text-gray-500 text-sm">
    //             {performer.applicants}+ applicants
    //           </div>
    //           <div className="flex mt-4 justify-between items-center">
    //             <button 
    //               className="border text-sm border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
    //               onClick={() => alert('Successfully rejected')}
    //             >
    //               Reject
    //             </button>
    //             <button 
    //               className="bg-blue-600 text-sm text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    //               onClick={() => alert('View job')}
    //             >
    //               Apply Now
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    // </div>

    <div className="bg-gray-50 min-h-screen">
      <div className='container mx-auto'>

        <div className="flex flex-row justify-between ml-4 mt-6">
          <div>
            <p className="text-4xl font-semibold text-gray-800">Talent Booking</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-start items-start bg-gray-50 mt-4">
          {performers.map((performer) => (
            <div className="2xl:w-1/2 w-full p-2">
              <div className="flex flex-row justify-between items-center w-full bg-white border border-gray-500 rounded-xl shadow-lg hover:shadow-2xl hover:border-gray-800 transform transition-all duration-300 p-4" key={performer.id}>
                <div className="flex flex-row items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
                    <img
                      src={performer.companyLogo}
                      alt={performer.companyName}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-lg text-gray-800 font-semibold">{performer.companyName}</p>
                    <p className="text-gray-500 flex items-center text-sm gap-2">
                      <CiLocationOn />{performer.location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p className="text-xl font-semibold text-gray-800">{performer.title}</p>
                  <p className={`text-sm font-medium px-2 py-1 rounded-lg cursor-pointer ${performer.type === 'FULL-TIME' ? 'text-green-800 bg-green-100' : 'text-blue-800 bg-blue-100'}`}>
                    {performer.type}
                  </p>
                  <p className="text-gray-600 text-sm">Salary: {performer.salary}</p>
                </div>
                <div className="flex flex-col items-end justify-center">
                  <p className="text-gray-500 text-sm">{performer.applicants}+ applicants</p>
                  <div className="flex mt-2 justify-between items-center">
                    <button
                      className="border text-sm border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                      onClick={() => alert('Successfully rejected')}
                    >
                      Reject
                    </button>
                    <button
                      className="bg-blue-500 text-sm text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ml-2"
                      onClick={() => alert('View job')}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500 transition ml-2">
                  {/* Bookmark icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v18l6-6 6 6V3H6z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invite;

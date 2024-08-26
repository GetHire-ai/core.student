import React, { useEffect, useState, useRef } from "react";
import "react-circular-progressbar/dist/styles.css";
import { GetApi } from "../utilis/Api_Calling";

const ApplicationManager = () => {
  const [AllJobs, setAllJobs] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [appiledjobs, setappiledjobs] = useState([]);
  const [allappiledjobs, setallappiledjobs] = useState([]);
  const [allinterview, setallinterview] = useState([]);
  const [allTestResults, setAllTestResults] = useState([]);
  const [studentprofile, setstudentprofile] = useState({});
  const [selectedJob, setSelectedJob] = useState(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [hoveredModalIndex, setHoveredModalIndex] = useState(null);

  const cardRefs = useRef([]);
  const timeoutRef = useRef(null);

  // Fetch student profile
  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setstudentprofile(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  // Fetch all jobs
  const GetAllJobs = async () => {
    try {
      const Getjobdata = await GetApi(`api/AdminRoutes/GetAllJobs`);
      setAllJobs(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Fetch applied jobs
  const Getallappiledjob = async () => {
    try {
      const res = await GetApi(`api/StudentRoutes/GetAllAppiledJobsofaStudent`);
      setallappiledjobs(res?.data?.data);
      setSelectedJob(res?.data?.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllJobs();
    Getallappiledjob();
  }, []);

  // Handle job card hover
  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHoveredCardIndex(index);
    setSelectedJob(allappiledjobs[index]);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSelectedJob(null);
      setHoveredCardIndex(null);
    }, 300); // Delay to prevent flickering
  };

  const handleModalMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setHoveredModalIndex(hoveredCardIndex);
  };

  const handleModalMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSelectedJob(null);
      setHoveredCardIndex(null);
    }, 300); // Delay to prevent flickering
  };

  // Get container style for modal
  const getContainerStyle = (index) => {
    const card = cardRefs.current[index];
    if (!card) return {};

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = card;
    const containerWidth = 350;
    const containerHeight = 400; // Increase height to fit content

    let top = offsetTop + offsetHeight + 20; // Increased gap
    let left = offsetLeft + offsetWidth + 20; // Increased gap

    // Adjust left position if necessary
    const viewportWidth = window.innerWidth;
    const adjustedLeft = left + containerWidth > viewportWidth ? Math.max(left - containerWidth - 20, 0) : left;

    // Adjust top position if necessary
    const viewportHeight = window.innerHeight;
    const adjustedTop = top + containerHeight > viewportHeight ? Math.max(top - containerHeight - 20, 0) : top;

    return {
      top: adjustedTop,
      left: adjustedLeft,
      width: containerWidth,
      height: containerHeight,
      zIndex: 9999,
      position: 'fixed',
      // overflow: 'auto',
      padding: '24px',
    };
  };

  return (
    <>
      <div className="relative pl-3 min-h-screen">
        <p className="text-2xl font-bold mt-4 mb-3"> My Applications</p>
        <div className="grid grid-cols-4 gap-4">
          {allappiledjobs.map((job, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="bg-[#fff] p-[20px] max-h-[350px] max-w-[250px] rounded-[20px] shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
            >
              <div className="flex justify-between items-center gap-4">
                <p className="text-[16px] font-[700]">{job.JobId.positionName}</p>
                <img src="/images/material-symbols-light_share.svg" alt="Share" className="w-[20px] h-[20px]" />
              </div>
              <div className="flex gap-[5px] mt-[18px]">
                <p className="text-black text-opacity-[60%] text-[14px] font-[500]">{job.CompanyId.Name}</p>
              </div>
              <div className="flex gap-[5px] mt-[20px]">
                <img src="/images/carbon_location.svg" className="w-[18px] h-[22px]" alt="Location" />
                <p className="text-black text-opacity-[60%] text-[14px] font-[500]">{job.JobId.location}</p>
              </div>
              <div className="flex mt-[20px] gap-4 justify-between">
                <p className="text-black text-opacity-[60%] text-[14px] font-[500]">{job.JobId.time}</p>
                {job.status === "rejected" ? (
                  <p className="text-red-500 text-[14px]">X {job.status}</p>
                ) : (
                  <p className="text-blue-500 text-[13px]">{job.status}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedJob && (
          <div
            className="absolute bg-[#fff] rounded-[20px] shadow-xl border border-[#d9d9d9]"
            style={getContainerStyle(hoveredCardIndex)}
            onMouseEnter={handleModalMouseEnter}
            onMouseLeave={handleModalMouseLeave}
          >
            <div className="flex flex-row justify-between p-[24px] -mt-4">
              <div>
                <h2 className="text-[18px] font-[700] max-lg:text-[16px]">{selectedJob.JobId.positionName}</h2>
                <p className="text-[14px]">{selectedJob.CompanyId.Name}</p>
                <p className="text-[12px]">{selectedJob.JobId.location}</p>
              </div>
              {/* <div>
                <button
                  className="bg-blue-600 p-3 text-[12px] h-9 flex items-center rounded-md shadow-lg text-white hover:bg-blue-900"
                  onClick={() => alert("View job button is clicked")}
                >
                  View Jobs
                </button>
              </div> */}
            </div>
            <hr className="border-t-2 border-gray-300 my-2 -mt-3" />
            <p className="text-[16px]">Application Status</p>
            <div className="ml-4 mt-2">
              {["pending", "shortlisted", "selected", "rejected"].map((status, index, statuses) => {
                const currentIndex = statuses.findIndex(s => s.toLowerCase() === selectedJob?.status?.toLowerCase());
                const isActive = index === currentIndex;
                const isBeforeActive = index <= currentIndex;
                const isPending = index > currentIndex;

                return (
                  <div key={index} className="flex items-center mb-4">
                    <div className="relative flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-full ${status === "Rejected" && isActive ? "bg-red-600" : isBeforeActive ? "bg-blue-600" : "bg-white border border-blue-600"}`}></div>
                      {index < statuses.length - 1 && (
                        <div className={`absolute w-[2px] h-8 top-3/4 left-1/2 -translate-x-1/2 ${isBeforeActive ? "bg-blue-600" : "bg-gray-300"}`}></div>
                      )}
                    </div>
                    <div className="ml-4">
                      <p className={`text-[14px] ${isBeforeActive ? "text-blue-600" : "text-gray-500"}`}>
                        {status}
                      </p>
                      {isPending && <p className="text-[12px] text-red-400">Pending...</p>}
                      {isActive && !isPending && status !== "Rejected" && <p className="text-[12px] text-gray-400">On 26 Jul, 2024</p>}
                      {status === "Rejected" && isActive && <p className="text-[12px] text-red-600">Rejected on 26 Jul, 2024</p>}
                    </div>
                  </div>
                );
              })}
              <p className=" text-blue-600 -mt-2 ml-2 text-[12px] underline cursor-pointer " onClick={()=>(alert("Moving to feed back I dont know"))}>view feedback</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ApplicationManager;





  {/* {selectedJob && (
                    <div className="w-full bg-[#fff] p-[24px] rounded-[20px] shadow-xl border border-[#d9d9d9]">
                      <div className="flex flex-row justify-between">
                        <div>
                          <h2 className="text-[17px] font-[700] max-lg:text-[16px] max-2xl:text-[16px]">
                            {selectedJob.JobId.positionName}
                          </h2>
                          <p className="text-[12px]">
                            {selectedJob.CompanyId.Name}
                          </p>
                          <p className="text-[10px]">
                            {selectedJob.JobId.location}
                          </p>
                        </div>
                        <div>
                          <button
                            className="bg-blue-600 p-3 text-[11px] h-9 flex items-center max-2xl:text-[10px] max-2xl:p-1 max-2xl:rounded-lg max-2xl:h-7 rounded-md shadow-lg text-white max-lg:p-2 hover:bg-blue-900 hover:shadow-2xl"
                            onClick={() => alert("View job button is clicked")}
                          >
                            View Jobs
                          </button>
                        </div>
                      </div>
                      <hr className="border-t-2 border-gray-300 my-2" />
                      <p className="text-[16px] max-2xl:text-[15px]">
                        Application Status
                      </p>

                      <div className="ml-4 mt-4">
                        {["pending", "shortlisted", "selected", "rejected"].map(
                          (status, index, statuses) => {
                            const currentIndex = statuses.findIndex(
                              (s) =>
                                s.toLowerCase() ===
                                selectedJob?.status?.toLowerCase()
                            );
                            const isActive = index === currentIndex;
                            const isBeforeActive = index <= currentIndex;
                            const isPending = index > currentIndex;

                            return (
                              <div
                                key={index}
                                className="flex items-center mb-4"
                              >
                                <div className="relative flex items-center justify-center">
                                  <div
                                    className={`w-3 h-3 rounded-full ${status === "Rejected" && isActive ? "bg-red-600" : isBeforeActive ? "bg-blue-600" : "bg-white border border-blue-600"}`}
                                  ></div>
                                  {index < statuses.length - 1 && (
                                    <div
                                      className={`absolute w-[2px] h-8 top-3/4 left-1/2 -translate-x-1/2 ${isBeforeActive ? "bg-blue-600" : "bg-gray-300"}`}
                                    ></div>
                                  )}
                                </div>
                                <div className="ml-4">
                                  <p
                                    className={`text-[14px] ${isBeforeActive ? "text-blue-600" : "text-gray-500"}`}
                                  >
                                    {status}
                                  </p>
                                  {isPending && (
                                    <p className="text-[12px] text-red-400">
                                      Pending...
                                    </p>
                                  )}
                                  {isActive &&
                                    !isPending &&
                                    status !== "Rejected" && (
                                      <p className="text-[12px] text-gray-400">
                                        On 26 Jul, 2024
                                      </p>
                                    )}
                                  {status === "Rejected" && isActive && (
                                    <p className="text-[12px] text-red-600">
                                      Rejected on 26 Jul, 2024
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>

                    </div>
                  )} */}


                //   <div className="relative">
                //   <div className="grid grid-cols-4 gap-6">
                //     {allappiledjobs.map((job, index) => (
                //       <div
                //         key={index}
                //         ref={el => cardRefs.current[index] = el}
                //         onMouseEnter={() => {
                //           setSelectedJob(job);
                //           setHoveredCardIndex(index);
                //         }}
                //         onMouseLeave={() => {
                //           setSelectedJob(null);
                //           setHoveredCardIndex(null);
                //         }}
                //         className="bg-[#fff] p-[20px] max-h-[320px] max-w-[250px] rounded-[20px] shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
                //       >
                //         {/* Job Card Content */}
                //         <div className="flex justify-between items-center gap-4">
                //           <p className="text-[16px] font-[700]">{job.JobId.positionName}</p>
                //           <img
                //             src="/images/material-symbols-light_share.svg"
                //             alt="Share"
                //             className="w-[20px] h-[20px]"
                //           />
                //         </div>
                //         <div className="flex gap-[5px] mt-[18px]">
                //           <p className="text-black text-opacity-[60%] text-[14px] font-[500]">
                //             {job.CompanyId.Name}
                //           </p>
                //         </div>
                //         <div className="flex gap-[5px] mt-[20px]">
                //           <img
                //             src="/images/carbon_location.svg"
                //             className="w-[18px] h-[22px]"
                //             alt="Location"
                //           />
                //           <p className="text-black text-opacity-[60%] text-[14px] font-[500]">
                //             {job.JobId.location}
                //           </p>
                //         </div>
                //         <div className="flex mt-[20px] gap-4 justify-between">
                //           <p className="text-black text-opacity-[60%] text-[14px] font-[500]">
                //             {job.JobId.time}
                //           </p>
                //           {job.status === "rejected" ? (
                //             <p className="text-red-500 text-[14px]">X {job.status}</p>
                //           ) : (
                //             <p className="text-blue-500 text-[13px]">{job.status}</p>
                //           )}
                //         </div>
                //       </div>
                //     ))}
                //   </div>
            
                //   {selectedJob && (
                //     <div
                //       className="absolute bg-[#fff] rounded-[20px] shadow-xl border border-[#d9d9d9]"
                //       style={getContainerStyle(hoveredCardIndex)}
                //     >
                //       <div className="flex flex-row justify-between p-[24px]">
                //         <div>
                //           <h2 className="text-[18px] font-[700] max-lg:text-[16px]">
                //             {selectedJob.JobId.positionName}
                //           </h2>
                //           <p className="text-[14px]">{selectedJob.CompanyId.Name}</p>
                //           <p className="text-[12px]">{selectedJob.JobId.location}</p>
                //         </div>
                //         <div>
                //           <button
                //             className="bg-blue-600 p-3 text-[12px] h-9 flex items-center rounded-md shadow-lg text-white hover:bg-blue-900"
                //             onClick={() => alert("View job button is clicked")}
                //           >
                //             View Jobs
                //           </button>
                //         </div>
                //       </div>
                //       <hr className="border-t-2 border-gray-300 my-2" />
                //       <p className="text-[16px]">Application Status</p>
                //       <div className="ml-4 mt-4">
                //         {["pending", "shortlisted", "selected", "rejected"].map((status, index, statuses) => {
                //           const currentIndex = statuses.findIndex(s => s.toLowerCase() === selectedJob?.status?.toLowerCase());
                //           const isActive = index === currentIndex;
                //           const isBeforeActive = index <= currentIndex;
                //           const isPending = index > currentIndex;
            
                //           return (
                //             <div key={index} className="flex items-center mb-4">
                //               <div className="relative flex items-center justify-center">
                //                 <div className={`w-4 h-4 rounded-full ${status === "Rejected" && isActive ? "bg-red-600" : isBeforeActive ? "bg-blue-600" : "bg-white border border-blue-600"}`}></div>
                //                 {index < statuses.length - 1 && (
                //                   <div className={`absolute w-[2px] h-8 top-3/4 left-1/2 -translate-x-1/2 ${isBeforeActive ? "bg-blue-600" : "bg-gray-300"}`}></div>
                //                 )}
                //               </div>
                //               <div className="ml-4">
                //                 <p className={`text-[14px] ${isBeforeActive ? "text-blue-600" : "text-gray-500"}`}>
                //                   {status}
                //                 </p>
                //                 {isPending && <p className="text-[12px] text-red-400">Pending...</p>}
                //                 {isActive && !isPending && status !== "Rejected" && <p className="text-[12px] text-gray-400">On 26 Jul, 2024</p>}
                //                 {status === "Rejected" && isActive && <p className="text-[12px] text-red-600">Rejected on 26 Jul, 2024</p>}
                //               </div>
                //             </div>
                //           );
                //         })}
                //       </div>
                //     </div>
                //   )}
                // </div>
            

















// import React, { useEffect, useState } from "react";
// import { IoIosInformationCircleOutline } from "react-icons/io";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { GetApi } from "../utilis/Api_Calling";

// const ApplicationManager = () => {
//   const navigate = useNavigate();

//   const [allappiledjobs, setallappiledjobs] = useState([]);
//   const [Loading, setLoading] = useState(true);

//   const Getallappiledjob = async () => {
//     try {
//       const res = await GetApi(`api/StudentRoutes/GetAllAppiledJobsofaStudent`);
//       setallappiledjobs(res?.data?.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };
   
//   useEffect(() => {
//     Getallappiledjob();
//   }, []);

//   return (
//     <>
//       <div className="px-[17px] py-[60px] flex flex-col gap-[60px] justify-center items-center">
//         <p className="font-[Outfit] text-[32px] font-[400]">
//           Application Manager
//         </p>
//         <div className="w-full font-[500]">
//           <div className="overflow-x-auto">
//             <table className="w-full rounded-[12px]">
//               <thead className="bg-[#e3eff7] text-[14px] font-[400] font-[Outfit] h-[84px]">
//                 <tr>
//                   <th className="text-left font-[500] pl-[25px] pr-[90px] pt-[37px] pb-[29px]">
//                     COMPANY
//                   </th>
//                   <th className="text-left font-[500] pl-[25px] pr-[184px] pt-[37px] pb-[29px]">
//                     PROFILE
//                   </th>
//                   <th className="text-left font-[500] pl-[25px] pr-[26px] pt-[37px] pb-[29px]">
//                     APPLIED ON
//                   </th>
//                   <th className="text-left font-[500] pl-[25px] pr-[86px] pt-[37px] pb-[29px]">
//                     APPLICATION STATUS
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="text-[16px] bg-[#fff] font-[400] font-[Outfit] text-center">
//                 {allappiledjobs.map((Application, index) => (
//                   <tr
//                     key={index}
//                     onClick={() => {
//                       navigate(`/blank/allrounds/${Application.JobId._id}`);
//                     }}
//                     className="cursor-pointer"
//                   >
//                     <td className="px-[25px] py-[30px] text-black text-opacity-[50%] text-left">
//                       {Application?.CompanyId?.Name}
//                     </td>
//                     <td className="px-[25px] flex gap-[29px] py-[30px] text-black text-opacity-[50%] text-left">
//                       {Application.JobId?.positionName}
//                     </td>
//                     <td className="px-[25px] py-[30px] text-black text-opacity-[50%] text-left ">
//                       {Application.createdAt}
//                     </td>
//                     <td className="px-[25px] py-[30px] text-left">
//                       <div className="bg-[#e3eff7] px-[19px] py-[7px] flex  justify-center items-center rounded-[5px]">
//                         <p className="text-[#4234a2]">{Application.status}</p>
//                         <p className="text-[#97969d] text-[14.52px] ml-[17px]">
//                           {Application.applicationStatusB}
//                         </p>
//                         {Application.applicationStatusC === "2" && (
//                           <p className="text-[#97969d] ml-[5px] border-[0.85px] border-[#97969d] rounded-[50%] w-[18.67px] h-[18.67px] flex justify-center items-center">
//                             {Application.applicationStatusC}
//                           </p>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             {Loading && (
//               <div className="flex justify-center items-center text-2xl">
//                 Loading...
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ApplicationManager;

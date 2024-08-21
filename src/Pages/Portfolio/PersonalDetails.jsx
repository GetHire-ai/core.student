import React, { useState } from "react";

import { RiEditLine } from "react-icons/ri";

const PersonalDetails = () => {
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingField, setIsEditingField] = useState(null);

  const [details, setDetails] = useState({
    name: "deepshikha goud",
    email: "deepshikha@skillgenic.in",
    summary:
      "Results-driven Recruiter with 2.6 years of proven expertise in talent acquisition. Demonstrated success in developing and executing strategic recruitment plans, fostering strong stakeholder relationships, and driving the growth of high-performing teams. Committed to delivering exceptional candidate experiences and contributing to organizational success through effective hiring solutions.",
    dob: "01/01/2001",
    mobile: "7987550330",
    gender: "Female",
  });

  const [formData, setFormData] = useState({
    location: 'Indore, Madhya Pradesh, India',
    jobTitle: 'Recruiter',
    workExperience: '3-5 Years',
    annualCompensation: '1.2-3 LPA',
  });

  const handleEditPersonalClick = () => {
    setIsEditingPersonal(!isEditingPersonal);
  };

  const handleChangePersonal = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSavePersonalClick = () => {
    setIsEditingPersonal(false);
    alert("Details saved successfully!");
  };

  const handleEditFieldClick = (field) => {
    setIsEditingField(field);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveFieldClick = () => {
    setIsEditingField(null);
  };

//   for uploading the resume
 // for uploading the pdf resume
 const [pdfFile, setPdfFile] = useState(null);

 const handlePDFUpload = (event) => {
   const file = event.target.files[0];
   if (file && file.type === 'application/pdf') {
     setPdfFile(file);
   } else {
     alert('Please upload a valid PDF file.');
   }
 };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-6 -ml-0">
          <h2 className="text-xl font-semibold mb-4 -ml-4">About</h2>
            <div className="bg-white p-2 -ml-1 rounded flex flex-col ">
              <p className=" -mb-2">Your resume</p>
                <div className='flex felx-row justify-between items-center'>
                  <div className='flex flex-row gap-2'>
                    <p>Resume1.pdf</p>
                    <a href="#" className="text-blue-500 hover:underline duration-500">view</a>
                  </div>
                  <div>
                    <div className="flex flex-col ">
                    <div className="w-80 p-4 bg-white ">
                      <input
                        type="file"
                        id="upload"
                        accept="application/pdf"
                        onChange={handlePDFUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="upload"
                        className="cursor-pointer inline-block px-4 py-2 text-orange-400 font-medium text-sm underline text-center"
                      >
                        {pdfFile ? "PDF Uploaded: " + pdfFile.name : "Upload again"}
                      </label>
                      {pdfFile && (
                        <div className="mt-4 text-center">
                          <p className="text-gray-600">Uploaded File: {pdfFile.name}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>  
              </div>
            </div>
            <div className="flex justify-between items-center mb-4 mt-2">
                <h2 className="text-xl -ml-4 font-semibold">Your personal details</h2>
                <button
                className="text-blue-600 hover:text-blue-800 focus:outline-none"
                onClick={handleEditPersonalClick}
                >
                    <RiEditLine size={20}/>
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-6.036a2.5 2.5 0 113.536 3.536L7.5 21H3v-4.5L16.732 3.732z"
                    />
                </svg> */}
                </button>
            </div>

            <div className="space-y-4 mt-6">
                <div className="flex flex-row justify-between">
                <div className="flex flex-col items-start justify-center">
                    <label className="text-sm font-medium">Name</label>
                    {isEditingPersonal ? (
                    <input
                        type="text"
                        name="name"
                        value={details.name}
                        onChange={handleChangePersonal}
                        // className="border border-gray-300 rounded-lg p-2 w-full ml-4"
                        className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                    />
                    ) : (
                    <p className="text-stone-600 from-neutral-500">{details.name}</p>
                    )}
                </div>

                <div className="flex flex-col items-start justify-center">
                    <label className="text-sm font-medium">Email</label>
                    {isEditingPersonal ? (
                    <input
                        type="email"
                        name="email"
                        value={details.email}
                        onChange={handleChangePersonal}
                         className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                        // className="border border-gray-300 rounded-lg p-2 w-full ml-4"
                    />
                    ) : (
                    <p className="text-stone-600 from-neutral-500">{details.email}</p>
                    )}
                </div>
                </div>

                <div className="pt-7">
                    <label className="text-sm font-medium">Your profile summary</label>
                    {isEditingPersonal ? (
                        <textarea
                        name="summary"
                        value={details.summary}
                        onChange={handleChangePersonal}
                        className="border border-gray-300 rounded-lg p-2 w-full mt-2"
                        />
                    ) : (
                        <p className="text-stone-600 border-2 p-4 rounded-md mt-2 border-gray-400 from-neutral-500">
                        {details.summary}
                        </p>
                    )}
                </div>

                <div className="flex flex-row justify-between pt-5">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-start">
                        <label className="text-sm font-medium">Your DOB</label>
                        {isEditingPersonal ? (
                            <input
                            type="text"
                            name="dob"
                            placeholder="dd-mm-yyyy"
                            value={details.dob}
                            onChange={handleChangePersonal}
                             className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                            // className="border border-gray-300 rounded-lg p-2 w-full"
                            />
                        ) : (
                            <p className="text-stone-600 text-[14px] from-neutral-500">{details.dob}</p>
                        )}
                    </div>

                    <div className="flex flex-col justify-between">
                    <label className="text-sm font-medium">Mobile number</label>
                    {isEditingPersonal ? (
                        <input
                        type="text"
                        name="mobile"
                        value={details.mobile}
                        onChange={handleChangePersonal}
                         className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                        // className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                    ) : (
                        <p className="text-stone-600 from-neutral-500">{details.mobile}</p>
                    )}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col justify-between">
                    <label className="text-sm font-medium">Your gender</label>
                    {isEditingPersonal ? (
                        <div className=" flex flex-row justify-between gap-3">
                                <label className="inline-flex items-center">
                                    <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={details.gender === "Male"}
                                    onChange={handleChangePersonal}
                                    className="form-radio"
                                    />
                                    <span className="">Male</span>
                                </label>
                                <label className="inline-flex items-center ">
                                    <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={details.gender === "Female"}
                                    onChange={handleChangePersonal}
                                    className="form-radio"
                                    />
                                    <span className="ml-2">Female</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={details.gender === "Other"}
                                    onChange={handleChangePersonal}
                                    className="form-radio"
                                    />
                                    <span className="ml-2">Other</span>
                                </label>
                        </div>
                    ) : (
                        <p className="text-stone-600 from-neutral-500">{details.gender}</p>
                    )}
                    </div>
                </div>
                </div>
            </div>
            {isEditingPersonal && (
                <button
                className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                onClick={handleSavePersonalClick}
                >
                Save
                </button>
            )}


            {/* <div className="p-4 space-y-4 mt-8">
                <p className="text-lg -ml-4 font-semibold">Your professional details</p>
                <div className="flex justify-between items-center">
                        <div className=" flex flex-col">
                            <p className="text-sm font-medium">Location</p>
                            {isEditingField === 'location' ? (
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleFieldChange}
                                className="border border-gray-300 p-2 rounded w-full"
                            />
                            ) : (
                            <div><p>{formData.location}</p></div>
                            )}
                        </div>   

                    {!isEditingField && (
                    <button
                        onClick={() => handleEditFieldClick('location')}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                        ✏️
                    </button>
                    )}
                    {isEditingField === 'location' && (
                    <button
                        onClick={handleSaveFieldClick}
                        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                    )}
                </div>

                <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <p className="text-sm font-medium">Job Title</p>  
                            {isEditingField === 'jobTitle' ? (
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleFieldChange}
                                className="border border-gray-300 p-2 rounded w-full"
                            />
                            ) : (
                            <span>{formData.jobTitle}</span>
                            )}
                        </div>
                    {!isEditingField && (
                    <button
                        onClick={() => handleEditFieldClick('jobTitle')}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                        ✏️
                    </button>
                    )}
                    {isEditingField === 'jobTitle' && (
                    <button
                        onClick={handleSaveFieldClick}
                        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                    )}
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                            <p className="text-sm font-medium">Work Experience</p>
                            {isEditingField === 'workExperience' ? (
                            <input
                                type="text"
                                name="workExperience"
                                value={formData.workExperience}
                                onChange={handleFieldChange}
                                className="border border-gray-300 p-2 rounded w-full"
                            />
                            ) : (
                            <span>{formData.workExperience}</span>
                            )}
                    </div>       
                    {!isEditingField && (
                    <button
                        onClick={() => handleEditFieldClick('workExperience')}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                        ✏️
                    </button>
                    )}
                    {isEditingField === 'workExperience' && (
                    <button
                        onClick={handleSaveFieldClick}
                        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                    )}
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <p className="text-sm font-medium">Annual Compensation</p>
                        {isEditingField === 'annualCompensation' ? (
                        <input
                            type="text"
                            name="annualCompensation"
                            value={formData.annualCompensation}
                            onChange={handleFieldChange}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                        ) : (
                        <span>{formData.annualCompensation}</span>
                        )}
                    </div>
                    {!isEditingField && (
                    <button
                        onClick={() => handleEditFieldClick('annualCompensation')}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                        ✏️
                    </button>
                    )}
                    {isEditingField === 'annualCompensation' && (
                    <button
                        onClick={handleSaveFieldClick}
                        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Save
                    </button>
                    )}
                </div>

            </div> */}
            
            <div className="p-4 space-y-4 mt-8">
                <p className="text-lg -ml-9 font-semibold">Your professional details</p>

                <div className="flex justify-between items-center -ml-3 ">
                    <div className="flex flex-col">
                        <p className="text-sm font-medium">Location</p>
                        {isEditingField === 'location' ? (
                            <select
                                name="location"
                                value={formData.location}
                                onChange={handleFieldChange}
                                 className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                                // className=" border-b-2 p-2 rounded w-full"
                            >
                                <option value="Indore, Madhya Pradesh, India">Indore, Madhya Pradesh, India</option>
                                <option value="Bhopal, Madhya Pradesh, India">Bhopal, Madhya Pradesh, India</option>
                                <option value="Mumbai, Maharashtra, India">Mumbai, Maharashtra, India</option>
                                <option value="Pune, Maharashtra, India">Pune, Maharashtra, India</option>
                            
                            </select>
                        ) : (
                            <div><p>{formData.location}</p></div>
                        )}
                    </div>

                    {!isEditingField && (
                        <button
                            onClick={() => handleEditFieldClick('location')}
                            className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                            <RiEditLine size={20} color="blue"/>
                        </button>
                    )}
                    {isEditingField === 'location' && (
                        <button
                            onClick={handleSaveFieldClick}
                            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Save
                        </button>
                    )}
                </div>

                <div className="flex justify-between items-center -ml-3">
                    <div className="flex flex-col">
                        <p className="text-sm font-medium">Job Title</p>
                        {isEditingField === 'jobTitle' ? (
                            <select
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleFieldChange}
                                 className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                            >
                                <option value="Recruiter">Recruiter</option>
                                <option value="HR Manager">HR Manager</option>
                                <option value="Software Engineer">Software Engineer</option>
                                <option value="Data Analyst">Data Analyst</option>
                            
                            </select>
                        ) : (
                            <span>{formData.jobTitle}</span>
                        )}
                    </div>

                    {!isEditingField && (
                        <button
                            onClick={() => handleEditFieldClick('jobTitle')}
                            className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                            <RiEditLine size={20} color="blue"/>
                        </button>
                    )}
                    {isEditingField === 'jobTitle' && (
                        <button
                            onClick={handleSaveFieldClick}
                            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Save
                        </button>
                    )}
                </div>

                <div className="flex justify-between items-center -ml-3">
                    <div className="flex flex-col">
                        <p className="text-sm font-medium">Work Experience</p>
                        {isEditingField === 'workExperience' ? (
                            <select
                                name="workExperience"
                                value={formData.workExperience}
                                onChange={handleFieldChange}
                                 className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                            >
                                <option value="1-2 Years">1-2 Years</option>
                                <option value="3-5 Years">3-5 Years</option>
                                <option value="5-7 Years">5-7 Years</option>
                                <option value="7+ Years">7+ Years</option>
                                
                            </select>
                        ) : (
                            <span>{formData.workExperience}</span>
                        )}
                    </div>

                    {!isEditingField && (
                        <button
                            onClick={() => handleEditFieldClick('workExperience')}
                            className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                            <RiEditLine size={20} color="blue"/>
                        </button>
                    )}
                    {isEditingField === 'workExperience' && (
                        <button
                            onClick={handleSaveFieldClick}
                            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Save
                        </button>
                    )}
                </div>

                <div className="flex justify-between items-center -ml-3">
                    <div className="flex flex-col">
                        <p className="text-sm font-medium">Annual Compensation</p>
                        {isEditingField === 'annualCompensation' ? (
                            <select
                                name="annualCompensation"
                                value={formData.annualCompensation}
                                onChange={handleFieldChange}
                                 className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                            >
                                <option value="1.2-3 LPA">1.2-3 LPA</option>
                                <option value="3-5 LPA">3-5 LPA</option>
                                <option value="5-7 LPA">5-7 LPA</option>
                                <option value="7-10 LPA">7-10 LPA</option>
                        
                            </select>
                        ) : (
                            <span>{formData.annualCompensation}</span>
                        )}
                    </div>

                    {!isEditingField && (
                        <button
                            onClick={() => handleEditFieldClick('annualCompensation')}
                            className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                            <RiEditLine size={20} color="blue"/>
                        </button>
                    )}
                    {isEditingField === 'annualCompensation' && (
                        <button
                            onClick={handleSaveFieldClick}
                            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Save
                        </button>
                    )}
                </div>
            </div>





    </div>
  );
};

export default PersonalDetails;









// import React, { useState } from "react";
// const PersonalDetails = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [details, setDetails] = useState({
//     name: "deepshikha goud",
//     email: "deepshikha@skillgenic.in",
//     summary:
//       "Results-driven Recruiter with 2.6 years of proven expertise in talent acquisition. Demonstrated success in developing and executing strategic recruitment plans, fostering strong stakeholder relationships, and driving the growth of high-performing teams. Committed to delivering exceptional candidate experiences and contributing to organizational success through effective hiring solutions.",
//     dob: "01/01/2001",
//     mobile: "7987550330",
//     gender: "Female",
//   });

//   const handleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (e) => {
//     setDetails({
//       ...details,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     alert("Details saved successfully!");
//   };
   
// // for next ---------------------------------------
// const [formData, setFormData] = useState({
//     location: 'Indore, Madhya Pradesh, India',
//     jobTitle: 'Recruiter',
//     workExperience: '3-5 Years',
//     annualCompensation: '1.2-3 LPA',
// });

// const handleEditClick = (field) => {
//     setIsEditing(field); // Set the field to be edited
// };

// const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//         ...formData,
//         [name]: value,
//     });
// };

// const handleSaveClick = () => {
//     setIsEditing(null); // Exit editing mode after saving
// };






//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl -ml-4 font-semibold">Your personal details</h2>
//         <button
//           className="text-blue-600 hover:text-blue-800 focus:outline-none"
//           onClick={handleEdit}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.232 5.232l3.536 3.536m-2.036-6.036a2.5 2.5 0 113.536 3.536L7.5 21H3v-4.5L16.732 3.732z"
//             />
//           </svg>
//         </button>
//       </div>

//       <div className="space-y-4 mt-9">

//             <div className=" flex flex-row justify-between ">
//                 <div className="flex flex-col items-start justify-center">
//                 <label className="text-sm font-medium">Name</label>
//                 {isEditing ? (
//                     <input
//                     type="text"
//                     name="name"
//                     value={details.name}
//                     onChange={handleChange}
//                     className="border border-gray-300 rounded-lg p-2 w-full ml-4"
//                     />
//                 ) : (
//                     <p className=" text-stone-600 from-neutral-500">{details.name}</p>
//                 )}
//                 </div>

//                 <div className="flex flex-col items-start justify-center">
//                 <label className="text-sm font-medium">Email</label>
//                 {isEditing ? (
//                     <input
//                     type="email"
//                     name="email"
//                     value={details.email}
//                     onChange={handleChange}
//                     className="border border-gray-300 rounded-lg p-2 w-full ml-4"
//                     />
//                 ) : (
//                     <p className="text-stone-600 from-neutral-500">{details.email}</p>
//                 )}
//                 </div>
//             </div>


//             <div className=" pt-7">
//             <label className="text-sm font-medium">Your profile summary</label>
//             {isEditing ? (
//                 <textarea
//                 name="summary"
//                 value={details.summary}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-lg p-2 w-full mt-2"
//                 />
//             ) : (
//                 <p className="text-stone-600 border-2 p-4 rounded-md mt-2 border-gray-400 from-neutral-500">{details.summary}</p>
//             )}
//             </div>

//         <div className="flex flex-row justify-between pt-5"> 
//             <div className="flex flex-col gap-4">
//                 <div className="flex flex-col  justify-start">
//                 <label className="text-sm font-medium">Your DOB</label>
//                 {isEditing ? (
//                     <input
//                     type="text"
//                     name="dob"
//                     placeholder="dd-mm-yyyy"
//                     value={details.dob}
//                     onChange={handleChange}
//                     className="border border-gray-300 rounded-lg p-2 w-full"
//                     />
//                 ) : (
//                     <p className="text-stone-600 from-neutral-500">{details.dob}</p>
//                 )}
//                 </div>

//                 <div className="flex flex-col  justify-between">
//                 <label className="text-sm font-medium"> Mobile number</label>
//                 {isEditing ? (
//                     <input
//                     type="text"
//                     name="mobile"
//                     value={details.mobile}
//                     onChange={handleChange}
//                     className="border border-gray-300 rounded-lg p-2 w-full "
//                     />
//                 ) : (
//                     <p className="text-stone-600 from-neutral-500">{details.mobile}</p>
//                 )}
//                 </div>
//             </div>
//             <div> 
//                 <div className="flex flex-col justify-between">
//                 <label className="text-sm font-medium">Your gender</label>
//                 {isEditing ? (
//                     <div className="ml-4">
//                     <label className="inline-flex items-center ">
//                         <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={details.gender === "Male"}
//                         onChange={handleChange}
//                         className="form-radio"
//                         />
//                         <span className="">Male</span>
//                     </label>
//                     <label className="inline-flex items-center mr-6">
//                         <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={details.gender === "Female"}
//                         onChange={handleChange}
//                         className="form-radio"
//                         />
//                         <span className="ml-2">Female</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                         <input
//                         type="radio"
//                         name="gender"
//                         value="Other"
//                         checked={details.gender === "Other"}
//                         onChange={handleChange}
//                         className="form-radio"
//                         />
//                         <span className="ml-2">Other</span>
//                     </label>
//                     </div>
//                 ) : (
//                     <p className="text-stone-600 from-neutral-500">{details.gender}</p>
//                 )}
//                 </div>
//             </div>
//         </div>

//       </div>

//       {isEditing && (
//         <button
//           className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
//           onClick={handleSave}
//         >
//           Save
//         </button>
//       )}
         
      
//           <div className="p-4 space-y-4">
      
//             <div className="flex items-center">
//                 {isEditing === 'location' ? (
//                     <input
//                         type="text"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 rounded w-full"
//                     />
//                 ) : (
//                     <span>{formData.location}</span>
//                 )}
//                 <button
//                     onClick={() => handleEditClick('location')}
//                     className="ml-2 text-gray-500 hover:text-gray-700"
//                 >
//                     ✏️
//                 </button>
//                 {isEditing === 'location' && (
//                     <button
//                         onClick={handleSaveClick}
//                         className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
//                     >
//                         Save
//                     </button>
//                 )}
//             </div>

          
//             <div className="flex items-center">
//                 {isEditing === 'jobTitle' ? (
//                     <input
//                         type="text"
//                         name="jobTitle"
//                         value={formData.jobTitle}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 rounded w-full"
//                     />
//                 ) : (
//                     <span>{formData.jobTitle}</span>
//                 )}
//                 <button
//                     onClick={() => handleEditClick('jobTitle')}
//                     className="ml-2 text-gray-500 hover:text-gray-700"
//                 >
//                     ✏️
//                 </button>
//                 {isEditing === 'jobTitle' && (
//                     <button
//                         onClick={handleSaveClick}
//                         className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
//                     >
//                         Save
//                     </button>
//                 )}
//             </div>

//             <div className="flex items-center">
//                 {isEditing === 'workExperience' ? (
//                     <input
//                         type="text"
//                         name="workExperience"
//                         value={formData.workExperience}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 rounded w-full"
//                     />
//                 ) : (
//                     <span>{formData.workExperience}</span>
//                 )}
//                 <button
//                     onClick={() => handleEditClick('workExperience')}
//                     className="ml-2 text-gray-500 hover:text-gray-700"
//                 >
//                     ✏️
//                 </button>
//                 {isEditing === 'workExperience' && (
//                     <button
//                         onClick={handleSaveClick}
//                         className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
//                     >
//                         Save
//                     </button>
//                 )}
//             </div>

           
//             <div className="flex items-center">
//                 {isEditing === 'annualCompensation' ? (
//                     <input
//                         type="text"
//                         name="annualCompensation"
//                         value={formData.annualCompensation}
//                         onChange={handleInputChange}
//                         className="border border-gray-300 p-2 rounded w-full"
//                     />
//                 ) : (
//                     <span>{formData.annualCompensation}</span>
//                 )}
//                 <button
//                     onClick={() => handleEditClick('annualCompensation')}
//                     className="ml-2 text-gray-500 hover:text-gray-700"
//                 >
//                     ✏️
//                 </button>
//                 {isEditing === 'annualCompensation' && (
//                     <button
//                         onClick={handleSaveClick}
//                         className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
//                     >
//                         Save
//                     </button>
//                 )}
//             </div>
//         </div> 






//     </div>
//   );
// };

// export default PersonalDetails;

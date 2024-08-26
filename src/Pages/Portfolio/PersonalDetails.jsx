import React, { useEffect, useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { Modal, Box, Typography, Button } from '@mui/material';
import { GetApi, PutApi } from "../utilis/Api_Calling";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const PersonalDetails = ({ profile, updateProfile, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);

    // const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingField, setIsEditingField] = useState(null);
  const [Loading, setLoading] = useState(false);
  // const [details, setDetails] = useState({});
  const jobTitles = [
    "Recruiter",
    "HR Manager",
    "Software Engineer",
    "Data Analyst",
  ];
  const locations = [
    "Indore, Madhya Pradesh, India",
    "Bhopal, Madhya Pradesh, India",
    "Mumbai, Maharashtra, India",
    "Pune, Maharashtra, India",
  ];

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
    updateProfile(details);
  };

  const handleEditFieldClick = (field) => {
    setIsEditingField(field);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSaveFieldClick = () => {
    setIsEditingField(null);
    updateProfile(details);
  };

  const [pdfFile, setPdfFile] = useState(null);
  const handlePDFUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setDetails(Getjobdata?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditingPersonal(false);
  };
  
  const handlejobTitlesChange = (event, newValue) => {
    setDetails({ ...details, jobTitles: newValue });
  };

  const handlelocationsChange = (event, newValue) => {
    setDetails({ ...details, locations: newValue });
  };

  if (loading && details === null) return <>Loading</>;

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">About</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="font-medium mb-2">Your Resume</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-gray-700">Resume1.pdf</p>
            <a href="#" className="text-blue-500 hover:underline">
              View
            </a>
          </div>
          <div className="flex flex-col items-end">
            <input
              type="file"
              id="upload"
              accept="application/pdf"
              onChange={handlePDFUpload}
              className="hidden"
            />
            <label
              htmlFor="upload"
              className="cursor-pointer text-blue-600 hover:underline"
            >
              {pdfFile ? `PDF Uploaded: ${pdfFile.Name}` : "Upload again"}
            </label>
          </div>
        </div>
      </div>
  
      <div className="bg-white rounded-lg p-6 mt-6 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Your Personal Details
          </h2>
          <button
            className="text-blue-600 hover:text-blue-800 focus:outline-none"
            onClick={handleEditClick}
          >
            <RiEditLine size={20} />
          </button>
        </div>
  
        <div className="space-y-6">
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="text-sm font-medium text-gray-600">Name</label>
              <p className="text-gray-800">{details?.Name}</p>
            </div>
            <div className="w-1/2 pl-2">
              <label className="text-sm font-medium text-gray-600">Email</label>
              <p className="text-gray-800">{details?.Email}</p>
            </div>
          </div>
  
          <div>
            <label className="text-sm font-medium text-gray-600">
              Profile Summary
            </label>
            <p className="text-gray-800 mt-2 p-4 bg-gray-50 rounded-md border border-gray-300">
              {details?.summary}
            </p>
          </div>
  
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="text-sm font-medium text-gray-600">DOB</label>
              <p className="text-gray-800">{details?.dob}</p>
            </div>
            <div className="w-1/2 pl-2">
              <label className="text-sm font-medium text-gray-600">Number</label>
              <p className="text-gray-800">{details?.Number}</p>
            </div>
          </div>
  
          <div>
            <label className="text-sm font-medium text-gray-600">Gender</label>
            <p className="text-gray-800">{details?.gender}</p>
          </div>
        </div>
      </div>
  
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="flex justify-center items-center"
      >
        <Box
          sx={{
            width: 400,
            p: 4,
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Edit Personal Details
          </Typography>
          <div className="mt-4 space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="Name"
                value={details?.Name}
                onChange={handleChangePersonal}
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="Email"
                value={details?.Email}
                onChange={handleChangePersonal}
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="text-sm font-medium">Profile Summary</label>
              <textarea
                name="summary"
                value={details?.summary}
                onChange={handleChangePersonal}
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="text-sm font-medium">DOB</label>
              <input
                type="text"
                name="dob"
                value={details?.dob}
                onChange={handleChangePersonal}
                placeholder="dd-mm-yyyy"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="text-sm font-medium">Number</label>
              <input
                type="text"
                name="Number"
                value={details?.Number}
                onChange={handleChangePersonal}
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="text-sm font-medium">Gender</label>
              <div className="flex gap-4 mt-2">
                {["Male", "Female", "Other"].map((gender) => (
                  <label key={gender} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={details?.gender === gender}
                      onChange={handleChangePersonal}
                      className="form-radio"
                    />
                    <span className="ml-2">{gender}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            className="mt-6"
            onClick={() => {
              setIsModalOpen(false);
              setIsEditingPersonal(false);
              updateProfile(details);
            }}
          >
            Save
          </Button>
        </Box>
      </Modal>
  
      <div className="bg-white rounded-lg p-6 mt-8 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Professional Details
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <label className="text-sm font-medium text-gray-600">Locations</label>
              {isEditingField === "locations" ? (
                <Autocomplete
                  multiple
                  fullWidth
                  options={locations}
                  value={details.locations}
                  onChange={handlelocationsChange}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-800 -mt-1">{details.locations}</p>
              )}
            </div>
            {!isEditingField && (
              <button
                onClick={() => handleEditFieldClick("locations")}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <RiEditLine size={20} color="blue" />
              </button>
            )}
            {isEditingField === "locations" && (
              <button
                onClick={handleSaveFieldClick}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            )}
          </div>
  
          <div className="flex justify-between items-center">
            <div className="w-full">
              <label className="text-sm font-medium text-gray-600 ">Job Title</label>
              {isEditingField === "jobTitles" ? (
                <Autocomplete
                  multiple
                  options={jobTitles}
                  value={details.jobTitles}
                  onChange={handlejobTitlesChange}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-800 -mt-1">{details.jobTitles}</p>
              )}
            </div>
            {!isEditingField && (
              <button
                onClick={() => handleEditFieldClick("jobTitles")}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <RiEditLine size={20} color="blue" />
              </button>
            )}
            {isEditingField === "jobTitles" && (
              <button
                onClick={handleSaveFieldClick}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            )}
          </div>
          
          <div className="flex justify-between items-center">
               <div className="flex flex-col">
                 <label className="text-sm font-medium text-gray-600">Work Experience</label>
                 {isEditingField === "Experience" ? (
                  <select
                    Name="Experience"
                    value={details.Experience}
                    onChange={handleFieldChange}
                    className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                  >
                    <option value="1-2">1-2 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5-7">5-7 Years</option>
                    <option value="7+">7+ Years</option>
                  </select>
                ) : (
                  <span className="text-gray-800">{details.Experience} Years</span>
                )}
              </div>

              {!isEditingField && (
                <button
                  onClick={() => handleEditFieldClick("Experience")}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  <RiEditLine size={20} color="blue" />
                </button>
              )}
              {isEditingField === "Experience" && (
                <button
                  onClick={handleSaveFieldClick}
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              )}
          </div>

          <div className="flex justify-between items-center ">
               <div className="flex flex-col">
                 <label className="text-sm font-medium text-gray-600">Annual Compensation</label>
                 {isEditingField === "Current_Salary" ? (
                  <select
                    Name="Current_Salary"
                    value={details.Current_Salary}
                    onChange={handleFieldChange}
                    className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                  >
                    <option value="1.2-3">1.2-3 LPA</option>
                    <option value="3-5">3-5 LPA</option>
                    <option value="5-7">5-7 LPA</option>
                    <option value="7-10">7-10 LPA</option>
                  </select>
                ) : (
                  <span className=" text-gray-800 ">{details.Current_Salary} LPA</span>
                )}
              </div>

              {!isEditingField && (
                <button
                  onClick={() => handleEditFieldClick("Current_Salary")}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  <RiEditLine size={20} color="blue" />
                </button>
              )}
              {isEditingField === "Current_Salary" && (
                <button
                  onClick={handleSaveFieldClick}
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              )}
           </div>




          {/* <div className="flex justify-between items-center">
            <div className="w-full">
              <label className="text-sm font-medium text-gray-600">Industries</label>
              {isEditingField === "industries" ? (
                <Autocomplete
                  multiple
                  options={industries}
                  value={details.industries}
                  onChange={handleindustriesChange}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-800 mt-2">{details.industries}</p>
              )}
            </div>
            {!isEditingField && (
              <button
                onClick={() => handleEditFieldClick("industries")}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <RiEditLine size={20} color="blue" />
              </button>
            )}
            {isEditingField === "industries" && (
              <button
                onClick={handleSaveFieldClick}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
  
};

export default PersonalDetails;




















// import React, { useEffect, useState } from "react";
// import { RiEditLine } from "react-icons/ri";
// import { Modal, Box, Typography, Button } from '@mui/material';
// import { GetApi, PutApi } from "../utilis/Api_Calling";

// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";

// const PersonalDetails = ({ profile, updateProfile, loading }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [details, setDetails] = useState({});
//   const [isEditingPersonal, setIsEditingPersonal] = useState(false);

//     // const [isEditingPersonal, setIsEditingPersonal] = useState(false);
//   const [isEditingField, setIsEditingField] = useState(null);
//   const [Loading, setLoading] = useState(false);
//   // const [details, setDetails] = useState({});
//   const jobTitles = [
//     "Recruiter",
//     "HR Manager",
//     "Software Engineer",
//     "Data Analyst",
//   ];
//   const locations = [
//     "Indore, Madhya Pradesh, India",
//     "Bhopal, Madhya Pradesh, India",
//     "Mumbai, Maharashtra, India",
//     "Pune, Maharashtra, India",
//   ];

//   const handleEditPersonalClick = () => {
//     setIsEditingPersonal(!isEditingPersonal);
//   };

//   const handleChangePersonal = (e) => {
//     setDetails({
//       ...details,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSavePersonalClick = () => {
//     setIsEditingPersonal(false);
//     updateProfile(details);
//   };

//   const handleEditFieldClick = (field) => {
//     setIsEditingField(field);
//   };

//   const handleFieldChange = (e) => {
//     const { name, value } = e.target;
//     setDetails({
//       ...details,
//       [name]: value,
//     });
//   };

//   const handleSaveFieldClick = () => {
//     setIsEditingField(null);
//     updateProfile(details);
//   };

//   const [pdfFile, setPdfFile] = useState(null);
//   const handlePDFUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setPdfFile(file);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   const Getstudentprofile = async () => {
//     try {
//       const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       setDetails(Getjobdata?.data?.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     Getstudentprofile();
//   }, []);

//   const handleEditClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setIsEditingPersonal(false);
//   };
  
//   const handlejobTitlesChange = (event, newValue) => {
//     setDetails({ ...details, jobTitles: newValue });
//   };

//   const handlelocationsChange = (event, newValue) => {
//     setDetails({ ...details, locations: newValue });
//   };

//   if (loading && details === null) return <>Loading</>;

//   return (
//     <div>
        
//         <h2 className="text-xl font-semibold mb-4 -ml-2">About</h2>
//         <div className="bg-white p-2 -ml-1 rounded flex flex-col ">
//           <p className=" -mb-2">Your resume</p>
//           <div className="flex felx-row justify-between items-center">
//             <div className="flex flex-row gap-2">
//               <p>Resume1.pdf</p>
//               <a href="#" className="text-blue-500 hover:underline duration-500">
//                 view
//               </a>
//             </div>
//             <div>
//               <div className="flex flex-col ">
//                 <div className="w-80 p-4 bg-white ">
//                   <input
//                     type="file"
//                     id="upload"
//                     accept="application/pdf"
//                     onChange={handlePDFUpload}
//                     className="hidden"
//                   />
//                   <label
//                     htmlFor="upload"
//                     className="cursor-pointer inline-block px-4 py-2 text-orange-400 font-medium text-sm underline text-center"
//                   >
//                     {pdfFile ? "PDF Uploaded: " + pdfFile.Name : "Upload again"}
//                   </label>
//                   {pdfFile && (
//                     <div className="mt-4 text-center">
//                       <p className="text-gray-600">
//                         Uploaded File: {pdfFile.Name}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> 


//         <div className="bg-white -ml-[3%] rounded-lg p-6 max-w-4xl mx-auto mt-6">
//           <div className="flex justify-between items-center mb-4 mt-2">
//             <h2 className="text-xl font-semibold">Your personal details?</h2>
//             <button
//               className="text-blue-600 hover:text-blue-800 focus:outline-none"
//               onClick={handleEditClick}
//             >
//               <RiEditLine size={20} />
//             </button>
//           </div>

//           <div className="space-y-4 mt-6">
//             <div className="flex flex-row justify-between">
//               <div className="flex flex-col ml-2 items-start justify-center">
//                 <label className="text-sm font-medium">Name</label>
//                 <p className="text-stone-600">{details?.Name}</p>
//               </div>

//               <div className="flex flex-col ml-2 items-start justify-center">
//                 <label className="text-sm font-medium">Email</label>
//                 <p className="text-stone-600">{details?.Email}</p>
//               </div>
//             </div>

//             <div className="pt-7 ml-2">
//               <label className="text-sm font-medium">Your profile summary</label>
//               <p className="text-stone-600 border-2 p-4 rounded-md mt-2 border-gray-400">
//                 {details?.summary}
//               </p>
//             </div>

//             <div className="flex flex-row ml-2 justify-between pt-5">
//               <div className="flex flex-col gap-4">
//                 <div className="flex flex-col justify-start">
//                   <label className="text-sm font-medium">Your DOB</label>
//                   <p className="text-stone-600 text-[14px]">{details?.dob}</p>
//                 </div>

//                 <div className="flex flex-col justify-between">
//                   <label className="text-sm font-medium">Number</label>
//                   <p className="text-stone-600">{details?.Number}</p>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex flex-col justify-between">
//                   <label className="text-sm font-medium">Your gender</label>
//                   <p className="text-stone-600">{details?.gender}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Modal
//             open={isModalOpen}
//             onClose={handleCloseModal}
//             aria-labelledby="modal-title"
//             aria-describedby="modal-description"
//             className=" ml-[40%] mt-4"
//           >
//             <Box sx={{ width: 400, p: 4, bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 24 }}>
//               <Typography id="modal-title" variant="h6" component="h2">
//                 Edit Personal Details
//               </Typography>
//               <div className="mt-4 space-y-4">
//                 <div className="flex flex-col">
//                   <label className="text-sm font-medium">Name</label>
//                   <input
//                     type="text"
//                     name="Name"
//                     value={details?.Name}
//                     onChange={handleChangePersonal}
//                     className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label className="text-sm font-medium">Email</label>
//                   <input
//                     type="email"
//                     name="Email"
//                     value={details?.Email}
//                     onChange={handleChangePersonal}
//                     className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label className="text-sm font-medium">Profile Summary</label>
//                   <textarea
//                     name="summary"
//                     value={details?.summary}
//                     onChange={handleChangePersonal}
//                     className="border border-gray-300 rounded-lg p-2 w-full mt-2 overflow-x-visible"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label className="text-sm font-medium">Your DOB</label>
//                   <input
//                     type="text"
//                     name="dob"
//                     value={details?.dob}
//                     onChange={handleChangePersonal}
//                     placeholder="dd-mm-yyyy"
//                     className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label className="text-sm font-medium">Number</label>
//                   <input
//                     type="text"
//                     name="Number"
//                     value={details?.Number}
//                     onChange={handleChangePersonal}
//                     className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label className="text-sm font-medium">Your Gender</label>
//                   <div className="flex flex-row gap-3">
//                     {["Male", "Female", "Other"].map((gender) => (
//                       <label key={gender} className="inline-flex items-center">
//                         <input
//                           type="radio"
//                           name="gender"
//                           value={gender}
//                           checked={details?.gender === gender}
//                           onChange={handleChangePersonal}
//                           className="form-radio"
//                         />
//                         <span className="ml-2">{gender}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 className="mt-6"
//                 // onClick={handleSavePersonalClick}
//                 onClick={()=> {setIsModalOpen(false);  setIsEditingPersonal(false); updateProfile(details); } }
//               >
//                 Save
//               </Button>
//             </Box>
//           </Modal>
//         </div>

//         <div className="p-4 space-y-4 mt-8">
//             <p className="text-lg -ml-9 font-semibold">
//               Your professional details?
//             </p>
//             <div className="flex justify-between items-center -ml-3 ">
//               <div className="flex flex-col">
//                 <p className="text-sm font-medium">locations</p>
//                 {isEditingField === "locations" ? (
//                   <div className="w-[50vw] ">
//                     <Autocomplete
//                       multiple
//                       fullWidth
//                       options={locations}
//                       value={details.locations}
//                       onChange={handlelocationsChange}
//                       renderInput={(params) => <TextField {...params} />}
//                     />
//                   </div>
//                 ) : (
//                   <div>
//                     <p>{details.locations}</p>
//                   </div>
//                 )}
//               </div>

//               {!isEditingField && (
//                 <button
//                   onClick={() => handleEditFieldClick("locations")}
//                   className="ml-2 text-gray-500 hover:text-gray-700"
//                 >
//                   <RiEditLine size={20} color="blue" />
//                 </button>
//               )}
//               {isEditingField === "locations" && (
//                 <button
//                   onClick={handleSaveFieldClick}
//                   className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//                 >
//                   Save
//                 </button>
//               )}
//             </div>

//             <div className="flex justify-between items-center -ml-3">
//               <div className="flex flex-col">
//                 <p className="text-sm font-medium">Job Title</p>
//                 {isEditingField === "jobTitles" ? (
//                   <Autocomplete
//                     multiple
//                     options={jobTitles}
//                     value={details.jobTitles}
//                     onChange={handlejobTitlesChange}
//                     renderInput={(params) => <TextField {...params} />}
//                   />
//                 ) : (
//                   <span>{details.jobTitles}</span>
//                 )}
//               </div>

//               {!isEditingField && (
//                 <button
//                   onClick={() => handleEditFieldClick("jobTitles")}
//                   className="ml-2 text-gray-500 hover:text-gray-700"
//                 >
//                   <RiEditLine size={20} color="blue" />
//                 </button>
//               )}
//               {isEditingField === "jobTitles" && (
//                 <button
//                   onClick={handleSaveFieldClick}
//                   className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//                 >
//                   Save
//                 </button>
//               )}
//             </div>

//             <div className="flex justify-between items-center -ml-3">
//               <div className="flex flex-col">
//                 <p className="text-sm font-medium">Work Experience</p>
//                 {isEditingField === "Experience" ? (
//                   <select
//                     Name="Experience"
//                     value={details.Experience}
//                     onChange={handleFieldChange}
//                     className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
//                   >
//                     <option value="1-2">1-2 Years</option>
//                     <option value="3-5">3-5 Years</option>
//                     <option value="5-7">5-7 Years</option>
//                     <option value="7+">7+ Years</option>
//                   </select>
//                 ) : (
//                   <span>{details.Experience} Years</span>
//                 )}
//               </div>

//               {!isEditingField && (
//                 <button
//                   onClick={() => handleEditFieldClick("Experience")}
//                   className="ml-2 text-gray-500 hover:text-gray-700"
//                 >
//                   <RiEditLine size={20} color="blue" />
//                 </button>
//               )}
//               {isEditingField === "Experience" && (
//                 <button
//                   onClick={handleSaveFieldClick}
//                   className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//                 >
//                   Save
//                 </button>
//               )}
//             </div>

//             <div className="flex justify-between items-center -ml-3">
//               <div className="flex flex-col">
//                 <p className="text-sm font-medium">Annual Compensation</p>
//                 {isEditingField === "Current_Salary" ? (
//                   <select
//                     Name="Current_Salary"
//                     value={details.Current_Salary}
//                     onChange={handleFieldChange}
//                     className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
//                   >
//                     <option value="1.2-3">1.2-3 LPA</option>
//                     <option value="3-5">3-5 LPA</option>
//                     <option value="5-7">5-7 LPA</option>
//                     <option value="7-10">7-10 LPA</option>
//                   </select>
//                 ) : (
//                   <span>{details.Current_Salary} LPA</span>
//                 )}
//               </div>

//               {!isEditingField && (
//                 <button
//                   onClick={() => handleEditFieldClick("Current_Salary")}
//                   className="ml-2 text-gray-500 hover:text-gray-700"
//                 >
//                   <RiEditLine size={20} color="blue" />
//                 </button>
//               )}
//               {isEditingField === "Current_Salary" && (
//                 <button
//                   onClick={handleSaveFieldClick}
//                   className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//                 >
//                   Save
//                 </button>
//               )}
//             </div>
//         </div>

//     </div>
//   );
// };

// export default PersonalDetails;




















// import React, { useEffect, useState } from "react";
// import { RiEditLine } from "react-icons/ri";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import { GetApi, PutApi } from "../utilis/Api_Calling";

// const PersonalDetails = ({ profile, updateProfile, loading }) => {

//   const [isEditingPersonal, setIsEditingPersonal] = useState(false);
//   const [isEditingField, setIsEditingField] = useState(null);
//   const [Loading, setLoading] = useState(false);
//   const [details, setDetails] = useState({});
//   const Getstudentprofile = async () => {
//     try {
//       const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       setDetails(Getjobdata?.data?.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     Getstudentprofile();
//   }, []);

//   const jobTitles = [
//     "Recruiter",
//     "HR Manager",
//     "Software Engineer",
//     "Data Analyst",
//   ];
//   const locations = [
//     "Indore, Madhya Pradesh, India",
//     "Bhopal, Madhya Pradesh, India",
//     "Mumbai, Maharashtra, India",
//     "Pune, Maharashtra, India",
//   ];

//   const handleEditPersonalClick = () => {
//     setIsEditingPersonal(!isEditingPersonal);
//   };

//   const handleChangePersonal = (e) => {
//     setDetails({
//       ...details,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSavePersonalClick = () => {
//     setIsEditingPersonal(false);
//     updateProfile(details);
//   };

//   const handleEditFieldClick = (field) => {
//     setIsEditingField(field);
//   };

//   const handleFieldChange = (e) => {
//     const { name, value } = e.target;
//     setDetails({
//       ...details,
//       [name]: value,
//     });
//   };

//   const handleSaveFieldClick = () => {
//     setIsEditingField(null);
//     updateProfile(details);
//   };

//   const [pdfFile, setPdfFile] = useState(null);
//   const handlePDFUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setPdfFile(file);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   const handlejobTitlesChange = (event, newValue) => {
//     setDetails({ ...details, jobTitles: newValue });
//   };

//   const handlelocationsChange = (event, newValue) => {
//     setDetails({ ...details, locations: newValue });
//   };

//   if (loading && details === null) return <>Loading</>;

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-6 -ml-0">

//       <div className="flex justify-between items-center mb-4 mt-2">
//         <h2 className="text-xl -ml-4 font-semibold">Your personal details?</h2>
//         <button
//           className="text-blue-600 hover:text-blue-800 focus:outline-none"
//           onClick={handleEditPersonalClick}
//         >
//           <RiEditLine size={20} />
//         </button>
//       </div>


//       <div className="space-y-4 mt-6">
//         <div className="flex flex-row justify-between">
//           <div className="flex flex-col items-start justify-center">
//             <label className="text-sm font-medium">Name</label>
//             {isEditingPersonal ? (
//               <input
//                 type="text"
//                 Name="Name"
//                 value={details?.Name}
//                 onChange={handleChangePersonal}
//                 // className="border border-gray-300 rounded-lg p-2 w-full ml-4"
//                 className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
//               />
//             ) : (
//               <p className="text-stone-600 from-neutral-500">{details?.Name}</p>
//             )}
//           </div>

//           <div className="flex flex-col items-start justify-center">
//             <label className="text-sm font-medium">Email</label>
//             {isEditingPersonal ? (
//               <input
//                 type="Email"
//                 Name="Email"
//                 value={details?.Email}
//                 onChange={handleChangePersonal}
//                 className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
//                 // className="border border-gray-300 rounded-lg p-2 w-full ml-4"
//               />
//             ) : (
//               <p className="text-stone-600 from-neutral-500">
//                 {details?.Email}
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="pt-7">
//           <label className="text-sm font-medium">Your profile summary</label>
//           {isEditingPersonal ? (
//             <textarea
//               Name="summary"
//               value={details?.summary}
//               onChange={handleChangePersonal}
//               className="border border-gray-300 rounded-lg p-2 w-full mt-2"
//             />
//           ) : (
//             <p className="text-stone-600 border-2 p-4 rounded-md mt-2 border-gray-400 from-neutral-500">
//               {details?.summary}
//             </p>
//           )}
//         </div>

//         <div className="flex flex-row justify-between pt-5">
//           <div className="flex flex-col gap-4">
//             <div className="flex flex-col justify-start">
//               <label className="text-sm font-medium">Your DOB</label>
//               {isEditingPersonal ? (
//                 <input
//                   type="text"
//                   Name="dob"
//                   placeholder="dd-mm-yyyy"
//                   value={details?.dob}
//                   onChange={handleChangePersonal}
//                   className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
//                   // className="border border-gray-300 rounded-lg p-2 w-full"
//                 />
//               ) : (
//                 <p className="text-stone-600 text-[14px] from-neutral-500">
//                   {details?.dob}
//                 </p>
//               )}
//             </div>

//             <div className="flex flex-col justify-between">
//               <label className="text-sm font-medium">Number number</label>
//               {isEditingPersonal ? (
//                 <input
//                   type="text"
//                   Name="Number"
//                   value={details?.Number}
//                   onChange={handleChangePersonal}
//                   className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
//                   // className="border border-gray-300 rounded-lg p-2 w-full"
//                 />
//               ) : (
//                 <p className="text-stone-600 from-neutral-500">
//                   {details?.Number}
//                 </p>
//               )}
//             </div>
//           </div>
//           <div>
//             <div className="flex flex-col justify-between">
//               <label className="text-sm font-medium">Your gender</label>
//               {isEditingPersonal ? (
//                 <div className=" flex flex-row justify-between gap-3">
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       Name="gender"
//                       value="Male"
//                       checked={details?.gender === "Male"}
//                       onChange={handleChangePersonal}
//                       className="form-radio"
//                     />
//                     <span className="">Male</span>
//                   </label>
//                   <label className="inline-flex items-center ">
//                     <input
//                       type="radio"
//                       Name="gender"
//                       value="Female"
//                       checked={details?.gender === "Female"}
//                       onChange={handleChangePersonal}
//                       className="form-radio"
//                     />
//                     <span className="ml-2">Female</span>
//                   </label>
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       Name="gender"
//                       value="Other"
//                       checked={details?.gender === "Other"}
//                       onChange={handleChangePersonal}
//                       className="form-radio"
//                     />
//                     <span className="ml-2">Other</span>
//                   </label>
//                 </div>
//               ) : (
//                 <p className="text-stone-600 from-neutral-500">
//                   {details?.gender}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isEditingPersonal && (
//         <button
//           className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
//           onClick={handleSavePersonalClick}
//         >
//           Save
//         </button>
//       )}

//     </div>
//   );
// };

// export default PersonalDetails;


{/* <h2 className="text-xl font-semibold mb-4 -ml-4">About</h2>
<div className="bg-white p-2 -ml-1 rounded flex flex-col ">
  <p className=" -mb-2">Your resume</p>
  <div className="flex felx-row justify-between items-center">
    <div className="flex flex-row gap-2">
      <p>Resume1.pdf</p>
      <a href="#" className="text-blue-500 hover:underline duration-500">
        view
      </a>
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
            {pdfFile ? "PDF Uploaded: " + pdfFile.Name : "Upload again"}
          </label>
          {pdfFile && (
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Uploaded File: {pdfFile.Name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div> */}






{/* <div className="p-4 space-y-4 mt-8">
<p className="text-lg -ml-9 font-semibold">
  Your professional details?
</p>
<div className="flex justify-between items-center -ml-3 ">
  <div className="flex flex-col">
    <p className="text-sm font-medium">locations</p>
    {isEditingField === "locations" ? (
      <div className="w-[50vw] ">
        <Autocomplete
          multiple
          fullWidth
          options={locations}
          value={details.locations}
          onChange={handlelocationsChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    ) : (
      <div>
        <p>{details.locations}</p>
      </div>
    )}
  </div>

  {!isEditingField && (
    <button
      onClick={() => handleEditFieldClick("locations")}
      className="ml-2 text-gray-500 hover:text-gray-700"
    >
      <RiEditLine size={20} color="blue" />
    </button>
  )}
  {isEditingField === "locations" && (
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
    {isEditingField === "jobTitles" ? (
      <Autocomplete
        multiple
        options={jobTitles}
        value={details.jobTitles}
        onChange={handlejobTitlesChange}
        renderInput={(params) => <TextField {...params} />}
      />
    ) : (
      <span>{details.jobTitles}</span>
    )}
  </div>

  {!isEditingField && (
    <button
      onClick={() => handleEditFieldClick("jobTitles")}
      className="ml-2 text-gray-500 hover:text-gray-700"
    >
      <RiEditLine size={20} color="blue" />
    </button>
  )}
  {isEditingField === "jobTitles" && (
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
    {isEditingField === "Experience" ? (
      <select
        Name="Experience"
        value={details.Experience}
        onChange={handleFieldChange}
        className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
      >
        <option value="1-2">1-2 Years</option>
        <option value="3-5">3-5 Years</option>
        <option value="5-7">5-7 Years</option>
        <option value="7+">7+ Years</option>
      </select>
    ) : (
      <span>{details.Experience} Years</span>
    )}
  </div>

  {!isEditingField && (
    <button
      onClick={() => handleEditFieldClick("Experience")}
      className="ml-2 text-gray-500 hover:text-gray-700"
    >
      <RiEditLine size={20} color="blue" />
    </button>
  )}
  {isEditingField === "Experience" && (
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
    {isEditingField === "Current_Salary" ? (
      <select
        Name="Current_Salary"
        value={details.Current_Salary}
        onChange={handleFieldChange}
        className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
      >
        <option value="1.2-3">1.2-3 LPA</option>
        <option value="3-5">3-5 LPA</option>
        <option value="5-7">5-7 LPA</option>
        <option value="7-10">7-10 LPA</option>
      </select>
    ) : (
      <span>{details.Current_Salary} LPA</span>
    )}
  </div>

  {!isEditingField && (
    <button
      onClick={() => handleEditFieldClick("Current_Salary")}
      className="ml-2 text-gray-500 hover:text-gray-700"
    >
      <RiEditLine size={20} color="blue" />
    </button>
  )}
  {isEditingField === "Current_Salary" && (
    <button
      onClick={handleSaveFieldClick}
      className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Save
    </button>
  )}
</div>
</div> */}
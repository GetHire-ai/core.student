import React, { useEffect, useState } from "react";
import { FaTimes,FaPencilAlt } from "react-icons/fa";
import { GetApi } from "../utilis/Api_Calling";

const companies = ["Company A", "Company B", "Company C"];
const Profiles = ["Developer", "Designer", "Manager"];
const workTypes = ["Remote", "On-site", "Hybrid"];
const Locations = ["New York", "San Francisco", "Chicago"];
const statusOptions = ["Completed", "Ongoing"];

function Experience({ updateProfile }) {
  const [experiences, setExperiences] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    Organization: "",
    Profile: "",
    Start_date: "",
    End_date: "",
    Type: "full-time",
    workType: "",
    Description: "",
    Location: "",
    Status: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({ Skill_Set: [] });

  const Getstudentprofile = async () => {
    try {
      const response = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setDetails(response?.data?.data || {});
      setExperiences(response?.data?.data.JobDetails);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const handleAddExperience = () => {
    setFormData({
      Organization: "",
      Profile: "",
      Start_date: "",
      End_date: "",
      Type: "full-time",
      workType: "",
      Description: "",
      Location: "",
      Status: "",
    });
    setEditingIndex(null);
    setShowForm(true);
  };

  const handleEditExperience = (index) => {
    setFormData(experiences[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDeleteExperience = (index) => {
    const updatedExperiences = experiences.filter(
      (experience, expIndex) => expIndex !== index
    );
    setExperiences(updatedExperiences);
    updateProfile({ JobDetails: updatedExperiences });
  };

  const handleSaveExperience = () => {
    if (editingIndex !== null) {
      const updatedExperiences = [...experiences];
      updatedExperiences[editingIndex] = formData;
      setExperiences(updatedExperiences);
      updateProfile({ JobDetails: updatedExperiences });
    } else {
      setExperiences([...experiences, formData]);
      updateProfile({ JobDetails: [...experiences, formData] });
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
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Experience</h2>

      <button
        className="px-4 py-2 text-sm text-blue-500 hover:text-blue-700 rounded-md mb-4"
        onClick={handleAddExperience}
      >
        Add your Experience +
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg h-96 overflow-y-auto relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handleCancelForm}
            >
              <FaTimes size={20} />
            </button>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              {editingIndex !== null ? "Edit Experience" : "Add Experience"}
            </h4>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="Organization"
                    value={formData.Organization}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full p-2 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="Profile"
                    value={formData.Profile}
                    onChange={handleInputChange}
                    placeholder="Job Title"
                    className="w-full p-2 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="Start_date"
                    value={formData.Start_date}
                    onChange={handleInputChange}
                    className="w-full p-2 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="End_date"
                    value={formData.End_date}
                    onChange={handleInputChange}
                    className="w-full p-2 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <fieldset className="flex items-center gap-4">
                  <legend className="block text-sm font-medium text-gray-600">
                    Job Type
                  </legend>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="Type"
                      value="full-time"
                      checked={formData.Type === "full-time"}
                      onChange={handleInputChange}
                      className="form-radio"
                    />
                    <span className="text-gray-600">Full-Time</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="Type"
                      value="part-time"
                      checked={formData.Type === "part-time"}
                      onChange={handleInputChange}
                      className="form-radio"
                    />
                    <span className="text-gray-600">Part-Time</span>
                  </label>
                </fieldset>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Work Type
                  </label>
                  <select
                    name="workType"
                    value={formData.workType}
                    onChange={handleInputChange}
                    className="w-full p-2 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  >
                    <option value="" disabled>
                      Select Work Type
                    </option>
                    {workTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="Location"
                    value={formData.Location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    className="w-full p-2 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Status
                  </label>
                  <select
                    name="Status"
                    value={formData.Status}
                    onChange={handleInputChange}
                    className="w-full p-2 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  >
                    <option value="" disabled>
                      Select Status
                    </option>
                    {statusOptions.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Description
                </label>
                <textarea
                  name="Description"
                  value={formData.Description}
                  onChange={handleInputChange}
                  placeholder="Describe your role..."
                  className="w-full p-2 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCancelForm}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveExperience}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  {editingIndex !== null ? "Save Changes" : "Add Experience"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {experiences && experiences.length > 0 && (
        <ul className="space-y-4 ">
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="p-4 bg-white shadow-sm rounded-md flex justify-between items-center"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      alt={experience.Organization}
                      className="mr-4 w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h4 className="text-[18px] text-[#333333] font-serif">
                        {experience.Profile}
                      </h4>
                      <p className=" font-serif text-[#555555] text-[15px] ">
                        {experience.Organization} · {experience.Type}
                      </p>
                      <p className=" font-light text-[13px] text-[#555555]">
                        {experience.Start_date} to {experience.End_date} ·{" "}
                        {experience.Status}
                      </p>
                      <p className="text-[#666666] font-serif text-[15px]">
                        {experience.Location} · {experience.workType}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEditExperience(index)}
                      className="p-2 text-blue-500 hover:text-blue-700"
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      onClick={() => handleDeleteExperience(index)}
                      className="p-2 text-red-500 hover:text-red-700"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
                <p className="mt-2 ml-16 text-black font-normal">{experience.Description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Experience;







// import React, { useEffect, useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { GetApi } from "../utilis/Api_Calling";

// const companies = ["Company A", "Company B", "Company C"];
// const Profiles = ["Developer", "Designer", "Manager"];
// const workTypes = ["Remote", "On-site", "Hybrid"];
// const Locations = ["New York", "San Francisco", "Chicago"];
// const statusOptions = ["Completed", "Ongoing"];

// function Experience({ updateProfile }) {
//   const [experiences, setExperiences] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     Organization: "",
//     Profile: "",
//     Start_date: "",
//     End_date: "",
//     Type: "full-time",
//     workType: "",
//     Description: "",
//     Location: "",
//     Status: "",
//   });
//   const [showForm, setShowForm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [details, setDetails] = useState({ Skill_Set: [] });

//   const Getstudentprofile = async () => {
//     try {
//       const response = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       setDetails(response?.data?.data || {});
//       setExperiences(response?.data?.data.JobDetails);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     Getstudentprofile();
//   }, []);

//   const handleAddExperience = () => {
//     setFormData({
//       Organization: "",
//       Profile: "",
//       Start_date: "",
//       End_date: "",
//       Type: "full-time",
//       workType: "",
//       Description: "",
//       Location: "",
//       Status: "",
//     });
//     setEditingIndex(null);
//     setShowForm(true);
//   };

//   const handleEditExperience = (index) => {
//     setFormData(experiences[index]);
//     setEditingIndex(index);
//     setShowForm(true);
//   };

//   const handleDeleteExperience = (index) => {
//     const updatedExperiences = experiences.filter(
//       (experience, expIndex) => expIndex !== index
//     );
//     setExperiences(updatedExperiences);
//     updateProfile({ JobDetails: updatedExperiences });
//   };

//   const handleSaveExperience = () => {
//     if (editingIndex !== null) {
//       const updatedExperiences = [...experiences];
//       updatedExperiences[editingIndex] = formData;
//       setExperiences(updatedExperiences);
//       updateProfile({ JobDetails: updatedExperiences });
//     } else {
//       setExperiences([...experiences, formData]);
//       updateProfile({ JobDetails: [...experiences, formData] });
//     }
//     setShowForm(false);
//   };

//   const handleCancelForm = () => {
//     setShowForm(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="container mx-auto p-4 shadow-md h-screen">
//       <h2 className="text-xl font-semibold mb-4">Experience</h2>

//       <button
//         className="px-4 py-2 text-sm  text-blue-500 hover:text-blue-700 rounded-md mb-4"
//         onClick={handleAddExperience}
//       >
//         Add your Experience +
//       </button>

//       {showForm && (
//         <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
//           <h4 className="text-xl font-semibold text-gray-700 mb-4">
//             {editingIndex !== null ? "Edit Experience" : "Add Experience"}
//           </h4>
//           <form className="space-y-6">
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   name="Organization"
//                   value={formData.Organization}
//                   onChange={handleInputChange}
//                   placeholder="Company Name"
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Job Title
//                 </label>
//                 <input
//                   type="text"
//                   name="Profile"
//                   value={formData.Profile}
//                   onChange={handleInputChange}
//                   placeholder="Job Title"
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="Start_date"
//                   value={formData.Start_date}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   name="End_date"
//                   value={formData.End_date}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 />
//               </div>
//             </div>
//             <div className="flex items-center gap-4 mb-4">
//               <fieldset className="flex items-center gap-4">
//                 <legend className="block text-sm font-medium text-gray-600">
//                   Job Type
//                 </legend>
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="Type"
//                     value="full-time"
//                     checked={formData.Type === "full-time"}
//                     onChange={handleInputChange}
//                     className="form-radio"
//                   />
//                   <span className="text-gray-600">Full-Time</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="Type"
//                     value="part-time"
//                     checked={formData.Type === "part-time"}
//                     onChange={handleInputChange}
//                     className="form-radio"
//                   />
//                   <span className="text-gray-600">Part-Time</span>
//                 </label>
//               </fieldset>
//             </div>
//             <div className="flex gap-4">
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Work Type
//                 </label>
//                 <select
//                   name="workType"
//                   value={formData.workType}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 >
//                   <option value="" disabled>
//                     Select Work Type
//                   </option>
//                   {workTypes.map((type, index) => (
//                     <option key={index} value={type}>
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   name="Location"
//                   value={formData.Location}
//                   onChange={handleInputChange}
//                   placeholder="Location"
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 />
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Status
//                 </label>
//                 <select
//                   name="Status"
//                   value={formData.Status}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 >
//                   <option value="" disabled>
//                     Select Status
//                   </option>
//                   {statusOptions.map((status, index) => (
//                     <option key={index} value={status}>
//                       {status}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Description
//               </label>
//               <textarea
//                 name="Description"
//                 value={formData.Description}
//                 onChange={handleInputChange}
//                 rows="4"
//                 placeholder="Description"
//                 className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//               ></textarea>
//             </div>
//             <div className="flex justify-end gap-4">
//               <button
//                 type="button"
//                 className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md"
//                 onClick={handleSaveExperience}
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
//                 onClick={handleCancelForm}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       <ul className="space-y-4">
//         {/* {experiences.map((experience, index) => (
//           <li key={index} className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h4 className="text-lg font-semibold text-gray-700">
//                   {experience.Organization}
//                 </h4>
//                 <p className="text-gray-600">{experience.Profile}</p>
//                 <p className="text-gray-500">
//                   {experience.Start_date} - {experience.End_date}
//                 </p>
//                 <p className="text-gray-600">{experience.Location}</p>
//                 <p className="text-gray-600">Status: {experience.Status}</p>
//                 <p className="text-gray-600">{experience.Description}</p>
//               </div>
//               <div className="flex flex-col items-end">
//                 <button
//                   className="text-blue-500 hover:text-blue-700 mb-2"
//                   onClick={() => handleEditExperience(index)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="text-red-500 hover:text-red-700"
//                   onClick={() => handleDeleteExperience(index)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))} */}
//         {experiences.map((experience, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 border border-gray-300 rounded-lg shadow-md mb-4"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <p className=" flex flex-row text-lg font-bold text-gray-600 items-center">
//                   {experience.Organization}, {experience.Location}
//                   <p className="text-sm font-semibold text-gray-600 ml-2">({experience.Status})</p>
//                 </p>
//                 <div className=" flex flex-row gap-3">
//                     <button
//                       className="text-blue-500 hover:underline"
//                       onClick={() => handleEditExperience(index)}
//                       >
//                       Edit
//                     </button>
//                     <button
//                       className="text-red-500 hover:text-red-700"
//                       onClick={() => handleDeleteExperience(index)}
//                       >
//                       Delete
//                     </button>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-1 text-sm">
//                 {experience.Profile} | {experience.Start_date} To{" "}
//                 {experience.End_date}
//               </p>
//               <hr className="border-gray-300 my-2" />
//               <p className="text-gray-600 text-sm">{experience.Description}</p>
//             </div>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default Experience;









// import React, { useEffect, useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { GetApi } from "../utilis/Api_Calling";

// const companies = ["Company A", "Company B", "Company C"];
// const Profiles = ["Developer", "Designer", "Manager"];
// const workTypes = ["Remote", "On-site", "Hybrid"];
// const Locations = ["New York", "San Francisco", "Chicago"];

// function Experience({ updateProfile }) {
//   const [experiences, setExperiences] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     Organization: "",
//     Profile: "",
//     Start_date: "",
//     End_date: "",
//     Type: "full-time",
//     workType: "",
//     Description: "",
//     Location: "",
//     Designation: "",
//     WorkFromHome: "",
//     NoticePeriod: "",
//     Currentlyworking: "",
//   });
//   const [showForm, setShowForm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [details, setDetails] = useState({ Skill_Set: [] });
//   const Getstudentprofile = async () => {
//     try {
//       const response = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       setDetails(response?.data?.data || {});
//       setExperiences(response?.data?.data.JobDetails);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     Getstudentprofile();
//   }, []);

//   const handleAddExperience = () => {
//     setFormData({
//       Organization: "",
//       Profile: "",
//       Start_date: "",
//       End_date: "",
//       Type: "full-time",
//       workType: "",
//       Description: "",
//       Location: "",
//     });
//     setEditingIndex(null);
//     setShowForm(true);
//   };

//   const handleEditExperience = (index) => {
//     setFormData(experiences[index]);
//     setEditingIndex(index);
//     setShowForm(true);
//   };

//   const handleSaveExperience = () => {
//     if (editingIndex !== null) {
//       const updatedExperiences = [...experiences];
//       updatedExperiences[editingIndex] = formData;
//       setExperiences(updatedExperiences);
//       updateProfile({ JobDetails: updatedExperiences });
//     } else {
//       setExperiences([...experiences, formData]);
//     }
//     setShowForm(false);
//   };

//   const handleCancelForm = () => {
//     setShowForm(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="container mx-auto p-4 shadow-md h-screen">
//       <h2 className="text-xl font-semibold mb-4">Experience</h2>

//       <button
//         className="px-4 py-2 text-sm  text-blue-500 hover:text-blue-700 rounded-md mb-4"
//         onClick={handleAddExperience}
//       >
//         Add your Experience +
//       </button>

//       {showForm && (
//         <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
//           <h4 className="text-xl font-semibold text-gray-700 mb-4">
//             {editingIndex !== null ? "Edit Experience" : "Add Experience"}
//           </h4>
//           <form className="space-y-6">
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   name="Organization"
//                   value={formData.Organization}
//                   onChange={handleInputChange}
//                   placeholder="Company Name"
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Job Title
//                 </label>
//                 <input
//                   type="text"
//                   name="Profile"
//                   value={formData.Profile}
//                   onChange={handleInputChange}
//                   placeholder="Job Title"
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="Start_date"
//                   value={formData.Start_date}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   name="End_date"
//                   value={formData.End_date}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 />
//               </div>
//             </div>
//             <div className="flex items-center gap-4 mb-4">
//               <fieldset className="flex items-center gap-4">
//                 <legend className="block text-sm font-medium text-gray-600">
//                   Job Type
//                 </legend>
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="Type"
//                     value="full-time"
//                     checked={formData.Type === "full-time"}
//                     onChange={handleInputChange}
//                     className="form-radio"
//                   />
//                   <span className="text-gray-600">Full-Time</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="Type"
//                     value="part-time"
//                     checked={formData.Type === "part-time"}
//                     onChange={handleInputChange}
//                     className="form-radio"
//                   />
//                   <span className="text-gray-600">Part-Time</span>
//                 </label>
//               </fieldset>
//             </div>
//             <div className="flex gap-4">
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Work Type
//                 </label>
//                 <select
//                   name="workType"
//                   value={formData.workType}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 >
//                   <option value="" disabled>
//                     Select Work Type
//                   </option>
//                   {workTypes.map((type, index) => (
//                     <option key={index} value={type}>
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   name="Location"
//                   value={formData.Location}
//                   onChange={handleInputChange}
//                   placeholder="Location"
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Description
//               </label>
//               <textarea
//                 name="Description"
//                 value={formData.Description}
//                 onChange={handleInputChange}
//                 placeholder="Description"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors duration-300"
//                 rows="4"
//               />
//             </div>
//             <div className="flex justify-end gap-4">
//               <button
//                 type="button"
//                 className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
//                 onClick={handleSaveExperience}
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition flex items-center justify-center"
//                 onClick={handleCancelForm}
//               >
//                 <FaTimes className="text-xl" />
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

      // {experiences.map((experience, index) => (
      //   <div
      //     key={index}
      //     className="bg-white p-4 border border-gray-300 rounded-lg shadow-md mb-4"
      //   >
      //     <div className="flex justify-between items-center mb-2">
      //       <h4 className="text-lg font-bold text-gray-600">
      //         {experience.Organization}, {experience.Location}
      //       </h4>
      //       <button
      //         className="text-blue-500 hover:underline"
      //         onClick={() => handleEditExperience(index)}
      //       >
      //         Edit
      //       </button>
      //     </div>
      //     <p className="text-gray-700 mb-1 text-sm">
      //       {experience.Profile} | {experience.Start_date} To{" "}
      //       {experience.End_date}
      //     </p>
      //     <hr className="border-gray-300 my-2" />
      //     <p className="text-gray-600 text-sm">{experience.Description}</p>
      //   </div>
      // ))}
//     </div>
//   );
// }

// export default Experience;

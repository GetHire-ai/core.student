// import React, { useEffect, useState } from "react";
// import { FaPencilAlt, FaTimes } from "react-icons/fa";
// import { GetApi } from "../utilis/Api_Calling";

// const demoData = {
//   school: [
//     "Harvard University",
//     "Stanford University",
//     "MIT",
//     "Yale University",
//     "Princeton University",
//     "LNCT",
//   ],
//   degree: ["MBA", "B.Sc", "M.Sc", "Ph.D", "B.A"],
//   fieldOfStudy: [
//     "Computer Science",
//     "Business Administration",
//     "Electrical Engineering",
//     "Psychology",
//     "Biology",
//   ],
//   location: ["New York", "San Francisco", "Los Angeles", "Chicago", "Boston"],
// };

// function EducationForm({ updateProfile }) {
//   const [formVisible, setFormVisible] = useState(false);
//   const [educationList, setEducationList] = useState([]);
//   const [formData, setFormData] = useState({
//     school: "",
//     degree: "",
//     fieldOfStudy: "",
//     location: "",
//     startDate: "",
//     endDate: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [details, setDetails] = useState({ Skill_Set: [] });
//   const [editIndex, setEditIndex] = useState(null);
//   const [filteredData, setFilteredData] = useState(demoData);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const Getstudentprofile = async () => {
//     try {
//       const response = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       setDetails(response?.data?.data || {});
//       setEducationList(response?.data?.data.JobDetails);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     Getstudentprofile();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name in demoData) {
//       setFilteredData({
//         ...filteredData,
//         [name]: demoData[name].filter((item) =>
//           item.toLowerCase().includes(value.toLowerCase())
//         ),
//       });
//     }
//   };

//   const handleSelect = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editIndex !== null) {
//       const updatedEducationList = [...educationList];
//       updatedEducationList[editIndex] = formData;
//       setEducationList(updatedEducationList);
//       setEditIndex(null);
//     } else {
//       setEducationList([...educationList, formData]);
//     }

//     setFormData({
//       school: "",
//       degree: "",
//       fieldOfStudy: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//     });
//     setIsModalOpen(false);
//   };

//   const handleEdit = (index) => {
//     setFormData(educationList[index]);
//     setEditIndex(index);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="p-4 mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Education</h2>
//       <div className="mb-6">
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="text-blue-600 flex items-center text-[14px] hover:bg-blue-200 px-4 py-2 rounded-lg"
//         >
//           Add your education +
//         </button>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
//             >
//               <FaTimes size={24} />
//             </button>
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="relative">
//                   <label className="block text-sm text-gray-700 font-semibold">
//                     School/University
//                   </label>
//                   <input
//                     type="text"
//                     name="school"
//                     value={formData.school}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                     required
//                     list="schools"
//                   />
//                   <datalist id="schools">
//                     {filteredData.school.map((school, index) => (
//                       <option key={index} value={school} />
//                     ))}
//                   </datalist>
//                 </div>
//                 <div className="relative">
//                   <label className="block text-sm text-gray-700 font-semibold">
//                     Degree/Certificate
//                   </label>
//                   <input
//                     type="text"
//                     name="degree"
//                     value={formData.degree}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                     required
//                     list="degrees"
//                   />
//                   <datalist id="degrees">
//                     {filteredData.degree.map((degree, index) => (
//                       <option key={index} value={degree} />
//                     ))}
//                   </datalist>
//                 </div>
//                 <div className="relative">
//                   <label className="block text-sm text-gray-700 font-semibold">
//                     Field of Study
//                   </label>
//                   <input
//                     type="text"
//                     name="fieldOfStudy"
//                     value={formData.fieldOfStudy}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                     required
//                     list="fieldsOfStudy"
//                   />
//                   <datalist id="fieldsOfStudy">
//                     {filteredData.fieldOfStudy.map((field, index) => (
//                       <option key={index} value={field} />
//                     ))}
//                   </datalist>
//                 </div>
//                 <div className="relative">
//                   <label className="block text-sm text-gray-700 font-semibold">
//                     Location
//                   </label>
//                   <input
//                     type="text"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                     required
//                     list="locations"
//                   />
//                   <datalist id="locations">
//                     {filteredData.location.map((location, index) => (
//                       <option key={index} value={location} />
//                     ))}
//                   </datalist>
//                 </div>
//                 <div className="relative">
//                   <label className="block text-sm text-gray-700 font-semibold">
//                     Start Date
//                   </label>
//                   <input
//                     type="date"
//                     name="startDate"
//                     value={formData.startDate}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                     required
//                   />
//                 </div>
//                 <div className="relative">
//                   <label className="block text-sm text-gray-700 font-semibold">
//                     End Date
//                   </label>
//                   <input
//                     type="date"
//                     name="endDate"
//                     value={formData.endDate}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="mt-6 flex justify-between">
//                 <button
//                   type="submit"
//                   className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
//                 >
//                   {editIndex !== null ? "Update" : "Save"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setIsModalOpen(false);
//                     setEditIndex(null);
//                     setFormData({
//                       school: "",
//                       degree: "",
//                       fieldOfStudy: "",
//                       location: "",
//                       startDate: "",
//                       endDate: "",
//                     });
//                   }}
//                   className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="space-y-4">
//         {educationList.map((education, index) => (
//           <div
//             key={index}
//             className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm"
//           >
//             <div>
//               <div className="flex flex-row gap-3 items-center">
//                 <div className="text-base font-semibold">
//                   {education.degree} ({education.fieldOfStudy})
//                 </div>
//                 <p className="w-[5px] h-[5px] bg-gray-800 rounded-full"></p>
//                 <div className="text-sm -ml-1 text-gray-600">
//                   {education.location}
//                 </div>
//               </div>
//               <div className="text-sm font-extralight text-gray-600">
//                 {education.school} | {education.startDate} to{" "}
//                 {education.endDate}
//               </div>
//             </div>
//             <button
//               onClick={() => handleEdit(index)}
//               className="text-blue-600 hover:text-blue-800"
//             >
//               <FaPencilAlt />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default EducationForm;







import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { GetApi } from "../utilis/Api_Calling";

const demoData = {
  school: [
    "Harvard University",
    "Stanford University",
    "MIT",
    "Yale University",
    "Princeton University",
    "LNCT",
  ],
  degree: ["MBA", "B.Sc", "M.Sc", "Ph.D", "B.A"],
  fieldOfStudy: [
    "Computer Science",
    "Business Administration",
    "Electrical Engineering",
    "Psychology",
    "Biology",
  ],
  location: ["New York", "San Francisco", "Los Angeles", "Chicago", "Boston"],
};

function EducationForm({ updateProfile }) {
  const [formVisible, setFormVisible] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    location: "",
    startDate: "",
    endDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({ Skill_Set: [] });
  const [editIndex, setEditIndex] = useState(null);
  const [filteredData, setFilteredData] = useState(demoData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Getstudentprofile = async () => {
    try {
      const response = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setDetails(response?.data?.data || {});
      setEducationList(response?.data?.data.JobDetails);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name in demoData) {
      setFilteredData({
        ...filteredData,
        [name]: demoData[name].filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        ),
      });
    }
  };

  const handleSelect = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedEducationList = [...educationList];
      updatedEducationList[editIndex] = formData;
      setEducationList(updatedEducationList);
      setEditIndex(null);
    } else {
      setEducationList([...educationList, formData]);
    }

    setFormData({
      school: "",
      degree: "",
      fieldOfStudy: "",
      location: "",
      startDate: "",
      endDate: "",
    });
    setIsModalOpen(false);
  };

  const handleEdit = (index) => {
    setFormData(educationList[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Education</h2>
      <div className="mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-blue-600 flex items-center text-[14px] hover:bg-blue-200 px-4 py-2 rounded-lg"
        >
          Add your education +
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
            >
              <FaTimes size={24} />
            </button>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm text-gray-700 font-semibold">
                    School/University
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    required
                    list="schools"
                  />
                  <datalist id="schools">
                    {filteredData.school.map((school, index) => (
                      <option key={index} value={school} />
                    ))}
                  </datalist>
                </div>
                <div className="relative">
                  <label className="block text-sm text-gray-700 font-semibold">
                    Degree/Certificate
                  </label>
                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleInputChange}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    required
                    list="degrees"
                  />
                  <datalist id="degrees">
                    {filteredData.degree.map((degree, index) => (
                      <option key={index} value={degree} />
                    ))}
                  </datalist>
                </div>
                <div className="relative">
                  <label className="block text-sm text-gray-700 font-semibold">
                    Field of Study
                  </label>
                  <input
                    type="text"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleInputChange}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    required
                    list="fieldsOfStudy"
                  />
                  <datalist id="fieldsOfStudy">
                    {filteredData.fieldOfStudy.map((field, index) => (
                      <option key={index} value={field} />
                    ))}
                  </datalist>
                </div>
                <div className="relative">
                  <label className="block text-sm text-gray-700 font-semibold">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    required
                    list="locations"
                  />
                  <datalist id="locations">
                    {filteredData.location.map((location, index) => (
                      <option key={index} value={location} />
                    ))}
                  </datalist>
                </div>
                <div className="relative">
                  <label className="block text-sm text-gray-700 font-semibold">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm text-gray-700 font-semibold">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    required
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
                >
                  {editIndex !== null ? "Update" : "Save"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditIndex(null);
                    setFormData({
                      school: "",
                      degree: "",
                      fieldOfStudy: "",
                      location: "",
                      startDate: "",
                      endDate: "",
                    });
                  }}
                  className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* <div className="space-y-4">
        {educationList.map((education, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm"
          >
            <div>
              <div className="flex flex-row gap-3 items-center">
                <div className="text-base font-semibold">
                  {education.degree} ({education.fieldOfStudy})
                </div>
                <p className="w-[5px] h-[5px] bg-gray-800 rounded-full"></p>
                <div className="text-sm -ml-1 text-gray-600">
                  {education.location}
                </div>
              </div>
              <div className="text-sm font-extralight text-gray-600">
                {education.school} | {education.startDate} to{" "}
                {education.endDate}
              </div>
            </div>
            <button
              onClick={() => handleEdit(index)}
              className="text-blue-600 hover:text-blue-800"
            >
              <FaPencilAlt />
            </button>
          </div>
        ))}
      </div> */}

<div className="space-y-4">
  {educationList.map((education, index) => (
    <div
      key={index}
      className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm"
    >
      <div className="flex items-start gap-3">
        <img 
          src="your-logo-url-here" 
          alt="School Logo" 
          className="w-12 h-12 object-contain" 
        />
        <div>
          <div className="text-base font-semibold">{education.school}</div>
          <div className="text-sm text-gray-600">
            {education.degree}, {education.fieldOfStudy}
          </div>
          <div className="text-sm font-light text-gray-600">
            {new Date(education.startDate).toLocaleString('en-US', { month: 'short', year: 'numeric' })} -{" "}
            {new Date(education.endDate).toLocaleString('en-US', { month: 'short', year: 'numeric' })}
          </div>
        </div>
      </div>
      <button
        onClick={() => handleEdit(index)}
        className="text-blue-600 hover:text-blue-800"
      >
        <FaPencilAlt />
      </button>
    </div>
  ))}
</div>


    </div>
  );
}

export default EducationForm;

















// import React, { useEffect, useState } from "react";
// import { FaPencilAlt } from "react-icons/fa";
// import { GetApi } from "../utilis/Api_Calling";
// const demoData = {
//   school: [
//     "Harvard University",
//     "Stanford University",
//     "MIT",
//     "Yale University",
//     "Princeton University",
//     "LNCT",
//   ],
//   degree: ["MBA", "B.Sc", "M.Sc", "Ph.D", "B.A"],
//   fieldOfStudy: [
//     "Computer Science",
//     "Business Administration",
//     "Electrical Engineering",
//     "Psychology",
//     "Biology",
//   ],
//   location: ["New York", "San Francisco", "Los Angeles", "Chicago", "Boston"],
// };

// function EducationForm({ updateProfile }) {
//   const [formVisible, setFormVisible] = useState(false);
//   const [educationList, setEducationList] = useState([]);
//   const [formData, setFormData] = useState({
//     school: "",
//     degree: "",
//     fieldOfStudy: "",
//     location: "",
//     startDate: "",
//     endDate: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [details, setDetails] = useState({ Skill_Set: [] });
//   const Getstudentprofile = async () => {
//     try {
//       const response = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       setDetails(response?.data?.data || {});
//       setEducationList(response?.data?.data.JobDetails);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     Getstudentprofile();
//   }, []);
//   const [editIndex, setEditIndex] = useState(null);

//   const [filteredData, setFilteredData] = useState(demoData);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name in demoData) {
//       setFilteredData({
//         ...filteredData,
//         [name]: demoData[name].filter((item) =>
//           item.toLowerCase().includes(value.toLowerCase())
//         ),
//       });
//     }
//   };

//   const handleSelect = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editIndex !== null) {
//       const updatedEducationList = [...educationList];
//       updatedEducationList[editIndex] = formData;
//       setEducationList(updatedEducationList);
//       setEditIndex(null);
//     } else {
//       setEducationList([...educationList, formData]);
//     }

//     setFormData({
//       school: "",
//       degree: "",
//       fieldOfStudy: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//     });
//     setFormVisible(false);
//   };

//   const handleEdit = (index) => {
//     setFormData(educationList[index]);
//     setEditIndex(index);
//     setFormVisible(true);
//   };

//   return (
//     <div className="p-4 mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Education</h2>
//       <div className="mb-6">
//         <button
//           onClick={() => setFormVisible(true)}
//           className="text-blue-600 flex items-center text-[14px]  hover:bg-blue-200 px-4 py-2 rounded-lg"
//         >
//           Add your education +
//         </button>
//       </div>

//       {formVisible && (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md p-6 rounded-lg mb-6"
//         >
//           <div className="grid grid-cols-2 gap-6">
//             <div className="relative">
//               <label className="block text-sm text-gray-700 font-semibold">
//                 School/University
//               </label>
//               <input
//                 type="text"
//                 name="school"
//                 value={formData.school}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//                 list="schools"
//               />
//               <datalist id="schools">
//                 {filteredData.school.map((school, index) => (
//                   <option key={index} value={school} />
//                 ))}
//               </datalist>
//             </div>
//             <div className="relative">
//               <label className="block text-sm text-gray-700 font-semibold">
//                 Degree/Certificate
//               </label>
//               <input
//                 type="text"
//                 name="degree"
//                 value={formData.degree}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//                 list="degrees"
//               />
//               <datalist id="degrees">
//                 {filteredData.degree.map((degree, index) => (
//                   <option key={index} value={degree} />
//                 ))}
//               </datalist>
//             </div>
//             <div className="relative">
//               <label className="block text-sm text-gray-700 font-semibold">
//                 Field of Study
//               </label>
//               <input
//                 type="text"
//                 name="fieldOfStudy"
//                 value={formData.fieldOfStudy}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//                 list="fieldsOfStudy"
//               />
//               <datalist id="fieldsOfStudy">
//                 {filteredData.fieldOfStudy.map((field, index) => (
//                   <option key={index} value={field} />
//                 ))}
//               </datalist>
//             </div>
//             <div className="relative">
//               <label className="block text-sm text-gray-700 font-semibold">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//                 list="locations"
//               />
//               <datalist id="locations">
//                 {filteredData.location.map((location, index) => (
//                   <option key={index} value={location} />
//                 ))}
//               </datalist>
//             </div>
//             <div className="relative">
//               <label className="block text-sm text-gray-700 font-semibold">
//                 Start Date
//               </label>
//               <input
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//               />
//             </div>
//             <div className="relative">
//               <label className="block text-sm text-gray-700 font-semibold">
//                 End Date
//               </label>
//               <input
//                 type="date"
//                 name="endDate"
//                 value={formData.endDate}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mt-6 flex justify-between">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
//             >
//               {editIndex !== null ? "Update" : "Save"}
//             </button>
//             <button
//               type="button"
//               onClick={() => {
//                 setFormVisible(false);
//                 setEditIndex(null);
//                 setFormData({
//                   school: "",
//                   degree: "",
//                   fieldOfStudy: "",
//                   location: "",
//                   startDate: "",
//                   endDate: "",
//                 });
//               }}
//               className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}

//       <div className="space-y-4">
//         {educationList.map((education, index) => (
//           <div
//             key={index}
//             className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm"
//           >
//             <div>
//               <div className="flex flex-row gap-3 items-center">
//                 <div className="text-base font-semibold">
//                   {education.degree} ({education.fieldOfStudy})
//                 </div>
//                 <p className="w-[5px] h-[5px] bg-gray-800 rounded-full"></p>
//                 <div className="text-sm -ml-1 text-gray-600">
//                   {education.location}
//                 </div>
//               </div>
//               <div className="text-sm font-extralight text-gray-600">
//                 {education.school} | {education.startDate} to{" "}
//                 {education.endDate}
//               </div>
//             </div>
//             <button
//               onClick={() => handleEdit(index)}
//               className="text-blue-600 hover:text-blue-800"
//             >
//               <FaPencilAlt />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default EducationForm;

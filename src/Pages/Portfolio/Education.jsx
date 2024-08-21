import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const demoData = {
  school: ['Harvard University', 'Stanford University', 'MIT', 'Yale University', 'Princeton University' , 'LNCT'],
  degree: ['MBA', 'B.Sc', 'M.Sc', 'Ph.D', 'B.A'],
  fieldOfStudy: ['Computer Science', 'Business Administration', 'Electrical Engineering', 'Psychology', 'Biology'],
  location: ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Boston']
};

function EducationForm() {
  const [formVisible, setFormVisible] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    location: '',
    startDate: '',
    endDate: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const [filteredData, setFilteredData] = useState(demoData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name in demoData) {
      setFilteredData({
        ...filteredData,
        [name]: demoData[name].filter(item => item.toLowerCase().includes(value.toLowerCase()))
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
      school: '',
      degree: '',
      fieldOfStudy: '',
      location: '',
      startDate: '',
      endDate: ''
    });
    setFormVisible(false);
  };

  const handleEdit = (index) => {
    setFormData(educationList[index]);
    setEditIndex(index);
    setFormVisible(true);
  };

  return (
    <div className="p-4 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <div className="mb-6">
        <button
          onClick={() => setFormVisible(true)}
          className="text-blue-600 flex items-center text-[14px]  hover:bg-blue-200 px-4 py-2 rounded-lg"
        >
           Add your education +
        </button>
      </div>

      {formVisible && (
        <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg mb-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="relative">
              <label className="block text-sm text-gray-700 font-semibold">School/University</label>
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
              <label className="block text-sm text-gray-700 font-semibold">Degree/Certificate</label>
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
              <label className="block text-sm text-gray-700 font-semibold">Field of Study</label>
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
              <label className="block text-sm text-gray-700 font-semibold">Location</label>
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
              <label className="block text-sm text-gray-700 font-semibold">Start Date</label>
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
              <label className="block text-sm text-gray-700 font-semibold">End Date</label>
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
            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              {editIndex !== null ? 'Update' : 'Save'}
            </button>
            <button
              type="button"
              onClick={() => {
                setFormVisible(false);
                setEditIndex(null);
                setFormData({
                  school: '',
                  degree: '',
                  fieldOfStudy: '',
                  location: '',
                  startDate: '',
                  endDate: ''
                });
              }}
              className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {educationList.map((education, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm"
          >
            <div>
                <div className='flex flex-row gap-3 items-center'>
                    <div className="text-base font-semibold">{education.degree} ({education.fieldOfStudy})</div>
                    <p className='w-[5px] h-[5px] bg-gray-800 rounded-full'></p>
                    <div className="text-sm -ml-1 text-gray-600">{education.location}</div>
                </div>
              <div className="text-sm font-extralight text-gray-600">{education.school} | {education.startDate} to {education.endDate}</div>
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





// import React, { useState } from 'react';
// import { FaPencilAlt } from 'react-icons/fa';

// function EducationForm() {
//   const [formVisible, setFormVisible] = useState(false);
//   const [educationList, setEducationList] = useState([]);
//   const [formData, setFormData] = useState({
//     school: '',
//     degree: '',
//     fieldOfStudy: '',
//     location: '',
//     startDate: '',
//     endDate: ''
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
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
//       school: '',
//       degree: '',
//       fieldOfStudy: '',
//       location: '',
//       startDate: '',
//       endDate: ''
//     });
//     setFormVisible(false);
//   };

//   const handleEdit = (index) => {
//     setFormData(educationList[index]);
//     setEditIndex(index);
//     setFormVisible(true);
//   };

//   return (
//     <div className="p-4  mx-auto">
//       <div className="mb-6">
//         <button
//           onClick={() => setFormVisible(true)}
//           className="text-blue-600 flex items-center bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg"
//         >
//           <FaPencilAlt className="mr-2" /> Add your education
//         </button>
//       </div>

//       {formVisible && (
//         <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg mb-6">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-[14px] text-gray-700 font-semibold">School/University</label>
//               <input
//                 type="text"
//                 name="school"
//                 value={formData.school}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-[14px] text-gray-700 font-semibold">Degree/Certificate</label>
//               <input
//                 type="text"
//                 name="degree"
//                 value={formData.degree}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-[14px] text-gray-700 font-semibold">Field of Study</label>
//               <input
//                 type="text"
//                 name="fieldOfStudy"
//                 value={formData.fieldOfStudy}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-[14px] text-gray-700 font-semibold">Location</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-[14px] text-gray-700 font-semibold">Start Date</label>
//               <input
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-[14px] text-gray-700 font-semibold">End Date</label>
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
//             <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
//               {editIndex !== null ? 'Update' : 'Save'}
//             </button>
//             <button
//               type="button"
//               onClick={() => {
//                 setFormVisible(false);
//                 setEditIndex(null);
//                 setFormData({
//                   school: '',
//                   degree: '',
//                   fieldOfStudy: '',
//                   location: '',
//                   startDate: '',
//                   endDate: ''
//                 });
//               }}
//               className="text-red-600 hover:text-red-800"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}

//       {educationList.length > 0 && (
//         <div>
//           {educationList.map((education, index) => (
//             <div
//               key={index}
//               className="bg-white shadow p-4 rounded-lg mb-4 flex flex-col gap-2"
//             >
//               <div className="flex justify-start gap-3 items-center">
//                     <div className=" text-lg">
//                       {education.degree} ({education.fieldOfStudy})
//                     </div>
//                     <div className="text-gray-500 font-mono flex flex-row gap-2 items-center"> <p className='w-2 h-2 bg-gray-700 rounded-full'></p>{education.school}</div>
//               </div>
//               <div className="flex justify-between gap-3 items-center text-gray-600">
//                 <div className=' flex flex-row gap-2'>
//                     <div className=' font-extralight'>
//                     {education.startDate} to {education.endDate}
//                     </div>
//                     <hr className='border-2 h-6 border-blue-200 '></hr>
//                     <div>{education.location}</div>
//                 </div>
//                 <FaPencilAlt 
//                   className="text-blue-600 cursor-pointer" 
//                   onClick={() => handleEdit(index)}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default EducationForm;

import React, { useState } from 'react';
import { FaPencilAlt, FaPlus, FaSave } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

function ProjectForm() {
  const [formVisible, setFormVisible] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    description: '',
    startDate: '',
    endDate: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedProjectList = [...projectList];
      updatedProjectList[editIndex] = formData;
      setProjectList(updatedProjectList);
      setEditIndex(null);
    } else {
      setProjectList([...projectList, formData]);
    }

    setFormData({
      title: '',
      link: '',
      description: '',
      startDate: '',
      endDate: '',
    });
    setFormVisible(false);
  };

  const handleEdit = (index) => {
    setFormData(projectList[index]);
    setEditIndex(index);
    setFormVisible(true);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Projects</h2>
      <div className="mb-6">
        <button
          onClick={() => {
            setFormData({
              title: '',
              link: '',
              description: '',
              startDate: '',
              endDate: '',
            });
            setEditIndex(null);
            setFormVisible(true);
          }}
          className="text-blue-600 flex items-center hover:bg-blue-200 px-4 py-2 rounded-lg"
        >
          Add your project <FaPlus className="ml-2" />
        </button>
      </div>

      {/* Modal for Add/Edit Project */}
      {formVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">{editIndex !== null ? 'Edit Project' : 'Add Project'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">Project Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-2 text-[13px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">Project Link</label>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    className="w-full p-2 text-[13px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full text-[13px] p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full text-[13px] p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-700 font-semibold">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 text-[13px] border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  rows="3"
                  required
                ></textarea>
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
                      title: '',
                      link: '',
                      description: '',
                      startDate: '',
                      endDate: '',
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

      {/* Project List */}
      <div className="space-y-4">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg flex justify-between items-center shadow-sm"
          >
            <div>
              <div className="text-lg text-gray-600 font-semibold">{project.title}</div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs underline text-blue-600">
                  {project.link}
                </a>
              )}
              <div className="text-sm text-gray-600 mt-2">{project.description}</div>
              <div className="text-sm text-gray-600 mt-2 ">
                <span className="font-serif text-[13px]">Start Date:</span> {project.startDate} &nbsp;
                {project.endDate && (
                  <>
                    <span className="font-serif text-[13px]">End Date:</span> {project.endDate}
                  </>
                )}
              </div>
            </div>
            <div className="flex space-x-2 gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-blue-600 hover:text-blue-800"
              >
                <FaPencilAlt />
              </button>
              <button
                onClick={() => setProjectList(projectList.filter((_, i) => i !== index))}
                className="text-red-600 hover:text-red-800"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectForm;












// import React, { useState } from 'react';
// import { FaPencilAlt } from 'react-icons/fa';
// import { MdDelete } from "react-icons/md";

// function ProjectForm() {
//   const [formVisible, setFormVisible] = useState(false);
//   const [projectList, setProjectList] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     link: '',
//     description: '',
//     startDate: '',
//     endDate: '',
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editIndex !== null) {
//       const updatedProjectList = [...projectList];
//       updatedProjectList[editIndex] = formData;
//       setProjectList(updatedProjectList);
//       setEditIndex(null);
//     } else {
//       setProjectList([...projectList, formData]);
//     }

//     setFormData({
//       title: '',
//       link: '',
//       description: '',
//       startDate: '',
//       endDate: '',
//     });
//     setFormVisible(false);
//   };

//   const handleEdit = (index) => {
//     setFormData(projectList[index]);
//     setEditIndex(index);
//     setFormVisible(true);
//   };

//   return (
//     <div className="p-4 mx-auto">
//         <h2 className="text-xl font-semibold mb-4">Projects</h2>
//       <div className="mb-6">
//         <button
//           onClick={() => setFormVisible(true)}
//           className="text-blue-600 flex items-center  hover:bg-blue-200 px-4 py-2 rounded-lg"
//         >
//           Add your project +
//         </button>
//       </div>

//       {formVisible && (
//         <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg mb-6">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm text-gray-700 font-semibold">Project Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-700 font-semibold">Project Link</label>
//               <input
//                 type="url"
//                 name="link"
//                 value={formData.link}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-6 mt-4">
//             <div>
//               <label className="block text-sm text-gray-700 font-semibold">Start Date</label>
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
//               <label className="block text-sm text-gray-700 font-semibold">End Date</label>
//               <input
//                 type="date"
//                 name="endDate"
//                 value={formData.endDate}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label className="block text-sm text-gray-700 font-semibold">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//               rows="1"
//               required
//             ></textarea>
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
//                   title: '',
//                   link: '',
//                   description: '',
//                   startDate: '',
//                   endDate: '',
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
//         {projectList.map((project, index) => (
//           <div
//             key={index}
//             className=" bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm"
//           >
//             <div className=''>
//               <div className="text-base font-semibold">{project.title}</div>
//               {project.link && (
//                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs underline text-blue-600">
//                   {project.link}
//                 </a>
//               )}
//               <div className="text-sm text-gray-600 mt-2">{project.description}</div>
//               <div className="text-sm text-gray-600 mt-2">
//                 <span className="font-semibold">Start Date:</span> {project.startDate} &nbsp;
//                 {project.endDate && (
//                   <>
//                     <span className="font-semibold">End Date:</span> {project.endDate}
//                   </>
//                 )}
//               </div>
//             </div>
//             <div className="flex space-x-2 gap-2">
//               <button
//                 onClick={() => handleEdit(index)}
//                 className="text-blue-600 hover:text-blue-800"
//               >
//                 <FaPencilAlt />
//               </button>
//               <button
//                 onClick={() => setProjectList(projectList.filter((_, i) => i !== index))}
//                 className="text-red-600 hover:text-red-800"
//               >
//                 <MdDelete/>
//                 {/* Delete */}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectForm;













// import React, { useState } from 'react';
// import { FaPencilAlt } from 'react-icons/fa';

// function ProjectForm() {
//   const [formVisible, setFormVisible] = useState(false);
//   const [projectList, setProjectList] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     link: '',
//     description: '',
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editIndex !== null) {
//       const updatedProjectList = [...projectList];
//       updatedProjectList[editIndex] = formData;
//       setProjectList(updatedProjectList);
//       setEditIndex(null);
//     } else {
//       setProjectList([...projectList, formData]);
//     }

//     setFormData({
//       title: '',
//       link: '',
//       description: '',
//     });
//     setFormVisible(false);
//   };

//   const handleEdit = (index) => {
//     setFormData(projectList[index]);
//     setEditIndex(index);
//     setFormVisible(true);
//   };

//   return (
//     <div className="p-4 mx-auto">
//         <h2 className="text-xl font-semibold mb-4">Projects</h2>
//       <div className="mb-6">
//         <button
//           onClick={() => setFormVisible(true)}
//           className="text-blue-600 flex items-center  hover:bg-blue-200 px-4 py-2 rounded-lg"
//         >
//           Add your project +
//         </button>
//       </div>

//       {formVisible && (
//         <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg mb-6">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm text-gray-700 font-semibold">Project Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-700 font-semibold">Project Link</label>
//               <input
//                 type="url"
//                 name="link"
//                 value={formData.link}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label className="block text-sm text-gray-700 font-semibold">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//               rows="1"
//               required
//             ></textarea>
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
//                   title: '',
//                   link: '',
//                   description: '',
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
//         {projectList.map((project, index) => (
//           <div
//             key={index}
//             className=" bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm"
//           >
//             <div className=''>
//               <div className="text-base font-semibold">{project.title}</div>
//               {project.link && (
//                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs underline text-blue-600">
//                   {project.link}
//                 </a>
//               )}
//               <div className="text-sm text-gray-600 mt-2">{project.description}</div>
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

// export default ProjectForm;

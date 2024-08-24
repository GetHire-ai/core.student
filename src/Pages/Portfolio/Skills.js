import { useEffect, useState } from "react";
import { FaSave, FaTimes, FaPlus } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";
import { GetApi } from "../utilis/Api_Calling";

const allLanguages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Russian",
];
const allSkills = [
  "Community Engagement",
  "Management",
  "Team Leadership",
  "Recruitment Training",
  "LinkedIn Marketing",
  "Google Drive",
  "Recruitment Portals",
  "Expertise Softwares",
];

const Levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

function Skills({ updateProfile }) {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [editingSkills, setEditingSkills] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [editingLanguage, setEditingLanguage] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");
  const [newLevel, setnewLevel] = useState("Beginner");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({ Skill_Set: [] });
  const [newSkill, setNewSkill] = useState(""); // State for the new skill

  const Getstudentprofile = async () => {
    try {
      const response = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      const data = response?.data?.data || {};
      setSelectedSkills(data?.Skill_Set);
      setDetails(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const handleSkillSelection = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([
        ...selectedSkills,
        {
          Skill: skill,
          Rate: "Beginner",
          score: 0,
        },
      ]);
      setDetails((prev) => ({
        ...prev,
        Skill_Set: selectedSkills,
      }));
    }
  };

  const handleRemoveSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s?.Skill !== skill));
    setDetails((prev) => ({
      ...prev,
      Skill_Set: selectedSkills,
    }));
  };

  const handleSaveSkills = () => {
    updateProfile(details);
    setEditingSkills(false);
  };

  const handleAddLanguage = () => {
    setEditingLanguage(true);
    setLanguageDropdownOpen(true);
  };

  const handleLanguageChange = (e) => {
    setNewLanguage(e.target.value);
  };

  // const handleSaveLanguage = () => {
  //   if (newLanguage) {
  //     setLanguages([...languages, { language: newLanguage, level: newLevel }]);
  //     setNewLanguage("");
  //     setnewLevel("Beginner");
  //     setLanguageDropdownOpen(false);
  //     setEditingLanguage(false);
  //     setDetails((prev) => ({ ...prev, languages }));
  //     updateProfile(details);
  //   }
  // };
  const handleSaveLanguage = () => {
    if (newLanguage) {
      const updatedLanguages = [
        ...languages,
        { language: newLanguage, level: newLevel },
      ];

      // Update the languages state
      setLanguages(updatedLanguages);

      // Update the details state with the new languages array
      setDetails((prev) => ({
        ...prev,
        languages: updatedLanguages,
      }));

      // Clear the input fields and close the modal
      setNewLanguage("");
      setnewLevel("Beginner");
      setLanguageDropdownOpen(false);
      setEditingLanguage(false);

      // Optionally, update the profile if necessary
      updateProfile(details);
    }
  };




  const handleCancelLanguage = () => {
    setNewLanguage("");
    setnewLevel("Beginner");
    setLanguageDropdownOpen(false);
    setEditingLanguage(false);
  };

  const handleRemoveLanguage = (language) => {
    setLanguages(languages.filter((l) => l.name !== language.name));
  };

  const handleAddSkill = () => {
    if (newSkill && !selectedSkills.some((s) => s.Skill === newSkill)) {
      setSelectedSkills([...selectedSkills, { Skill: newSkill, Rate: "Beginner", score: 0 }]);
      setNewSkill(""); // Clear the input field after adding
    }
  };




  return (
      //    <div className="container mx-auto p-5 shadow-lg h-screen">
      // <h2 className="text-xl font-semibold mb-6 text-gray-800">Your Skills</h2>     
        <div className="container mx-auto p-5 shadow-lg h-screen">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Your Skills</h2>

          {/* Technical Skills Section */}
          <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-gray-700">Technical Skills</h3>
              <button
                className="text-blue-600 hover:text-blue-800 focus:outline-none"
                onClick={() => setEditingSkills(!editingSkills)}
              >
                <RiEditLine className="text-xl" />
              </button>
            </div>

            {editingSkills && (
              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-600">Select Your Skills:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {allSkills.map((skill, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors ${
                        selectedSkills.includes(skill)
                          ? "bg-blue-500 text-white"
                          : ""
                      }`}
                      onClick={() => handleSkillSelection(skill)}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
                {/* Input for new skill */}
                <div className="mt-4 flex items-center">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Enter a new skill"
                    className="px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full flex items-center space-x-2 hover:bg-blue-600 transition"
                    onClick={handleAddSkill}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 mt-4">
              {selectedSkills?.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-100 text-blue-800 p-3 rounded-full flex items-center space-x-2"
                >
                  <span>{skill.Skill}</span>
                  {editingSkills && (
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveSkill(skill.Skill)}
                    >
                      <FaTimes className="text-sm" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {editingSkills && selectedSkills.length > 0 && (
              <button
                className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
                onClick={handleSaveSkills}
              >
                <FaSave />
                <span>Save Skills</span>
              </button>
            )}
          </div>


          {/* Language Proficiency Section */}
          <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-semibold text-gray-700">
            Language Proficiency
          </h3>
          <button
            className="text-blue-600 hover:text-blue-800 focus:outline-none"
            onClick={handleAddLanguage}
          >
            <span className="text-base">+ Add your language</span>
          </button>
        </div>

        {editingLanguage && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg max-w-sm w-full">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                Add Language
              </h4>
              <div className="mb-4">
                <label
                  htmlFor="language"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Language
                </label>
                <select
                  id="language"
                  value={newLanguage}
                  onChange={handleLanguageChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="" disabled>
                    Select language
                  </option>
                  {allLanguages.map((language, index) => (
                    <option key={index} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="level"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Proficiency Level
                </label>
                <select
                  id="level"
                  value={newLevel}
                  onChange={(e) => setnewLevel(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                >
                  {Levels.map((level, index) => (
                    <option key={index} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                  onClick={handleSaveLanguage}
                >
                  Save
                </button>
                <button
                  className="px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition flex items-center justify-center"
                  onClick={handleCancelLanguage}
                >
                  <p className="text-lg">X</p>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4">
          {details?.languages?.map((language, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-800">
                  {language.language}
                </span>
                <span className="text-sm text-gray-600">
                  ({language.level})
                </span>
              </div>
              {editingLanguage && (
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveLanguage(language)}
                >
                  <FaTimes className="text-sm" />
                </button>
              )}
            </div>
          ))}
        </div>
           </div>  
        
        </div>
         

          // {/* Language Proficiency Section */}
      //  <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      //   <div className="flex justify-between items-center mb-4">
      //     <h3 className="text-base font-semibold text-gray-700">
      //       Language Proficiency
      //     </h3>
      //     <button
      //       className="text-blue-600 hover:text-blue-800 focus:outline-none"
      //       onClick={handleAddLanguage}
      //     >
      //       <span className="text-base">+ Add your language</span>
      //     </button>
      //   </div>

      //   {editingLanguage && (
      //     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      //       <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg max-w-sm w-full">
      //         <h4 className="text-2xl font-semibold text-gray-800 mb-4">
      //           Add Language
      //         </h4>
      //         <div className="mb-4">
      //           <label
      //             htmlFor="language"
      //             className="block text-gray-700 font-medium mb-2"
      //           >
      //             Language
      //           </label>
      //           <select
      //             id="language"
      //             value={newLanguage}
      //             onChange={handleLanguageChange}
      //             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
      //           >
      //             <option value="" disabled>
      //               Select language
      //             </option>
      //             {allLanguages.map((language, index) => (
      //               <option key={index} value={language}>
      //                 {language}
      //               </option>
      //             ))}
      //           </select>
      //         </div>
      //         <div className="mb-6">
      //           <label
      //             htmlFor="level"
      //             className="block text-gray-700 font-medium mb-2"
      //           >
      //             Proficiency Level
      //           </label>
      //           <select
      //             id="level"
      //             value={newLevel}
      //             onChange={(e) => setnewLevel(e.target.value)}
      //             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
      //           >
      //             {Levels.map((level, index) => (
      //               <option key={index} value={level}>
      //                 {level}
      //               </option>
      //             ))}
      //           </select>
      //         </div>
      //         <div className="flex justify-end space-x-4">
      //           <button
      //             className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      //             onClick={handleSaveLanguage}
      //           >
      //             Save
      //           </button>
      //           <button
      //             className="px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition flex items-center justify-center"
      //             onClick={handleCancelLanguage}
      //           >
      //             <p className="text-lg">X</p>
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   )}

      //   <div className="flex flex-col gap-4">
      //     {details?.languages?.map((language, index) => (
      //       <div
      //         key={index}
      //         className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm"
      //       >
      //         <div className="flex items-center space-x-2">
      //           <span className="font-medium text-gray-800">
      //             {language.language}
      //           </span>
      //           <span className="text-sm text-gray-600">
      //             ({language.level})
      //           </span>
      //         </div>
      //         {editingLanguage && (
      //           <button
      //             className="text-red-500 hover:text-red-700"
      //             onClick={() => handleRemoveLanguage(language)}
      //           >
      //             <FaTimes className="text-sm" />
      //           </button>
      //         )}
      //       </div>
      //     ))}
      //   </div>
      // </div>       

    // </div>
   

  );
}

export default Skills;









// import { useEffect, useState } from "react";
// import { FaSave, FaTimes } from "react-icons/fa";
// import { RiEditLine } from "react-icons/ri";
// import { GetApi } from "../utilis/Api_Calling";
// import { FaPlus } from "react-icons/fa"; // Import FaPlus icon

// const allLanguages = [
//   "English",
//   "Spanish",
//   "French",
//   "German",
//   "Chinese",
//   "Japanese",
//   "Russian",
// ];
// const allSkills = [
//   "Community Engagement",
//   "Management",
//   "Team Leadership",
//   "Recruitment Training",
//   "LinkedIn Marketing",
//   "Google Drive",
//   "Recruitment Portals",
//   "Expertise Softwares",
// ];

// const Levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

// function Skills({ updateProfile }) {
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [editingSkills, setEditingSkills] = useState(false);
//   const [languages, setLanguages] = useState([]);
//   const [editingLanguage, setEditingLanguage] = useState(false);
//   const [newLanguage, setNewLanguage] = useState("");
//   const [newLevel, setnewLevel] = useState("Beginner");
//   const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const [details, setDetails] = useState({ Skill_Set: [] });

//   const Getstudentprofile = async () => {
//     try {
//       const response = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       const data = response?.data?.data || {};
//       setSelectedSkills(data?.Skill_Set);
//       setDetails(data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     Getstudentprofile();
//   }, []);

//   const handleSkillSelection = (skill) => {
//     if (!selectedSkills.includes(skill)) {
//       setSelectedSkills([
//         ...selectedSkills,
//         {
//           Skill: skill,
//           Rate: "Beginner",
//           score: 0,
//         },
//       ]);
//       setDetails((prev) => ({
//         ...prev,
//         Skill_Set: selectedSkills,
//       }));
//     }
//   };

//   const handleRemoveSkill = (skill) => {
//     setSelectedSkills(selectedSkills.filter((s) => s?.Skill !== skill));
//     setDetails((prev) => ({
//       ...prev,
//       Skill_Set: selectedSkills,
//     }));
//   };

//   const handleSaveSkills = () => {
//     updateProfile(details);
//     setEditingSkills(false);
//   };

//   const handleAddLanguage = () => {
//     setEditingLanguage(true);
//     setLanguageDropdownOpen(true);
//   };

//   const handleLanguageChange = (e) => {
//     setNewLanguage(e.target.value);
//   };

//   const handleSaveLanguage = () => {
//     if (newLanguage) {
//       setLanguages([...languages, { language: newLanguage, level: newLevel }]);
//       setNewLanguage("");
//       setnewLevel("Beginner");
//       setLanguageDropdownOpen(false);
//       setEditingLanguage(false);
//       setDetails((prev) => ({ ...prev, languages }));
//       updateProfile(details);
//     }
//   };

//   const handleCancelLanguage = () => {
//     setNewLanguage("");
//     setnewLevel("Beginner");
//     setLanguageDropdownOpen(false);
//     setEditingLanguage(false);
//   };

//   const handleRemoveLanguage = (language) => {
//     setLanguages(languages.filter((l) => l.name !== language.name));
//   };



//   return (
//     <div className="container mx-auto p-5 shadow-lg h-screen">
//       <h2 className="text-xl font-semibold mb-6 text-gray-800">Your Skills</h2>

//       {/* Technical Skills Section */}
//       <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-base font-semibold text-gray-700">
//             Technical Skills
//           </h3>
//           <button
//             className="text-blue-600 hover:text-blue-800 focus:outline-none"
//             onClick={() => setEditingSkills(!editingSkills)}
//           >
//             <RiEditLine className="text-xl" />
//           </button>
//         </div>

//         {editingSkills && (
//           <div className="mb-4">
//             <h4 className="text-lg font-medium text-gray-600">
//               Select Your Skills:
//             </h4>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {allSkills.map((skill, index) => (
//                 <button
//                   key={index}
//                   className={`px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors ${
//                     selectedSkills.includes(skill)
//                       ? "bg-blue-500 text-white"
//                       : ""
//                   }`}
//                   onClick={() => handleSkillSelection(skill)}
//                 >
//                   {skill}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="flex flex-wrap gap-4 mt-4">
//           {selectedSkills?.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-blue-100 text-blue-800 p-3 rounded-full flex items-center space-x-2"
//             >
//               <span>{skill.Skill}</span>
//               {editingSkills && (
//                 <button
//                   className="text-red-500 hover:text-red-700"
//                   onClick={() => handleRemoveSkill(skill.Skill)}
//                 >
//                   <FaTimes className="text-sm" />
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//         {editingSkills && selectedSkills.length > 0 && (
//           <button
//             className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
//             onClick={handleSaveSkills}
//           >
//             <FaSave />
//             <span>Save Skills</span>
//           </button>
//         )}
//       </div>
     

//       {/* Language Proficiency Section */}
//        <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-base font-semibold text-gray-700">
//             Language Proficiency
//           </h3>
//           <button
//             className="text-blue-600 hover:text-blue-800 focus:outline-none"
//             onClick={handleAddLanguage}
//           >
//             <span className="text-base">+ Add your language</span>
//           </button>
//         </div>

//         {editingLanguage && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//             <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg max-w-sm w-full">
//               <h4 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Add Language
//               </h4>
//               <div className="mb-4">
//                 <label
//                   htmlFor="language"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Language
//                 </label>
//                 <select
//                   id="language"
//                   value={newLanguage}
//                   onChange={handleLanguageChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
//                 >
//                   <option value="" disabled>
//                     Select language
//                   </option>
//                   {allLanguages.map((language, index) => (
//                     <option key={index} value={language}>
//                       {language}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="mb-6">
//                 <label
//                   htmlFor="level"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Proficiency Level
//                 </label>
//                 <select
//                   id="level"
//                   value={newLevel}
//                   onChange={(e) => setnewLevel(e.target.value)}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
//                 >
//                   {Levels.map((level, index) => (
//                     <option key={index} value={level}>
//                       {level}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//                   onClick={handleSaveLanguage}
//                 >
//                   Save
//                 </button>
//                 <button
//                   className="px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition flex items-center justify-center"
//                   onClick={handleCancelLanguage}
//                 >
//                   <p className="text-lg">X</p>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="flex flex-col gap-4">
//           {details?.languages?.map((language, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm"
//             >
//               <div className="flex items-center space-x-2">
//                 <span className="font-medium text-gray-800">
//                   {language.language}
//                 </span>
//                 <span className="text-sm text-gray-600">
//                   ({language.level})
//                 </span>
//               </div>
//               {editingLanguage && (
//                 <button
//                   className="text-red-500 hover:text-red-700"
//                   onClick={() => handleRemoveLanguage(language)}
//                 >
//                   <FaTimes className="text-sm" />
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>       

//     </div>
//   );
// }

// export default Skills;

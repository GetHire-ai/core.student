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
const allTechnicalSkills = [
  "C",
  "C++",
  "Java",
  "Python",
  "SQL",
  " Data Structures ",
  "Google Drive",
  "Recruitment Portals",
  "Expertise Softwares",
];
const allSoftSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Adaptability",
  "Creativity",
  "Work Ethic",
  "Interpersonal Skills",
  "Team Leadership",
];

const Levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

function Skills({ updateProfile }) {
  const [selectedTechnicalSkills, setSelectedTechnicalSkills] = useState([]);
  const [selectedSoftSkills, setSelectedSoftSkills] = useState([]);
  const [editingTechnicalSkills, setEditingTechnicalSkills] = useState(false);
  const [editingSoftSkills, setEditingSoftSkills] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [editingLanguage, setEditingLanguage] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");
  const [newLevel, setnewLevel] = useState("Beginner");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({ Skill_Set: [] });
  const [newSkill, setNewSkill] = useState(""); // State for the new skill
  const [isTechnicalSkillModalOpen, setIsTechnicalSkillModalOpen] =
    useState(false); // State for opening the technical skill modal
  const [isSoftSkillModalOpen, setIsSoftSkillModalOpen] = useState(false); // State for opening the soft skill modal

  const Getstudentprofile = async () => {
    try {
      const response = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      const data = response?.data?.data || {};
      setSelectedTechnicalSkills(data?.Skill_Set || []);
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

  const handleTechnicalSkillSelection = (skill) => {
    if (!selectedTechnicalSkills.some((s) => s.Skill === skill)) {
      setSelectedTechnicalSkills([
        ...selectedTechnicalSkills,
        {
          Skill: skill,
          Rate: "Beginner",
          score: 0,
        },
      ]);
      setDetails((prev) => ({
        ...prev,
        Skill_Set: selectedTechnicalSkills,
      }));
    }
  };

  const handleSoftSkillSelection = (skill) => {
    if (!selectedSoftSkills.some((s) => s.Skill === skill)) {
      setSelectedSoftSkills([
        ...selectedSoftSkills,
        {
          Skill: skill,
          Rate: "Beginner",
          score: 0,
        },
      ]);
      setDetails((prev) => ({
        ...prev,
        Skill_Set: selectedSoftSkills,
      }));
    }
  };

  const handleRemoveTechnicalSkill = (skill) => {
    const updatedSkills = selectedTechnicalSkills.filter(
      (s) => s.Skill !== skill
    );
    setSelectedTechnicalSkills(updatedSkills);
    setDetails((prev) => ({
      ...prev,
      Skill_Set: updatedSkills,
    }));
  };

  const handleRemoveSoftSkill = (skill) => {
    const updatedSkills = selectedSoftSkills.filter((s) => s.Skill !== skill);
    setSelectedSoftSkills(updatedSkills);
    setDetails((prev) => ({
      ...prev,
      Skill_Set: updatedSkills,
    }));
  };

  const handleSaveTechnicalSkills = () => {
    updateProfile(details);
    setEditingTechnicalSkills(false);
    setIsTechnicalSkillModalOpen(false); // Close the technical skill modal on save
  };

  const handleSaveSoftSkills = () => {
    updateProfile(details);
    setEditingSoftSkills(false);
    setIsSoftSkillModalOpen(false); // Close the soft skill modal on save
  };

  const handleAddLanguage = () => {
    setEditingLanguage(true);
    setLanguageDropdownOpen(true);
  };

  const handleLanguageChange = (e) => {
    setNewLanguage(e.target.value);
  };

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
    setLanguages(languages.filter((l) => l.language !== language.language));
  };

  const handleAddTechnicalSkill = () => {
    if (
      newSkill &&
      !selectedTechnicalSkills.some((s) => s.Skill === newSkill)
    ) {
      setSelectedTechnicalSkills([
        ...selectedTechnicalSkills,
        { Skill: newSkill, Rate: "Beginner", score: 0 },
      ]);
      setNewSkill(""); // Clear the input field after adding
    }
  };

  const handleAddSoftSkill = () => {
    if (newSkill && !selectedSoftSkills.some((s) => s.Skill === newSkill)) {
      setSelectedSoftSkills([
        ...selectedSoftSkills,
        { Skill: newSkill, Rate: "Beginner", score: 0 },
      ]);
      setNewSkill(""); // Clear the input field after adding
    }
  };

  const openTechnicalSkillModal = () => {
    setIsTechnicalSkillModalOpen(true);
    setEditingTechnicalSkills(true); // Open the editing technical skills mode
  };

  const openSoftSkillModal = () => {
    setIsSoftSkillModalOpen(true);
    setEditingSoftSkills(true); // Open the editing soft skills mode
  };

  const closeTechnicalSkillModal = () => {
    setIsTechnicalSkillModalOpen(false);
    setEditingTechnicalSkills(false); // Close the editing technical skills mode
  };

  const closeSoftSkillModal = () => {
    setIsSoftSkillModalOpen(false);
    setEditingSoftSkills(false); // Close the editing soft skills mode
  };


  // Function to remove a technical skill
  // const handleRemoveTechnicalSkill = (skillToRemove) => {
  //   const updatedSkills = selectedTechnicalSkills.filter(
  //     (skill) => skill.Skill !== skillToRemove
  //   );
  //   setSelectedTechnicalSkills(updatedSkills);
  // };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Your Skills</h2>

      {/* Technical Skills Section */}
      <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-semibold text-gray-700">
            Technical Skills
          </h3>
          <button
            className="text-blue-600 hover:text-blue-800 focus:outline-none"
            onClick={openTechnicalSkillModal}
          >
            <RiEditLine className="text-xl" />
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          {selectedTechnicalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-800 p-3 rounded-full flex items-center space-x-2"
            >
              <span>{skill.Skill}</span>
              {editingTechnicalSkills && (
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveTechnicalSkill(skill.Skill)}
                >
                  <FaTimes className="text-sm" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      
       {/* Modal for Adding Technical Skills */}
       {isTechnicalSkillModalOpen && (
         <div className="fixed inset-0 mt-8 bg-gray-800 bg-opacity-50 flex justify-center items-center overflow-y-auto">
         <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 max-h-[80vh] overflow-y-auto">
           <h3 className="text-lg font-semibold mb-4">Edit Technical Skills</h3>
           <div className="flex items-center mb-4">
             <input
               type="text"
               className="border p-2 flex-grow"
               placeholder="Add a technical skill..."
               value={newSkill}
               onChange={(e) => setNewSkill(e.target.value)}
             />
             <button
               className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
               onClick={handleAddTechnicalSkill}
             >
               Add
             </button>
           </div>
           <div className="flex flex-wrap gap-4 mb-4">
             {allTechnicalSkills.map((skill, index) => (
               <button
                 key={index}
                 className={`border px-4 py-2 rounded ${
                   selectedTechnicalSkills.some((s) => s.Skill === skill)
                     ? "bg-blue-500 text-white"
                     : "bg-white text-gray-700"
                 }`}
                 onClick={() => handleTechnicalSkillSelection(skill)}
               >
                 {skill}
               </button>
             ))}
           </div>
   
           <div className="flex flex-wrap gap-4 mt-4">
             {selectedTechnicalSkills.map((skill, index) => (
               <div
                 key={index}
                 className="bg-blue-100 text-blue-800 p-3 rounded-full flex items-center space-x-2"
               >
                 <span>{skill.Skill}</span>
                 {editingTechnicalSkills && (
                   <button
                     className="text-red-500 hover:text-red-700"
                     onClick={() => handleRemoveTechnicalSkill(skill.Skill)}
                   >
                     <FaTimes className="text-sm" />
                   </button>
                 )}
               </div>
             ))}
           </div>
   
           <div className="flex justify-end mt-6">
             <button
               className="text-gray-700 hover:text-gray-900 mr-4"
               onClick={closeTechnicalSkillModal}
             >
               Cancel
             </button>
             <button
               className="bg-blue-500 text-white px-4 py-2 rounded"
               onClick={handleSaveTechnicalSkills}
             >
               Save
             </button>
           </div>
         </div>
       </div>
      )}


      {/* Soft Skills Section */}
      <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-semibold text-gray-700">Soft Skills</h3>
          <button
            className="text-blue-600 hover:text-blue-800 focus:outline-none"
            onClick={openSoftSkillModal}
          >
            <RiEditLine className="text-xl" />
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          {selectedSoftSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-green-100 text-green-800 p-3 rounded-full flex items-center space-x-2"
            >
              <span>{skill.Skill}</span>
              {editingSoftSkills && (
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveSoftSkill(skill.Skill)}
                >
                  <FaTimes className="text-sm" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Adding Soft Skills */}
      {isSoftSkillModalOpen && (
        <div className="fixed mt-10 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Edit Soft Skills</h3>
            <div className="flex items-center mb-4">
              <input
                type="text"
                className="border p-2 flex-grow"
                placeholder="Add a soft skill..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded ml-2"
                onClick={handleAddSoftSkill}
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-4">
              {allSoftSkills.map((skill, index) => (
                <button
                  key={index}
                  className={`border px-4 py-2 rounded ${
                    selectedSoftSkills.some((s) => s.Skill === skill)
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => handleSoftSkillSelection(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {selectedSoftSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-green-100 text-green-800 p-3 rounded-full flex items-center space-x-2"
                >
                  <span>{skill.Skill}</span>
                  {editingSoftSkills && (
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveSoftSkill(skill.Skill)}
                    >
                      <FaTimes className="text-sm" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="text-gray-700 hover:text-gray-900 mr-4"
                onClick={closeSoftSkillModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleSaveSoftSkills}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      
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
            <span className="text-base"><RiEditLine className="text-xl" /></span>
          </button>
        </div>

        {editingLanguage && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg max-w-md w-full h-96 overflow-auto">
              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-800">
                  Add Language Proficiency
                </h4>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="language"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Select Language:
                </label>
                <select
                  id="language"
                  value={newLanguage}
                  onChange={handleLanguageChange}
                  className="px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a language</option>
                  {allLanguages.map((language, index) => (
                    <option key={index} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="level"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Select Proficiency Level:
                </label>
                <select
                  id="level"
                  value={newLevel}
                  onChange={(e) => setnewLevel(e.target.value)}
                  className="px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Levels.map((level, index) => (
                    <option key={index} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full flex items-center space-x-2 hover:bg-gray-400 transition"
                  onClick={handleCancelLanguage}
                >
                  <FaTimes />
                  <span>Cancel</span>
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
                  onClick={handleSaveLanguage}
                >
                  <FaSave />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-purple-100 text-purple-800 p-3 rounded-full flex items-center space-x-2"
            >
              <span>{`${language.language} (${language.level})`}</span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemoveLanguage(language)}
              >
                <FaTimes className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
  // return (
  //   <div className="bg-gray-50 p-6 rounded-lg shadow-md">
  //     <h2 className="text-2xl font-bold mb-4 text-blue-600">Your Skills</h2>
  
  //     {/* Technical Skills Section */}
  //     <div className="mb-10 p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
  //       <div className="flex justify-between items-center mb-6">
  //         <h3 className="text-lg font-semibold text-gray-800">Technical Skills</h3>
  //         <button
  //           className="text-blue-500 hover:text-blue-700 focus:outline-none transition duration-150"
  //           onClick={openTechnicalSkillModal}
  //         >
  //           <RiEditLine className="text-2xl" />
  //         </button>
  //       </div>
  
  //       <div className="flex flex-wrap gap-3">
  //         {selectedTechnicalSkills.map((skill, index) => (
  //           <div
  //             key={index}
  //             className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm"
  //           >
  //             <span>{skill.Skill}</span>
  //             {editingTechnicalSkills && (
  //               <button
  //                 className="text-red-500 hover:text-red-700 transition duration-150"
  //                 onClick={() => handleRemoveTechnicalSkill(skill.Skill)}
  //               >
  //                 <FaTimes className="text-sm" />
  //               </button>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  
  //     {/* Modal for Adding Technical Skills */}
  //     {isTechnicalSkillModalOpen && (
  //       <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-50">
  //         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
  //           <h3 className="text-lg font-semibold mb-6 text-gray-900">Edit Technical Skills</h3>
  //           <div className="flex items-center mb-6">
  //             <input
  //               type="text"
  //               className="border border-gray-300 p-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
  //               placeholder="Add a technical skill..."
  //               value={newSkill}
  //               onChange={(e) => setNewSkill(e.target.value)}
  //             />
  //             <button
  //               className="bg-blue-500 text-white px-5 py-3 rounded-lg ml-3 hover:bg-blue-600 transition duration-150"
  //               onClick={handleAddTechnicalSkill}
  //             >
  //               Add
  //             </button>
  //           </div>
  //           <div className="flex flex-wrap gap-4 mb-4">
  //             {allTechnicalSkills.map((skill, index) => (
  //               <button
  //                 key={index}
  //                 className={`border px-4 py-2 rounded-lg transition duration-150 ${
  //                   selectedTechnicalSkills.some((s) => s.Skill === skill)
  //                     ? "bg-blue-500 text-white"
  //                     : "bg-gray-50 text-gray-800 hover:bg-blue-100"
  //                 }`}
  //                 onClick={() => handleTechnicalSkillSelection(skill)}
  //               >
  //                 {skill}
  //               </button>
  //             ))}
  //           </div>
  //           <div className="flex justify-end mt-6">
  //             <button
  //               className="text-gray-600 hover:text-gray-800 mr-4 transition duration-150"
  //               onClick={closeTechnicalSkillModal}
  //             >
  //               Cancel
  //             </button>
  //             <button
  //               className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition duration-150"
  //               onClick={handleSaveTechnicalSkills}
  //             >
  //               Save
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  
  //     {/* Soft Skills Section */}
  //     <div className="mb-10 p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
  //       <div className="flex justify-between items-center mb-6">
  //         <h3 className="text-lg font-semibold text-gray-800">Soft Skills</h3>
  //         <button
  //           className="text-green-500 hover:text-green-700 focus:outline-none transition duration-150"
  //           onClick={openSoftSkillModal}
  //         >
  //           <RiEditLine className="text-2xl" />
  //         </button>
  //       </div>
  
  //       <div className="flex flex-wrap gap-3">
  //         {selectedSoftSkills.map((skill, index) => (
  //           <div
  //             key={index}
  //             className="bg-green-50 text-green-800 px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm"
  //           >
  //             <span>{skill.Skill}</span>
  //             {editingSoftSkills && (
  //               <button
  //                 className="text-red-500 hover:text-red-700 transition duration-150"
  //                 onClick={() => handleRemoveSoftSkill(skill.Skill)}
  //               >
  //                 <FaTimes className="text-sm" />
  //               </button>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  
  //     {/* Modal for Adding Soft Skills */}
  //     {isSoftSkillModalOpen && (
  //       <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-50">
  //         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
  //           <h3 className="text-lg font-semibold mb-6 text-gray-900">Edit Soft Skills</h3>
  //           <div className="flex items-center mb-6">
  //             <input
  //               type="text"
  //               className="border border-gray-300 p-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-green-400"
  //               placeholder="Add a soft skill..."
  //               value={newSkill}
  //               onChange={(e) => setNewSkill(e.target.value)}
  //             />
  //             <button
  //               className="bg-green-500 text-white px-5 py-3 rounded-lg ml-3 hover:bg-green-600 transition duration-150"
  //               onClick={handleAddSoftSkill}
  //             >
  //               Add
  //             </button>
  //           </div>
  //           <div className="flex flex-wrap gap-4 mb-4">
  //             {allSoftSkills.map((skill, index) => (
  //               <button
  //                 key={index}
  //                 className={`border px-4 py-2 rounded-lg transition duration-150 ${
  //                   selectedSoftSkills.some((s) => s.Skill === skill)
  //                     ? "bg-green-500 text-white"
  //                     : "bg-gray-50 text-gray-800 hover:bg-green-100"
  //                 }`}
  //                 onClick={() => handleSoftSkillSelection(skill)}
  //               >
  //                 {skill}
  //               </button>
  //             ))}
  //           </div>
  //           <div className="flex justify-end mt-6">
  //             <button
  //               className="text-gray-600 hover:text-gray-800 mr-4 transition duration-150"
  //               onClick={closeSoftSkillModal}
  //             >
  //               Cancel
  //             </button>
  //             <button
  //               className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition duration-150"
  //               onClick={handleSaveSoftSkills}
  //             >
  //               Save
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  
  //     {/* Language Proficiency Section */}
  //     <div className="p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
  //       <div className="flex justify-between items-center mb-6">
  //         <h3 className="text-lg font-semibold text-gray-800">Language Proficiency</h3>
  //         <button
  //           className="text-purple-500 hover:text-purple-700 focus:outline-none transition duration-150"
  //           onClick={handleAddLanguage}
  //         >
  //           <RiEditLine className="text-2xl" />
  //         </button>
  //       </div>
  
  //       <div className="flex flex-wrap gap-3">
  //         {languages.map((language, index) => (
  //           <div
  //             key={index}
  //             className="bg-purple-50 text-purple-800 px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm"
  //           >
  //             <span>{`${language.language} (${language.level})`}</span>
  //             <button
  //               className="text-red-500 hover:text-red-700 transition duration-150"
  //               onClick={() => handleRemoveLanguage(language)}
  //             >
  //               <FaTimes className="text-sm" />
  //             </button>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
  
}

export default Skills;









// import { useEffect, useState } from "react";
// import { FaSave, FaTimes, FaPlus } from "react-icons/fa";
// import { RiEditLine } from "react-icons/ri";
// import { GetApi } from "../utilis/Api_Calling";

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
//   const [newSkill, setNewSkill] = useState(""); // State for the new skill
//   const [isSkillModalOpen, setIsSkillModalOpen] = useState(false); // State for opening the skill modal

//   const Getstudentprofile = async () => {
//     try {
//       const response = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       const data = response?.data?.data || {};
//       setSelectedSkills(data?.Skill_Set || []);
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
//     if (!selectedSkills.some((s) => s.Skill === skill)) {
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
//     const updatedSkills = selectedSkills.filter((s) => s.Skill !== skill);
//     setSelectedSkills(updatedSkills);
//     setDetails((prev) => ({
//       ...prev,
//       Skill_Set: updatedSkills,
//     }));
//   };

//   const handleSaveSkills = () => {
//     updateProfile(details);
//     setEditingSkills(false);
//     setIsSkillModalOpen(false); // Close the skill modal on save
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
//       const updatedLanguages = [
//         ...languages,
//         { language: newLanguage, level: newLevel },
//       ];

//       // Update the languages state
//       setLanguages(updatedLanguages);

//       // Update the details state with the new languages array
//       setDetails((prev) => ({
//         ...prev,
//         languages: updatedLanguages,
//       }));

//       // Clear the input fields and close the modal
//       setNewLanguage("");
//       setnewLevel("Beginner");
//       setLanguageDropdownOpen(false);
//       setEditingLanguage(false);

//       // Optionally, update the profile if necessary
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
//     setLanguages(languages.filter((l) => l.language !== language.language));
//   };

//   const handleAddSkill = () => {
//     if (newSkill && !selectedSkills.some((s) => s.Skill === newSkill)) {
//       setSelectedSkills([
//         ...selectedSkills,
//         { Skill: newSkill, Rate: "Beginner", score: 0 },
//       ]);
//       setNewSkill(""); // Clear the input field after adding
//     }
//   };

//   const openSkillModal = () => {
//     setIsSkillModalOpen(true);
//     setEditingSkills(true); // Open the editing skills mode
//   };

//   const closeSkillModal = () => {
//     setIsSkillModalOpen(false);
//     setEditingSkills(false); // Close the editing skills mode
//   };

//   return (
//     <div className="relative container mx-auto p-5 shadow-lg h-screen">
//       <h2 className="text-xl font-semibold mb-6 text-gray-800">Your Skills</h2>

//       {/* Technical Skills Section */}
//       <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-base font-semibold text-gray-700">
//             Technical Skills
//           </h3>
//           <button
//             className="text-blue-600 hover:text-blue-800 focus:outline-none"
//             onClick={openSkillModal}
//           >
//             <RiEditLine className="text-xl" />
//           </button>
//         </div>

//         <div className="flex flex-wrap gap-4 mt-4">
//           {selectedSkills.map((skill, index) => (
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
//       </div>

//       {/* Skill Modal */}
//       {isSkillModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg w-full max-w-3xl h-96 overflow-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h4 className="text-lg font-medium text-gray-800">Edit Skills</h4>
//               <button
//                 className="text-red-500 hover:text-red-700"
//                 onClick={closeSkillModal}
//               >
//                 <FaTimes />
//               </button>
//             </div>
//             <div className="mb-4">
//               <h4 className="text-lg font-medium text-gray-600">
//                 Select Your Skills:
//               </h4>
//               <div className="flex flex-nowrap overflow-x-auto gap-2 mt-2">
//                 {allSkills.map((skill, index) => (
//                   <button
//                     key={index}
//                     className={`px-2 py-2 rounded-3xl border text-xs border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors ${
//                       selectedSkills.some((s) => s.Skill === skill) ? "bg-blue-500 text-white" : ""
//                     }`}
//                     onClick={() => handleSkillSelection(skill)}
//                   >
//                     {skill}
//                   </button>
//                 ))}
//               </div>

//               <div className="mt-4 flex items-center">
//                 <input
//                   type="text"
//                   value={newSkill}
//                   onChange={(e) => setNewSkill(e.target.value)}
//                   placeholder="Enter a new skill"
//                   className="px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button
//                   className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full flex items-center space-x-2 hover:bg-blue-600 transition"
//                   onClick={handleAddSkill}
//                 >
//                   <FaPlus />
//                 </button>
//               </div>
//             </div>

//             <div className="mb-4">
//               <h4 className="text-lg font-medium text-gray-600">Current Skills:</h4>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {selectedSkills.map((skill, index) => (
//                   <div
//                     key={index}
//                     className="bg-blue-100 text-blue-800 p-3 rounded-full flex items-center space-x-2"
//                   >
//                     <span>{skill.Skill}</span>
//                     <button
//                       className="text-red-500 hover:text-red-700"
//                       onClick={() => handleRemoveSkill(skill.Skill)}
//                     >
//                       <FaTimes className="text-sm" />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {selectedSkills.length > 0 && (
//               <button
//                 className="px-4 py-2 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
//                 onClick={handleSaveSkills}
//               >
//                 <FaSave />
//                 <span>Save</span>
//               </button>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Language Proficiency Section */}
//       <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
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
//             <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg max-w-md w-full h-96 overflow-auto">
//               <div className="mb-4">
//                 <h4 className="text-lg font-medium text-gray-800">
//                   Add Language Proficiency
//                 </h4>
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="language"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Select Language:
//                 </label>
//                 <select
//                   id="language"
//                   value={newLanguage}
//                   onChange={handleLanguageChange}
//                   className="px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Select a language</option>
//                   {allLanguages.map((language, index) => (
//                     <option key={index} value={language}>
//                       {language}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="level"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Select Proficiency Level:
//                 </label>
//                 <select
//                   id="level"
//                   value={newLevel}
//                   onChange={(e) => setnewLevel(e.target.value)}
//                   className="px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   {Levels.map((level, index) => (
//                     <option key={index} value={level}>
//                       {level}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="flex justify-end gap-4">
//                 <button
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full flex items-center space-x-2 hover:bg-gray-400 transition"
//                   onClick={handleCancelLanguage}
//                 >
//                   <FaTimes />
//                   <span>Cancel</span>
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
//                   onClick={handleSaveLanguage}
//                 >
//                   <FaSave />
//                   <span>Save</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="flex flex-wrap gap-4">
//           {languages.map((language, index) => (
//             <div
//               key={index}
//               className="bg-purple-100 text-purple-800 p-3 rounded-full flex items-center space-x-2"
//             >
//               <span>{`${language.language} (${language.level})`}</span>
//               <button
//                 className="text-red-500 hover:text-red-700"
//                 onClick={() => handleRemoveLanguage(language)}
//               >
//                 <FaTimes className="text-sm" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skills;





















// import { useEffect, useState } from "react";
// import { FaSave, FaTimes, FaPlus } from "react-icons/fa";
// import { RiEditLine } from "react-icons/ri";
// import { GetApi } from "../utilis/Api_Calling";

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
//   const [newSkill, setNewSkill] = useState(""); // State for the new skill

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

//   // const handleSaveLanguage = () => {
//   //   if (newLanguage) {
//   //     setLanguages([...languages, { language: newLanguage, level: newLevel }]);
//   //     setNewLanguage("");
//   //     setnewLevel("Beginner");
//   //     setLanguageDropdownOpen(false);
//   //     setEditingLanguage(false);
//   //     setDetails((prev) => ({ ...prev, languages }));
//   //     updateProfile(details);
//   //   }
//   // };
//   const handleSaveLanguage = () => {
//     if (newLanguage) {
//       const updatedLanguages = [
//         ...languages,
//         { language: newLanguage, level: newLevel },
//       ];

//       // Update the languages state
//       setLanguages(updatedLanguages);

//       // Update the details state with the new languages array
//       setDetails((prev) => ({
//         ...prev,
//         languages: updatedLanguages,
//       }));

//       // Clear the input fields and close the modal
//       setNewLanguage("");
//       setnewLevel("Beginner");
//       setLanguageDropdownOpen(false);
//       setEditingLanguage(false);

//       // Optionally, update the profile if necessary
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

//   const handleAddSkill = () => {
//     if (newSkill && !selectedSkills.some((s) => s.Skill === newSkill)) {
//       setSelectedSkills([...selectedSkills, { Skill: newSkill, Rate: "Beginner", score: 0 }]);
//       setNewSkill(""); // Clear the input field after adding
//     }
//   };


//   return (
//       //    <div className="container mx-auto p-5 shadow-lg h-screen">
//       // <h2 className="text-xl font-semibold mb-6 text-gray-800">Your Skills</h2>     
//         <div className=" relative container mx-auto p-5 shadow-lg h-screen">
//           <h2 className="text-xl font-semibold mb-6 text-gray-800">Your Skills</h2>

//           {/* Technical Skills Section */}
//           <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-base font-semibold text-gray-700">Technical Skills</h3>
//               <button
//                 className="text-blue-600 hover:text-blue-800 focus:outline-none"
//                 onClick={() => setEditingSkills(!editingSkills)}
//               >
//                 <RiEditLine className="text-xl" />
//               </button>
//             </div>


//             {editingSkills && (
//               <div className="mb-4">
//                 <h4 className="text-lg font-medium text-gray-600">Select Your Skills:</h4>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {allSkills.map((skill, index) => (
//                     <button
//                       key={index}
//                       className={`px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors ${
//                         selectedSkills.includes(skill)
//                           ? "bg-blue-500 text-white"
//                           : ""
//                       }`}
//                       onClick={() => handleSkillSelection(skill)}
//                     >
//                       {skill}
//                     </button>
//                   ))}
//                 </div>
                
//                 <div className="mt-4 flex items-center">
//                   <input
//                     type="text"
//                     value={newSkill}
//                     onChange={(e) => setNewSkill(e.target.value)}
//                     placeholder="Enter a new skill"
//                     className="px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <button
//                     className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full flex items-center space-x-2 hover:bg-blue-600 transition"
//                     onClick={handleAddSkill}
//                   >
//                     <FaPlus />
//                   </button>
//                 </div>
//               </div>
//             )}

//             <div className="flex flex-wrap gap-4 mt-4">
//               {selectedSkills?.map((skill, index) => (
//                 <div
//                   key={index}
//                   className="bg-blue-100 text-blue-800 p-3 rounded-full flex items-center space-x-2"
//                 >
//                   <span>{skill.Skill}</span>
//                   {editingSkills && (
//                     <button
//                       className="text-red-500 hover:text-red-700"
//                       onClick={() => handleRemoveSkill(skill.Skill)}
//                     >
//                       <FaTimes className="text-sm" />
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {editingSkills && selectedSkills.length > 0 && (
//               <button
//                 className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
//                 onClick={handleSaveSkills}
//               >
//                 <FaSave />
//                 <span>Save Skills</span>
//               </button>
//             )}

//           </div>
        

//           {/* Language Proficiency Section */}
//           <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-base font-semibold text-gray-700">
//                 Language Proficiency
//               </h3>
//               <button
//                 className="text-blue-600 hover:text-blue-800 focus:outline-none"
//                 onClick={handleAddLanguage}
//               >
//                 <span className="text-base">+ Add your language</span>
//               </button>
//             </div>

//             {editingLanguage && (
//               <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//                 <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg max-w-sm w-full">
//                   <h4 className="text-2xl font-semibold text-gray-800 mb-4">
//                     Add Language
//                   </h4>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="language"
//                       className="block text-gray-700 font-medium mb-2"
//                     >
//                       Language
//                     </label>
//                     <select
//                       id="language"
//                       value={newLanguage}
//                       onChange={handleLanguageChange}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
//                     >
//                       <option value="" disabled>
//                         Select language
//                       </option>
//                       {allLanguages.map((language, index) => (
//                         <option key={index} value={language}>
//                           {language}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="mb-6">
//                     <label
//                       htmlFor="level"
//                       className="block text-gray-700 font-medium mb-2"
//                     >
//                       Proficiency Level
//                     </label>
//                     <select
//                       id="level"
//                       value={newLevel}
//                       onChange={(e) => setnewLevel(e.target.value)}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
//                     >
//                       {Levels.map((level, index) => (
//                         <option key={index} value={level}>
//                           {level}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="flex justify-end space-x-4">
//                     <button
//                       className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//                       onClick={handleSaveLanguage}
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition flex items-center justify-center"
//                       onClick={handleCancelLanguage}
//                     >
//                       <p className="text-lg">X</p>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="flex flex-col gap-4">
//               {details?.languages?.map((language, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm"
//                 >
//                   <div className="flex items-center space-x-2">
//                     <span className="font-medium text-gray-800">
//                       {language.language}
//                     </span>
//                     <span className="text-sm text-gray-600">
//                       ({language.level})
//                     </span>
//                   </div>
//                   {editingLanguage && (
//                     <button
//                       className="text-red-500 hover:text-red-700"
//                       onClick={() => handleRemoveLanguage(language)}
//                     >
//                       <FaTimes className="text-sm" />
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>  
        
//         </div>
         
         
//          // {/* Language Proficiency Section */}
//          //  <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//       //   <div className="flex justify-between items-center mb-4">
//       //     <h3 className="text-base font-semibold text-gray-700">
//       //       Language Proficiency
//       //     </h3>
//       //     <button
//       //       className="text-blue-600 hover:text-blue-800 focus:outline-none"
//       //       onClick={handleAddLanguage}
//       //     >
//       //       <span className="text-base">+ Add your language</span>
//       //     </button>
//       //   </div>

//       //   {editingLanguage && (
//         //     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//       //       <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg max-w-sm w-full">
//       //         <h4 className="text-2xl font-semibold text-gray-800 mb-4">
//       //           Add Language
//       //         </h4>
//       //         <div className="mb-4">
//       //           <label
//       //             htmlFor="language"
//       //             className="block text-gray-700 font-medium mb-2"
//       //           >
//       //             Language
//       //           </label>
//       //           <select
//       //             id="language"
//       //             value={newLanguage}
//       //             onChange={handleLanguageChange}
//       //             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
//       //           >
//       //             <option value="" disabled>
//       //               Select language
//       //             </option>
//       //             {allLanguages.map((language, index) => (
//       //               <option key={index} value={language}>
//       //                 {language}
//       //               </option>
//       //             ))}
//       //           </select>
//       //         </div>
//       //         <div className="mb-6">
//       //           <label
//       //             htmlFor="level"
//       //             className="block text-gray-700 font-medium mb-2"
//       //           >
//       //             Proficiency Level
//       //           </label>
//       //           <select
//       //             id="level"
//       //             value={newLevel}
//       //             onChange={(e) => setnewLevel(e.target.value)}
//       //             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
//       //           >
//       //             {Levels.map((level, index) => (
//         //               <option key={index} value={level}>
//         //                 {level}
//         //               </option>
//         //             ))}
//         //           </select>
//         //         </div>
//         //         <div className="flex justify-end space-x-4">
//         //           <button
//         //             className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//         //             onClick={handleSaveLanguage}
//         //           >
//         //             Save
//         //           </button>
//         //           <button
//         //             className="px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition flex items-center justify-center"
//         //             onClick={handleCancelLanguage}
//         //           >
//         //             <p className="text-lg">X</p>
//         //           </button>
//         //         </div>
//         //       </div>
//         //     </div>
//         //   )}
        
//         //   <div className="flex flex-col gap-4">
//         //     {details?.languages?.map((language, index) => (
//           //       <div
//           //         key={index}
//           //         className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm"
//           //       >
//           //         <div className="flex items-center space-x-2">
//           //           <span className="font-medium text-gray-800">
//           //             {language.language}
//           //           </span>
//           //           <span className="text-sm text-gray-600">
//           //             ({language.level})
//           //           </span>
//           //         </div>
//           //         {editingLanguage && (
//             //           <button
//       //             className="text-red-500 hover:text-red-700"
//       //             onClick={() => handleRemoveLanguage(language)}
//       //           >
//       //             <FaTimes className="text-sm" />
//       //           </button>
//       //         )}
//       //       </div>
//       //     ))}
//       //   </div>
//       // </div>       

//       // </div>
//   //  -------------------------
//       );
//       }
        
// export default Skills;

  






// {/* <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
// <div className="flex justify-between items-center mb-4">
//   <h3 className="text-base font-semibold text-gray-700">Technical Skills</h3>
//   <button
//     className="text-blue-600 hover:text-blue-800 focus:outline-none"
//     onClick={() => setEditingSkills(!editingSkills)}
//   >
//     <RiEditLine className="text-xl" />
//   </button>
// </div>

// {editingSkills && (
//   <div className="mb-4">
//     <h4 className="text-lg font-medium text-gray-600">Select Your Skills:</h4>
//     <div className="flex flex-wrap gap-2 mt-2">
//       {allSkills.map((skill, index) => (
//         <button
//           key={index}
//           className={`px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors ${
//             selectedSkills.includes(skill)
//               ? "bg-blue-500 text-white"
//               : ""
//           }`}
//           onClick={() => handleSkillSelection(skill)}
//         >
//           {skill}
//         </button>
//       ))}
//     </div>
//     {/* Input for new skill */}
//     <div className="mt-4 flex items-center">
//       <input
//         type="text"
//         value={newSkill}
//         onChange={(e) => setNewSkill(e.target.value)}
//         placeholder="Enter a new skill"
//         className="px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full flex items-center space-x-2 hover:bg-blue-600 transition"
//         onClick={handleAddSkill}
//       >
//         <FaPlus />
//       </button>
//     </div>
//   </div>
// )}

// <div className="flex flex-wrap gap-4 mt-4">
//   {selectedSkills?.map((skill, index) => (
//     <div
//       key={index}
//       className="bg-blue-100 text-blue-800 p-3 rounded-full flex items-center space-x-2"
//     >
//       <span>{skill.Skill}</span>
//       {editingSkills && (
//         <button
//           className="text-red-500 hover:text-red-700"
//           onClick={() => handleRemoveSkill(skill.Skill)}
//         >
//           <FaTimes className="text-sm" />
//         </button>
//       )}
//     </div>
//   ))}
// </div>

// {editingSkills && selectedSkills.length > 0 && (
//   <button
//     className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
//     onClick={handleSaveSkills}
//   >
//     <FaSave />
//     <span>Save Skills</span>
//   </button>
// )}
// </div> */}











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

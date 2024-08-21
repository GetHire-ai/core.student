import { useState } from 'react';
import { FaPencilAlt, FaSave, FaTimes } from 'react-icons/fa';
import { RiEditLine } from "react-icons/ri";

function Skills() {
  const allSkills = [
    'Community Engagement',
    'Management',
    'Team Leadership',
    'Recruitment Training',
    'LinkedIn Marketing',
    'Google Drive',
    'Recruitment Portals',
    'Expertise Softwares',
  ];

  const allLanguages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Russian',
  ];

  const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [editingSkills, setEditingSkills] = useState(false);

  const [languages, setLanguages] = useState([]);
  const [editingLanguage, setEditingLanguage] = useState(false);
  const [newLanguage, setNewLanguage] = useState('');
  const [newProficiency, setNewProficiency] = useState('Beginner');
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const handleSkillSelection = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  const handleSaveSkills = () => {
    setEditingSkills(false);
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
      setLanguages([...languages, { name: newLanguage, proficiency: newProficiency }]);
      setNewLanguage('');
      setNewProficiency('Beginner');
      setLanguageDropdownOpen(false);
      setEditingLanguage(false);
    }
  };

  const handleCancelLanguage = () => {
    setNewLanguage('');
    setNewProficiency('Beginner');
    setLanguageDropdownOpen(false);
    setEditingLanguage(false);
  };

  const handleRemoveLanguage = (language) => {
    setLanguages(languages.filter(l => l.name !== language.name));
  };

  return (
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
                    selectedSkills.includes(skill) ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handleSkillSelection(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-4">
          {selectedSkills.map((skill, index) => (
            <div key={index} className="bg-blue-100 text-blue-800 p-3 rounded-full flex items-center space-x-2">
              <span>{skill}</span>
              {editingSkills && (
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveSkill(skill)}
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
          <h3 className="text-base font-semibold text-gray-700">Language Proficiency</h3>
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
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Add Language</h4>
                <div className="mb-4">
                    <label htmlFor="language" className="block text-gray-700 font-medium mb-2">Language</label>
                    <select
                    id="language"
                    value={newLanguage}
                    onChange={handleLanguageChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                    >
                    <option value="" disabled>Select language</option>
                    {allLanguages.map((language, index) => (
                        <option key={index} value={language}>
                        {language}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="proficiency" className="block text-gray-700 font-medium mb-2">Proficiency Level</label>
                    <select
                    id="proficiency"
                    value={newProficiency}
                    onChange={(e) => setNewProficiency(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                    >
                    {proficiencyLevels.map((level, index) => (
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
                    <p className="text-lg" >X</p>
                    </button>
                </div>
                </div>
            </div>
            )}


        <div className="flex flex-col gap-4">
          {languages.map((language, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
              <div>
                <div className="font-medium text-sm text-gray-700">{language.name}</div>
                <div className="text-gray-500">Level: {language.proficiency}</div>
              </div>
              <button
                className="text-blue-600 hover:text-blue-800"
                onClick={() => handleRemoveLanguage(language)}
              >
                <p className="text-lg">x</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

























// without skill but looks very good
// import { useState } from 'react';
// import { FaPencilAlt, FaSave } from 'react-icons/fa';

// function Skills() {
//   const allSkills = [
//     'Community Engagement',
//     'Management',
//     'Team Leadership',
//     'Recruitment Training',
//     'LinkedIn Marketing',
//     'Google Drive',
//     'Recruitment Portals',
//     'Expertise Softwares',
//   ];

//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [editing, setEditing] = useState(false);

//   const handleSkillSelection = (skill) => {
//     if (!selectedSkills.includes(skill)) {
//       setSelectedSkills([...selectedSkills, skill]);
//     }
//   };

//   const handleRemoveSkill = (skill) => {
//     setSelectedSkills(selectedSkills.filter(s => s !== skill));
//   };

//   const handleSave = () => {
//     setEditing(false);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Skills</h2>

//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-2xl font-semibold text-gray-700">Technical Skills</h3>
//           <button
//             className="text-blue-600 hover:text-blue-800 focus:outline-none"
//             onClick={() => setEditing(!editing)}
//           >
//             <FaPencilAlt className="text-xl" />
//           </button>
//         </div>

//         {editing && (
//           <div className="mb-4">
//             <h4 className="text-lg font-medium text-gray-600">Select Your Skills:</h4>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {allSkills.map((skill, index) => (
//                 <button
//                   key={index}
//                   className={`px-3 py-1 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition ${
//                     selectedSkills.includes(skill) ? 'bg-blue-500 text-white' : ''
//                   }`}
//                   onClick={() => handleSkillSelection(skill)}
//                 >
//                   {skill}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="flex flex-wrap gap-4">
//           {selectedSkills.map((skill, index) => (
//             <div key={index} className="bg-blue-100 text-blue-800 p-3 rounded-full flex items-center">
//               {skill}
//               {editing && (
//                 <button
//                   className="ml-2 text-red-500 hover:text-red-700"
//                   onClick={() => handleRemoveSkill(skill)}
//                 >
//                   <p className="text-lg " >x</p>
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//         {editing && selectedSkills.length > 0 && (
//           <button
//             className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-700 transition"
//             onClick={handleSave}
//           >
//             <FaSave />
//             <span>Save Skills</span>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Skills;


















// adding skills with the expertise -----------------------------
// import { useState } from 'react';
// import { FaPencilAlt, FaSave } from 'react-icons/fa';

// function Skills() {
//   const allSkills = [
//     'Community Engagement',
//     'Management',
//     'Team Leadership',
//     'Recruitment Training',
//     'LinkedIn Marketing',
//     'Google Drive',
//     'Recruitment Portals',
//     'Expertise Softwares',
//   ];

//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [editing, setEditing] = useState(false);

//   const handleSkillSelection = (skill) => {
//     if (!selectedSkills.includes(skill)) {
//       setSelectedSkills([...selectedSkills, { name: skill, proficiency: '' }]);
//     }
//   };

//   const handleSkillChange = (index, newProficiency) => {
//     const updatedSkills = [...selectedSkills];
//     updatedSkills[index].proficiency = newProficiency;
//     setSelectedSkills(updatedSkills);
//   };

//   const handleSave = () => {
//     setEditing(false);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Skills</h2>

//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-2xl font-semibold text-gray-700">Technical Skills</h3>
//           <button
//             className="text-blue-600 hover:text-blue-800 focus:outline-none"
//             onClick={() => setEditing(!editing)}
//           >
//             <FaPencilAlt className="text-xl" />
//           </button>
//         </div>

//         {editing && (
//           <div className="mb-4">
//             <h4 className="text-lg font-medium text-gray-600">Select Your Skills:</h4>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {allSkills.map((skill, index) => (
//                 <button
//                   key={index}
//                   className={`px-3 py-1 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition ${
//                     selectedSkills.some((s) => s.name === skill)
//                       ? 'bg-blue-500 text-white'
//                       : ''
//                   }`}
//                   onClick={() => handleSkillSelection(skill)}
//                 >
//                   {skill}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-2 gap-4">
//           {selectedSkills.map((skill, index) => (
//             <div key={index} className="bg-white p-4 rounded-md shadow-md">
//               <div className="flex justify-between items-center mb-2">
//                 <h4 className="text-lg font-medium text-gray-800">{skill.name}</h4>
//                 {editing && (
//                   <select
//                     className="p-2 border border-gray-300 rounded-md"
//                     value={skill.proficiency}
//                     onChange={(e) => handleSkillChange(index, e.target.value)}
//                   >
//                     <option value="">Select Proficiency</option>
//                     <option value="Beginner">Beginner</option>
//                     <option value="Intermediate">Intermediate</option>
//                     <option value="Advanced">Advanced</option>
//                     <option value="Expert">Expert</option>
//                   </select>
//                 )}
//               </div>
//               {!editing && skill.proficiency && (
//                 <p className="text-sm text-gray-600">{skill.proficiency}</p>
//               )}
//             </div>
//           ))}
//         </div>

//         {editing && selectedSkills.length > 0 && (
//           <button
//             className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-700 transition"
//             onClick={handleSave}
//           >
//             <FaSave />
//             <span>Save Skills</span>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Skills;

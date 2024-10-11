import { useEffect, useState } from "react";
import { FaSave, FaTimes, FaPlus } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";
import { GetApi } from "../utilis/Api_Calling";
import SkillTestModal from "./SkillTestModal";

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
  const [skillTest, setSkillTest] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
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
      console.log(updatedLanguages);
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

  const handleTest = (skill) => {
    setSelectedSkill(skill);
    setSkillTest(true);
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
              onClick={() => handleTest(skill)}
              key={index}
              className="bg-blue-100 text-blue-800 p-3 rounded-full flex items-center space-x-2 cursor-pointer"
            >
              <span>
                {skill?.score}% {skill?.Skill}
              </span>
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
            <h3 className="text-lg font-semibold mb-4">
              Edit Technical Skills
            </h3>
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
            <span className="text-base">
              <RiEditLine className="text-xl" />
            </span>
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
      <SkillTestModal
        skill={selectedSkill}
        isOpen={skillTest}
        onRequestClose={() => {
          setSkillTest(false);
          setSelectedSkill(null);
        }}
      />
    </div>
  );
}

export default Skills;

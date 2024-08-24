import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  // Array of possible questions with corresponding links
  const questions = [
    { text: "Currently Working ? ", link: "/actively-looking" },
    { text: "Looking for a job ?", link: "/open-to-offers" },
    { text: "Want to upgrad ?", link: "/not-looking-but" },
    { text: "Satisfied with current job !", link: "/not-looking-at-all" },

  ];

  // Select 4 random questions
  const getRandomQuestions = () => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const randomQuestions = getRandomQuestions();

  // Handle navigation
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <div className="border-2 sticky z-10 top-24 border-gray-300 rounded-2xl p-6 mt-3 max-2xl:h-[25%] min-h-[23%] max-h-[23%] bg-white w-[80%] shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="profile w-full flex flex-col justify-start items-start">
        <h2 className="text-[14px] font-medium text-gray-900 mb-1">
          Where are you in your job search journey?
        </h2>
        <div className="flex flex-col mt-2 -ml-3 gap-2">
          {randomQuestions.map((question, index) => (
            <h6
              key={index}
              className="text-[12px] font-sans text-gray-900 border-2 border-gray-300 rounded-3xl py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={() => handleNavigation(question.link)}
            >
              {question.text}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";

const Sidebar = () => {
  // Array of possible questions
  const questions = [
    "Actively Looking ",
    "Open to offers",
    "Not looking, but  ",
    "Not looking at all",
    "Considering a career",
    "Looking for project",
    "mprove current job ",
    "Networkingindustry ",
    "Updating my resume ",
    "Exploring market ",
  ];

  // Select 4 random questions
  const getRandomQuestions = () => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const randomQuestions = getRandomQuestions();

  return (
    <div className=" border-2 sticky z-10 top-24 border-gray-300 rounded-2xl p-6 mt-3 max-2xl:h-[25%]   min-h-[23%] max-h-[23%] bg-white w-[80%] shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="profile w-full flex flex-col justify-start items-start">
        <h2 className="text-[14px] font-medium text-gray-900 mb-1">
          Where are you in your job search journey?
        </h2>
        <div className="flex flex-col mt-2 -ml-3 gap-2">
          {questions.slice(0, 4).map((question, index) => (
            <h6
              key={index}
              className="text-[12px] font-sans text-gray-900 border-2 border-gray-300 rounded-3xl py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            >
              {question}
            </h6>
          ))}
        </div>
      </div>
    </div>
 


  );
};

export default Sidebar;

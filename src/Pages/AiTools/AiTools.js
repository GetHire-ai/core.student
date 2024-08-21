import React from "react";

const AITools = () => {
  const tools = [
    {
      name: "ChatGPT",
      description: "A conversational AI that can assist with various tasks.",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      name: "DALL·E",
      description: "Generates images from textual descriptions.",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      name: "Codex",
      description: "A code generation tool for developers.",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
  ];

  return (
    <div className="flex flex-wrap justify-around p-5">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg shadow-lg p-5 m-3 w-60 text-center transform transition-transform duration-200 hover:scale-105"
        >
          <img
            src={tool.image}
            alt={tool.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
          <p className="text-gray-600 mb-4">{tool.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default AITools;

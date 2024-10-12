import React, { createContext, useContext, useState, useEffect } from "react";
import { GetApi } from "../Pages/utilis/Api_Calling";

const StudentContext = createContext();

export const useStudent = () => useContext(StudentContext);

const requiredFields = [
  "Name",
  "Website",
  "Gender",
  "Address",
  "highestQualification",
  "Expected_Salary",
];

const fieldToQuestionMap = {
  Name: "What is your name?",
  Email: "What is your email address?",
  Number: "What is your contact number?",
  Image: "Please upload your profile picture.",
  Website: "Do you have a personal website?",
  Gender: "What is your gender?",
  introductionVideo: "Please upload an introduction video.",
  Address: "What is your address?",
  highestQualification: "What is your highest qualification?",
  position_of_responsibility: "Have you held any positions of responsibility?",
  Training_details: "Please provide your training details.",
  Projects: "Have you worked on any projects?",
  Skill_Set: "What skills do you possess?",
  Work_Samples: "Please provide your work samples.",
  Additional_Info: "Any additional information you'd like to add?",
  Expected_Salary: "What is your expected salary?",
  Current_Salary: "What is your current salary?",
  Experience: "How many years of experience do you have?",
  exprienceIn: "What is your experience in?",
  Joining_Date: "When are you available to join?",
  Resume: "Please upload your resume.",
};

const calculateMissingFields = (studentData) => {
  let missingFieldsList = [];

  requiredFields.forEach((field) => {
    if (Array.isArray(studentData[field])) {
      if (studentData[field].length === 0) {
        missingFieldsList.push(field);
      }
    } else if (typeof studentData[field] === "string") {
      if (!studentData[field].trim()) {
        missingFieldsList.push(field);
      }
    } else if (typeof studentData[field] === "boolean") {
      if (!studentData[field]) {
        missingFieldsList.push(field);
      }
    } else if (!studentData[field]) {
      missingFieldsList.push(field);
    }
  });

  return missingFieldsList;
};

export const StudentProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [missingFields, setMissingFields] = useState([]);

  const getStudent = async () => {
    try {
      const res = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      const data = res?.data?.data || {};
      setProfile(data);

      const missingFieldsList = calculateMissingFields(data);
      setMissingFields(missingFieldsList);

      if (missingFieldsList.length > 0) {
        setCurrentQuestion(missingFieldsList[0]);
      } else {
        setCurrentQuestion(null);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        profile,
        loading,
        currentQuestion,
        missingFields,
        fieldToQuestionMap,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

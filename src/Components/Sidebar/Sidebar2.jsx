import React, { useEffect, useState } from "react";
import { GetApi, PutApi } from "../../Pages/utilis/Api_Calling";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [missingFields, setMissingFields] = useState([]);
  const [inputValue, setInputValue] = useState("");

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
    position_of_responsibility:
      "Have you held any positions of responsibility?",
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

  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      const profileData = Getjobdata?.data?.data || {};
      setProfile(profileData);

      const missingFieldsList = calculateMissingFields(profileData);
      setMissingFields(missingFieldsList);

      if (missingFieldsList.length > 0) {
        setCurrentQuestion(missingFieldsList[0]);
      } else {
        setCurrentQuestion(null);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const handleAnswerSubmission = async () => {
    const updatedProfile = { ...profile, [currentQuestion]: inputValue };

    try {
      await PutApi("api/StudentRoutes/UpdateStudentProfile", updatedProfile);
      setProfile(updatedProfile);

      const remainingFields = missingFields.filter(
        (field) => field !== currentQuestion
      );

      if (remainingFields.length > 0) {
        setCurrentQuestion(remainingFields[0]);
        setMissingFields(remainingFields);
        setInputValue("");
      } else {
        setCurrentQuestion(null);
      }
    } catch (error) {
      console.log(error);
      alert("Error updating ");
    }
  };

  const handleSkipQuestion = () => {
    const remainingFields = missingFields.filter(
      (field) => field !== currentQuestion
    );

    if (remainingFields.length > 0) {
      setCurrentQuestion(remainingFields[0]);
      setMissingFields(remainingFields);
      setInputValue("");
    } else {
      setCurrentQuestion(null);
    }
  };

  const renderInputField = () => {
    switch (currentQuestion) {
      case "Gender":
        return (
          <div className="flex gap-3 flex-wrap">
            {["Male", "Female", "Other"].map((option) => (
              <button
                key={option}
                onClick={() => setInputValue(option)}
                className={`px-3 py-1 text-sm rounded-full border transition-colors duration-300 ${
                  inputValue === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-gray-300 text-gray-600 hover:bg-blue-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );

      case "highestQualification":
        return (
          <div className="flex gap-3 flex-wrap">
            {["10th", "12th", "Graduate", "Post Graduate"].map((option) => (
              <button
                key={option}
                onClick={() => setInputValue(option)}
                className={`px-2 py-1 text-sm rounded-full border transition-colors duration-300 ${
                  inputValue === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-gray-300 text-gray-600 hover:bg-blue-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );

      case "Expected_Salary":
      case "Current_Salary":
        return (
          <div className="flex gap-3 flex-wrap">
            {["1-3 LPA", "3-5 LPA", "5+ LPA"].map((option) => (
              <button
                key={option}
                onClick={() => setInputValue(option)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors duration-300 ${
                  inputValue === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-gray-300 text-gray-600 hover:bg-blue-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );

      default:
        return (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full border-gray-300 focus:border-blue-500 focus:outline-none"
            placeholder="Enter your answer..."
          />
        );
    }
  };

  const renderCurrentQuestion = () => {
    if (!currentQuestion) {
      return (
        <h6 className="text-[16px] font-semibold text-gray-900">
          Your profile is complete. Thank you! 🎉
        </h6>
      );
    }

    return (
      <div>
        <h6 className="text-[16px] font-semibold text-gray-900 mb-3">
          {fieldToQuestionMap[currentQuestion]}
        </h6>
        {renderInputField()}
        <div className="flex gap-4 mt-4 flex-wrap">
          <button
            onClick={handleAnswerSubmission}
            className="bg-blue-600 text-white text-sm rounded-lg py-1 px-2 hover:bg-blue-700 transition-colors duration-300"
          >
            Submit Answer
          </button>
          <button
            onClick={handleSkipQuestion}
            className="bg-gray-100 text-gray-700 text-sm rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors duration-300"
          >
            Skip
          </button>
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 text-blue-800">
          <h6 className="font-semibold">Get Hired Faster!</h6>
          <p className="text-sm">
            Complete your profile to improve your chances of getting hired.
            Follow these steps to make your application stand out.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="border-2 sticky z-0 top-24 border-gray-300 rounded-2xl p-6 mt-3 bg-white w-full md:w-[80%] shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="profile w-full flex flex-col justify-start items-start">
        {loading ? (
          <h6 className="text-[14px] font-sans text-gray-900">Loading...</h6>
        ) : (
          renderCurrentQuestion()
        )}
      </div>
    </div>
  );
};

export default Sidebar;











// import React, { useEffect, useState } from "react";
// import { GetApi, PutApi } from "../../Pages/utilis/Api_Calling";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [currentQuestion, setCurrentQuestion] = useState(null);
//   const [missingFields, setMissingFields] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const requiredFields = [
//     "Name",
//     "Website",
//     "Gender",
//     "Address",
//     "highestQualification",
//     "Expected_Salary",
//     // "introductionVideo",
//     // "Work_Samples",
//     // "Training_details",
//     // "Projects",
//     // "Current_Salary",
//     // "Experience",
//     // "exprienceIn",
//     // "Email",
//     // "Number",
//     // "Image",
//     // "position_of_responsibility",
//     // "Skill_Set",
//     // "Additional_Info",
//     // "Joining_Date",
//     // "Resume",
//   ];

//   const fieldToQuestionMap = {
//     Name: "What is your name?",
//     Email: "What is your email address?",
//     Number: "What is your contact number?",
//     Image: "Please upload your profile picture.",
//     Website: "Do you have a personal website?",
//     Gender: "What is your gender?",
//     introductionVideo: "Please upload an introduction video.",
//     Address: "What is your address?",
//     highestQualification: "What is your highest qualification?",
//     position_of_responsibility:
//       "Have you held any positions of responsibility?",
//     Training_details: "Please provide your training details.",
//     Projects: "Have you worked on any projects?",
//     Skill_Set: "What skills do you possess?",
//     Work_Samples: "Please provide your work samples.",
//     Additional_Info: "Any additional information you'd like to add?",
//     Expected_Salary: "What is your expected salary?",
//     Current_Salary: "What is your current salary?",
//     Experience: "How many years of experience do you have?",
//     exprienceIn: "What is your experience in?",
//     Joining_Date: "When are you available to join?",
//     Resume: "Please upload your resume.",
//   };

//   const calculateMissingFields = (studentData) => {
//     let missingFieldsList = [];

//     requiredFields.forEach((field) => {
//       if (Array.isArray(studentData[field])) {
//         if (studentData[field].length === 0) {
//           missingFieldsList.push(field);
//         }
//       } else if (typeof studentData[field] === "string") {
//         if (!studentData[field].trim()) {
//           missingFieldsList.push(field);
//         }
//       } else if (typeof studentData[field] === "boolean") {
//         if (!studentData[field]) {
//           missingFieldsList.push(field);
//         }
//       } else if (!studentData[field]) {
//         missingFieldsList.push(field);
//       }
//     });

//     return missingFieldsList;
//   };

//   const Getstudentprofile = async () => {
//     try {
//       const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       const profileData = Getjobdata?.data?.data || {};
//       setProfile(profileData);

//       const missingFieldsList = calculateMissingFields(profileData);
//       setMissingFields(missingFieldsList);

//       if (missingFieldsList.length > 0) {
//         setCurrentQuestion(missingFieldsList[0]);
//       } else {
//         setCurrentQuestion(null);
//       }

//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     Getstudentprofile();
//   }, []);

//   const handleAnswerSubmission = async () => {
//     const updatedProfile = { ...profile, [currentQuestion]: inputValue };

//     try {
//       await PutApi("api/StudentRoutes/UpdateStudentProfile", updatedProfile);
//       setProfile(updatedProfile);

//       const remainingFields = missingFields.filter(
//         (field) => field !== currentQuestion
//       );

//       if (remainingFields.length > 0) {
//         setCurrentQuestion(remainingFields[0]);
//         setMissingFields(remainingFields);
//         setInputValue("");
//       } else {
//         setCurrentQuestion(null);
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Error updating ");
//     }
//   };

//   const handleSkipQuestion = () => {
//     const remainingFields = missingFields.filter(
//       (field) => field !== currentQuestion
//     );

//     if (remainingFields.length > 0) {
//       setCurrentQuestion(remainingFields[0]);
//       setMissingFields(remainingFields);
//       setInputValue("");
//     } else {
//       setCurrentQuestion(null);
//     }
//   };


//   const renderInputField = () => {
//     switch (currentQuestion) {
//       case "Gender":
//         return (
//           <div className="flex gap-2">
//             {["Male", "Female", "Other"].map((option) => (
//               <button
//                 key={option}
//                 onClick={() => setInputValue(option)}
//                 className={`px-4 py-2 rounded-full border ${
//                   inputValue === option ? "bg-blue-500 text-white" : "bg-white"
//                 }`}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         );

//       case "highestQualification":
//         return (
//           <div className="flex gap-2">
//             {["10th", "12th", "Graduate", "Post Graduate"].map((option) => (
//               <button
//                 key={option}
//                 onClick={() => setInputValue(option)}
//                 className={`px-4 py-2 rounded-full border ${
//                   inputValue === option ? "bg-blue-500 text-white" : "bg-white"
//                 }`}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         );

//       case "Expected_Salary":
//       case "Current_Salary":
//         return (
//           <div className="flex gap-2">
//             {["1-3", "3-5", "5+"].map((option) => (
//               <button
//                 key={option}
//                 onClick={() => setInputValue(option)}
//                 className={`text-xs px-2 py-1 rounded-xl border ${
//                   inputValue === option ? "bg-blue-500 text-white" : "bg-white"
//                 }`}
//               >
//                 {option} LPA
//               </button>
//             ))}
//           </div>
//         );

//       default:
//         return (
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className="border px-4 py-2 rounded-lg w-full"
//             placeholder="Enter..."
//           />
//         );
//     }
//   };

//   const renderCurrentQuestion = () => {
//     if (!currentQuestion) {
//       return (
//         <h6 className="text-[14px] font-sans text-gray-900">
//           Your profile is complete. Thank you!
//         </h6>
//       );
//     }

//     return (
//       <div>
//         <h6 className="text-[14px] font-sans text-gray-900 mb-3">
//           {fieldToQuestionMap[currentQuestion]}
//         </h6>
//         {renderInputField()}
//         <div className="flex gap-4 mt-3">
//           <button
//             onClick={handleAnswerSubmission}
//             className="bg-blue-500 text-white rounded-xl py-1 px-2 hover:bg-blue-600 transition-colors duration-200"
//           >
//             Submit Answer
//           </button>
//           <button
//             onClick={handleSkipQuestion}
//             className="bg-gray-500 text-white text-sm rounded-md py-1 px-2 hover:bg-gray-600 transition-colors duration-200"
//           >
//             Skip
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="border-2 sticky z-0 top-24 border-gray-300 rounded-2xl p-6 mt-3 max-2xl:h-[25%] min-h-[23%] max-h-[23%] bg-white w-[80%] shadow-lg hover:shadow-xl transition-shadow duration-300">
//       <div className="profile w-full flex flex-col justify-start items-start">
//         {loading ? (
//           <h6 className="text-[14px] font-sans text-gray-900">Loading...</h6>
//         ) : (
//           renderCurrentQuestion()
//         )}
//       </div>
//     </div>
//   );
 
  


// };

// export default Sidebar;

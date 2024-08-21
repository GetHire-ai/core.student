import React, { useState } from "react";
import { PostApi } from "../utilis/Api_Calling";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import {
  predefinedJobTitles,
  predefinedSkills,
  predefinedLocations,
} from "./SuggestionForRegister";
import axios from "axios";

const stepsHead = [
  "Personal Information",
  "Job Information",
  "Additional Information",
];

const AddDetails = ({ Email, Number }) => {
  const navigate = useNavigate();
  const [steps, setSteps] = useState(2);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [jobTitles, setJobTitles] = useState([]);
  const [skills, setSkills] = useState([]);
  const [locations, setLocations] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [jobData, setJobData] = useState({
    Name: "",
    Email,
    Number,
    Resume: "",
    highestQualification: "",
    Degree: "",
    youare: "fresher",
    Current_Salary: "",
    Expected_Salary: "",
    exprienceIn: "",
    Experience: "",
    jobTitles: [],
    skills: [],
    locations: [],
    values: [],
  });
  const [recomSkills, setRecomSkills] = useState([]);

  const [sugInputs, setSugInputs] = useState({
    jobTitles: "",
    locations: "",
    skills: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const fields = [
      { name: "Name", value: jobData.Name.trim() },
      { name: "Email", value: jobData.Email.trim() },
      { name: "Number", value: jobData.Number.trim() },
      {
        name: "highestQualification",
        value: jobData.highestQualification.trim(),
      },
      { name: "Degree", value: jobData.Degree.trim() },
      { name: "Expected_Salary", value: jobData.Expected_Salary.trim() },
    ];

    const arrayFields = [
      { name: "jobTitles", values: jobData.jobTitles },
      { name: "skills", values: jobData.skills },
      { name: "locations", values: jobData.locations },
    ];
    let isEmpty = false;
    fields.forEach((field) => {
      if (field.value === "") {
        toast.error(`${field.name} is required`, { autoClose: 1000 });
        isEmpty = true;
      }
    });

    arrayFields.forEach((field) => {
      if (!field.values || field.values.length === 0) {
        toast.error(`${field.name} is required`, { autoClose: 1000 });
        isEmpty = true;
      }
    });

    if (isEmpty) {
      setSteps(2);
      return;
    }

    let data = jobData;
    try {
      const responce = await PostApi("api/StudentRoutes/RegisterStudent", data);
      console.log(responce?.data);
      localStorage.setItem("StudentToken", responce?.data?.data?.token);
      localStorage.setItem("Studentid", responce?.data?.data?.Student?._id);
      localStorage.setItem("Studentdata", responce?.data?.data?.Student);
      toast.success(responce?.data?.message, { autoClose: 1000 });
      window.location.reload();
      navigate("/");
    } catch (error) {
      setSteps(2);
      if (error.response.data.message) {
        toast.error(error.response.data.message, { autoClose: 1000 });
      }
    }
  };

  const handleStep3 = () => {
    if (
      jobData.Name === "" ||
      jobData.Email === "" ||
      jobData.Number === "" ||
      jobData.highestQualification === ""
    ) {
      setFormSubmitted(true);
      toast.error("Please Enter required Details", {
        autoClose: 1000,
      });
    } else {
      setSteps(3);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setFormSubmitted(false);
    }
  };

  const handleStep4 = () => {
    setFormSubmitted(true);
    if (jobData.youare === "workingProfessional") {
      if (
        !jobData.Current_Salary ||
        !jobData.exprienceIn ||
        !jobData.Experience ||
        !jobData.Expected_Salary
      ) {
        toast.error("Please fill out all mandatory fields", {
          autoClose: 1000,
        });
        return;
      }
    }
    setSteps(4);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setFormSubmitted(false);
  };

  const handleStep5 = () => {
    setFormSubmitted(true);
    if (jobData.jobTitles.length === 0 || !jobData.skills.length === 0) {
      toast.error("Please fill out all mandatory fields", {
        autoClose: 1000,
      });
      return;
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      handleSubmit();
      setFormSubmitted(false);
    }
  };

  return (
    <>
      {steps === 2 && (
        <div className="flex min-w-[100vw] min-h-[100vh]">
          <div className="bg-blue-500 min-w-[22vw]">.</div>
          <div className="bg-blue-100 min-w-[1vw]"></div>
          <div className=" min-w-[77vw] flex flex-col justify-center p-10 items-center">
            <div className="w-full flex flex-col justify-center items-center">
              <Box sx={{ width: "50%" }}>
                <Stepper activeStep={activeStep}>
                  {stepsHead.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel
                          {...labelProps}
                          onClick={() => {
                            setActiveStep(index);
                            setSteps(index + 2);
                          }}
                        >
                          {label}
                        </StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </Box>
              <h5 className="text-2xl font-semibold text-gray-400">
                Personal Information
              </h5>
              <div className="w-1/2">
                <label
                  htmlFor="name"
                  className="text-lg font-semibold text-gray-400"
                >
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="first & lastname"
                  className={`bg-gray-100 min-w-full p-2 border rounded-md my-2 ${
                    formSubmitted && jobData.Name === "" ? "border-red-500" : ""
                  }`}
                  name="Name"
                  value={jobData.Name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 flex gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="name"
                    className="text-lg font-semibold text-gray-400"
                  >
                    Email Id*
                  </label>
                  <input
                    type="email"
                    disabled={Email}
                    placeholder="Enter Email"
                    className={`bg-gray-100 min-w-full p-2 border rounded-md my-2 ${
                      formSubmitted && jobData.Email === ""
                        ? "border-red-500"
                        : ""
                    }`}
                    name="Email"
                    value={jobData.Email}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="name"
                    className="text-lg font-semibold text-gray-400"
                  >
                    Number*
                  </label>
                  <input
                    type="Number"
                    disabled={Number}
                    placeholder="Enter Number"
                    className={`bg-gray-100 min-w-full p-2 border rounded-md my-2 ${
                      formSubmitted && jobData.Number === ""
                        ? "border-red-500"
                        : ""
                    }`}
                    name="Number"
                    value={jobData.Number}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="name"
                  className="text-lg flex justify-between font-semibold text-gray-400"
                >
                  <span>Upload Your CV (optional)</span>
                  <span className="text-sm font-semibold text-green-600">
                    CV Uploaded
                  </span>
                </label>
                <input
                  type="file"
                  placeholder="select file or Drag and drop"
                  className="bg-gray-100 text-gray-400 min-w-full text-center py-10 border rounded-md my-2"
                  name="resume"
                  onChange={(e) =>
                    setJobData({ ...jobData, resume: e.target.files[0] })
                  }
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="name"
                  className={`text-lg font-semibold text-gray-400 ${
                    formSubmitted && jobData.highestQualification === ""
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  Highest Qualification
                </label>
                <div className="flex justify-between gap-4 my-2">
                  {["High School", "Diploma", "Bachelor's", "Master's"].map(
                    (qual) => (
                      <span
                        key={qual}
                        className={`p-4 text-gray-500 font-semibold border rounded-md text-center cursor-pointer hover:bg-blue-100 hover:text-blue-600 hover:font-semibold ${
                          jobData.highestQualification === qual
                            ? "bg-blue-100 text-blue-600 font-semibold"
                            : ""
                        }`}
                        onClick={() =>
                          setJobData({
                            ...jobData,
                            highestQualification: qual,
                          })
                        }
                      >
                        {qual}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="name"
                  className="text-lg font-semibold text-gray-400"
                >
                  Name of Degree ( optional )
                </label>
                <select
                  className="bg-white text-gray-400 min-w-full p-3 border rounded-md my-2"
                  name="Degree"
                  value={jobData.Degree}
                  onChange={handleChange}
                >
                  <option value="">Select highestQualification</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="BCA">BCA</option>
                </select>
                <span className="text-white bg-blue-400 rounded-full py-1 px-4 text-sm">
                  BCA{" "}
                </span>
              </div>
              <button
                className="w-1/2 font-bold bg-[#389fff] text-white rounded py-3 mt-5 hover:bg-blue-400"
                onClick={handleStep3}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {steps === 3 && (
        <div className="flex min-w-[100vw] min-h-[100vh]">
          <div className="bg-blue-500 min-w-[22vw]">.</div>
          <div className="bg-blue-100 min-w-[1vw]"></div>
          <div className=" min-w-[77vw] flex flex-col justify-start p-10 items-center">
            <div className="w-full flex flex-col justify-start items-center pt-10">
              <Box sx={{ width: "50%" }}>
                <Stepper activeStep={activeStep}>
                  {stepsHead.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel
                          {...labelProps}
                          onClick={() => {
                            setActiveStep(index);
                            setSteps(index + 2);
                          }}
                        >
                          {label}
                        </StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </Box>
              <h5 className="text-gray-500 text-3xl font-semibold mb-3">
                Work Experience
              </h5>
              <div className="w-1/2 mt-4">
                <label
                  htmlFor="name"
                  className="text-xl font-semibold text-gray-400"
                >
                  You are a?*
                </label>
                <div className="flex justify-between gap- my-2 min-w-full">
                  <span
                    onClick={() => {
                      setJobData((prev) => ({ ...prev, youare: "fresher" }));
                    }}
                    className={`p-4 w-[47%] cursor-pointer font-semibold text-gray-500 border rounded-md text-center hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 ${
                      jobData.youare === "fresher"
                        ? "text-blue-500 bg-blue-50 border-blue-500"
                        : ""
                    }`}
                  >
                    Fresher
                  </span>
                  <span
                    onClick={() => {
                      setJobData((prev) => ({
                        ...prev,
                        youare: "workingProfessional",
                      }));
                    }}
                    className={`p-4 w-[47%] cursor-pointer font-semibold text-gray-500 border rounded-md text-center hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 ${
                      jobData.youare === "workingProfessional"
                        ? "text-blue-500 bg-blue-50 border-blue-500"
                        : ""
                    }`}
                  >
                    Working Professional
                  </span>
                </div>
              </div>
              {jobData.youare === "fresher" && (
                <>
                  <div className="w-1/2 mt-5">
                    <label
                      htmlFor="name"
                      className="text-xl font-semibold text-gray-400 mt-2"
                    >
                      Expected Annual CTC
                    </label>
                    <select
                      className={`bg-gray-100 min-w-full p-3 border rounded-md my-2 bg-white text-gray-600 ${
                        formSubmitted && !jobData.Expected_Salary
                          ? "border-red-500"
                          : ""
                      }`}
                      name="Expected_Salary"
                      value={jobData.Expected_Salary}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="3-6LPA">3-6LPA</option>
                      <option value="6-9LPA">6-9LPA</option>
                      <option value="9+LPA">9+LPA</option>
                    </select>
                    {jobData.Expected_Salary && (
                      <span className="text-blue-600 bg-blue-100 rounded-full py-1 px-4 text-sm font-semibold cursor-pointer">
                        {jobData.Expected_Salary}
                      </span>
                    )}
                  </div>
                </>
              )}
              {jobData.youare === "workingProfessional" && (
                <>
                  <div className="w-1/2 mt-5">
                    <label
                      htmlFor="name"
                      className="text-xl font-semibold text-gray-400 mt-2"
                    >
                      Current/Last CTC
                    </label>
                    <select
                      className={`bg-gray-100 min-w-full p-3 border rounded-md my-2 bg-white text-gray-600 ${
                        formSubmitted && !jobData.Current_Salary
                          ? "border-red-500"
                          : ""
                      }`}
                      name="Current_Salary"
                      value={jobData.Current_Salary}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="3-6LPA">3-6LPA</option>
                      <option value="6-9LPA">6-9LPA</option>
                      <option value="9+LPA">9+LPA</option>
                    </select>
                    {jobData.Current_Salary && (
                      <span className="text-blue-600 bg-blue-100 rounded-full py-1 px-4 text-sm font-semibold cursor-pointer">
                        {jobData.Current_Salary}
                      </span>
                    )}
                  </div>
                  <div className="w-1/2 mt-1">
                    <label
                      htmlFor="name"
                      className="text-xl font-semibold text-gray-400 mt-2"
                    >
                      industries you're experinced in ?
                    </label>
                    <select
                      className={`bg-gray-100 min-w-full p-3 border rounded-md my-2  text-gray-600 ${
                        formSubmitted && !jobData.exprienceIn
                          ? "border-red-500"
                          : ""
                      }`}
                      name="exprienceIn"
                      value={jobData.exprienceIn}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Sales">Sales</option>
                      <option value="IT">IT</option>
                      <option value="Medicare">Medicare</option>
                      <option value="Finance">Finance</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Retail">Retail</option>
                      <option value="Hospitality">Hospitality</option>
                    </select>
                    {jobData.exprienceIn && (
                      <span className="text-blue-600 bg-blue-100 rounded-full py-1 px-4 text-sm font-semibold cursor-pointer">
                        {jobData.exprienceIn}
                      </span>
                    )}
                  </div>
                  <div className="w-1/2 mt-5">
                    <label
                      htmlFor="name"
                      className="text-xl font-semibold text-gray-400 mt-2"
                    >
                      Total years of experience
                    </label>
                    <select
                      className={`bg-gray-100 min-w-full p-3 border rounded-md my-2  text-gray-600 ${
                        formSubmitted && !jobData.Experience
                          ? "border-red-500"
                          : ""
                      }`}
                      name="Experience"
                      value={jobData.Experience}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="1-3 Years">1-3 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                    {jobData.Experience && (
                      <span className="text-blue-600 bg-blue-100 rounded-full py-1 px-4 text-sm font-semibold cursor-pointer">
                        {jobData.Experience}
                      </span>
                    )}
                  </div>
                  <div className="w-1/2 mt-5">
                    <label
                      htmlFor="name"
                      className="text-xl font-semibold text-gray-400 mt-2"
                    >
                      Expected Annual CTC
                    </label>
                    <select
                      className={`bg-gray-100 min-w-full p-3 border rounded-md my-2 bg-white text-gray-600 ${
                        formSubmitted && !jobData.Expected_Salary
                          ? "border-red-500"
                          : ""
                      }`}
                      name="Expected_Salary"
                      value={jobData.Expected_Salary}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="3-6LPA">3-6LPA</option>
                      <option value="6-9LPA">6-9LPA</option>
                      <option value="9+LPA">9+LPA</option>
                    </select>
                    {jobData.Expected_Salary && (
                      <span className="text-blue-600 bg-blue-100 rounded-full py-1 px-4 text-sm font-semibold cursor-pointer">
                        {jobData.Expected_Salary}
                      </span>
                    )}
                  </div>
                </>
              )}
              <button
                className="w-1/2 font-bold bg-[#389fff] text-white rounded py-3 mt-5 hover:bg-blue-400"
                onClick={handleStep4}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {steps === 4 && (
        <div className="flex min-w-[100vw] min-h-[100vh]">
          <div className="bg-blue-500 min-w-[22vw]">.</div>
          <div className="bg-blue-100 min-w-[1vw]"></div>
          <div className=" min-w-[77vw] flex flex-col justify-start p-5 items-center">
            <div className="w-full flex flex-col justify-start items-center">
              <Box sx={{ width: "50%" }}>
                <Stepper activeStep={activeStep}>
                  {stepsHead.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel
                          {...labelProps}
                          onClick={() => {
                            setActiveStep(index);
                            setSteps(index + 2);
                          }}
                        >
                          {label}
                        </StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </Box>
              <h5 className="text-gray-500 text-2xl font-semibold mb-2 mt-5">
                Additioanl Information
              </h5>
              <div className="w-1/2 mt-5">
                <label
                  htmlFor="name"
                  className="text-xl font-semibold text-gray-400 mt-2"
                >
                  Your Job Title ( Add atleast 2 job titles )
                </label>
                <div className="mb-2">
                  <input
                    name="jobTitles"
                    value={sugInputs.jobTitles}
                    type="text"
                    className={`mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      formSubmitted && jobData.jobTitles.length === 0
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="eg. Software Engineer"
                    onChange={(e) => {
                      const input = e.target.value;
                      setSugInputs((prev) => ({
                        ...prev,
                        jobTitles: input,
                      }));
                      if (input.trim() !== "") {
                        const Suggestions = predefinedJobTitles.filter(
                          (title) =>
                            title.toLowerCase().includes(input.toLowerCase())
                        );
                        setJobTitles(Suggestions);
                      } else {
                        setJobTitles([]);
                      }
                      setSelectedSuggestionIndex(-1);
                    }}
                    onKeyDown={async (e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (
                          selectedSuggestionIndex !== -1 &&
                          jobTitles.length > 0
                        ) {
                          const newTitle = jobTitles[selectedSuggestionIndex];
                          setJobData((prevJobData) => {
                            if (!prevJobData.jobTitles.includes(newTitle)) {
                              return {
                                ...prevJobData,
                                jobTitles: [...prevJobData.jobTitles, newTitle],
                              };
                            }
                            return prevJobData;
                          });
                          setSugInputs((prev) => ({
                            ...prev,
                            jobTitles: "",
                          }));
                          setJobTitles([]);
                          try {
                            const response = await axios.post(
                              "https://get-hire-ai.vercel.app/job-suggestion",
                              {
                                jobTitle: jobData?.jobTitles,
                                suggestionFor:
                                  "Skill Required i send array in jobtitles so send skills fir all send all skills in  strings comma seprate",
                              },
                              {
                                headers: {
                                  "Content-Type": "application/json",
                                  Accept: "application/json",
                                },
                              }
                            );
                            const newSkills = response?.data?.res
                              .split(",")
                              .map((skill) => skill.trim());
                            setRecomSkills(newSkills);
                          } catch (error) {
                            console.log(error);
                          }
                          setSelectedSuggestionIndex(-1);
                        } else if (sugInputs.jobTitles.trim() !== "") {
                          const newTitle = sugInputs.jobTitles.trim();
                          setJobData((prevJobData) => {
                            if (!prevJobData.jobTitles.includes(newTitle)) {
                              return {
                                ...prevJobData,
                                jobTitles: [...prevJobData.jobTitles, newTitle],
                              };
                            }
                            return prevJobData;
                          });
                          setSugInputs((prev) => ({
                            ...prev,
                            jobTitles: "",
                          }));
                          setJobTitles([]);
                        }
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        setSelectedSuggestionIndex((prev) =>
                          prev > 0 ? prev - 1 : jobTitles.length - 1
                        );
                      } else if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setSelectedSuggestionIndex((prev) =>
                          prev < jobTitles.length - 1 ? prev + 1 : 0
                        );
                      }
                    }}
                  />
                  {jobTitles.length > 0 && (
                    <ul className="bg-white border border-gray-300 rounded-md mt-2">
                      {jobTitles.map((title, index) => (
                        <li
                          key={index}
                          className={`p-2 cursor-pointer hover:bg-gray-200 ${
                            index === selectedSuggestionIndex
                              ? "bg-gray-200"
                              : ""
                          }`}
                          onClick={async () => {
                            setJobData((prev) => {
                              setSugInputs((prev1) => ({
                                ...prev1,
                                jobTitles: "",
                              }));
                              if (!prev.jobTitles.includes(title)) {
                                const updatedJobTitles = [
                                  ...prev.jobTitles,
                                  title,
                                ];
                                setJobTitles([]);
                                return {
                                  ...prev,
                                  jobTitles: updatedJobTitles,
                                };
                              }
                              setJobTitles([]);
                              return prev;
                            });
                            try {
                              const response = await axios.post(
                                "https://get-hire-ai.vercel.app/job-suggestion",
                                {
                                  jobTitle: jobData?.jobTitles,
                                  suggestionFor:
                                    "Skill Required i send array in jobtitles so send skills fir all send all skills in  strings comma seprate",
                                },
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                  },
                                }
                              );
                              const newSkills = response?.data?.res
                                .split(",")
                                .map((skill) => skill.trim());
                              setRecomSkills(newSkills);
                            } catch (error) {
                              console.log(error);
                            }
                            setSelectedSuggestionIndex(-1);
                          }}
                        >
                          {title}
                        </li>
                      ))}
                    </ul>
                  )}
                  {jobData.jobTitles && jobData.jobTitles.length > 0 && (
                    <div className="flex flex-wrap">
                      {jobData.jobTitles.map((title, i) => (
                        <span
                          key={i}
                          className="text-blue-600 bg-blue-100 rounded-full py-1 px-4 text-sm font-semibold cursor-pointer m-2 hover:bg-red-100"
                          onClick={() => {
                            setJobData((prevJobData) => ({
                              ...prevJobData,
                              jobTitles: prevJobData.jobTitles.filter(
                                (t) => t !== title
                              ),
                            }));
                          }}
                        >
                          {title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-1/2 mt-1">
                <label
                  htmlFor="name"
                  className="text-xl font-semibold text-gray-400 mt-2"
                >
                  Your Skills ( Add at least three skills )
                </label>
                <input
                  name="skills"
                  value={sugInputs.skills}
                  type="text"
                  className={`mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    formSubmitted && jobData.skills.length === 0
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="eg. Java..."
                  onChange={(e) => {
                    const input = e.target.value;
                    setSugInputs((prev) => ({
                      ...prev,
                      skills: input,
                    }));
                    if (input.trim() !== "") {
                      const Suggestions = predefinedSkills.filter((name) =>
                        name.toLowerCase().includes(input.toLowerCase())
                      );
                      setSkills(Suggestions);
                    } else {
                      setSkills([]);
                    }
                    setSelectedSuggestionIndex(-1);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // Prevent form submission
                      if (selectedSuggestionIndex !== -1 && skills.length > 0) {
                        const newSkill = skills[selectedSuggestionIndex];
                        setJobData((prevJobData) => {
                          if (!prevJobData.skills.includes(newSkill)) {
                            return {
                              ...prevJobData,
                              skills: [...prevJobData.skills, newSkill],
                            };
                          }
                          return prevJobData;
                        });
                        setSugInputs((prev) => ({
                          ...prev,
                          skills: "",
                        }));
                        setSkills([]);
                        setSelectedSuggestionIndex(-1);
                      } else if (sugInputs.skills.trim() !== "") {
                        const newSkill = sugInputs.skills.trim();
                        setJobData((prevJobData) => {
                          if (!prevJobData.skills.includes(newSkill)) {
                            return {
                              ...prevJobData,
                              skills: [...prevJobData.skills, newSkill],
                            };
                          }
                          return prevJobData;
                        });
                        setSugInputs((prev) => ({
                          ...prev,
                          skills: "",
                        }));
                        setSkills([]);
                      }
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setSelectedSuggestionIndex((prev) =>
                        prev > 0 ? prev - 1 : skills.length - 1
                      );
                    } else if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setSelectedSuggestionIndex((prev) =>
                        prev < skills.length - 1 ? prev + 1 : 0
                      );
                    }
                  }}
                />
                {skills.length > 0 && (
                  <ul className="bg-white border border-gray-300 rounded-md mt-2">
                    {skills.map((name, index) => (
                      <li
                        key={index}
                        className={`p-2 cursor-pointer hover:bg-gray-200 ${
                          index === selectedSuggestionIndex ? "bg-gray-200" : ""
                        }`}
                        onClick={() => {
                          setJobData((prev) => {
                            setSugInputs((prev1) => ({
                              ...prev1,
                              skills: "",
                            }));
                            if (!prev.skills.includes(name)) {
                              const updatedSkills = [...prev.skills, name];
                              setSkills([]);
                              return {
                                ...prev,
                                skills: updatedSkills,
                              };
                            }
                            setSkills([]);
                            return prev;
                          });
                          setSelectedSuggestionIndex(-1);
                        }}
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                )}
                {jobData.skills && jobData.skills.length > 0 && (
                  <div className="flex flex-wrap">
                    {jobData.skills.map((title, i) => (
                      <span
                        key={i}
                        className="text-blue-600 bg-blue-100 rounded-full py-1 px-4 text-sm font-semibold cursor-pointer m-2 hover:bg-red-100"
                        onClick={() => {
                          setJobData((prevJobData) => ({
                            ...prevJobData,
                            skills: prevJobData.skills.filter(
                              (t) => t !== title
                            ),
                          }));
                        }}
                      >
                        {title}
                      </span>
                    ))}
                  </div>
                )}
                {recomSkills.length !== 0 && (
                  <>
                    <div className="text-lg font-semibold text-gray-400 mt-2">
                      AI Recomended Skill
                    </div>
                    <hr />
                    <div className="flex flex-wrap">
                      {recomSkills?.map((skill, index) => (
                        <div
                          className="text-blue-600 border border-blue-100  rounded-full py-1 px-4 text-sm font- cursor-pointer m-2 hover:bg-blue-100"
                          onClick={() => {
                            const updatedSkills = [...jobData.skills, skill];
                            setJobData((prev) => ({
                              ...prev,
                              skills: updatedSkills,
                            }));
                            setRecomSkills((prev) =>
                              prev.filter((s, i) => i !== index)
                            );
                          }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="w-1/2 mt-1">
                <label
                  htmlFor="name"
                  className="text-xl font-semibold text-gray-400 mt-2"
                >
                  Location (you can add multiple)
                </label>
                <input
                  name="locations"
                  value={sugInputs.locations}
                  type="text"
                  className={`mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    formSubmitted && jobData.locations.length === 0
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="eg. Mumbai"
                  onChange={(e) => {
                    const input = e.target.value;
                    setSugInputs((prev) => ({
                      ...prev,
                      locations: input,
                    }));
                    if (input.trim() !== "") {
                      const Suggestions = predefinedLocations.filter((name) =>
                        name.toLowerCase().includes(input.toLowerCase())
                      );
                      setLocations(Suggestions);
                    } else {
                      setLocations([]);
                    }
                    setSelectedSuggestionIndex(-1); // Reset suggestion index on input change
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // Prevent form submission
                      if (
                        selectedSuggestionIndex !== -1 &&
                        locations.length > 0
                      ) {
                        const newLocation = locations[selectedSuggestionIndex];
                        setJobData((prevJobData) => {
                          if (!prevJobData.locations.includes(newLocation)) {
                            return {
                              ...prevJobData,
                              locations: [
                                ...prevJobData.locations,
                                newLocation,
                              ],
                            };
                          }
                          return prevJobData;
                        });
                        setSugInputs((prev) => ({
                          ...prev,
                          locations: "",
                        }));
                        setLocations([]);
                        setSelectedSuggestionIndex(-1);
                      } else if (sugInputs.locations.trim() !== "") {
                        const newLocation = sugInputs.locations.trim();
                        setJobData((prevJobData) => {
                          if (!prevJobData.locations.includes(newLocation)) {
                            return {
                              ...prevJobData,
                              locations: [
                                ...prevJobData.locations,
                                newLocation,
                              ],
                            };
                          }
                          return prevJobData;
                        });
                        setSugInputs((prev) => ({
                          ...prev,
                          locations: "",
                        }));
                        setLocations([]);
                      }
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setSelectedSuggestionIndex((prev) =>
                        prev > 0 ? prev - 1 : locations.length - 1
                      );
                    } else if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setSelectedSuggestionIndex((prev) =>
                        prev < locations.length - 1 ? prev + 1 : 0
                      );
                    }
                  }}
                />
                {locations.length > 0 && (
                  <ul className="bg-white border border-gray-300 rounded-md mt-2">
                    {locations.map((name, index) => (
                      <li
                        key={index}
                        className={`p-2 cursor-pointer hover:bg-gray-200 ${
                          index === selectedSuggestionIndex ? "bg-gray-200" : ""
                        }`}
                        onClick={() => {
                          setJobData((prevJobData) => {
                            setSugInputs((prev) => ({
                              ...prev,
                              locations: "",
                            }));
                            if (!prevJobData.locations.includes(name)) {
                              const updatedLocations = [
                                ...prevJobData.locations,
                                name,
                              ];
                              setLocations([]);
                              return {
                                ...prevJobData,
                                locations: updatedLocations,
                              };
                            }

                            setLocations([]);
                            return prevJobData;
                          });
                        }}
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                )}
                {jobData.locations && jobData.locations.length > 0 && (
                  <div className="flex flex-wrap">
                    {jobData.locations.map((title, i) => (
                      <span
                        key={i}
                        className="text-blue-600 bg-blue-100 rounded-full py-1 px-4 text-sm font-semibold cursor-pointer m-2 hover:bg-red-100"
                        onClick={() => {
                          setJobData((prevJobData) => ({
                            ...prevJobData,
                            locations: prevJobData.locations.filter(
                              (t) => t !== title
                            ),
                          }));
                        }}
                      >
                        {title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-1/2 mt-1">
                <label
                  htmlFor="values"
                  className="text-xl font-semibold text-gray-400 mt-2"
                >
                  Gethire.ai value (You can add multiple)
                </label>
                <div className="flex flex-wrap justify-between gap-4 my-2">
                  {[
                    "Friendliness",
                    "Teamwork",
                    "Honesty",
                    "Truthfulness",
                    "Kindness",
                    "Helpfulness",
                    "Reliability",
                  ].map((value) => (
                    <span
                      key={value}
                      className={`p-4 text-gray-500 font-semibold border rounded-md text-center cursor-pointer ${
                        jobData.values.includes(value)
                          ? "bg-blue-100 text-blue-600 font-semibold border-blue-500"
                          : "hover:bg-blue-100 hover:text-blue-600"
                      }`}
                      onClick={() =>
                        setJobData((prevData) => ({
                          ...prevData,
                          values: prevData.values.includes(value)
                            ? prevData.values.filter((v) => v !== value)
                            : [...prevData.values, value],
                        }))
                      }
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="mt-8 w-1/2 font-bold text-lg bg-blue-400 text-white rounded py-3 mt-2 hover:bg-blue-500"
                onClick={handleStep5}
              >
                Find Your Job
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddDetails;

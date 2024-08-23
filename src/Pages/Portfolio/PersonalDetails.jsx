import React, { useEffect, useState } from "react";
import { RiEditLine } from "react-icons/ri";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { GetApi, PutApi } from "../utilis/Api_Calling";

const PersonalDetails = ({ profile, updateProfile, loading }) => {
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingField, setIsEditingField] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setDetails(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    Getstudentprofile();
  }, []);

  const jobTitles = [
    "Recruiter",
    "HR Manager",
    "Software Engineer",
    "Data Analyst",
  ];
  const locations = [
    "Indore, Madhya Pradesh, India",
    "Bhopal, Madhya Pradesh, India",
    "Mumbai, Maharashtra, India",
    "Pune, Maharashtra, India",
  ];

  const handleEditPersonalClick = () => {
    setIsEditingPersonal(!isEditingPersonal);
  };

  const handleChangePersonal = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSavePersonalClick = () => {
    setIsEditingPersonal(false);
    updateProfile(details);
  };

  const handleEditFieldClick = (field) => {
    setIsEditingField(field);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSaveFieldClick = () => {
    setIsEditingField(null);
    updateProfile(details);
  };

  const [pdfFile, setPdfFile] = useState(null);
  const handlePDFUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handlejobTitlesChange = (event, newValue) => {
    setDetails({ ...details, jobTitles: newValue });
  };

  const handlelocationsChange = (event, newValue) => {
    setDetails({ ...details, locations: newValue });
  };

  if (loading && details === null) return <>Loading</>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-6 -ml-0">
      <h2 className="text-xl font-semibold mb-4 -ml-4">About</h2>
      <div className="bg-white p-2 -ml-1 rounded flex flex-col ">
        <p className=" -mb-2">Your resume</p>
        <div className="flex felx-row justify-between items-center">
          <div className="flex flex-row gap-2">
            <p>Resume1.pdf</p>
            <a href="#" className="text-blue-500 hover:underline duration-500">
              view
            </a>
          </div>
          <div>
            <div className="flex flex-col ">
              <div className="w-80 p-4 bg-white ">
                <input
                  type="file"
                  id="upload"
                  accept="application/pdf"
                  onChange={handlePDFUpload}
                  className="hidden"
                />
                <label
                  htmlFor="upload"
                  className="cursor-pointer inline-block px-4 py-2 text-orange-400 font-medium text-sm underline text-center"
                >
                  {pdfFile ? "PDF Uploaded: " + pdfFile.Name : "Upload again"}
                </label>
                {pdfFile && (
                  <div className="mt-4 text-center">
                    <p className="text-gray-600">
                      Uploaded File: {pdfFile.Name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 mt-2">
        <h2 className="text-xl -ml-4 font-semibold">Your personal details?</h2>
        <button
          className="text-blue-600 hover:text-blue-800 focus:outline-none"
          onClick={handleEditPersonalClick}
        >
          <RiEditLine size={20} />
          {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-6.036a2.5 2.5 0 113.536 3.536L7.5 21H3v-4.5L16.732 3.732z"
                    />
                </svg> */}
        </button>
      </div>

      <div className="space-y-4 mt-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start justify-center">
            <label className="text-sm font-medium">Name</label>
            {isEditingPersonal ? (
              <input
                type="text"
                Name="Name"
                value={details?.Name}
                onChange={handleChangePersonal}
                // className="border border-gray-300 rounded-lg p-2 w-full ml-4"
                className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
              />
            ) : (
              <p className="text-stone-600 from-neutral-500">{details?.Name}</p>
            )}
          </div>

          <div className="flex flex-col items-start justify-center">
            <label className="text-sm font-medium">Email</label>
            {isEditingPersonal ? (
              <input
                type="Email"
                Name="Email"
                value={details?.Email}
                onChange={handleChangePersonal}
                className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                // className="border border-gray-300 rounded-lg p-2 w-full ml-4"
              />
            ) : (
              <p className="text-stone-600 from-neutral-500">
                {details?.Email}
              </p>
            )}
          </div>
        </div>

        <div className="pt-7">
          <label className="text-sm font-medium">Your profile summary</label>
          {isEditingPersonal ? (
            <textarea
              Name="summary"
              value={details?.summary}
              onChange={handleChangePersonal}
              className="border border-gray-300 rounded-lg p-2 w-full mt-2"
            />
          ) : (
            <p className="text-stone-600 border-2 p-4 rounded-md mt-2 border-gray-400 from-neutral-500">
              {details?.summary}
            </p>
          )}
        </div>

        <div className="flex flex-row justify-between pt-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-start">
              <label className="text-sm font-medium">Your DOB</label>
              {isEditingPersonal ? (
                <input
                  type="text"
                  Name="dob"
                  placeholder="dd-mm-yyyy"
                  value={details?.dob}
                  onChange={handleChangePersonal}
                  className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                  // className="border border-gray-300 rounded-lg p-2 w-full"
                />
              ) : (
                <p className="text-stone-600 text-[14px] from-neutral-500">
                  {details?.dob}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-between">
              <label className="text-sm font-medium">Number number</label>
              {isEditingPersonal ? (
                <input
                  type="text"
                  Name="Number"
                  value={details?.Number}
                  onChange={handleChangePersonal}
                  className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
                  // className="border border-gray-300 rounded-lg p-2 w-full"
                />
              ) : (
                <p className="text-stone-600 from-neutral-500">
                  {details?.Number}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between">
              <label className="text-sm font-medium">Your gender</label>
              {isEditingPersonal ? (
                <div className=" flex flex-row justify-between gap-3">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      Name="gender"
                      value="Male"
                      checked={details?.gender === "Male"}
                      onChange={handleChangePersonal}
                      className="form-radio"
                    />
                    <span className="">Male</span>
                  </label>
                  <label className="inline-flex items-center ">
                    <input
                      type="radio"
                      Name="gender"
                      value="Female"
                      checked={details?.gender === "Female"}
                      onChange={handleChangePersonal}
                      className="form-radio"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      Name="gender"
                      value="Other"
                      checked={details?.gender === "Other"}
                      onChange={handleChangePersonal}
                      className="form-radio"
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
              ) : (
                <p className="text-stone-600 from-neutral-500">
                  {details?.gender}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {isEditingPersonal && (
        <button
          className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          onClick={handleSavePersonalClick}
        >
          Save
        </button>
      )}

      <div className="p-4 space-y-4 mt-8">
        <p className="text-lg -ml-9 font-semibold">
          Your professional details?
        </p>
        <div className="flex justify-between items-center -ml-3 ">
          <div className="flex flex-col">
            <p className="text-sm font-medium">locations</p>
            {isEditingField === "locations" ? (
              <div className="w-[50vw] ">
                <Autocomplete
                  multiple
                  fullWidth
                  options={locations}
                  value={details.locations}
                  onChange={handlelocationsChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            ) : (
              <div>
                <p>{details.locations}</p>
              </div>
            )}
          </div>

          {!isEditingField && (
            <button
              onClick={() => handleEditFieldClick("locations")}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <RiEditLine size={20} color="blue" />
            </button>
          )}
          {isEditingField === "locations" && (
            <button
              onClick={handleSaveFieldClick}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          )}
        </div>

        <div className="flex justify-between items-center -ml-3">
          <div className="flex flex-col">
            <p className="text-sm font-medium">Job Title</p>
            {isEditingField === "jobTitles" ? (
              <Autocomplete
                multiple
                options={jobTitles}
                value={details.jobTitles}
                onChange={handlejobTitlesChange}
                renderInput={(params) => <TextField {...params} />}
              />
            ) : (
              <span>{details.jobTitles}</span>
            )}
          </div>

          {!isEditingField && (
            <button
              onClick={() => handleEditFieldClick("jobTitles")}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <RiEditLine size={20} color="blue" />
            </button>
          )}
          {isEditingField === "jobTitles" && (
            <button
              onClick={handleSaveFieldClick}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          )}
        </div>

        <div className="flex justify-between items-center -ml-3">
          <div className="flex flex-col">
            <p className="text-sm font-medium">Work Experience</p>
            {isEditingField === "Experience" ? (
              <select
                Name="Experience"
                value={details.Experience}
                onChange={handleFieldChange}
                className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
              >
                <option value="1-2">1-2 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5-7">5-7 Years</option>
                <option value="7+">7+ Years</option>
              </select>
            ) : (
              <span>{details.Experience} Years</span>
            )}
          </div>

          {!isEditingField && (
            <button
              onClick={() => handleEditFieldClick("Experience")}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <RiEditLine size={20} color="blue" />
            </button>
          )}
          {isEditingField === "Experience" && (
            <button
              onClick={handleSaveFieldClick}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          )}
        </div>

        <div className="flex justify-between items-center -ml-3">
          <div className="flex flex-col">
            <p className="text-sm font-medium">Annual Compensation</p>
            {isEditingField === "Current_Salary" ? (
              <select
                Name="Current_Salary"
                value={details.Current_Salary}
                onChange={handleFieldChange}
                className=" border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full transition-colors duration-300"
              >
                <option value="1.2-3">1.2-3 LPA</option>
                <option value="3-5">3-5 LPA</option>
                <option value="5-7">5-7 LPA</option>
                <option value="7-10">7-10 LPA</option>
              </select>
            ) : (
              <span>{details.Current_Salary} LPA</span>
            )}
          </div>

          {!isEditingField && (
            <button
              onClick={() => handleEditFieldClick("Current_Salary")}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <RiEditLine size={20} color="blue" />
            </button>
          )}
          {isEditingField === "Current_Salary" && (
            <button
              onClick={handleSaveFieldClick}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
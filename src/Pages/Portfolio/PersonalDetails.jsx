import React, { useEffect, useState } from "react";
import { RiEditLine } from "react-icons/ri";
import {
  Modal,
  Box,
  Typography,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import { GetApi, putformdataApi } from "../utilis/Api_Calling";
import { toast } from "react-toastify";

const PersonalDetails = ({ profile, updateProfile, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [isEditingField, setIsEditingField] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  // const [Loading, setLoading] = useState(false);
  const handleResumeModalOpen = () => {
    setIsResumeModalOpen(true);
  };

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

  const handleChangePersonal = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
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

  const handlePDFUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      let data = {
        Resume: file,
      };
      try {
        await putformdataApi(`api/StudentRoutes/UpdateStudentProfile`, data);
        toast.success("Resume Update Successfully", {
          autoClose: 1000,
        });
      } catch (error) {
        console.log(error.response);
        toast.error("Resume Update Failed", { autoClose: 1000 });
      }
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setDetails(Getjobdata?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlejobTitlesChange = (event, newValue) => {
    setDetails({ ...details, jobTitles: newValue });
  };

  const handlelocationsChange = (event, newValue) => {
    setDetails({ ...details, locations: newValue });
  };

  if (loading && details === null) return <>Loading</>;

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">About</h2>
      <Modal
        open={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      >
        <Box className="modal-content">
          <Typography variant="h6" component="h2">
            Resume Preview
          </Typography>
          <iframe
            src={details?.Resume} // Assuming details.Resume contains the URL to the PDF
            style={{ width: "100%", height: "500px" }}
            title="Resume Preview"
          />
          {details.Resume}
          <Button onClick={() => setIsResumeModalOpen(false)}>Close</Button>
        </Box>
      </Modal>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <span
          className="text-blue-500 hover:underline"
          onClick={handleResumeModalOpen}
        >
          Your Resume
        </span>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-gray-700">.</p>
          </div>
          <div className="flex flex-col items-end">
            <input
              type="file"
              id="upload"
              accept="application/pdf"
              onChange={handlePDFUpload}
              className="hidden"
            />
            <label
              htmlFor="upload"
              className="cursor-pointer text-blue-600 hover:underline"
            >
              {pdfFile ? `PDF Uploaded: ${pdfFile.Name}` : "Upload again"}
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 mt-6 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Your Personal Details
          </h2>
          <button
            className="text-blue-600 hover:text-blue-800 focus:outline-none"
            onClick={handleEditClick}
          >
            <RiEditLine size={20} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="text-sm font-medium text-gray-600">Name</label>
              <p className="text-gray-800">{details?.Name}</p>
            </div>
            <div className="w-1/2 pl-2">
              <label className="text-sm font-medium text-gray-600">Email</label>
              <p className="text-gray-800">{details?.Email}</p>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Profile Summary
            </label>
            <p className="text-gray-800 mt-2 p-4 bg-gray-50 rounded-md border border-gray-300">
              {details?.summary}
            </p>
          </div>

          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="text-sm font-medium text-gray-600">DOB</label>
              <p className="text-gray-800">{details?.dob}</p>
            </div>
            <div className="w-1/2 pl-2">
              <label className="text-sm font-medium text-gray-600">
                Number
              </label>
              <p className="text-gray-800">{details?.Number}</p>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Gender</label>
            <p className="text-gray-800">{details?.gender}</p>
          </div>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="flex justify-center items-center"
      >
        <Box
          sx={{
            width: 400,
            p: 4,
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Edit Personal Details
          </Typography>
          <div className="mt-4 space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="Name"
                value={details?.Name}
                onChange={handleChangePersonal}
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="Email"
                value={details?.Email}
                onChange={handleChangePersonal}
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">Profile Summary</label>
              <textarea
                name="summary"
                value={details?.summary}
                onChange={handleChangePersonal}
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">DOB</label>
              <input
                type="text"
                name="dob"
                value={details?.dob}
                onChange={handleChangePersonal}
                placeholder="dd-mm-yyyy"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">Number</label>
              <input
                type="text"
                name="Number"
                value={details?.Number}
                onChange={handleChangePersonal}
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">Gender</label>
              <div className="flex gap-4 mt-2">
                {["Male", "Female", "Other"].map((gender) => (
                  <label key={gender} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={details?.gender === gender}
                      onChange={handleChangePersonal}
                      className="form-radio"
                    />
                    <span className="ml-2">{gender}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            className="mt-6"
            onClick={() => {
              setIsModalOpen(false);
              updateProfile(details);
            }}
          >
            Save
          </Button>
        </Box>
      </Modal>

      <div className="bg-white rounded-lg p-6 mt-8 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Professional Details
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <label className="text-sm font-medium text-gray-600">
                Locations
              </label>
              {isEditingField === "locations" ? (
                <Autocomplete
                  multiple
                  fullWidth
                  options={locations}
                  value={details.locations}
                  onChange={handlelocationsChange}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-800 -mt-1">{details.locations}</p>
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

          <div className="flex justify-between items-center">
            <div className="w-full">
              <label className="text-sm font-medium text-gray-600 ">
                Job Title
              </label>
              {isEditingField === "jobTitles" ? (
                <Autocomplete
                  multiple
                  options={jobTitles}
                  value={details.jobTitles}
                  onChange={handlejobTitlesChange}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-800 -mt-1">{details.jobTitles}</p>
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

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">
                Work Experience
              </label>
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
                <span className="text-gray-800">
                  {details.Experience} Years
                </span>
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

          <div className="flex justify-between items-center ">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">
                Annual Compensation
              </label>
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
                <span className=" text-gray-800 ">
                  {details.Current_Salary} LPA
                </span>
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

          {/* <div className="flex justify-between items-center">
            <div className="w-full">
              <label className="text-sm font-medium text-gray-600">Industries</label>
              {isEditingField === "industries" ? (
                <Autocomplete
                  multiple
                  options={industries}
                  value={details.industries}
                  onChange={handleindustriesChange}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                  className="mt-2"
                />
              ) : (
                <p className="text-gray-800 mt-2">{details.industries}</p>
              )}
            </div>
            {!isEditingField && (
              <button
                onClick={() => handleEditFieldClick("industries")}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <RiEditLine size={20} color="blue" />
              </button>
            )}
            {isEditingField === "industries" && (
              <button
                onClick={handleSaveFieldClick}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

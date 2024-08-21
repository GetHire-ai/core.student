import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Autocomplete,
  Chip,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { PutApi } from "../utilis/Api_Calling";
import { useNavigate } from "react-router-dom";
const webLinkOptions = [
  { label: "Twitter", value: "Twitter" },
  { label: "LinkedIn", value: "LinkedIn" },
  { label: "GitHub", value: "GitHub" },
];
function SectionedForm({ resumeData, setResumeData }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [currentWebLink, setCurrentWebLink] = useState({ name: "", url: "" });
  const [currentWorkExp, setCurrentWorkExp] = useState({
    title: "",
    company: "",
    duration: "",
    currentlyWorking: false,
  });
  const [newCategory, setNewCategory] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [customSkill, setCustomSkill] = useState("");
  const skillOptions = ["JavaScript", "React", "Node.js"];

  const getSummary = async () => {
    try {
      const data = {
        jobTitle: resumeData?.jobTitle,
        suggestionFor: "summary for this role for resume",
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      let response = await axios.post(
        "https://get-hire-ai.vercel.app/job-suggestion",
        data,
        config
      );
      setResumeData((prev) => ({ ...prev, summary: response.data.res }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAccordionChange = (accordionName) => (event, isExpanded) => {
    setExpanded(isExpanded ? accordionName : false);
  };

  const handleAddWebLink = () => {
    if (currentWebLink.name && currentWebLink.url) {
      setResumeData((prevData) => ({
        ...prevData,
        webLinks: [...prevData.webLinks, currentWebLink],
      }));
      setCurrentWebLink({ name: "", url: "" });
    }
  };

  const handleAddExp = () => {
    setResumeData((prevData) => ({
      ...prevData,
      workExperience: [...prevData.workExperience, currentWorkExp],
    }));
    setCurrentWorkExp({
      title: "",
      company: "",
      duration: "",
      currentlyWorking: false,
    });
    console.log(resumeData);
  };

  const handleAddCategory = () => {
    if (newCategory === "") {
      return;
    }
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, { category: newCategory, skill: [] }],
    }));
    setNewCategory("");
  };

  const handleAddSkill = (categoryIndex, skill) => {
    const updatedSkills = [...resumeData?.skills];
    updatedSkills[categoryIndex].skill = [
      ...updatedSkills[categoryIndex].skill,
      skill,
    ];
    setResumeData({ ...resumeData, skills: updatedSkills });
    setNewSkill("");
  };

  const handleRemoveSkill = (categoryIndex, skillToRemove) => {
    const updatedSkills = [...resumeData?.skills];
    updatedSkills[categoryIndex].skill = updatedSkills[
      categoryIndex
    ].skill.filter((skill) => skill !== skillToRemove);
    setResumeData({ ...resumeData, skills: updatedSkills });
  };

  const handleDeleteCategory = (categoryIndex) => {
    const updatedSkills = resumeData?.skills.filter(
      (_, index) => index !== categoryIndex
    );
    setResumeData({ ...resumeData, skills: updatedSkills });
  };

  const handleEduInputChange = (field, value, index) => {
    const updatedEducation = [...resumeData?.education];
    updatedEducation[index][field] = value;
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  const handleAddEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { name: "", authority: "", URL: "", date: "" },
      ],
    }));
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = resumeData?.education.filter(
      (_, i) => i !== index
    );
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  const handleCertInputChange = (field, value, index) => {
    const updatedCertificates = [...resumeData?.certificates];
    updatedCertificates[index][field] = value;
    setResumeData({ ...resumeData, certificates: updatedCertificates });
  };

  const handleAddCertificete = () => {
    setResumeData((prev) => ({
      ...prev,
      certificates: [
        ...prev.certificates,
        { name: "", authority: "", URL: "", date: "" },
      ],
    }));
  };

  const handleRemoveCertificete = (index) => {
    const updatedEducation = resumeData?.certificates.filter(
      (_, i) => i !== index
    );
    setResumeData({ ...resumeData, certificates: updatedEducation });
  };

  const handleUpdate = async () => {
    try {
      let res = await PutApi(
        `api/studentroutes/ai-resume/${resumeData._id}`,
        resumeData
      );
      navigate(`/blank/ai-tools/resume-builder`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-1/2 p-4 rounded shadow max-h-screen overflow-y-auto bg-gray-50">
      <h1 className="text-xl text-gray-800 mb-4">Edit Resume</h1>

      <Accordion
        style={{ margin: "1rem 0" }}
        expanded={expanded === "personalInfo"}
        onChange={handleAccordionChange("personalInfo")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Personal Info
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="First Name"
            name="firstName"
            value={resumeData?.firstName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={resumeData?.lastName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Job Title"
            name="jobTitle"
            value={resumeData?.jobTitle}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={resumeData?.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={resumeData?.phone}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            name="location"
            value={resumeData?.location}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="City"
            name="city"
            value={resumeData?.city}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="State"
            name="state"
            value={resumeData?.state}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Country"
            name="country"
            value={resumeData?.country}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Zip Code"
            name="zipCode"
            value={resumeData?.zipCode}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="openForRemote"
                checked={resumeData?.openForRemote}
                onChange={handleInputChange}
              />
            }
            label="Open for Remote"
          />
          <br />
          <FormControlLabel
            control={
              <Checkbox
                name="openForRelocate"
                checked={resumeData?.openForRelocate}
                onChange={handleInputChange}
              />
            }
            label="Open for Relocate"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{ margin: "1rem 0" }}
        expanded={expanded === "summary"}
        onChange={handleAccordionChange("summary")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Summary
        </AccordionSummary>
        <AccordionDetails>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={getSummary}
          >
            Generate with AI
          </Button>
          <TextField
            label="Summary"
            name="summary"
            value={resumeData?.summary}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{ margin: "1rem 0" }}
        expanded={expanded === "webLinks"}
        onChange={handleAccordionChange("webLinks")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Web Links
        </AccordionSummary>
        <AccordionDetails>
          <Autocomplete
            options={webLinkOptions}
            getOptionLabel={(option) => option.label}
            value={
              webLinkOptions.find(
                (option) => option.value === currentWebLink.name
              ) || null
            }
            onChange={(event, newValue) => {
              setCurrentWebLink((prev) => ({
                ...prev,
                name: newValue ? newValue.value : "",
              }));
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Web Link Name"
                margin="normal"
                fullWidth
              />
            )}
          />
          <TextField
            label="Web Link URL"
            name="url"
            value={currentWebLink.url}
            onChange={(e) =>
              setCurrentWebLink((prev) => ({
                ...prev,
                url: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
          <Button
            onClick={handleAddWebLink}
            variant="contained"
            color="primary"
            className="mt-2"
          >
            Add Web Link
          </Button>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{ margin: "1rem 0" }}
        expanded={expanded === "workExp"}
        onChange={handleAccordionChange("workExp")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Work Experience
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Job Title"
            name="title"
            value={currentWorkExp.title}
            onChange={(e) =>
              setCurrentWorkExp((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company"
            name="company"
            value={currentWorkExp.company}
            onChange={(e) =>
              setCurrentWorkExp((prev) => ({
                ...prev,
                company: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Duration"
            name="duration"
            value={currentWorkExp.duration}
            onChange={(e) =>
              setCurrentWorkExp((prev) => ({
                ...prev,
                duration: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
          <Button
            onClick={handleAddExp}
            variant="contained"
            color="primary"
            className="mt-2"
          >
            Add
          </Button>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{ margin: "1rem 0" }}
        expanded={expanded === "skills"}
        onChange={handleAccordionChange("skills")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Skills
        </AccordionSummary>
        <AccordionDetails>
          {resumeData?.skills?.map((skillCat, categoryIndex) => (
            <div
              key={categoryIndex}
              style={{ marginBottom: "16px" }}
              className="w-full"
            >
              <div className="flex justify-between items-center">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <h3 style={{ margin: 0, marginRight: "16px" }}>
                    <b>{skillCat.category}</b>
                  </h3>
                </div>
                <div style={{ marginBottom: "8px" }} className="w-1/2">
                  <Autocomplete
                    fullWidth
                    options={skillOptions}
                    renderInput={(params) => (
                      <TextField {...params} label="Add Skill" />
                    )}
                    onChange={(event, newValue) => {
                      if (newValue) handleAddSkill(categoryIndex, newValue);
                    }}
                    onInputChange={(event, newValue) =>
                      setCustomSkill(newValue)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && customSkill) {
                        handleAddSkill(categoryIndex, customSkill);
                        setCustomSkill("");
                      }
                    }}
                  />
                </div>
                <IconButton
                  onClick={() => handleDeleteCategory(categoryIndex)}
                  aria-label="delete category"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
              <div>
                {skillCat.skill.map((skill, skillIndex) => (
                  <Chip
                    key={skillIndex}
                    label={skill}
                    onDelete={() => handleRemoveSkill(categoryIndex, skill)}
                    style={{ marginRight: "4px", marginBottom: "4px" }}
                  />
                ))}
              </div>
            </div>
          ))}
          <TextField
            label="Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            style={{ marginBottom: ".5rem" }}
          />
          <br />
          <Button variant="contained" onClick={handleAddCategory}>
            Add{" "}
          </Button>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{ margin: "1rem 0" }}
        expanded={expanded === "education"}
        onChange={handleAccordionChange("education")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Education
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {resumeData?.education?.map((edu, index) => (
              <div key={index} style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <h3 style={{ margin: 0, marginRight: "16px" }}>Education</h3>
                  <IconButton
                    onClick={() => handleRemoveEducation(index)}
                    aria-label="delete education"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
                <TextField
                  label="Institute"
                  value={edu.institute}
                  onChange={(e) =>
                    handleEduInputChange("institute", e.target.value, index)
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Degree"
                  value={edu.degree}
                  onChange={(e) =>
                    handleEduInputChange("degree", e.target.value, index)
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="GPA"
                  value={edu.GPA}
                  onChange={(e) =>
                    handleEduInputChange("GPA", e.target.value, index)
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Start Year"
                  value={edu.startYear}
                  onChange={(e) =>
                    handleEduInputChange("startYear", e.target.value, index)
                  }
                  fullWidth
                  margin="normal"
                  type="number"
                />
                <TextField
                  label="End Year"
                  value={edu.endYear}
                  onChange={(e) =>
                    handleEduInputChange("endYear", e.target.value, index)
                  }
                  fullWidth
                  margin="normal"
                  type="number"
                />
              </div>
            ))}
            <Button
              onClick={handleAddEducation}
              variant="contained"
              color="primary"
            >
              Add Education
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{ margin: "1rem 0" }}
        expanded={expanded === "certificates"}
        onChange={handleAccordionChange("certificates")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Certificates
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {resumeData?.certificates?.map((edu, index) => (
              <div key={index} style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <h3 style={{ margin: 0, marginRight: "16px" }}>
                    certificate {index + 1}
                  </h3>
                  <IconButton
                    onClick={() => handleRemoveCertificete(index)}
                    aria-label="delete education"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
                <TextField
                  label="Name"
                  value={edu?.name}
                  onChange={(e) =>
                    handleCertInputChange("name", e.target.value, index)
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Authority"
                  value={edu?.authority}
                  onChange={(e) =>
                    handleCertInputChange("authority", e.target.value, index)
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="URL"
                  value={edu?.URL}
                  onChange={(e) =>
                    handleCertInputChange("URL", e.target.value, index)
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={edu?.date}
                  onChange={(e) =>
                    handleCertInputChange("date", e.target.value, index)
                  }
                  fullWidth
                  margin="normal"
                  type="date"
                />
              </div>
            ))}
            <Button
              onClick={handleAddCertificete}
              variant="contained"
              color="primary"
            >
              Add Certificate
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Button
        onClick={handleUpdate}
        variant="contained"
        color="primary"
        className="mt-4"
      >
        Save
      </Button>
    </div>
  );
}

export default SectionedForm;

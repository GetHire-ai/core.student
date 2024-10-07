import React, { useState } from "react";
import { PostApi } from "../utilis/Api_Calling";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
  Autocomplete,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState([]); // New state for skills
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const allSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "Ruby",
    // Add more skills as needed
  ];

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let data = { jobTitle, desc, experience, skills }; // Include skills in the data
      let res = await PostApi(`api/studentroutes/ai-interview`, data);
      console.log(res);
      setOpenDialog(false); // Close dialog after submission
    } catch (error) {
      console.error(error.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="font-bold text-lg text-center">+ Add New</h2>
      </div>

      {/* Material UI Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Tell us more about your job interview</DialogTitle>
        <DialogContent>
          <form onSubmit={onSubmit}>
            <div>
              {/* Job Position Input */}
              <div className="mt-7 my-3">
                <TextField
                  label="Job Role/Job Position"
                  variant="outlined"
                  fullWidth
                  required
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Ex. Full Stack Developer"
                />
              </div>

              {/* Job Description Input */}
              <div className="my-3">
                <TextField
                  label="Job Description/ Tech Stack"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  minRows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Ex. React, Node.js"
                />
              </div>

              {/* Years of Experience Input */}
              <div className="mt-7 my-3">
                <TextField
                  label="Years of Experience"
                  type="number"
                  variant="outlined"
                  fullWidth
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Ex. 5"
                  inputProps={{ min: 0, max: 20 }}
                />
              </div>

              {/* Skills Input */}
              <div className="my-3">
                <Autocomplete
                  multiple
                  options={allSkills}
                  getOptionLabel={(option) => option}
                  value={skills}
                  onChange={(event, newValue) => setSkills(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Skills"
                      placeholder="Select or add skills"
                      variant="outlined"
                    />
                  )}
                  freeSolo
                />
              </div>
            </div>

            {/* Dialog Actions: Buttons */}
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary" disabled={loading}>
                {loading ? (
                  <>
                    <CircularProgress
                      size={20}
                      style={{ marginRight: "8px" }}
                    />
                    Generating From AI
                  </>
                ) : (
                  "Start Interview"
                )}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;

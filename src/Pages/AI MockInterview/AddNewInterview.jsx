import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(jobPosition, jobDesc, jobExperience);

    setTimeout(() => {
      setLoading(false);
      setOpenDialog(false);
      navigate("/dashboard/interview/dummyMockId");
    }, 2000);
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
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="md">
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
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
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
                  value={jobDesc}
                  onChange={(e) => setJobDesc(e.target.value)}
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
                  value={jobExperience}
                  onChange={(e) => setJobExperience(e.target.value)}
                  placeholder="Ex. 5"
                  inputProps={{ min: 0, max: 20 }}
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
                    <CircularProgress size={20} style={{ marginRight: "8px" }} />
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

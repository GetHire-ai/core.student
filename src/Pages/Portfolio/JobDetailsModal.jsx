import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  TextareaAutosize,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { PutApi } from "../utilis/Api_Calling";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const JobDetailsModal = ({ onOpen, onClose, profile }) => {

  const [JobDetails, setJobDetails] = useState({
    Education: profile?.JobDetails
  });

  const [Designation, setDesignation] = useState("");
  const [Profile, setProfile] = useState("");
  const [Organization, setOrganization] = useState("");
  const [Location, setLocation] = useState("");
  const [WorkFromHome, setWorkFromHome] = useState(true);
  const [NoticePeriod, setNoticePeriod] = useState("");
  const [Type, setType] = useState("");
  const [Start_date, setStart_date] = useState("");
  const [End_date, setEnd_date] = useState("");
  const [Currentlyworking, setCurrentlyworking] = useState(true);
  const [Description, setDescription] = useState("");




  const updateJobDetails = async () => {
    try {
      const updatedJobDetails = {
        Designation,
        Profile,
        Organization,
        Location,
        WorkFromHome,
        NoticePeriod,
        Type,
        Start_date,
        End_date,
        Currentlyworking,
        Description
      };

      const updatedProfile = { ...profile };
      updatedProfile.JobDetails.push(updatedJobDetails);


      const response = await PutApi('api/StudentRoutes/UpdateStudentProfile', { JobDetails: updatedProfile.JobDetails });
      console.log(response?.data)
      alert("Job Details updated successfully.");
      onClose();
    } catch (error) {
      console.error(error);
      alert('Error updating Job Details');
    }
  };


  return (
    <>
      {/* Job Details Modal */}
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={onOpen}
      >
        <DialogTitle
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#000",
            textAlign: "center",
          }}
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          Job details
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <div className="bg-[#5956e9] w-[33.33px] h-[33.33px] rounded-[50%] flex justify-center items-center text-white">
            <CloseIcon />
          </div>
        </IconButton>
        <DialogContent>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                  variant="subtitle1"
                >
                  Designation
                </Typography>
                <TextField
                  placeholder="eg: Software Engineer"
                  className="text-[16px] font-[600]"
                  name="designation"
                  fullWidth
                  margin="normal"
                  value={Designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                  variant="subtitle1"
                >
                  Profile
                </Typography>
                <TextField
                  placeholder="eg: Operations"
                  className="text-[16px] font-[600]"
                  name="profile"
                  fullWidth
                  margin="normal"
                  value={Profile}
                  onChange={(e) => setProfile(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                  variant="subtitle1"
                >
                  Organization
                </Typography>
                <TextField
                  placeholder="eg: Internshala"
                  className="text-[16px] font-[600]"
                  fullWidth
                  margin="normal"
                  value={Organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Location
                </Typography>

                <TextField
                  placeholder="eg: Mumbai"
                  className="text-[16px] font-[600]"
                  fullWidth
                  margin="normal"
                  value={Location}
                  onChange={(e) => setLocation(e.target.value)}

                />
                <FormControlLabel
                  className=""
                  control={
                    <Checkbox
                      checked={WorkFromHome}
                      onChange={(e) => setWorkFromHome(e.target.checked)}
                    />
                  }
                  label="is work from home"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Job Type
                </Typography>

                <Select
                  labelId="notice-period-label"
                  id="notice-period-select"
                  className="text-[16px] font-[600]"
                  fullWidth
                  margin="normal"
                  value={Type}
                  onChange={(e) => { setType(e.target.value) }}
                >
                  <MenuItem value="" disabled>None</MenuItem>
                  <MenuItem value="Full-time">Full-time</MenuItem>
                  <MenuItem value="Part-time">Part-time</MenuItem>
                  <MenuItem value="Internship">Internship</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Notice Period
                </Typography>

                <TextField
                  placeholder="eg:....."
                  className="text-[16px] font-[600]"
                  fullWidth
                  margin="normal"
                  value={NoticePeriod}
                  onChange={(e) => setNoticePeriod(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Start date
                </Typography>

                <TextField
                  type="date"
                  placeholder="Choose date"
                  className="text-[16px] font-[600]"
                  fullWidth
                  margin="normal"
                  value={Start_date}
                  onChange={(e) => setStart_date(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  End date
                </Typography>

                <TextField
                  type="date"
                  placeholder="Choose date"
                  className="text-[16px] font-[600]"
                  fullWidth
                  margin="normal"
                  value={End_date}
                  onChange={(e) => setEnd_date(e.target.value)}
                />
                <FormControlLabel
                  className=""
                  control={<Checkbox
                    checked={Currentlyworking}
                    onChange={(e) => setCurrentlyworking(e.target.checked)} />}
                  label="Currently working here"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Description
                  <span className="text-[#000] ml-[5px] text-opacity-[50%]">
                    (Optional)
                  </span>
                </Typography>
                <Typography className="border-[1px] mt-[13px] text-[#000] text-opacity-[50%] text-[14px] font-[400] border-[#d9d9d9] rounded-[3px] p-[20px]">
                  <span className="text-[#000]">
                    Pro tip:)
                  </span>
                  <ul className="list-disc px-[20px] mt-[12px]">
                    <li>
                      Mention key job responsibilities, measurable impact or
                      results you helped deliver, any awards/recognition you won
                      during this time
                    </li>
                    <li>
                      Use action verbs: Built, Led, Drove, Conceptualized,
                      Learnt, etc.
                    </li>
                    <li>Use numbers and percentages wherever possible </li>
                    <li>Keep it to 3-4 points</li>
                  </ul>
                </Typography>
                <TextareaAutosize
                  className="border-[#d9d9d9] rounded-[3px] border-[1px] w-full mt-[8px] p-[14px]"
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="Short description of work done (max 250 char)"
                  value={Description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="w-[87px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
            onClick={updateJobDetails}
            style={{
              color: "#fff",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default JobDetailsModal;

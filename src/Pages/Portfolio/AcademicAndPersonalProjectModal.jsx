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

const AcademicAndPersonalProjectModal = ({ onOpen, onClose, profile }) => {

  const [Projects, setProjects] = useState({
    Projects: profile?.Projects
  });

  let newon = {
    "Title": "E-commerce Website",
    "Start_date": "2023-01-01",
    "End_date": "2023-05-01",
    "CurrentlyOngoing": false,
    "Description": "Developed an e-commerce website using MERN stack.",
    "Project_link": "project_url_here",
    "_id": "6628a0f6f767a60e2de39ada"
  }
  const [Title, setTitle] = useState("")
  const [Start_date, setStart_date] = useState("")
  const [End_date, setEnd_date] = useState("")
  const [CurrentlyOngoing, setCurrentlyOngoing] = useState(false)
  const [Description, setDescription] = useState("")
  const [Project_link, setProject_link] = useState("")


  const updateProjects = async () => {
    try {
      const updatedProjects = {
        Title,
        Start_date,
        End_date,
        CurrentlyOngoing,
        Description,
        Project_link,
      };

      const updatedProfile = { ...profile };
      updatedProfile.Projects.push(updatedProjects);


      const response = await PutApi('api/StudentRoutes/UpdateStudentProfile', { Projects: updatedProfile.Projects });
      console.log(response?.data)
      alert("Projects updated successfully.");
      onClose();
    } catch (error) {
      console.error(error);
      alert('Error updating Projects');
    }
  };

  return (
    <>
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
          Acedmic and personal project
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
                  Title
                </Typography>
                <TextField
                  placeholder="eg: Optional Character Recognition"
                  className="text-[16px] font-[600]"
                  name="designation"
                  fullWidth
                  margin="normal"
                  value={Title}
                  onChange={(e) => { setTitle(e.target.value) }}
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
                  onChange={(e) => { setStart_date(e.target.value) }}
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
                  onChange={(e) => { setEnd_date(e.target.value) }}

                />
                <FormControlLabel
                  className=""
                  control={<Checkbox
                    checked={CurrentlyOngoing}
                    onChange={(e) => setCurrentlyOngoing(e.target.checked)}
                  />}
                  label="Currently ongoing"
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

                <TextareaAutosize
                  className="border-[#d9d9d9] rounded-[3px] border-[1px] w-full mt-[8px] p-[14px]"
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="Short description about training (max 700 char)"
                  value={Description}
                  onChange={(e) => { setDescription(e.target.value) }}
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
                  Project link
                  <span className="text-[#000] ml-[5px] text-opacity-[50%]">
                    (Optional)
                  </span>
                </Typography>
                <Typography className="mt-[6px] text-[16px] font-[400] text-[#000] text-opacity-[50%] mb-[11px]">
                  If you have multiple project links or an offline project,
                  upload and provide link to google drive.
                </Typography>
                <TextField
                  className="text-[16px] font-[600] w-full "
                  placeholder="e.g. http://myprojectlink.com"
                  value={Project_link}
                  onChange={(e) => { setProject_link(e.target.value) }}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="w-[87px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
            onClick={updateProjects}
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

export default AcademicAndPersonalProjectModal;

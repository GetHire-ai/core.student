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

const TrainingDetailsModal = ({ onOpen, onClose, profile }) => {


  const [Training_details, setTraining_details] = useState({
    Training_details: profile?.Training_details
  });


  


  const [Training_program, setTraining_program] = useState("");
  const [Certification, setCertification] = useState(true);
  const [Organization, setOrganization] = useState('');
  const [Online, setOnline] = useState(false);
  const [Location, setLocation] = useState('');
  const [Start_date, setStart_date] = useState('');
  const [End_date, setEnd_date] = useState('');
  const [CurrentlyOngoing, setCurrentlyOngoing] = useState(false);
  const [Description, setDescription] = useState('');


  const updateTraining_details = async () => {
    try {
      const updatedTraining_details = {
        Training_program,
        Certification,
        Organization,
        Online,
        Location,
        Start_date,
        End_date,
        Start_date,
        CurrentlyOngoing,
        Description
      };

      const updatedProfile = { ...profile };
      updatedProfile.Training_details.push(updatedTraining_details);


      const response = await PutApi('api/StudentRoutes/UpdateStudentProfile', { Training_details: updatedProfile.Training_details });
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
          Training details
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
                  Training program
                </Typography>
                <TextField
                  placeholder="eg: Sales & Marketing"
                  className="text-[16px] font-[600]"
                  name="designation"
                  fullWidth
                  margin="normal"
                  value={Training_program}
                  onChange={(e) => setTraining_program(e.target.value)}
                />
                <FormControlLabel
                  className=""
                  control={<Checkbox
                    checked={Certification}
                    onChange={(e) => setCertification(e.target.checked)} />}
                  label="Certification"
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
                  placeholder="eg: .........."
                  className="text-[16px] font-[600]"
                  name="profile"
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
                  control={<Checkbox
                    checked={Online}
                    onChange={(e) => setOnline(e.target.checked)} />}
                  label="Online"
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
                    checked={CurrentlyOngoing}
                    onChange={(e) => setCurrentlyOngoing(e.target.checked)} />}
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
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="w-[87px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
            onClick={updateTraining_details}
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

export default TrainingDetailsModal;

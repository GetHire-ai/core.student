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

const SkillModel = ({ onOpen, onClose, profile }) => {
  const [Projects, setProjects] = useState({
    Projects: profile?.Projects,
  });

  const [Skill, setSkill] = useState("");
  const [Rate, setRate] = useState("");

  const updateSkill_Set = async () => {
    try {
      const updatedSkill_Set = {
        Skill,
        Rate,
        score: 0,
      };
      const updatedProfile = { ...profile };
      updatedProfile.Skill_Set.push(updatedSkill_Set);
      const response = await PutApi("api/StudentRoutes/UpdateStudentProfile", {
        Skill_Set: updatedProfile.Skill_Set,
      });
      console.log(response?.data);
      alert("Skill_Set updated successfully.");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Error updating Skill_Set");
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
          Skills
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
                  Add skills
                </Typography>
                <TextField
                  placeholder="eg: Adobe Illustrator"
                  className="text-[16px] font-[600]"
                  name="name"
                  value={Skill}
                  onChange={(e) => setSkill(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#b1b1b1",
                  }}
                  variant="subtitle1"
                >
                  Experience
                </Typography>
                <Select
                  labelId="notice-period-label"
                  id="notice-period-select"
                  className="text-[16px] font-[600]"
                  fullWidth
                  margin="normal"
                  value={Rate}
                  onChange={(e) => {
                    setRate(e.target.value);
                  }}
                >
                  <MenuItem value="None" disabled>
                    None
                  </MenuItem>
                  <MenuItem value="Beginner">Beginner</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="w-[87px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
            onClick={updateSkill_Set}
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

export default SkillModel;

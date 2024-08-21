import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
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

const WorkSampleModal = ({ onOpen, onClose, profile }) => {

  const [Work_Samples, setWork_Samples] = useState({
    Work_Samples: profile?.Work_Samples
  });

  const [Blog_link, setBlog_link] = useState("");
  const [GitHub_profile, setGitHub_profile] = useState("");
  const [Playstoredeveloperpubliclink, setPlaystoredeveloperpubliclink] = useState("");
  const [Behance_portfolio_link, setBehance_portfolio_link] = useState("");
  const [Other_work_sample_link, setOther_work_sample_link] = useState("");

  const updateWork_Sample = async () => {
    try {
      const updatedWork_Sample = {
        Blog_link,
        GitHub_profile,
        Playstoredeveloperpubliclink,
        Behance_portfolio_link,
        Other_work_sample_link
      };

      const updatedProfile = { ...profile };
      updatedProfile.Work_Samples.push(updatedWork_Sample);

      const response = await PutApi('api/StudentRoutes/UpdateStudentProfile', { Work_Samples: updatedProfile.Work_Samples });

      console.log(response?.data);
      alert("Work samples updated successfully.");
      onClose();
    } catch (error) {
      console.error(error);
      alert('Error updating work samples');
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
          Work samples
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
                  Blog link
                </Typography>
                <TextField
                  placeholder="http;?......"
                  className="text-[16px] font-[600]"
                  name="designation"
                  fullWidth
                  margin="normal"
                  value={Blog_link}
                  onChange={(e) => { setBlog_link(e.target.value) }}
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
                  GitHub profile
                </Typography>
                <TextField
                  placeholder="http;?......"
                  className="text-[16px] font-[600]"
                  name="profile"
                  fullWidth
                  margin="normal"
                  value={GitHub_profile}
                  onChange={(e) => { setGitHub_profile(e.target.value) }}
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
                  Play store developer A/c (public link)
                </Typography>
                <TextField
                  placeholder="http;?......"
                  className="text-[16px] font-[600]"
                  fullWidth
                  margin="normal"
                  value={Playstoredeveloperpubliclink}
                  onChange={(e) => { setPlaystoredeveloperpubliclink(e.target.value) }}
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
                  Behance portfolio link
                </Typography>

                <TextField
                  placeholder="http;?......"
                  className="text-[16px] font-[600]"
                  fullWidth
                  margin="normal"
                  value={Behance_portfolio_link}
                  onChange={(e) => { setBehance_portfolio_link(e.target.value) }}
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
                <Typography className=" text-[#000] text-opacity-[50%] text-[14px] font-[400]">
                  Your work samples could be in the form of social media posts,
                  presentations, documents, website etc. If you have multiple
                  work samples, upload them to google drive and add the link
                  here.
                </Typography>
                <TextField
                  placeholder="http;?......"
                  className="text-[16px] font-[600]"
                  fullWidth
                  margin="normal"
                  value={Other_work_sample_link}
                  onChange={(e) => { setOther_work_sample_link(e.target.value) }}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="w-[87px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
            onClick={updateWork_Sample}
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

export default WorkSampleModal;

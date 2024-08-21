import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import React, { useEffect, useState } from "react";

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

const PositionOfResponsibilityModal = ({ onOpen, onClose, profile }) => {

  const [position_of_responsibility, setposition_of_responsibility] = useState("");

  useEffect(() => {
    setposition_of_responsibility(profile?.position_of_responsibility)
  }, [])



  const updateJobDetails = async () => {
    try {
      const response = await PutApi('api/StudentRoutes/UpdateStudentProfile', { position_of_responsibility: position_of_responsibility });
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
          Position of responsibility
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
                <Typography className=" mt-[13px] text-[#000] text-opacity-[50%] text-[14px] font-[400] rounded-[3px]">
                  If you have been/are an active part of societies, conducted
                  any events or led a team, add details here
                </Typography>
                <TextareaAutosize
                  className="border-[#d9d9d9] rounded-[3px] border-[1px] w-full mt-[8px] p-[14px]"
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="e.g. Led a team of 5 volunteers to plan and conduct activities for literary event in college fest"
                  value={position_of_responsibility}
                  onChange={(e) => setposition_of_responsibility(e.target.value)}
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

export default PositionOfResponsibilityModal;

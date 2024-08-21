import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextareaAutosize,
  Typography,
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

const AdditionalDetailsModal = ({ onOpen, onClose, profile }) => {


  const [Additional_Info, setAdditional_Info] = useState("");

  useEffect(() => {
    setAdditional_Info(profile?.Additional_Info)
  }, [])



  const updateAdditional_Info = async () => {
    try {
      const response = await PutApi('api/StudentRoutes/UpdateStudentProfile', { Additional_Info: Additional_Info });
      console.log(response?.data)
      alert("Additional Info updated successfully.");
      onClose();
    } catch (error) {
      console.error(error);
      alert('Error updating Additional Info');
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
          Additional details
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
                  Add your accomplishments such as rewards, recognitions, test
                  scores, certifications, etc. here. You may also add
                  information such as seminars/workshops you have attended or
                  any interests/hobbies you have pursued.
                </Typography>
                <TextareaAutosize
                  className="border-[#d9d9d9] rounded-[3px] border-[1px] w-full mt-[8px] p-[14px]"
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="E.g. Secured 1st rank among 500 entries in national level story writing competition organised by Internshala"
                  value={Additional_Info}
                  onChange={(e) => setAdditional_Info(e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="w-[87px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
            onClick={updateAdditional_Info}
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

export default AdditionalDetailsModal;

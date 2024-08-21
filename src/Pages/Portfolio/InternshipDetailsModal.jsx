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
import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const InternshipDetailsModal = ({ onOpen, onClose }) => {
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
          Internship details
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
                  Profile
                </Typography>
                <TextField
                  placeholder="eg: Sales & Marketing"
                  className="text-[16px] font-[600]"
                  name="designation"
                  fullWidth
                  margin="normal"
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
                />
                <FormControlLabel
                  className=""
                  control={<Checkbox />}
                  label="is work from home"
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
                />
                <FormControlLabel
                  className=""
                  control={<Checkbox />}
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
                  <span className="text-[#000]">Pro tip:)</span>
                  <ul className="list-disc px-[20px] mt-[12px]">
                    <li>
                      Mention key internship responsibilities in max 3-4 points
                    </li>
                    <li>
                      Use action verbs: Built, Led, Drove, Conceptualized,
                      Learnt, etc.
                    </li>
                  </ul>
                </Typography>
                <TextareaAutosize
                  className="border-[#d9d9d9] rounded-[3px] border-[1px] w-full mt-[8px] p-[14px]"
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="Short description of work done (max 250 char)"
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="w-[87px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
            onClick={onClose}
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

export default InternshipDetailsModal;

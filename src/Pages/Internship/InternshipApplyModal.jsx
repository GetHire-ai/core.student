import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { FiAlertCircle } from "react-icons/fi";
import InternshipApplicationSubmitted from "./InternshipApplicationSubmitted";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const InternshipApplyModal = ({ onOpen, onClose }) => {
  const [internshipSubmittedModal, setInternshipSubmittedModal] = useState(false);

  const toggleInternshipSubmittedModalOpen = () => {
    setInternshipSubmittedModal(true);
  };
  const toggleInternshipSubmittedModalClose = () => {
    setInternshipSubmittedModal(false);
  };
  return (
    <>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={onOpen}
        maxWidth={"md"}
      >
        <DialogTitle
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#000",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#e3eff7",
          }}
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          Search Engine Optimization (SEO)
          <span className="text-[16px] font-[400] text-black text-opacity-[50%]">
            Global Trend
          </span>
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
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                  }}
                >
                  Your resume
                  <div className="w-[4px] h-[4px] rounded-[50%] bg-[#454141]"></div>
                  <span className="text-[#000] text-[14px] font-[400] text-opacity-[50%]">
                    Updated recently
                  </span>
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="text-[16px] pt-[11px] text-black text-opacity-[50%] font-[400]"
                >
                  Your current resume will be submitted along with this
                  application.
                  <span className="text-[#4234a2] text-[16px] font-[600] pl-[11px]">
                    Edit portfolio
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
                  Cover letter
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="text-[16px] pt-[19px] text-black text-opacity-[50%] font-[400]"
                >
                  Why should you be hired for this role?
                </Typography>
                <div className=" mt-[8px] rounded-[3px] border-[1px] px-[12px] py-[14px] border-[#d9d9d9]">
                  <p className="text-black text-opacity-[50%]">
                    Mention in detail what relevant skill or past experience you
                    have for this internship. What excites you about this
                    internship? Why would you be a good fit?
                  </p>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
                  Your availability
                </Typography>
                <div className="bg-[#fff2eb] mt-[18px] flex flex-col rounded-[3px] border-[1px] px-[14px] py-[16px] border-[#ffc3ae]">
                  <div className="flex  items-center gap-[4px]">
                    <FiAlertCircle color="#ca3a27" size={"16px"} />
                    <p className="text-[16px ] font-[400] text-[#ca3a27]">
                      This internship requires you to relocate to a location
                      outside of your current city
                    </p>
                  </div>
                  <FormControlLabel
                    className="text-black pl-[35px] text-opacity-[50%]"
                    control={<Checkbox />}
                    label="I can relocate to Jaipur"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  className="text-[16px] text-black text-opacity-[50%] font-[400]"
                >
                  Confirm your availability
                </Typography>
                <div className="flex flex-col">
                  <FormControlLabel
                    className="text-black text-opacity-[50%]"
                    control={<Checkbox />}
                    label="Yes, I am available to join immediately"
                  />
                  <FormControlLabel
                    className="text-black text-opacity-[50%]"
                    control={<Checkbox />}
                    label="No (Please specify your availability)"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                  variant="subtitle1"
                >
                  Custom resume
                  <span className="text-[#000] pl-[15px] text-opacity-[50%]">
                    (Optional)
                  </span>
                </Typography>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                  variant="subtitle1"
                >
                  <span className="text-[#000] text-opacity-[50%]">
                    Employer can download and view this resume
                  </span>
                </Typography>

                <div class="mt-[14px] mb-[7px] md:w-[312px] h-[58px] flex justify-center items-center rounded-lg border  border-gray-900/25 ">
                  <div class=" flex gap-[5px] text-[16px] border-dashed border-[1px] leading-6 text-gray-600">
                    <img src="/images/uploadVector.svg" alt="" />
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-[500] "
                    >
                      <span>Upload File</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        accept=".pdf,.doc,.docx,.txt,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      />
                    </label>
                  </div>
                </div>

                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#000",
                    opacity: "50%",
                  }}
                >
                  Max file size: 10Mb. File type - PDF, DOC, DOCX
                </Typography>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <div className="flex justify-center items-center w-full mb-[15px]">
            <Button
              className="w-[345px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
              onClick={toggleInternshipSubmittedModalOpen}
              style={{
                color: "#fff",
              }}
            >
              Apply now
            </Button>
          </div>
        </DialogActions>
      </BootstrapDialog>
      {internshipSubmittedModal && (
        <InternshipApplicationSubmitted
          onOpen={toggleInternshipSubmittedModalOpen}
          onClose={toggleInternshipSubmittedModalClose}
        />
      )}
    </>
  );
};

export default InternshipApplyModal;

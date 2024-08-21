import { DialogTitle } from "@mui/material";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
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

const InternshipApplicationSubmitted = ({ onOpen, onClose }) => {
  return (
    <>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={onOpen}
        maxWidth={"md"}
      >
        <DialogTitle
          className="font-[500] text-[20px] flex flex-col md:flex-row gap-[20px] bg-[#e3eff7] p-[35px]"
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          <div className="flex gap-[7px]">
            <FaCircleCheck color="#00d280" className="mt-[5px]" size={"22px"} />
            <div className="flex flex-col">
              Application submitted
              <span className="text-[16px] font-[400] text-black text-opacity-[50%]">
                You can track status in My applications
              </span>
            </div>
          </div>
          <div aria-label="close" onClick={onClose}>
            <p className="text-[16px] font-[500] text-[#5956e9]">
              &lt; Go to internship search
            </p>
          </div>
        </DialogTitle>
      </BootstrapDialog>
    </>
  );
};

export default InternshipApplicationSubmitted;

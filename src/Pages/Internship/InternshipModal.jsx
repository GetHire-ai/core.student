import { DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { Link } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const InternshipModal = ({ onOpen, onClose }) => {
  const [selectOption, setSelectOption] = useState("manualSearch");

  const handelSelectOption = (Option) => {
    setSelectOption(Option);
  };
  return (
    <>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={onOpen}
        maxWidth={"xl"}
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
          <div className="bg-[#E3EFF7] flex flex-col md:flex-row px-[20px] gap-[30px] rounded-[30px] w-full py-[31px] md:mb-[50px] lg:px-[210px] ">
            <Link
              to="/blank/TotalInternship"
              onClick={() => handelSelectOption("manualSearch")}
              className={`bg-white ${
                selectOption === "manualSearch"
                  ? "border-[1px] border-[#5956e9]"
                  : ""
              } cursor-pointer rounded-[12px] flex flex-col justify-center items-center py-[32px] md:px-[56px]`}
            >
              <img
                src="/images/collegeBoard.svg"
                className="w-[61.21px] h-[88px]"
                alt=""
              />
              <p className="text-[20px] font-[500] mt-[21px]">Manual search</p>
            </Link>
            <Link
              onClick={() => handelSelectOption("smartSearch")}
              className={`bg-white cursor-pointer rounded-[12px] flex flex-col justify-center items-center py-[32px] p-[15px] ${
                selectOption === "smartSearch"
                  ? "border-[1px] border-[#5956e9]"
                  : ""
              } `}
            >
              <img
                src="/images/template-14px-arrow-svgrepo-com 1.svg"
                className="w-[88px] h-[88px]"
                alt=""
              />
              <p className="text-[20px] font-[500] mt-[14px]">
                Use Smart Counsellor
              </p>
            </Link>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};

export default InternshipModal;

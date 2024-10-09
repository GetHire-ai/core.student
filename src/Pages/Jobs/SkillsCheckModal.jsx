import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { PutApi } from "../utilis/Api_Calling";
import { toast } from "react-toastify";

const SkillsCheckModal = ({ isOpen, onRequestClose, skills, job }) => {
  console.log(job);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          maxHeight: "80vh",
          overflowY: "auto",
        },
      }}
    ></Modal>
  );
};

export default SkillsCheckModal;

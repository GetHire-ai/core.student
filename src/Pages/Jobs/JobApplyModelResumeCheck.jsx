import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    borderRadius: 20,
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const JobApplyModelResumeCheck = ({
  onOpen,
  onClose,
  openModal,
  educationDetails,
}) => {
  
  return (
    <StyledDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={onOpen}
    >
      <StyledDialogTitle id="customized-dialog-title">
        AI Resume Match
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <DialogContent>
        <p className="text-xl font-semibold text-[poppins] mt-3">
          Your resume matches 50% of the requirements for this role. Do you want
          to continue?
        </p>
      </DialogContent>
      <DialogActions sx={{ alignItems: "center" }}>
        <Button onClick={openModal} color="success">
          Continue
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default JobApplyModelResumeCheck;

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import GraduationDetailsModal from "./GraduationDetailsModal";
import SeniorSecondaryModal from "./SeniorSecondaryModal";
import SecondaryDetailsModal from "./SecondaryDetailsModal";
import DiplomaDetails from "./DiplomaDetails";
import PHDDetailsModal from "./PHDDetailsModal";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddEducationModal = ({ onOpen, onClose, profile }) => {
  const [graduationDetailModal, setGraduationDetailModal] = useState(false);
  const [seniorSecondaryDetailsModal, setSeniorSecondaryDetailsModal] =
    useState(false);
  const [secondaryDetailsModal, setSecondaryDetailsModal] = useState(false);
  const [diplomaDetailsModal, setDiplomaDetailsModal] = useState(false);
  const [phdDetailsModal, setPHDDetailsModal] = useState(false);

  const toggleGraduationDetailModalOpen = () => {
    setGraduationDetailModal(true);
  };
  const toggleGraduationDetailModalClose = () => {
    setGraduationDetailModal(false);
  };
  const toggleSeniorSecondaryDetailsModalOpen = () => {
    setSeniorSecondaryDetailsModal(true);
  };
  const toggleSeniorSecondaryDetailsModalClose = () => {
    setSeniorSecondaryDetailsModal(false);
  };
  const toggleSecondaryDetailsModalOpen = () => {
    setSecondaryDetailsModal(true);
  };
  const toggleSecondaryDetailsModalClose = () => {
    setSecondaryDetailsModal(false);
  };
  const toggleDiplomaDetailsModalOpen = () => {
    setDiplomaDetailsModal(true);
  };
  const toggleDiplomaDetailsModalClose = () => {
    setDiplomaDetailsModal(false);
  };
  const togglePHDDetailsModalOpen = () => {
    setPHDDetailsModal(true);
  };
  const togglePHDDetailsModalClose = () => {
    setPHDDetailsModal(false);
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
          Education
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
                    color: "#4234a2",
                    marginTop: "28px",
                    marginBottom: "28px",
                  }}
                  onClick={toggleGraduationDetailModalOpen}
                >
                  <AddIcon />
                  Add graduation/ post graduation
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#4234a2",
                    marginBottom: "28px",
                  }}
                  onClick={toggleSeniorSecondaryDetailsModalOpen}
                >
                  <AddIcon />
                  Add senior secondary (XII)
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#4234a2",
                    marginBottom: "28px",
                  }}
                  onClick={toggleSecondaryDetailsModalOpen}
                >
                  <AddIcon />
                  Add Secondary (x)
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#4234a2",
                    marginBottom: "28px",
                  }}
                  onClick={toggleDiplomaDetailsModalOpen}
                >
                  <AddIcon />
                  Add Diploma
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#4234a2",
                    marginBottom: "28px",
                  }}
                  onClick={togglePHDDetailsModalOpen}
                >
                  <AddIcon />
                  Add Phd
                </Typography>
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
      {graduationDetailModal && (
        <GraduationDetailsModal
          profile={profile}
          onOpen={toggleGraduationDetailModalOpen}
          onClose={toggleGraduationDetailModalClose}
        />
      )}
      {seniorSecondaryDetailsModal && (
        <SeniorSecondaryModal
          profile={profile}
          onOpen={toggleSeniorSecondaryDetailsModalOpen}
          onClose={toggleSeniorSecondaryDetailsModalClose}
        />
      )}
      {secondaryDetailsModal && (
        <SecondaryDetailsModal
          profile={profile}
          onOpen={toggleSecondaryDetailsModalOpen}
          onClose={toggleSecondaryDetailsModalClose}
        />
      )}
      {diplomaDetailsModal && (
        <DiplomaDetails
          profile={profile}
          onOpen={toggleDiplomaDetailsModalOpen}
          onClose={toggleDiplomaDetailsModalClose}
        />
      )}
      {phdDetailsModal && (
        <PHDDetailsModal
          profile={profile}
          onOpen={togglePHDDetailsModalOpen}
          onClose={togglePHDDetailsModalClose}
        />
      )}
    </>
  );
};

export default AddEducationModal;

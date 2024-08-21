import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { updateApi } from "../utilis/Api_Calling";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const PersonalDetailsModal = ({ onOpen, onClose, profile }) => {

  const [personaldetail, setpersonaldetail] = useState({
    Name: profile?.Name || '',
    Email: profile?.Email || '',
    Number: profile?.Number || '',
    Address: profile?.Address || '',
    Gender: profile?.Gender || '',
    image1: profile?.Image || null,
    Languages_you_know: profile?.Languages_you_know || [],
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureName, setProfilePictureName] = useState('');

  const handleFileChange = (file) => {
    if (file) {
      setProfilePicture(file);
      setpersonaldetail((prevDetails) => ({
        ...prevDetails,
        image1: file,
      }));
      setProfilePictureName(file.name);
    }
  };

  const handleCloseImage = () => {
    setProfilePicture(null);
    setProfilePictureName('');
  };

  const [alignment, setAlignment] = useState(personaldetail.Gender);

  const handleChange = (event, newAlignment) => {
    setpersonaldetail((prevDetails) => ({
      ...prevDetails,
      Gender: newAlignment,
    }));
    setAlignment(newAlignment);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [newLanguage, setNewLanguage] = useState('');

  const [languages, setLanguages] = useState(personaldetail.Languages_you_know);

  const handleLanguageChange = (event, language) => {
    if (languages.includes(language)) {
      setLanguages((prevLanguages) => prevLanguages.filter((lang) => lang !== language));
    } else {
      setLanguages((prevLanguages) => [...prevLanguages, language]);
    }
  };

  const handleSaveLanguage = () => {
    if (newLanguage.trim() !== '') {
      setLanguages((prevLanguages) => [...prevLanguages, newLanguage.trim()]);
      setpersonaldetail((prevDetails) => ({
        ...prevDetails,
        Languages_you_know: [...prevDetails.Languages_you_know, newLanguage.trim()],
      }));
      handleCloseDialog();
    }
  };

  const handleChangeNewLanguage = (event) => {
    setNewLanguage(event.target.value);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewLanguage('');
  };

  const UpdatePersenalDetail = async () => {
    try {
      const UpdatedData = await updateApi('api/StudentRoutes/UpdateStudentProfile', personaldetail);
      console.log(UpdatedData?.data);
      alert('Personal Detail Update Completed');
      onClose()
    } catch (error) {
      console.error(error);
      alert('Error updating personal details');
    }
  };



  return (
    <>
      {/* Edit Personal details */}
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
          Personal details
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
                  First Name
                </Typography>
                <TextField
                  // name="firstName"
                  fullWidth
                  margin="normal"
                  value={personaldetail?.Name}
                  onChange={(e) => setpersonaldetail(prevState => ({
                    ...prevState,
                    Name: e.target.value
                  }))}
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
                  Profile picture{" "}
                  <span className="text-[#000] text-opacity-[50%]">
                    (Recommended)
                  </span>
                </Typography>
                {profilePicture && (
                  <div className="flex flex-col w-[168px] h-[202px] rounded-[3px]">
                    <img
                      src={URL.createObjectURL(profilePicture)}
                      className="w-[168px] h-[168px] rounded-[50%]"
                      alt=""
                    />
                    <div className="flex justify-between items-center">
                      <p>{profilePictureName}</p>
                      <CloseIcon onClick={handleCloseImage} />
                    </div>
                  </div>
                )}

                <div class="mt-[14px] mb-[7px] md:w-[312px] h-[58px] flex justify-center items-center rounded-lg border  border-gray-900/25 ">
                  <div class=" flex gap-[5px] text-[16px] border-dashed border-[1px] leading-6 text-gray-600">
                    <img src="/images/uploadVector.svg" alt="" />
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-[500] "
                    >
                      <span>Upload picture</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e.target.files[0])}
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
                  Upload a professional picture of yourself (Max file size: 1Mb
                  and max resolution: 500px x 500px. File type- jpeg, jpg, png,
                  gif)
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                  variant="subtitle1"
                >
                  Email
                </Typography>
                <TextField
                  fullWidth
                  margin="normal"
                  value={personaldetail?.Email}
                  onChange={(e) => setpersonaldetail(prevState => ({
                    ...prevState,
                    Email: e.target.value
                  }))}
                />
                <div className="w-full flex justify-end">
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#4234a2",
                    }}
                  >
                    Change email
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                {" "}
                {/* Adjust the xs value to control the width of the country code field */}
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Contact Number
                </Typography>
                <div className="flex gap-[13px]">
                  <TextField
                    fullWidth
                    margin="normal"
                    value={personaldetail?.Number}
                    onChange={(e) => setpersonaldetail(prevState => ({
                      ...prevState,
                      Number: e.target.value
                    }))}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Current city
                </Typography>
                <div>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#000",
                      opacity: "50%",
                    }}
                  >
                    To connect you with opportunities closer to you
                  </Typography>
                </div>
                <TextField
                  fullWidth
                  margin="normal"
                  value={personaldetail?.Address}
                  onChange={(e) => setpersonaldetail(prevState => ({
                    ...prevState,
                    Address: e.target.value
                  }))}
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
                  Gender
                </Typography>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "15px",
                    flexWrap: "wrap",
                  }}
                  aria-label="Platform"
                >
                  <ToggleButton
                    value="Female"
                    style={{
                      borderRadius: "33px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "16px",
                      fontWeight: "400",
                      background: alignment === "Female" ? "#4234A2" : "#fff",
                      color: alignment === "Female" ? "#fff" : "#000",
                    }}
                  >
                    <img src="/images/female-svgrepo-com 1.svg" alt="" />
                    Female
                  </ToggleButton>
                  <ToggleButton
                    value="Male"
                    style={{
                      borderRadius: "33px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "16px",
                      fontWeight: "400",
                      background: alignment === "Male" ? "#4234A2" : "#fff",
                      color: alignment === "Male" ? "#fff" : "#000",
                    }}
                  >
                    <img src="/images/male-svgrepo-com 1.svg" alt="" />
                    Male
                  </ToggleButton>
                  <ToggleButton
                    value="other"
                    style={{
                      borderRadius: "33px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "16px",
                      fontWeight: "400",
                      background: alignment === "other" ? "#4234A2" : "#fff",
                      color: alignment === "other" ? "#fff" : "#000",
                    }}
                  >
                    <img src="/images/star-shine-svgrepo-com 1.svg" alt="" />
                    Others
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Languages you know
                </Typography>
                <ToggleButtonGroup
                  color="primary"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "15px",
                  }}
                  aria-label="Language"
                >
                  {languages.map((language, index) => (
                    <ToggleButton
                      key={index}
                      value={language}
                      style={{
                        borderRadius: "33px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "16px",
                        fontWeight: "400",
                        background: languages.includes(language)
                          ? "#4234A2"
                          : "#fff",
                        color: languages.includes(language) ? "#fff" : "#000",
                      }}
                    >
                      {language}
                      <IconButton
                        aria-label="icon"
                        onClick={(event) =>
                          handleLanguageChange(event, language)
                        }
                        sx={{
                          color: languages.includes(language) ? "#fff" : "#000",
                        }}
                      >
                        {languages.includes(language) ? (
                          <CloseIcon />
                        ) : (
                          <AddIcon />
                        )}
                      </IconButton>
                    </ToggleButton>
                  ))}
                  <ToggleButton
                    style={{
                      borderWidth: "1px",
                      borderRadius: "33px",
                      color: "#4234a2",
                      borderColor: "#4234a2",
                    }}
                    onClick={handleOpenDialog}
                  >
                    <IconButton
                      aria-label="icon"
                      sx={{
                        color: "#4234a2",
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                    Add more languages
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="w-[168px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
            onClick={() => { UpdatePersenalDetail() }}
            style={{
              color: "#fff",
            }}
          >
            Update
          </Button>
        </DialogActions>
      </BootstrapDialog>

      {/* Dialog for adding new language */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Language</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Language"
            fullWidth
            value={newLanguage}
            onChange={handleChangeNewLanguage}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveLanguage}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PersonalDetailsModal;



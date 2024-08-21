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
import { updateApi } from "../utilis/Api_Calling";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddIntroductionVideo = ({ onClose, onOpen, profile }) => {

  const [addvideo, setAddvideo] = useState({
    image3: profile?.introductionVideo
  });
  const [introVideo, setIntroVideo] = useState(profile?.introductionVideo || "");
  const [introVideoName, setIntroVideoName] = useState("");

  const handleFileChange = (file) => {
    if (file) {
      setAddvideo((prevDetails) => ({
        ...prevDetails,
        image3: file,
      }));
      setIntroVideo(file);
      setIntroVideoName(file.name);
    }
  };
  const handleCloseImage = () => {
    setIntroVideo(null);
    setIntroVideoName("");
  };



  const Updateintrovideo = async () => {
    try {
      const UpdatedData = await updateApi('api/StudentRoutes/UpdateStudentProfile', addvideo);
      console.log(UpdatedData?.data);
      alert('Intro Video Update Completed');
      onClose()
    } catch (error) {
      console.error(error);
      alert('Error Intro Video Update');
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
          Introduction video
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
                  Sample
                </Typography>
                {introVideo && (
                  <div>
                    {typeof introVideo === 'object' ? (
                      <video
                        src={URL.createObjectURL(introVideo)}
                        className="w-full h-[186px] mt-[15px]"
                        controls
                      />

                    ) : (
                      <video
                        src={introVideo}
                        className="w-full h-[186px] mt-[15px]"
                        controls
                      />
                    )}
                    <div className="flex justify-between items-center">
                      <p>{introVideoName}</p>
                      <CloseIcon onClick={handleCloseImage} />
                    </div>
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                  variant="subtitle1"
                >
                  Script
                  <span className="text-[#000] ml-[5px] text-opacity-[50%]">
                    (Example)
                  </span>
                </Typography>
                <Typography className="border-[1px] mt-[13px] text-[#000] text-opacity-[50%] text-[14px] font-[400] border-[#d9d9d9] rounded-[3px] p-[20px]">
                  Today we're here with Adriene, and she'll be teaching us the
                  benefits of adding yoga to your routine. Adriene is a yoga
                  teacher and co-founder of Find What Feels Good, a subscription
                  app for yoga lovers
                  <ul className="list-disc px-[20px] mt-[15px]">
                    <li>
                      Hi Adriene, thanks for talking to us today! So what made
                      you start teaching yoga?
                    </li>
                    <li>
                      What are some of the benefits of adding yoga to your
                      routine?
                    </li>
                  </ul>
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
                  Video upload
                  <span className="text-[#000] ml-[5px] text-opacity-[50%]">
                    (Recommended)
                  </span>
                </Typography>
                {introVideo && (
                  <div className="flex flex-col w-[168px] h-[202px] rounded-[3px]">
                    {typeof introVideo === 'object' ? (
                      <video
                        src={URL.createObjectURL(introVideo)}
                        className="w-[168px] h-[168px]"
                        controls
                      />
                    ) : (
                      <video
                        src={introVideo}
                        className="w-[168px] h-[168px]"
                        controls
                      />
                    )}
                    <div className="flex justify-between items-center">
                      <p>{introVideoName}</p>
                      <CloseIcon onClick={handleCloseImage} />
                    </div>
                  </div>
                )}

                <div class="mt-[14px] mb-[7px] lg:w-[312px] h-[58px] flex justify-center items-center rounded-lg border  border-gray-900/25 ">
                  <div class=" flex gap-[5px] text-[16px] border-dashed border-[1px] leading-6 text-gray-600">
                    <img src="/images/uploadVector.svg" alt="" />
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-[500] "
                    >
                      <span>Upload video</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        accept="video/mp4,video/x-m4v,video/*"
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
                  Upload a professional video of yourself (Max file size: 1Mb
                  and max resolution: 500px x 500px. File type- mp4)
                </Typography>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="w-[168px] h-[49px] bg-gradient-to-tl from-[#0f87b3] to-[#462da1] text-[#fff] text-[16px] font-[500]"
            onClick={() => { Updateintrovideo() }}
            style={{
              color: "#fff",
            }}
          >
            Update
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default AddIntroductionVideo;

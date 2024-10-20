import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  TextField,
  DialogActions,
} from "@mui/material";
import { toast } from "react-toastify";
import { PostApi } from "../utilis/Api_Calling";

const ReSchedule = ({
  interviewModal,
  setInterviewModal,
  selectedInterview,
  newDate,
  setNewDate,
  newTime,
  setNewTime,
  editing,
  setEditing,
  Getallinterview,
}) => {
  const handleSubmit = async (id) => {
    try {
      const data = {
        date: newDate,
        Time: newTime,
      };
      let res = await PostApi(
        `api/studentroutes/interview/reschedule/${id}`,
        data
      );
      toast.success("Interview Rescheduled", { autoClose: 1000 });
      Getallinterview();
      setEditing(false);
    } catch (error) {
      toast.error("Interview Rescheduled failed", { autoClose: 1000 });
      console.error(error.response);
    } finally {
      setInterviewModal(false);
    }
  };

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  // Get the current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  };
  return (
    <Dialog
      open={interviewModal}
      onClose={() => setInterviewModal(false)}
      aria-labelledby="interview-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="interview-dialog-title" textAlign={"center"}>
        Reschedule Interview
      </DialogTitle>
      <DialogContent>
        <Typography textAlign={"center"} gutterBottom>
          Current Interview Date: {selectedInterview?.interviewSchedule?.date}
          &nbsp;&nbsp;&nbsp; Current Time:{" "}
          {selectedInterview?.interviewSchedule?.Time}
        </Typography>
        <div className="w-full flex gap-1">
          <div className="w-1/2">
            <TextField
              label="New Date"
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              inputProps={{ min: getTodayDate() }} // Disable past dates
            />
          </div>

          <div className="w-1/2">
            <TextField
              label="New Time"
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              inputProps={{ min: getCurrentTime() }} // Disable past times
            />
          </div>
        </div>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => setInterviewModal(false)}
          color="secondary"
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          onClick={() => handleSubmit(selectedInterview._id)}
          color="primary"
          variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReSchedule;

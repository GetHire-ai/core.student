import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";
import { postformdataApi } from "../utilis/Api_Calling";
import { toast } from "react-toastify";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const JobApplyModel = ({ onOpen, onClose, Jobdetail }) => {
  const navigate = useNavigate();
  const [JobApply, setJobApply] = useState({
    JobId: Jobdetail?._id,
    CompanyId: Jobdetail?.Company?._id,
    Coverletter: "",
    Your_availability: "",
    relocate: "",
    image1: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobApply({ ...JobApply, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setJobApply({ ...JobApply, image1: file });
  };

  const ApplyforJob = async () => {
    // if (JobApply?.Coverletter === "" || JobApply?.Your_availability === "") {
    //   toast.error("Please fill all details", { autoClose: 1000 });
    //   return;
    // }
    try {
      const response = await postformdataApi(
        "api/StudentRoutes/ApplyForJob",
        JobApply
      );
      toast.success("Job Details updated successfully.", { autoClose: 1000 });
      navigate(`/blank/start/${JobApply.JobId}`);
      onClose();
    } catch (error) {
      console.log(error.response);
      toast.error(error?.response?.data?.message, { autoClose: 1000 });
    }
  };

  return (
    <>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={onOpen}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col mb-6">
              <div>
                <h2 className="text-2xl font-semibold">
                  {Jobdetail?.positionName}
                </h2>
              </div>
              <div>
                <p>{Jobdetail?.Company?.Name}</p>
              </div>
            </div>
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
          </div>
          <div className="mb-8">
            <label
              htmlFor="coverLetter"
              className="block text-lg font-semibold mb-2"
            >
              Cover letter
            </label>
            <p>Why should you be hired for this role?</p>
            <textarea
              id="coverLetter"
              name="Coverletter"
              rows="4"
              value={JobApply.Coverletter}
              onChange={handleInputChange}
              className="w-full p-2 border border-zinc-300 rounded-lg"
              placeholder="Mention in detail what relevant skill or past experience you have for this internship. What excites you about this internship? Why would you be a good fit?"
            ></textarea>
          </div>

          {Jobdetail?.jobType === "inOffice" && (
            <div className="mb-8">
              <p className="text-lg font-semibold mb-2">Your availability</p>
              <div className="mb-2 border border-orange-600 rounded-lg p-4 bg-orange-200">
                <label className="inline-flex items-center">
                  <span className="ml-2">
                    This internship requires you to relocate to a location
                    outside of your current city
                  </span>
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600"
                    />
                    <span className="ml-2">
                      I can relocate to {Jobdetail?.location}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-lg mb-2">Confirm your availability</h3>
            <div className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="availability"
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">
                  Yes, I am available to join immediately
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="availability"
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">
                  No (Please specify your availability)
                </span>
              </label>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">
              Custom resume (Optional)
            </h3>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              <span>Upload File</span>
            </button>
            <p className="text-sm text-zinc-600 mt-1">
              Max file size: 10MB. File type - PDF, DOC, DOCX
            </p>
          </div>

          <button
            onClick={ApplyforJob}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Apply now
          </button>
        </div>
      </BootstrapDialog>
    </>
  );
};

export default JobApplyModel;

import React, { useEffect, useState, useLayoutEffect } from "react";
import useScreenAudioRecorder from "../utilis/useScreenAudioRecorder";
import { Box, Typography, Container, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { GetApi, PostApi, Api_Url } from "../utilis/Api_Calling";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";

const StartInterview = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    audioBlobUrl,
    screenVideoRef,
    webcamVideoRef,
    downloadVideo,
    downloadAudio,
    playVideo,
  } = useScreenAudioRecorder();
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [inLoading, setInLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [job, setJob] = useState("");
  const [student, setStudent] = useState("");
  const [level, setLevel] = useState("");
  const [criteria, setCriteria] = useState([]);
  const [questions, setQuestions] = useState([]);
  const getJob = async (id) => {
    setLoading(true);
    try {
      let res = await GetApi(`api/AdminRoutes/GetAJobs/${id}`);
      setLevel(res?.data?.data?.videoInterview?.level);
      const questions = [];
      questions.push(
        ...res?.data?.data?.videoQuestions.flatMap(
          (topicObj) => topicObj.questions
        )
      );
      setQuestions(questions);
      const criterias =
        res?.data?.data?.videoInterview?.topic?.map((skill) => skill) || [];
      setCriteria(criterias);
      setJob(res?.data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const getStudent = async () => {
    setLoading(true);
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setStudent(Getjobdata?.data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(() => {
        playVideo();
      });
    }, 2000);
    return () => clearTimeout(timeoutId); // Clean up timeout on unmount
  }, []);
  useEffect(() => {
    getStudent();
    getJob(jobId);
  }, [jobId]);
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (status === "recording") {
        stopRecording();
      } else {
        handleSubmitVideo();
      }
    }
  };

  const handleSubmitVideo = async () => {
    setInLoading(true);
    try {
      if (audioBlobUrl) {
        setSubmissionStatus("submitting");
        const videoBlob = await fetch(mediaBlobUrl).then((res) => res.blob());
        const audioBlob = new Blob([videoBlob], { type: "audio/wav" });
        const formData = new FormData();
        formData.append("audio", audioBlob);

        // Process audio for transcription
        const aitext = await getTextFromAudio(formData);
        if (!aitext) throw new Error("Transcription failed.");
        // Evaluate the transcribed text
        const points = await getResult(aitext);
        if (!points) throw new Error("Failed to evaluate transcription.");

        const evaluateText = await getTexResult(aitext);
        // Submit the result
        await submitResult(points, aitext);
        setModalContent(
          `Your score is ${points}. \nDetails: ${JSON.stringify(evaluateText)}`
        );
      } else {
        throw new Error("No audio recorded.");
      }
    } catch (error) {
      console.error("Error submitting video:", error);
      setModalContent(`Failed to submit video: ${error.message}`);
    } finally {
      setShowModal(true);
      setInLoading(false);
    }
  };

  const getTextFromAudio = async (formData) => {
    try {
      console.log("audio sent");
      console.log(formData)
      const response = await fetch(
        "https://shining-needed-bug.ngrok-free.app/transcribe",
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(response)
      const jsonData = await response.text();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getResult = async (aitext) => {
    const data = {
      question: aitext,
      criteria: criteria,
    };
    const response = await fetch(
      "https://shining-needed-bug.ngrok-free.app/check-answer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData?.points;
  };

  const getTexResult = async (aitext) => {
    const data = {
      interviewQuestions: aitext,
      criterias: criteria,
    };
    const response = await fetch(
      "https://shining-needed-bug.ngrok-free.app/evaluate-interview",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData?.points;
  };

  const submitResult = async (points, aitext) => {
    try {
      const authToken = localStorage.getItem("StudentToken");
      let headersList = {
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };
  
      let bodyContent = JSON.stringify({
        "jobId": jobId,
        "score": points,
        "aiText": aitext,
      });
  
      let reqOptions = {
        url: "http://localhost:5000/api/testRoutes/result/aitestresult",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };
  
      let response = await axios.request(reqOptions);
      console.log(response.data);
    } catch (error) {
      // Check if the error response exists and if the status code is 403
      if (error.response && error.response.status === 403) {
        alert("You have already given your test.");
      } else {
        console.error("Error submitting result:", error);
      }
  
      // Navigate regardless of the error type
      navigate("/blank/applicationManager");
    }
  };
  

  if (loading) {
    return (
      <div className="text-2xl min-h-[30vh] w-full text-center flex justify-center items-center bg-white">
        Loading...
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-2">
        {status === "idle" ? (
          <div className="w-full flex justify-around px-5">
            <div className="w-3/5 flex flex-col justify-start items-center border rounded-3xl p-2 m-2 bg-[#f1f1f1]">
              <div className="w-full my-4">
                <span className="bg-white text-gray-600 text-sm rounded-3xl px-3 py-1">
                  <i className="fa-solid fa-record-vinyl text-red-600 mr-2"></i>
                  This interview will be recorded for internal reviews
                </span>
              </div>
              {/* <img
                className="w-1/2 rounded-[50%] border mt-5"
                src={
                  student?.Image
                    ? student?.Image
                    : "data:image/png;base64,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"
                }
              /> */}
              <video
                  ref={webcamVideoRef}
                  autoPlay
                  muted
                  className="object-cover h-[50vh] w-full"
                  // style={{objectFit:"fill"}}
                />
            </div>
            <div className="w-1/4 flex flex-col justify-start items-start min-h-[80vh] border rounded-xl py-5 p-3 m-2 bg-white">
              <div className="text-gray-600 text-lg font-[poppins] border-b-slate-500 mb-3">
                Hello {student?.Name}
              </div>
              <div className="text-gray-900 text-md font-[500] font-[poppins]">
                Read The instruction before you start
              </div>
              <div className="flex flex-col gap-2 my-3">
                <div className="text-yellow-500 text-sm font-[400]">
                  Test Your Equipments :{" "}
                  <span className="text-gray-500 text-sm">
                    Ensure your camera, microphone and speaker work properly
                  </span>
                </div>
                <div className="text-yellow-500 text-sm font-[400]">
                  Find a quite , well-lit space :{" "}
                  <span className="text-gray-500 text-sm">
                    choose distraction free location with good lighting ,
                    preferably natural light,
                  </span>
                </div>
                <div className="text-yellow-500 text-sm font-[400]">
                  Minimise clutter :{" "}
                  <span className="text-gray-500 text-sm">
                    Keep your bacground professional and free from distractions
                    using a plain or blurred background
                  </span>
                </div>
                <div className="text-yellow-500 text-sm font-[400]">
                  frame yourself correctly :{" "}
                  <span className="text-gray-500 text-sm">
                    center your self in the frame with your head and shoulder
                    visible
                  </span>
                </div>
                <div className="text-yellow-500 text-sm font-[400]">
                  Maintain professionalism :{" "}
                  <span className="text-gray-500 text-sm">
                    Dress appropriately for AI video call ,As it will be
                    recorded and may be reviewed by an in-person recruiter
                    .First Impression matter .!
                  </span>
                </div>
              </div>
              <div className="w-full">
                <button
                  className="bg-[#2569aa] text-white font-sm font-semibold px-2 py-3 w-full rounded-3xl mt-4"
                  onClick={startRecording}
                >
                  Accept And continue
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex  w-[100vw] justify-between px-2 gap-4 mb-4">
              <div className="w-1/2 border rounded-2xl min-h-[50vh] bg-gray-100 flex justify-center items-center">
                <video
                  ref={webcamVideoRef}
                  autoPlay
                  muted
                  className="object-cover h-[50vh] w-full"
                  // style={{objectFit:"fill"}}
                />
              </div>
              <div className="w-1/2 border rounded-2xl min-h-[50vh] bg-gray-100 flex justify-center items-center">
                <video
                  ref={screenVideoRef}
                  autoPlay
                  muted
                  className="object-cover h-[50vh] w-full"
                />
              </div>
            </div>
            <div className="w-full border rounded-2xl min-h-[10vh] flex flex-col p-3">
              <span className="text-md">{questions[currentQuestionIndex]}</span>
              <button
                onClick={handleNextQuestion}
                className="mr-auto p-1 px-3 bg-blue-600 text-white border-none rounded cursor-pointer mt-2.5"
              >
                {currentQuestionIndex < questions.length - 1
                  ? "Next Question"
                  : "Finish"}
              </button>
            </div>
          </>
        )}
      </div>
      {inLoading && (
        <ResultModal
          open={showModal}
          onClose={() => setShowModal(false)}
          content={modalContent}
          isLoading={inLoading}
        />
      )}
    </div>
  );
};
export default StartInterview;

const ResultModal = ({ open, onClose, content, isLoading }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{isLoading ? "Processing" : "Submission Result"}</DialogTitle>
    <DialogContent>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[100px]">
          <CircularProgress />
        </div>
      ) : (
        <Typography variant="body1">{content}</Typography>
      )}
    </DialogContent>
    {!isLoading && (
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    )}
  </Dialog>
);

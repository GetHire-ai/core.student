import { useState, useRef } from "react";
import { toast } from "react-toastify";
import RecordRTC from "recordrtc";
const useScreenAudioRecorder = () => {
  const [status, setStatus] = useState("idle");
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
  const [audioBlobUrl, setAudioBlobUrl] = useState(null);
  const screenVideoRef = useRef(null);
  const webcamVideoRef = useRef(null);
  const recorderRef = useRef(null);
  const audioRecorderRef = useRef(null);
  const streamsRef = useRef({
    displayStream: null,
    audioStream: null,
    webcamStream: null,
  });
  const getDisplayStream = async () => {
    try {
      const displayStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });
      console.log("Display stream obtained.");
      return displayStream;
    } catch (error) {
      console.error("Error getting display stream: ", error);
      throw new Error("Display permission denied.");
    }
  };
  const getAudioStream = async () => {
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      console.log("Audio stream obtained.");
      return audioStream;
    } catch (error) {
      console.error("Error getting audio stream: ", error);
      throw new Error("Audio permission denied.");
    }
  };
  const getWebcamStream = async () => {
    try {
      const webcamStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      console.log("Webcam stream obtained.");
      return webcamStream;
    } catch (error) {
      console.error("Error getting webcam stream: ", error);
      throw new Error("Webcam permission denied.");
    }
  };
  const playVideo = async () => {
    try{

      const webcamStream = await getWebcamStream();
      webcamVideoRef.current.srcObject = webcamStream;
      webcamVideoRef.current.play();
      setStatus("idle");
    }
    catch (err){

    }
  }
  const startRecording = async () => {
    setStatus("requesting_permissions");
    try {
      const webcamStream = await getWebcamStream();
      webcamVideoRef.current.srcObject = webcamStream;
      webcamVideoRef.current.play();
      const audioStream = await getAudioStream();
      const displayStream = await getDisplayStream();
      streamsRef.current = { displayStream, audioStream, webcamStream };
      const combinedStream = new MediaStream([
        ...displayStream.getVideoTracks(),
        ...audioStream.getAudioTracks(),
      ]);
      if (!combinedStream.getAudioTracks().length) {
        console.error("No audio tracks found in the combined stream.");
        toast.error(
          "No audio tracks found. Ensure your microphone is enabled.",
          { autoClose: 1000 }
        );
        setStatus("idle");
        return;
      }
      console.log("All permissions granted. Starting recording.");
      setStatus("recording");

      // Start recording video
      recorderRef.current = new RecordRTC(combinedStream, {
        type: "video",
        mimeType: "video/webm",
        bitsPerSecond: 300000,
      });

      recorderRef.current.startRecording();

      // Start recording audio separately
      audioRecorderRef.current = new RecordRTC(audioStream, {
        type: "audio",
        mimeType: "audio/webm",
      });
      audioRecorderRef.current.startRecording();

      screenVideoRef.current.srcObject = combinedStream;
      screenVideoRef.current.play();
    } catch (error) {
      console.error("Error starting recording: ", error.message);
      setStatus("idle");
      toast.error(`Failed to start recording: ${error.message}`, {
        autoClose: 1000,
      });
    }
  };
  const stopRecording = () => {
    setStatus("stopped");

    // Stop video recording
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const url = URL.createObjectURL(blob);
      setMediaBlobUrl(url);
    });

    // Stop audio recording
    audioRecorderRef.current.stopRecording(() => {
      const blob = audioRecorderRef.current.getBlob();
      const url = URL.createObjectURL(blob);
      setAudioBlobUrl(url);
    });

    // Stop and clear all streams
    const { displayStream, audioStream, webcamStream } = streamsRef.current;
    if (displayStream) {
      displayStream.getTracks().forEach((track) => track.stop());
    }
    if (audioStream) {
      audioStream.getTracks().forEach((track) => track.stop());
    }
    if (webcamStream) {
      webcamStream.getTracks().forEach((track) => track.stop());
    }

    screenVideoRef.current.srcObject = null;
    webcamVideoRef.current.srcObject = null;
  };

  const downloadVideo = () => {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = mediaBlobUrl;
    a.download = "recorded-video.webm";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(mediaBlobUrl);
    document.body.removeChild(a);
  };
  const downloadAudio = () => {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = audioBlobUrl;
    a.download = "recorded-audio.webm";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(audioBlobUrl);
    document.body.removeChild(a);
  };
  return {
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
  };
};
export default useScreenAudioRecorder;

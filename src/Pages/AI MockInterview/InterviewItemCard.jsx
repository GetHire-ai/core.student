import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; // React Router

function InterviewItemCard({ interview }) {
  const navigate = useNavigate(); // React Router's navigate

  const onStart = () => {
    navigate("/dashboard/interview/" + interview.mockId); // React Router navigation
  };

  const onFeedbackPress = () => {
    navigate("/dashboard/interview/" + interview.mockId + "/feedback"); // React Router navigation
  };

  return (
    <div className="border shadow-sm rounded-lg p-3 my-4">
      <h2 className="font-bold text-blue-600">{interview.jobPosition}</h2>
      <h2 className="text-sm text-grey-600">
        {interview.jobExperience} Years of Experience
      </h2>
      <h2 className="text-xs text-grey-600">
        Created At : {interview.createdAt}
      </h2>
      <div className="flex justify-between mt-2 gap-5">
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={onFeedbackPress}
        >
          Feedback
        </Button>
        <Button size="sm" className="w-full" onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewItemCard;

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

const SkillTestModal = ({ isOpen, onRequestClose, skill }) => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [mcqQuestions, setMcqQuestions] = useState([]);

  const getMCQ = async () => {
    setLoading(true);
    const data = {
      categories: `give only on ${skill} basis`,
      experience: "junior",
      count: "5",
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      const response = await fetch(
        "https://shining-needed-bug.ngrok-free.app/generate-mcq",
        {
          method: "POST",
          headers: config.headers,
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();

      const filterAndFlattenQuestions = (data) => {
        if (typeof data === "object" && data !== null) {
          if (Array.isArray(data)) {
            return data.flatMap((item) => filterAndFlattenQuestions(item));
          }
          if (
            data.hasOwnProperty("question") &&
            Array.isArray(data.options) &&
            data.hasOwnProperty("answer")
          ) {
            return [data];
          }

          return Object.keys(data).flatMap((key) =>
            filterAndFlattenQuestions(data[key])
          );
        }
        return [];
      };
      const allQuestions = filterAndFlattenQuestions(responseData);
      setMcqQuestions(allQuestions);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const currentQuestion = mcqQuestions[currentQuestionIndex];

  const handleAnswerChange = (question, answer) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    let score = 0;
    let correctCount = 0;
    let incorrectCount = 0;

    mcqQuestions.forEach((question) => {
      const correctAnswer = question.answer;
      const selectedAnswer = answers[question.question];
      if (correctAnswer === selectedAnswer) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });
    const pointsPerQues = 100 / mcqQuestions.length;
    score = pointsPerQues * correctCount;

    const roundedScore = score.toFixed(2);
    setResult(roundedScore);

    try {
      let data = {
        ...skill,
        score: roundedScore,
      };
      // Uncomment the lines below when you are ready to submit the score
      let res = await PutApi(
        "api/StudentRoutes/UpdateStudentProfile/updateskillscore",
        data
      );
      if (res.status == 200) {
        toast.success("Test Completed Successfully", { autoClose: 1000 });
        onRequestClose();
        onRequestClose();
        setAnswers({});
        setMcqQuestions([]);
        setResult(null);
        setCurrentQuestionIndex(0);
      }
    } catch (error) {
      toast.error("Error in add result", { autoClose: 1000 });
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose();
        setAnswers({});
        setMcqQuestions([]);
        setResult(null);
        setCurrentQuestionIndex(0);
      }}
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
    >
      <div className="p-4">
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          textAlign={"center"}
        >
          Skill Test for {skill?.Skill}
        </Typography>
        {mcqQuestions.length === 0 && !loading && (
          <div className="w-full text-center">
            <Button variant="contained" color="primary" onClick={getMCQ}>
              Start Test
            </Button>
          </div>
        )}
        {loading && <div className="text-center w-full">Loading...</div>}
        {mcqQuestions.length !== 0 && (
          <div className="w-full text-center">
            {currentQuestionIndex + 1}/{mcqQuestions.length}
          </div>
        )}
        <hr />
        <br />
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          textAlign={"center"}
        >
          {currentQuestion?.question}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            name={currentQuestion?.question}
            value={answers[currentQuestion?.question] || ""}
            onChange={(e) =>
              handleAnswerChange(currentQuestion?.question, e.target.value)
            }
          >
            <Grid container spacing={2}>
              {currentQuestion?.options?.map((option, idx) => (
                <Grid item xs={6} key={idx}>
                  <FormControlLabel
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </FormControl>
        <div className="mt-4 flex justify-between">
          <Button
            variant="contained"
            color="primary"
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          {currentQuestionIndex < mcqQuestions.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default SkillTestModal;

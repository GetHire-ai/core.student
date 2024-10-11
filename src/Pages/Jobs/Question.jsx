import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetApi } from "../utilis/Api_Calling";
import MyModal from "./MyModal";
import SkillTestModal from "./SkillTestModal";
import {
  CircularProgress,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [job, setJob] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [modal, setModal] = useState(false);
  const [skillTest, setSkillTest] = useState(false);
  const [student, setStudent] = useState(null);

  const getJob = async () => {
    setLoading(true);
    try {
      let res = await GetApi(`api/AdminRoutes/GetAJobs/${id}`);
      const skillFields =
        res?.data?.data?.skillAssessment
          ?.filter((skill) => skill.type === "skill" && skill.mustHave === true)
          ?.map((skill) => skill.skill) || [];
      setSkills(skillFields);
      setJob(res?.data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      getStudent();
    }
  };

  const getStudent = async () => {
    setLoading(true);
    try {
      let res = await GetApi(`api/studentRoutes/GetStudentProfile`);
      setStudent(res?.data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRetest = (skill) => {
    setSelectedSkill(skill);
    setSkillTest(true);
  };

  const handleTest = (skill) => {
    setSelectedSkill({ Skill: skill, score: 0 });
    setSkillTest(true);
  };

  useEffect(() => {
    getJob();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center bg-white">
        <span className="text-2xl font-semibold">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Skill Assessment
      </Typography>
      <Typography variant="p" sx={{ mb: 4, textAlign: "center" }}>
        These Skills are required by recruiter
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          minHeight: "80vh",
          gap: 3,
          p: 3,
        }}
      >
        {skills.length > 0 ? (
          skills.map((skill) => {
            const matchedSkill = student?.Skill_Set?.find(
              (skillObj) =>
                skillObj?.Skill?.toLowerCase() === skill.toLowerCase()
            );
            const score = matchedSkill?.score || 0;

            return (
              <Card
                key={skill}
                sx={{
                  width: "100%",
                  maxWidth: 600,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 2,
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {skill}
                  </Typography>
                  {matchedSkill ? (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <CircularProgress variant="determinate" value={score} />
                      <Typography variant="body1">{score}%</Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleRetest(matchedSkill)}
                      >
                        Retest
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleTest(skill)}
                    >
                      Test
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Typography variant="body1">
            No skills available for this job.
          </Typography>
        )}

        <SkillTestModal
          isOpen={skillTest}
          onRequestClose={() => {
            setSkillTest(false);
            setSelectedSkill(null);
          }}
          skill={selectedSkill}
          job={job}
        />

        <MyModal
          open={modal}
          handleNavigate={() => navigate(`/blank/interview-setting/${id}`)}
          handleClose={() => setModal(false)}
          jobId={id}
        />
      </Box>
    </>
  );
};

export default Question;

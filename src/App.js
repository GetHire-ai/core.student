import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home/Home";
// import Notification from "./Pages/Notification/Notification";
// import ApplicationManager from "./Pages/ApplicationManager/ApplicationManager";
import Training from "./Pages/Training/Training";
import MyBoard from "./Pages/MyBoard/MyBoard";
import CollegeBoard from "./Pages/MyBoard/CollegeBoard";
import AICounsellor from "./Pages/AICounsellor/AICounsellor";
import ReviewApplication from "./Pages/ApplicationManager/ReviewApplication";
import SkillsManager from "./Pages/SkillsManager/SkillsManager";
import Suggestion from "./Pages/SkillsManager/Suggestion";
import Certifiaction from "./Pages/SkillsManager/Certifiaction";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Jobs from "./Pages/Jobs/Jobs";
import JobViewDetails from "./Pages/Jobs/JobViewDetails";
import TotalInternship from "./Pages/Internship/TotalInternship";
import InternshipViewDetails from "./Pages/Internship/InternshipViewDetails";
import HeaderLayout from "./Layouts/HeaderLayout";
import Clubs from "./Pages/Clubs/Clubs";
import ClubsViewAchivements from "./Pages/Clubs/ClubsViewAchivements";
import JoinedClub from "./Pages/Clubs/JoinedClub";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Bookmarks from "./Pages/Jobs/Bookmarks";
import Start from "./Pages/Jobs/Start";
import Continue from "./Pages/Jobs/Continue";
import Interview from "./Pages/Jobs/Interview";
import Successful from "./Pages/Jobs/Successful";
import ISetting from "./Pages/Jobs/ISetting";
import StartInterview from "./Pages/Jobs/StartInterview";
import EndInterview from "./Pages/Jobs/EndInterview";
import Question from "./Pages/Jobs/Question";
import Report from "./Pages/Jobs/Report";
import Premium from "./Pages/Premium";
// import Chat from "./Pages/Chat/Chat.jsx";
import AllRounds from "./Pages/Jobs/AllRounds";
import Todo from "./Pages/Todo/Index";
import ResumeAnalyser from "./Pages/AI Tools/ResumeAnalyser.jsx";
import ResumeBuilder from "./Pages/AI Tools/ResumeBuilder.jsx";
import MockInterview from "./Pages/AI Tools/MockInterview.jsx";

import AITools from "./Pages/AiTools/AiTools.js";

import Chat from "./Pages/Chat/Chat.jsx"
import Notification from "./Pages/Notification/Notification";
import ApplicationManager from "./Pages/ApplicationManager/ApplicationManager";

// imporint all the pages of carrer blogs
import CareerMain from "./Pages/CarearBlogs/CareerMain.jsx";
import ArticlePage from "./Pages/CarearBlogs/ArticalPage.jsx";
import CareerAdvise from "./Pages/CarearBlogs/CareerBarNavigate/CareerAdvise.jsx";
import HiringPlatefrom from "./Pages/CarearBlogs/CareerBarNavigate/HiringPlateform.jsx";
import HrInsight from "./Pages/CarearBlogs/CareerBarNavigate/HrInsight.jsx";
import InterviewAdvice from "./Pages/CarearBlogs/CareerBarNavigate/InterviewAdvice.jsx";
import News from "./Pages/CarearBlogs/CareerBarNavigate/News.jsx";
import ResumeEdit from "./Pages/AI Tools/ResumeEdit.jsx";

// importing events
import MainEvent from "./Pages/Events/MainEvent.jsx";

// importing coevr letter
import CoverLetterGenerator from "./Pages/AI Tools/CoverLetterGenerator.jsx";

// importing invite
import Invite from './Pages/Invite/Invite';

// importign main interships section
import AllInternship from "./Pages/MainInternShip/AllRoundsInter.jsx";
import Jobs2 from "./Pages/Jobs/Jobs2.jsx";

const ProjectRoutes = () => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const companyToken = localStorage.getItem("StudentToken");
      if (companyToken) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      await new Promise((resolve) => setTimeout(resolve, 10));
      setLoading(false);
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div></div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/"
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route index element={<Home />} />
          {/* <Route path="/Notification" element={<Notification />} /> */}
          <Route path="/premium" element={<Premium />} />
          {/* <Route path="/ApplicationManager" element={<ApplicationManager />} /> */}
          <Route
            path="/ReviewApplication/:id"
            element={<ReviewApplication />}
          />
          <Route path="/Training" element={<Training />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/MyBoard" element={<MyBoard />} />
          <Route path="/CollegeBoard" element={<CollegeBoard />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="/AICounsellor" element={<AICounsellor />} />
          <Route path="/SkillManager" element={<SkillsManager />} />
          <Route path="/Suggestion" element={<Suggestion />} />
          <Route path="/Certification" element={<Certifiaction />} />
          <Route path="/blank/bookmarked" element={<Bookmarks />} />
        </Route>
        <Route path="/blank" element={<HeaderLayout />}>
          <Route path="/blank/Portfolio" element={<Portfolio />} />
          <Route path="/blank/Jobs" element={<Jobs />} />
          <Route path="/blank/Jobs/:query" element={<Jobs2 />} />
          <Route
            path="/blank/ai-tools/resume-analyser"
            element={<ResumeAnalyser />}
          />
          <Route
            path="/blank/ai-tools/resume-builder"
            element={<ResumeBuilder />}
          />
          <Route
            path="/blank/ai-tools/resume-builder/edit/:id"
            element={<ResumeEdit />}
          />
          <Route
            path="/blank/ai-tools/mockinterview"
            element={<MockInterview />}
          />
          <Route path="/blank/allrounds/:id" element={<AllRounds />} />
          <Route path="/blank/start/:jobId" element={<Start />} />
          <Route path="/blank/continue/:jobId" element={<Continue />} />
          <Route path="/blank/interview/:jobId" element={<Interview />} />
          <Route path="/blank/successful/:id" element={<Successful />} />
          <Route path="/blank/interview-setting/:id" element={<ISetting />} />
          <Route path="/blank/aitools" element={<AITools />} />
          <Route path="/blank/career" element={<CareerMain />} />
          <Route path="/blank/article/:id" element={<ArticlePage />} />
          {/* all career page nac routes */}
          <Route path="/blank/careerAdvise" element={<CareerAdvise />} />;
          <Route path="/blank/hiringPlteform" element={<HiringPlatefrom />} />;
          <Route path="/blank/hrInsight" element={<HrInsight />} />;
          <Route path="/blank/interviewAdvice" element={<InterviewAdvice />} />;
          <Route path="/blank/news" element={<News />} />;
          {/* all events section */}
          <Route path="/blank/mainEvent" element={<MainEvent />} />
          {/* cover letter */}
          <Route path="/blank/ai-tools/coverLetterGen" element={<CoverLetterGenerator />} />
          {/* invite page  */}
          <Route path="/blank/invite" element={<Invite />} />
          {/* imporitng main intership sections here */}
          <Route path="/blank/mainIntership" element={<AllInternship />} />

          <Route path="/blank/chats" element={<Chat />} />
          <Route path="/blank/notification" element={<Notification />} />
          <Route path="/blank/applicationManager" element={<ApplicationManager />} />
          


          <Route
            path="/blank/start-interview/:jobId"
            element={<StartInterview />}
          />
          <Route path="/blank/end-interview" element={<EndInterview />} />
          <Route path="/blank/question/:id" element={<Question />} />
          <Route path="/blank/report/:id" element={<Report />} />
          <Route
            path="/blank/JobViewDetails/:id"
            element={<JobViewDetails />}
          />
          <Route path="/blank/TotalInternship" element={<TotalInternship />} />
          <Route
            path="/blank/InternshipViewDetails"
            element={<InternshipViewDetails />}
          />
          <Route path="/blank/clubs" element={<Clubs />} />
          <Route
            path="/blank/clubsViewAchivements"
            element={<ClubsViewAchivements />}
          />
          <Route path="/blank/JoinedClubs" element={<JoinedClub />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;

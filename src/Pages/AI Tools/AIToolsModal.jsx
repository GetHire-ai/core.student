import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// importing imgs
import Builder from "../../assets/Images/image-197 builder cpoy.png"
import Analyzer from "../../assets/Images/analyzer.jpeg"
import Career from "../../assets/Images/career.jpeg"
import Moke from "../../assets/Images/moke interviw.jpeg"
import Auto from "../../assets/Images/applyer.jpeg"
import CoverLetter from "../../assets/Images/new cover letter.jpg"

const AIToolsModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Box
        className="flex justify-center items-center h-screen p-4 font-[poppins]"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-lg overflow-y-auto max-h-[90vh] w-full max-w-4xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full sticky z-10 top-0 flex justify-between px-5 py-3 rounded-t-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <span>Experience AI Tools</span>
            <span className="cursor-pointer" onClick={onClose}>
              Close
            </span>
          </div>
          <Box
            className="bg-[#e1ecfe] p-8 rounded-b-lg"
          >
            <div className="flex flex-wrap justify-around gap-4">
              <Card
                desc={
                  "Leverage the power of AI to customize your resume targeted for jobs you ..."
                }
                onClose={onClose}
                title="Resume Builder"
                link="/blank/ai-tools/resume-builder"
                img={Builder}
              />
              <Card
                desc={
                  "Fine-tune your resume in minutes with our Resume Analyzer. Perfect for students aiming to stand out and secure that first big opportunity..."
                }
                onClose={onClose}
                title="Resume Analyzer"
                link="/blank/ai-tools/resume-analyser"
                img={Analyzer}
              />
              <Card
                desc={
                  "Prepare confidently with our AI Mock Interview tool, designed to help students sharpen their skills and land that dream job..."
                }
                onClose={onClose}
                title="Ai Mock Interview"
                link="/blank/ai-tools/mockinterview"
                img={Moke}
              />
              <Card
                desc={
                  "Get personalized advice with our Career Counselor, tailored to help students find their perfect career fit and achieve their goals.."
                }
                onClose={onClose}
                title="Career Counsellor"
                // link="/blank/ai-tools/mockinterview"
                link="123"
                img={Career}
              />
              <Card
                desc={
                  "Let our AI Auto Applier streamline your job search by automatically applying to the best-matched opportunities, giving you more time to focus on what matters most..."
                }
                onClose={onClose}
                title="Ai auto applier"
                // link="/blank/ai-tools/mockinterview"
                link="123"
                img={Auto}
              />
              <Card
                desc={
                  "Generate personalized, professional cover letters in seconds with our AI Cover-Letter Generator, tailored to highlight your strengths and match the job you're applying for..."
                }
                onClose={onClose}
                title="Ai cover-letter Generator"
                link="/blank/ai-tools/coverLetterGen"
                // link="123"
                img={CoverLetter}
              />
              {/* Add more Card components as needed */}
            </div>
          </Box>
        </div>
      </Box>
    </Modal>
  );
};

// const Card = ({ title, desc, link, onClose , img }) => {
//   const navigate = useNavigate();
//   return (
//     <Box
//       className="bg-white p-4 rounded-lg shadow-lg w-[30%] h-auto transform transition-transform duration-300 hover:scale-105"
//       sx={{
//         border: "1px solid #e5e7eb",
//         '&:hover': {
//           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//         }
//       }}
//     >
//       <img
//         src={img}
//         alt={title}
//         className="w-full h-36 object-cover mb-4 rounded-md"
//       />
//       <h2 className="text-xl text-gray-800 font-semibold mb-2">{title}</h2>
//       <p className="text-sm text-gray-600 mb-4">{desc}</p>
//       <Button
//         variant="contained"
//         color="primary"
//         className="bg-blue-500 text-white hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-colors duration-300"
//         onClick={() => {
//           navigate(link);
//           onClose();
//         }}
//       >
//         Get Started
//       </Button>
//     </Box>
//   );
// };


const Card = ({ title, desc, link, onClose, img }) => {
  const navigate = useNavigate();

  return (
    <Box
      className="bg-white p-5 rounded-xl shadow-md w-[30%] h-auto transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
      sx={{
        border: "1px solid #e0e0e0",
        '&:hover': {
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <div>
        <img
          src={img}
          alt={title}
          className="w-full h-40  object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-xl text-gray-900 font-bold mb-3">{title}</h2>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">{desc}</p>
      </div>
      <Button
        variant="contained"
        color="primary"
        className="bg-blue-600 text-white py-2 rounded-md shadow-sm hover:bg-blue-700 hover:shadow-lg transition-all duration-300 mt-auto"
        onClick={() => {
          if (link !== '123') {
            navigate(link);
            onClose();
          }
        }}
        disabled={link === '123'}
      >
        {link === '123' ? 'Coming Soon...' : 'Get Started'}
      </Button>
    </Box>
  );
};






export default AIToolsModal;

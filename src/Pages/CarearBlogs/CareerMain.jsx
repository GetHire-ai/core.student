import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import ArticlePage from "./ArticalPage";
// import articles from "./ArticalsData";
import { useNavigate } from "react-router-dom";
import { GetApi } from "../utilis/Api_Calling";

const CareerMain = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const itemsPerPage = 3;
  const section = articles[currentSection];
  const totalPages = Math.ceil(section?.cards.length / itemsPerPage);
  const cardsToDisplay = section?.cards.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const [moreHover, setMoreHover] = useState(false);
  let getBlogs = async () => {
    try {
      let res = await GetApi(`api/blogroutes/all`);
      setArticles([
        {
          title: "Career Advice",
          cards: res.data.data,
        },
        {
          title: "Fresher Advice",
          cards: res.data.data,
        },
        {
          title: "Interview Advice",
          cards: res.data.data,
        },
        {
          title: "Resume Tips",
          cards: res.data.data,
        },
        {
          title: "News",
          cards: res.data.data,
        },
        {
          title: "Hiring Advice",
          cards: res.data.data,
        },
        {
          title: "Hiring Platform",
          cards: res.data.data,
        },
        {
          title: "Hiring Guidelines",
          cards: res.data.data,
        },
      ]);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="font-sans">
      <header className="text-center py-8 -mt-4">
        <h1 className="text-7xl font-bold">
          <span className="text-blue-900">the</span>{" "}
          <span className="text-yellow-500">career</span>{" "}
          <span className="text-blue-900">central</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Access a comprehensive collection of guidance and resources for
          securing your dream job - interview tips, cover letter templates,
          insights into job market trends, and more!
        </p>
      </header>

      {/* Navigation Bar */}
      <nav className="flex justify-center space-x-8 border-b border-gray-200 py-4">
        <p
          className="text-gray-700 hover:text-green-600 hover:cursor-pointer"
          onClick={() => navigate("/blank/careerAdvise")}
        >
          Hiring Advice
        </p>
        <p
          className="text-gray-700 hover:text-green-600 hover:cursor-pointer"
          onClick={() => navigate("/blank/careerAdvise")}
        >
          Career Advice
        </p>
        <p
          className="text-gray-700 hover:text-green-600 hover:cursor-pointer"
          onClick={() => navigate("/blank/hiringPlteform")}
        >
          Hiring Platform
        </p>
        <p
          className="text-gray-700 hover:text-green-600 hover:cursor-pointer"
          onClick={() => navigate("/blank/interviewAdvice")}
        >
          Interview Advice
        </p>
        <p
          className="text-gray-700 hover:text-green-600 hover:cursor-pointer"
          onClick={() => navigate("/blank/news")}
        >
          News
        </p>
        <p
          className="text-gray-700 hover:text-green-600 hover:cursor-pointer"
          onClick={() => navigate("/blank/hrInsight")}
        >
          HR Insights
        </p>
        <p
          className="text-gray-700 hover:text-green-600 hover:cursor-pointer relative"
          onMouseEnter={() => setMoreHover(true)}
          onMouseLeave={() => setMoreHover(false)}
        >
          More
        </p>
      </nav>
      {moreHover && (
        <div
          className="flex flex-col absolute w-44 h-40 gap-2 text-sm justify-center items-center bg-blue-100 text-black shadow-slate-500 ml-[72%] -mt-4"
          onMouseEnter={() => setMoreHover(true)}
          onMouseLeave={() => setMoreHover(false)}
        >
          <p className=" hover:cursor-pointer hover:text-blue-700">
            Product inovation
          </p>
          <p className=" hover:cursor-pointer hover:text-blue-700">
            Fresher advice
          </p>
          <p className=" hover:cursor-pointer hover:text-blue-700">
            Resume Tips
          </p>
          <p className=" hover:cursor-pointer hover:text-blue-700">
            Hiring Guideline
          </p>
          <p className=" hover:cursor-pointer hover:text-blue-700">
            City wise jobs
          </p>
        </div>
      )}

      {/* Featured Article */}
      {/* <section className="flex justify-center py-8">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <image
            src="https://via.placeholder.com/400" // Replace with the actual image URL
            alt="Article"
            className="w-full h-auto rounded-lg"
          />
          <div>
            <p className="text-sm text-gray-500">Career Advice</p>
            <h2 className="text-3xl font-bold mt-2">
              Best Marketing Jobs After Graduation: A Guide to Thriving Career
            </h2>
            <p className="text-gray-600 mt-4">
              Graduating from college, getting that degree in your hand, and
              tossing those caps high in the air on your graduation day is an
              achievement...
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Vishal - August 9, 2024
            </p>
          </div>
        </div>
      </section> */}

      <Routes>
        {/* Default Route showing the list of articles */}
        <Route
          path="/"
          element={
            <div className="p-8 ">
              {articles.map((section, index) => (
                <div key={index} className="mb-12">
                  {/* Section Title */}
                  <p className="text-2xl ml-[13%] font-semibold">
                    {section.title}
                  </p>

                  {/* Display Cards for the current section */}
                  <section className="flex justify-center  py-8">
                    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {section?.cards
                        .slice(
                          currentPage * itemsPerPage,
                          (currentPage + 1) * itemsPerPage
                        )
                        .map((card) => (
                          <ArticleCard
                            key={card._id}
                            id={card._id}
                            image={card.image}
                            title={card.title}
                            text={card.text}
                          />
                        ))}
                    </div>
                  </section>
                  <hr className="border-1 w-[71%] ml-52 border-gray-300"></hr>
                </div>
              ))}
            </div>
          }
        />
        <Route path="/blank/article/:id" element={<ArticlePage />} />
      </Routes>
      {/* Route for individual Article Pages */}

      {/* Floating Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow-lg flex items-center">
          <span className="mr-2">💼</span> Looking for a job?
        </button>
      </div>
    </div>
  );
};

export default CareerMain;

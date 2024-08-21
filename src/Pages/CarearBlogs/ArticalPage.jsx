import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { GetApi } from "../utilis/Api_Calling";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setarticle] = useState(null);
  let getBlogs = async () => {
    try {
      let res = await GetApi(`api/blogroutes/getone/${id}`);
      setarticle(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{article?.title}</h1>
      <img
        src={article?.image}
        alt={article?.title}
        className="w-28 h-28 rounded-lg mb-4"
      />
      <p className="text-gray-600">{article?.details}</p>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar with Table of Contents */}
        <div className="md:w-1/4 p-4 bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li>
              <Link to="section1" smooth={true} duration={500}>
                1. What Does a Marketing Professional Do?
              </Link>
            </li>
            <li>
              <Link to="section2" smooth={true} duration={500}>
                2. Benefits of Having a Marketing Job
              </Link>
            </li>
            <li>
              <Link to="section3" smooth={true} duration={500}>
                3. What Are The Best Marketing Jobs After Graduation?
              </Link>
            </li>
            <li>
              <Link to="section4" smooth={true} duration={500}>
                4. How Can Apna Help You Find the Perfect Marketing Job?
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="md:w-3/4 p-4">
          <section id="section1" className="mb-8">
            {article?.title}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;

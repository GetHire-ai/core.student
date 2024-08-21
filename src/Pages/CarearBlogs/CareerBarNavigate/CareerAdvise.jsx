import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ArticleCard from "../ArticleCard";

import { GetApi } from "../../utilis/Api_Calling";

function CareerAdvise() {
  const [careerAdvisorySection, setCareerAdvisorySection] = useState();
  let getBlogs = async () => {
    try {
      let res = await GetApi(`api/blogroutes/all`);
      setCareerAdvisorySection({ cards: res?.data?.data });
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="p-8">
              {/* Check if "Career Advisory" section exists */}
              {careerAdvisorySection ? (
                <div className="mb-12">
                  {/* Section Title */}
                  <h2 className="text-2xl font-bold mb-4">
                    Career Advice
                  </h2>

                  {/* Display Cards for the "Career Advisory" section */}
                  <section className="flex justify-center py-8">
                    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {careerAdvisorySection.cards.map((card) => (
                        <ArticleCard
                          key={card._id}
                          id={card._id}
                          image={card.image}
                          title={card.title}
                          description={card.description}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              ) : (
                <p>No Career Advisory section found.</p>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default CareerAdvise;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ArticleCard from "../ArticleCard";
import articles from "../ArticalsData";

function News() {
  // Filter to get only the "Career Advisory" section
  const careerAdvisorySection = articles.find(
    (section) => section.title === "News"
  );

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
                    {careerAdvisorySection.title}
                  </h2>

                  {/* Display Cards for the "Career Advisory" section */}
                  <section className="flex justify-center py-8">
                    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {careerAdvisorySection.cards.map((card) => (
                        <ArticleCard
                          key={card.id}
                          id={card.id}
                          img={card.img}
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

export default News;


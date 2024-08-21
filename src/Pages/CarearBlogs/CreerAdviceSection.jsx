import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { GetApi } from "../utilis/Api_Calling";

let articles;
let getBlogs = async () => {
  try {
    let res = await GetApi(`api/blogroutes/all`);
    articles = res.data.data;
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  getBlogs();
}, []);

const CareerAdviceSection = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard
          key={article._id}
          id={article}
          image={article.image}
          title={article.title}
          text={article.text}
          category={article.category}
          author={article.author}
          date={article.date}
        />
      ))}
    </div>
  );
};

export default CareerAdviceSection;

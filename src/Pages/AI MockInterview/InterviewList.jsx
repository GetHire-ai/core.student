import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";
import { toast } from "react-toastify";
import { GetApi } from "../utilis/Api_Calling";

function InterviewList() {
  const [interviewList, setInterviewList] = useState([]);
  const getInterview = async () => {
    try {
      let res = await GetApi(`api/studentroutes/ai-interview`);
      setInterviewList(res?.data?.data);
      console.log(res?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getInterview();
  }, []);

  return (
    <div>
      <h2 className="font-medium text-xl">Previous AI Mock Interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {interviewList.map((interview, index) => (
          <InterviewItemCard interview={interview} key={index} />
        ))}
      </div>
    </div>
  );
}

export default InterviewList;

import React from "react";

const MockInterview = () => {
  return (
    // <div className="flex flex-col justify-start items-center pt-36 bg-gradient-to-l from-[#4086f0] to-[#15bb98] min-h-screen">
    //   <span className="text-xl font-bold text-gray-800">
    //     included with Premium Membership
    //   </span>
    //   <span className="text-6xl font-bold text-gray-800 mb-5">
    //     Ace Your upcoming job interviews !
    //   </span>
    //   <span className="text-xl font-semibold text-gray-600 mb-5">
    //     practice role and company specific interview questions and get real time
    //     feedback
    //     <br /> from your private and judgment free AI interview Coach .S tart
    //     your mock interview
    //   </span>
    //   <button className="bg-white text-blue-600 font-semibold px-5 py-2 mt-5">
    //     Start Your Mock interview
    //   </button>
    // </div>
    <div className="w-full">
      <div className="w-full flex justify-around items-center bg-white overflow-hidden pb-20">
        <div className="w-1/2 min-h-[50vh] flex flex-col justify-center items-center gap-3 pt-36">
          <span className="text-gray-500 text-md w-1/2">
            Included with Premium Membership
          </span>
          <span className="text-gray-900 text-3xl font-semibold w-1/2">
            Ace your upcoming job interviews!
          </span>
          <span className="text-gray-500 text-lg w-1/2">
            Practice role and company specific interview questions and get
            real-time feedback from your private and judgment-free AI Interview
            Coach
          </span>
          <div className="w-1/2 ">
            <button className="text-white rounded bg-blue-600 font-semibold px-5 py-2 mt-5">
              Start Your Mock Interview
            </button>
            <div className="text-lg mt-5  text-gray-600">Powered By :
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[40vh] flex justify-center items-center">
          <img
            className="h-[60vh] mt-20"
            src="https://app.careerflow.ai/static/media/mock_interview_hero.94b2adcd331626a11ffb.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#f9fafb] flex w-full mx-auto flex-col gap-5 justify-center items-center py-5">
        <h1 className="text-black text-3xl  text-center mt-10">
          View an AI Mock Interview in action
        </h1>
        <iframe
          width="667"
          height="317"
          src="https://www.youtube.com/embed/hNr1a2MC91k"
          title="GenAI Interview Coach: Practicing an interview on Yoodli"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-lg"
        ></iframe>
        <p className="text-lg text-gray-700 w-1/2">
          We've partnered with Yoodli.ai to bring you an AI powered Mock
          Interview with an AI Interview Coach, with unlimited usage included as
          a part of the Careerflow.ai Premium Subscription, at no additional
          charge!
        </p>
      </div>
      <div className="w-full flex flex-col justify-around items-center bg-[white] overflow-hidden">
        <h1 className="text-black text-5xl font-semibold text-center mt-10">
          How the AI Mock Interview Works
        </h1>
        <div className="flex justify-center items-center mt-5">
          <div className="w-1/2 h-[60vh] flex justify-center items-center">
            <img
              className="h-[60vh] mt-20"
              src="https://app.careerflow.ai/static/media/mock_interview_select_role.30537f016bbaeecd5b5c.png"
              alt=""
            />
          </div>
          <div className="w-1/2 min-h-[50vh] flex flex-col justify-center items-center gap-3 pt-36 ml-[-7rem]">
            <span className="text-gray-900 text-3xl font-semibold w-1/2">
              Choose your target Role and Company
            </span>
            <span className="text-gray-500 text-lg w-1/2">
              The AI system tailors each interview for your target role and
              company, so that you can be fully prepared! You can enter any role
              ranging from Junior PM to CEO!
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-20 mt-5">
          <div className="w-1/2 min-h-[50vh] flex flex-col justify-center items-center gap-3 pt-36">
            <span className="text-gray-900 text-3xl font-semibold w-1/2">
              Practice Interview Questions
            </span>
            <span className="text-gray-500 text-lg w-1/2">
              With thousands of questions in Careerflow's question bank, and the
              AI asking contextualized follow-up questions based on your
              answers, you'll be ready in no time!
            </span>
          </div>
          <div className="w-1/2 h-[60vh] flex justify-center items-center">
            <img
              className="h-[60vh] mt-20"
              src="https://app.careerflow.ai/static/media/mock_interview_questions.6b943ee2b30d43414876.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-20 mt-5">
          <div className="w-1/2 h-[60vh] flex justify-center items-center">
            <img
              className="h-[60vh] mt-20"
              src="https://app.careerflow.ai/static/media/mock_interview_analytics.708c9b1390682bef0815.png"
              alt=""
            />
          </div>
          <div className="w-1/2 min-h-[50vh] flex flex-col justify-center items-center gap-3 pt-36 ml-[-7rem]">
            <span className="text-gray-900 text-3xl font-semibold w-1/2">
              Receive Instant Feedback
            </span>
            <span className="text-gray-500 text-lg w-1/2">
              You'll get a report with question-by-question feedback, speech
              insights, and AI insights to help you feel confident for your
              upcoming interview!
            </span>
          </div>
        </div>
        <div className="w-1/2 mx-auto flex justify-center my-20">
          <button className="text-white rounded bg-blue-600 font-semibold px-5 py-2 mt-5">
            Start Your Mock Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;

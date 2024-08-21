import React, { useState } from "react";

const EndInterview = () => {
  const [Loading, setLoading] = useState(false);

  return (
    <>
      {Loading ? (
        <div>Loading</div>
      ) : (
        <div className="p-[28px] font-[Outfit] flex flex-col justify-center sm:mt-[50px] mt-0 items-center w-full">
          <div className="w-full flex flex-col items-center justify-center m-auto py-[26px] sm:px-[24px] px-0">
            <p className="text-[#000000] max-w-[886px] w-full m-auto font-[400] sm:leading-[41.58px] leading-[30px] text-center sm:text-[33px] text-[24px]">
              Name, please note that this is a test mode. Answers in the test
              mode are not included in the interview
            </p>
            <p className="font-[400] text-[16px] mt-[26px] mb-[90px] leading-[20.16px] text-[#000000]">
              Please watch the video and answer the questions (1/2)
            </p>
            <div className="bg-[#292929] max-w-[1038px] w-full h-[484px]"></div>
            <div className="flex gap-[16px] sm:flex-row flex-col justify-center mt-[64px] ">
              <button className="w-[294px] h-[54px] flex items-center gap-[12px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] justify-center">
              Record Answer <img src="/images/start/item8.svg" alt="" />
              </button>
              <button className="w-[294px] h-[54px] flex items-center gap-[12px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] justify-center">
                Start Interview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EndInterview;

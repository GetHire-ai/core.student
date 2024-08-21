import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Interview = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  return (
    <>
      {Loading ? (
        <div>Loading</div>
      ) : (
        <div className="p-[28px] font-[Outfit] flex flex-col justify-center sm:mt-[50px] mt-0 items-center w-full">
          <div className="w-full m-auto py-[26px] px-[24px]">
            <div className="flex flex-col items-center justify-center">
              <img src="/images/start/item5.svg" alt="" />
              <p className="max-w-[636px] w-full m-auto font-[400] text-[33px] leading-[41.58px] text-center text-[#000000]">
                Test mode is successfully completed! Now you can proceed to the
                interview.
              </p>
              <p className="max-w-[481px] pt-[21px] w-full m-auto font-[400] text-[16px] leading-[20.16px] text-center text-[#545454]">
                Rest and relax before the interview, feel comfortable. Do not
                worry and do not rush while recording. Your timbre and tone
                should be natural, tempo moderate, intonation clear, and words
                intelligible and understandable.
              </p>
              <p className="max-w-[481px] pt-[21px] w-full m-auto font-[400] text-[16px] leading-[20.16px] text-center text-[#000000]">
                You will succeed. Good luck!
              </p>
            </div>
            <div className="flex justify-center sm:mt-[150px] mt-[30px]">
              <button
                onClick={() => navigate("/blank/successful")}
                className="w-[246px] h-[54px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] flex justify-center items-center"
              >
                Start Interview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Interview;

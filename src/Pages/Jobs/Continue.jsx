import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Continue = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  return (
    <>
      {Loading ? (
        <div>Loading</div>
      ) : (
        <div className="p-[28px] font-[Outfit] flex flex-col justify-center sm:mt-[50px] mt-0 items-center w-full">
          <div className="w-full m-auto py-[26px] px-[24px] rounded-[30px]">
            <div className="flex flex-col justify-center items-center">
              <h6 className="font-[Outfit] font-[400] text-[24px] pb-[18px] text-[#000000] leading-[30.24px]">
                Your interview consists of 4 steps
              </h6>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-1 mt-[58px] mb-[45px] sm:px-[114px] px-0 gap-[33px]">
              <div className="bg-[#F1F4FF] pt-[14px] px-[14px] pb-[38px] rounded-[29.8px]">
                <img src="/images/start/item1.svg" className="w-full" alt="" />
                <p className="font-[Outfit] font-[500] text-[16px] pb-[12px] leading-[20.16px] text-left text-[#4234A2] pt-[12px]">
                  1 video response(s)
                </p>
                <ul className="list-disc pl-[20px] flex flex-col gap-[8px]">
                  <li className="font-[Outfit] font-[400] text-[14px] leading-[17.64px] text-[#545454]">
                    You will be asked questions in the form of text or video
                  </li>
                  <li className="font-[Outfit] font-[400] text-[14px] leading-[17.64px] text-[#545454]">
                    time to think and answer questions will be limited
                  </li>
                </ul>
              </div>
              <div className="bg-[#F1F4FF] pt-[14px] px-[14px] pb-[38px] rounded-[29.8px]">
                <img src="/images/start/item2.svg" className="w-full" alt="" />
                <p className="font-[Outfit] font-[500] text-[16px] pb-[12px] leading-[20.16px] text-left text-[#4234A2] pt-[12px]">
                  1 written question(s)
                </p>
                <ul className="list-disc pl-[20px] flex flex-col gap-[8px]">
                  <li className="font-[Outfit] font-[400] text-[14px] leading-[17.64px] text-[#545454]">
                    Read the question and give a written answer to it
                  </li>
                  <li className="font-[Outfit] font-[400] text-[14px] leading-[17.64px] text-[#545454]">
                    Note the possible limit on the number of characters
                  </li>
                  <li className="font-[Outfit] font-[400] text-[14px] leading-[17.64px] text-[#545454]">
                    Note the possible limit on the timeallotted for the answer
                  </li>
                </ul>
              </div>
              <div className="bg-[#F1F4FF] pt-[14px] px-[14px] pb-[38px] rounded-[29.8px]">
                <img src="/images/start/item3.svg" className="w-full" alt="" />
                <p className="font-[Outfit] font-[500] text-[16px] pb-[12px] leading-[20.16px] text-left text-[#4234A2] pt-[12px]">
                  2 test(s)
                </p>
                <ul className="list-disc pl-[20px] flex flex-col gap-[8px]">
                  <li className="font-[Outfit] font-[400] text-[14px] leading-[17.64px] text-[#545454]">
                    Choose one or more of the suggested answers
                  </li>
                  <li className="font-[Outfit] font-[400] text-[14px] leading-[17.64px] text-[#545454]">
                    There is no time limit for the answer
                  </li>
                </ul>
              </div>
              <div className="bg-[#F1F4FF] pt-[14px] px-[14px] pb-[38px] rounded-[29.8px]">
                <img src="/images/start/item4.svg" className="w-full" alt="" />
                <p className="font-[Outfit] font-[500] text-[16px] pb-[12px] leading-[20.16px] text-left text-[#4234A2] pt-[12px]">
                  2 required documents
                </p>
                <ul className="list-disc pl-[20px] flex flex-col gap-[8px]">
                  <li className="font-[Outfit] font-[400] text-[14px] leading-[17.64px] text-[#545454]">
                    Upload Your resume and portfolio
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-[16px] items-start">
              <p className="font-[Outfit] font-[400] text-[12px] text-[#545454] leading-[15.12px]">
                Feel comfortable! You will succeed!
              </p>
            </div>
            <div className="flex justify-center mt-[18px] mb-[70px]">
              <button
                className="w-[246px] h-[54px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] flex justify-center items-center"
                onClick={() => navigate(`/blank/question/${jobId}`)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Continue;

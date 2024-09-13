import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Start = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  function handleChange(e){
    setCheckBox(!checkBox)
  }

  return (
    <>
      {Loading ? (
        <div>Loading</div>
      ) : (
        <div className="p-[2px] font-[Outfit] flex flex-col justify-center mt-[5px] items-center w-full">
          <div className="max-w-[1225px] w-full mx-auto bg-[#FFFFFF] py-[26px] px-[24px] rounded-[30px]">
            <div className="flex justify-end">
              <img src="/images/close.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h6 className="font-[Outfit] font-[400] text-[24px] pb-[18px] text-[#000000] leading-[30.24px]">
                You're all set
              </h6>
              <p className="font-[Poppins] font-[400] text-[14px] text-[#545454] leading-[21px]">
                Your timer will begin once you click on 'Start Assessment'
              </p>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-1 mt-[58px] mb-[45px] sm:px-[114px] px-[0px] gap-[33px]">
              <div className="bg-[#FFBB2E0D] flex flex-col justify-start pthandleChange-[50px] pb-[38px] items-center rounded-[16px]">
                <div className="h-[38px] bg-[#FFBB2E] rounded-full w-[38px]"></div>
                <p className="font-[Outfit] font-[500] text-[16px] leading-[20.16px] text-center text-[#000000] pt-[23px] pb-[17px]">
                  60 minutes long
                </p>
                <p className="font-[Outfit] px-[26px] font-[400] text-[14px] leading-[17.64px] text-center text-[#545454]">
                  Complete the Assessment within the 60 min time period
                </p>
              </div>
              <div className="bg-[#FF1D560D] flex flex-col justify-start pt-[50px] pb-[38px] items-center rounded-[16px]">
                <div className="h-[38px] bg-[#FF1D56] rounded-full w-[38px]"></div>
                <p className="font-[Outfit] font-[500] text-[16px] leading-[20.16px] text-center text-[#000000] pt-[23px] pb-[17px]">
                  Isolatedspace
                </p>
                <p className="font-[Outfit] px-[26px] font-[400] text-[14px] leading-[17.64px] text-center text-[#545454]">
                  Sit in isolated place where you won't be interrupted
                  for60minutes
                </p>
              </div>
              <div className="bg-[#4DE4C10D] flex flex-col justify-start pt-[50px] pb-[38px] items-center rounded-[16px]">
                <div className="h-[38px] bg-[#4DE4C1] rounded-full w-[38px]"></div>
                <p className="font-[Outfit] font-[500] text-[16px] leading-[20.16px] text-center text-[#000000] pt-[23px] pb-[17px]">
                  Webcamon
                </p>
                <p className="font-[Outfit] px-[26px] font-[400] text-[14px] leading-[17.64px] text-center text-[#545454]">
                  Turn on your webcam to recordyouranswer
                </p>
              </div>
              <div className="bg-[#910FFF0D] flex flex-col justify-start pt-[50px] pb-[38px] items-center rounded-[16px]">
                <div className="h-[38px] bg-[#910FFF] rounded-full w-[38px]"></div>
                <p className="font-[Outfit] font-[500] text-[16px] leading-[20.16px] text-center text-[#000000] pt-[23px] pb-[17px]">
                  Make it your game
                </p>
                <p className="font-[Outfit] px-[26px] font-[400] text-[14px] leading-[17.64px] text-center text-[#545454]">
                  Just relax, focus and beyourself whileplaying Good Luck!
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-[16px] items-start">
              <input type="checkbox" className="mt-[4px]" name="" id="" onChange={handleChange} />
              <p className="max-w-[160px] font-[Outfit] font-[400] text-[12px] text-[#545454] leading-[15.12px]">
                I have read all the instructions and am ready to begin my
                assessment
              </p>
            </div>
            { checkBox &&
            <div className="flex justify-center mt-[41px] mb-[70px]">
              <button
                className="w-[412px] h-[55px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] flex justify-center items-center"
                // onClick={() => navigate(`/blank/continue/${jobId}`)}
                onClick={() => navigate(`/blank/question/${jobId}`)}
                >
                Start Assessment
              </button>
            </div>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Start;

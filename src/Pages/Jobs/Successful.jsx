import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Successful = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  return (
    <>
      {Loading ? (
        <div>Loading</div>
      ) : (
        <div className="p-[28px] font-[Outfit] flex flex-col justify-center mt-[50px] items-center w-full">
          <div className="w-full m-auto py-[26px] px-[24px]">
            <div className="sm:pl-[200px] pl-0">
              <p className="max-w-[596px] w-full font-[400] text-[24px] leading-[30.24px] text-[#000000]">
                Top 5 recommendations for a successful video interview:
              </p>
              <div className="flex mt-[46px] flex-col gap-[30px]">
                <div className="flex items-center gap-[16px]">
                  <img src="/images/start/item6.svg" alt="" />
                  <p className="font-[500] text-[16px] leading-[20.16px] text-[#000000]">
                    2 Make sure no one and nothing interferes with your
                    recording.
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <img src="/images/start/item6.svg" alt="" />
                  <p className="font-[500] text-[16px] leading-[20.16px] text-[#000000]">
                    Make sure you look good and tidy,
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <img src="/images/start/item6.svg" alt="" />
                  <p className="font-[500] text-[16px] leading-[20.16px] text-[#000000]">
                    Make sure you choose the right environment.
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <img src="/images/start/item6.svg" alt="" />
                  <p className="font-[500] text-[16px] leading-[20.16px] text-[#000000]">
                    Make sure there is enough light and no noise.
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <img src="/images/start/item6.svg" alt="" />
                  <p className="font-[500] text-[16px] leading-[20.16px] text-[#000000]">
                    Make sure your intermet connection is stable.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center sm:mt-[150px] mt-[30px]">
              <button
                onClick={() => navigate(`/blank/interview-setting/${id}`)}
                className="w-[246px] h-[54px] text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] rounded-[5px] flex justify-center items-center"
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

export default Successful;

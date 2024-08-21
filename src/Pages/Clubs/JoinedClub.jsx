import React from "react";
import { GoShareAndroid } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const JoinedClub = () => {
  const path = useLocation();
  const pathName = path?.pathname;

  return (
    <>
      <div className="md:px-[78px] px-[20px] py-[36px]">
        <div className="flex items-center">
          <IoIosArrowBack size={24} />
          <p className="text-[18px] font-[400] text-[#4234a2] ">Back to feed</p>
        </div>
        <div className="rounded-[16px] relative shadow-sm mt-[33px] bg-white">
          <div className="h-[149px] flex items-end  rounded-t-[16px]  bg-[#05eb44]">
            <img src="/images/Vector 30.svg" alt="" />
          </div>
          <div className="flex gap-[16px] absolute left-[55px] top-[120px]">
            <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#005417]">
              <img
                src="/images/pen-tool-2-svgrepo-com (2) 2.svg"
                className="w-[27.43px] h-[27.43px]"
                alt=""
              />
            </div>
            <p className="text-[18px] font-[500]">Design Club</p>
          </div>
          <div className="w-full flex justify-end px-[38px] pb-[40px] pt-[47px]">
            <button className="flex gap-[9.17px] items-center border-[1px] border-[#4234a2] text-[14px] font-[400] text-[#4234a2] w-[166px] h-[34px] rounded-[30px] justify-center">
              <IoCheckmarkOutline size={18} color="#4234a2" /> Joined
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[30px] mt-[71px] justify-center ">
          <div className="flex flex-col">
            <div className="bg-white px-[25px] pt-[25px] rounded-[16px]  md:w-[549px] flex gap-[53px] h-[73px]">
              <p
                className={`text-[22px] font-[500] pb-[17px] ${
                  pathName === "/blank/JoinedClubs"
                    ? "text-[#4234a2] border-b-[3px]  border-[#4234a2] "
                    : " text-[#545454]"
                }`}
              >
                Post
              </p>
              <p
                className={`text-[22px] font-[500] pb-[17px] ${
                  pathName === "/blank/"
                    ? "text-[#4234a2] border-b-[3px]  border-[#4234a2] "
                    : " text-[#545454]"
                }`}
              >
                Members
              </p>
            </div>
            <div className="flex flex-col mt-[43px] gap-[31px]">
              <div className="bg-[#fff] w-full p-[20px] rounded-[16px]">
                <div className="flex gap-[10px]">
                  <img
                    src="/images/Ellipse 4.svg"
                    className="w-[50px] h-[50px]"
                    alt=""
                  />
                  <div className="bg-[#f5f9ff] rounded-[8px] flex py-[6px] px-[9px] w-full items-center">
                    <input
                      className="bg-[#f5f9ff] w-full h-full outline-none"
                      placeholder="Post an Idea"
                    />
                    <img
                      src="/images/basil_image-outline.svg"
                      className="w-[34px] h-[34px]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full mt-[14px] flex justify-end items-center">
                  <button className="bg-[#4234a2] py-[7px] px-[15px] text-white rounded-[8px] flex justify-center items-center">
                    Post
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-[16px] w-full lg:w-[552px] p-[19px]">
                <p className="bg-[#fef3fb] rounded-[30px] w-[117px] h-[35px] flex justify-center items-center text-[14px] font-[400] text-[#f97cd7] ">
                  Business Club
                </p>
                <div className="mt-[24px] flex gap-[16px]">
                  <img
                    src="/images/girlImage.svg"
                    className="w-[68px] h-[68px] rounded-[50%]"
                    alt=""
                  />
                  <div>
                    <p className=" text-[16px] font-[600] ">
                      Vishnu Kumar Agrawal
                    </p>
                    <p className="text-[#807e7e] text-[12px] font-[400] ">
                      Ux Designer at Divim Technology
                    </p>
                    <p className="text-[#807e7e] text-[12px] font-[400] ">
                      25 Nov at 12:24 PM
                    </p>
                  </div>
                </div>
                <p className="mt-[21px] text-[15px] font-[400] text-[#3e3e59] text-wrap">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has.
                </p>
                <div className="flex justify-center items-center">
                  <img
                    src="/images/post image.svg"
                    className="w-full lg:w-[500px] lg:h-[394px] mt-[24px]"
                    alt=""
                  />
                </div>
                <div className="md:flex grid grid-cols-2 gap-[20px] mt-[17px] w-full items-center">
                  <div className="flex">
                    <img
                      src="/images/Ellipse 4.svg"
                      className="w-[28px] h-[28px]"
                      alt=""
                    />
                    <img
                      src="/images/Ellipse 8.svg"
                      className="w-[28px] h-[28px] ml-[-10px]"
                      alt=""
                    />
                    <img
                      src="/images/Ellipse 9.svg"
                      className="w-[28px] h-[28px] ml-[-10px]"
                      alt=""
                    />
                    <div className="text-[12px] font-[500] text-[#545454] bg-[#dfebff] w-[28px] h-[28px] flex justify-center items-center ml-[-10px] rounded-[50%]">
                      10+
                    </div>
                  </div>
                  <p className="text-[#545454] text-[12px] font-[500] ml-[9px]">
                    23 Comments
                  </p>
                  <div className="bg-[#f4f4f4] ml-[17px] gap-[8px] rounded-[30px] w-[78px] h-[38px] flex justify-center items-center">
                    <img
                      src="/images/solar_like-broken.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="text-[14px] font-[400] text-[#545454]">
                      Like
                    </p>
                  </div>
                  <div className="bg-[#f4f4f4] ml-[17px] gap-[8px] rounded-[30px] w-[118px] h-[38px] flex justify-center items-center">
                    <img
                      src="/images/comments.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="text-[14px] font-[400] text-[#545454]">
                      Comments
                    </p>
                  </div>
                  <div className="bg-[#f4f4f4] ml-[17px] gap-[8px] rounded-[30px] w-[84px] h-[38px] flex justify-center items-center">
                    <GoShareAndroid />
                    <p className="text-[14px] font-[400] text-[#545454]">
                      Share
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[16px] w-full lg:w-[552px] p-[19px]">
                <p className="bg-[#fef3fb] rounded-[30px] w-[117px] h-[35px] flex justify-center items-center text-[14px] font-[400] text-[#f97cd7] ">
                  Business Club
                </p>
                <div className="mt-[24px] flex gap-[16px]">
                  <img
                    src="/images/girlImage.svg"
                    className="w-[68px] h-[68px] rounded-[50%]"
                    alt=""
                  />
                  <div>
                    <p className=" text-[16px] font-[600] ">
                      Vishnu Kumar Agrawal
                    </p>
                    <p className="text-[#807e7e] text-[12px] font-[400] ">
                      Ux Designer at Divim Technology
                    </p>
                    <p className="text-[#807e7e] text-[12px] font-[400] ">
                      25 Nov at 12:24 PM
                    </p>
                  </div>
                </div>
                <p className="mt-[21px] text-[15px] font-[400] text-[#3e3e59] text-wrap">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has.
                </p>
                <div className="flex justify-center items-center">
                  <img
                    src="/images/post image.svg"
                    className="w-full lg:w-[500px] lg:h-[394px] mt-[24px]"
                    alt=""
                  />
                </div>
                <div className="md:flex grid grid-cols-2 gap-[20px] mt-[17px] w-full items-center">
                  <div className="flex">
                    <img
                      src="/images/Ellipse 4.svg"
                      className="w-[28px] h-[28px]"
                      alt=""
                    />
                    <img
                      src="/images/Ellipse 8.svg"
                      className="w-[28px] h-[28px] ml-[-10px]"
                      alt=""
                    />
                    <img
                      src="/images/Ellipse 9.svg"
                      className="w-[28px] h-[28px] ml-[-10px]"
                      alt=""
                    />
                    <div className="text-[12px] font-[500] text-[#545454] bg-[#dfebff] w-[28px] h-[28px] flex justify-center items-center ml-[-10px] rounded-[50%]">
                      10+
                    </div>
                  </div>
                  <p className="text-[#545454] text-[12px] font-[500] ml-[9px]">
                    23 Comments
                  </p>
                  <div className="bg-[#f4f4f4] ml-[17px] gap-[8px] rounded-[30px] w-[78px] h-[38px] flex justify-center items-center">
                    <img
                      src="/images/solar_like-broken.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="text-[14px] font-[400] text-[#545454]">
                      Like
                    </p>
                  </div>
                  <div className="bg-[#f4f4f4] ml-[17px] gap-[8px] rounded-[30px] w-[118px] h-[38px] flex justify-center items-center">
                    <img
                      src="/images/comments.svg"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="text-[14px] font-[400] text-[#545454]">
                      Comments
                    </p>
                  </div>
                  <div className="bg-[#f4f4f4] ml-[17px] gap-[8px] rounded-[30px] w-[84px] h-[38px] flex justify-center items-center">
                    <GoShareAndroid />
                    <p className="text-[14px] font-[400] text-[#545454]">
                      Share
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-[403px] rounded-[16px] p-[29px] md:w-[389px]">
            <p className="text-[22px] mt-[4px] font-[500]">Design Club</p>
            <p className="text-[15px] font-[400] mt-[20px] font-[Poppins] text-[#3e3e59]">
              Unleash your creativity! Share your designs, get inspired, do fun
              challenges, and connect with like- minded design enthusiasts in
              our club.
            </p>
            <div className="flex mt-[18px]">
              <img
                src="/images/Ellipse 4.svg"
                className="w-[28px] h-[28px]"
                alt=""
              />
              <img
                src="/images/Ellipse 8.svg"
                className="w-[28px] h-[28px] ml-[-10px]"
                alt=""
              />
              <img
                src="/images/Ellipse 9.svg"
                className="w-[28px] h-[28px] ml-[-10px]"
                alt=""
              />
              <div className="text-[12px] font-[500] text-[#545454] bg-[#dfebff] w-[28px] h-[28px] flex justify-center items-center ml-[-10px] rounded-[50%]">
                10+
              </div>
            </div>
            <p className="text-[#3e3e59] text-[15px] font-[600] font-[Poppins] border-b-[1px] border-[#3e3e59] mt-[15px]">
              Nikita + 43771 Members
            </p>
            <button className="text-[#fff] bg-[#4234a2] rounded-[30px] h-[64px] flex justify-center items-center text-[18px] font-[400] w-full mt-[32px]">
              Create a post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinedClub;

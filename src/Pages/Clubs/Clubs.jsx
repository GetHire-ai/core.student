import React, { useState } from "react";
import { PiCodeLight } from "react-icons/pi";
import { GoShareAndroid } from "react-icons/go";
import JoinClubsModal from "./JoinClubsModal";
import { Link } from "react-router-dom";

const Clubs = () => {
  const [joinClubModal, setJoinClubModal] = useState(false);
  const toggleJoinClubModalOpen = () => {
    setJoinClubModal(true);
  };
  const toggleJoinClubModalClose = () => {
    setJoinClubModal(false);
  };
  return (
    <>
      <div className="py-[40px] px-[10px] font-[Outfit] lg:pl-[41px] lg:pr-[18px]">
        <div className="flex flex-col lg:flex-row gap-[24px]">
          <div className="bg-white rounded-[16px] shadow-lg px-[32px] py-[43px] h-[976px] ">
            <div className="flex gap-[14.58px] items-center">
              <div className="w-[58.34px] h-[58.34px] rounded-[50%] bg-[#ffe8b0] flex justify-center items-center">
                <img
                  src="/images/explore-svgrepo-com 1.svg"
                  className="w-[31.41px] h-[31.41px] "
                  alt=""
                />
              </div>
              <p className="text-[26.93px] font-[600]">Explore Clubs</p>
            </div>
            <div className="mt-[34.34px] flex gap-[19.32px] flex-col">
              <div className="flex gap-[22px] items-center">
                <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#fd7b01]">
                  <PiCodeLight color="white" size={25} />
                  <div className="text-white mt-[-15px]">---</div>
                  <div className="text-white mt-[-19px]">---</div>
                </div>
                <p className="text-[18px] font-[500]">Coding Club</p>
              </div>
              <div className="flex gap-[22px] items-center">
                <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#460e89]">
                  <img
                    src="/images/graph-chart-2-svgrepo-com 1.svg"
                    className="w-[27.43px] h-[27.43px]"
                    alt=""
                  />
                </div>
                <p className="text-[18px] font-[500]">Data & Al Club</p>
              </div>
              <div className="flex gap-[22px] items-center">
                <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#005417]">
                  <img
                    src="/images/pen-tool-2-svgrepo-com (2) 2.svg"
                    className="w-[27.43px] h-[27.43px]"
                    alt=""
                  />
                </div>
                <p className="text-[18px] font-[500]">Design Club</p>
              </div>
              <div className="flex gap-[22px] items-center">
                <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#00752e]">
                  <img
                    src="/images/writing-note-svgrepo-com 1.svg"
                    className="w-[27.43px] h-[27.43px]"
                    alt=""
                  />
                </div>
                <p className="text-[18px] font-[500]">Writing Club</p>
              </div>
              <div className="flex gap-[22px] items-center">
                <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#00527c]">
                  <div className=" flex items-center flex-col justify-center">
                    <img src="/images/briefTop.svg" className=" " alt="" />
                    <img src="/images/briefUpper.svg" className=" " alt="" />
                    <img
                      src="/images/briefLower.svg"
                      className=" mt-[-5px]"
                      alt=""
                    />
                    <img
                      src="/images/noteBlank.svg"
                      className=" mr-[-20px] mt-[-5px] "
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-[18px] font-[500]">Placement Club</p>
              </div>
              <div className="flex gap-[22px] items-center">
                <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#740683]">
                  <img
                    src="/images/college-svgrepo-com 1.svg"
                    className="w-[27.43px] h-[27.43px]"
                    alt=""
                  />
                </div>
                <p className="text-[18px] font-[500]">College Life</p>
              </div>
              <div className="flex gap-[22px] items-center">
                <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#f76800]">
                  <img
                    src="/images/growth-svgrepo-com 1.svg"
                    className="w-[27.43px] h-[27.43px]"
                    alt=""
                  />
                </div>
                <p className="text-[18px] font-[500]">Personal Growth</p>
              </div>
              <div className="flex gap-[22px] items-center">
                <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#2ba600]">
                  <img
                    src="/images/finance-markting-money-coin-dollar-molecule-svgrepo-com 1.svg"
                    className="w-[27.43px] h-[27.43px]"
                    alt=""
                  />
                </div>
                <p className="text-[18px] font-[500]">Personal Finance</p>
              </div>
              <div className="flex gap-[22px] items-center">
                <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#5f3eef]">
                  <img
                    src="/images/degree-diploma-svgrepo-com 1.svg"
                    className="w-[27.43px] h-[27.43px]"
                    alt=""
                  />
                </div>
                <p className="text-[18px] font-[500]">Higher Studies Club</p>
              </div>
              <div className="flex gap-[22px] items-center">
                <div className="w-[48px] flex-col h-[48px] flex items-center justify-center rounded-[6.1px] bg-[#ed7300]">
                  <img
                    src="/images/government.svg"
                    className="w-[27.43px] h-[27.43px]"
                    alt=""
                  />
                </div>
                <p className="text-[18px] font-[500]">Government Exams</p>
              </div>
            </div>
            <button
              onClick={toggleJoinClubModalOpen}
              className="text-[18px] bg-[#4234a2] w-[314px] h-[64px] rounded-[30px] mt-[45px] text-white font-[400]"
            >
              Create a post
            </button>
          </div>
          <div className="flex flex-col gap-[43px]">
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has.
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
                  <p className="text-[14px] font-[400] text-[#545454]">Like</p>
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
                  <p className="text-[14px] font-[400] text-[#545454]">Share</p>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has.
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
                  <p className="text-[14px] font-[400] text-[#545454]">Like</p>
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
                  <p className="text-[14px] font-[400] text-[#545454]">Share</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] w-full rounded-[16px] py-[21px] px-[31px] h-[673px]">
            <div className="flex gap-[15px] items-center">
              <img
                src="/images/Ellipse 4.svg"
                className="w-[62px] h-[62px]"
                alt=""
              />
              <p className="text-[20px] font-[500]">Chaitanya Goyal</p>
            </div>
            <div className="border-[1px] mt-[24px] rounded-[50px] border-[#d7c3c3] w-[110px] h-[28px] flex justify-center items-center gap-[3px]">
              <p className="text-[16px] font-[400] text-[#545454]">Member</p>
              <img
                src="/images/contributor 3.svg"
                className="w-[16.48px] h-[19px]"
                alt=""
              />
            </div>
            <p className="text-[18px] font-[400] mt-[13px] text-[#545454]">
              Total points:0 XP
            </p>
            <div className="border-[1px] mt-[28px] flex px-[25px] py-[28px] justify-center items-center border-[#d7c3c3] rounded-[30px]">
              <div className="flex flex-col justify-center items-center text-[18px] font-[400] text-[#545454]">
                <p>0</p>
                <p>Answers</p>
              </div>
              <div className="w-px h-[69px] ml-[18px] mr-[23px] border-[1px] border-[#d7c3c3]"></div>
              <div className="flex flex-col justify-center items-center text-[18px] font-[400] text-[#545454]">
                <p>0</p>
                <p>Question</p>
              </div>
              <div className="w-px h-[69px] ml-[18px] mr-[23px] border-[1px] border-[#d7c3c3]"></div>
              <div className="flex flex-col justify-center items-center text-[18px] font-[400] text-[#545454]">
                <p>0</p>
                <p>Posts</p>
              </div>
            </div>
            <p className="text-[22px] font-[500] mt-[30px]">
              Active goal tracker
            </p>
            <div className="border-[1px] flex flex-col gap-[26px] border-[#d7c3c3] bg-[#d7c3c33] bg-opacity-[5%] px-[22px] py-[20px] rounded-[30px] mt-[21px] ">
              <div className="flex gap-[8px]">
                <img
                  src="/images/contributor 3.svg"
                  className="w-[21.52px] h-[24.81px]"
                  alt=""
                />
                <p className="text-[#545454] text-[18px] font-[400]">
                  Becomes a Contributor
                </p>
              </div>
              <div className="bg-[#d9d9d9] rounded-[16px] h-[7px]"></div>
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-[500]">0/30 XP</p>
                <p className="w-[5.5px] h-[11px]">&gt;</p>
              </div>
            </div>
            <Link
              to="/blank/clubsViewAchivements"
              className="border-[1px] cursor-pointer text-[18px] font-[400] text-[#4234a2] mt-[31px] border-[#4234a2] rounded-[30px] flex justify-center items-center w-full h-[64px]"
            >
              View Achivements
            </Link>
          </div>
        </div>
      </div>
      {joinClubModal && (
        <JoinClubsModal
          onOpen={toggleJoinClubModalOpen}
          onClose={toggleJoinClubModalClose}
        />
      )}
    </>
  );
};

export default Clubs;

import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { MdOutlineChevronRight } from "react-icons/md";
const CollegeBoard = () => {
  return (
    <>
      <div className="py-[47px] font-[Outfit] px-[36px]">
        <div className="bg-[#55a4c7] rounded-[20px] flex flex-col lg:flex-row ">
          <div className="flex flex-col w-full p-[53px] text-white gap-[11px]">
            <p className="text-[24px] font-[500]">Collage Board</p>
            <p className="text-[14px] pr-[90px] font-[400]">
              As the field of UI/UX design continues to grow and evolve, it’s
              important for both designers
            </p>
            <button
              className="rounded-[6px] w-[208px] h-[49px] mt-[33px] bg-gradient-to-tr text-white from-[#0f87b3] to-[#4import Notification from './../Notification/Notification';
62da1]"
            >
              Connect To Your Profile
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <img src="/images/college.svg" alt="" />
          </div>
        </div>
        <div className="mt-[57px]">
          <p className="text-[24px] font-[500]">Active Application</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[27px]">
            <div className="bg-white p-[12px] rounded-[16px] flex gap-[15px]">
              <div className="bg-white w-[74px] p-[7px] shadow-sm flex justify-center items-center h-[74px] rounded-[16px] ">
                <img
                  src="/images/image 3.svg"
                  className="w-[59px] h-[40px]"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <p className="text-[16px] font-[400]">Graphic Desginer</p>
                <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                  Unborn Technologies
                </p>
                <ProgressBar completed={70} customLabel="." height="4px" />
                <p className="text-[12px] font-[400] text-black text-opacity-[50%]">
                  70 %
                </p>
              </div>
            </div>
            <div className="bg-white p-[12px] rounded-[16px] flex gap-[15px]">
              <div className="bg-white w-[74px] p-[7px] shadow-sm flex justify-center items-center h-[74px] rounded-[16px] ">
                <img
                  src="/images/image 3.svg"
                  className="w-[59px] h-[40px]"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <p className="text-[16px] font-[400]">Graphic Desginer</p>
                <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                  Unborn Technologies
                </p>
                <ProgressBar completed={70} customLabel="." height="4px" />
                <p className="text-[12px] font-[400] text-black text-opacity-[50%]">
                  70 %
                </p>
              </div>
            </div>
            <div className="bg-white p-[12px] rounded-[16px] flex gap-[15px]">
              <div className="bg-white w-[74px] p-[7px] shadow-sm flex justify-center items-center h-[74px] rounded-[16px] ">
                <img
                  src="/images/image 3.svg"
                  className="w-[59px] h-[40px]"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <p className="text-[16px] font-[400]">Graphic Desginer</p>
                <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                  Unborn Technologies
                </p>
                <ProgressBar completed={70} customLabel="." height="4px" />
                <p className="text-[12px] font-[400] text-black text-opacity-[50%]">
                  70 %
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[64px]">
          <div className="flex justify-between items-center">
            <p className="text-[24px] font-[500]">Our Features</p>
            <div className="flex gap-[17px]">
              <div className="bg-white w-[44px] h-[44px] rounded-[50%] flex justify-center items-center">
                <img src="/images/leftArrow.svg" alt="" />
              </div>
              <div className="bg-white w-[44px] h-[44px] rounded-[50%] flex justify-center items-center">
                <img src="/images/vector 2.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[122px] lg:gap-[20px] mt-[122px]">
            <div className="flex relative flex-col justify-center items-center w-[300px]">
              <img
                src="/images/upcoming.svg"
                className=" w-[190px] absolute top-[-80px] h-[180px]"
                alt=""
              />
              <div className="bg-white w-full h-[191px] px-[17px] py-[22px] rounded-[15px] shadow-sm ">
                <div className="flex justify-between items-center mt-[120px]">
                  <p className="text-[16px] font-[500]">Upcoming Events</p>
                  <div className="bg-[#4ea1c5] rounded-[50%] w-[32px] h-[32px] flex justify-center items-center">
                    <MdOutlineChevronRight size={24} color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex relative flex-col justify-center items-center w-[300px]">
              <img
                src="/images/talks.svg"
                className=" w-[190px] absolute top-[-80px] h-[180px]"
                alt=""
              />
              <div className="bg-white w-full h-[191px] px-[17px] py-[22px] rounded-[15px] shadow-sm ">
                <div className="flex justify-between items-center mt-[120px]">
                  <p className="text-[16px] font-[500]">Industry Talks</p>
                  <div className="bg-[#4ea1c5] rounded-[50%] w-[32px] h-[32px] flex justify-center items-center">
                    <MdOutlineChevronRight size={24} color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex relative flex-col justify-center items-center w-[300px]">
              <img
                src="/images/facilities.svg"
                className=" w-[190px] absolute top-[-80px] h-[180px]"
                alt=""
              />
              <div className="bg-white w-full h-[191px] px-[17px] py-[22px] rounded-[15px] shadow-sm ">
                <div className="flex justify-between items-center mt-[120px]">
                  <p className="text-[16px] font-[500]">Alum Facilties</p>
                  <div className="bg-[#4ea1c5] rounded-[50%] w-[32px] h-[32px] flex justify-center items-center">
                    <MdOutlineChevronRight size={24} color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[57px]">
          <p className="text-[24px] font-[500]">Loreum Ispum</p>
          <div className="mt-[27px] flex-col lg:flex-row flex gap-[36px]">
            <div className="flex flex-col w-[300px] gap-[14px]">
              <div className="bg-[#4ea1c5]  flex rounded-[16px] p-[23px]">
                <div className="flex flex-col gap-[11px]">
                  <p className="text-[16px] font-[500] text-white">
                    Collage Approved Jobs
                  </p>
                  <p className="text-[10px] font-[400] text-white">
                    As the field of UI/UX design continues to grow and evolve,
                    it’s important for both designers
                  </p>
                </div>
                <div>
                  <img
                    src="/images/image 46.svg"
                    className="w-[104px] h-[104px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-[#2f3031] flex rounded-[16px] p-[23px]">
                <div className="flex flex-col gap-[11px]">
                  <p className="text-[16px] font-[500] text-white">
                    Speed Connect
                  </p>
                  <p className="text-[10px] font-[400] text-white">
                    As the field of UI/UX design continues to grow and evolve,
                    it’s important for both designers
                  </p>
                </div>
                <div>
                  <img
                    src="/images/letterandpen.svg"
                    className="w-[104px] h-[104px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="bg-white p-[24px] w-full rounded-[16px]">
              <div className="flex justify-between border-b-[1px] border-[#e0e0e0] py-[13px] items-center">
                <p className="text-[18px] font-[500]">Notification</p>
                <div className="flex justify-center items-center gap-[5px]">
                  <p className="text-[14px] font-[400] text-[#4234a2]">
                    See more
                  </p>
                  <img src="/images/vector 2.svg" alt="" />
                </div>
              </div>
              <div className="flex p-[11px] w-full  justify-between items-center shadow-sm mt-[26px] rounded-[8px]">
               <div className="flex gap-[14px] items-center">
                <img
                  src="/images/image 3.svg"
                  className="w-[41px] h-[28px]"
                  alt=""
                />
                <div>
                  <p className="text-[14px] font-[400]">Unborn Technologies</p>
                  <p className="text-[12px] font-[400] text-[#000] text-opacity-[50%]">
                    Congrutulation 🎉you have selected Last round Of Graphic
                    desginer Job
                  </p>
                </div>
</div>
                <div className="flex gap-[5px]">
                  <img
                    src="/images/carbon_time.svg"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <p className="text-[#000] text-opacity-[50%] text-[12px] font-[400]">
                    Just Now
                  </p>
                </div>
              </div>
              <div className="flex p-[11px] w-full  justify-between items-center shadow-sm mt-[26px] rounded-[8px]">
               <div className="flex gap-[14px] items-center">
                <img
                  src="/images/image 3.svg"
                  className="w-[41px] h-[28px]"
                  alt=""
                />
                <div>
                  <p className="text-[14px] font-[400]">Unborn Technologies</p>
                  <p className="text-[12px] font-[400] text-[#000] text-opacity-[50%]">
                    Congrutulation 🎉you have selected Last round Of Graphic
                    desginer Job
                  </p>
                </div>
</div>
                <div className="flex gap-[5px]">
                  <img
                    src="/images/carbon_time.svg"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <p className="text-[#000] text-opacity-[50%] text-[12px] font-[400]">
                    Just Now
                  </p>
                </div>
              </div>
              <div className="flex p-[11px] w-full  justify-between items-center shadow-sm mt-[26px] rounded-[8px]">
               <div className="flex gap-[14px] items-center">
                <img
                  src="/images/image 3.svg"
                  className="w-[41px] h-[28px]"
                  alt=""
                />
                <div>
                  <p className="text-[14px] font-[400]">Unborn Technologies</p>
                  <p className="text-[12px] font-[400] text-[#000] text-opacity-[50%]">
                    Congrutulation 🎉you have selected Last round Of Graphic
                    desginer Job
                  </p>
                </div>
</div>
                <div className="flex gap-[5px]">
                  <img
                    src="/images/carbon_time.svg"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <p className="text-[#000] text-opacity-[50%] text-[12px] font-[400]">
                    Just Now
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeBoard;

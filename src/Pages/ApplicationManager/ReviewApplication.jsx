import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetApi } from "../utilis/Api_Calling";

const ReviewApplication = () => {
  let { id } = useParams();
  console.log(id);

  return (
    <>
      <div className=" p-[20px] lg:py-[95px] lg:px-[100px] font-[Outfit]">
        <div className="bg-white flex flex-col lg:flex-row gap-[10px] justify-between  p-[32px] rounded-[16px] border-[1px] border-[#efecec]">
          <div>
            <div className="flex gap-[9px]">
              <p className="text-[32px] font-[400]">Social Media Marketing</p>
              <img
                src="/images/majesticons_open.svg"
                className="w-[20px] h-[20px]"
                alt=""
              />
            </div>
            <p className="text-[20px] mt-[19px] font-[400] text-[#000] text-opacity-[50%]">
              Xboom Utilities Private Limited
            </p>
          </div>
          <div>
            <p className="text-[16px] bg-[#E3EFF7] text-center rounded-[5px] px-[56px] py-[4px] font-[400] text-[#4234a2]">
              Applied
            </p>
          </div>
        </div>
        <div className="mt-[73px]">
          <div className="flex gap-[16px] items-center">
            <p className="text-[#97969D] text-[26px] font-[400]">Round</p>
            <div className="flex items-center">
              <div className="border-[1.21px] border-[#462da1] text-[#462da1] rounded-full w-[26.67px] flex justify-center items-center h-[26.67px] text-[21px] font-[400]">
                1
              </div>
              <div className="w-[26px] h-[1px] bg-[#97969d]"></div>
              <div className="border-[1.21px] border-[#97969d] text-[#97969d] rounded-full w-[26.67px] flex justify-center items-center h-[26.67px] text-[21px] font-[400]">
                2
              </div>
              <div className="w-[26px] h-[1px] bg-[#97969d]"></div>
              <div className="border-[1.21px] border-[#97969d] text-[#97969d] rounded-full w-[26.67px] flex justify-center items-center h-[26.67px] text-[21px] font-[400]">
                3
              </div>
            </div>
          </div>
          <div className="bg-white border-[1px] border-[#efecec] mt-[13.67px] rounded-[16px]">
            <div className="flex flex-col lg:flex-row shadow-sm p-[28px] rounded-t-[16px] justify-between items-center">
              <p className="text-[26px] font-[400]">Application</p>
              <p className="text-[20px] font-[400] text-[#000] text-opacity-[50%]">
                Applied 4 days ago
              </p>
            </div>
            <div className="p-[28px]">
              <p className="text-[20px] font-[400]">Cover letter</p>
              <div className="text-[16px] mt-[13px] font-[400]">
                <p>Why should you be hired for this role?</p>
                <p className="text-black text-opacity-[50%]">
                  Contributes to the marketing strategy by leveraging social
                  media to identify and acquire customers. Develops social media
                  marketing plans and programs for each product and directs
                  promotional support. Maintains online relations with customers
                  by organizing and developing specific customer-relations
                  programs.
                </p>
              </div>
              <div className="text-[16px] mt-[30px] font-[400]">
                <p>Availability</p>
                <p className="text-black text-opacity-[50%]">
                  Yes, I am available to join immediately.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border-[1px] border-[#efecec] mt-[42px] rounded-[16px]">
            <div className="flex bg-[#e3eff7] shadow-sm p-[31px] rounded-t-[16px] justify-between items-center">
              <p className="text-[26px] font-[400]">Resume</p>
              <div className="flex gap-[3px] items-center justify-center text-[#4234A2]">
                <img
                  src="/images/pencil2.svg"
                  className="w-[18px] h-[17px] text-[#4234A2]"
                  alt=""
                />
                <p className="text-[16px] font-[400] ">Edit</p>
              </div>
            </div>
            <div className="p-[28px]">
              <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[113px] border-b-[1px] pb-[37px] border-[#ebe6e6]">
                <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                  EDUCATION
                </p>
                <div className="flex flex-col gap-[5px] text-[16px] font-[400]">
                  <p>Bachelor of Commerce (B.Com), Computer Technology</p>
                  <p className="text-[#000] text-opacity-[50%]">
                    Sage University
                  </p>
                  <p className="text-[#000] text-opacity-[50%]">2019-2024</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[149px] mt-[32px] border-b-[1px] pb-[37px] border-[#ebe6e6]">
                <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                  SKILLS
                </p>
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[106px]">
                    <div className="flex flex-col gap-[5px] text-[16px] font-[400]">
                      <p>Adobe Illustrator</p>
                      <p className="text-[#000] text-opacity-[50%]">
                        Beginner 2 Year
                      </p>
                    </div>
                    <div className="flex flex-col gap-[5px] text-[16px] font-[400]">
                      <p>Adobe Illustrator</p>
                      <p className="text-[#000] text-opacity-[50%]">
                        Beginner 2 Year
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] text-[16px] font-[400]">
                    <p>Adobe Illustrator</p>
                    <p className="text-[#000] text-opacity-[50%]">
                      Beginner 2 Year
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[71px] mt-[32px] pb-[37px]">
                <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                  CONTACT DETAILS
                </p>
                <div className="flex flex-col gap-[5px] text-[16px] font-[400]">
                  <p>
                    Email:{" "}
                    <span className="text-[#000] text-opacity-[50%]">
                      ritesh01solanki@gmail.com
                    </span>
                  </p>
                  <p>
                    Phone:{" "}
                    <span className="text-[#000] text-opacity-[50%]">
                      +91 7898747967
                    </span>
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

export default ReviewApplication;

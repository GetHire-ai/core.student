import { NativeSelect } from "@mui/material";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const ClubsViewAchivements = () => {
  return (
    <>
      <div className="py-[36px] px-[20px] md:px-[78px] font-[outfit]">
        <div className="flex items-center">
          <IoIosArrowBack size={24} />
          <p className="text-[18px] font-[400] text-[#4234a2] ">Back</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[26px] mt-[33px]">
          <div className="bg-white flex flex-col  justify-center items-center rounded-[16px] md:px-[136px] py-[32px]">
            <div className="rounded-[44px] w-[178px] h-[175px] flex justify-center items-center bg-gradient-to-br from-[#81d3cf] to-[#389590]">
              <p className="text-[58.19px] text-white font-[600]">CG</p>
            </div>
            <p className="text-[24px] font-[600] mt-[17px]">Chaitanya Goyal</p>
            <div className="border-[1px] mt-[10px] rounded-[30px] border-[#d7c3c3] w-[110px] h-[28px] flex justify-center items-center gap-[3px]">
              <p className="text-[16px] font-[400] text-[#545454]">Member</p>
              <img
                src="/images/contributor 3.svg"
                className="w-[16.48px] h-[19px]"
                alt=""
              />
            </div>
            <p className="text-[#545454] mt-[10px] text-[18px] font-[500]">
              Total pounts earned:0 XP
            </p>
          </div>
          <div className="bg-white rounded-[16px] pt-[25px] px-[50px] pb-[44px]">
            <p className="text-[24px] font-[600]">Goal</p>
            <div className="flex flex-col lg:flex-row gap-[36px] mt-[35px]">
              <div className="w-[224px] h-[224px] border-[12px] flex justify-center items-center flex-col border-[#4234a2] rounded-[50%]">
                <img
                  src="/images/contributor 3.svg"
                  className="w-[72px] h-[83px]"
                  alt=""
                />
                <p className="text-[20px] font-[500] mt-[23px]">0/30 XP</p>
              </div>
              <div>
                <p className="text-[20px] font-[500]">
                  Earn 30 XP to become a Contributor
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center mt-[29px] gap-[25px]">
                  <div className="border-[1px] w-[114px] px-[12px] py-[10px] border-[#d7c3c3] rounded-[30px]">
                    <div className="w-[28px] h-[28px] rounded-[50%] bg-[#e9f6ff]">
                      <img
                        src="/images/lightBulb.svg"
                        className="w-[28px] h-[28px]"
                        alt=""
                      />
                    </div>
                    <p className="text-[#545454] mt-[3px] text-[18px] font-[500]">
                      Answer
                    </p>
                    <p className="text-[#545454] mt-[13px] text-[18px] font-[700]">
                      O XP
                    </p>
                    <p className="text-[#545454] mt-[6px] text-[14px] font-[400]">
                      O Answers
                    </p>
                  </div>
                  <div className="border-[1px] w-[114px] border-[#d7c3c3] px-[12px] py-[10px] rounded-[30px]">
                    <div className="w-[28px] h-[28px] rounded-[50%] bg-[#e9f6ff]">
                      <img
                        src="/images/questionMark.svg"
                        className="w-[28px] h-[28px]"
                        alt=""
                      />
                    </div>
                    <p className="text-[#545454] mt-[3px] text-[18px] font-[500]">
                      Question
                    </p>
                    <p className="text-[#545454] mt-[13px] text-[18px] font-[700]">
                      O XP
                    </p>
                    <p className="text-[#545454] mt-[6px] text-[14px] font-[400]">
                      O Answers
                    </p>
                  </div>
                  <div className="border-[1px] w-[114px] border-[#d7c3c3] rounded-[30px] px-[12px] py-[10px]">
                    <div className="w-[28px] h-[28px] rounded-[50%] bg-[#e9f6ff]">
                      <img
                        src="/images/GirlVector.svg"
                        className="w-[28px] h-[28px]"
                        alt=""
                      />
                    </div>
                    <p className="text-[#545454] mt-[3px] text-[18px] font-[500]">
                      Post
                    </p>
                    <p className="text-[#545454] mt-[13px] text-[18px] font-[700]">
                      O XP
                    </p>
                    <p className="text-[#545454] mt-[6px] text-[14px] font-[400]">
                      O Answers
                    </p>
                  </div>
                </div>
                <p className="text-[#4234a2] text-[16px] mt-[25px] font-[600]">
                  How it Works?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[53px] bg-white rounded-[16px] flex flex-col justify-center items-center px-[27px] py-[27.96px]">
          <p className="mt-[6px] text-[23.57px] font-[600] ">
            Roles & Benefits
          </p>
          <div className="flex flex-col md:flex-row mt-[44.04px]">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/images/member 1.svg"
                className="w-[74px] h-[83px]"
                alt=""
              />
              <p className="text-[17.68px] mt-[11.89px] font-[600] text-[#545454]">
                Member
              </p>
            </div>
            <div className="flex flex-col items-center  gap-[12.52px]">
              <p>Earn 30 XP</p>
              <div className="border-[1px] md:h-px h-[77px] md:w-[200px] lg:w-[377px] border-[#d7c3c3]"></div>
            </div>
            <div className="flex flex-col ml-[-8px] justify-center items-center">
              <img
                src="/images/contributor 3.svg"
                className="w-[74px] h-[83px]"
                alt=""
              />
              <p className="text-[17.68px] mt-[11.89px] font-[600] text-[#545454]">
                Contributor
              </p>
            </div>
            <div className="flex flex-col ml-[-10px] items-center gap-[12.52px]">
              <p>Earn 70 XP in 90 days</p>
              <div className="border-[1px] md:h-px h-[77px] md:w-[200px] lg:w-[377px] border-[#d7c3c3]"></div>
            </div>
            <div className="flex flex-col ml-[-25px] justify-center items-center">
              <img
                src="/images/top_contributor 1.svg"
                className="w-[74px] h-[83px]"
                alt=""
              />
              <p className="text-[17.68px] mt-[11.89px] font-[600] text-[#545454]">
                Top Contrubutor
              </p>
            </div>
          </div>
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-[24.55px] mt-[40.86px]">
            <div className="rounded-[29.46px] md:w-[386.96px] bg-opacity-[5%] bg-[#d7c3c3] border-[0.98px] border-[#d7c3c3]">
              <div className="bg-[#f8f8f8] rounded-t-[29.46px] w-full py-[18.66px] px-[45.18px]">
                <p className="text-[15.71px] font-[500]">Member</p>
              </div>
              <ul className="mx-[23.57px] mt-[9.82px] flex flex-col  gap-[16px]">
                <li>1. Access to all public IS Clubs</li>
                <li>2. Ask questions and get help</li>
                <li>3. Create posts to engage with like-minded members</li>
              </ul>
            </div>
            <div className="rounded-[29.46px] md:w-[386.96px] bg-opacity-[5%] bg-[#d7c3c3] border-[0.98px] border-[#d7c3c3]">
              <div className="bg-[#faf2ff] rounded-t-[29.46px] w-full py-[18.66px] px-[45.18px]">
                <p className="text-[15.71px] font-[500]">Member</p>
              </div>
              <ul className="mx-[23.57px] mt-[9.82px] flex flex-col  gap-[16px]">
                <li>1. Your posts will be approved on priority</li>
                <li>
                  2. Unlock the Follow button on your profile and build your
                  audience
                </li>
                <li>3. Get a Contributor badge to showcase your expertise</li>
                <li>4. Enhanced visibility in the community</li>
              </ul>
            </div>
            <div className="rounded-[29.46px] md:w-[386.96px] bg-[#d9d9d9] bg-opacity-[5%] border-[0.98px] border-[#d7c3c3]">
              <div className="bg-[#fef8e0] rounded-t-[29.46px] w-full py-[18.66px] px-[45.18px]">
                <p className="text-[15.71px] font-[500]">Top Contributor</p>
              </div>
              <ul className="mx-[23.57px] mt-[9.82px] mb-[18.92px] flex flex-col  gap-[16px]">
                <li>1. Your posts will get approved instantly</li>
                <li>
                  2. Get recommended to companies on Internshala for internships
                  and jobs
                </li>
                <li>3. Get a Top Contributor badge and standout</li>
                <li>
                  4. Get a Top Contributor certificate and share across your
                  network
                </li>
                <li>5. Get featured in the Internshala Clubs Hall of Fame</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white px-[21px] lg:px-[170px] py-[21px] flex flex-col justify-center items-center mt-[59px] w-full rounded-[16px] border-[1px] border-[#d7c3c3]">
          <p className="text-[24px] font-[600]">How to Earn XP</p>
          <div className="flex flex-col md:flex-row gap-[20px] mt-[25px]">
            <div className="border-[1px] border-[#d7c3c3] rounded-[30px] px-[23px] py-[25px]">
              <img
                src="/images/questionMark.svg"
                className="w-[82px] h-[82px]"
                alt=""
              />
              <p className="text-[18px] mt-[7px] font-[600]">Ask a question</p>
              <p className="text-[16px] mt-[7px] font-[400]">
                Ask the community for help with your career and college related
                doubts
              </p>
              <button className="text-white mt-[14px] rounded-[8px] text-[14px] font-[400] bg-gradient-to-br from-[#0f87b3] to-[#462da1] w-[89px] h-[26px]">
                Points:1XP
              </button>
            </div>
            <div className="border-[1px] border-[#d7c3c3] rounded-[30px] px-[23px] py-[25px]">
              <img
                src="/images/lightBulb.svg"
                className="w-[82px] h-[82px]"
                alt=""
              />
              <p className="text-[18px] mt-[7px] font-[600]">
                Answer a question
              </p>
              <p className="text-[16px] mt-[7px] font-[400]">
                Help members by sharing your knowledge and experience
              </p>
              <button className="text-white mt-[14px] rounded-[8px] text-[14px] font-[400] bg-gradient-to-br from-[#0f87b3] to-[#462da1] w-[89px] h-[26px]">
                Points:1XP
              </button>
            </div>
            <div className="border-[1px] border-[#d7c3c3] rounded-[30px] px-[23px] py-[25px]">
              <img
                src="/images/GirlVector.svg"
                className="w-[82px] h-[82px]"
                alt=""
              />
              <p className="text-[18px] mt-[7px] font-[600]">Create a post</p>
              <p className="text-[16px] mt-[7px] font-[400]">
                Share interesting and relevant posts to engage with other
                members
              </p>
              <button className="text-white mt-[14px] rounded-[8px] text-[14px] font-[400] bg-gradient-to-br from-[#0f87b3] to-[#462da1] w-[89px] h-[26px]">
                Points:1XP
              </button>
            </div>
          </div>
          <div className="mt-[34px]">
            <button className="bg-[#4234a2] rounded-[30px] w-[233px] h-[43px] text-white text-[18px] font-[400]">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-white flex mt-[56px] shadow-sm flex-col justify-center items-center rounded-[16px] px-[34px] py-[20px]">
          <p className="text-[24px] font-[600] ">FAQs</p>
          <div className="mt-[23px] w-full">
            <div className="mt-[18px]">
              <NativeSelect
                defaultValue={30}
                className="w-full pb-[18px]"
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>
                  Q. How do I level up to a Contributor role?
                </option>
              </NativeSelect>
            </div>
            <div className="mt-[18px]">
              <NativeSelect
                defaultValue={30}
                className="w-full pb-[18px]"
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>
                  Q. How do I level up to a Contributor role?
                </option>
              </NativeSelect>
            </div>
            <div className="mt-[18px]">
              <NativeSelect
                defaultValue={30}
                className="w-full pb-[18px]"
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>
                  Q. How do I level up to a Contributor role?
                </option>
              </NativeSelect>
            </div>
            <div className="mt-[18px]">
              <NativeSelect
                defaultValue={30}
                className="w-full pb-[18px]"
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>
                  Q. How do I level up to a Contributor role?
                </option>
              </NativeSelect>
            </div>
            <div className="mt-[18px]">
              <NativeSelect
                defaultValue={30}
                className="w-full pb-[18px]"
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>
                  Q. How do I level up to a Contributor role?
                </option>
              </NativeSelect>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubsViewAchivements;

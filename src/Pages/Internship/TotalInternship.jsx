import React, { useState } from "react";
import { Link } from "react-router-dom";

const TotalInternship = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  }; 
  return (
    <>
      <div className="p-[28px] font-[Outfit] flex flex-col justify-center items-center w-full">
        <div>
          <div className=" w-full flex justify-start items-center">
            <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
              Home &gt; Internship
            </p>
          </div>
          <div className="w-full mt-[49px] flex justify-center items-center">
            <p className="text-[20px] font-[400] ">6539 Total Internships</p>
          </div>
          <div className="flex flex-col md:flex-row gap-[34px] mt-[16px]">
            <div className="flex flex-col gap-[6px]">
              <div className="bg-white h-[848px] w-full rounded-[8px] flex flex-col  items-center p-[26px] border-[1px] ">
                <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%]">
                  Fillters
                </p>
                <div className="flex flex-col gap-[6px] mt-[18px] w-full">
                  <p className="text-black text-opacity-[50%] text-[16px] font-[400]">
                    Profile
                  </p>
                  <input
                    className="border-[1px] h-[42px] border-[#d9d9d9] rounded-[4px]"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-[6px] mt-[18px] w-full">
                  <p className="text-black text-opacity-[50%] text-[16px] font-[400]">
                    Location
                  </p>
                  <input
                    className="border-[1px] h-[42px] border-[#d9d9d9] rounded-[4px]"
                    type="text"
                  />
                </div>
                <div className="mt-[20px] flex gap-[8px] w-full">
                  <input type="checkbox" />
                  <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                    Work from home
                  </p>
                </div>
                <div className="mt-[10px] flex gap-[8px] w-full">
                  <input type="checkbox" />
                  <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                    Part-time
                  </p>
                </div>
                <div className="w-full mt-[21px]">
                  <p className="text-[16px] font-[400] text-black text-opacity-[50%]">
                    Desired minimum monthly stipend (2)
                  </p>
                  <div className="w-full">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={value}
                      onChange={handleChange}
                      className="slider w-full"
                    />
                    <div className="flex gap-[30px] text-[#000] text-opacity-[50%]">
                      <p>0</p>
                      <p>2k</p>
                      <p>4k</p>
                      <p>6k</p>
                      <p>8k</p>
                      <p>10k</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full gap-[10px] mt-[29px] items-center">
                  <p className="text-[16px] font-[500] text-[#4234a2]">
                    View less filter{" "}
                  </p>
                  <img
                    src="/images/upArrow.svg"
                    className="w-[10px] h-[5px]"
                    alt=""
                  />
                </div>
                <div className="mt-[29px] w-full">
                  <p className="text-black text-opacity-[50%] text-[16px] font-[400]">
                    Starting from (or after)
                  </p>
                  <input
                    className="border-[1px] h-[42px] border-[#d9d9d9] rounded-[4px]"
                    type="text"
                  />
                </div>
                <div className="mt-[18px] w-full">
                  <p className="text-black text-opacity-[50%] text-[16px] font-[400]">
                    Max. duration (months)
                  </p>
                  <input
                    className="border-[1px] h-[42px] border-[#d9d9d9] rounded-[4px]"
                    type="text"
                  />
                </div>
                <div className="mt-[19px] flex gap-[8px] w-full">
                  <input type="checkbox" />
                  <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                    Internships with job offer
                  </p>
                </div>
                <div className="mt-[18px] flex gap-[8px] w-full">
                  <input type="checkbox" />
                  <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                    Fast response
                  </p>
                </div>
                <div className="mt-[18px] flex gap-[8px] w-full">
                  <input type="checkbox" />
                  <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                    Early applicant
                  </p>
                </div>
                <div className="mt-[18px] flex gap-[8px] w-full">
                  <input type="checkbox" />
                  <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                    Internships for women
                  </p>
                </div>
                <div className="mt-[34px] w-full flex justify-end">
                  <p className="text-[16px]  font-[500] text-[#4234a2]">
                    Clear all
                  </p>
                </div>
              </div>
              <div className="bg-white p-[25px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-black text-opacity-[50%] text-[16px] text-center font-[500]">
                    Keyword Search
                  </p>
                  <div className="border-[1px] flex mt-[18px] h-[42px] border-[#d9d9d9] rounded-[4px]">
                    <input className=" h-[38px] w-[235px]" type="text" />
                    <div className="border-[1px] h-[42px] border-[#4234a2] flex justify-center items-center rounded-[4px] w-[42px] ">
                      <img
                        src="/images/search.svg"
                        className="w-[18px] h-[18px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] flex-col">
              <div className="bg-white rounded-[16px] border-[1px] border-[#efecec] p-[27px]">
                <div className="border-[1px] rounded-[3px] w-[125px] h-[26px] p-[4px] border-[#d9d9d9] flex items-center gap-[7px]">
                  <img
                    src="/images/Vector 4.svg"
                    className="w-[16px] h-[8px]"
                    alt=""
                  />
                  <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                    Actively hiring
                  </p>
                </div>
                <div className="mt-[8px]">
                  <div className="flex justify-between gap-[20px] lg:gap-[66px] lg:items-center flex-col lg:flex-row-reverse">
                    <img
                      src="/images/image 6.svg"
                      className="w-[60px] h-[60px]"
                      alt=""
                    />
                    <p className="text-[20px] lg:w-[476px] flex-wrap font-[400]">
                      Digital Dreamweaver: Internship Odyssey In Graphic Design
                    </p>
                  </div>

                  <p className="text-black mt-[12px] text-opacity-[50%] text-[14px] font-[400]">
                    Global Trend
                  </p>
                  <div className="flex gap-[5px] items-center mt-[24px]">
                    <img src="/images/home.svg" alt="" />
                    <p className="text-black text-opacity-[50%] text-[14px] font-[400]">
                      Work From Home
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row text-[14px] font-[400] text-black text-opacity-[50%] mt-[22px] gap-[10px] lg:gap-[54px]">
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/carbon_play-outline.svg" alt="" />
                        <p>START DATE</p>
                      </div>
                      <p>Immediately</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/game-icons_duration.svg" alt="" />
                        <p>DURATION</p>
                      </div>
                      <p>3 Months</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/nimbus_money.svg" alt="" />
                        <p>STIPEND</p>
                      </div>
                      <p>$7,000/month</p>
                    </div>
                  </div>
                  <div className="flex mt-[28px] gap-[28px] border-b-[1px] border-[#ebe6e6] pb-[13px]">
                    <div className="flex gap-[4px] text-[12px] font-[400] text-black text-opacity-[50%] justify-center items-center bg-[#d9d9d9] bg-opacity-[50%] rounded-[3px] px-[6px] py-[2px]">
                      <img
                        src="/images/pepicons-pencil_rewind-time.svg"
                        className="w-[18px] h-[18px]"
                        alt=""
                      />
                      <p>5 days ago</p>
                    </div>
                    <p className="text-[12px] font-[400] text-[#000] text-opacity-[50%] bg-[#d9d9d9] bg-opacity-[50%] p-[4px] ">
                      Internship
                    </p>
                  </div>
                  <div className="flex w-full pt-[18px] gap-[15px] justify-end items-center">
                    <Link
                      to="/blank/InternshipViewDetails"
                      className="border-[1px] flex justify-center items-center text-[#4234a2] text-[14px] font-[500] border-[#4234a2] rounded-[5px] w-[117px] h-[32px]"
                    >
                      View details
                    </Link>
                    <button className="text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] w-[103px] h-[32px] rounded-[5px]">
                      Aplly now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[16px] border-[1px] border-[#efecec] p-[27px]">
                <div className="border-[1px] rounded-[3px] w-[125px] h-[26px] p-[4px] border-[#d9d9d9] flex items-center gap-[7px]">
                  <img
                    src="/images/Vector 4.svg"
                    className="w-[16px] h-[8px]"
                    alt=""
                  />
                  <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                    Actively hiring
                  </p>
                </div>
                <div className="mt-[8px]">
                  <div className="flex justify-between gap-[20px] lg:gap-[66px] lg:items-center flex-col lg:flex-row-reverse">
                    <img
                      src="/images/image 6.svg"
                      className="w-[60px] h-[60px]"
                      alt=""
                    />
                    <p className="text-[20px] lg:w-[476px] flex-wrap font-[400]">
                      Digital Dreamweaver: Internship Odyssey In Graphic Design
                    </p>
                  </div>

                  <p className="text-black mt-[12px] text-opacity-[50%] text-[14px] font-[400]">
                    Global Trend
                  </p>
                  <div className="flex gap-[5px] items-center mt-[24px]">
                    <img src="/images/home.svg" alt="" />
                    <p className="text-black text-opacity-[50%] text-[14px] font-[400]">
                      Work From Home
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row text-[14px] font-[400] text-black text-opacity-[50%] mt-[22px] gap-[10px] lg:gap-[54px]">
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/carbon_play-outline.svg" alt="" />
                        <p>START DATE</p>
                      </div>
                      <p>Immediately</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/game-icons_duration.svg" alt="" />
                        <p>DURATION</p>
                      </div>
                      <p>3 Months</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/nimbus_money.svg" alt="" />
                        <p>STIPEND</p>
                      </div>
                      <p>₹ 7,000/month</p>
                    </div>
                  </div>
                  <div className="flex mt-[28px] gap-[28px] border-b-[1px] border-[#ebe6e6] pb-[13px]">
                    <div className="flex gap-[4px] text-[12px] font-[400] text-black text-opacity-[50%] justify-center items-center bg-[#d9d9d9] bg-opacity-[50%] rounded-[3px] px-[6px] py-[2px]">
                      <img
                        src="/images/pepicons-pencil_rewind-time.svg"
                        className="w-[18px] h-[18px]"
                        alt=""
                      />
                      <p>5 days ago</p>
                    </div>
                    <p className="text-[12px] font-[400] text-[#000] text-opacity-[50%] bg-[#d9d9d9] bg-opacity-[50%] p-[4px] ">
                      Internship
                    </p>
                  </div>
                  <div className="flex w-full pt-[18px] gap-[15px] justify-end items-center">
                    <Link
                      to="/JobViewDetails"
                      className="border-[1px] flex justify-center items-center text-[#4234a2] text-[14px] font-[500] border-[#4234a2] rounded-[5px] w-[117px] h-[32px]"
                    >
                      View details
                    </Link>
                    <button className="text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] w-[103px] h-[32px] rounded-[5px]">
                      Aplly now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[16px] border-[1px] border-[#efecec] p-[27px]">
                <div className="border-[1px] rounded-[3px] w-[125px] h-[26px] p-[4px] border-[#d9d9d9] flex items-center gap-[7px]">
                  <img
                    src="/images/Vector 4.svg"
                    className="w-[16px] h-[8px]"
                    alt=""
                  />
                  <p className="text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                    Actively hiring
                  </p>
                </div>
                <div className="mt-[8px]">
                  <div className="flex justify-between gap-[20px] lg:gap-[66px] lg:items-center flex-col lg:flex-row-reverse">
                    <img
                      src="/images/image 6.svg"
                      className="w-[60px] h-[60px]"
                      alt=""
                    />
                    <p className="text-[20px] lg:w-[476px] flex-wrap font-[400]">
                      Digital Dreamweaver: Internship Odyssey In Graphic Design
                    </p>
                  </div>

                  <p className="text-black mt-[12px] text-opacity-[50%] text-[14px] font-[400]">
                    Global Trend
                  </p>
                  <div className="flex gap-[5px] items-center mt-[24px]">
                    <img src="/images/home.svg" alt="" />
                    <p className="text-black text-opacity-[50%] text-[14px] font-[400]">
                      Work From Home
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row text-[14px] font-[400] text-black text-opacity-[50%] mt-[22px] gap-[10px] lg:gap-[54px]">
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/carbon_play-outline.svg" alt="" />
                        <p>START DATE</p>
                      </div>
                      <p>Immediately</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/game-icons_duration.svg" alt="" />
                        <p>DURATION</p>
                      </div>
                      <p>3 Months</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex gap-[4px]">
                        <img src="/images/nimbus_money.svg" alt="" />
                        <p>STIPEND</p>
                      </div>
                      <p>₹ 7,000/month</p>
                    </div>
                  </div>
                  <div className="flex mt-[28px] gap-[28px] border-b-[1px] border-[#ebe6e6] pb-[13px]">
                    <div className="flex gap-[4px] text-[12px] font-[400] text-black text-opacity-[50%] justify-center items-center bg-[#d9d9d9] bg-opacity-[50%] rounded-[3px] px-[6px] py-[2px]">
                      <img
                        src="/images/pepicons-pencil_rewind-time.svg"
                        className="w-[18px] h-[18px]"
                        alt=""
                      />
                      <p>5 days ago</p>
                    </div>
                    <p className="text-[12px] font-[400] text-[#000] text-opacity-[50%] bg-[#d9d9d9] bg-opacity-[50%] p-[4px] ">
                      Internship
                    </p>
                  </div>
                  <div className="flex w-full pt-[18px] gap-[15px] justify-end items-center">
                    <Link
                      to="/JobViewDetails"
                      className="border-[1px] flex justify-center items-center text-[#4234a2] text-[14px] font-[500] border-[#4234a2] rounded-[5px] w-[117px] h-[32px]"
                    >
                      View details
                    </Link>
                    <button className="text-white bg-gradient-to-tl from-[#0f87b3] to-[#462da1] w-[103px] h-[32px] rounded-[5px]">
                      Aplly now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalInternship;

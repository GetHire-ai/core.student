import React from "react";

const Training = () => {
  return (
    <>
      <div className="px-[36px] py-[51px] font-[Outfit]">
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[0px] lg:justify-between items-center">
          <p className="font-[500] text-[24px]">Leading Trainings</p>
          <div className="flex flex-col lg:flex-row gap-[11px]">
            <div className="flex gap-[8px] bg-[#e7f6ff] rounded-[8px] px-[14px] py-[12px]">
              <p>Select Traing</p>
              <img
                src="/images/icon-park-outline_switch.svg"
                className="w-[24px] h-[24px]"
                alt=""
              />
            </div>
            <div className="bg-white border-[1px] border-[#d9d9d9] rounded-[3px] flex gap-[11px] py-[9px] px-[11px]">
              <img
                src="/images/material-symbols-light_search.svg"
                className="w-[24px] h-[24px]"
                alt=""
              />
              <input type="search" placeholder="Search...." />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[18px] gap-[16px]">
          <div className="bg-[#fff] px-[18px] py-[21px] rounded-[16px] shadow-sm">
            <div className="border-[1px] border-[#d9d9d9] rounded-[3px] flex items-center gap-[6px] w-[125px] p-[4px]">
              <img
                src="/images/Vector 4.svg"
                className="w-[16px] h-[8px]"
                alt=""
              />
              <p className="font-[400] text-[14px] text-[#000] text-opacity-[50%]">
                Actively hiring
              </p>
            </div>
            <div className="flex justify-between mt-[11px] border-b-[1px] pb-[17px] border-[#ebe6e6] items-center">
              <div className="flex flex-col gap-[4px]">
                <p className="font-[400] text-[16px]">Graphic Desginer</p>
                <p className="font-[400] text-[14px] text-[#000] text-opacity-[50%]">
                  Unborn Technologies
                </p>
              </div>
              <img
                src="/images/image 3.svg"
                className="w-[51px] h-[34px]"
                alt=""
              />
            </div>
            <div className="text-[14px] flex gap-[5px] mt-[16px] font-[400] text-[#000] text-opacity-[50%]">
              <img src="/images/carbon_location.svg" alt="" />
              <p>Indore</p>
            </div>
            <div className="text-[14px] flex gap-[5px] mt-[12px] font-[400] text-[#000] text-opacity-[50%]">
              <img src="/images/nimbus_money.svg" alt="" />
              <p>$ 2,18,000-2,40,000/year</p>
            </div>
            <div className="text-[16px] flex gap-[8px] mt-[60px] font-[400] text-[#4234a2]">
              <p>View Details</p>
              <img src="/images/Vector 2.svg" alt="" />
            </div>
          </div>
          <div className="bg-[#fff] px-[18px] py-[21px] rounded-[16px] shadow-sm">
            <div className="border-[1px] border-[#d9d9d9] rounded-[3px] flex items-center gap-[6px] w-[125px] p-[4px]">
              <img
                src="/images/Vector 4.svg"
                className="w-[16px] h-[8px]"
                alt=""
              />
              <p className="font-[400] text-[14px] text-[#000] text-opacity-[50%]">
                Actively hiring
              </p>
            </div>
            <div className="flex justify-between mt-[11px] border-b-[1px] pb-[17px] border-[#ebe6e6] items-center">
              <div className="flex flex-col gap-[4px]">
                <p className="font-[400] text-[16px]">Graphic Desginer</p>
                <p className="font-[400] text-[14px] text-[#000] text-opacity-[50%]">
                  Unborn Technologies
                </p>
              </div>
              <img
                src="/images/image 3.svg"
                className="w-[51px] h-[34px]"
                alt=""
              />
            </div>
            <div className="text-[14px] flex gap-[5px] mt-[16px] font-[400] text-[#000] text-opacity-[50%]">
              <img src="/images/carbon_location.svg" alt="" />
              <p>Indore</p>
            </div>
            <div className="text-[14px] flex gap-[5px] mt-[12px] font-[400] text-[#000] text-opacity-[50%]">
              <img src="/images/nimbus_money.svg" alt="" />
              <p>$ 2,18,000-2,40,000/year</p>
            </div>
            <div className="text-[16px] flex gap-[8px] mt-[60px] font-[400] text-[#4234a2]">
              <p>View Details</p>
              <img src="/images/Vector 2.svg" alt="" />
            </div>
          </div>
          <div className="rounded-[16px] px-[17px] shadow-sm w-full h-full bg-gradient-to-br from-[#462da1] to-[#0f87b3]">
            <p className="text-[#fff] text-[22px] mt-[50px] font-[500]">
              Use Ai Trainer
            </p>
            <div className="bg-white rounded-[8px] mt-[24px] text-[16px] font-[400] px-[22px] py-[10px] w-[144px]">
              <p>Loreum Ispum</p>
            </div>
            <div className="flex justify-end mx-[-17px]">
              <img src="/images/bulb.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[57px] lg:flex-row gap-[20px] lg:gap-[0px] lg:justify-between items-center">
          <p className="font-[500] text-[24px]">On Going Training</p>
          <div className="flex flex-col lg:flex-row gap-[11px]">
            <select className="dropdown-select rounded-[3px] text-[14px] font-[400] py-[13px] px-[15px]">
              <option value="">UI/UX Desginer</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className="flex gap-[17px]">
              <div className="bg-white w-[44px] cursor-pointer h-[44px] rounded-[50%] flex justify-center items-center">
                <img src="/images/leftArrow.svg" alt="" />
              </div>
              <div className="bg-white w-[44px] cursor-pointer h-[44px] rounded-[50%] flex justify-center items-center">
                <img src="/images/vector 2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[18px] gap-[16px]">
          <div className="bg-[#fff] rounded-[16px] shadow-sm">
            <img src="/images/Rectangle 15.svg" className="w-full" alt="" />
            <div className="p-[16px] text-[16px] font-[400] text-[#000] text-opacity-[50%]">
              <p>
                As the field of UI/UX design continues to grow and evolve, it’s
                important for both designers
              </p>
            </div>
            <div className="text-[16px] flex gap-[8px] pt-[9px] p-[17px] font-[400] text-[#4234a2]">
              <p>Read More</p>
              <img src="/images/Vector 2.svg" alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[16px] shadow-sm">
            <img src="/images/Rectangle 16.svg" className="w-full" alt="" />
            <div className="p-[16px] text-[16px] font-[400] text-[#000] text-opacity-[50%]">
              <p>
                As the field of UI/UX design continues to grow and evolve, it’s
                important for both designers
              </p>
            </div>
            <div className="text-[16px] flex gap-[8px] pt-[9px] p-[17px] font-[400] text-[#4234a2]">
              <p>Read More</p>
              <img src="/images/Vector 2.svg" alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[16px] shadow-sm">
            <img src="/images/Rectangle 15.svg" className="w-full" alt="" />
            <div className="p-[16px] text-[16px] font-[400] text-[#000] text-opacity-[50%]">
              <p>
                As the field of UI/UX design continues to grow and evolve, it’s
                important for both designers
              </p>
            </div>
            <div className="text-[16px] flex gap-[8px] pt-[9px] p-[17px] font-[400] text-[#4234a2]">
              <p>Read More</p>
              <img src="/images/Vector 2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[57px] lg:flex-row gap-[20px] lg:gap-[0px] lg:justify-between items-center">
          <p className="font-[500] text-[24px]">Suggested Training</p>
          <div className="flex flex-col lg:flex-row gap-[11px]">
            <select className="dropdown-select rounded-[3px] text-[14px] font-[400] py-[13px] px-[15px]">
              <option value="">Offline</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className="flex gap-[17px]">
              <div className="bg-white w-[44px] cursor-pointer h-[44px] rounded-[50%] flex justify-center items-center">
                <img src="/images/leftArrow.svg" alt="" />
              </div>
              <div className="bg-white w-[44px] cursor-pointer h-[44px] rounded-[50%] flex justify-center items-center">
                <img src="/images/vector 2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[18px] gap-[16px]">
          <div className="bg-[#fff] rounded-[16px] shadow-sm">
            <img src="/images/Rectangle 15.svg" className="w-full" alt="" />
            <div className="p-[16px] text-[16px] font-[400] text-[#000] text-opacity-[50%]">
              <p>
                As the field of UI/UX design continues to grow and evolve, it’s
                important for both designers
              </p>
            </div>
            <div className="flex gap-[10px] px-[16px] items-center py-[17px]">
              <div className="flex gap-[7px] text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                <img src="/images/carbon_location.svg" alt="" />
                <p>Indore</p>
              </div>
              <div className="flex gap-[7px] text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                <img src="/images/carbon_time.svg" alt="" />
                <p>3:00 AM</p>
              </div>
            </div>
            <div className="text-[16px] flex gap-[8px] pt-[9px] p-[17px] font-[400] text-[#4234a2]">
              <p>Read More</p>
              <img src="/images/Vector 2.svg" alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[16px] shadow-sm">
            <img src="/images/Rectangle 16.svg" className="w-full" alt="" />
            <div className="p-[16px] text-[16px] font-[400] text-[#000] text-opacity-[50%]">
              <p>
                As the field of UI/UX design continues to grow and evolve, it’s
                important for both designers
              </p>
            </div>
            <div className="flex gap-[10px] px-[16px] items-center py-[17px]">
              <div className="flex gap-[7px] text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                <img src="/images/carbon_location.svg" alt="" />
                <p>Indore</p>
              </div>
              <div className="flex gap-[7px] text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                <img src="/images/carbon_time.svg" alt="" />
                <p>3:00 AM</p>
              </div>
            </div>
            <div className="text-[16px] flex gap-[8px] pt-[9px] p-[17px] font-[400] text-[#4234a2]">
              <p>Read More</p>
              <img src="/images/Vector 2.svg" alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[16px] shadow-sm">
            <img src="/images/Rectangle 15.svg" className="w-full" alt="" />
            <div className="p-[16px] text-[16px] font-[400] text-[#000] text-opacity-[50%]">
              <p>
                As the field of UI/UX design continues to grow and evolve, it’s
                important for both designers
              </p>
            </div>
            <div className="flex gap-[10px] px-[16px] items-center py-[17px]">
              <div className="flex gap-[7px] text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                <img src="/images/carbon_location.svg" alt="" />
                <p>Indore</p>
              </div>
              <div className="flex gap-[7px] text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                <img src="/images/carbon_time.svg" alt="" />
                <p>3:00 AM</p>
              </div>
            </div>
            <div className="text-[16px] flex gap-[8px] pt-[9px] p-[17px] font-[400] text-[#4234a2]">
              <p>Read More</p>
              <img src="/images/Vector 2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;

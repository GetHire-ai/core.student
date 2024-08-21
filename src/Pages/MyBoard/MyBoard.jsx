import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyBoard = () => {
  const [selectedOption, setSelectedOption] = useState("CollegeBoard");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const ConnectRequesttable = [
    {
      dashboardType: "Xboom Utilities Private Limited",
      organizationName: "Social Media Marketing Internship",
      requestStatusA: "Applied",
      requestStatusB: "Round",
      requestStatusC: "2",
      communication: "/images/basil_document-outline.svg",
    },
    {
      dashboardType: "Xboom Utilities Private Limited",
      organizationName: "Social Media Marketing Internship",
      requestStatusA: "Applied",
      requestStatusB: "Final Round Left",
      requestStatusC: "",
      communication: "/images/basil_document-outline.svg",
    },
  ];

  return (
    <>
      <div className="px-[15px] py-[36px]">
        <div className="bg-white rounded-[30px] font-[Outfit] shadow-lg py-[51px] px-[30px]">
          <div className="flex w-full justify-center items-center">
            <p className="w-full text-center text-[24px] font-[600] ">
              Choose Your Dashboard
            </p>
            <img
              src="/images/cancel-svgrepo-com 1.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
          </div>
          <div className="bg-[#e3eff7] p-[26px] mt-[32px] rounded-[30px] w-full">
            <div className="flex flex-col lg:flex-row gap-[30px] w-full justify-center">
              <div
                onClick={() => handleSelect("CollegeBoard")}
                className={`bg-[#fff] ${
                  selectedOption === "CollegeBoard"
                    ? "border-[1px] border-[#5956e9]"
                    : ""
                } flex justify-center items-center  flex-col py-[25px] px-[18px] rounded-[12px]`}
              >
                <svg
                  width="62"
                  height="88"
                  viewBox="0 0 62 88"
                  fill={
                    selectedOption === "CollegeBoard"
                      ? "bg-gradient-to-br from-[#0f87b3] to-[#462da1]"
                      : "bg-[#7f7f7f]"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7184 17.434V13.6531C17.7184 12.9699 18.2743 12.4144 18.9571 12.4144H42.2546C42.9378 12.4144 43.4933 12.9703 43.4933 13.6531V17.434C43.4933 18.1172 42.9374 18.6728 42.2546 18.6728H18.9575C18.2743 18.6731 17.7184 18.1172 17.7184 17.434ZM37.7536 6.59513C37.4557 2.90962 34.3672 0 30.6061 0C26.8449 0 23.7564 2.90962 23.4585 6.59513H37.7536ZM61.2121 21.4668V80.1762C61.2121 84.4902 57.7024 88 53.3884 88H7.82377C3.50977 88 0 84.4902 0 80.1762V21.4668C0 17.1528 3.50977 13.643 7.82377 13.643H11.8996C11.8996 13.6465 11.8992 13.65 11.8992 13.6531V17.434C11.8992 21.3259 15.0656 24.492 18.9571 24.492H42.2546C46.1465 24.492 49.3126 21.3259 49.3126 17.434V13.6531C49.3126 13.6496 49.3122 13.6461 49.3122 13.643H53.388C57.7024 13.643 61.2121 17.1528 61.2121 21.4668ZM20.8166 55.6509C19.4487 54.8079 17.6559 55.2331 16.8129 56.601L14.0616 61.0639L12.6413 59.9451C11.3797 58.9508 9.54936 59.1684 8.55544 60.4308C7.56112 61.6936 7.77876 63.5228 9.04115 64.5171L13.0258 67.6552C13.5425 68.0621 14.1776 68.2786 14.8259 68.2786C14.995 68.2786 15.1653 68.2639 15.3345 68.234C16.1511 68.0889 16.8676 67.602 17.3029 66.896L21.7666 59.6545C22.6101 58.2866 22.1845 56.4943 20.8166 55.6509ZM20.8166 34.7016C19.4487 33.8582 17.6559 34.2842 16.8129 35.6517L14.0616 40.1147L12.6413 38.9958C11.3797 38.0019 9.54936 38.2192 8.55544 39.4816C7.56112 40.7443 7.77876 42.5735 9.04115 43.5678L13.0258 46.7059C13.5425 47.1129 14.1776 47.3294 14.8259 47.3294C14.995 47.3294 15.1653 47.3146 15.3345 47.2848C16.1511 47.1397 16.8676 46.6528 17.3029 45.9467L21.7666 38.7057C22.6101 37.3374 22.1845 35.545 20.8166 34.7016ZM50.9505 65.3694C50.9505 63.7621 49.6481 62.4598 48.0409 62.4598H29.0314C27.4245 62.4598 26.1218 63.7621 26.1218 65.3694C26.1218 66.9767 27.4245 68.279 29.0314 68.279H48.0409C49.6481 68.279 50.9505 66.9767 50.9505 65.3694ZM50.9505 44.4202C50.9505 42.8129 49.6481 41.5105 48.0409 41.5105H29.0314C27.4245 41.5105 26.1218 42.8129 26.1218 44.4202C26.1218 46.0274 27.4245 47.3298 29.0314 47.3298H48.0409C49.6481 47.3298 50.9505 46.0274 50.9505 44.4202Z"
                    fill={
                      selectedOption === "CollegeBoard"
                        ? "bg-gradient-to-br from-[#0f87b3] to-[#462da1]"
                        : "bg-[#7f7f7f]"
                    }
                  />
                  <path
                    d="M17.7184 17.434V13.6531C17.7184 12.9699 18.2743 12.4144 18.9571 12.4144H42.2546C42.9378 12.4144 43.4933 12.9703 43.4933 13.6531V17.434C43.4933 18.1172 42.9374 18.6728 42.2546 18.6728H18.9575C18.2743 18.6731 17.7184 18.1172 17.7184 17.434ZM37.7536 6.59513C37.4557 2.90962 34.3672 0 30.6061 0C26.8449 0 23.7564 2.90962 23.4585 6.59513H37.7536ZM61.2121 21.4668V80.1762C61.2121 84.4902 57.7024 88 53.3884 88H7.82377C3.50977 88 0 84.4902 0 80.1762V21.4668C0 17.1528 3.50977 13.643 7.82377 13.643H11.8996C11.8996 13.6465 11.8992 13.65 11.8992 13.6531V17.434C11.8992 21.3259 15.0656 24.492 18.9571 24.492H42.2546C46.1465 24.492 49.3126 21.3259 49.3126 17.434V13.6531C49.3126 13.6496 49.3122 13.6461 49.3122 13.643H53.388C57.7024 13.643 61.2121 17.1528 61.2121 21.4668ZM20.8166 55.6509C19.4487 54.8079 17.6559 55.2331 16.8129 56.601L14.0616 61.0639L12.6413 59.9451C11.3797 58.9508 9.54936 59.1684 8.55544 60.4308C7.56112 61.6936 7.77876 63.5228 9.04115 64.5171L13.0258 67.6552C13.5425 68.0621 14.1776 68.2786 14.8259 68.2786C14.995 68.2786 15.1653 68.2639 15.3345 68.234C16.1511 68.0889 16.8676 67.602 17.3029 66.896L21.7666 59.6545C22.6101 58.2866 22.1845 56.4943 20.8166 55.6509ZM20.8166 34.7016C19.4487 33.8582 17.6559 34.2842 16.8129 35.6517L14.0616 40.1147L12.6413 38.9958C11.3797 38.0019 9.54936 38.2192 8.55544 39.4816C7.56112 40.7443 7.77876 42.5735 9.04115 43.5678L13.0258 46.7059C13.5425 47.1129 14.1776 47.3294 14.8259 47.3294C14.995 47.3294 15.1653 47.3146 15.3345 47.2848C16.1511 47.1397 16.8676 46.6528 17.3029 45.9467L21.7666 38.7057C22.6101 37.3374 22.1845 35.545 20.8166 34.7016ZM50.9505 65.3694C50.9505 63.7621 49.6481 62.4598 48.0409 62.4598H29.0314C27.4245 62.4598 26.1218 63.7621 26.1218 65.3694C26.1218 66.9767 27.4245 68.279 29.0314 68.279H48.0409C49.6481 68.279 50.9505 66.9767 50.9505 65.3694ZM50.9505 44.4202C50.9505 42.8129 49.6481 41.5105 48.0409 41.5105H29.0314C27.4245 41.5105 26.1218 42.8129 26.1218 44.4202C26.1218 46.0274 27.4245 47.3298 29.0314 47.3298H48.0409C49.6481 47.3298 50.9505 46.0274 50.9505 44.4202Z"
                    fill="url(#paint0_linear_420_599)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_420_599"
                      x1="59.083"
                      y1="88"
                      x2="-8.35689"
                      y2="81.0461"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0F87B3" />
                      <stop offset="1" stop-color="#462DA1" />
                    </linearGradient>
                  </defs>
                </svg>
                {selectedOption === "CollegeBoard" ? (
                  <p className="mt-[21px] text-[20px] font-[500]">
                    Use Unique ID
                  </p>
                ) : (
                  <p className="mt-[21px] text-[20px] text-[#000] text-opacity-[50%] font-[500]">
                    Connect College Board
                  </p>
                )}

                <input
                  type="text"
                  className={`bg-[#f1f1f1] rounded-[5px] h-[34px] mt-[10px] ${
                    selectedOption === "CollegeBoard" ? "flex" : "hidden"
                  } `}
                />
                <Link
                  to="/CollegeBoard"
                  className={`py-[7px] px-[21px] ${
                    selectedOption === "CollegeBoard"
                      ? "bg-gradient-to-br from-[#0f87b3] to-[#462da1] flex"
                      : "bg-[#7f7f7f] hidden"
                  } rounded-[5px] mt-[14px] text-white text-[14px] font-[500]`}
                >
                  Submit
                </Link>
              </div>
              <div
                onClick={() => handleSelect("AIBoard")}
                className={`bg-[#fff] flex justify-center items-center p-[19px] flex-col rounded-[12px] ${
                  selectedOption === "AIBoard"
                    ? "border-[1px] border-[#5956e9]"
                    : ""
                }`}
              >
                <svg
                  width="110"
                  height="110"
                  viewBox="0 0 110 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M82.5 27.5V82.5H27.5V27.5H82.5ZM50.6493 41.25H45.2929L35.1235 68.75H39.9559L41.8758 63.374H54.0493L55.928 68.75H61.0515L50.6493 41.25ZM69.6295 41.25H64.8165V68.75H69.6295V41.25ZM47.9305 45.8638L52.7246 59.5833H43.2126L47.9305 45.8638ZM87.0833 68.75H96.25V77.9167H87.0833V68.75ZM32.0833 87.0833H41.25V96.25H32.0833V87.0833ZM50.4167 87.0833H59.5833V96.25H50.4167V87.0833ZM32.0833 13.75H41.25V22.9167H32.0833V13.75ZM68.75 87.0833H77.9167V96.25H68.75V87.0833ZM50.4167 13.75H59.5833V22.9167H50.4167V13.75ZM68.75 13.75H77.9167V22.9167H68.75V13.75ZM87.0833 50.4167H96.25V59.5833H87.0833V50.4167ZM13.75 68.75H22.9167V77.9167H13.75V68.75ZM87.0833 32.0833H96.25V41.25H87.0833V32.0833ZM13.75 50.4167H22.9167V59.5833H13.75V50.4167ZM13.75 32.0833H22.9167V41.25H13.75V32.0833Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </svg>

                <p className="text-[20px] font-[500] text-[#000] text-opacity-[50%]">
                  Search Our Organization
                </p>
              </div>
            </div>
            {selectedOption === "CollegeBoard" ? (
              <div className="mt-[61px]">
                <p className="font-[500] text-[22px]">Connect Request</p>
                <div className="overflow-x-auto rounded-[14px] mt-[25px] shadow-lg border-t-[2px]">
                  <table className="w-full rounded-[14px]">
                    <thead className="bg-[#e3eff7] text-[13px] font-[400] font-[Outfit] h-[63px]">
                      <tr>
                        <th className="text-left  pl-[27px] pr-[77px] pt-[27px] pb-[19px]">
                          Dashboard Type
                        </th>
                        <th className="text-left  pr-[115px] pt-[27px] pb-[19px]">
                          Organization Name
                        </th>
                        <th className="text-left  pr-[128px] pt-[27px] pb-[19px]">
                          Request Status
                        </th>
                        <th className="text-left pr-[64px] pt-[27px] pb-[19px]">
                          Communication
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[16px] bg-[#fff] font-[400] font-[Outfit] text-center">
                      {ConnectRequesttable.map((connect, index) => (
                        <tr key={index}>
                          <td className="px-[25px] py-[25px] text-black text-opacity-[50%] text-left">
                            {connect.dashboardType}
                          </td>
                          <td className="pr-[10px] pl-[3px] flex gap-[29px] py-[25px] text-black text-opacity-[50%] text-left">
                            {connect.organizationName}
                          </td>
                          <td className="pl-[6px] pr-[40px] py-[30px] text-left">
                            <div className="bg-[#e3eff7] px-[19px] py-[7px] flex  justify-center items-center rounded-[5px]">
                              <p className="text-[#4234a2]">
                                {connect.requestStatusA}
                              </p>
                              <p className="text-[#97969d] text-[14.52px] ml-[17px]">
                                {connect.requestStatusB}
                              </p>
                              {connect.requestStatusC === "2" && (
                                <p className="text-[#97969d] ml-[5px] border-[0.85px] border-[#97969d] rounded-[50%] w-[18.67px] h-[18.67px] flex justify-center items-center">
                                  {connect.requestStatusC}
                                </p>
                              )}
                            </div>
                          </td>
                          <td className=" flex items-start justify-start px-[5px] py-[30px]">
                            <img
                              src={connect.communication}
                              className="w-[24px] h-[24px]"
                              alt=""
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBoard;

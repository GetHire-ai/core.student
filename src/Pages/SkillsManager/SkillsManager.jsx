import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link, useLocation } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GetApi } from "../utilis/Api_Calling";
import SkillTestModal from "./SkillTestModal";

const SkillsManager = () => {
  const path = useLocation();
  const pathName = path?.pathname;

  const [studentprofile, setstudentprofile] = useState("");
  const [Loading, setLoading] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setstudentprofile(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
  }, []);

  const openModal = async (skill) => {
    setSelectedSkill(skill);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    Getstudentprofile();
  };

  return (
    <>
      <div className="py-[54px] pl-[4px] pr-[14.56px] font-[Outfit]">
        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-6  lg:gap-[27px]">
          <div className="bg-white w-full col-start-1 col-end-7 mb-[59px]  px-[29px] py-[42px] flex border-[1px] border-[#efecec] rounded-[30px]">
            <div className="w-full  flex-col lg:flex-row flex gap-[5px]">
              <div className="flex self-center w-[148px] justify-center items-center flex-col">
                <img
                  src={
                    studentprofile?.Image
                      ? studentprofile?.Image
                      : "data:image/png;base64,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"
                  }
                  className="w-full rounded-[50%]"
                  alt=""
                />
                <div className="bg-[#4234a2] mt-[-20px] px-[22px] text-white py-[1.56px] rounded-[28px] flex justify-center items-center text-[14px] font-[500]">
                  5%
                </div>
              </div>
              <div className=" w-full lg:ml-[58px]">
                <p className="text-[24px] font-[500]">My skills</p>
                <div className="mt-[30px] flex  flex-row">
                  <div className="flex h-[161px] overflow-scroll overflow-y-hidden w-[] gap-[30px]">
                    {studentprofile?.Skill_Set?.map((d, index) => (
                      <div
                        key={index}
                        onClick={() => openModal(d)}
                        className="bg-[#d9d9d9] rounded-[8px] flex px-[24px] pt-[17px] flex-col justify-center items-center gap-[6.56px] bg-opacity-[10%] cursor-pointer"
                      >
                        <div style={{ width: 100, height: 100 }}>
                          <CircularProgressbar
                            value={d.score}
                            text={`${d.score}%`}
                          />
                        </div>
                        <div>
                          <p className="text-[14px] pb-[19px] font-[500]">
                            {d.Skill}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-6">
          <div className="bg-white mt-[61px] col-start-1 col-end-7 px-[39px] py-[49px] rounded-[30px] border-[1px] border-[#efecec]">
            <div className="text-[24px] flex w-full font-[400] justify-center items-center text-[#545454]">
              <div className=" flex-col lg:flex-row gap-[10px] lg:gap-0  flex">
                <Link
                  to="/SkillManager"
                  className={`pb-[12px] pr-[8px] pl-[32px] ${
                    pathName === "/SkillManager"
                      ? "border-b-[3px] text-[#5356e9]  border-[#5356e9]"
                      : "border-b-[3px] border-[#545454]"
                  } `}
                >
                  My skills
                </Link>
                <Link
                  to="/Suggestion"
                  className={`pb-[12px] px-[30px] ${
                    pathName === "/Suggestion"
                      ? "border-b-[3px] text-[#5356e9]  border-[#5356e9]"
                      : "border-b-[3px] border-[#545454]"
                  }`}
                >
                  Suggestion
                </Link>
                <Link
                  to="/Certification"
                  className={`pb-[12px] pl-[14px] pr-[27px] ${
                    pathName === "/Certification"
                      ? "border-b-[3px] text-[#5356e9]  border-[#5356e9]"
                      : "border-b-[3px] border-[#545454]"
                  }`}
                >
                  Certification
                </Link>
              </div>
            </div>
            <div className="bg-[#d9d9d9] mt-[31px] bg-opacity-[20%] rounded-[16px] flex items-center justify-center gap-[14px] p-[16px]">
              <img
                src="/images/search.svg"
                className="w-[17px] h-[17px]"
                alt=""
              />
              <input
                type="text"
                className="w-[80%] bg-[#d9d9d9] bg-opacity-[1%] outline-none"
                placeholder="Search Skills"
              />
              <p className="text-[16px] font-[500] text-[#4234a2]">View all</p>
            </div>
            <div className="grid lg:grid-cols-3 mt-[46px] gap-[40px]">
              {studentprofile?.Skill_Set?.map((data) => (
                <div
                  className="bg-[#fff] rounded-[16px] shadow-sm"
                  onClick={() => openModal(data.Skill)}
                >
                  <img
                    src="/images/Rectangle 15.svg"
                    className="w-full"
                    alt=""
                  />
                  <div className="p-[16px] border-b-[1px] border-[#ebe6e6] pb-[17px]  flex justify-between items-center text-[16px] font-[400] text-[#000] text-opacity-[50%]">
                    <div>
                      <p className="text-black">{data.Skill} </p>
                      <p className="text-[14px]">Level :{data?.Rate} </p>
                    </div>
                    <img
                      src="/images/image 3.svg"
                      className="w-[51px] h-[34px]"
                      alt=""
                    />
                  </div>
                  <div className="p-[16px] text-[14px] font-[400] text-[#000] text-opacity-[50%]">
                    <div className="flex gap-[5px]">
                      <img
                        src="/images/training-achievement-medal-svgrepo-com 4.svg"
                        alt=""
                      />
                      <p className="mt-[7px]">Training Guide</p>
                    </div>
                    <p>
                      Market Average slarey :{" "}
                      <span className="text-[#4234a2]">3-6 LPA</span>
                    </p>
                  </div>
                  <div className="text-[16px] flex gap-[8px] pt-[9px] p-[17px] font-[400] text-[#4234a2]">
                    <p>View Details</p>
                    <img src="/images/Vector 2.svg" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SkillTestModal
        skill={selectedSkill}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default SkillsManager;

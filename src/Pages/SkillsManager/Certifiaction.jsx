import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link, useLocation } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import { FaStar } from "react-icons/fa";
import { GetApi } from "../utilis/Api_Calling";

const Certifiaction = () => {
  const path = useLocation();
  const pathName = path?.pathname;

  const [studentprofile, setstudentprofile] = useState("");
  const [courses, setCourses] = useState([]);
  const [Loading, setLoading] = useState(true);

  const Getstudentprofile = async () => {
    try {
      const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
      setstudentprofile(Getjobdata?.data?.data);
      console.log(Getjobdata.data.data.Skill_Set);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const getCourses = async () => {
    try {
      setCourses([
        {
          category: "Programming",
          title: "Introduction to JavaScript",
          description:
            "Learn the basics of JavaScript, the most popular programming language in web development.",
          thumbnail: "https://example.com/js-thumbnail.jpg",
          price: 45,
          ownBy: "gethire",
          owner: "GetHire",
          contents: [
            { part: "1", content: "Variables and Data Types" },
            { part: "2", content: "Functions and Scope" },
            { part: "3", content: "DOM Manipulation" },
          ],
        },
        {
          category: "Data Science",
          title: "Data Analysis with Python",
          description:
            "Explore data analysis techniques using Python and popular libraries like Pandas and NumPy.",
          thumbnail: "https://example.com/python-thumbnail.jpg",
          price: 50,
          ownBy: "company",
          owner: "GetHire",
          contents: [
            { part: "1", content: "Introduction to Data Analysis" },
            { part: "2", content: "Working with DataFrames" },
            { part: "3", content: "Data Visualization" },
          ],
        },
        {
          category: "Design",
          title: "UI/UX Design Fundamentals",
          description:
            "Understand the principles of user interface and user experience design.",
          thumbnail: "https://example.com/design-thumbnail.jpg",
          price: 75,
          ownBy: "company",
          owner: "GetHire",
          contents: [
            { part: "1", content: "Introduction to UI/UX" },
            { part: "2", content: "Designing User Interfaces" },
            { part: "3", content: "Prototyping and Testing" },
          ],
        },
        {
          category: "Marketing",
          title: "Digital Marketing Essentials",
          description:
            "Learn the fundamentals of digital marketing and how to create effective online campaigns.",
          thumbnail: "https://example.com/marketing-thumbnail.jpg",
          price: 40,
          ownBy: "gethire",
          owner: "GetHire",
          contents: [
            { part: "1", content: "Introduction to Digital Marketing" },
            { part: "2", content: "SEO Basics" },
            { part: "3", content: "Social Media Marketing" },
          ],
        },
        {
          category: "Business",
          title: "Project Management Professional",
          description:
            "Prepare for the PMP certification exam with comprehensive project management training.",
          thumbnail: "https://example.com/pmp-thumbnail.jpg",
          price: 100,
          ownBy: "company",
          owner: "GetHire",
          contents: [
            { part: "1", content: "Project Management Basics" },
            { part: "2", content: "Planning and Scheduling" },
            { part: "3", content: "Risk Management" },
          ],
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Getstudentprofile();
    getCourses();
  }, []);

  const getProgressValue = (rate) => {
    switch (rate) {
      case "Beginner":
        return 50;
      case "Intermediate":
        return 70;
      case "Advanced":
        return 90;
      default:
        return 0;
    }
  };

  return (
    <>
      <div className="py-[54px] pl-[4px] pr-[14.56px] font-[Outfit]">
        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-6  lg:gap-[27px]">
          <div className="bg-white w-full col-start-1 col-end-7 mb-[59px]  px-[29px] py-[42px] flex border-[1px] border-[#efecec] rounded-[30px]">
            <div className="w-full  flex-col lg:flex-row flex gap-[5px]">
              <div className="flex self-center w-[148px] justify-center items-center flex-col">
                <img
                  src="/images/Ellipse 3289.svg"
                  className="w-full rounded-[50%]"
                  alt=""
                />
                <div className="bg-[#4234a2] mt-[-20px] px-[22px] text-white py-[1.56px] rounded-[28px] flex justify-center items-center text-[14px] font-[500]">
                  5%
                </div>
              </div>
              <div className=" w-full lg:ml-[58px]">
                <p className="text-[24px] font-[500]">Our top skills</p>
                <div className="mt-[30px] flex  flex-row">
                  <div className="flex h-[161px] overflow-scroll overflow-y-hidden w-[600px] gap-[30px]">
                    {studentprofile?.Skill_Set?.map((d, index) => (
                      <div
                        key={index}
                        className="bg-[#d9d9d9] rounded-[8px] flex px-[24px] pt-[17px] flex-col justify-center items-center gap-[6.56px] bg-opacity-[10%]"
                      >
                        <div style={{ width: 100, height: 100 }}>
                          <CircularProgressbar
                            value={getProgressValue(d.Rate)}
                            text={`${getProgressValue(d.Rate)}%`}
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
              {courses?.map((course) => (
                <div className="bg-[#fff] relative rounded-[16px] shadow-sm">
                  <img
                    src="/images/certificationImg.svg"
                    className="w-full h-[147px]"
                    alt=""
                  />
                  <div className="flex absolute top-[115px] right-[24px]">
                    <img
                      src="/images/Ellipse 3307.svg"
                      className="w-[38px] mr-[-20px] h-[38px] "
                      alt=""
                    />
                    <img
                      src="/images/Ellipse 3308.svg"
                      className="w-[38px] mr-[-20px] h-[38px]"
                      alt=""
                    />
                    <img
                      src="/images/Ellipse 3309.svg"
                      className="w-[38px] mr-[-20px] h-[38px]"
                      alt=""
                    />
                    <img
                      src="/images/Ellipse 3310.svg"
                      className="w-[38px] h-[38px]"
                      alt=""
                    />
                  </div>
                  <div className="p-[16px] border-b-[1px] border-[#ebe6e6] pb-[17px] flex-col  flex items-start text-[16px] font-[400] text-[#000] text-opacity-[50%]">
                    <p className="text-[14px] font-[400] px-[20px] py-[7px] bg-[#d9d9d9] bg-opacity-[20%] rounded-[4px]">
                      {course?.category}
                    </p>
                    <p className="text-black mt-[18px]">{course?.title}</p>
                    <div className="flex gap-[8px] mt-[10px]">
                      <p className="text-[14px]">4.0 (75 Reviews) </p>
                      <div className="flex gap-[2px] text-[#fff500]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[26px] flex justify-between pt-[9px] p-[17px] items-center">
                    <p>${course?.price}</p>
                    <div className="text-[16px]  flex gap-[8px]  font-[400] text-[#4234a2]">
                      <p>View Details</p>
                      <img src="/images/Vector 2.svg" alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifiaction;

import React, { useState } from "react";
import InternshipApplyModal from "./InternshipApplyModal";

const InternshipViewDetails = () => {
  const [internshipApplyModal, setInternshipApplyModal] = useState(false);

  const toggleInternshipApplyModalOpen = () => {
    setInternshipApplyModal(true);
  };
  const toggleInternshipApplyModalClose = () => {
    setInternshipApplyModal(false);
  };

  return (
    <>
      <div className="py-[88px] px-[20px] flex flex-col w-full justify-center items-center font-[Outfit]">
        <p className="text-[32px] font-[400] lg:w-[998px] text-center flex-wrap ">
          Search Engine Optimization (SEO) work from home job/internship at
          Global Trend
        </p>
        <div className="bg-white rounded-[16px] lg:w-[998px] mt-[27px] border-[1px] border-[#efecec] p-[29px]">
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
            <p className="text-[20px] lg:w-[476px] flex-wrap font-[400]">
              Search Engine Optimization (SEO)
            </p>

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
                  <img src="/images/nimbus_money (1).svg" alt="" />
                  <p>STIPEND</p>
                </div>
                <p>₹ 5000/month</p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="flex gap-[4px]">
                  <img src="/images/guidance_time.svg" alt="" />
                  <p>APPLY BY</p>
                </div>
                <p>29 Nov 23</p>
              </div>
            </div>
            <div className="flex mt-[28px] gap-[28px] ">
              <div className="flex gap-[4px] bg-[#d9d9d9] text-[12px] font-[400] text-[#000] text-opacity-[50%] justify-center items-center bg-opacity-[50%] rounded-[3px] px-[6px] py-[2px]">
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
            <div className="flex mt-[35px] border-b-[1px] border-[#ebe6e6] pb-[32px] justify-between items-center">
              <div className="flex gap-[7px] text-[16px] font-[400] text-black text-opacity-[50%]">
                <img
                  src="/images/clarity_users-line.svg"
                  className="w-[24px] h-[24px]"
                  alt=""
                />
                <p>472 applicants</p>
              </div>
              <div className="flex gap-[37px]">
                <img src="/images/save.svg" alt="" />
                <img src="/images/material-symbols-light_share.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="mt-[17px]">
            <p className="text-[18px] font-[400]">About Global Trend</p>
            <div className="text-[14px] mt-[9px] flex gap-[7px] items-center font-[400] text-[#4234a2]">
              <p>Company Page</p>
              <img
                src="/images/sendvector.svg"
                className="w-[9.33px] h-[9.33px]"
                alt=""
              />
            </div>
            <p className="text-[16px] mt-[14px] text-black text-opacity-[50%] font-[400]">
              Global Trend is a team of professionals and our aim is to be your
              one-stop digital marketing facility and content writing, web
              designing, and web development where your requirements are handled
              professionally, delivering great results. Our experience speaks
              for itself, so whether it's a single one-off task to create an app
              or write a niche blog, or a much larger project, from creating a
              website or taking your business to another level, we'll deliver.
              It doesn't matter where you are in the world, we'll come to you.
            </p>
            <div className="border-[1px] mt-[17px] border-[#d9d9d9] rounded-[3px] w-full p-[17px]">
              <p className="text-[16px] font-[500]">Activity on Ilogo name</p>
              <div className="flex gap-[27px] mt-[10px]">
                <div className="flex gap-[5px] text-black text-opacity-[50%] text-[16px] font-[400]">
                  <img src="/images/uiw_date.svg" alt="" />
                  <p>Hiring since July 2021</p>
                </div>
                <div className="flex gap-[5px] text-black text-opacity-[50%] text-[16px] font-[400]">
                  <img src="/images/iconoir_mail.svg" alt="" />
                  <p>103 opportunities posted</p>
                </div>
                <div className="flex gap-[5px] text-black text-opacity-[50%] text-[16px] font-[400]">
                  <img src="/images/ph_user-light.svg" alt="" />
                  <p>54 candidates hired</p>
                </div>
              </div>
            </div>
            <p className="text-[18px] mt-[25px] font-[500]">
              About the work from home job/internship
            </p>
            <p className="text-[16px] font-[500] text-[#000] text-opacity-[50%]">
              Internship Opportunity. Search Engine Optimization (SEO) Intern
            </p>
            <div className="text-[16px] font-[500] text-black text-opacity-[50%] mt-[25px]">
              <p>Selected intern's day-to-day responsibilities include:</p>
              <ol className="mt-[24px]">
                <li>1. Assist in optimizing website content</li>
                <li>
                  2. Collaborate with the content team for SEO-friendly content
                </li>
                <li>
                  3. Track website performance via SEO tools like Google
                  Analytics
                </li>
                <li>4. Resolve SEO issues for better site visibility</li>
                <li>5. Assist in SEM campaign optimization</li>
                <li>6. Develop strategies to improve search engine rankings</li>
                <li>7. Research SEO keywords for the website</li>
                <li>8. Monitor daily performance metrics</li>
                <li>9. Align goals with the marketing team</li>
                <li>10. Manage SEO strategy internally</li>
                <li>11. Optimize content and links for SEO</li>
              </ol>
            </div>
            <div className="text-[16px] font-[500] text-black text-opacity-[50%] mt-[25px]">
              <p className="text-black">
                What We Provide During the Internship:{" "}
              </p>
              <ol className="mt-[24px]">
                <li>
                  1. Access to industry-renowned paid tools such as Ahrefs,
                  SEMrush, ChatGPT, BuzzSumo, Moz, Serpstat, and many more
                </li>
                <li>
                  2. Content writers who can create compelling content as per
                  given SEO keywords
                </li>
                <li>3. Internship Certificate</li>
                <li>
                  4. For those who perform exceptionally well, a Letter of
                  Recommendation
                </li>
              </ol>
            </div>
            <div className="mt-[25px]">
              <p className="text-[18px] font-[500]">Skill(s) required</p>
              <p className="text-[16px] text-center bg-[#f8f8f8] rounded-[27px] w-[258px] font-[500] text-black text-opacity-[50%]">
                Search Engine Optimization (SEO)
              </p>
            </div>
            <div className="text-[16px] font-[500] text-black text-opacity-[50%] mt-[25px]">
              <p className="text-black">Who can apply </p>
              <ol>
                <li>Only those candidates can apply who:</li>
                <li>1. are available for the work from home job/internship</li>
                <li>
                  2. can start the work from home job/internship between 15th
                  Nov 23 and 20th Dec 23
                </li>
                <li>3. are available for duration of 3 months</li>
                <li>4. have relevant skills and interests</li>
              </ol>
            </div>
            <p className="text-black text-opacity-[50%] text-[16px] font-[500]">
              *Women wanting to start/restart their career can also apply.
            </p>
            <div className="mt-[25px]">
              <p className="text-[18px] font-[500]">Perks</p>
              <div className="flex gap-[16px] mt-[6px]">
                <p className="text-[16px] text-center bg-[#f8f8f8] rounded-[27px] w-[97px] font-[500] text-black text-opacity-[50%]">
                  Certificate
                </p>
                <p className="text-[16px] text-center bg-[#f8f8f8] rounded-[27px] w-[218px] font-[500] text-black text-opacity-[50%]">
                  Letter of recommendation
                </p>
              </div>
            </div>
            <div className="mt-[25px]">
              <p className="text-[18px] font-[500]">Number of openings</p>

              <p className="text-[16px] font-[500] text-black text-opacity-[50%]">
                4
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end items-center mt-[61px]">
            <button
              onClick={toggleInternshipApplyModalOpen}
              className="text-white bg-gradient-to-tr from-[#0f87b3] to-[#462da1] w-[153px] h-[49px] flex justify-center items-center rounded-[6px]"
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
      {internshipApplyModal && (
        <InternshipApplyModal
          onOpen={toggleInternshipApplyModalOpen}
          onClose={toggleInternshipApplyModalClose}
        />
      )}
    </>
  );
};

export default InternshipViewDetails;

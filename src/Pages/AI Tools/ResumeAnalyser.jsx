import React, { useRef, useState } from "react";

const ResumeAnalyser = () => {
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(URL.createObjectURL(file));
      setIsModalOpen(false);
    }
  };

  return (
    <div className="w-full font-[poppins]">
      {file === null ? (
        <>
          <div className="flex flex-col justify-start items-center pt-20 bg-gradient-to-l from-[#4086f0] to-[#15bb98] min-h-screen">
            <span className="text-5xl font-semibold text-white mb-5">
              Get An Expert Resume Review
            </span>
            <span className="text-xl  text-white">
              not sure why your resume not get you interview calls ?
            </span>

            <span className="text-xl  text-white mb-5 w-3/5 mt-10">
              our expert resume reviews are exactly what you need perfect for
              professionals of all domains and those looking for a quick
              resfresh . our hyper-personalised review will guide you step by
              step on what section of your resume should be improoved to stand
              out in the eyes of reqruiter and land a interview call .
            </span>
            <button
              className="bg-white text-blue-600 font-semibold rounded px-5 py-2 mt-5"
              onClick={() => setIsModalOpen(true)}
            >
              Get Resume Review
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-3/5 mx-auto">
            <h2 className="text-center text-5xl font-extralight text-[#6772e5]">
              Your Resume scored a D
            </h2>
            <p className="my-7 text-gray-700 font-extralight text-lg">
              Your Resume could use some work .We recommend looking over our
              anlysis below and seeing what you have to focus on in order to
              take your resume to the next level.
            </p>

            <div className="w-full flex border bg-white p-4">
              <div className="flex flex-col items-center justify-start w-1/2">
                <div className="relative w-48 h-48 mt-36">
                  <svg
                    className="absolute top-0 left-0 transform -rotate-90"
                    width="192"
                    height="192"
                    viewBox="0 0 96 96"
                  >
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#d0d0d0"
                      strokeWidth="16"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#4caf50"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="75.36"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                    75%
                  </div>
                </div>

                <div className="w-full mt-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                        Progress
                      </span>
                      <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                        75%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="w-full bg-gray-300 rounded-full h-2.5">
                          <div className="bg-teal-600 h-2.5 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="border p-4 h-full">
                  <iframe
                    src={file}
                    height="600"
                    title="Resume"
                    className="border w-full"
                  />
                </div>
              </div>
            </div>

            <div className="w-full mt-10">
              <h2 className="font-semibold text-xl my-5">Document Synopsis</h2>
              <div className="w-full border bg-white">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        ATS Compliance
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        Your resume appears to be compliant with applicant
                        tracking systems. Awesome!
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        File Type
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        The file type of your resume is: PDF document. This is
                        one of the standard file types used for resumes. Great!
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        File Size
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        The file size of your resume is: 434 KB This is small
                        enough to likely avoid any transmission issues.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Page Count
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        Your resume contains 1 page. Great job! This matches the
                        page count of the most effective resumes.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Word Count
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-xmark text-xl font-bold text-red-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        cross Your resume contains 215 words. <br /> This is on
                        the low end, so while there are no hard and fast rules
                        when it comes to how many words should be on a resume,
                        you may want to consider beefing up your resume a little
                        bit if possible.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-full mt-10">
              <h2 className="font-semibold text-xl my-5">
                Data Identification
              </h2>
              <div className="w-full border bg-white">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Phone Number
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        We have successfully detected your phone number on your
                        resume as: 7354406325 <br />
                        If this is not your phone number, then you may be using
                        an ATS-incompatible resume template or a
                        strangely-formatted phone number.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        E-mail Address
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        checkmark We have successfully detected your e-mail
                        address on your resume as:
                        filledstackdeveloper@gmail.com <br />
                        If this is not your e-mail address, then you may be
                        using an ATS-incompatible resume template.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        LinkedIn URL
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        We have successfully detected the URL to your LinkedIn
                        profile as: linkedin.com/in/mohammed
                        <br />
                        If this is not your LinkedIn profile, then you may be
                        using an ATS-incompatible resume template.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Education
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-xmark text-xl font-bold text-red-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        cross Oops! We were unable to detect a Work History
                        section on your resume. It's important to include one in
                        order to showcase your past work experiences. If you did
                        include a Work History section, then you may be using an
                        ATS-incompatible resume template or labeled the section
                        with an unconventional name.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Skills / Achievements
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-xmark text-xl font-bold text-red-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        checkmark We have successfully detected a
                        Skills/Achievements section on your resume. Superb!
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Date Formatting
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-xmark text-xl font-bold text-red-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        cross Not all of your dates appear to be formatted in a
                        conventional manner that applicant tracking systems
                        would be able to detect.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-full mt-10">
              <h2 className="font-semibold text-xl my-5">Lexical Analysis</h2>
              <div className="w-full border bg-white">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Personal Pronouns
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        cross Uh oh! We detected 2 occurrences of personal
                        pronouns on your resume. I Personal pronouns like "I"
                        and "me" violate standard resume etiquette, so we
                        recommend removing them from your resume.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Numericized Data
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        You've done your due diligence to numericize your
                        results. Good stuff!
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Vocabulary Level
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        The vocabulary level on your resume is a 6.7 out of 10.
                        Magnificent!
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Reading Level
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        The reading level on your resume is a 5.1 out of 10.
                        Magnificent!
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Common Words
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-xmark text-xl font-bold text-red-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        The following are some of the most frequently-used words
                        on your resume:. <br /> There aren't too many words that
                        appear multiple times in your resume. As a general rule,
                        it's a good idea to have a sense of which words best
                        represent the archetype you are attempting to take on as
                        a job seeker, and to make sure at least several of these
                        words appear on your resume multiple times.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-full mt-10">
              <h2 className="font-semibold text-xl my-5">Semantic Analysis</h2>
              <div className="w-full border bg-white">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Measurable Achievements
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        he following are some of the measurable achievements
                        listed on your resume (not all of them may be listed):{" "}
                        <br />
                        Your resume contains around 2 measurable achievements.
                        This is on the low end, so we recommend including more
                        bullet points numerically quantifying your contributions
                        at past jobs.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Soft Skills
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        Your resume contains a total of around 0 soft skills.
                        This is on the low end, so we'd recommend adding a few
                        more soft skills on your resume.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Hard Skills
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        The following are some of the hard skills listed on your
                        resume (not all skills may be listed):
                        <br />
                        <br />
                        Your resume contains a total of around 14 hard skills.
                        Awesome!
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-10 font-semibold text-sm w-1/4 border-b">
                        Skills Efficiency Ratio
                      </td>
                      <td className="p-10 font-bold w-1/10 border-b">
                        <i class="fa-solid fa-check text-xl font-bold text-green-400"></i>
                      </td>
                      <td className="p-10 font-thin ">
                        <div className="w-full mt-4">
                          <div className="relative w-48 h-48 mt-36">
                            <svg
                              className="absolute top-0 left-0 transform -rotate-90"
                              width="192"
                              height="192"
                              viewBox="0 0 96 96"
                            >
                              <circle
                                cx="48"
                                cy="48"
                                r="40"
                                stroke="#d0d0d0"
                                strokeWidth="16"
                                fill="none"
                              />
                              <circle
                                cx="48"
                                cy="48"
                                r="40"
                                stroke="#4caf50"
                                strokeWidth="16"
                                fill="none"
                                strokeDasharray="251.2"
                                strokeDashoffset="75.36"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                              75%
                            </div>
                          </div>
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                                Progress
                              </span>
                              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                                75%
                              </span>
                            </div>
                            <div className="relative">
                              <div className="flex mb-2 items-center justify-between">
                                <div className="w-full bg-gray-300 rounded-full h-2.5">
                                  <div className="bg-teal-600 h-2.5 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        The skills efficiency ratio of your resume is 1.00.
                        Fabulous! <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative bg-white min-w-[25rem] py-10 px-5 rounded shadow-lg flex justify-center items-center flex-col">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
            >
              <i className="fa-solid fa-close text-xl"></i>
            </button>
            <h2 className="text-gray-900 text-lg mb-1">Upload Your Resume</h2>
            <p className="text-gray-500 text-sm mb-5">
              Get your resume reviewed in instant
            </p>
            <div
              className="w-full h-20 rounded-lg border flex justify-center items-center cursor-pointer"
              onClick={() => {
                if (fileInputRef.current) {
                  fileInputRef.current.click();
                }
              }}
            >
              <span className="text-green-500 font-semibold">
                <i className="fa-solid fa-upload mr-2"></i>Upload A File
              </span>
            </div>
            <span className="text-xs font-semibold text-gray-400">
              Maximum file size 3MB acceptable format pdf
            </span>
            <input
              ref={fileInputRef}
              style={{ visibility: "hidden" }}
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyser;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetApi } from "../utilis/Api_Calling";
import { Triangle } from "react-loader-spinner";
import internshipCard from "../Jobs/JobCard";

const AllInternship = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const [Allinternships, setAllinternships] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [appiledinternships, setappiledinternships] = useState([]);
  const [totalinternship, Settotalinternship] = useState("");

  const GetAllinternships = async () => {
    try {
      const res = await GetApi(`api/AdminRoutes/GetAlljobs`);
      setAllinternships(
        res?.data?.data?.filter(
          (internship) => internship?.type === "internship"
        )
      );

      Settotalinternship(Allinternships.length);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const Getallappiledinternship = async () => {
    try {
      const Getbookmark = await GetApi(
        `api/StudentRoutes/GetAllAppiledinternshipidsofaStudent`
      );
      setappiledinternships(Getbookmark?.data?.data?.appliedinternshipIds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllinternships();
    Getallappiledinternship();
  }, []);

  const formatSalary = (salary) => {
    if (salary >= 1000) {
      return (salary / 1000).toFixed(1) + "k";
    } else {
      return salary.toString();
    }
  };

  function NewformatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate;
  }

  const internshipDetail = async (id) => {
    navigate(`/blank/internshipViewDetails/${id}`);
  };

  const [profileFilter, setProfileFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [workFromHomeFilter, setWorkFromHomeFilter] = useState(false);
  const [partTimeFilter, setPartTimeFilter] = useState(false);
  const [includeInternshipsFilter, setIncludeInternshipsFilter] =
    useState(false);
  const [salaryFilter, setSalaryFilter] = useState(0);
  const [experienceFilter, setExperienceFilter] = useState("");

  const applyFilters = (internships) => {
    return internships.filter((internship) => {
      // Apply individual filters
      const profileMatch =
        !profileFilter ||
        internship.positionName
          .toLowerCase()
          .includes(profileFilter.toLowerCase());
      const locationMatch =
        !locationFilter ||
        internship.location
          .toLowerCase()
          .includes(locationFilter.toLowerCase());
      const workFromHomeMatch =
        !workFromHomeFilter ||
        internship.contractDetails.toLowerCase() === "work from home";
      const partTimeMatch =
        !partTimeFilter ||
        internship.contractDetails.toLowerCase() === "part-time";
      const includeInternshipsMatch =
        !includeInternshipsFilter ||
        internship.internshipPipeline.toLowerCase() === "internship";
      const salaryMatch = internship.maxSalary >= salaryFilter * 1000;
      const experienceMatch =
        !experienceFilter || internship?.minExp === experienceFilter;

      return (
        profileMatch &&
        locationMatch &&
        workFromHomeMatch &&
        partTimeMatch &&
        includeInternshipsMatch &&
        salaryMatch &&
        experienceMatch
      );
    });
  };

  const clearAllFilters = () => {
    setProfileFilter("");
    setLocationFilter("");
    setWorkFromHomeFilter(false);
    setPartTimeFilter(false);
    setIncludeInternshipsFilter(false);
    setSalaryFilter(0);
    setExperienceFilter("");
  };

  const WHATSAPP_GROUP_LINK =
    "https://whatsapp.com/channel/0029Va7Rxc32ER6hBAuIL222";

  return (
    <>
      {Loading ? (
        <div className="bg-white flex justify-center pt-20 min-w-[100vw] text-2xl">
          {/* Loading... */}
          <Triangle
            visible={true}
            height="90"
            width="80"
            color="blue"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div
          className="flex flex-col justify-start min-h-screen  items-center w-full bg-[#f8f9fa] "
          style={{ fontFamily: "poppins" }}
        >
          {/* <p>kjsdbfk</p> */}
          <>
            <div className="w-full flex justify-start  items-center bg-[#f8f9fa] py-2">
              <p className="text-[16px] font-[400] text-[#000] text-opacity-[50%] px-[34px] cursor-pointer">
                Home &gt; Interships
              </p>
            </div>
            <div className="flex flex-col justify-start items-start w-full md:flex-row gap-[34px] mt-[16px] px-[34px] bg-[#f8f9fa]">
              <div className="bg-white min-h-[100] w-1/5 rounded-[8px]  flex flex-col  items-start p-[26px] border-[1px] ">
                <p className="text-md font-[400] text-gray-900">All Fillters</p>
                <br />
                <hr className="border-b w-full" />
                <div className="flex flex-col gap-[6px] mt-[6px] w-full">
                  <p className="text-black text-opacity-[50%] text-[16px] font-[400]">
                    Profile
                  </p>
                  <input
                    className="border-[1px] h-[42px] border-[#d9d9d9] rounded-[4px]"
                    type="text"
                    value={profileFilter}
                    onChange={(e) => setProfileFilter(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-[6px] mt-[8px] w-full">
                  <p className="text-black text-opacity-[50%] text-[16px] font-[400]">
                    Location
                  </p>
                  <input
                    className="border-[1px] h-[42px] border-[#d9d9d9] rounded-[4px]"
                    type="text"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  />
                </div>
                <p className="text-md font-[400] text-gray-900 mt-[20px]">
                  Work Mode
                </p>
                <br />
                <hr className="border-b w-full" />
                <div className="mt-[20px] flex gap-[8px] w-full">
                  <input
                    type="checkbox"
                    checked={workFromHomeFilter}
                    onChange={(e) => setWorkFromHomeFilter(e.target.checked)}
                  />
                  <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                    Work from home
                  </p>
                </div>
                <div className="mt-[20px] flex gap-[8px] w-full">
                  <input
                    type="checkbox"
                    checked={partTimeFilter} // Connect checked to the state
                    onChange={(e) => setPartTimeFilter(e.target.checked)}
                  />
                  <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                    Part-time
                  </p>
                </div>
                <div className="mt-[20px] flex gap-[8px] w-full">
                  <input type="checkbox" />
                  <p className="text-[14px] font-[400] text-black text-opacity-[50%]">
                    Include all internships
                  </p>
                </div>
                <div className="w-full mt-[28px]">
                  <p>Annual salary (in lakhs)</p>
                  <div className="w-full">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={salaryFilter}
                      onChange={(e) =>
                        setSalaryFilter(parseInt(e.target.value))
                      } // Convert value to integer and update state
                      className="slider w-full"
                    />
                    <div className="flex gap-[30px] text-[#000] text-opacity-[50%]">
                      <p>0</p>
                      <p>2</p>
                      <p>4</p>
                      <p>6</p>
                      <p>8</p>
                      <p>10</p>
                    </div>
                  </div>
                </div>
                <div className="mt-[35px] w-full">
                  <p className="text-black text-opacity-[50%] text-[16px] font-[400]">
                    Years of experience
                  </p>
                  <input
                    className="border-[1px] w-3/4 h-[42px] border-[#d9d9d9] rounded-[4px]"
                    type="text"
                    value={experienceFilter}
                    onChange={(e) => setExperienceFilter(e.target.value)}
                  />
                </div>
                <div
                  onClick={clearAllFilters}
                  className="mt-[44px] w-full flex justify-end"
                >
                  <p className="text-[16px] font-[500] text-[#4234a2] hover:cursor-pointer hover:underline hover:text-blue-900">
                    Clear all
                  </p>
                </div>
              </div>
              <div className="flex gap-[10px] flex-col w-3/5 max-h-[80vh] overflow-scroll px-2 bg-[#f8f9fa]">
                <div className="w-full flex justify-between items-center my-2 px-4">
                  <span className="text-sm text-gray-600">
                    {totalinternship} internships Available
                  </span>
                  <span className="text-sm text-blue-600 hover:underline duration-200 cursor-pointer font-semibold">
                    Ai auto applier
                  </span>
                </div>
                {applyFilters(Allinternships)?.length > 0 ? (
                  applyFilters(Allinternships)?.map((internship, index) => {
                    const isinternshipApplied = appiledinternships.includes(
                      internship._id
                    );
                    return (
                      <internshipCard
                        key={index}
                        internship={internship}
                        isinternshipApplied={isinternshipApplied}
                        internshipDetail={internshipDetail}
                      />
                    );
                  })
                ) : (
                  <div className="bg-white rounded-[16px] border-[1px] border-[#efecec] p-[27px]">
                    No internships Found With This Query
                  </div>
                )}
              </div>
              <div className=" min-h-[100] w-1/5 rounded-[8px]  flex flex-col  items-start p-[26px]  ">
                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 to-blue-600 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                  <div className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Link to a WhatsApp logo
                      alt="WhatsApp Logo"
                      className="w-10 h-10 mr-4"
                    />
                    <h3 className="text-xl font-bold">
                      Join Our WhatsApp Community
                    </h3>
                  </div>
                  <p className="mt-4 text-center text-sm">
                    Get daily updates and stay connected with our community!
                  </p>
                  <a
                    href={WHATSAPP_GROUP_LINK} // Replace with your WhatsApp group link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 px-4 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-200"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default AllInternship;

/*




*/

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// ---------------------
// ----------------
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// -------------------
import { FiAlignJustify } from "react-icons/fi";
import InternshipModal from "../../Pages/Internship/InternshipModal";
import Logo from "../../assets/Images/Gethire SVG.svg";
import { Menu, MenuItem, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { TbArrowsExchange2 } from "react-icons/tb";
import { PiNotebookLight } from "react-icons/pi";
import { IoSearchCircleSharp } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import AIToolsModal from "../../Pages/AI Tools/AIToolsModal";
import { FaLocationArrow } from "react-icons/fa";

import { GetApi } from "../../Pages/utilis/Api_Calling";

// -----------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// ---------------------

const DropdownLink = styled(Link)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
  textDecoration: "none",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  border: "1px solid gray",
  borderRadius: "20px",
}));

// for modes

const workItems = [
  {
    title: "Find Work",
    description: "Global work opportunities to boost your professional growth.",
    icon: <PiNotebookLight />,
    link: "/", // Example route
  },
  {
    title: "Hire Talent",
    description: "Access a global pool of talented professionals.",
    icon: <PiNotebookLight />,
    link: "/", // Example route
  },
  {
    title: "College Board",
    description: "Collaborate with educational institutions worldwide.",
    icon: <PiNotebookLight />,
    link: "/", // Example route
  },
  {
    title: "Club & Events",
    description: "Join a global community to enhance your skills.",
    icon: <PiNotebookLight />,
    link: "/blank/clubs", // Example route
  },
];


// ------------------
  // ----------------------------
  // import * as React from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));



const Header = () => {
  let path = useLocation();
  const navigate = useNavigate();
  const [aiModal, setAiModal] = useState(false);
  const [input, setInput] = useState("");
  const [showFullNavbar, setShowFullNavbar] = useState(false);
  const [showInternshipDropDown, setShowInternshipDropDown] = useState(false);
  const [selectInternshipOption, setSelectInternshipOption] =
    useState("location");

  const [internshipModal, setInternshipModal] = useState(false);

  const toggleInternshipModalOpen = () => {
    setInternshipModal(true);
  };
  const toggleInternshipModalClose = () => {
    setInternshipModal(false);
  };

  const toggleNavbar = () => {
    setShowFullNavbar(!showFullNavbar);
  };

  const toggleInternshipDropDown = () => {
    setShowInternshipDropDown(!showInternshipDropDown);
  };

  const handleSelectInternshipOption = (option) => {
    setSelectInternshipOption(option);
  };
  const internshipListItem = () => {
    switch (selectInternshipOption) {
      case "location":
        return [
          <div key="1" onClick={toggleInternshipModalOpen}>
            Work from Home
          </div>,
          <a key="2" href="/#">
            Internship in Bangalore
          </a>,
          <a key="3" href="/#">
            Internship in Delhi
          </a>,
          <a key="4" href="/#">
            Internship in Hyderabad
          </a>,
          <a key="5" href="/#">
            Internship in Mumbai
          </a>,
          <a key="6" href="/#">
            Internship in Chennai
          </a>,
          <a key="7" href="/#">
            Internship in Pune
          </a>,
          <a key="8" href="/#">
            Internship in Kolkata
          </a>,
          <a key="9" href="/#">
            Internship in Jaipur
          </a>,
          <a key="10" href="/#">
            International Internship
          </a>,
          <a key="11" href="/#">
            View all internships Internship
          </a>,
        ];
      case "profile":
        return [
          <a key="1" href="/#">
            Computer Science Internship
          </a>,
          <a key="2" href="/#">
            Marketing Internship
          </a>,
          <a key="3" href="/#">
            Finance Internship
          </a>,
          <a key="4" href="/#">
            Graphic Design Internship
          </a>,
          <a key="5" href="/#">
            Architecture Internship
          </a>,
          <a key="6" href="/#">
            Mechanical Internship
          </a>,
          <a key="7" href="/#">
            HR Internship
          </a>,
          <a key="8" href="/#">
            Digital Marketing Internship
          </a>,
          <a key="9" href="/#">
            Law Internship
          </a>,
          <a key="10" href="/#">
            Electronics Internship
          </a>,
          <a key="11" href="/#">
            Content Writing Internship
          </a>,
        ];
      case "categories":
        return [
          <a key="1" href="/#">
            Engineering Internship
          </a>,
          <a key="2" href="/#">
            Business/MBA Internship
          </a>,
          <a key="3" href="/#">
            Part-Time Jobs/Internships
          </a>,
          <a key="4" href="/#">
            Humanities Internship
          </a>,
          <a key="5" href="/#">
            Science Internship
          </a>,
          <a key="6" href="/#">
            Internships with Job Offer
          </a>,
          <a key="7" href="/#">
            Internships for Women
          </a>,
          <a key="8" href="/#">
            View all internships
          </a>,
        ];
      case "moreInternship":
        return [
          <a key="1" href="/#">
            Internships by Category
          </a>,
          <a key="2" href="/#">
            Internships by Location
          </a>,
        ];
      default:
        return [];
    }
  };

  // material

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("StudentToken");
    window.location.reload();
    navigate("/");
    handleClose();
  };

  // for switch mode
  const [mode, setMode] = useState(false);
  // const switchModeClicked = () => {
  //   setMode(!mode);
  // };
  const handleNavigation = (link) => {
    navigate(link);
  };

  // for change the icons when noti and mesage clicked
  const [messClicked, SetMessClicked] = useState(false);
  const [notiClicked, SetNotiClicked] = useState(false);

  // for opportunity section
  const [opportunities, setOpportunities] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? "simple-menu" : undefined;
  // const open2 = Boolean(anchorEl2);
  // const id2 = open ? "simple-menu" : undefined;

  // for notifications
  const [noti , SetNoti] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const res = await GetApi(`api/notificationroutes/`);
        setNotifications(res?.data?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchNotifications();
  }, []);





  return (
    <>
      <div className="bg-[#fff] h-[70px] w-full flex justify-start items-center p-[10px] pl-20 shadow-md ">
        <div className="flex justify-center items-center text-[#2a5caa] mr-10">
          <Link to="/">
            <img src={Logo} className="h-[2rem]" alt="" />
          </Link>
        </div>
        <div onClick={toggleNavbar} className="flex md:hidden">
          <FiAlignJustify size={"30px"} />
        </div>
        <div className=" hidden text-[18px] justify-center items-center font-[400] md:flex gap-[38px] max-2xl:gap-[33px] max-xl:gap[30px]  font-[Outfit] ">
          {/* <Link to="/" className="hover:text-blue-700">Home</Link> */}
          {/* <div
                      // onClick={toggleInternshipDropDown}

                      onMouseEnter={ () => {setShowInternshipDropDown(!showInternshipDropDown) ; setAnchorEl2(null)}}
                      onMouseLeave={ () => {setShowInternshipDropDown(!showInternshipDropDown)}}
                      className="relative cursor-pointer "

                      onMouseEnter={() => {
                        setShowInternshipDropDown(!showInternshipDropDown);
                        setAnchorEl2(null);
                      }}
                      onMouseLeave={() => {
                        setShowInternshipDropDown(!showInternshipDropDown);
                      }}
                      className="relative cursor-pointer hover:text-blue-700 hover:border-b-2 hover:border-blue-500  duration-100"

                    >
                      Internship
                </div> */}

          {/* {showInternshipDropDown && (
                  <div
                    className="bg-white shadow-xl -ml-[470px] flex top-[50px] absolute w-[485px] h-[431px] rounded-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:shadow-2xl"
                    onMouseEnter={() => {
                      setShowInternshipDropDown(true);
                    }}
                    onMouseLeave={() => {
                      setShowInternshipDropDown(false);
                    }}
                  >
                    <div className="py-5 w-[223px] text-[16px] font-medium pr-2">
                      <p
                        onClick={() => handleSelectInternshipOption("location")}
                        className={`${
                          selectInternshipOption === "location"
                            ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                            : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
                        } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
                      >
                        Top Location
                      </p>
                      <p
                        onClick={() => handleSelectInternshipOption("profile")}
                        className={`${
                          selectInternshipOption === "profile"
                            ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                            : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
                        } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
                      >
                        Profile
                      </p>
                      <p
                        onClick={() => handleSelectInternshipOption("categories")}
                        className={`${
                          selectInternshipOption === "categories"
                            ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                            : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
                        } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
                      >
                        Top Categories
                      </p>
                      <p
                        onClick={() => handleSelectInternshipOption("moreInternship")}
                        className={`${
                          selectInternshipOption === "moreInternship"
                            ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                            : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
                        } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
                      >
                        Explore More Internships
                      </p>
                    </div>
                    <div className="border-l border-gray-200 h-full"></div>
                    <div className="py-[36px] px-[18px] overflow-auto w-[262px] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
                      <ul className="flex flex-col gap-4 text-[15px] cursor-pointer text-gray-600 font-medium">
                        {internshipListItem().map((item, index) => (
                          <li
                            key={index}
                            className="hover:text-[#4234a2] transition-colors duration-200 ease-in-out"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )} */}

          {/* making the section opportunities */}
          <div
            className="flex items-center p-1 font-medium text-lg h-10  text-blue-500 hover:cursor-pointer hover:text-blue-700 "
            onMouseEnter={() => {
              setOpportunities(true);
            }}
            onMouseLeave={() => {
              setOpportunities(false);
            }}
          >
            Opportunities
          </div>

          <div
            className=" hover:cursor-pointer bg-blue-100 rounded-md p-1 h-10 flex justify-center items-center "
            // onClick={switchModeClicked}
            onMouseEnter={() => {
              setMode(true);
              setOpportunities(false);
            }}
            onMouseLeave={() => setMode(false)}
          >
            {mode === false ? (
              <div className="flex flex-row justify-center items-center gap-2 p-2 group max-2xl:gap-1 max-xl:gap-1 max-xl:w-28">
                <p className="text-lg text-blue-500   max-2xl:text-base max-xl:text-xs">
                  Switch Mode
                </p>
                <TbArrowsExchange2
                  size={23}
                  className="text-blue-500 max-2xl:w-5 max-xl:w-4 "
                />
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center gap-2 p-2 group  max-2xl:gap-1 max-xl:gap-1 max-xl:w-28">
                <p className="text-lg max-2xl:text-base group-hover:text-blue-700 max-xl:text-sm">
                  Switch Mode
                </p>
                <TbArrowsExchange2
                  size={23}
                  className=" group-hover:text-blue-700 max-2xl:w-5 max-xl:w-4"
                />
              </div>
            )}
          </div>
          <div className="flex items-center w-[350px] h-[50px] max-xl:h-[40px] max-xl:-mr-4 max-xl:-ml-5 max-xl:w-[220px] rounded-full border border-gray-300 bg-white shadow-md transition-shadow duration-300 cursor-pointer hover:shadow-lg overflow-hidden">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => {
                if (input === "") return;
                if (e.key === "Enter") {
                  const pathname = path.pathname;
                  navigate(`/blank/jobs/${input}`);
                  if (pathname.startsWith("/blank/jobs/")) {
                    window.location.reload();
                  }
                  setInput("");
                }
              }}
              placeholder="Search…"
              className="flex-1 border-none ml-3 px-1 h-full text-gray-800 text-base outline-none rounded-full rounded-r-none"
            />
            <div className="w-[50px] max-xl:w-[40px] max-xl:-ml-24 max-xl:h-3/4 h-full flex items-center justify-center  rounded-full rounded-l-none">
              <IoSearchCircleSharp
                size={45}
                color="#3B82F6"
                onClick={() => {
                  if (input === "") return;
                  const pathname = path.pathname;
                  navigate(`/blank/jobs/${input}`);
                  if (pathname.startsWith("/blank/jobs/")) {
                    window.location.reload();
                  }
                  setInput("");
                }}
              />
            </div>
          </div>
          <div
            className="  border flex justify-center max-xl:text-[10px] hover:bg-blue-700 hover:text-white duration-300 items-center  rounded-2xl text-sm py-1 px-2 font-semibold text-blue-500 cursor-pointer"
            onClick={() => setAiModal(true)}
          >
            <img
              src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
              alt="ai logo"
              className=" h-5"
            />
            <img
              src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
              alt="logo"
              className=" w-3 -mt-3 -ml-2"
            />
            <p>AI Tools</p>
          </div>
          {/* <Link to="/blank/bookmarked">
              <img
                src="/images/iconoir_bookmark.svg"
                className="w-[24px] h-[24px]"
                alt=""
              />
            </Link> */}

          <div className=" flex flex-row gap-6 justify-center items-center ">
            <Link to={"/blank/chats"}>
              <BiMessage size={25} color="#6082B6" />
              {/* <img
                          src="/images/tabler_message-2.svg"
                          className="w-[24px] h-[24px]"
                          alt=""
                        /> */}
            </Link>
            {/* <MdOutlineNotifications size={25} color="#6082B6" onClick={()=>{navigate('/Notification')}} />  */}
            {/* <Link to={"/blank/notification"}> */}
            <Link>
              {/* <i className="fa-regular fa-bell cursor-pointer"></i> */}
              <MdOutlineNotifications size={25} color="#6082B6"
                onMouseEnter={()=> SetNoti(true)}
                onMouseLeave={()=> SetNoti(false)}
                />
            </Link>
          </div>

          {/* </Link> */}
          {/* <Link to={"/notification"}> */}
          {/* <i className="fa-regular fa-bell cursor-pointer"></i> */}
          {/* <MdOutlineNotifications size={25} color="#6082B6" /> */}
          {/* </Link> */}
          {/* </div> */}

          <div
            className=" inline-block text-left cursor-pointer"
            onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
            // onMouseLeave={() => setAnchorEl(null)}
          >
            <DropdownLink
              // onClick={handleClick}
              className="flex items-center space-x-2 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <MdOutlineSort size={25} />
              <img
                src="/images/Ellipse2.svg"
                className="w-8 h-8 rounded-full border border-gray-300"
                alt="User Avatar"
              />
              {/* <img
                    src="/images/bxs_up-arrow.svg"
                    className="w-4 h-3"
                    alt="Arrow"
                  /> */}
            </DropdownLink>

            <Menu
              id={id}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": id,
              }}
              className=" right-0"
              // onMouseLeave={() => setAnchorEl(null)}
            >
              <MenuItem
                onClick={() => navigate("/blank/Portfolio")}
                className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 px-4 py-2 rounded-lg"
              >
                Portfolio
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/SkillManager")}
                className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 px-4 py-2 rounded-lg"
              >
                My Skills
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                className="hover:bg-red-100 hover:text-red-700 transition-colors duration-200 px-4 py-2 rounded-lg"
              >
                Logout
              </MenuItem>
            </Menu>
          </div>

          {/* <div className="md:hidden">
            <div
              className={` ${
                !showFullNavbar ? "flex " : "hidden"
              } z-10 bg-white overflow-x-auto h-screen  right-0 w-[300px] pb-[120px] px-[53px] text-[18px] absolute flex-col font-[400] gap-[43px]  font-[Outfit]`}></div>
            <Menu
              id={id}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": id,
              }}
              className=" right-0"
            >
              <MenuItem
                onClick={() => navigate("/blank/Portfolio")}
                className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 px-4 py-2 rounded-lg"
              >
                Portfolio
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/SkillManager")}
                className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 px-4 py-2 rounded-lg"
              >
                My Skills
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                className="hover:bg-red-100 hover:text-red-700 transition-colors duration-200 px-4 py-2 rounded-lg"
              >
                Logout
              </MenuItem>
            </Menu>
          </div> */}
        </div>

        <div className="md:hidden">
          <div
            className={` ${
              !showFullNavbar ? "flex " : "hidden"
            } z-10 bg-white overflow-x-auto h-screen  right-0 w-[300px] pb-[120px] px-[53px] text-[18px] absolute flex-col font-[400] gap-[43px]  font-[Outfit]`}
          >
            <div className="flex flex-col gap-[13px]">
              <div className="flex gap-[9px] items-center text-[24px] font-[500] font-[Outfit]">
                <p>Hi, Chetan!</p>
                <img
                  src="/images/PngItem_hi.svg"
                  className="h-[22px] w-[23px]"
                  alt=""
                />
              </div>
              <p className={`text-[18px] font-[400] font-[outfit]`}>
                Let’s help you land your dream career
              </p>
            </div>
            <Link>Home</Link>
            {/* <div
                onClick={toggleInternshipDropDown}
                className="relative cursor-pointer"
              >
                Internship
              </div> */}

            {/* {showInternshipDropDown && (
                <div className="bg-white shadow-lg flex flex-col top-[240px]  h-full">
                  <div className="py-[22px] w-[223px] text-[16px] font-[400] pr-[10px]">
                    <p
                      onClick={() => handleSelectInternshipOption("location")}
                      className={` ${
                        selectInternshipOption === "location"
                          ? "bg-[#4234a2] bg-opacity-[10%] rounded-tr-[39px] rounded-br-[39px] w-full  flex items-center "
                          : ""
                      } px-[17px] py-[8px]`}
                    >
                      Top Location
                    </p>
                    <p
                      onClick={() => handleSelectInternshipOption("profile")}
                      className={` ${
                        selectInternshipOption === "profile"
                          ? "bg-[#4234a2] bg-opacity-[10%] rounded-tr-[39px] rounded-br-[39px] w-full  flex items-center "
                          : ""
                      } px-[17px] py-[8px]`}
                    >
                      Profile
                    </p>
                    <p
                      onClick={() => handleSelectInternshipOption("categories")}
                      className={` ${
                        selectInternshipOption === "categories"
                          ? "bg-[#4234a2] bg-opacity-[10%] rounded-tr-[39px] rounded-br-[39px] w-full  flex items-center "
                          : ""
                      } px-[17px] py-[8px]`}
                    >
                      Top Categories
                    </p>
                    <p
                      onClick={() => handleSelectInternshipOption("moreInternship")}
                      className={` ${
                        selectInternshipOption === "moreInternship"
                          ? "bg-[#4234a2] bg-opacity-[10%] rounded-tr-[39px] rounded-br-[39px] w-full  flex items-center "
                          : ""
                      } px-[17px] py-[8px]`}
                    >
                      Explore More Internships
                    </p>
                  </div>

                  <div className="py-[36px] px-[18px] overflow-auto w-full">
                    <ul className="flex flex-col gap-[17px] text-[15px] text-black text-opacity-[50%] font-[400]">
                      {internshipListItem().map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              )} */}

            <Link to="/Jobs">Jobs</Link>
            <Link to="/blank/clubs">Clubs</Link>
            <div className="flex gap-[8px] bg-[#e7f6ff] rounded-[8px] px-[14px] py-[12px]">
              <img
                src="/images/icon-park-outline_switch.svg"
                className="w-[24px] h-[24px]"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-[44px]">
              <div className="flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]">
                <img
                  className="w-[24px] h-[24px]"
                  src="/images/mingcute_to-do-line.svg"
                  alt=""
                />
                <p>To do list (1)</p>
              </div>

              <div className="flex text-[20px] font-[400] font-[Outfit] w-full justify-between">
                <div className="flex gap-[10px] ">
                  <div className="flex mt-[7px] justify-center items-center bg-gradient-to-r from-[#0F87B3] to-[#462DA1] w-[18px] h-[18px] rounded-[50%]">
                    <img
                      className=" w-[12px] "
                      src="/images/Vector.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>Skills missing</p>
                    <p className={`text-[14px] text-black text-opacity-[50%] `}>
                      Add Your Skills
                    </p>
                  </div>
                </div>
                <img
                  src="/images/VectorRightArrow.svg"
                  className={`w-[5.5px] mt-[10px] h-[11px] `}
                  alt=""
                />
              </div>

              <div className="flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]">
                <img
                  className="w-[24px] h-[24px]"
                  src="/images/bytesize_portfolio.svg"
                  alt=""
                />
                <p>Portfolio</p>
              </div>
              <div className="flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]">
                <img
                  className="w-[24px] h-[24px]"
                  src="/images/carbon_notification.svg"
                  alt=""
                />
                <p>Notification</p>
              </div>
              <div className="flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]">
                <img
                  className="w-[24px] h-[24px]"
                  src="/images/material-symbols-light_folder-managed.svg"
                  alt=""
                />
                <p>Application Manager</p>
              </div>
              <div className="flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]">
                <img
                  className="w-[24px] h-[24px]"
                  src="/images/fluent-mdl2_add-work.svg"
                  alt=""
                />
                <p>Job Counsellor</p>
              </div>

              <div className="flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]">
                <img
                  className="w-[24px] h-[24px]"
                  src="/images/healthicons_i-training-class.svg"
                  alt=""
                />
                <p>Training</p>
              </div>
              <div className="flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]">
                <img
                  src="/images/mdi_college-outline.svg"
                  className="w-[24px] h-[24px]"
                  alt=""
                />
                <p>College Board</p>
              </div>
            </div>
            <div className="flex gap-[43px]">
              <Link>
                <img
                  src="/images/iconoir_bookmark.svg"
                  className="w-[24px] h-[24px]"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  src="/images/tabler_message-2.svg"
                  className="w-[24px] h-[24px]"
                  alt=""
                />
              </Link>
              <Link className="flex justify-center items-center gap-[6px]">
                <img
                  src="/images/Ellipse2.svg"
                  className="w-[26px] h-[26px] rounded-[50%]"
                  alt=""
                />
                <img
                  src="/images/bxs_up-arrow.svg"
                  className="w-[12px] h-[9px]"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
       
      {/* for notifications */}
      {/* {noti && (
        <div className="fixed top-[50px] right-[5%] z-20 w-[300px] bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-700 text-white p-4 font-bold">
            Updated Messages
          </div>
          <div className="max-h-[320px] overflow-y-auto">
            {loading ? (
              <p className="p-4">Loading...</p>
            ) : notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <div key={index} className="p-4 border-b border-gray-200">
                  {notification?.text || 'No message available'}
                </div>
              ))
            ) : (
              <p className="p-4">No notifications available.</p>
            )}
          </div>
        </div>
      )} */}
        {noti && (
          <>
            <div
              className="fixed -top-[25px] left-[59%] z-20 w-[300px] bg-white shadow-md rounded-lg overflow-hidden relative cursor-pointer"
              onMouseEnter={() => SetNoti(true)}
              onMouseLeave={() => SetNoti(false)}
              onClick={() => navigate('/blank/notification')}
            >
              <div className="bg-blue-700 flex flex-row justify-around text-white p-4 font-bold">
                Updated Messages
              </div>
              <div className="max-h-[320px] overflow-y-auto">
                {loading ? (
                  <p className="p-4">Loading...</p>
                ) : notifications.length > 0 ? (
                  notifications.map((notification, index) => {
                    const words = notification?.text.split(' ');
                    const truncatedText =
                      words.length > 5
                        ? words.slice(0, 9).join(' ') + '...'
                        : notification?.text;
          
                    return (
                      <div key={index} className="p-4 border-b text-sm font-semibold border-gray-200">
                        {truncatedText || 'No message available'}
                      </div>
                    );
                  })
                ) : (
                  <p className="p-4">No notifications available.</p>
                )}
              </div>
            </div>
        </>
        
        )}
   











      {/* for opportunities section */}
      {/* {opportunities && (
            <div 
              onMouseEnter={() => setOpportunities(true)} 
              onMouseLeave={() => setOpportunities(false)}
              className=" flex flex-col w-52 ml-56 -mt-5  bg-white shadow-md cursor-pointer"
              style={{ minHeight: '50px' }}  // Ensures the div has a minimum height
             >
              <div className="w-full text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md  -mb-3 cursor-pointer flex items-center justify-center"
                  onMouseEnter={() => { setOpportunities(true)}} 
                  // onMouseLeave={() => setAnchorEl2(false)}
                >
                  Jobs
              </div>
              <div 
                  className="w-full text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md  -mb-3 cursor-pointer flex items-center justify-center"
                  style={{ minHeight: '50px' }}
                  onMouseEnter={() => { setOpportunities(true) } } 
                  // onMouseLeave={() => setShowInternshipDropDown(false)}
                >
                  Internships
              </div>
              <div 
                  className="w-full hover:text-blue-600 text-lg text-gray-700 hover:bg-blue-50 rounded-md  -mb-3 cursor-pointer flex items-center justify-center"
                  style={{ minHeight: '50px' }}
                  onMouseEnter={() => { setOpportunities(true) } } 
                >
                  Events
              </div>
              <div 
                  className="w-full hover:text-blue-600 text-lg text-gray-700 hover:bg-blue-50 rounded-md  -mb-3 cursor-pointer flex items-center justify-center"
                  style={{ minHeight: '50px' }}
                  onMouseEnter={() => { setOpportunities(true) } } 
                >
                  Invites
              </div>
              <div 
                  className="w-full hover:text-blue-600 text-lg text-gray-700 hover:bg-blue-50 rounded-md  -mb-3 cursor-pointer flex items-center justify-center"
                  style={{ minHeight: '50px' }}
                  onMouseEnter={() => { setOpportunities(true) } } 
                >
                  My Applications
              </div>
              <div 
                className="w-full text-lg gap-1  text-gray-800 hover:text-white bg-gradient-to-r from-blue-300 to-blue-500 hover:from-blue-600 hover:to-blue-800 rounded-lg px-1 py-2 cursor-pointer flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                style={{ minHeight: '50px' }}
                onMouseEnter={() => { setOpportunities(true); }}
               >
                <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="logo" 
                 className=" w-5" />
                <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="logo" 
                 className=" w-3 -mt-3 -ml-2" />
                 <div>
                   <p>AI Recommended</p>
                   <p className=" text-xs font-normal -mt-2">profile matched</p>
                 </div>
              </div>
          </div> 
             )} */}
      {opportunities && (
        <div
          onMouseEnter={() => setOpportunities(true)}
          onMouseLeave={() => setOpportunities(false)}
          className="flex flex-col w-52 ml-56 -mt-5 bg-white shadow-md cursor-pointer"
          style={{ minHeight: "50px" }}
        >
          <div
            className="w-full text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md mb-2 cursor-pointer flex items-center justify-center"
            onMouseEnter={() => setOpportunities(true)}
            onClick={() => navigate("/blank/Jobs")}
          >
            Jobs
          </div>
          <div
            className="w-full text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md mb-2 cursor-pointer flex items-center justify-center"
            onMouseEnter={() => setOpportunities(true)}
            // onClick={() => navigate('/blank/TotalInternship')}
            onClick={() => navigate("/blank/mainIntership")}
          >
            Internships
          </div>
          {/* <div
                          className="w-full text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md mb-2 cursor-pointer flex items-center justify-center"
                          onMouseEnter={() => setOpportunities(true)}
                        >
                          Events
                        </div> */}
          <div
            className="w-full text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md mb-2 cursor-pointer flex items-center justify-center"
            onMouseEnter={() => setOpportunities(true)}
            onClick={() => navigate("/blank/invite")}
          >
            Invites
          </div>
          <div
            className="w-full text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md mb-2 cursor-pointer flex items-center justify-center"
            onMouseEnter={() => setOpportunities(true)}
            onClick={() => navigate("/blank/applicationManager")}
          >
            My Applications
          </div>
          <div
            className="w-full text-lg gap-1 text-gray-800 hover:text-white bg-gradient-to-r from-blue-300 to-blue-500 hover:from-blue-600 hover:to-blue-800 rounded-lg px-1 py-2 cursor-pointer flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setOpportunities(true)}
            onClick={() => navigate("/blank/mainEvent")}
          >
            <img
              src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
              alt="logo"
              className="w-5"
            />
            <img
              src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
              alt="logo"
              className="w-3 -mt-3 -ml-2"
            />
            <div>
              <p>AI Recommended</p>
              <p className="text-xs font-normal -mt-2">profile matched</p>
            </div>
          </div>
        </div>
      )}

      {/* <div 
       {opportunities && (
        <div
          onMouseEnter={() => setOpportunities(true)}
          onMouseLeave={() => setOpportunities(false)}
          className=" w-52 ml-56 -mt-5  bg-white shadow-md cursor-pointer"
          style={{ minHeight: "50px" }} // Ensures the div has a minimum height
        >
          <div
            className="w-full text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer flex items-center justify-center"
            onMouseEnter={() => {
              setAnchorEl2(true);
              setOpportunities(true);
            }}
            onMouseLeave={() => setAnchorEl2(false)}
          >
            Jobs
          </div>
          <div
            className="w-full text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer flex items-center justify-center"
            style={{ minHeight: "50px" }}
            onMouseEnter={() => {
              setShowInternshipDropDown(true);
              setOpportunities(true);
            }}
            onMouseLeave={() => setShowInternshipDropDown(false)}
          >
            Internships
          </div>
          <div
            className="w-full hover:text-blue-600 text-lg text-gray-700 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer flex items-center justify-center"
            style={{ minHeight: "50px" }}
            onMouseEnter={() => {
              setOpportunities(true);
            }}
          >
            Events
          </div>
          <div
            className="w-full hover:text-blue-600 text-lg text-gray-700 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer flex items-center justify-center"
            style={{ minHeight: "50px" }}
            onMouseEnter={() => {
              setOpportunities(true);
            }}
          >
            Invites
          </div>
          <div
            className="w-full hover:text-blue-600 text-lg text-gray-700 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer flex items-center justify-center"
            style={{ minHeight: "50px" }}
            onMouseEnter={() => {
              setOpportunities(true);
            }}
          >
            My Applications
          </div>
          {/* <div 
>>>>>>> 9297fba37ae8c3dc5d91617ba9bddc8a6983224d
                className="w-full hover:text-blue-600 text-lg text-gray-700 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer flex items-center justify-center"
                style={{ minHeight: '50px' }}
                onMouseEnter={() => { setOpportunities(true) } } 
              >
                AI Recommended
              </div> */}

      {/* <p 
                    className="text-lg text-gray-700 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer"
                    onMouseEnter={() => setShowInternshipDropDown(true)} 
                    onMouseLeave={() => setShowInternshipDropDown(false)}
                  >
                    Internships
                  </p>
                  <p className="text-lg text-gray-700 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer">Events</p>
                  <p className="text-lg text-gray-700 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer">Invites</p>
                  <p className="text-lg text-gray-700 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer">My Applications</p>
                  <p className="text-lg text-gray-700 hover:bg-blue-50 rounded-md px-2 py-1 cursor-pointer">AI Recommended</p> */}
      {/* </div> */}
      {/* //  </div> */}

      {/* for jobs */}
      {/* { anchorEl2 && (
               <div className=" -mt-[18%] ml-[25%] max-2xl:ml-[28%] max-2xl:-mt-[20%] " 
                onMouseEnter={()=>{setAnchorEl2(true);setOpportunities(true)}} onMouseLeave={()=>{setAnchorEl2(false);}}>
                     <div className=" bg-white shadow-xl w-[20%] rounded-lg ">
                         <div
                           className="p-4 flex flex-col "
                           onMouseLeave={() => {setAnchorEl2(false); setOpportunities(false);}}
                         >
                           <Typography className="text-gray-800 text-sm font-medium">
                            
                           </Typography>
                           <Link
                             to="/blank/Jobs"
                             className="mt-2 inline-block text-blue-600 hover:underline text-base font-semibold transition-all duration-200"
                           >
                             All Jobs
                           </Link>
                           <Link
                             to="/blank/Jobs"
                             className="mt-2 inline-block text-blue-600 hover:underline text-base font-semibold transition-all duration-200"
                           >
                             Recommended Jobs
                           </Link>
                           <Link
                             to="/blank/Jobs"
                             className="mt-2 inline-block text-blue-600 hover:underline text-base font-semibold transition-all duration-200"
                           >
                             Invites
                           </Link>
                           <Link
                             to="/ApplicationManager"
                             className="mt-2 inline-block text-blue-600 hover:underline text-base font-semibold transition-all duration-200"
                           >
                             Application Manage
                           </Link>
                         </div>
                     </div>
               </div>
          )} */}
      {/* for interships */}
      {showInternshipDropDown && (
        <div
          className="bg-white shadow-xl ml-[428px] flex top-[90px] absolute w-[485px] h-[431px] rounded-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:shadow-2xl"
          onMouseEnter={() => {
            setShowInternshipDropDown(true);
            setOpportunities(true);
          }}
          onMouseLeave={() => {
            setShowInternshipDropDown(false);
            setOpportunities(false);
          }}
        >
          <div className="py-5 w-[223px] text-[16px] font-medium pr-2">
            <p
              onClick={() => handleSelectInternshipOption("location")}
              className={`${
                selectInternshipOption === "location"
                  ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                  : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
              } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
            >
              Top Location
            </p>
            <p
              onClick={() => handleSelectInternshipOption("profile")}
              className={`${
                selectInternshipOption === "profile"
                  ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                  : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
              } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
            >
              Profile
            </p>
            <p
              onClick={() => handleSelectInternshipOption("categories")}
              className={`${
                selectInternshipOption === "categories"
                  ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                  : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
              } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
            >
              Top Categories
            </p>
            <p
              onClick={() => handleSelectInternshipOption("moreInternship")}
              className={`${
                selectInternshipOption === "moreInternship"
                  ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                  : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
              } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
            >
              Explore More Internships
            </p>
          </div>
          <div className="border-l border-gray-200 h-full"></div>
          <div className="py-[36px] px-[18px] overflow-auto w-[262px] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
            <ul className="flex flex-col gap-4 text-[15px] cursor-pointer text-gray-600 font-medium">
              {internshipListItem().map((item, index) => (
                <li
                  key={index}
                  className="hover:text-[#4234a2] transition-colors duration-200 ease-in-out"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* //for switch mode
          {mode && (
            <div
              className=" flex flex-col items-center bg-gray-50 rounded-2xl -mt-5 ml-[30%]    max-w-xs mx-auto"
              onMouseEnter={() => setMode(true)}
              onMouseLeave={() => setMode(false)}
            >
              {workItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleNavigation(item.link)}
                  className="group flex flex-col p-2 bg-white hover:bg-purple-600 hover:text-white transform transition duration-100 cursor-pointer w-full rounded-md shadow-md"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-lg">{item.icon}</p>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-500"
                        disabled
                      />
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 group-hover:text-white">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
          {internshipModal && (
            <InternshipModal
              onOpen={toggleInternshipModalOpen}
              onClose={toggleInternshipModalClose}
            >
              <div
                className="w-full text-lg gap-1 text-gray-800 hover:text-white bg-gradient-to-r from-blue-300 to-blue-500 hover:from-blue-600 hover:to-blue-800 rounded-lg px-1 py-2 cursor-pointer flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                style={{ minHeight: "50px" }}
                onMouseEnter={() => {
                  setOpportunities(true);
                }}
              >
                <img
                  src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                  alt="logo"
                  className="w-5"
                />
                <img
                  src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                  alt="logo"
                  className="w-3 -mt-3 -ml-2"
                />
                <div>
                  <p>AI Recommended</p>
                  <p className="text-xs font-normal -mt-2">profile matched</p>
                </div>
              </div>
            </InternshipModal>
          )}
           */}
      {anchorEl2 && (
        <div
          className=" -mt-[18%] ml-[25%] max-2xl:ml-[28%] max-2xl:-mt-[20%] "
          onMouseEnter={() => {
            setAnchorEl2(true);
            setOpportunities(true);
          }}
          onMouseLeave={() => {
            setAnchorEl2(false);
          }}
        >
          <div className=" bg-white shadow-xl w-[20%] rounded-lg ">
            <div
              className="p-4 flex flex-col "
              onMouseLeave={() => {
                setAnchorEl2(false);
                setOpportunities(false);
              }}
            >
              <Typography className="text-gray-800 text-sm font-medium"></Typography>
              <Link
                to="/blank/Jobs"
                className="mt-2 inline-block text-blue-600 hover:underline text-base font-semibold transition-all duration-200"
              >
                All Jobs
              </Link>
              <Link
                to="/blank/Jobs"
                className="mt-2 inline-block text-blue-600 hover:underline text-base font-semibold transition-all duration-200"
              >
                Recommended Jobs
              </Link>
              <Link
                to="/blank/Jobs"
                className="mt-2 inline-block text-blue-600 hover:underline text-base font-semibold transition-all duration-200"
              >
                Invites
              </Link>
              <Link
                to="/ApplicationManager"
                className="mt-2 inline-block text-blue-600 hover:underline text-base font-semibold transition-all duration-200"
              >
                Application Manage
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* for interships */}
      {showInternshipDropDown && (
        <div
          className="bg-white shadow-xl ml-[428px] flex top-[90px] absolute w-[485px] h-[431px] rounded-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:shadow-2xl"
          onMouseEnter={() => {
            setShowInternshipDropDown(true);
            setOpportunities(true);
          }}
          onMouseLeave={() => {
            setShowInternshipDropDown(false);
            setOpportunities(false);
          }}
        >
          <div className="py-5 w-[223px] text-[16px] font-medium pr-2">
            <p
              onClick={() => handleSelectInternshipOption("location")}
              className={`${
                selectInternshipOption === "location"
                  ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                  : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
              } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
            >
              Top Location
            </p>
            <p
              onClick={() => handleSelectInternshipOption("profile")}
              className={`${
                selectInternshipOption === "profile"
                  ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                  : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
              } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
            >
              Profile
            </p>
            <p
              onClick={() => handleSelectInternshipOption("categories")}
              className={`${
                selectInternshipOption === "categories"
                  ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                  : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
              } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
            >
              Top Categories
            </p>
            <p
              onClick={() => handleSelectInternshipOption("moreInternship")}
              className={`${
                selectInternshipOption === "moreInternship"
                  ? "bg-[#4234a2] bg-opacity-20 rounded-tr-[39px] rounded-br-[39px] w-full flex items-center text-[#4234a2] font-semibold"
                  : "hover:bg-gray-100 hover:rounded-tr-[39px] hover:rounded-br-[39px] text-gray-700"
              } px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out`}
            >
              Explore More Internships
            </p>
          </div>
          <div className="border-l border-gray-200 h-full"></div>
          <div className="py-[36px] px-[18px] overflow-auto w-[262px] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
            <ul className="flex flex-col gap-4 text-[15px] cursor-pointer text-gray-600 font-medium">
              {internshipListItem().map((item, index) => (
                <li
                  key={index}
                  className="hover:text-[#4234a2] transition-colors duration-200 ease-in-out"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* for switch mode */}
      {mode && (
        <div
          className=" flex flex-col items-center bg-gray-50 rounded-2xl -mt-4 ml-[30%]    max-w-xs mx-auto"
          onMouseEnter={() => setMode(true)}
          onMouseLeave={() => setMode(false)}
        >
          {workItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(item.link)}
              className="group flex flex-col p-2 bg-white hover:bg-purple-600 hover:text-white transform transition duration-100 cursor-pointer w-full rounded-md shadow-md"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-lg">{item.icon}</p>
                </div>
                <div>
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-blue-500"
                    disabled
                  />
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-600 group-hover:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* for notifications */}
      {/* {noti && (
         <div className="w-64 z-20 bg-white ml-[60%] shadow-lg rounded-lg overflow-hidden">
         <div className="p-4 bg-blue-700 text-white font-bold">
           Updated Messages
         </div>
         <div className="h-80 overflow-y-auto">
           {loading ? (
             <p className="p-4">Loading...</p>
           ) : notifications.length > 0 ? (
             notifications.map((notification, index) => (
               <div key={index} className="p-4 border-b border-gray-200">
                 {notification?.text || 'No message available'}
               </div>
             ))
           ) : (
             <p className="p-4">No notifications available.</p>
           )}
         </div>
       </div>
      )} */}

      {internshipModal && (
        <InternshipModal
          onOpen={toggleInternshipModalOpen}
          onClose={toggleInternshipModalClose}
        />
      )}
      {aiModal && (
        <AIToolsModal open={aiModal} onClose={() => setAiModal(false)} />
      )}
    </>
  );
};

export default Header;

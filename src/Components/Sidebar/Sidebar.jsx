// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { GetApi } from "../../Pages/utilis/Api_Calling";

// const Sidebar = () => {
//   const path = useLocation();
//   const pathName = path?.pathname;

//   const [showFullSidebar, setShowFullSidebar] = useState(false);

//   const toggleSidebar = () => {
//     setShowFullSidebar(!showFullSidebar);
//   };

//   const [studentprofile, setstudentprofile] = useState({});
//   const [Loading, setLoading] = useState(true);

//   const Getstudentprofile = async () => {
//     try {
//       const Getjobdata = await GetApi(`api/StudentRoutes/GetStudentProfile`);
//       setstudentprofile(Getjobdata?.data?.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     Getstudentprofile();
//   }, []);

//   return (
//     <>
//       <div
//         className={` ${
//           !showFullSidebar ? "w-[432px]" : "w-[121px]"
//         } relative  py-[33px] pl-[52px] pr-[45px] overflow-y-auto `}
//       >
//         <div className="flex flex-col gap-[13px]">
//           <div className="flex gap-[9px] items-center text-[24px] font-[500] font-[Outfit]">
//             <p className={`${!showFullSidebar ? "block" : "hidden"}`}>
//               Hi, {studentprofile?.Name}!
//             </p>
//             <img
//               src="/images/PngItem_hi.svg"
//               className="h-[22px] w-[23px]"
//               alt=""
//             />
//           </div>
//           <p
//             className={` ${
//               !showFullSidebar ? "block" : "hidden"
//             } text-[18px] font-[400] font-[outfit]`}
//           >
//             Let’s help you land your dream career
//           </p>
//         </div>
//         <div className="flex flex-col mt-[49px] gap-[44px]">
//           <Link
//             to="/todo"
//             className={`
//           ${pathName === "/todo" ? "text-[#1382b2]" : "text-[#000]"}
//           flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]`}
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill={pathName === "/todo" ? "#1382b2" : "#000"}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clip-path="url(#clip0_342_324)">
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V10H18V4H6V20H11V22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4ZM8 8C8 7.73478 8.10536 7.48043 8.29289 7.29289C8.48043 7.10536 8.73478 7 9 7H15C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8C16 8.26522 15.8946 8.51957 15.7071 8.70711C15.5196 8.89464 15.2652 9 15 9H9C8.73478 9 8.48043 8.89464 8.29289 8.70711C8.10536 8.51957 8 8.26522 8 8ZM8 12C8 11.7348 8.10536 11.4804 8.29289 11.2929C8.48043 11.1054 8.73478 11 9 11H10C10.2652 11 10.5196 11.1054 10.7071 11.2929C10.8946 11.4804 11 11.7348 11 12C11 12.2652 10.8946 12.5196 10.7071 12.7071C10.5196 12.8946 10.2652 13 10 13H9C8.73478 13 8.48043 12.8946 8.29289 12.7071C8.10536 12.5196 8 12.2652 8 12ZM17 14C16.2044 14 15.4413 14.3161 14.8787 14.8787C14.3161 15.4413 14 16.2044 14 17C14 17.7956 14.3161 18.5587 14.8787 19.1213C15.4413 19.6839 16.2044 20 17 20C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17C20 16.2044 19.6839 15.4413 19.1213 14.8787C18.5587 14.3161 17.7956 14 17 14ZM12 17C12 15.6739 12.5268 14.4021 13.4645 13.4645C14.4021 12.5268 15.6739 12 17 12C18.3261 12 19.5979 12.5268 20.5355 13.4645C21.4732 14.4021 22 15.6739 22 17C22 18.3261 21.4732 19.5979 20.5355 20.5355C19.5979 21.4732 18.3261 22 17 22C15.6739 22 14.4021 21.4732 13.4645 20.5355C12.5268 19.5979 12 18.3261 12 17ZM17 14.5C17.2652 14.5 17.5196 14.6054 17.7071 14.7929C17.8946 14.9804 18 15.2348 18 15.5V16C18.2652 16 18.5196 16.1054 18.7071 16.2929C18.8946 16.4804 19 16.7348 19 17C19 17.2652 18.8946 17.5196 18.7071 17.7071C18.5196 17.8946 18.2652 18 18 18H17C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17V15.5C16 15.2348 16.1054 14.9804 16.2929 14.7929C16.4804 14.6054 16.7348 14.5 17 14.5Z"
//                   fill={pathName === "/todo" ? "#1382b2" : "#000"}
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_342_324">
//                   <rect
//                     width="24"
//                     height="24"
//                     fill={pathName === "/" ? "#1382b2" : "#000"}
//                   />
//                 </clipPath>
//               </defs>
//             </svg>
//             <p className={`${!showFullSidebar ? "block" : "hidden"}`}>
//               To do list
//             </p>
//           </Link>

//           <div className="flex text-[20px] font-[400] font-[Outfit] w-full justify-between">
//             <Link
//               to="/"
//               className={`${
//                 pathName === "/skillsmissing" ? "text-[#1382b2]" : "text-[#000]"
//               } flex gap-[10px] `}
//             >
//               <div className="flex mt-[7px] justify-center items-center bg-gradient-to-r from-[#0F87B3] to-[#462DA1] w-[18px] h-[18px] rounded-[50%]">
//                 <img className=" w-[12px] " src="/images/Vector.svg" alt="" />
//               </div>
//               <div>
//                 <p className={`${!showFullSidebar ? "block" : "hidden"}`}>
//                   Skills missing
//                 </p>
//                 <p
//                   className={`text-[14px] text-black text-opacity-[50%] ${
//                     !showFullSidebar ? "block" : "hidden"
//                   }`}
//                 >
//                   Add Your Skills
//                 </p>
//               </div>
//             </Link>
//             <img
//               src="/images/VectorRightArrow.svg"
//               className={`w-[5.5px] mt-[10px] h-[11px] ${
//                 !showFullSidebar ? "block" : "hidden"
//               }`}
//               alt=""
//             />
//           </div>

//           <Link
//             to="/blank/Portfolio"
//             className={`${
//               pathName === "/Portfolio" ? "text-[#1382b2]" : "text-[#000]"
//             } flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]`}
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M21.75 12.75V21H2.25V12.75M12 16.5V13.5M15 6C15 6 15 3 12 3C9 3 9 6 9 6M1.5 6H22.5V12C22.5 12 18 15 12 15C6 15 1.5 12 1.5 12V6Z"
//                 stroke={pathName === "/Portfolio" ? "#1382b2" : "#000"}
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>

//             <p className={`${!showFullSidebar ? "block" : "hidden"}`}>
//               Portfolio
//             </p>
//           </Link>
//           <Link
//             to="/SkillManager"
//             className={`${
//               pathName === "/SkillManager" ? "text-[#1382b2]" : "text-[#000]"
//             } flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]`}
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clip-path="url(#clip0_476_626)">
//                 <path
//                   d="M8.7788 7.64697L9.73993 9.17979L11.4947 9.62027L10.3339 11.0081L10.4573 12.8131L8.7788 12.1379L7.10021 12.8131L7.22359 11.0081L6.06287 9.62027L7.81768 9.17979L8.7788 7.64697Z"
//                   fill="white"
//                 />
//                 <path
//                   d="M7.10029 13.519C6.95338 13.519 6.80779 13.4732 6.6853 13.3842C6.48871 13.2413 6.3794 13.0074 6.39594 12.765L6.50001 11.2432L5.52135 10.0733C5.36549 9.88683 5.31641 9.63333 5.39146 9.40224C5.46655 9.17115 5.65522 8.9949 5.89096 8.93574L7.37043 8.56444L8.18071 7.2721C8.3098 7.06618 8.53579 6.94116 8.77879 6.94116C9.02179 6.94116 9.24777 7.06618 9.37687 7.2721L10.1871 8.56444L11.6665 8.93574C11.9022 8.9949 12.0909 9.17115 12.166 9.40224C12.2411 9.63333 12.192 9.88688 12.0361 10.0733L11.0575 11.2433L11.1615 12.7651C11.1781 13.0075 11.0689 13.2414 10.8722 13.3843C10.6755 13.5271 10.4193 13.5588 10.1939 13.4681L8.77874 12.8989L7.36354 13.4681C7.2786 13.5022 7.18921 13.519 7.10029 13.519ZM7.32651 10.0308L7.76507 10.5551C7.88188 10.6949 7.94019 10.8743 7.92787 11.0561L7.88127 11.7381L8.51544 11.483C8.68452 11.415 8.87319 11.415 9.04222 11.483L9.6763 11.738L9.62971 11.0561C9.61729 10.8743 9.6756 10.6949 9.79251 10.5551L10.2311 10.0308L9.56812 9.86447C9.39144 9.82013 9.23868 9.70918 9.14188 9.55482L8.77879 8.97572L8.41569 9.55482C8.3189 9.70918 8.16618 9.82008 7.98946 9.86447L7.32651 10.0308Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M7.10029 13.519C6.95338 13.519 6.80779 13.4732 6.6853 13.3842C6.48871 13.2413 6.3794 13.0074 6.39594 12.765L6.50001 11.2432L5.52135 10.0733C5.36549 9.88683 5.31641 9.63333 5.39146 9.40224C5.46655 9.17115 5.65522 8.9949 5.89096 8.93574L7.37043 8.56444L8.18071 7.2721C8.3098 7.06618 8.53579 6.94116 8.77879 6.94116C9.02179 6.94116 9.24777 7.06618 9.37687 7.2721L10.1871 8.56444L11.6665 8.93574C11.9022 8.9949 12.0909 9.17115 12.166 9.40224C12.2411 9.63333 12.192 9.88688 12.0361 10.0733L11.0575 11.2433L11.1615 12.7651C11.1781 13.0075 11.0689 13.2414 10.8722 13.3843C10.6755 13.5271 10.4193 13.5588 10.1939 13.4681L8.77874 12.8989L7.36354 13.4681C7.2786 13.5022 7.18921 13.519 7.10029 13.519ZM7.32651 10.0308L7.76507 10.5551C7.88188 10.6949 7.94019 10.8743 7.92787 11.0561L7.88127 11.7381L8.51544 11.483C8.68452 11.415 8.87319 11.415 9.04222 11.483L9.6763 11.738L9.62971 11.0561C9.61729 10.8743 9.6756 10.6949 9.79251 10.5551L10.2311 10.0308L9.56812 9.86447C9.39144 9.82013 9.23868 9.70918 9.14188 9.55482L8.77879 8.97572L8.41569 9.55482C8.3189 9.70918 8.16618 9.82008 7.98946 9.86447L7.32651 10.0308Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M17.937 9.70231H13.9135C13.5238 9.70231 13.2076 9.38628 13.2076 8.99642C13.2076 8.60656 13.5237 8.29053 13.9135 8.29053H17.937C18.3268 8.29053 18.6429 8.60656 18.6429 8.99642C18.6429 9.38628 18.3269 9.70231 17.937 9.70231Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M17.937 9.70231H13.9135C13.5238 9.70231 13.2076 9.38628 13.2076 8.99642C13.2076 8.60656 13.5237 8.29053 13.9135 8.29053H17.937C18.3268 8.29053 18.6429 8.60656 18.6429 8.99642C18.6429 9.38628 18.3269 9.70231 17.937 9.70231Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M16.5245 12.1696H13.9137C13.5239 12.1696 13.2078 11.8536 13.2078 11.4637C13.2078 11.0738 13.5238 10.7578 13.9137 10.7578H16.5245C16.9143 10.7578 17.2304 11.0738 17.2304 11.4637C17.2303 11.8536 16.9143 12.1696 16.5245 12.1696Z"
//                   fill="black"
//                 />
//                 <path
//                   d="M16.5245 12.1696H13.9137C13.5239 12.1696 13.2078 11.8536 13.2078 11.4637C13.2078 11.0738 13.5238 10.7578 13.9137 10.7578H16.5245C16.9143 10.7578 17.2304 11.0738 17.2304 11.4637C17.2303 11.8536 16.9143 12.1696 16.5245 12.1696Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M8.7788 15.2759L9.73993 16.8087L11.4947 17.2491L10.3339 18.6369L10.4573 20.4419L8.7788 19.7667L7.10021 20.4419L7.22359 18.6369L6.06287 17.2491L7.81768 16.8087L8.7788 15.2759Z"
//                   fill="white"
//                 />
//                 <path
//                   d="M10.4573 21.148C10.3684 21.148 10.279 21.1312 10.194 21.097L8.77883 20.5278L7.36363 21.097C7.13826 21.1877 6.88194 21.156 6.68535 21.0132C6.48876 20.8703 6.3794 20.6364 6.39599 20.394L6.50005 18.8722L5.52135 17.7022C5.36549 17.5157 5.31641 17.2622 5.39146 17.0311C5.46655 16.8001 5.65522 16.6238 5.89096 16.5646L7.37043 16.1933L8.18071 14.901C8.3098 14.6951 8.53579 14.5701 8.77879 14.5701C9.02179 14.5701 9.24777 14.6951 9.37687 14.901L10.1871 16.1933L11.6665 16.5646C11.9022 16.6238 12.0909 16.8001 12.166 17.0311C12.2411 17.2622 12.192 17.5157 12.0361 17.7022L11.0575 18.8722L11.1615 20.394C11.1781 20.6364 11.0689 20.8703 10.8722 21.0132C10.7497 21.1022 10.6042 21.148 10.4573 21.148ZM7.32651 17.6599L7.76507 18.1841C7.88188 18.3239 7.94019 18.5034 7.92787 18.6852L7.88127 19.3671L8.51544 19.112C8.68452 19.0441 8.87319 19.0441 9.04222 19.112L9.6763 19.3671L9.62971 18.6852C9.61729 18.5034 9.6756 18.3239 9.79251 18.1841L10.2311 17.6599L9.56812 17.4935C9.39144 17.4492 9.23868 17.3382 9.14188 17.1839L8.77879 16.6048L8.41569 17.1839C8.3189 17.3382 8.16618 17.4491 7.98946 17.4935L7.32651 17.6599Z"
//                   fill="black"
//                 />
//                 <path
//                   d="M10.4573 21.148C10.3684 21.148 10.279 21.1312 10.194 21.097L8.77883 20.5278L7.36363 21.097C7.13826 21.1877 6.88194 21.156 6.68535 21.0132C6.48876 20.8703 6.3794 20.6364 6.39599 20.394L6.50005 18.8722L5.52135 17.7022C5.36549 17.5157 5.31641 17.2622 5.39146 17.0311C5.46655 16.8001 5.65522 16.6238 5.89096 16.5646L7.37043 16.1933L8.18071 14.901C8.3098 14.6951 8.53579 14.5701 8.77879 14.5701C9.02179 14.5701 9.24777 14.6951 9.37687 14.901L10.1871 16.1933L11.6665 16.5646C11.9022 16.6238 12.0909 16.8001 12.166 17.0311C12.2411 17.2622 12.192 17.5157 12.0361 17.7022L11.0575 18.8722L11.1615 20.394C11.1781 20.6364 11.0689 20.8703 10.8722 21.0132C10.7497 21.1022 10.6042 21.148 10.4573 21.148ZM7.32651 17.6599L7.76507 18.1841C7.88188 18.3239 7.94019 18.5034 7.92787 18.6852L7.88127 19.3671L8.51544 19.112C8.68452 19.0441 8.87319 19.0441 9.04222 19.112L9.6763 19.3671L9.62971 18.6852C9.61729 18.5034 9.6756 18.3239 9.79251 18.1841L10.2311 17.6599L9.56812 17.4935C9.39144 17.4492 9.23868 17.3382 9.14188 17.1839L8.77879 16.6048L8.41569 17.1839C8.3189 17.3382 8.16618 17.4491 7.98946 17.4935L7.32651 17.6599Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M17.937 17.3312H13.9135C13.5238 17.3312 13.2076 17.0152 13.2076 16.6253C13.2076 16.2355 13.5237 15.9194 13.9135 15.9194H17.937C18.3268 15.9194 18.6429 16.2355 18.6429 16.6253C18.6429 17.0152 18.3269 17.3312 17.937 17.3312Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M17.937 17.3312H13.9135C13.5238 17.3312 13.2076 17.0152 13.2076 16.6253C13.2076 16.2355 13.5237 15.9194 13.9135 15.9194H17.937C18.3268 15.9194 18.6429 16.2355 18.6429 16.6253C18.6429 17.0152 18.3269 17.3312 17.937 17.3312Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M16.5245 19.7985H13.9137C13.5239 19.7985 13.2078 19.4825 13.2078 19.0926C13.2078 18.7027 13.5238 18.3867 13.9137 18.3867H16.5245C16.9143 18.3867 17.2304 18.7027 17.2304 19.0926C17.2303 19.4825 16.9143 19.7985 16.5245 19.7985Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M16.5245 19.7985H13.9137C13.5239 19.7985 13.2078 19.4825 13.2078 19.0926C13.2078 18.7027 13.5238 18.3867 13.9137 18.3867H16.5245C16.9143 18.3867 17.2304 18.7027 17.2304 19.0926C17.2303 19.4825 16.9143 19.7985 16.5245 19.7985Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M8.11746 2.68457H3.17627V4.94123H8.11746V2.68457Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M20.8236 2.68457H15.8824V4.94123H20.8236V2.68457Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M15.1765 4.94119C15.1765 5.33105 15.4925 5.64708 15.8824 5.64708H20.8237C21.2135 5.64708 21.5296 5.33105 21.5296 4.94119V2.68453C21.5296 2.29467 21.2135 1.97864 20.8237 1.97864H16.5882V0.705891C16.5882 0.316031 16.2721 0 15.8824 0H8.1176C7.72784 0 7.41171 0.316031 7.41171 0.705891V1.97869H3.17623C2.78646 1.97869 2.47034 2.29472 2.47034 2.68458V4.94123V23.2942C2.47034 23.684 2.78642 24 3.17623 24H20.8237C21.2135 24 21.5296 23.684 21.5296 23.2942V8.99639C21.5296 8.60653 21.2135 8.2905 20.8237 8.2905C20.4339 8.2905 20.1178 8.60653 20.1178 8.99639V22.5882H3.88212V5.64708H8.1176H13.0849C13.4747 5.64708 13.7908 5.33105 13.7908 4.94119C13.7908 4.55133 13.4747 4.2353 13.0849 4.2353H8.82349V2.68453V1.41178H15.1764V2.68453V4.94119H15.1765ZM3.88212 3.39042H7.41176V4.2353H3.88212V3.39042ZM20.1178 4.2353H16.5882V3.39042H20.1178V4.2353Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//                 <path
//                   d="M15.1765 4.94119C15.1765 5.33105 15.4925 5.64708 15.8824 5.64708H20.8237C21.2135 5.64708 21.5296 5.33105 21.5296 4.94119V2.68453C21.5296 2.29467 21.2135 1.97864 20.8237 1.97864H16.5882V0.705891C16.5882 0.316031 16.2721 0 15.8824 0H8.1176C7.72784 0 7.41171 0.316031 7.41171 0.705891V1.97869H3.17623C2.78646 1.97869 2.47034 2.29472 2.47034 2.68458V4.94123V23.2942C2.47034 23.684 2.78642 24 3.17623 24H20.8237C21.2135 24 21.5296 23.684 21.5296 23.2942V8.99639C21.5296 8.60653 21.2135 8.2905 20.8237 8.2905C20.4339 8.2905 20.1178 8.60653 20.1178 8.99639V22.5882H3.88212V5.64708H8.1176H13.0849C13.4747 5.64708 13.7908 5.33105 13.7908 4.94119C13.7908 4.55133 13.4747 4.2353 13.0849 4.2353H8.82349V2.68453V1.41178H15.1764V2.68453V4.94119H15.1765ZM3.88212 3.39042H7.41176V4.2353H3.88212V3.39042ZM20.1178 4.2353H16.5882V3.39042H20.1178V4.2353Z"
//                   fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_476_626">
//                   <rect
//                     width="24"
//                     height="24"
//                     fill={pathName === "/SkillManager" ? "#1382b2" : "#000"}
//                   />
//                 </clipPath>
//               </defs>
//             </svg>

//             <p className={`${!showFullSidebar ? "block" : "hidden"}`}>
//               Skills Manager
//             </p>
//           </Link>
//           <Link
//             to="/Notification"
//             className={`${
//               pathName === "/Notification" ? "text-[#1382b2]" : "text-[#000]"
//             } flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]`}
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill={pathName === "/Notification" ? "#1382b2" : "#000"}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M21.5303 14.4697L19.5 12.4395V9.75C19.4977 7.89138 18.8063 6.09964 17.5595 4.72124C16.3127 3.34284 14.5991 2.4757 12.75 2.2875V0.75H11.25V2.2875C9.40093 2.4757 7.68732 3.34284 6.44053 4.72124C5.19373 6.09964 4.50233 7.89138 4.5 9.75V12.4395L2.46975 14.4697C2.32909 14.6104 2.25004 14.8011 2.25 15V17.25C2.25 17.4489 2.32902 17.6397 2.46967 17.7803C2.61032 17.921 2.80109 18 3 18H8.25V18.5828C8.23369 19.5342 8.56905 20.4583 9.19184 21.1778C9.81462 21.8973 10.681 22.3617 11.625 22.482C12.1464 22.5337 12.6728 22.4757 13.1704 22.3117C13.6681 22.1478 14.1259 21.8815 14.5144 21.53C14.9029 21.1785 15.2136 20.7495 15.4264 20.2707C15.6392 19.792 15.7494 19.2739 15.75 18.75V18H21C21.1989 18 21.3897 17.921 21.5303 17.7803C21.671 17.6397 21.75 17.4489 21.75 17.25V15C21.75 14.8011 21.6709 14.6104 21.5303 14.4697ZM14.25 18.75C14.25 19.3467 14.0129 19.919 13.591 20.341C13.169 20.7629 12.5967 21 12 21C11.4033 21 10.831 20.7629 10.409 20.341C9.98705 19.919 9.75 19.3467 9.75 18.75V18H14.25V18.75ZM20.25 16.5H3.75V15.3105L5.78025 13.2803C5.92091 13.1396 5.99996 12.9489 6 12.75V9.75C6 8.1587 6.63214 6.63258 7.75736 5.50736C8.88258 4.38214 10.4087 3.75 12 3.75C13.5913 3.75 15.1174 4.38214 16.2426 5.50736C17.3679 6.63258 18 8.1587 18 9.75V12.75C18 12.9489 18.0791 13.1396 18.2197 13.2803L20.25 15.3105V16.5Z"
//                 fill={pathName === "/Notification" ? "#1382b2" : "#000"}
//               />
//               <path
//                 d="M21.5303 14.4697L19.5 12.4395V9.75C19.4977 7.89138 18.8063 6.09964 17.5595 4.72124C16.3127 3.34284 14.5991 2.4757 12.75 2.2875V0.75H11.25V2.2875C9.40093 2.4757 7.68732 3.34284 6.44053 4.72124C5.19373 6.09964 4.50233 7.89138 4.5 9.75V12.4395L2.46975 14.4697C2.32909 14.6104 2.25004 14.8011 2.25 15V17.25C2.25 17.4489 2.32902 17.6397 2.46967 17.7803C2.61032 17.921 2.80109 18 3 18H8.25V18.5828C8.23369 19.5342 8.56905 20.4583 9.19184 21.1778C9.81462 21.8973 10.681 22.3617 11.625 22.482C12.1464 22.5337 12.6728 22.4757 13.1704 22.3117C13.6681 22.1478 14.1259 21.8815 14.5144 21.53C14.9029 21.1785 15.2136 20.7495 15.4264 20.2707C15.6392 19.792 15.7494 19.2739 15.75 18.75V18H21C21.1989 18 21.3897 17.921 21.5303 17.7803C21.671 17.6397 21.75 17.4489 21.75 17.25V15C21.75 14.8011 21.6709 14.6104 21.5303 14.4697ZM14.25 18.75C14.25 19.3467 14.0129 19.919 13.591 20.341C13.169 20.7629 12.5967 21 12 21C11.4033 21 10.831 20.7629 10.409 20.341C9.98705 19.919 9.75 19.3467 9.75 18.75V18H14.25V18.75ZM20.25 16.5H3.75V15.3105L5.78025 13.2803C5.92091 13.1396 5.99996 12.9489 6 12.75V9.75C6 8.1587 6.63214 6.63258 7.75736 5.50736C8.88258 4.38214 10.4087 3.75 12 3.75C13.5913 3.75 15.1174 4.38214 16.2426 5.50736C17.3679 6.63258 18 8.1587 18 9.75V12.75C18 12.9489 18.0791 13.1396 18.2197 13.2803L20.25 15.3105V16.5Z"
//                 fill={pathName === "/Notification" ? "#1382b2" : "#000"}
//               />
//             </svg>
//             <p className={`${!showFullSidebar ? "block" : "hidden"}`}>
//               Notification
//             </p>
//           </Link>
//           <Link
//             to="/ApplicationManager"
//             className={`${
//               pathName === "/ApplicationManager"
//                 ? "text-[#1382b2]"
//                 : "text-[#000]"
//             } flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]`}
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill={pathName === "/ApplicationManager" ? "#1382b2" : "#000"}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M17.212 20.404L17.104 19.519C16.724 19.4357 16.4113 19.3257 16.166 19.189C15.9207 19.053 15.6873 18.8607 15.466 18.612L14.631 18.946L14.092 18.131L14.781 17.554C14.6703 17.2007 14.615 16.8557 14.615 16.519C14.615 16.183 14.6703 15.8383 14.781 15.485L14.092 14.908L14.631 14.092L15.465 14.427C15.687 14.1657 15.9207 13.9697 16.166 13.839C16.412 13.709 16.7247 13.6023 17.104 13.519L17.212 12.635H18.212L18.319 13.519C18.699 13.6023 19.0117 13.709 19.257 13.839C19.5023 13.9697 19.7357 14.1657 19.957 14.427L20.792 14.092L21.331 14.908L20.642 15.485C20.7527 15.8383 20.808 16.183 20.808 16.519C20.808 16.855 20.7527 17.2 20.642 17.554L21.331 18.131L20.792 18.946L19.958 18.612C19.736 18.8607 19.5023 19.053 19.257 19.189C19.011 19.3257 18.6983 19.4357 18.319 19.519L18.212 20.404H17.212ZM17.712 18.674C18.3 18.674 18.806 18.462 19.23 18.038C19.6533 17.614 19.865 17.1077 19.865 16.519C19.865 15.931 19.6533 15.425 19.23 15.001C18.806 14.577 18.3 14.365 17.712 14.365C17.1233 14.365 16.617 14.577 16.193 15.001C15.7697 15.425 15.558 15.931 15.558 16.519C15.558 17.1077 15.7697 17.614 16.193 18.038C16.617 18.4613 17.1233 18.674 17.712 18.674ZM4.615 19C4.155 19 3.771 18.846 3.463 18.538C3.15433 18.2293 3 17.845 3 17.385V6.615C3 6.155 3.15433 5.771 3.463 5.463C3.771 5.15433 4.155 5 4.615 5H9.596L11.596 7H19.385C19.845 7 20.229 7.15433 20.537 7.463C20.8457 7.771 21 8.155 21 8.615V10.91C20.4933 10.6087 19.9593 10.3817 19.398 10.229C18.8367 10.0763 18.26 10 17.668 10C15.8033 10 14.2547 10.649 13.022 11.947C11.7893 13.245 11.173 14.767 11.173 16.513C11.173 16.9443 11.2153 17.365 11.3 17.775C11.3847 18.185 11.5113 18.5933 11.68 19H4.616H4.615Z"
//                 fill={pathName === "/ApplicationManager" ? "#1382b2" : "#000"}
//               />
//             </svg>

//             <p className={`${!showFullSidebar ? "block" : "hidden"}`}>
//               Application Manager
//             </p>
//           </Link>
//           <Link
//             to="/AICounsellor"
//             className={`${
//               pathName === "/AICounsellor" ? "text-[#1382b2]" : "text-[#000]"
//             } flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]`}
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill={pathName === "/AICounsellor" ? "#1382b2" : "#000"}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M24 4.5V16.5H22.5V9.83203L15 13.5938V15H9V13.5938L1.5 9.83203V18H15V19.5H0V4.5H7.5V3C7.5 2.78906 7.53906 2.59375 7.61719 2.41406C7.69531 2.23438 7.80078 2.07812 7.93359 1.94531C8.06641 1.8125 8.22656 1.70312 8.41406 1.61719C8.60156 1.53125 8.79688 1.49219 9 1.5H15C15.2109 1.5 15.4062 1.53906 15.5859 1.61719C15.7656 1.69531 15.9219 1.80078 16.0547 1.93359C16.1875 2.06641 16.2969 2.22656 16.3828 2.41406C16.4688 2.60156 16.5078 2.79687 16.5 3V4.5H24ZM9 4.5H15V3H9V4.5ZM13.5 12H10.5V13.5H13.5V12ZM22.5 8.16797V6H1.5V8.16797L9 11.9062V10.5H15V11.9062L22.5 8.16797ZM21 18H24V19.5H21V22.5H19.5V19.5H16.5V18H19.5V15H21V18Z"
//                 fill={pathName === "/AICounsellor" ? "#1382b2" : "#000"}
//               />
//             </svg>
//             <p className={`${!showFullSidebar ? "block" : "hidden"}`}>
//               AI Counsellor
//             </p>
//           </Link>

//           <Link
//             to="/Training"
//             className={`${
//               pathName === "/Training" ? "text-[#1382b2]" : "text-[#000]"
//             } flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]`}
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill={pathName === "/Training" ? "#1382b2" : "#000"}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M3 2H18.5V4.5H17.5V3H4V14.5H14.6935V15.5H3V2ZM18 8.5C18.3978 8.5 18.7794 8.34196 19.0607 8.06066C19.342 7.77936 19.5 7.39782 19.5 7C19.5 6.60218 19.342 6.22064 19.0607 5.93934C18.7794 5.65804 18.3978 5.5 18 5.5C17.6022 5.5 17.2206 5.65804 16.9393 5.93934C16.658 6.22064 16.5 6.60218 16.5 7C16.5 7.39782 16.658 7.77936 16.9393 8.06066C17.2206 8.34196 17.6022 8.5 18 8.5ZM19.0155 9.505C19.665 9.505 20.179 9.797 20.5155 10.248C20.83 10.6705 20.963 11.193 20.993 11.6755C21.0224 12.1704 20.955 12.6664 20.7945 13.1355C20.6445 13.5705 20.391 14.0205 20 14.329V19.25C20.0004 19.4384 19.9298 19.6201 19.8023 19.7589C19.6748 19.8976 19.4997 19.9833 19.312 19.9989C19.1242 20.0144 18.9374 19.9587 18.7888 19.8429C18.6402 19.727 18.5407 19.5594 18.51 19.3735L17.865 15.5H17.716L16.987 19.388C16.9524 19.5715 16.8506 19.7355 16.7014 19.8479C16.5523 19.9603 16.3666 20.013 16.1807 19.9958C15.9948 19.9785 15.8219 19.8925 15.6961 19.7546C15.5702 19.6167 15.5003 19.4367 15.5 19.25V12.1165C15.4 12.2688 15.3013 12.422 15.204 12.576L15.165 12.6375L15.155 12.6535L15.1525 12.658C15.0851 12.7662 14.9913 12.8554 14.8798 12.9173C14.7683 12.9791 14.643 13.0116 14.5155 13.0115H12.0155C11.8166 13.0115 11.6258 12.9325 11.4852 12.7918C11.3445 12.6512 11.2655 12.4604 11.2655 12.2615C11.2655 12.0626 11.3445 11.8718 11.4852 11.7312C11.6258 11.5905 11.8166 11.5115 12.0155 11.5115H14.104C14.2255 11.3235 14.3855 11.0795 14.5535 10.8345C14.7285 10.579 14.9215 10.3085 15.0935 10.0965C15.177 9.993 15.2705 9.885 15.3645 9.7965C15.4105 9.753 15.4745 9.6965 15.5525 9.6465C15.6902 9.55615 15.8509 9.50721 16.0155 9.5055L19.0155 9.505Z"
//                 fill={pathName === "/Training" ? "#1382b2" : "#000"}
//               />
//             </svg>
//             <p className={`${!showFullSidebar ? "block" : "hidden"}`}>
//               Training
//             </p>
//           </Link>
//           <Link
//             to="/MyBoard"
//             className={`${
//               pathName === "/MyBoard" ? "text-[#1382b2]" : "text-[#000]"
//             } flex items-center gap-[10px] text-[20px] font-[400] font-[Outfit]`}
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill={pathName === "/MyBoard" ? "#1382b2" : "#000"}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"
//                 fill={pathName === "/MyBoard" ? "#1382b2" : "#000"}
//               />
//             </svg>

//             <p className={`${!showFullSidebar ? "block" : "hidden"}`}>
//               College Board
//             </p>
//           </Link>
//         </div>
//         <div
//           onClick={toggleSidebar}
//           className="bg-[#f3f3f3] absolute top-[9px] right-[0px] bg-opacity-[50%] rounded-[50%] w-[40px] h-[40px] flex justify-center items-center "
//         >
//           <img
//             src="/images/VectorRightArrow.svg"
//             className="w-[5.5px]  h-[11px] "
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// {/*  // <div className="border rounded-2xl p-5 min-h-[60vh] bg-white min-w-[15vw]">
//     //   <div className="profile w-full flex flex-col justify-start items-center">
//     //     <img
//     //       className="h-20"
//     //       src="data:image/png;base64,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"
//     //       alt=""
//     //     />
//     //     <h2 className="text-md font-semibold text-gray-900">Name</h2>
//     //     <h6 className="text-sm font-semibold text-gray-900">position</h6>
//     //     <p className="text-xs font-semibold text-gray-500">
//     //       Last updated 7m ago
//     //     </p>
//     //     <button className="px-3 py-1 bg-blue-500 text-white font-semibold rounded-3xl mt-5">
//     //       Complete Profile
//     //     </button>
//     //   </div>
//     //   <div className="rounded-lg bg-blue-50 flex flex-col justify-center items-center p-2 mt-3">
//     //     <h1 className="text-md font-semibold text-gray-900">
//     //       Profile Performance
//     //     </h1>
//     //     <div className="flex justify-between">
//     //       <div className="text-sm">
//     //         search appearances <br /> 0
//     //       </div>
//     //       <div className="text-sm">
//     //         Recruiter actions <br /> 0
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="mt-2 flex flex-col gap-1">
//     //     <span className="text-md text-gray-600 font-semibold px-3 py-1 hover:bg-gray-50 cursor-pointer rounded-xl">
//     //       My Home
//     //     </span>
//     //     <span className="text-md text-gray-600 font-semibold px-3 py-1 hover:bg-gray-50 cursor-pointer rounded-xl">
//     //       Jobs
//     //     </span>
//     //     <span className="text-md text-gray-600 font-semibold px-3 py-1 hover:bg-gray-50 cursor-pointer rounded-xl">
//     //       Blogs
//     //     </span>
//     //   </div>
//     // </div>*/}

import React  ,{useEffect , useState}from "react";

import { IoIosArrowForward } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Navigate, useNavigate } from "react-router";

const Sidebar = ({ activeSection,scrollToSection  }) => {
  const navigate = useNavigate();
   
  const progress = 75;
  // const radius = 45; // Radius of the circle
  // const circumference = 2 * Math.PI * radius;
  // const strokeDashoffset = circumference - (progress / 100) * circumference;


  // {/* <img
  //   className="h-20 w-20 rounded-full object-cover border-2 border-blue-200"
  //   // src=""
  //   src="data:image/png;base64,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"
  //   alt="Profile Picture"
  //   /> */}
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    // Simulate loading transition
    const timer = setTimeout(() => {
      setCurrentProgress(progress);
    }, 500); // Adjust this value to control the loading transition duration

    return () => clearTimeout(timer);
  }, [progress]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (currentProgress / 100) * circumference;
  const dotPosition = circumference - dashoffset; // Calculate position for the dot


// this is for our scrollable section ------------
const getSectionClassName = (sectionId) =>
  activeSection === sectionId ? 'bg-blue-200' : '';

const handleClick = (sectionId) => {
  scrollToSection(sectionId);
};


  return (
    <div className="border sticky z-0 top-24 rounded-2xl p-5 min-h-[60vh] bg-white min-w-[15vw] shadow-lg mt-3 ">
        <div className="profile w-full flex flex-col justify-start items-center">
             {/* old bar */}
              {/* <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: `rotate(190deg)` }}>
                  <CircularProgressbar
                    value={progress}
                    strokeWidth={3}
                    styles={buildStyles({
                      pathColor: 'orange', // Adjust the color of the progress bar
                      textColor: '#4F46E5', // Adjust the color of the text
                      trailColor: '#E5E7EB', // Color of the background track
                    })}
                  />
                </div>
                <img
                  className="h-20 w-20 rounded-full object-cover border-2 border-blue-200"
                  src="" // Provide the src if available
                  alt="Profile"
                  />
              </div> */}
              {/* new bar */}
                <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotate(190deg)' }}>
                        <CircularProgressbar
                          value={currentProgress}
                          // text={`${currentProgress}%`}
                          strokeWidth={3}
                          styles={buildStyles({
                            pathColor: '#f8ab29', // Color of the progress bar
                            textColor: '#4F46E5', // Color of the text
                            trailColor: '#E5E7EB', // Color of the background track
                            pathTransitionDuration: 1, // Duration of the transition (in seconds)
                            textSize: '16px', // Adjust text size if needed
                          })}
                        />
                      </div>
                      <img
                        className="h-20 w-20 rounded-full object-cover border-2 border-blue-200"
                        // src="" // Provide the src if available
                        src="data:image/png;base64,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"
                        alt="Profile"
                      />
                  <span className="absolute mt-[70px] text-[#f8ab29] font-bold bg-white rounded-3xl text-[10px] p-[3px]">{currentProgress}%</span>
                    </div>






          <h2 className="text-lg font-semibold text-gray-900 mt-3">Vishal Verma</h2>
          <h6 className=" text-sm font-normal  text-gray-900">Developer at @ GetHire</h6>
          <p className="text-xs text-gray-500 mt-1">
            Last updated 7m ago
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full mt-5 hover:bg-blue-700 transition duration-300"
           onClick={()=>{navigate('/blank/portfolio')}}
          >
            Complete Profile
          </button>
        </div>


        <div className="rounded-lg bg-blue-50 flex flex-col justify-center max-lg:p-1 items-center p-4 mt-4 shadow-md">
          <h1 className="text-lg max-xl:text-[14px] max-lg:text-sm font-semibold text-gray-900">
            Profile Performance
          </h1>
           <div className="flex items-center justify-between w-full mt-4">
              <div className="flex-1 text-sm text-gray-600 px-2 max-xl:-ml-3 max-xl:text-[12px] max-lg:-ml-2 max-lg:text-xs max-2xl:-ml-3">
              Invites 
              <br />
                 <span className="font-semibold text-blue-600">
                      <div className=" flex flex-row justify-center items-center gap-2"><p>0</p><IoIosArrowForward color="#1E88E5" onClick={()=> alert("clicked") } className=" hover:cursor-pointer" /></div> 
                  </span>
              </div>
              <div className="border-l border-light-blue-300 h-12 mx-4 max-xl:-ml-1 w-1 "></div>
              <div className="flex-1 text-sm text-gray-600 px-2 max-xl:-ml-3 max-xl:text-[12px] max-lg:text-xs max-lg:-ml-4">
              Applications <br /> 
                 <span className="font-semibold text-blue-600">
                      <div className=" flex flex-row justify-center items-center gap-2"><p>0</p><IoIosArrowForward color="#1E88E5" onClick={()=> alert("clicked") } className=" hover:cursor-pointer" /></div> 
                  </span>
              </div>
           </div>
        </div>


        <div className="mt-2 flex flex-col">
          <span className={`cursor-pointer p-2 ${getSectionClassName('section1')} -mb-2 flex flex-row justify-normal items-center gap-1 text-md text-gray-600 font-semibold px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg transition duration-200"`}
             onClick={() => handleClick('section1')}>
            <p><CiHome/></p>
            <p>My Home</p>
          </span>
          <span className={` cursor-pointer p-2 ${getSectionClassName('section2')} -mb-2 flex flex-row justify-normal items-center gap-1 text-md text-gray-600 font-semibold px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg transition duration-200`}
             onClick={() => handleClick('section2')}>
            <p><BsFillSuitcaseLgFill/></p>
            <p>Jobs</p>
          </span>
          <span className={`cursor-pointer p-2 ${getSectionClassName('section3')} -mb-2 flex flex-row justify-normal items-center gap-1 text-md text-gray-600 font-semibold px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg transition duration-200`}
             onClick={() => handleClick('section3')}>
            <p><FaRegBuilding/></p>
            <p>Companies</p>
          </span>
          <span className={` -mb-2 flex flex-row justify-normal hover:text-blue-700 items-center gap-1 text-md text-gray-600 font-semibold px-4 py-2  cursor-pointer rounded-lg transition duration-200`}
             onClick={() =>navigate('/blank/career')}>
             <p><FiBookOpen/></p>
            <p>Training Centre</p>
          </span>
        </div>
      </div>

  );
};

export default Sidebar;

import React, { useEffect, useState } from "react";
import { DeleteApi, GetApi, PostApi } from "../utilis/Api_Calling";
import moment from "moment";

const Notification = () => {
  const [selectButton, setSelectButton] = useState("Important");
  const [selectAllImportant, setSelectAllImportant] = useState("Important");
  const [notifications, setNotifications] = useState([]);
  const [Loading, setLoading] = useState(false);

  const toggleButton = (option) => {
    setSelectButton(option);
  };

  const Getnotifications = async () => {
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

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const res = await GetApi(`api/notificationroutes/delete/${id}`);
      setNotifications((prev) => prev.filter((n) => n._id !== id));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    Getnotifications();
  }, []);

  const toggleAllImportant = (option) => {
    setSelectAllImportant(option);
  };

  const groupNotifications = () => {
    const today = [];
    const yesterday = [];
    const older = [];

    notifications.forEach((notification) => {
      const createdAt = moment(notification.createdAt);
      if (createdAt.isSame(moment(), "day")) {
        today.push(notification);
      } else if (createdAt.isSame(moment().subtract(1, "day"), "day")) {
        yesterday.push(notification);
      } else {
        older.push(notification);
      }
    });

    return { today, yesterday, older };
  };

  const { today, yesterday, older } = groupNotifications();

  return (
    // <div className="px-[31px] py-[54px]">
    //   <p className="font-[Outfit] text-[32px] font-[600]">Notification</p>
    //   {selectAllImportant === "Important" ? (
    //     <div>
    //       <div className="flex flex-col md:flex-row gap-[20px] justify-between items-center mt-[22px]">
    //         <div className="flex gap-[14px]">
    //           <button
    //             onClick={() => {
    //               toggleButton("All");
    //               toggleAllImportant("All");
    //             }}
    //             className={`${
    //               selectButton === "All" ? "bg-white" : "bg-[#e7f6ff]"
    //             } px-[20px] py-[10px] rounded-[30px] text-[18px] font-[400] font-[Outfit]`}
    //           >
    //             All
    //           </button>
    //           <button
    //             onClick={() => {
    //               toggleButton("Important");
    //               toggleAllImportant("Important");
    //             }}
    //             className={`${
    //               selectButton === "Important" ? "bg-white" : "bg-[#e7f6ff]"
    //             } px-[20px] py-[10px] rounded-[30px] text-[18px] font-[400] font-[Outfit]`}
    //           >
    //             Important
    //           </button>
    //         </div>
    //         <div className="flex gap-[6px]">
    //           <img src="/images/charm_tick-double.svg" alt="" />
    //           <p className="text-[16px] text-[#000] text-opacity-[50%] font-[400] font-[Outfit]">
    //             Mark all as read
    //           </p>
    //         </div>
    //       </div>

    //       {today.length > 0 && (
    //         <div className="mt-[34px]">
    //           <h3 className="text-[24px] font-[600]">Today</h3>
    //           <div className="flex flex-col gap-[18px] mt-[10px]">
    //             {today.map((notification) => (
    //               <NotificationItem
    //                 key={notification._id}
    //                 notification={notification}
    //                 handleDelete={handleDelete}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       )}

    //       {yesterday.length > 0 && (
    //         <div className="mt-[34px]">
    //           <h3 className="text-[24px] font-[600]">Yesterday</h3>
    //           <div className="flex flex-col gap-[18px] mt-[10px]">
    //             {yesterday.map((notification) => (
    //               <NotificationItem
    //                 key={notification._id}
    //                 notification={notification}
    //                 handleDelete={handleDelete}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       )}

    //       {older.length > 0 && (
    //         <div className="mt-[34px]">
    //           <h3 className="text-[24px] font-[600]">Older</h3>
    //           <div className="flex flex-col gap-[18px] mt-[10px]">
    //             {older.map((notification) => (
    //               <NotificationItem
    //                 key={notification._id}
    //                 notification={notification}
    //                 handleDelete={handleDelete}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   ) : (
    //     <div className="flex flex-col mt-[129px] gap-[11px] justify-center items-center">
    //       <img
    //         src="/images/New message-cuate 1.svg"
    //         className="w-[270px] h-[270px]"
    //         alt=""
    //       />
    //       <p className="text-[32px] font-[400 font-[Outfit]">
    //         You're all caught up!
    //       </p>
    //       <p className="text-[20px] font-[400] font-[Outfit] text-black text-opacity-[50%]">
    //         Check back later for new notifications!
    //       </p>
    //       <button className="rounded-[6px] mt-[14px] bg-gradient-to-r from-[#0f87b3] to-[#462da1] text-white px-[41px] py-[13px] text-[16px] font-[500] font-[Outfit]">
    //         Go to Homepage
    //       </button>
    //     </div>
    //   )}
    // </div>
    
    <div className="px-8 py-12 min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 rounded-lg shadow-xl">
      <p className="font-[Outfit] text-3xl font-semibold text-gray-800 mb-6">
        Notification
      </p>
      {selectAllImportant === "Important" ? (
        <div>
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mt-6">
            <div className="flex gap-4">
              <button
                onClick={() => {
                  toggleButton("All");
                  toggleAllImportant("All");
                }}
                className={`${
                  selectButton === "All" ? "bg-white shadow-md" : "bg-blue-100"
                } transition-all duration-300 hover:bg-white hover:shadow-md px-6 py-3 rounded-full text-lg font-medium font-[Outfit]`}
              >
                All
              </button>
              <button
                onClick={() => {
                  toggleButton("Important");
                  toggleAllImportant("Important");
                }}
                className={`${
                  selectButton === "Important" ? "bg-white shadow-md" : "bg-blue-100"
                } transition-all duration-300 hover:bg-white hover:shadow-md px-6 py-3 rounded-full text-lg font-medium font-[Outfit]`}
              >
                Important
              </button>
            </div>
            <div className="flex items-center gap-2 text-gray-500 hover:text-gray-700 underline transition-colors duration-300 cursor-pointer">
              <img src="/images/charm_tick-double.svg" alt="Tick Icon" />
              <p className="text-base font-[Outfit]">
                Mark all as read
              </p>
            </div>
          </div>

          {today.length > 0 && (
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-indigo-700">Today</h3>
              <div className="flex flex-col gap-5 mt-3">
                {today.map((notification) => (
                  <NotificationItem
                    key={notification._id}
                    notification={notification}
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          )}

          {yesterday.length > 0 && (
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-indigo-700">Yesterday</h3>
              <div className="flex flex-col gap-5 mt-3">
                {yesterday.map((notification) => (
                  <NotificationItem
                    key={notification._id}
                    notification={notification}
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          )}

          {older.length > 0 && (
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-indigo-700">Older</h3>
              <div className="flex flex-col gap-5 mt-3">
                {older.map((notification) => (
                  <NotificationItem
                    key={notification._id}
                    notification={notification}
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col mt-32 gap-3 justify-center items-center text-center">
          <img
            src="/images/New message-cuate 1.svg"
            className="w-64 h-64 opacity-90"
            alt="No Notifications"
          />
          <p className="text-3xl font-medium font-[Outfit] text-gray-700">
            You're all caught up!
          </p>
          <p className="text-lg font-medium font-[Outfit] text-gray-500">
            Check back later for new notifications!
          </p>
          <button className="rounded-lg mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-10 py-4 text-lg font-semibold font-[Outfit] shadow-lg hover:shadow-2xl transition-all duration-300">
            Go to Homepage
          </button>
        </div>
      )}
    </div>
  );
};

const NotificationItem = ({ notification, handleDelete }) => {
  return (
    // <div className="bg-white rounded-[16px] w-full gap-[20px] py-[20px] px-[15px] flex flex-col md:flex-row justify-between items-center">
    //   <div className="flex gap-[16px] justify-center items-center">
    //     <img
    //       src={
    //         "https://gethire-student.vercel.app/static/media/Gethire%20SVG.e7e8d00d37dbfe10fc42a63f9eb11af6.svg"
    //       }
    //       className="w-[75px] rounded-[50%]"
    //       alt=""
    //     />
    //     <div className="flex flex-col justify-center items-start gap-[8px]">
    //       <div className="flex flex-col md:flex-row gap-[17px]">
    //         <p className="text-[18px] font-[400] font-[Outfit]">
    //           {notification?.text}
    //         </p>
    //       </div>
    //       <div className="flex gap-4">
    //         <button className="bg-blue-100 border border-blue-600 text-blue-500 rounded-full py-1 px-3 font-semibold mt-2">
    //           Rectify
    //         </button>
    //         <button
    //           className="bg-blue-100 border border-blue-600 text-blue-500 rounded-full py-1 px-3 font-semibold mt-2"
    //           onClick={() => handleDelete(notification?._id)}
    //         >
    //           Delete
    //         </button>
    //         <button className="bg-blue-100 border border-blue-600 text-blue-500 rounded-full py-1 px-3 font-semibold mt-2">
    //           Archive
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex gap-[21px] justify-center items-center">
    //     <div className="flex flex-col gap-[7px]">
    //       <div className="flex gap-[10px] text-[14px] font-[400] font-[Outfit] text-[#000] text-opacity-[50%]">
    //         <img src="/images/carbon_time.svg" alt="" />
    //         <p>{moment(notification.createdAt).fromNow()}</p>
    //       </div>
    //       <p className="py-[7px] px-[10px] bg-[#f3f4f6] rounded-[4px] text-black text-opacity-[50%] text-[14px] font-[400] font-[Outfit] ">
    //         <p>{moment(notification.createdAt).format("Do MMMM YYYY")}</p>
    //       </p>
    //     </div>
    //     <img
    //       src="/images/VectorRightArrow.svg"
    //       className="w-[7px] h-[13px] text-black text-opacity-[50%] cursor-pointer"
    //       alt=""
    //     />
    //   </div>
    // </div>

    // <div className="bg-white rounded-2xl w-full py-5 px-4 flex flex-col md:flex-row justify-between items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
    //   <div className="flex gap-4 justify-center items-center">
    //     <img
    //       src={
    //         "https://gethire-student.vercel.app/static/media/Gethire%20SVG.e7e8d00d37dbfe10fc42a63f9eb11af6.svg"
    //       }
    //       className="w-[65px] h-[65px] rounded-full "
    //       alt="Notification Logo"
    //     />
    //     <div className="flex flex-col justify-center items-start gap-2">
    //       <div className="flex flex-col md:flex-row gap-4">
    //         <p className="text-lg font-medium font-[Outfit] text-gray-800">
    //           {notification?.text}
    //         </p>
    //       </div>
    //       <div className="flex gap-3 mt-2">
    //         <button className="bg-blue-50 border border-blue-600 text-blue-600 rounded-full py-1 px-4 font-semibold hover:bg-blue-100 transition-colors duration-200">
    //           Rectify
    //         </button>
    //         <button
    //           className="bg-blue-50 border border-blue-600 text-blue-600 rounded-full py-1 px-4 font-semibold hover:bg-blue-100 transition-colors duration-200"
    //           onClick={() => handleDelete(notification?._id)}
    //         >
    //           Delete
    //         </button>
    //         <button className="bg-blue-50 border border-blue-600 text-blue-600 rounded-full py-1 px-4 font-semibold hover:bg-blue-100 transition-colors duration-200">
    //           Archive
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex gap-5 justify-center items-center mt-4 md:mt-0">
    //     <div className="flex flex-col gap-2 items-center md:items-end">
    //       <div className="flex gap-2 items-center text-sm font-[Outfit] text-gray-500">
    //         <img src="/images/carbon_time.svg" alt="Time Icon" />
    //         <p>{moment(notification.createdAt).fromNow()}</p>
    //       </div>
    //       <p className="py-2 px-3 bg-gray-100 rounded-md text-sm font-[Outfit] text-gray-500">
    //         {moment(notification.createdAt).format("Do MMMM YYYY")}
    //       </p>
    //     </div>
    //     <img
    //       src="/images/VectorRightArrow.svg"
    //       className="w-3 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
    //       alt="Right Arrow"
    //     />
    //   </div>
    // </div>

    <div className="bg-white rounded-2xl w-full py-6 px-6 flex flex-col md:flex-row justify-between items-center shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex gap-6 justify-center items-center">
        <img
          src={
            "https://gethire-student.vercel.app/static/media/Gethire%20SVG.e7e8d00d37dbfe10fc42a63f9eb11af6.svg"
          }
          className="w-[65px] h-[65px] rounded-full shadow-sm border-2 border-white"
          alt="Notification Logo"
        />
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="text-xl font-semibold text-gray-400 font-[Outfit]">
            {notification?.text}
          </p>
          <div className="flex gap-3">
            <button className="bg-blue-100 text-blue-500 font-semibold rounded-full py-2 px-5 shadow-lg hover:bg-blue-200 transition-colors duration-300">
              Rectify
            </button>
            <button
              className="bg-red-50 text-red-300 font-semibold rounded-full py-2 px-5 shadow-lg hover:bg-red-100 transition-colors duration-300"
              onClick={() => handleDelete(notification?._id)}
            >
              Delete
            </button>
            <button className="bg-white text-blue-500 font-semibold rounded-full py-2 px-5 shadow-lg hover:bg-blue-100 transition-colors duration-300">
              Archive
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-center items-center mt-6 md:mt-0">
        <div className="flex flex-col gap-3 items-center md:items-end">
          <div className="flex gap-3 items-center text-sm font-[Outfit] text-gray-400 opacity-80">
            <img src="/images/carbon_time.svg" alt="Time Icon" />
            <p>{moment(notification.createdAt).fromNow()}</p>
          </div>
          <p className="py-2 px-4 bg-white bg-opacity-20 rounded-md text-sm font-[Outfit] text-gray-400">
            {moment(notification.createdAt).format("Do MMMM YYYY")}
          </p>
        </div>
        <img
          src="/images/VectorRightArrow.svg"
          className="w-4 h-6 text-white opacity-80 cursor-pointer hover:opacity-100 transition-opacity duration-300"
          alt="Right Arrow"
        />
      </div>
    </div>


  );
};

export default Notification;

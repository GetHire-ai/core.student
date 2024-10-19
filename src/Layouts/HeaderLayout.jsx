import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom/dist";

const HeaderLayout = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden overflow-y-auto h-screen">
        <div className=" fixed w-full z-10">
          <Header />
        </div>
        <div className="flex-1 mt-[68px] flex bg-transparent flex-col overflow-y-auto overflow-x-hidden gap-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HeaderLayout;

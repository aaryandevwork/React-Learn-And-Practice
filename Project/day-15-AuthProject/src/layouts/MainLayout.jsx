import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex h-screen p-4 gap-5 grid grid-cols-[1fr_7fr]">
      <Navbar/>
      <div className="overflow-auto">
      <Outlet/>
      </div>
    </div>
  );
};

export default MainLayout;

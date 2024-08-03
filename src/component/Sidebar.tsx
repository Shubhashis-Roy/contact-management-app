import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" w-[75px] mt-[66px] h-full fixed bg-gray-300">
      <div className="ml-[7px] h-[70px] pt-3 hover:bg-gray-300 duration-200 rounded-lg cursor-pointer">
        <Link to="/">
          <p className="text-[12px] ml-[16px]">Contact</p>
        </Link>
      </div>
      <div className="ml-[7px] h-[70px] pt-3 hover:bg-gray-300 duration-200 rounded-lg cursor-pointer">
        <Link to="/chart">
          <p className="text-[12px] ml-[16px]">Chart</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

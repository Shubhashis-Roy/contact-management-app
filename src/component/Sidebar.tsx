import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineContactMail } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=" w-[80px] h-full fixed bg-gray-200">
      <div className="ml-[7px] mr-[7px] mt-[40px] h-[70px] pt-3 hover:bg-gray-300 duration-200 rounded-lg cursor-pointer">
        <Link to="/">
          <MdOutlineContactMail className="text-[28px] ml-[16px]" />
          <p className="text-[16px] ml-[1px]">Contact</p>
        </Link>
      </div>
      <div className="ml-[7px] mr-[7px] mt-[40px] h-[70px] pt-3 hover:bg-gray-300 duration-200 rounded-lg cursor-pointer">
        <Link to="/chart">
          <IoBarChartSharp className="text-[28px] ml-[16px]" />
          <p className="text-[16px] ml-[8px]">Chart</p>
        </Link>
      </div>
      <div className="ml-[7px] mr-[7px] mt-[40px] h-[70px] pt-3 hover:bg-gray-300 duration-200 rounded-lg cursor-pointer">
        <Link to="/map">
          <FaMapMarkerAlt className="text-[28px] ml-[16px]" />
          <p className="text-[16px] ml-[12px]">Map</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

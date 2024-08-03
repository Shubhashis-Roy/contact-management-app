import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../component/Card.tsx";
import Empty from "../component/Empty.tsx";

const ContactList = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <div className="flex w-full flex-col items-center min-h-full">
      {/* Button Container */}
      <div className="mt-12">
        <button
          type="button"
          className="text-white w-[400px] h-14 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleNavigate}
        >
          Create Contact
        </button>
      </div>

      {/* Card Container */}
      {/* <div className="w-full mt-8 ml-56"> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}

      <div className="mt-28">
        <Empty />
      </div>
    </div>
  );
};

export default ContactList;

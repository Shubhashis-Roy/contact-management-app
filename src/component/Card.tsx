import React from "react";

const Card = () => {
  return (
    <div className="bg-gray-100 h-[250px] shadow-md rounded-lg p-10 flex flex-col items-center">
      <div>
        <h2 className="text-xl mt-2 font-medium mb-2">Name: Subhashis Roy</h2>
        <h2 className="text-xl font-medium mb-2">
          Status: <span className="text-blue-600">Active</span>
        </h2>
      </div>
      <div className="flex space-x-2 pt-16 ">
        <button
          // onClick={() => handleEdit(index)}
          className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-2 px-8 rounded w-1/2" // Use w-1/2
        >
          Edit
        </button>
        <button
          // onClick={() => handleDelete(index)}
          className="bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded w-1/2" // Use w-1/2
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;

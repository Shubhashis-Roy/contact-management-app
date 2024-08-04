import React from "react";

interface CardProps {
  key: React.Key;
  firstName: string;
  lastName: string;
  status: string;
  handleDelete: () => void;
  handleEdit: () => void;
}

const Card: React.FC<CardProps> = ({
  // const Card = ({
  key,
  firstName,
  lastName,
  status,
  handleDelete,
  handleEdit,
}) => {
  const color = status === "Active" ? "text-blue-600" : "text-red-500";

  return (
    <div className="bg-gray-100 h-[250px] shadow-md rounded-lg p-10 flex flex-col items-center">
      <div>
        <h2 className="text-xl mt-2 font-medium mb-2">
          Name: {firstName + " " + lastName}
        </h2>
        <h2 className="text-xl font-medium mb-2">
          Status: <span className={color}>{status}</span>
        </h2>
      </div>
      <div className="flex space-x-2 pt-16 ">
        <button
          onClick={handleEdit}
          className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-2 px-8 rounded w-1/2"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500  hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded w-1/2" // Use w-1/2
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;

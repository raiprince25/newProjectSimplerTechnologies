import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div className="bg-white/40 backdrop-blur-md shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;

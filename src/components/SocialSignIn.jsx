import React from "react";
// import { ReactComponent as IMDBbIcon } from "../assets/IMDb_Logo_Square.svg";

const SocialSignIn = ({ icon, title }) => {
  return (
    <div className="cursor-pointer">
      <div className="px-4 py-2 border flex items-center space-x-4 rounded-md">
        {icon}
        <span className="text-gray-55 font-bold tracking-[1px] text-14 ">{title}</span>
      </div>
    </div>
  );
};

export default SocialSignIn;

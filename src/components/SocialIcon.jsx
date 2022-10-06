import React from "react";

const SocialIcon = ({ icon }) => {
  return (
    <div>
      <a href="" className=" h-12 w-12 flex-center hover:bg-hover rounded-full">
        {icon}
      </a>
    </div>
  );
};

export default SocialIcon;

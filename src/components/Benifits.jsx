import React from "react";

const Benifits = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-14 text-gray-80 leading-5 tracking-wide font-bold  ">{title}</h3>
      <p className="text-14">{description}</p>
    </div>
  );
};

export default Benifits;

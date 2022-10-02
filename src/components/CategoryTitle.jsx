import React from "react";

const CategoryTitle = ({ title }) => {
  return (
    <div className="content-container py-1 ">
      <h2 className="text-32 leading-10 font-medium text-yellow-150">{title}</h2>
    </div>
  );
};

export default CategoryTitle;

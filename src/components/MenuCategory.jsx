import React from "react";

const MenuCategory = ({ icon, title }) => {
  return (
    <div>
      <div className="flex items-center space-x-3">
        {icon}
        <h2 className="text-28 font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default MenuCategory;

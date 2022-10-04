import React, { useEffect, useState } from "react";

const UserInfo = ({ label, type, setForm }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setForm((e) => ({ ...e, [label]: value }));
    return () => {};
  }, [value]);

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-14 font-semibold">
        {label}
      </label>
      <input
        value={value}
        name={label}
        type={type}
        id={label}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none border border-gray-50 placeholder:text-14 px-2 py-1 rounded"
        required
      />
    </div>
  );
};
export default UserInfo;

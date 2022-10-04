import React, { useEffect, useState } from "react";

const User = ({ type, name }) => {
  const [form, setForm] = useState({});
  const [value, setValue] = useState("");

  useEffect(() => {
    setForm((e) => ({ ...e, [name]: value }));
    console.log(form);
  }, [value]);

  return (
    <input
      type={type}
      value={value}
      name={name}
      //   onChange={(e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      className="border"
      required
    />
  );
};

const Demo = () => {
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        console.log("run");
      }}
    >
      <User type="text" name="name" />
      <User type="password" name="password" />
      <input type="submit" value="submit" name="submit" />
    </form>
  );
};

export default Demo;

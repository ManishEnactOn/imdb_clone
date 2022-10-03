import React, { useEffect, useState } from "react";
import { auth, app } from "../firebase/firebase";
import UserInfo, { userData } from "../components/UserInfo";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log({ form });
    return () => {};
  }, [form]);

  const getUserData = () => {
    if (
      form.UserName &&
      form.Email &&
      form.Password &&
      form["Re-enter Password"] &&
      form.Password === form["Re-enter Password"]
    ) {
      createUserWithEmailAndPassword(auth, form.Email, form.Password)
        .then((res) => console.log("firebase:", res))
        .catch((error) => {
          setErrorMessage(error.code);
          setTimeout(() => {
            setErrorMessage("");
          }, 2000);
        });
    }
    if (form.Password !== form["Re-enter Password"]) {
      setErrorMessage("Password is not same");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <div className="max-w-[348px] mx-auto">
      <div className="imdb-logo cursor-pointer flex justify-center my-4">
        <img src="./images/imdb-logo.svg" className="w-28 h-14" alt="imdb-logo" />
      </div>

      <div className="px-4 py-4 border border-gray-50 rounded space-y-4">
        <h1 className="text-28 font-normal">Create account</h1>
        <div className="space-y-4">
          {/* <form  /> */}
          <UserInfo label="UserName" type="text" setForm={setForm} />
          <UserInfo label="Email" type="email" setForm={setForm} />
          <UserInfo label="Password" type="password" setForm={setForm} />
          <UserInfo label="Re-enter Password" type="password" setForm={setForm} />
        </div>
        <div>
          {/* <input type="submit" className="py-2 bg-yellow-150 w-full rounded text-14" onClick={getUserData}>
            Create your IMDb account
          </input> */}
          <button className="py-2 bg-yellow-150 w-full rounded text-14" onClick={getUserData}>
            Create your IMDb account
          </button>
        </div>
        <h5 className="text-14">
          Already have an account?
          <button
            className="text-blue-50  hover:border-b-2 border-b-blue-50"
            onClick={() => {
              navigate("/Signin");
            }}
          >
            Sign in
          </button>
        </h5>
        <h6 className="errormsg bg-red-100 text-red-500 text-center rounded font-medium text-14">{errorMessage}</h6>
      </div>
    </div>
  );
};

export default Register;

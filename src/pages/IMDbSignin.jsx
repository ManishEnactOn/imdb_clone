import React, { useEffect, useState } from "react";
import UserInfo from "../components/UserInfo";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const IMDbSignin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log({ form });
    return () => {};
  }, [form]);

  const getUserSignIn = () => {
    if (form.Email && form.Password) {
      signInWithEmailAndPassword(auth, form.Email, form.Password)
        .then((res) => {
          console.log({ res });
          navigate("/");
        })
        .catch((error) => {
          setErrorMessage(error.code);
          setTimeout(() => {
            setErrorMessage("");
          }, 2000);
        });
    }
  };

  return (
    <div className="max-w-[348px] mx-auto">
      <div className="imdb-logo cursor-pointer flex justify-center my-4">
        <img src="./images/imdb-logo.svg" className="w-28 h-14" alt="imdb-logo" />
      </div>

      <div className="px-4 py-4 border border-gray-50 rounded space-y-4">
        <h1 className="text-28 font-normal">Sign in</h1>
        <div className="space-y-4">
          <UserInfo label="Email" type="email" setForm={setForm} />
          <UserInfo label="Password" type="password" setForm={setForm} />
        </div>
        <div>
          <button className="py-2 bg-yellow-150 w-full rounded text-14" onClick={getUserSignIn}>
            Sign in
          </button>
        </div>
        <button
          className="w-full bg-gray-10 py-1 rounded border border-primary text-14"
          onClick={() => {
            navigate("/register");
          }}
        >
          Create Your IMDb accounts
        </button>
        <h6 className="errormsg bg-red-100 text-red-500 text-center rounded font-medium text-14">{errorMessage}</h6>
      </div>
    </div>
  );
};

export default IMDbSignin;

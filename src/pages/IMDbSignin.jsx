import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import UserInfo from "../components/UserInfo";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const IMDbSignin = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    Email: "",
    Password: "",
  });

  var name, value;
  const setValue = (e) => {
    name = e.target.name;
    value = e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

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

      <div className="px-4 py-4 border border-gray-50 rounded space-y-4 m-1">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-28 font-normal">Sign in</h1>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-14 font-semibold">
                Email
              </label>
              <input
                value={form.Email}
                name="Email"
                type="email"
                id="email"
                onChange={setValue}
                className="outline-none border border-gray-50 placeholder:text-14 px-2 py-1 rounded"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-14 font-semibold">
                Password
              </label>
              <input
                value={form.Password}
                name="Password"
                type="password"
                id="password"
                onChange={setValue}
                className="outline-none border border-gray-50 placeholder:text-14 px-2 py-1 rounded"
                required
              />
            </div>
          </div>

          <div>
            <button className="py-2 bg-yellow-150 w-full rounded text-14" onClick={getUserSignIn}>
              Sign in
            </button>
          </div>
        </form>

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
{
  /* <UserInfo label="Email" type="email" setForm={setForm} />
            <UserInfo label="Password" type="password" setForm={setForm} /> */
}
// useEffect(() => {
//   console.log({ form });
//   return () => {};
// }, [form]);

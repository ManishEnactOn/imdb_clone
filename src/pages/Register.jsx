import React, { useState } from "react";
import { auth, app } from "../firebase/firebase";
// import UserInfo, { userData } from "../components/UserInfo";
import { Form, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    UserName: "",
    Email: "",
    Password: "",
    "Re-enter Password": "",
  });
  var name, value;
  const setValue = (e) => {
    name = e.target.name;
    value = e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const getUserData = async () => {
    if (
      form.UserName &&
      form.Email &&
      form.Password &&
      form["Re-enter Password"] &&
      form.Password === form["Re-enter Password"]
    ) {
      const response = await createUserWithEmailAndPassword(auth, form.Email, form.Password).catch((error) => {
        setErrorMessage(error.code);
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
      });

      if (response) {
        setForm({
          UserName: "",
          Email: "",
          Password: "",
          "Re-enter Password": "",
        });
        alert("Your account is created");
        // console.log(form);
      }
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
        <img src="./images/imdb-logo.svg" className="w-28 h-14" alt="IMDb-Logo" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="px-4 py-4 border border-gray-50 rounded space-y-4 m-1">
          <h1 className="text-28 font-normal">Create account</h1>

          <div action="submit" className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-14 font-semibold">
                UserName
              </label>
              <input
                value={form.UserName}
                name="UserName"
                type="text"
                id="username"
                onChange={setValue}
                className="outline-none border border-gray-50 placeholder:text-14 px-2 py-1 rounded"
                required
              />
            </div>
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
            <div className="flex flex-col">
              <label htmlFor="Re-enter password" className="text-14 font-semibold">
                Re-enter Password
              </label>
              <input
                value={form["Re-enter Password"]}
                name="Re-enter Password"
                type="password"
                id="Re-enter password"
                onChange={setValue}
                className="outline-none border border-gray-50 placeholder:text-14 px-2 py-1 rounded"
                required
              />
            </div>
          </div>
          <div>
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
          <h6 className="errorMsg bg-red-100 text-red-500 text-center rounded font-medium text-14">{errorMessage}</h6>
        </div>
      </form>
    </div>
  );
};

export default Register;
{
  /* <UserInfo label="UserName" type="text" setForm={setForm} />
            <UserInfo label="Email" type="email" setForm={setForm} />
            <UserInfo label="Password" type="password" setForm={setForm} />
            <UserInfo label="Re-enter Password" type="password" setForm={setForm} /> */
}
// useEffect(() => {
//   console.log("form", form);
//   // return () => {};
// }, [form]);

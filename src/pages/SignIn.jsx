import React from "react";
import SocialSignIn from "../components/SocialSignIn";
import { ReactComponent as IMDBbIcon } from "../assets/IMDb_Logo_Square.svg";
import { ReactComponent as GoogleIcon } from "../assets/google.svg";
import Benifits from "../components/Benifits";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const SignIn = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => navigate("/"))
      .catch((error) => console.log("error", error));
  };

  const socialSignIn = (e) => {
    if (e.target.innerText.toLowerCase().includes("imdb")) {
      navigate("/ImdbSignin");
    } else signInWithGoogle();
  };

  return (
    <div className="bg-gray-40 h-screen overflow-y-hidden ">
      <div className="signIn-container bg-white h-80">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1 h-full py-4">
          <div className="flex items-center sm:border-r border-r-gray-40 border-r-none">
            <div className="sm:max-w-[242px] max-w-sm mx-auto flex-auto">
              <div className="space-y-6 px-3">
                <h2 className="text-21 text-gray-80 leading-5 font-bold text-center">Sign in</h2>
                <div className="space-y-2" onClick={socialSignIn}>
                  <SocialSignIn icon={<IMDBbIcon className="h-6 w-6" />} title="Sign in with IMDb" />
                  <SocialSignIn icon={<GoogleIcon className="h-6 w-6" />} title="Sign in with Google" />
                </div>

                <button
                  className="newAccount bg-yellow-150 w-full font-bold py-2 rounded"
                  onClick={() => {
                    navigate("/Register");
                  }}
                >
                  Create a New Account
                </button>
              </div>
            </div>
          </div>
          <div className="sm:flex hidden items-center">
            <div className="space-y-6 pl-3">
              <h2 className="text-21 text-gray-80 leading-5 font-bold text-center">
                Benefits of your free IMDb account
              </h2>
              <div className="space-y-2">
                <Benifits title="Personalized Recommendations" description="Discover Shows you'll love" />
                <Benifits
                  title="Your Watchlist"
                  description="Track everything you want to watch and receive e-mail when movies open in theaters."
                />
                <Benifits title="Your Ratings" description="Rate and remember everything you've seen." />
                <Benifits
                  title="Contribute to IMDb"
                  description="Add data that will be seen by millions of people and get cool badges."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

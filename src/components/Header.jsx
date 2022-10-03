import React, { useState } from "react";
import useAuth from "../customhooks/use-auth";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { TvIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { ReactComponent as ImdbPrologo } from "../assets/imdb-pro-logo.svg";
import { ReactComponent as MovieIcon } from "../assets/movies.svg";
import { useNavigate } from "react-router-dom";
import MenuCategory from "./MenuCategory";
import SubCategory from "./SubCategory";
import { useRecoilState } from "recoil";
import { watchListSelector } from "../atom";

const Header = () => {
  const [text, setText] = useRecoilState(watchListSelector);
  const { isUser, _user, logout } = useAuth();
  // console.log("isUser", isUser, "user", _user.uid);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const userSignOut = () => {
    logout();
  };

  return (
    <div>
      {/* ******* Menu Section ********* */}
      <div className={`absolute z-[99] bg-primary h-full w-full text-white ${toggle ? "block" : "hidden"}`}>
        <div className="signIn-container">
          <div className="flex-between py-8">
            <div className="imdb-logo cursor-pointer rounded overflow-hidden">
              <img src="/images/imdb-logo.svg" className="w-28 h-12" alt="imdb-logo" />
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <button className="close h-10 w-10 rounded-full bg-yellow-150"></button>
              <XMarkIcon className="absolute top-[20%] left-[20%] text-black h-6 " />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div>
              <MenuCategory icon={<MovieIcon className="text-yellow-150" />} title="Movies" />
              <div className=" flex flex-col space-y-3 pl-9 pt-4">
                <SubCategory title="Release Calender" />
                <SubCategory title="Top 250 Movies" />
                <SubCategory title="Most Popular Movies" />
                <SubCategory title="Top Box Office" />
              </div>
            </div>
            <div>
              <MenuCategory icon={<TvIcon className="text-yellow-150 h-6" />} title="Tv Shows" />
              <div className=" flex flex-col space-y-3 pl-9 pt-4">
                <SubCategory title="What's on TV & Streaming" />
                <SubCategory title="Top 250 TV Shows" />
                <SubCategory title="Most Popular TV Shows" />
                <SubCategory title="India TV Spotlight" />
              </div>
            </div>
            <div>
              <MenuCategory icon={<StarIcon className="text-yellow-150 h-6" />} title="Awards & Events" />
              <div className=" flex flex-col space-y-3 pl-9 pt-4">
                <SubCategory title="Oscars" />
                <SubCategory title="Best Picture Winners" />
                <SubCategory title="New York Comic-Con" />
                <SubCategory title="Festival Central" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *********************** */}
      <div className="py-3 bg-secondary">
        <div className="content-container flex items-center space-x-1">
          <div
            className="imdb-logo cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/images/imdb-logo.svg" className="w-16 h-8" alt="imdb-logo" />
          </div>
          <div
            className="menu flex-center px-4 cursor-pointer py-1 hover:bg-hover rounded"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
            <span className="text-14 text-white font-medium ">Menu</span>
          </div>
          <div className="searchBar w-[720px] bg-white rounded-md flex">
            <div className="dropdown-menu flex items-center w-14 border-r border-r-gray-50 space-x-2 px-2 py-1  ">
              <span className="text-black text-14 leading-6  font-medium ">All</span>
              <ChevronDownIcon className="h-4 w-4 text-black" />
            </div>
            <div className="search flex-between flex-1 px-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search IMBb"
                className=" w-full placeholder:text-gray-50 outline-none"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-slate-700" />
            </div>
          </div>
          <div
            className="watchList flex cursor-pointer px-4 py-1 hover:bg-hover rounded space-x-1"
            onClick={() => {
              navigate("/watchlist");
            }}
          >
            <BookmarkIcon className="h-5 w-5 text-white" />
            <span className="text-white text-14 leading-6 font-medium ">Watchlist</span>
            {/* <span className="text-red-600 font-bold">{watchListCart ? watchListCart : 0}</span> */}
            {/* <span className="text-red-600 font-bold">{watchListCart}</span> */}
          </div>
          <button
            className={`signin  ${isUser ? "hidden" : "block"}
             text-white text-14 leading-6 font-medium px-4 py-1 hover:bg-hover rounded`}
            onClick={() => {
              navigate("/signIn");
            }}
          >
            Sign In
          </button>
          <button
            className={` signin  ${isUser ? "block" : "hidden"}
              text-white text-14 leading-6 font-medium px-4 py-1 hover:bg-hover rounded`}
            onClick={userSignOut}
          >
            Sign out
          </button>
          <button className="language text-white text-14 leading-6 font-medium px-4 py-1 hover:bg-hover rounded">
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
// const watchListCart = useMemo(() => {
//   setTimeout(() => {
//     var currentUseruid = auth.currentUser.uid;
//     let data = text.slice();
//     let getId = data.find((id) => (id = currentUseruid));
//     let cart = getId.watchListId.length;
//     return cart;
//   }, 1000);
// }, []);
// console.log(watchListCart);

// const [isUser, setIsUser] = useState(false);

// useEffect(() => {
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       setIsUser(true);
//     } else {
//       setIsUser(false);
//     }
//   });
// }, [auth]);

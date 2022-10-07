import React, { useEffect, useState } from "react";
import useAuth from "../customhooks/use-auth";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { TvIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { ReactComponent as MovieIcon } from "../assets/movies.svg";
import { NavLink, useNavigate } from "react-router-dom";
import MenuCategory from "./MenuCategory";
import SubCategory from "./SubCategory";
import { useRecoilState } from "recoil";
import { watchListSelector } from "../atom";
import SearchMovie from "./SearchMovie";

const API_KEY = process.env.REACT_APP_API_KEY;
const searchUrl = `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}`;
const Header = () => {
  const [title, setTitle] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [text, setText] = useRecoilState(watchListSelector);
  const { isUser, _user, logout } = useAuth();
  // console.log("isUser", isUser, "user", _user.uid);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  var currentUserData;
  if (isUser) {
    currentUserData = text.find((item) => item.uid === _user.uid);
    // console.log("currentUserData", currentUserData);
  }
  const userSignOut = () => {
    logout();
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      fetch(`${searchUrl}&query=${title}`)
        .then((res) => res.json())
        .then((data) => setSearchData(data.results));
    }, 500);
    return () => clearTimeout(timeOut);
  }, [title]);

  const searchByTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <header>
      {/* ******* Menu Section ********* */}
      <div
        className={`fixed z-[99] bg-primary h-screen overflow-y-auto w-full text-white ${toggle ? "block" : "hidden"}`}
      >
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

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:max-w-full max-w-[300px] sm:mx-none mx-auto justify-center gap-2">
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
        <div className="content-container flex items-center justify-between space-x-3">
          <div
            className="absolute text-red-600 min-h-40 bg-gray-95 z-[100] top-12 xl:max-w-[700px]
                max-w-md translate-x-[250px] rounded"
          >
            {searchData &&
              searchData.slice(0, 5).map((data) => <SearchMovie data={data} key={data.id} setTitle={setTitle} />)}
          </div>

          <div className="flex items-center space-x-2">
            <div
              className="imdb-logo cursor-pointer lg:order-1 order-2"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src="/images/imdb-logo.svg" className="w-16 h-8" alt="imdb-logo" />
            </div>
            <div
              className="menu flex-center px-4 cursor-pointer py-1 hover:bg-hover rounded lg:order-2 order-1"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
              <span className="text-14 text-white font-medium lg:block hidden">Menu</span>
            </div>
          </div>
          <div className="searchBar flex-1 bg-white rounded-md sm:flex hidden">
            <div className="dropdown-menu flex items-center w-14 border-r border-r-gray-50 space-x-2 px-2 py-1  ">
              <span className="text-black text-14 leading-6  font-medium  ">All</span>
              <ChevronDownIcon className="h-4 w-4 text-black" />
            </div>
            <div className="search flex-between flex-1 px-3">
              <input
                type="text"
                name="movieTitle"
                id="title"
                value={title}
                placeholder="Search IMBb"
                onChange={searchByTitle}
                className=" w-full placeholder:text-gray-50  placeholder:text-14 outline-none"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-slate-700" />
            </div>
          </div>
          <div className="sm:hidden flex flex-auto justify-end">
            <MagnifyingGlassIcon className="h-5 w-5 text-white" />
          </div>
          <div className="flex items-center">
            <div
              className="watchList lg:flex hidden cursor-pointer px-4 py-1 hover:bg-hover rounded space-x-1"
              onClick={() => {
                if (isUser) navigate("/watchlist");
                else navigate("/signIn");
              }}
            >
              <BookmarkIcon className="h-5 w-5 text-white" />
              <span className="text-white text-14 leading-6 font-medium ">Watchlist</span>
              <span
                className={` ${
                  _user.uid && currentUserData?.watchListId.length > 0 ? "block" : "hidden"
                }  h-5 w-5 text-center rounded-full bg-yellow-150 text-black text-14 font-bold`}
              >
                {currentUserData?.watchListId ? currentUserData.watchListId.length : 0}
              </span>
            </div>
            <button
              className={`signin  ${isUser ? "hidden" : "block"}
             text-white text-14 leading-6 font-medium px-3 py-1 hover:bg-hover rounded`}
              onClick={() => {
                navigate("/signIn");
              }}
            >
              Sign In
            </button>
            <button
              className={` signin  ${isUser ? "block" : "hidden"}
              text-white text-14 leading-6 font-medium px-3 py-1 hover:bg-hover rounded`}
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
    </header>
  );
};

export default Header;

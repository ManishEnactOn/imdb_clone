import React, { useContext, useEffect, useState } from "react";
import useAuth from "../customhooks/use-auth";

import { NavLink } from "react-router-dom";
import { ReactComponent as WatchListIcon } from "../assets/watchlisticon.svg";
import { ReactComponent as PlusIcon } from "../assets/plusicon.svg";
import { ReactComponent as StarIcon } from "../assets/star.svg";
import { ReactComponent as WatchNow } from "../assets/watchnow.svg";
import { ReactComponent as PauseIcon } from "../assets/pausebutton.svg";
import { ReactComponent as CheckIcon } from "../assets/check.svg";
import { AppContext } from "../context/context";
import { useRecoilState } from "recoil";
import { watchListSelector } from "../atom";

const Movie = ({ data }) => {
  const { _user } = useAuth();
  const [text, setText] = useRecoilState(watchListSelector);
  const [isSelect, setIsSelect] = useState(false);
  // const { auth } = useContext(AppContext);
  var exists;
  // var currentUseruid;
  // useEffect(() => {
  //   setTimeout(() => {
  //     currentUseruid = auth.currentUser.uid;
  //   }, 1000);
  // });

  const addWatchList = (id) => {
    exists = text.find((item) => item.uid === currentUseruid);
    if (exists) {
      setText(
        text.map((item) =>
          item.uid === currentUseruid
            ? {
                ...exists,
                watchListId: exists.watchListId ? [...exists.watchListId, id] : [id],
              }
            : item
        )
      );
    } else {
      setText((prev) => [...prev, { uid: currentUseruid, watchListId: [id] }]);
    }
  };
  const removeWatchList = (id) => {
    exists = text.find((item) => item.uid === currentUseruid);
    if (exists) {
      setText(
        text.map((item) =>
          item.uid === currentUseruid
            ? {
                ...exists,
                watchListId: exists.watchListId.filter((id1) => id1 !== id),
              }
            : item
        )
      );
    }
  };
  console.log(text);

  const getMovieId = (id) => {
    setIsSelect(!isSelect);
    if (!isSelect) addWatchList(id);
    else removeWatchList(id);
  };

  return (
    <div className="relative">
      <div onClick={() => getMovieId(data.id)}>
        <WatchListIcon className={`absolute z-50 cursor-pointer ${isSelect && "fill-yellow-400"}`} />
        <PlusIcon className={`absolute cursor-pointer text-white z-50 ${isSelect ? "hidden" : "block"} `} />
        <CheckIcon className={`absolute cursor-pointer text-black z-50 h-6 w-6 ${isSelect ? "block" : "hidden"}`} />
      </div>
      <NavLink to={`/singlemovie/${data.id}`}>
        <div className="cursor-pointer">
          <div>
            <div className="moviePoster h-[274px]">
              <img
                src={`${process.env.REACT_APP_IMG_PATH}${data.backdrop_path}`}
                alt="movie poster"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="movieInfo px-2 py-2 bg-gray-90 text-white rounded-b-md">
              <div className="flex item-center space-x-2">
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <span className="rating">{data.vote_average}</span>
              </div>
              <h3 className="py-2">{data.title} </h3>
              <div className="watchNowBtn w-full bg-gray-80 flex items-center justify-center rounded hover:bg-hover cursor-pointer">
                <button className="text-[14px] text-blue-50 font-medium py-2">Watch now</button>
                <WatchNow className="text-blue-50" />
              </div>

              <div className="trailer flex justify-center items-center mt-2 px-2 py-2 cursor-pointer hover:bg-hover">
                <PauseIcon />
                <span>Trailer</span>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Movie;

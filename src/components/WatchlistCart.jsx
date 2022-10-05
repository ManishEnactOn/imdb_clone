import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import useAuth from "../customhooks/use-auth";

import React, { useState } from "react";
import { ReactComponent as StarIcon } from "../assets/star.svg";
import { ReactComponent as WatchListIcon } from "../assets/watchlisticon.svg";
import { useRecoilState } from "recoil";
import { watchListSelector } from "../atom";
import { useNavigate } from "react-router-dom";

const WatchlistCart = ({ data }) => {
  const navigate = useNavigate();

  const [isSelect, setIsSelect] = useState(true);
  const { _user, isUser } = useAuth();
  const [text, setText] = useRecoilState(watchListSelector);

  var exists;

  const addWatchList = (id) => {
    if (isUser) {
      exists = text.find((item) => item.uid === _user.uid);
      if (exists) {
        setText(
          text.map((item) =>
            item.uid === _user.uid
              ? {
                  ...exists,
                  watchListId: exists.watchListId ? [...exists.watchListId, id] : [id],
                }
              : item
          )
        );
      } else {
        setText((prev) => [...prev, { uid: _user.uid, watchListId: [id] }]);
      }
    } else {
      navigate("/Signin");
    }
  };
  const removeWatchList = (id) => {
    exists = text.find((item) => item.uid === _user.uid);
    if (exists) {
      setText(
        text.map((item) =>
          item.uid === _user.uid
            ? {
                ...exists,
                watchListId: exists.watchListId.filter((id1) => id1 !== id),
              }
            : item
        )
      );
    }
  };

  const getMovieId = (id) => {
    setIsSelect(!isSelect);
    if (!isSelect) addWatchList(id);
    else removeWatchList(id);
    // console.log(id);
  };

  return (
    <>
      <div className="border-b-2 pt-2">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2 bg-slate-400 h-36 relative">
            <div onClick={() => getMovieId(data.id)}>
              <WatchListIcon className={`absolute z-50 cursor-pointer ${isSelect && "fill-yellow-400"} `} />
              <PlusIcon
                className={`absolute cursor-pointer text-white z-50 h-6 w-6 ${isSelect ? "hidden" : "block"}`}
              />
              <CheckIcon
                className={`absolute cursor-pointer text-black z-50 h-6 w-6 ${isSelect ? "block" : "hidden"}`}
              />
            </div>
            <img
              src={`${process.env.REACT_APP_IMG_PATH}${data.backdrop_path}`}
              alt="movie poster"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="col-span-10 bg-white">
            <div>
              <h2 className="title text-20 text-blue-50 font-semibold">{data.title}</h2>
              <div className="space-x-2 text-gray-55">
                <span className="releaseDate text-14">{data.release_date}</span>

                {data.genres.map((genre) => (
                  <span className="genre text-14 ">{genre.name}</span>
                ))}
              </div>
            </div>

            <div className="rating flex items-center py-1">
              <StarIcon className="h-4 text-yellow-150" />
              <span className="text-14">{data.vote_average}</span>
            </div>
            <p className="text-16 lg:block hidden ">{data.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchlistCart;

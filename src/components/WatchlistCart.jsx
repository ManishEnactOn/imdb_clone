import React from "react";
import { ReactComponent as StarIcon } from "../assets/star.svg";

const WatchlistCart = ({ data }) => {
  return (
    <div className="border-b-2 pt-2">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 bg-slate-400 h-36">
          <img
            src={`${process.env.REACT_APP_IMG_PATH}${data.backdrop_path}`}
            alt="movie poster"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="col-span-10 bg-white">
          <h2 className="title text-20 text-blue-50 font-semibold">{data.title}</h2>
          <div className="space-x-2 text-gray-55">
            <span className="releaseDate text-14">{data.release_date}</span>
            <span className="genre text-14 ">Action</span>
          </div>

          <div className="rating flex items-center py-1">
            <StarIcon className="h-4 text-yellow-150" />
            <span className="text-14">{data.vote_average}</span>
          </div>
          <p className="text-16 ">{data.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default WatchlistCart;

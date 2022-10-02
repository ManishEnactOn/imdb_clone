import React from "react";
import { ReactComponent as Playbutton } from "../assets/play-button.svg";

const NextMovie = ({ movie }) => {
  return (
    <div>
      <div className="grid grid-cols-8 gap-3 cursor-pointer">
        <div className="col-span-2 bg-lime-200 h-32">
          <img
            src={`${process.env.REACT_APP_IMG_PATH}${movie.backdrop_path}`}
            alt="movie poster"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-6">
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9">
              <Playbutton className="hover:text-yellow-150 cursor-pointer h-full w-full" />
            </div>
            <span className="pt-2 text-gray-60 font-medium">4:28</span>
          </div>

          <div className="title">{movie.original_title}</div>
          <div className="description text-gray-60 font-medium text-14">{movie.overview.slice(0, 40)}</div>
        </div>
      </div>
    </div>
  );
};

export default NextMovie;

import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as PlayButtonIcon } from "../assets/play-button.svg";

const SearchMovie = ({ data, setTitle }) => {
  return (
    <div>
      <NavLink to={`/singlemovie/${data.id}`} onClick={() => setTitle("")}>
        <div className="grid grid-cols-12 gap-2 p-1 border-b border-b-white rounded">
          <div className="col-span-3 h-36">
            <img
              src={`${process.env.REACT_APP_IMG_PATH}${data.backdrop_path}`}
              alt="movie poster"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-9  h-36 space-y-2 p-2 rounded">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9">
                <PlayButtonIcon className="hover:text-yellow-150 cursor-pointer text-white h-full w-full" />
              </div>
              <span className="pt-2 text-gray-60 font-medium">{data.vote_average}</span>
            </div>

            <div className="title text-white">{data.original_title}</div>
            <div className="description lg:block hidden text-gray-60 font-medium  text-14 h-full overflow-hidden">
              {data.overview.slice(0, 150)}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default SearchMovie;

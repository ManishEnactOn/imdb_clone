import React, { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import WatchlistCart from "../components/WatchlistCart";
import { getAuth } from "firebase/auth";
import { useRecoilState } from "recoil";
import { watchListSelector } from "../atom";
const singleMovieApi = `https://api.themoviedb.org/3/movie/634649?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

const WatchList = () => {
  const [singleMovie, setSingleMovie] = useState([]);
  const [text, setText] = useRecoilState(watchListSelector);
  const auth = getAuth();

  // useMemo(() => {
  //   var currentUseruid = auth.currentUser.uid;
  //   let data = text.slice();
  //   let getId = data.find((id) => (id = currentUseruid));
  //   // let watchlist = data.filter(({ genre_ids: id1 }) => selectedList.some(({ id: id2 }) => id1.includes(id2)));
  // }, []);

  useEffect(() => {
    fetch(singleMovieApi)
      .then((res) => res.json())
      .then((singleMovie) =>
        setTimeout(() => {
          setSingleMovie(singleMovie);
        }, 1000)
      );
  }, []);
  //   console.log("movie:", singleMovie);
  return (
    <div className="bg-gray-40 h-screen">
      <div div className="signIn-container bg-white">
        <div className="p-6">
          <h2 className="text-28 font-normal text-gray-55">Your Watchlist</h2>
          <div className="flex items-center space-x-1">
            <LockClosedIcon className="h-5 text-gray-30 " />
            <h3 className="text-12 font-bold text-gray-30 mt-1">PRIVATE</h3>
          </div>
        </div>

        <div className="sortWatchList px-7 py-3 flex-between border-y-2 ">
          <div className="space-x-2 text-14 text-gray-55">
            <span>0</span>
            <span>Titles</span>
          </div>

          <div className="flex items-center space-x-2">
            <h4 className="text-14 font-normal text-gray-70">Sort by:</h4>
            <select className="px-4 py-1 border-2 rounded text-14 font-normal text-gray-70">
              <option value="grapefruit">List Order</option>
              <option value="grapefruit">Alphabetical</option>
              <option value="lime">IMDb Rating</option>
              <option value="coconut">Popularity</option>
              <option value="mango">Release Date</option>
            </select>
          </div>
        </div>
        <div className="watchList px-6 py-2">
          <WatchlistCart data={singleMovie} />
        </div>
      </div>
    </div>
  );
};

export default WatchList;

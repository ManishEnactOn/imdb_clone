import React, { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import WatchlistCart from "../components/WatchlistCart";
import { useRecoilState } from "recoil";
import { watchListSelector } from "../atom";
import useAuth from "../customhooks/use-auth";
import { Link } from "react-router-dom";
import { url, API_KEY } from "../config";
const WatchList = () => {
  const [watchListData, setWatchListData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [text, setText] = useRecoilState(watchListSelector);
  // const text = useRecoilValue(watchListSelector);
  // const setText=useSetRecoilState(watchListSelector);
  const { _user } = useAuth();
  var currentData;
  let currentUserData = text.find((item) => item.uid === _user.uid);

  const myWatchList = () => {
    const promises = currentUserData.watchListId.map(async (data) => {
      return fetch(`${url}${data}?api_key=${API_KEY}&language=en-US`).then((response) => {
        return response.json();
      });
    });

    Promise.all(promises).then((results) => {
      const list = results.map((result) => result);
      console.log("list", list);
      setWatchListData(list);
      setDefaultData(list);
    });
  };
  useEffect(() => {
    myWatchList();
  }, [currentUserData.watchListId]);

  const sortByRatings = () => {
    currentData = watchListData.slice();
    setWatchListData(currentData.sort((a, b) => a.vote_average - b.vote_average));
  };

  const sortByAlphabetical = () => {
    currentData = watchListData.slice();
    setWatchListData(currentData.sort((a, b) => a.title.localeCompare(b.title)));
  };

  const sortByPopularity = () => {
    currentData = watchListData.slice();
    setWatchListData(currentData.sort((a, b) => a.popularity - b.popularity));
  };

  const sortByReleaseDate = () => {
    currentData = watchListData.slice();
    setWatchListData(
      currentData.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime())
    );
  };

  const sortByListOrder = () => {
    console.log("defaultData", defaultData);
    setWatchListData(defaultData);
  };

  const optionHandler = (e) => {
    switch (e.target.value) {
      case "IMDb Rating":
        sortByRatings();
        break;
      case "Alphabetical":
        sortByAlphabetical();
        break;
      case "Popularity":
        sortByPopularity();
        break;
      case "Release Date":
        sortByReleaseDate();
        break;

      default:
        sortByListOrder();
        break;
    }
  };

  return (
    <div className="bg-gray-40 min-h-screen">
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
            <span>{currentUserData.watchListId.length}</span>
            <span>Titles</span>
          </div>

          <div className="flex items-center space-x-2">
            <h4 className="text-14 font-normal text-gray-70">Sort by:</h4>
            <select onChange={optionHandler} className="px-4 py-1 border-2 rounded text-14 font-normal text-gray-70">
              <option value="listOrder">List Order</option>
              <option value="Alphabetical">Alphabetical</option>
              <option value="IMDb Rating">IMDb Rating</option>
              <option value="Popularity">Popularity</option>
              <option value="Release Date">Release Date</option>
            </select>
          </div>
        </div>

        {watchListData.length > 0 ? (
          <>
            {watchListData.map((watchList) => (
              <WatchlistCart key={watchList.id} data={watchList} />
            ))}
          </>
        ) : (
          <>
            <div className="min-h-[400px] flex flex-col justify-center items-center ">
              <h1 className="text-24 text-gray-50 font-bold">Your WatchList is Empty</h1>
              <p className="text-gray-50">
                Add movies and shows to your WatchList to keep track of what you want to watch.
              </p>
              <Link to="/" className="text-gray-70">
                Popular Movies
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WatchList;

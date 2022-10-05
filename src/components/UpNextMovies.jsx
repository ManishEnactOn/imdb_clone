import React from "react";
import NextMovie from "./NextMovie";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import useFetchUrl from "../customhooks/fetchUrl";
import PopularMoviePoster from "./PopularMoviePoster";
import { useNavigate } from "react-router-dom";
import NextMovieSkeletonLoader from "../components/NextMovieSkeletonLoader";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const upComingMovie = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

const UpNextMovies = () => {
  const navigate = useNavigate();
  const { data, loading } = useFetchUrl(upComingMovie);
  return (
    <div className="content-container">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="lg:col-span-8 col-span-12 bg-primary h-[547px]">
          {loading ? (
            <>
              <SkeletonTheme baseColor="#121212" highlightColor="#333333">
                <Skeleton className="h-full" />
              </SkeletonTheme>
            </>
          ) : (
            <>
              <PopularMoviePoster movieData={data} />
            </>
          )}
        </div>
        <div className="col-span-4 bg-primary lg:block hidden">
          <h2 className="text-yellow-150 text-[20px] leading-6 tracking-[0.25px] font-semibold pt-1 pb-5">Up next</h2>
          <div className="upNextMovies p-4 bg-secondary rounded text-white space-y-4 ">
            {loading ? (
              // "Loading..."

              <>
                {Array.from(Array(3).keys()).map((number) => (
                  <NextMovieSkeletonLoader />
                ))}
              </>
            ) : (
              <>{data.length > 0 && data.slice(0, 3).map((movie) => <NextMovie movie={movie} key={movie.id} />)}</>
            )}
          </div>
          <div className="browse flex space-x-1 pt-3 items-center cursor-pointer">
            <button
              className="text-20 text-white font-bold hover:text-yellow-150 px-4"
              onClick={() => {
                navigate("/upcoming");
              }}
            >
              Browse Trailer
            </button>
            <ChevronRightIcon className="h-5 w-5 pt-1  text-white  hover:text-yellow-150" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpNextMovies;

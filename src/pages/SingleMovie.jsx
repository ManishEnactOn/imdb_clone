import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
const SingleMovie = () => {
  const { id } = useParams();
  const singleMovieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const navigate = useNavigate();
  const [singleMovie, setSingleMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(singleMovieApi)
      .then((res) => res.json())
      .then((singleMovie) =>
        setTimeout(() => {
          setSingleMovie(singleMovie);
          setLoading(false);
        }, 1500)
      );
  }, []);

  return (
    <section className="bg-primary min-h-screen">
      <div className="content-container">
        {loading ? (
          <>
            <div className=" text-white w-full text-center font-bold text-32">Loading....</div>
          </>
        ) : (
          <>
            <div className="md:grid flex flex-col grid-cols-12 gap-2 ">
              <div className=" col-span-8  bg-primary h-[547px]">
                {
                  <img
                    src={`${process.env.REACT_APP_IMG_PATH}${singleMovie.poster_path}`}
                    alt="movie poster"
                    className="w-full h-full object-cover"
                  />
                }
              </div>
              <div className="col-span-4 bg-secondary p-4 ">
                <div className="grid grid-cols-8  gap-3 cursor-pointer">
                  <div className="col-span-2 bg-lime-200 h-32">
                    <img
                      src={`${process.env.REACT_APP_IMG_PATH}${singleMovie.backdrop_path}`}
                      alt="movie poster"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-6">
                    <div className="title text-white">{singleMovie.title}</div>
                    <span className="description text-gray-60 font-medium text-14">{singleMovie.release_date}</span>
                    <h5 className="text-white">
                      Rating : <span className="text-gray-60"> {singleMovie.vote_average}</span>
                    </h5>
                  </div>
                </div>
                <hr className="my-4" />
                <div>
                  <h2 className="text-24 font-semibold text-white ">{singleMovie.title}</h2>
                  <div className="description text-white font-medium text-14">{singleMovie.overview}</div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="flex-center">
          <button
            className="text-black bg-white px-6 py-2 rounded mt-5"
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;

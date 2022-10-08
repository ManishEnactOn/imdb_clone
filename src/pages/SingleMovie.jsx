import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/arrowright.svg";
import HomeLayout from "../layouts/HomeLayout";
import { url, API_KEY } from "../config";

const SingleMovie = () => {
  const { id } = useParams();
  const singleMovieApi = `${url}${id}?api_key=${API_KEY}&language=en-US`;
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
    <HomeLayout>
      <section className="bg-primary ">
        <div className="content-container">
          {loading ? (
            <>
              <SkeletonTheme baseColor="#121212" highlightColor="#333333">
                <div className="md:grid flex flex-col grid-cols-12 gap-2 ">
                  <div className=" col-span-8 h-[547px]">
                    <Skeleton className="h-full" />
                  </div>
                  <div className="col-span-4 bg-secondary p-4 ">
                    <div className="grid grid-cols-8  gap-3 cursor-pointer">
                      <div className="col-span-2 h-32">
                        <Skeleton className="h-full" />
                      </div>
                      <div className="col-span-6">
                        <Skeleton count={3} />
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div>
                      <Skeleton count={1} />
                      <Skeleton count={1} height={50} />
                    </div>
                  </div>
                </div>
              </SkeletonTheme>
            </>
          ) : (
            <>
              <div className="md:grid flex flex-col grid-cols-12 gap-2 ">
                <div className=" col-span-8  bg-primary h-[547px]">
                  {
                    <img
                      src={`${process.env.REACT_APP_IMG_PATH}${singleMovie.poster_path}`}
                      alt="movie poster"
                      className="w-full h-full object-fill"
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
            <a
              href={`https://www.imdb.com/title/${singleMovie.imdb_id}`}
              className="text-black bg-yellow-150 font-bold px-6 py-2 flex-center  text-32 rounded mt-5 "
            >
              IMDb <ArrowRightIcon className="text-black h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default SingleMovie;

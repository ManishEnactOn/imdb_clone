import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Movie from "./Movie";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import MovieSkeletonLoader from "./MovieSkeletonLoader";
import useFetchUrl from "../customhooks/fetchUrl";

const PopularMovieApi = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
const PopularMovies = () => {
  const { data, loading } = useFetchUrl(PopularMovieApi);
  return (
    <div className="content-container relative">
      <Swiper slidesPerView={5} spaceBetween={35} navigation={true} modules={[Navigation]} className="mySwiper">
        {loading ? (
          <>
            <div className="grid grid-cols-5 gap-4 py-2">
              {Array.from(Array(5).keys()).map((number) => (
                <MovieSkeletonLoader />
              ))}
            </div>
          </>
        ) : (
          <>
            {data.map((data) => (
              <SwiperSlide key={data.id}>
                <Movie data={data} />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};

export default PopularMovies;

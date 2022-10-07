import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Movie from "./Movie";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import MovieSkeletonLoader from "./MovieSkeletonLoader";
import useFetchUrl from "../customhooks/fetchUrl";
const API_KEY = process.env.REACT_APP_API_KEY;
const PopularMovieApi = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
const PopularMovies = () => {
  const { data, loading } = useFetchUrl(PopularMovieApi);

  // const _data = useMemo(() => {
  //   const { data, loading } = useFetchUrl(PopularMovieApi);
  //   return data;
  // });
  // console.log(_data);

  // useEffect(() => {
  //   console.log("called");
  // }, []);

  return (
    <div className="content-container relative">
      <Swiper
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          520: {
            // when window width is >= 520px
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        {loading ? (
          <>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 py-2">
              {Array.from(Array(5).keys()).map((number) => (
                <MovieSkeletonLoader key={number} />
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

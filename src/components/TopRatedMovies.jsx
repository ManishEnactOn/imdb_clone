import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Movie from "./Movie";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import MovieSkeletonLoader from "./MovieSkeletonLoader";
import useFetchUrl from "../customhooks/fetchUrl";
const TopRatedMovies = () => {
  const { data, loading } = useFetchUrl("top_rated");
  const array = Array(5);
  return (
    <div className="content-container">
      <Swiper
        spaceBetween={35}
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
            <div className="grid grid-cols-5 gap-4 py-2">
              {array.map((number) => (
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

export default TopRatedMovies;

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Movie from "./Movie";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const PopularMovieApi = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
const PopularMovies = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    fetch(PopularMovieApi)
      .then((res) => res.json())
      .then((popularData) =>
        setTimeout(() => {
          setPopularMovie(popularData.results);
        }, 1000)
      );
  }, []);
  //  console.log("popularMovies:", popularData.results)
  return (
    <div className="content-container relative">
      <Swiper
        slidesPerView={5}
        spaceBetween={35}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {popularMovie.map((data) => (
          <SwiperSlide key={data.id}>
            <Movie data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularMovies;

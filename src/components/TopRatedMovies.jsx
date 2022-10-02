import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Movie from "./Movie";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const TopRatedMovieApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
const TopRatedMovies = () => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  useEffect(() => {
    fetch(TopRatedMovieApi)
      .then((res) => res.json())
      .then((topRatedData) =>
        setTimeout(() => {
          setTopRatedMovie(topRatedData.results);
        }, 1000)
      );
  }, []);
  return (
    <div className="content-container">
      <Swiper slidesPerView={5} spaceBetween={35} navigation={true} modules={[Navigation]} className="mySwiper">
        {topRatedMovie.map((data) => (
          <SwiperSlide key={data.id}>
            <Movie data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRatedMovies;

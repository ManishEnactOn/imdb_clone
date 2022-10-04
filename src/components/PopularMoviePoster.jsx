import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const PopularMoviePoster = ({ movieData }) => {
  return (
    <div className="h-full">
      <Swiper navigation={true} slidesPerView={1} modules={[Navigation]} className="mySwiper h-full">
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="h-full relative">
              <div className="text-white bg-primary/70 absolute px-4 bottom-0">
                <h1 className="text-32 font-bold ">{data.title}</h1>
                <h2 className="text-16">{data.overview}</h2>
              </div>
              <img
                src={`${process.env.REACT_APP_IMG_PATH}${data.poster_path}`}
                alt="poster_path"
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularMoviePoster;

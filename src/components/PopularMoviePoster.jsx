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
            <img
              src={`${process.env.REACT_APP_IMG_PATH}${data.poster_path}`}
              alt="poster_path"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularMoviePoster;
{
  // const [swiperRef, setSwiperRef] = useState();

  // const handleLeftClick = useCallback(() => {
  //   if (!swiperRef) return;
  //   swiperRef.slidePrev();
  // }, [swiperRef]);

  // const handleRightClick = useCallback(() => {
  //   if (!swiperRef) return;
  //   swiperRef.slideNext();
  // }, [swiperRef]);
  {
    /* <div className="relative">
        <button onClick={handleLeftClick} className="absolute z-50 translate-y-1/2 top1/2 ">
          left
        </button>
      </div>
      <Swiper slidesPerView={1} onSwiper={setSwiperRef} className="mySwiper h-full">
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <img
              src={`${process.env.REACT_APP_IMG_PATH}${data.poster_path}`}
              alt="poster_path"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button onClick={handleRightClick} className="  ">
          right
        </button>
      </div> */
  }
}
{
  /* ********************************************************************* */
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
const Banner = () => {
  return (
    <div className="pt-5 rounded-md ">
      <div className="wrapper">
        {" "}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop
          effect={"fade"}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="homeBanner h-[440px] bg-black rounded-md"
        >
          <SwiperSlide className="h-full bg-[url('https://img.gamesatis.com/slider/1109/pubg-mobile-ultimate-set-87001.webp')] bg-cover bg-center"></SwiperSlide>
          <SwiperSlide className="h-full bg-[url('https://img.gamesatis.com/slider/1106/lol-periler-meclisi-60240.webp')] bg-cover bg-center"></SwiperSlide>
          <SwiperSlide className="h-full bg-[url('https://img.gamesatis.com/slider/1104/ramazan-ayi-calisma-saatleri-16488.webp')] bg-cover bg-center"></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

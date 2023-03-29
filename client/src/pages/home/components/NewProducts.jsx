import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoVerified } from "react-icons/go";
import { MdVerifiedUser } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const NewProducts = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <div className="wrapper mx-auto">
        <h1 className="text-white  font-semibold text-2xl border-b py-3 my-5 ">
          For You
        </h1>{" "}
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            720: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          loop
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[390px] forYouBanner rounded-md"
        >
          {data.length !== 0
            ? data?.map((product, i) => (
                <SwiperSlide key={i} className="h-full ">
                  {/* PRODUCT */}
                </SwiperSlide>
              ))
            : [...Array(5).keys()].map((skeleton, i) => (
                <SwiperSlide key={i} className="h-full ">
                  {/* SKELETON */}
                  <div class="card w-52 h-[300px] bg-base-100 shadow-lg shadow-emerald-500  border border-emerald-400 mt-2 hover:-translate-y-2 transition-transform duration-500 hover:shadow-emerald-300   relative  group">
                    <figure>
                      <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg  "
                        alt="Shoes"
                      />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">
                        Shoes!
                        <div class="badge badge-secondary">NEW</div>
                      </h2>
                      <p className="line-clamp-2">
                        If a dog chews shoes whose shoes does he choose?
                      </p>
                      <div class="card-actions justify-between items-center">
                        <div className="text-lg font-semibold flex items-center text-2xl gap-2">
                          <GoVerified className="text-primary" />
                          <MdVerifiedUser />
                        </div>
                        <div className="text-lg font-semibold">
                          Price: <span className="text-green-600">30$</span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0 rounded-b-md bg-orange-500   opacity-0 px-9 group-hover:opacity-90  duration-700 group-hover:h-7  items-center justify-center text-white font-semibold">
                      {" "}
                      View
                    </div>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewProducts;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Newest car fleet/NewestCarCard.css";
import {clubSport,holden,oip,jeep, slid1, slid2,slid3,slid4 } from "./SlidImg/slider";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function NewestCarCard() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slid1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={clubSport} />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={holden} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oip} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={jeep} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

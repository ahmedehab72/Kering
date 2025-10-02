"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function BannerSlider() {
  const ads = [
    "Every thing you love here ✨",
    "Special Offer & Discounts 💥",
    "Best Wedding At All ✨",
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 1500, // every 2s
        disableOnInteraction: false,
      }}
      navigation={true}
      speed={2000} // smooth animation speed
      className="w-full h-[70px] bg-gray-200 px-4 "
    >
      {ads.map((ad, i) => (
        <SwiperSlide key={i}>
          <div className="flex items-center justify-center mt-5 text-xl font-bold">
            {ad}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

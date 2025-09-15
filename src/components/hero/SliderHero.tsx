"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slides } from "./sliderData";

const SliderHero = () => {
  return (
    <div className="w-full bg-transparent py-6 absolute bottom-0 pl-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={5} // number of icons visible
        grabCursor={true}
        autoplay={{
          delay: 500, // 1 second
          disableOnInteraction: false, // keep autoplay after user drag
        }}
        loop={true} // infinite loop
        breakpoints={{
          320: { slidesPerView: 5 },
          640: { slidesPerView: 9 },
          1024: { slidesPerView: 12 },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center">
            <Image
              src={slide.thumbnail}
              alt="brand"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHero;

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
import { Autoplay } from 'swiper/modules';

// const slides = [
//   {
//     id: 1,
//     type: "image",
//     src: "/images/heroImage1.jpeg",
//     brand: "Kering",
//     title: "Endless Narratives",
//     link: "/kering",
//     thumbnail: "/images/BAL_STORY_BRAND_DESKTOP_522c10a8f7.png",
//   },
//   {
//     id: 2,
//     type: "image",
//     src: "/images/heroImage2.jpeg",
//     brand: "Gucci",
//     link: "/gucci",
//     thumbnail:
//       "/images/Logo_Bottega_Veneta_V2_sur_fond_blanc_pour_pastille_homepage_5a9791d903.jpeg",
//   },
//   {
//     id: 3,
//     type: "video",
//     src: "/images/heroImage3.jpeg",
//     brand: "Saint Laurent",
//     link: "/saint-laurent",
//     thumbnail: "/images/Logo_pastille_Brioni_Fond_Blanc_e04961a221.png",
//   },
//   {
//     id: 4,
//     type: "image",
//     src: "/images/heroImage4.jpeg",
//     brand: "Bottega Veneta",
//     link: "/bottega-veneta",
//     thumbnail: "/images/Mc_Queen_logo_pastille_blanc_8eb8a70911.png",
//   },
//   {
//     id: 5,
//     type: "image",
//     src: "/images/heroImage5.png",
//     brand: "Balenciaga",
//     link: "/balenciaga",
//     thumbnail: "/images/pastille_blanc_ginori_1735_9750923897.png",
//   },
//   {
//     id: 6,
//     type: "video",
//     src: "/images/heroImage6.jpeg",
//     brand: "McQueen",
//     link: "/mcqueen",
//     thumbnail: "/images/Pastille_Pomellato_blanc_sept_21_624dfd5f08.png",
//   },
//   {
//     id: 7,
//     type: "image",
//     src: "/images/heroImage7.jpeg",
//     brand: "Brioni",
//     link: "/brioni",
//     thumbnail: "/images/STORY_BRAND_DESKTOP_BOUCHERON_d3fa49a775.png",
//   },
//   {
//     id: 8,
//     type: "image",
//     src: "/images/heroImage8.png",
//     brand: "Boucheron",
//     link: "/boucheron",
//     thumbnail: "/images/dodo_pastille_blanc_mai2021_b80e37b61f.png",
//   },
// ];

// const AUTOPLAY_DELAY = 4000; // 4 seconds

// const SliderHero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   // autoplay effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//       setProgress(0);
//     }, AUTOPLAY_DELAY);

//     // progress animation
//     const progressInterval = setInterval(() => {
//       setProgress((prev) => (prev < 100 ? prev + 2.5 : 100));
//     }, AUTOPLAY_DELAY / 40); // ~100 steps

//     return () => {
//       clearInterval(interval);
//       clearInterval(progressInterval);
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden bg-black">
//       {/* Slides */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out h-full"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="w-full flex-shrink-0 relative h-full"
//           >
//             <Image
//               src={slide.src}
//               alt={slide.brand}
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//               <h2 className="text-white text-3xl font-bold">
//                 {slide.brand}
//               </h2>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Thumbnails */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//         <div className="mx-auto flex space-x-6 items-center justify-center overflow-x-auto relative">
//           {/* Progress Bar */}
//           <div className="absolute top-0 left-0 h-1 w-full bg-white/20">
//             <div
//               className="h-full bg-[#f5b588] transition-all ease-linear"
//               style={{ width: `${progress}%` }}
//             />
//           </div>

//           {slides.map((slide, index) => (
//             <button
//               key={slide.id}
//               onClick={() => {
//                 setCurrentIndex(index);
//                 setProgress(0);
//               }}
//               className={`flex-shrink-0 rounded-full p-1 transition-all duration-300 ${
//                 currentIndex === index
//                   ? "bg-white shadow-lg scale-110"
//                   : "bg-white/30 hover:bg-white/60"
//               }`}
//             >
//               <img
//                 src={slide.thumbnail || "/placeholder.svg"}
//                 alt={slide.brand}
//                 className={`h-12 w-12 rounded-full object-cover transition-opacity ${
//                   currentIndex === index ? "opacity-100" : "opacity-70"
//                 }`}
//               />
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SliderHero;

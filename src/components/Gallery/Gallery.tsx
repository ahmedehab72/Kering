"use client"

import { useState } from "react";
import OpenImage from "../collection/OpenImage";

const categories = [
  { name: "CORPORATE EVENTS", img: "/images/gridsection/imageTest.jpeg" },
  { name: "WEDDINGS", img: "/images/gridsection/imageTest2.jpeg" },
  { name: "CELEBRATIONS", img: "/images/gridsection/imageTest3.png" },
  { name: "CATERING", img: "/images/gridsection/imageTest.jpeg" },
  { name: "HOSTESSES & CREW", img: "/images/gridsection/imageTest2.jpeg" },
];

export const GalleryVertical = () => {
  const [openImage, setOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleImageClick = (img: string) => {
    setSelectedImage(img);
    setOpenImage(true);
  };
  return (
    <div className="relative min-h-screen bg-gray-100 flex  items-center py-20">
      {categories.map((category, index) => (
        <div
          onClick={() => handleImageClick(category.img)}
          key={index}
          className="relative w-full transition-all duration-300 ease-in-out hover:scale-x-110 hover:z-10"
          style={{
            transform: `translateY(${index * 50}px)`,
            zIndex: 5 - index,
          }}
        >
          <img
            src={category.img}
            alt={category.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
      {openImage && (
        <OpenImage selectedImage={selectedImage} setOpenImage={setOpenImage} />
      )}
    </div>
  );
};

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import OpenImage from "./OpenImage";

const categories = [
  { name: "CORPORATE EVENTS", img: "/images/gridsection/imageTest.jpeg" },
  { name: "WEDDINGS", img: "/images/gridsection/imageTest2.jpeg" },
  { name: "CELEBRATIONS", img: "/images/gridsection/imageTest3.png" },
  { name: "CATERING", img: "/images/gridsection/imageTest.jpeg" },
  { name: "HOSTESSES & CREW", img: "/images/gridsection/imageTest2.jpeg" },
  { name: "ENTERTAINMENT", img: "/images/gridsection/imageTest3.png" },
  { name: "MUSIC", img: "/images/gridsection/imageTest.jpeg" },
  { name: "LIGHTING & SCREENS", img: "/images/gridsection/imageTest3.png" },
  { name: "PHOTOGRAPHERS", img: "/images/gridsection/imageTest.jpeg" },
  { name: "LOGISTICS", img: "/images/gridsection/imageTest2.jpeg" },
  { name: "DECORATIONS", img: "/images/gridsection/imageTest.jpeg" },
  { name: "CONSULTATION", img: "/images/gridsection/imageTest3.png" },
  { name: "GIFT ITEMS", img: "/images/gridsection/imageTest2.jpeg" },
  { name: "INVITATION CARDS", img: "/images/gridsection/imageTest3.png" },
  { name: "RENTALS", img: "/images/gridsection/imageTest2.jpeg" },
];

const GridCollections = () => {
  const [openImage, setOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const handleImageClick = (img: string , name:string) => {
    setSelectedImage(img);
    setSelectedTitle(name);
    setOpenImage(true);
  };
  return (
    <section className="w-screen py-6 bg-black relative">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-8"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? "-100%" : "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={() => handleImageClick(category.img , category.name)}
          >
            <Card className="h-48 relative overflow-hidden !border-none !rounded-none cursor-pointer group">
              {/* Image */}
              <Image
                src={category.img}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors" />

              {/* Text */}
              <CardContent className="absolute bottom-0 right-0 left-0 h-12 flex items-center justify-center bg-black/60">
                <h3 className="text-sm font-semibold text-white text-center drop-shadow-md tracking-widest">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      {openImage && (
        <OpenImage selectedImage={selectedImage} setOpenImage={setOpenImage}  selectedTitle={selectedTitle}/>
      )}
    </section>
  );
};

export default GridCollections;

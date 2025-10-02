"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AdvSlider from "@/components/imagesPage/advSlider";

const ImagesPage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  const images = [
    "/images/gridsection/Glimpse.jpg",
    "/images/gridsection/ghadeerashoor.jpg",
    "/images/gridsection/1920x1080_desktop_home_background_mosaic_3_2fd86df5ae.png",
    "/images/gridsection/1920x1080_desktop_home_background_mosaic_4_4a5317de28.png",
    "/images/gridsection/ghadeerashoor.jpg",
    "/images/gridsection/Gala.jpg",
    "/images/gridsection/Glide.jpg",
    "/images/gridsection/imageTest.jpeg",
    "/images/gridsection/Glimpse.jpg",
    "/images/gridsection/Glide.jpg",
    "/images/gridsection/imageTest.jpeg",
    "/images/gridsection/1920x1080_desktop_home_background_mosaic_3_2fd86df5ae.png",
    "/images/gridsection/Gala.jpg",
    "/images/gridsection/1920x1080_desktop_home_background_mosaic_4_4a5317de28.png",
    "/images/gridsection/ghadeerashoor.jpg",
    "/images/gridsection/Gala.jpg",
  ];

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div className="absolute bg-black p-10 right-0 top-0 left-0 "></div>
      {/* Top Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-6"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-2">
            GA Group
          </h2>
          <p className="text-gray-500">
            create extraordinary experiences across weddings Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nulla facilisi, nisl at
            tristique suscipit, elit nulla tempus mauris, nec dictum lectus
            ipsum eget purus.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div className="relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/gridsection/Glimpse.jpg"
              alt="Texture Challenge"
              width={400}
              height={250}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white cursor-pointer">
              <p className="text-sm font-light">Glimpse</p>
              <h4 className="font-semibold">Texture Challenge</h4>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/gridsection/Gala.jpg"
              alt="Movement Challenge"
              width={400}
              height={250}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white cursor-pointer">
              <p className="text-sm font-light">Gala</p>
              <h4 className="font-semibold">Movement Challenge</h4>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* <AdvSlider /> */}
      {/* Divider Section */}


      {/* Masonry Grid Section */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, i) => {
          const randomHeight =
            Math.floor(Math.random() * (500 - 250 + 1)) + 250;
          const hoverImage = images[(i + 1) % images.length];

          return (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: i * 0.1, // stagger effect
                  },
                },
              }}
              className="relative overflow-hidden rounded-lg shadow-md break-inside-avoid group cursor-pointer"
              style={{ height: randomHeight }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Default Image */}
              <Image
                src={src}
                alt={`Gallery Image ${i + 1}`}
                width={500}
                height={randomHeight}
                className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:rotate-y-180 group-hover:scale-95"
              />

              {/* Hover Image */}
              <Image
                src={hoverImage}
                alt={`Hover Image ${i + 1}`}
                width={500}
                height={randomHeight}
                className="absolute inset-0 object-cover w-full h-full opacity-0 rotate-y-180 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:rotate-y-0"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ImagesPage;

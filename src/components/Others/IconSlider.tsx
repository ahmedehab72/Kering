"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const IconSlider = () => {
  const partners = [
    { image: "/images/partnerSlider/p1.png", link: "#", name: "Partner 1" },
    { image: "/images/partnerSlider/p2.png", link: "#", name: "Partner 2" },
    { image: "/images/partnerSlider/p3.png", link: "#", name: "Partner 3" },
    { image: "/images/partnerSlider/p4.png", link: "#", name: "Partner 4" },
    { image: "/images/partnerSlider/p5.png", link: "#", name: "Partner 5" },
    { image: "/images/partnerSlider/p1.png", link: "#", name: "Partner 1" },
    { image: "/images/partnerSlider/p2.png", link: "#", name: "Partner 2" },
    { image: "/images/partnerSlider/p3.png", link: "#", name: "Partner 3" },
    { image: "/images/partnerSlider/p4.png", link: "#", name: "Partner 4" },
    { image: "/images/partnerSlider/p5.png", link: "#", name: "Partner 5" },
  ];

  // duplicate to create infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partner" className="py-16 bg-background overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Part
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r
             from-gray-700 to-gray-400 dark:from-gray-200 dark:to-gray-500"
          >
            nerShip
          </span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Discover the powerful features that make .
        </p>
      </div>
      <div className="relative w-full">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

        {/* Sliding container */}
        <motion.div
          animate={{ x: [0, -150 * partners.length] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex space-x-12"
        >
          {duplicatedPartners.map((partner, index) => (
            <Link
              key={`${partner.name}-${index}`}
              href={partner.link}
              className="flex-shrink-0 flex flex-col items-center justify-center min-w-[150px] group"
            >
              <div className="w-28 h-28 overflow-hidden  group-hover:scale-110 transition-all">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={96}
                  height={96}
                  className="w-full h-full "
                />
              </div>
              {/* <span className="text-sm font-medium text-foreground/80 mt-3">
                {partner.name}
              </span> */}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IconSlider;

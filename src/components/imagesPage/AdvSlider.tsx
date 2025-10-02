"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AdvSlider = () => {
  const partners = [
    { image: "/images/partnerSlider/p1.png", link: "#", name: "Partner 1" },
    { image: "/images/partnerSlider/p2.png", link: "#", name: "Partner 2" },
    { image: "/images/partnerSlider/p3.png", link: "#", name: "Partner 3" },
    { image: "/images/partnerSlider/p4.png", link: "#", name: "Partner 4" },
    { image: "/images/partnerSlider/p5.png", link: "#", name: "Partner 5" },
  ];

  // duplicate for infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <>
      {/* 🔥 Separator with animation */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full h-[2px] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 my-16"
      ></motion.div>

      {/* Partner Section */}
      <section
        id="partner"
        className="py-5 bg-background overflow-hidden relative"
      >


        {/* Slider */}
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
                target="_blank"
                className="flex-shrink-0 flex flex-col items-center justify-center min-w-[120px] group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-24 h-24 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <span className="text-sm font-medium text-foreground/80 mt-3">
                  {partner.name}
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔥 Separator bottom */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full h-[2px] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 my-16"
      ></motion.div>
    </>
  );
};

export default AdvSlider;

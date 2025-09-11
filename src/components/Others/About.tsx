"use client";

import { motion } from "framer-motion";
import { Diamond, Building2, Globe, Star, Users, Award } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { icon: Diamond, label: "Luxury Weddings Executed", value: "200+" },
    { icon: Users, label: "Professional Team", value: "70+" },
    { icon: Building2, label: "Years of Excellence", value: "20+" },
    // { icon: Globe, label: "Cities Presence", value: "Riyadh & Jeddah" },
  ];

  return (
    <section
      id="about"
      className="relative px-4 lg:px-0 min-h-screen max-w-7xl mx-auto flex items-center justify-center overflow-hidden 
             bg-white dark:bg-gray-700"
    >
      <div className="container mx-auto px-4  relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-700 dark:text-white">
              know More About Our — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-400 dark:from-gray-200 dark:to-gray-500">
                GA Group
              </span>
            </h1>

            <p className="text-sm md:text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              GA Group is a dynamic and multifaceted company that brings
              together a diverse portfolio of businesses under one umbrella,
              each providing high-end , unique services and products. From
              luxury weddings and event planning to corporate services, event
              rentals, and interior design, GA is committed to excellence and
              delivering tailored solutions for all its clients.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="text-center lg:text-left space-y-2"
                >
                  <div className="flex items-center justify-center lg:justify-start">
                    <stat.icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="font-bold text-2xl text-gray-700 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div
              className="w-full h-96 md:h-[500px] rounded-3xl shadow-xl flex items-center justify-center 
                     bg-gray-100 dark:bg-gray-700"
              style={{
                backgroundImage: `url(${"/images/aboutImage.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-lg flex items-center justify-center"
            >
              <Award className="w-10 h-10 text-gray-700 dark:text-gray-200" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-xl shadow-lg flex items-center justify-center"
            >
              <Star className="w-8 h-8 text-gray-700 dark:text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useLocalizedHref } from "@/lib/useLocalizedHref";

const features = [
  {
    image: "/images/featureImage1.png",
    title: "Luxury Weddings",
    description:
      "Bespoke wedding experiences crafted with elegance, exclusivity, and timeless design.",
    points: [
      "Destination weddings elevate your business presence.",
      // "Celebrity styling residences, commercial spaces elevate your business presence.",
      "Exclusive venues elegance, exclusivity, and timeless design.",
    ],
    link: "Explore Weddings",
  },
  {
    image: "/images/featureImage2.png",
    title: "Corporate Excellence",
    description:
      "Premium corporate events and conferences designed.",
    points: [
      "Executive conferences residences, commercial spaces.",
      // "Product launches elegance, exclusivity, and timeless design.",
      "Awards ceremonies elevate your business presence.",
    ],
    link: "View Corporate Services",
  },
  {
    image: "/images/featureImage3.png",
    title: "Luxury Interiors",
    description:
      "Sophisticated interior design solutions for residences.",
    points: [
      "Custom furnishing elegance, exclusivity, and timeless design.",
      // "Luxury residences elevate your business presence.",
      "Hospitality design residences, commercial spaces.",
    ],
    link: "Discover Interiors",
  },
];
const OurFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { getLocalizedHref } = useLocalizedHref();


  return (
    <section
      id="feature"
      className="py-20 bg-background max-w-7xl mx-auto"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-400 dark:from-gray-200 dark:to-gray-500">
              Features
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover the powerful features that make our platform the perfect
            choice for your business needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Card className="group  overflow-hidden shadow-lg rounded-2xl border-none p-6">
                {/* Image with overlay text */}
                <Link
                  href={getLocalizedHref("/features")}
                  className="relative overflow-hidden h-64 cursor-pointer rounded-2xl"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    {/* <p className="text-sm text-gray-200 mt-2">
                      {feature.description}
                    </p> */}
                  </div>
                </Link>

                {/* Content */}
                <CardContent className=" px-2">
                  <p className="text-sm text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className=" rounded-xl text-gray-500 hover:text-gray-400  transition-all !border-none cursor-pointer"
                  >
                    {feature.link}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;

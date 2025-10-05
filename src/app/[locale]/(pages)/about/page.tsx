"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocalizedHref } from "@/lib/useLocalizedHref";
import Link from "next/link";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function StorySection() {
  const [percentage, setPercentage] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { getLocalizedHref } = useLocalizedHref();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
      let start = 0;
      const end = 70;
      const duration = 1500; // 1.5 seconds
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setPercentage(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    }
  }, [isInView, controls]);

  const team = [
    {
      name: "Jeff Silver",
      role: "Co-Founder & CTO",
      bio: "Jeff spent his entire career working in technology. Prior to Opus, Jeff was an engineer at Google and Meta. He co-founded 'Info'. Jeff studied cognitive science and cloud computing at the University of Pennsylvania. He spends his early mornings sailing at summer camp.",
      image: "/images/person2.jpeg",
    },
    {
      name: "Rachael Nemeth",
      role: "Co-Founder & CEO",
      bio: "Rachael led operations and people for over a decade in the hospitality industry, most recently with Danny Meyer’s Union Square Hospitality Group. She comes from a family of restaurant owners and is certified in ESL education.",
      image: "/images/person.png",
    },
    {
      name: "Vince Li",
      role: "Co-Founder & Head of Design",
      bio: "Vince is a distinguished product designer and visual artist. Prior to Opus, he was Director of Design at Meta. Vince also runs his own Design Studio in Amsterdam. He has the cutest kid on the planet.",
      image: "/images/person2.jpeg",
    },
  ];

  const investors = [
    "Stage 2 Capital",
    "NextView Ventures",
    "Bling Capital",
    "Gutter Capital",
    "Metrodora",
  ];

  const advisors = [
    "Andrew Gorrin",
    "Alex Rainert",
    "James Turnbull",
    "Lydia Heu",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <div className="absolute bg-black p-10 right-0 top-0 left-0 "></div>

      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center py-24 px-6 max-w-3xl mx-auto mt-12"
      >
        <h1 className="text-5xl font-semibold leading-tight text-gray-900 mb-3">
          Crafting Timeless Memories for Your Perfect Wedding Day
        </h1>
        <p className="text-gray-500 text-lg">
          every love story deserves a beautiful celebration.
        </p>
      </motion.section>

      {/* Images Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-20 mb-24"
      >
        {["imageTest.jpeg", "Glide.jpg", "Glimpse.jpg"].map((img, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="overflow-hidden rounded-2xl shadow-md"
          >
            <Image
              src={`/images/gridsection/${img}`}
              alt={img}
              width={400}
              height={300}
              className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-500 ease-out"
            />
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14 px-8 mb-28"
      >
        {/* الدائرة المتدرجة */}
        <motion.div className="flex-1 flex justify-center" variants={fadeUp}>
          <div className="relative w-56 h-56 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
            {/* الخلفية المتدرجة داخل الدائرة */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 via-gray-600 to-gray-300 animate-gradientMove"></div>

            {/* الدائرة الداخلية اللي فيها الرقم */}
            <div className="absolute inset-[10px] bg-gray-100 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-5xl font-extrabold text-gray-800 transition-all duration-500">
                {percentage}%
              </span>
            </div>

            {/* مؤشر التقدم */}
            <svg
              className="absolute inset-0 w-full h-full rotate-[-90deg]"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="oklch(0.7 0 0)"
                strokeWidth="8"
                fill="none"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="oklch(0.79 0 0)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset={283 - (percentage / 100) * 283}
                transition={{ duration: 0.4 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* النص */}
        <motion.div className="" variants={fadeUp}>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our story began with a passion for love and celebration. We wanted
            to make wedding planning stress-free and magical. Today, we’re proud
            to help countless couples bring their dream weddings to life.
            <span className="font-semibold text-gray-900">
               countless couples bring their dream weddings to life.
            </span>
          </p>
        </motion.div>
      </motion.section>

      {/* Human-first Technology */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-8 mb-28"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Love-first Experiences
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From the smallest detail to the grandest moment, we believe every
            couple deserves a wedding that reflects their story. Our team
            combines creativity, precision, and heartfelt care to make your
            celebration truly unforgettable.
          </p>
        </div>
        <motion.div variants={fadeUp}>
          <Image
            src="/images/gridsection/ghadeerashoor.jpg"
            alt="team"
            width={500}
            height={400}
            className="rounded-2xl shadow-md object-cover w-full h-[350px]"
          />
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center px-8 mb-28"
      >
        <h2 className="text-4xl font-semibold mb-12 text-gray-900">Our Team</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group perspective cursor-pointer"
            >
              <div className="relative preserve-3d w-full h-[320px] rounded-2xl shadow-md transition-transform duration-700 group-hover:rotate-y-180">
                {/* FRONT SIDE */}
                <div className="absolute inset-0 backface-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 bg-gray-900 text-white rounded-2xl rotate-y-180 backface-hidden flex flex-col items-center justify-center px-6 py-4">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{member.role}</p>
                  <p className="text-gray-200 text-sm leading-relaxed text-center">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer / Join Us */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center py-24 bg-gray-100 rounded-t-3xl"
      >
        <h2 className="text-3xl font-semibold  text-gray-900 mb-8">
          Start planning your dream wedding today.
        </h2>
        <Link
          href={getLocalizedHref(`/contact`)}
          className="bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-500"
        >
          Explore Open Roles
        </Link>
      </motion.section>
    </main>
  );
}

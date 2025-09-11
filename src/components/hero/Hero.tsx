import { Button } from "@/components/ui/button";
// import heroImage from "/images/contact.jpg";
import Image from "next/image";
import { ArrowDown } from "../Others/ArrowDown";

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" relative lg:min-h-[85vh] min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/contact.jpg" // الصورة اللي تظهر قبل تحميل الفيديو
          className="w-full h-full object-cover"
        >
          <source src="/images/videoParty.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mt-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in-up">
          GA Group
        </h1>

        <p
          className="text-lg md:text-xl text-gray-300 my-10 max-w-2xl mx-auto fade-in-up "
          style={{ animationDelay: "0.2s" }}
        >
          GA Group brings together five premier divisions to create
          extraordinary experiences across weddings, events, design, and
          lifestyle.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <ArrowDown />
      </div>
    </section>
  );
};

export default HeroSection;

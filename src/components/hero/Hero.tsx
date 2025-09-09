import { Button } from "@/components/ui/button";
// import heroImage from "/images/contact.jpg";
import Image from "next/image";
import { ArrowDown } from "../Others/ArrowDown";

const HeroSection = () => {
  return (
    <section id="home" className=" relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={'/images/contact.jpg'} 
          width={3000}
          height={3000}
          alt="Luxury event planning by GA Group"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in-up">
         GA Group

        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 my-10 max-w-2xl mx-auto fade-in-up " style={{animationDelay: '0.2s'}}>
          GA Group brings together five premier divisions to create extraordinary experiences across weddings, events, design, and lifestyle.
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
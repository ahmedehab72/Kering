import { Stars } from "lucide-react";
import Image from "next/image";

const FeatureOne = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <Image
        src={"/images/featureImage.jpg"}
        alt="Contact background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="flex flex-col justify-center items-center z-1 ">
        <Stars color="white" size={40} />
        <h1 className="relative text-white text-6xl md:text-6xl font-bold tracking-[.5rem] mt-10 mb-6">
          Our Features
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default FeatureOne;

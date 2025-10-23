import Image from "next/image";
import React from "react";

interface OpenImageProps {
  setOpenImage: (open: boolean) => void;
  selectedImage: string;
  selectedTitle: string;
}

const OpenImage: React.FC<OpenImageProps> = ({
  setOpenImage,
  selectedImage,
  selectedTitle,
}) => {
  return (
    <div
      className="w-full h-full absolute top-0 left-0 bg-black/80 z-10 flex items-center justify-center"
      onClick={() => setOpenImage(false)}
    >
      <div className="lg:flex items-center justify-between gap-6 px-4 max-w-7xl mx-auto">
        <Image
          onClick={(e) => e.stopPropagation()}
          src={selectedImage}
          alt="image test"
          width={500}
          height={500}
        />

        <div className="flex flex-col gap-4 max-w-md lg:text-start text-center mt-4" onClick={(e) => e.stopPropagation()}>
          <h1 className="text-white font-bold text-5xl ">{selectedTitle}</h1>
          <p className="tracking-wider text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            provident tenetur culpa nesciunt, ipsa quam harum expedita
            voluptatum repudiandae sequi eum minima, laborum blanditiis alias
            consequatur id voluptates! Est, natus.
          </p>
        </div>
      </div>
      <button
        className="absolute top-8 right-12 text-white text-2xl font-bold cursor-pointer"
        onClick={() => setOpenImage(false)}
      >
        X
      </button>
    </div>
  );
};

export default OpenImage;

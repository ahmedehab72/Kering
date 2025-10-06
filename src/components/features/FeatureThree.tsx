import Image from "next/image";
import React from "react";

const FeatureThree = () => {
  return (
    <div className="flex flex-col justify-center items-center  mx-auto pt-20 pb-6">
      <h4 className="text-xl">Our Wedding Features All You Love</h4>
      <p className="text-2xl text-gray-500 mb-16 mt-6 text-center max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aut
        culpa reprehenderit fugit necessitatibus qui
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
        <div className="relative col-span-1" >
          <Image
            src={"/images/featureImage1.png"}
            alt=" iamge"
            width={400}
            height={400}
          />
          <p className="absolute bottom-2 lg:p-5 p-2 text-white text-lg">
            fugit necessitatibu eveniet quisquam. Ad eni
          </p>
        </div>
        <div className="relative col-span-1" >
          <Image
            src={"/images/featureImage2.png"}
            alt=" iamge"
            width={400}
            height={400}
          />
          <p className="absolute bottom-2 lg:p-5 p-2 text-white text-lg">
            fugit necessitatibus qui doloremque quam similique eveniet
          </p>
        </div>
        <div className="relative col-span-1" >
          <Image
            src={"/images/featureImage1.png"}
            alt=" iamge"
            width={400}
            height={400}
          />
          <p className="absolute bottom-2 lg:p-5 p-2 text-white text-lg">
            fugit necessitatibu eveniet quisquam. Ad eni
          </p>
        </div>
        <div className="relative col-span-1" >
          <Image
            src={"/images/featureImage2.png"}
            alt=" iamge"
            width={400}
            height={400}
          />
          <p className="absolute bottom-2 lg:p-5 p-2 text-white text-lg">
            fugit necessitatibus qui doloremque quam similique eveniet
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureThree;

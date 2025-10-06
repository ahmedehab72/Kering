import React from "react";

const FeatureTwo = () => {
  return (
    <div className="p-6 ">
      <h2 className='text-3xl font-semibold text-center my-12'>You Will Learn How To</h2>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
        <div className="relative p-12 rounded-xl md:col-span-1 col-span-3">
          <span className="absolute text-red-900 opacity-20 font-extrabold text-8xl tracking-wide ">
            01
          </span>
          <p className="p-5 z-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="relative p-12 rounded-xl md:col-span-1 col-span-3">
          <span className="absolute text-blue-900 opacity-20 font-extrabold text-8xl tracking-wide ">
            02
          </span>
          <p className="p-5 z-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="relative p-12 rounded-xl md:col-span-1 col-span-3">
          <span className="absolute text-green-900 opacity-20 font-extrabold text-8xl tracking-wide ">
            03
          </span>
          <p className="p-5 z-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;

import {  HandCoins, Handshake, UsersRound, Stars } from "lucide-react";

const FeatureFour = () => {
  return (
    <div className="bg-gray-500 p-6 ">
      <div className="grid grid-cols-3 grid-rows-2 gap-5 max-w-7xl mx-auto">
        <div className="bg-gray-200 p-6 rounded-xl md:col-span-2 col-span-3 row-span-1">
          <UsersRound color="gray" size={30} />
          <h2 className="text-gray-900 text-2xl tracking-wide mt-12 mb-4">
            LEARN FROM OTHERS
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl md:col-span-1 col-span-3 row-span-1">
          <Handshake color="gray" size={30} />
          <h2 className="text-gray-900 text-2xl tracking-wide mt-12 mb-4">
            CONTACT
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl md:col-span-1 col-span-3 row-span-1">
          <HandCoins color="gray" size={30} />
          <h2 className="text-gray-900 text-2xl tracking-wide mt-12 mb-4">
            GROW
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-gray-200 p-6 rounded-xl md:col-span-2 col-span-3 row-span-1">
          <Stars color="gray" size={30} />
          <h2 className="text-gray-900 text-2xl tracking-wide mt-12 mb-4">
            GET INSPIRED
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureFour;

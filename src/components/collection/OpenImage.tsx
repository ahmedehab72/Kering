import Image from 'next/image'
import React from 'react'

interface OpenImageProps {
  setOpenImage: (open: boolean) => void;
  selectedImage: string;
}

const OpenImage: React.FC<OpenImageProps> = ({ setOpenImage, selectedImage }) => {
  return (
 <div
          className="w-full h-full absolute top-0 left-0 bg-black/70 z-10 flex items-center justify-center"
          onClick={() => setOpenImage(false)}
        >
          <Image
            onClick={(e)=>e.stopPropagation()}
            src={selectedImage}
            alt="image test"
            width={500}
            height={500}
          />
          <button
            className="absolute top-8 right-12 text-white text-2xl font-bold cursor-pointer"
            onClick={() => setOpenImage(false)}
          >
            X
          </button>
        </div>
  )
}

export default OpenImage
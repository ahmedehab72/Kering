"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocalizedHref } from "@/lib/useLocalizedHref";

// https://galabyga.com
// https://ghadeerashoor.com
// https://glimpsebyga.com
// https://gleambyga.com
// https://glidebyga.com

export const GridSection = () => {
  const { getLocalizedHref } = useLocalizedHref();
  return (
    <div className="grid-container max-w-7xl mx-auto">
      {/* Bottom Left Section */}
      <div className="grid-item grid-item-1 group">
        <Link href={'https://galabyga.com'}>
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/Gala.jpg"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white ">
              <p className="text-2xl font-semibold tracking-[.6rem] mb-2">
                Gala
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Left 2 */}
      <div className="grid-item grid-item-2 group">
        <Link href={'https://ghadeerashoor.com'}>
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/ghadeerashoor.jpg"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-8 transform  -translate-y-1/2  text-white ">
              <p className="text-lg font-semibold tracking-[.5rem] mb-2">
                Ghadeer Ashoor
              </p>
              <h2 className="text-xl lg:text-3xl font-semibold">
                We are almost there!
              </h2>
            </div>
          </div>
        </Link>
      </div>

      {/* Center Bottom Section */}
      <div className="grid-item grid-item-3 group">
        <Link href={'https://glimpsebyga.com'}>
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/Glimpse.jpg"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2  text-white ">
              <p className="text-lg font-light tracking-[.5rem]  mb-2">
                Glimpse
              </p>
              <h2 className="text-4xl font-light">We are almost there!</h2>
            </div>
          </div>
        </Link>
      </div>

      {/* Women in Motion Section */}
      <div className="grid-item grid-item-4 group">
        <Link href={`https://glidebyga.com`}>
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/Glide.jpg"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white ">
              <p className="text-sm lg:text-2xl font-semibold  tracking-[.4rem] mb-2">
                Glide
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Right Bottom Section */}
      <div className="grid-item grid-item-5 group">
        <Link href={`https://glidebyga.com`}>
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/gleambyga.png"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2  text-white ">
              <h2 className="hidden lg:block text-3xl font-light leading-tight">
               Gleam byga
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

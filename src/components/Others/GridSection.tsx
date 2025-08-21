'use client'
import Image from "next/image"
import Link from "next/link"
import { useLocalizedHref } from "@/lib/useLocalizedHref";

export const GridSection = () => {
  const { getLocalizedHref } = useLocalizedHref()
  return (
    <div className="grid-container">
      {/* Large McQueen Section */}
      <div className="grid-item grid-item-1 group">
        <Link href={getLocalizedHref('/houses')} >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/Homepage_Portrait_Asset_2_9c7c122cd0.jpeg"
              alt="McQueen Fashion"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 " />
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2  text-white ">
              <p className="text-lg font-light tracking-[.5rem]  mb-2">HOUSES</p>
              <h2 className="text-4xl font-light">Bottega veneta</h2>
            </div>
          </div>
        </Link>

      </div>

      {/* Finance Section */}
      <div className="grid-item grid-item-2 group">
        <Link href={getLocalizedHref('/houses')} >

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/1920x1080_desktop_home_background_mosaic_3_2fd86df5ae.png"
              alt="McQueen Fashion"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white ">
              <h2 className="text-4xl font-light tracking-[.35rem]">Finnance</h2>
            </div>
          </div>
        </Link>
      </div>

      {/* Kering Highlights Section */}
      <div className="grid-item grid-item-3 group">
        <Link href={getLocalizedHref('/houses')} >

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/POMELLATO_KH_MOSAIC_1_6ad8453d43.png"
              alt="Kering Building"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2  text-white ">
              <h2 className="hidden lg:block text-3xl font-light leading-tight">
                Kering Highlights - Art & Jewelry: A retrospective to spotlight Pomellatos legacy
              </h2>
              <h2 className="block lg:hidden text-lg font-light leading-tight">
                Kering Highlights - Art & Jewelry
              </h2>
            </div>
          </div>
        </Link>
      </div>

      {/* Large Talent Section */}
      <div className="grid-item grid-item-4 group">
        <Link href={getLocalizedHref('/houses')} >

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/586x914_desktop_home_boucheron_cape_59adea4cae.png"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-8 transform  -translate-y-1/2  text-white ">
              <p className="text-lg font-semibold tracking-[.5rem] mb-2">TALENT</p>
              <h2 className="text-3xl font-semibold">Our Job Offers</h2>
            </div>
          </div>
        </Link>
      </div>

      {/* Talent Right Section */}
      <div className="grid-item grid-item-5 group">
        <Link href={getLocalizedHref('/houses')} >

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/1920x1080_desktop_home_background_mosaic_4_4a5317de28.png"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white ">
              <p className="text-lg font-semibold tracking-[.5rem] mb-2">TALENT</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Left Section */}
      <div className="grid-item grid-item-6 group">
        <Link href={getLocalizedHref('/houses')} >

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/1920x1080_desktop_home_background_mosaic_5_d2ecb8938f.png"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white ">
              <p className="text-2xl font-semibold tracking-[.6rem] mb-2">HOUSES</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Left 2 */}
      <div className="grid-item grid-item-7 group">
        <Link href={getLocalizedHref('/houses')} >

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/02_Fondation_Kering_586x457_Desktop_HP_83030c3853.jpeg"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-8 transform  -translate-y-1/2  text-white ">
              <p className="text-lg font-semibold tracking-[.5rem] mb-2">GROUP</p>
              <h2 className="text-xl lg:text-3xl font-semibold">Kering Foundation</h2>
            </div>
          </div>
        </Link>
      </div>

      {/* Center Bottom Section */}
      <div className="grid-item grid-item-8 group">
        <Link href={getLocalizedHref('/houses')} >

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/Homepage_Portrait_Asset_2_586x914px_e350a05302.jpeg"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2  text-white ">
              <p className="text-lg font-light tracking-[.5rem]  mb-2">HOUSES</p>
              <h2 className="text-4xl font-light">Pomellato</h2>
            </div>
          </div>
        </Link>
      </div>

      {/* Women in Motion Section */}
      <div className="grid-item grid-item-9 group">
        <Link href={getLocalizedHref('/houses')} >

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/1920x1080_desktop_home_background_mosaic_3_2fd86df5ae.png"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white ">
              <p className="text-sm lg:text-2xl font-semibold  tracking-[.4rem] mb-2">SUSTAINABLITY</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Right Bottom Section */}
      <div className="grid-item grid-item-10 group">
        <Link href={getLocalizedHref('/houses')} >

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/gridsection/SECTION_6_9920cd0950.jpeg"
              alt="Luxury Jewelry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2  text-white ">
              <h2 className="hidden lg:block text-3xl font-light leading-tight">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </h2>
              <h2 className="block lg:hidden text-lg font-light leading-tight">
                Lorem ipsum, dolor sit .
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

export default function SustainabilityVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  const youtubeVideoId = "Tu6GFBRd5eQ" // Updated to sustainability report video ID

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section className="relative w-full h-[500px] my-10">
      {!isPlaying ? (
        <div className="relative w-full h-full cursor-pointer group" onClick={handlePlayClick}>
          <Image
            src="/images/Cover_Progress_report20202023_1760x644_Desktop_0b360cce76.jpeg"
            alt="Sustainability Progress Report Cover"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center z-20">
            <h2 className="text-xl md:text-2xl font-light tracking-[0.3em] text-white mb-2">SUSTAINABILITY</h2>
            <div className="flex justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor" />
              </svg>
            </div>
          </div>

          <button
            className="absolute inset-0 flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Play sustainability video"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 text-white">
              <Play size={60} fill="white" className="ml-1 text-white opacity-70 group-hover:opacity-90" />
            </div>
          </button>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center z-20">
            <h3 className="text-lg md:text-xl font-serif text-white/95 italic tracking-wide drop-shadow-lg">
              Sustainability Progress Report 2020-2023
            </h3>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full bg-black">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
            title="Sustainability Progress Report 2020-2023"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}
    </section>
  )
}

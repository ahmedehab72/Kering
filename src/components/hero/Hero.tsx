"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLocalizedHref } from "@/lib/useLocalizedHref"
import Image from "next/image"

interface SlideData {
  id: number
  type: "image" | "video"
  src: string
  brand: string
  title?: string
  link: string
  thumbnail: string
}

const slides: SlideData[] = [
  {
    id: 1,
    type: "image",
    src: "/images/heroImage1.jpeg",
    brand: "Kering",
    title: "Endless Narratives",
    link: "https://galabyga.com",
    thumbnail: "/images/logos/galalogo.png",
  },
  {
    id: 2,
    type: "image",
    src: "/images/heroImage2.jpeg",
    brand: "Gucci",
    link: "https://ghadeerashoor.com",
    thumbnail: "/images/logos/ghadeerlogo.png",
  },
  {
    id: 3,
    type: "video",
    src: "/images/heroImage3.jpeg",
    brand: "Saint Laurent",
    link: "https://glimpsebyga.com",
    thumbnail: "/images/logos/glimpselogo.png",
  },
  {
    id: 4,
    type: "image",
    src: "/images/heroImage4.jpeg",
    brand: "Bottega Veneta",
    link: "https://gleambyga.com",
    thumbnail: "/images/logos/gleamlogo.png",
  },
  {
    id: 5,
    type: "image",
    src: "/images/heroImage5.png",
    brand: "Balenciaga",
    link: "https://glidebyga.com",
    thumbnail: "/images/logos/glidelogo.png",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)

  const SLIDE_DURATION = 5000
  const PROGRESS_INTERVAL = 50
  const { getLocalizedHref } = useLocalizedHref()

  useEffect(() => {
    if (isPlaying) {
      startSlideTimer()
    } else {
      stopSlideTimer()
    }
    return () => {
      stopSlideTimer()
    }
  }, [currentSlide, isPlaying])

  const startSlideTimer = () => {
    stopSlideTimer()
    setProgress(0)

    let progressValue = 0
    progressRef.current = setInterval(() => {
      progressValue += (PROGRESS_INTERVAL / SLIDE_DURATION) * 100
      setProgress(progressValue)
      if (progressValue >= 100) {
        nextSlide()
      }
    }, PROGRESS_INTERVAL)
  }

  const stopSlideTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (progressRef.current) {
      clearInterval(progressRef.current)
      progressRef.current = null
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }

  const handleMouseEnter = () => {
    setIsPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsPlaying(true)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Main Slider */}
      <div
        className="relative h-full w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "video" ? (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.src || "/placeholder.svg"}
                alt={slide.brand}
                className="h-full w-full object-cover"
              />
            )}

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/30">
              <div className="flex h-full items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="mb-8 text-6xl font-light tracking-wider">
                    {slide.brand}
                  </h1>
                  {slide.title && (
                    <p className="mb-8 text-xl font-light opacity-90">
                      {slide.title}
                    </p>
                  )}
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-200 bg-transparent text-gray-100 hover:bg-gray-100 hover:text-black"
                  >
                    DISCOVER
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-100 transition-all"
        >
          <ChevronLeft className="h-14 w-14" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-100 transition-all"
        >
          <ChevronRight className="h-14 w-14" />
        </button>
      </div>

      {/* Brand Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-100/90">
        <div className="mx-auto flex space-x-10 items-center justify-center overflow-x-auto">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gray-300">
            <div
              className="h-full bg-gray-600 transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          {slides.map((slide, index) => (
            <Link
              key={slide.id}
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-shrink-0 rounded-full p-1 cursor-pointer transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gray-600 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              <Image
                src={slide.thumbnail || "/placeholder.svg"}
                alt={slide.brand}
                className={`h-16 w-16 rounded-full object-cover transition-all ${
                  index === currentSlide ? "opacity-100" : "opacity-70"
                }`}
                width={1000}
                height={1000}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

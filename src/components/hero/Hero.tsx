"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        link: "/kering",
        thumbnail: "/images/BAL_STORY_BRAND_DESKTOP_522c10a8f7.png",
    },
    {
        id: 2,
        type: "image",
        src: "/images/heroImage2.jpeg",
        brand: "Gucci",
        link: "/gucci",
        thumbnail: "/images/Logo_Bottega_Veneta_V2_sur_fond_blanc_pour_pastille_homepage_5a9791d903.jpeg",
    },
    {
        id: 3,
        type: "video",
        src: "/images/heroImage3.jpeg",
        brand: "Saint Laurent",
        link: "/saint-laurent",
        thumbnail: "/images/Logo_pastille_Brioni_Fond_Blanc_e04961a221.png",
    },
    {
        id: 4,
        type: "image",
        src: "/images/heroImage4.jpeg",
        brand: "Bottega Veneta",
        link: "/bottega-veneta",
        thumbnail: "/images/Mc_Queen_logo_pastille_blanc_8eb8a70911.png",
    },
    {
        id: 5,
        type: "image",
        src: "/images/heroImage5.png",
        brand: "Balenciaga",
        link: "/balenciaga",
        thumbnail: "/images/pastille_blanc_ginori_1735_9750923897.png",
    },
    {
        id: 6,
        type: "video",
        src: "/images/heroImage6.jpeg",
        brand: "McQueen",
        link: "/mcqueen",
        thumbnail: "/images/Pastille_Pomellato_blanc_sept_21_624dfd5f08.png",
    },
    {
        id: 7,
        type: "image",
        src: "/images/heroImage7.jpeg",
        brand: "Brioni",
        link: "/brioni",
        thumbnail: "/images/STORY_BRAND_DESKTOP_BOUCHERON_d3fa49a775.png",
    },
    {
        id: 8,
        type: "image",
        src: "/images/heroImage8.png",
        brand: "Boucheron",
        link: "/boucheron",
        thumbnail: "/images/dodo_pastille_blanc_mai2021_b80e37b61f.png",
    },
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const progressRef = useRef<NodeJS.Timeout | null>(null)

    const SLIDE_DURATION = 5000 // 5 seconds per slide
    const PROGRESS_INTERVAL = 50 // Update progress every 50ms

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

        // Progress animation
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
        <div className="relative h-screen w-full overflow-hidden">
            {/* Main Slider */}
            <div className="relative h-full w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {slide.type === "video" ? (
                            <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
                                <source src={slide.src} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={slide.src || "/placeholder.svg"} alt={slide.brand} className="h-full w-full object-cover" />
                        )}

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-black/20">
                            <div className="flex h-full items-center justify-center">
                                <div className="text-center text-white">
                                    <h1 className="mb-8 text-6xl font-light tracking-wider">{slide.brand}</h1>
                                    {slide.title && <p className="mb-8 text-xl font-light opacity-90">{slide.title}</p>}
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-white bg-transparent text-white hover:bg-white hover:text-black"
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
                    className="absolute left-8 top-1/2 -translate-y-1/2 font-light text-gray-400 cursor-pointer transition-all "
                >
                    <ChevronLeft className="h-14 w-14 " />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 font-light text-gray-400 cursor-pointer transition-all "
                >
                    <ChevronRight className="h-14 w-14 font-light" />
                </button>
            </div>



            {/* Brand Thumbnails */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 bg-[#f1e4db]">

                <div className="mx-auto flex space-x-10 items-center justify-center overflow-x-auto">
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 h-1 w-full bg-white/20">
                        <div className="h-full bg-[#f5b588] transition-all duration-75 ease-linear" style={{ width: `${progress}%` }} />
                    </div>
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => goToSlide(index)}
                            className={`flex-shrink-0 rounded-full p-1 transition-all duration-300 ${index === currentSlide ? "bg-white shadow-lg" : "bg-white/20 hover:bg-white/40"
                                }`}
                        >
                            <img
                                src={slide.thumbnail || "/placeholder.svg"}
                                alt={slide.brand}
                                className={`h-12 w-12 rounded-full object-cover transition-all ${index === currentSlide ? "opacity-100" : "opacity-70"
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}

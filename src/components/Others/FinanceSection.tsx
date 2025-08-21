"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function FinanceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      // Calculate scroll progress when section is in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
        const progress = visibleHeight / Math.min(windowHeight, sectionHeight)
        setScrollProgress(Math.min(1, Math.max(0, progress)))
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full h-[400px] mt-6 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/finance-background.jpeg" alt="Finance background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Finance title */}
      <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-10">
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] text-center">FINANCE</h2>
      </div>

      {/* Main content container */}
      <div className="relative h-full flex items-center justify-center px-4 md:px-8">
        {/* Key Figures Card - Left */}
        <div className="hidden md:block md:absolute left-0 top-1/2 transform -translate-y-1/2 bg-stone-100 p-4 md:p-6 lg:p-8 w-56 md:w-64 lg:w-72 shadow-xl">
          <h3 className="text-base md:text-lg lg:text-xl font-light mb-2 text-stone-900 tracking-wide">KEY FIGURES</h3>
          <p className="lg:relative lg:block hidden text-stone-700 text-xs md:text-sm leading-relaxed">Groups key financial data.</p>
        </div>

        <div className="relativ z-30">
          <div
            ref={circleRef}
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative"
            style={{
              transform: `rotateY(${scrollProgress * 360}deg)`,
            }}
          >
            <div
              className="absolute inset-0  rounded-full border-2 border-yellow-400/80 animate-spin"
              style={{ animationDuration: "8s" }}
            >
             
            </div>
             <div  style={{ animationDuration: "5s" }} className="animate-spin absolute inset-2 top-2 rounded-full border border-yellow-400/60"></div>
             <div  style={{ animationDuration: "2s" }} className="animate-spin absolute inset-2 -top-2 rounded-full border border-yellow-400/60"></div>

            {/* Inner content */}
            <div className="absolute inset-6 md:inset-8 lg:inset-10 rounded-full bg-stone-800/60 backdrop-blur-sm flex flex-col items-center justify-center text-white border border-yellow-400/30">
              <div className="text-2xl md:text-3xl lg:text-4xl font-light mb-1">
                218.35<span className="text-yellow-400 text-xl md:text-2xl lg:text-3xl">€</span>
              </div>
              <div className="text-xs md:text-sm tracking-[0.2em] font-light text-stone-200">SHARE PRICE</div>
            </div>
          </div>
        </div>

        {/* Kering Share Card - Right */}
        <div className="hidden md:block md:absolute  right-0  top-1/2 transform -translate-y-1/2 bg-stone-100 p-4 md:p-6 lg:p-8 w-56 md:w-64 lg:w-72 shadow-xl">
          <h3 className="text-base md:text-lg lg:text-xl font-light mb-2 text-stone-900 tracking-wide">KERING SHARE</h3>
          <p className="lg:relative lg:block hidden text-stone-700 text-xs md:text-sm leading-relaxed">
            All information about the Kering share (characteristics, real-time quotes, dividend history).
          </p>
        </div>
      </div>
    </section>
  )
}

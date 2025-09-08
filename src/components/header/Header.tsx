"use client"

import { useEffect, useState } from "react"
import { Search, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import LanguageSwitcher from "../Others/LanguageSwitcher"
import HoverMenu from "./HoverMenu"
import { leftNavItems, menuData, rightNavItems } from "./HoverMenuData"
import MobileMenuOpen from "./MobileMenuOpen"
import SearchOpen from "./SearchOpen"
import { useLocalizedHref } from "@/lib/useLocalizedHref"


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
    const [showHeader, setShowHeader] = useState(true) // للتحكم في الظهور
    const [lastScrollY, setLastScrollY] = useState(0) // عشان نعرف اتجاه الـ scroll

    const { getLocalizedHref } = useLocalizedHref()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setShowHeader(false)
            } else {
                // scrolling up
                setShowHeader(true)
            }
            setLastScrollY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])
    return (
        <>
            <header
                className={`w-full bg-white fixed top-0 left-0 z-50 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
                    }`}
            >                <div className="max-w-none px-4 sm:px-8 lg:px-16">
                    <div className="flex items-center justify-between h-16">
                        {/* Left section - Share price and language */}
                        <div className="flex items-center space-x-6">
                            {/* <div className="hidden xl:flex items-center space-x-2 text-sm">
                                <span className="text-gray-700">Share price</span>
                                <span className="font-bold text-black">216,50 €</span>
                            </div> */}

                            <LanguageSwitcher />
                            {/* KERING Logo - centered */}

                        </div>
                        <div className="lg:hidden flex items-center">
                            <Link href={getLocalizedHref('/')} className="flex items-center">
                                {/* <Image src={'/images/WHITE-LOGO-KERING.png'} alt="kering logo" width={100} height={40} /> */}
                                        <span className="text-xl font-semibold text-center ">Ghadeer Ashoor</span>

                            </Link>
                        </div>
                        {/* Center section - Navigation */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <nav className="flex items-center xl:space-x-8 space-x-4">
                                {/* Left navigation items */}
                                <div className="flex items-center xl:space-x-8 space-x-4">
                                    {leftNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={getLocalizedHref(item.href)}
                                            className="text-xs hover:text-sm hover:bg-gray-200/60 h-16 flex items-center p-5 font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
                                            onMouseEnter={() => setHoveredMenu(item.title)}
                                            onMouseLeave={() => setHoveredMenu(null)}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>

                                {/* KERING Logo - centered */}
                                <div className="xl:mx-8 lg:mx-4 mx-2 w-[150px] ">
                                    <Link href={getLocalizedHref('/')} className="flex items-center">
                                        {/* <Image src={'/images/WHITE-LOGO-KERING.png'} alt="kering logo" width={140} height={50} /> */}
                                        <span className="text-xl font-semibold text-center ">Ghadeer Ashoor</span>
                                    </Link>
                                </div>

                                {/* Right navigation items */}
                                <div className="flex items-center xl:space-x-8 space-x-4">
                                    {rightNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={getLocalizedHref(item.href)}
                                            className="text-xs hover:text-sm hover:bg-gray-200/60 h-16 flex items-center p-3 font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
                                            onMouseEnter={() => setHoveredMenu(item.title)}
                                            onMouseLeave={() => setHoveredMenu(null)}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </nav>
                        </div>

                        {/* Right section - Search and Join Us */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setSearchOpen(!searchOpen)}
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <Search className="h-5 w-5" />
                            </button>

                            <Link
                                href={getLocalizedHref('/joinUs')}
                                className="hidden md:inline-flex px-4 py-2 text-xs font-medium text-[#a19174] hover:text-[#beb299] transition-colors duration-200"
                            >
                                JOIN US
                            </Link>

                            {/* Mobile menu button */}
                            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {mobileMenuOpen && (
                        <MobileMenuOpen rightNavItems={rightNavItems} leftNavItems={leftNavItems} getLocalizedHref={getLocalizedHref} />
                    )}
                </div>

                {/* Dropdown menu */}
                {hoveredMenu && menuData[hoveredMenu] && (
                    <HoverMenu hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu} menuData={menuData} getLocalizedHref={getLocalizedHref} />
                )}
            </header>

            {/* Search overlay */}
            {searchOpen && (
                <SearchOpen setSearchOpen={setSearchOpen} />
            )}
        </>
    )
}
"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import LanguageSwitcher from "../Others/LanguageSwitcher"
import HoverMenu from "./HoverMenu"
import { leftNavItems, menuData, rightNavItems } from "./HoverMenuData"
import { useParams } from "next/navigation"
import MobileMenuOpen from "./MobileMenuOpen"
import SearchOpen from "./SearchOpen"


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

    // استرجاع اللغة الحالية من المسار باستخدام useParams
    const params = useParams()
    const locale = typeof params.locale === 'string' ? params.locale : 'en' // الافتراضي هو الإنجليزية إذا لم يكن locale متاحًا

    // دالة لإنشاء الرابط مع اللغة الحالية
    const getLocalizedHref = (href: string) => `/${locale}${href}`

    return (
        <>
            <header className="w-full bg-white relative z-50">
                <div className="max-w-none px-4 sm:px-8 lg:px-16">
                    <div className="flex items-center justify-between h-16">
                        {/* Left section - Share price and language */}
                        <div className="flex items-center space-x-6">
                            <div className="hidden xl:flex items-center space-x-2 text-sm">
                                <span className="text-gray-700">Share price</span>
                                <span className="font-bold text-black">216,50 €</span>
                            </div>
                            <div className="lg:hidden flex items-center">
                                <Link href={getLocalizedHref('/')} className="flex items-center">
                                    <Image src={'/images/WHITE-LOGO-KERING.png'} alt="kering logo" width={100} height={40} />
                                </Link>
                            </div>
                            <LanguageSwitcher />
                            {/* KERING Logo - centered */}

                        </div>

                        {/* Center section - Navigation */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <nav className="flex items-center space-x-8">
                                {/* Left navigation items */}
                                <div className="flex items-center space-x-8">
                                    {leftNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={getLocalizedHref(item.href)}
                                            className="text-xs hover:text-sm hover:bg-[#f1e4db] h-16 flex items-center p-5 font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
                                            onMouseEnter={() => setHoveredMenu(item.title)}
                                            onMouseLeave={() => setHoveredMenu(null)}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>

                                {/* KERING Logo - centered */}
                                <div className="xl:mx-8 lg:mx-4 mx-2">
                                    <Link href={getLocalizedHref('/')} className="flex items-center">
                                        <Image src={'/images/WHITE-LOGO-KERING.png'} alt="kering logo" width={140} height={50} />
                                    </Link>
                                </div>

                                {/* Right navigation items */}
                                <div className="flex items-center space-x-8">
                                    {rightNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={getLocalizedHref(item.href)}
                                            className="text-xs hover:text-sm hover:bg-[#f1e4dbc4] h-16 flex items-center p-3 font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
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
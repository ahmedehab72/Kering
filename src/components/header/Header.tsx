"use client"

import { useState } from "react"
import { ChevronDown, Search, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { it } from "node:test"
import LanguageSwitcher from "../Others/LanguageSwitcher"
import { useTranslation } from 'react-i18next';


const languages = [
    { code: "en", name: "English", href: "/en/" },
    { code: "fr", name: "Français", href: "/fr/" },
    { code: "it", name: "Italiano", href: "/it/" },
    { code: "cn", name: "简体中文", href: "/cn/" },
    { code: "jp", name: "日本語", href: "/jp/" },
]

const leftNavItems = [
    { title: "Group", href: "/en/group/" },
    { title: "Houses", href: "/en/houses/" },
    { title: "Talent", href: "/en/talent/" },
]

const rightNavItems = [
    { title: "Sustainability", href: "/en/sustainability/" },
    { title: "Finance", href: "/en/finance/" },
    { title: "Press", href: "/en/press/" },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
    const {t} = useTranslation()
    return (
        <>
            <header className="w-full bg-white relative z-50">
                <div className="max-w-none px-4 sm:px-8 lg:px-16">
                    <div className="flex items-center justify-between h-16">
                        {/* Left section - Share price and language */}
                        <div className="flex items-center space-x-6">
                            <div className="hidden md:flex items-center space-x-2 text-sm">
                                <span className="text-gray-700">Share price</span>
                                <span className="font-bold text-black">216,50 €</span>
                            </div>
                            <LanguageSwitcher />
                        </div>

                        {/* Center section - Navigation */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <nav className="flex items-center space-x-8">
                                {/* Left navigation items */}
                                <div className="flex items-center space-x-8">
                                    {leftNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="text-xs hover:text-sm hover:hover:bg-[#f1e4db] h-20 flex items-center p-5  font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
                                            onMouseEnter={() => setHoveredMenu(item.title)}
                                            onMouseLeave={() => setHoveredMenu(null)}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>

                                {/* KERING Logo - centered */}
                                <div className="mx-12">
                                    <Link href="/en/" className="flex items-center">
                                        <Image src={'/images/WHITE-LOGO-KERING.png'} alt="kering logo " width={140} height={50} />
                                    </Link>
                                </div>

                                {/* Right navigation items */}
                                <div className="flex items-center space-x-8">
                                    {rightNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="text-xs hover:text-sm hover:hover:bg-[#f1e4db] h-20 flex items-center p-3  font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
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
                                href="/en/talent/job-offers/"
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
                        <div className="lg:hidden border-t border-gray-100 py-4 bg-white">
                            <div className="flex flex-col space-y-4">
                                {/* Mobile share price */}
                                <div className="md:hidden flex items-center space-x-2 text-sm pb-2 border-b border-gray-100">
                                    <span className="text-gray-700">Share price</span>
                                    <span className="font-bold text-black">216,50 €</span>
                                </div>

                                {/* Mobile navigation */}
                                <div className="space-y-2">
                                    {[...leftNavItems, ...rightNavItems].map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>

                                {/* Mobile Join Us button */}
                                <Link
                                    href="/en/talent/job-offers/"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200"
                                >
                                    JOIN US
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                {hoveredMenu && (
                    <div
                        className="absolute top-full left-0 w-screen bg-[#f1e4db] z-40 py-8"
                        onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-white">
                                <h3 className="text-xl font-bold mb-4">{hoveredMenu}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">



                                    <div>

                                        <Link href={'/'} >
                                            <div style={{
                                                backgroundImage: `url('/images/heroImage5.png')`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: '80px',
                                                borderRadius: '0.5rem',
                                                marginBottom: '1rem',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <h4 className="text-lg font-semibold text-white">Fragrance</h4>
                                            </div>
                                        </Link>
                                        <ul>
                                            <li><Link className=' text-xs text-black' href={'#'}> Gucci</Link></li>
                                            <li><Link className=' text-xs text-black' href={'#'}> Saint Laurent </Link></li>
                                            <li><Link className=' text-xs text-black' href={'#'}>Bottega Veneta</Link></li>
                                        </ul>
                                    </div>

                                    <div>

                                        <Link href={'/'} >
                                            <div style={{
                                                backgroundImage: `url('/images/heroImage7.jpeg')`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: '80px',
                                                borderRadius: '0.5rem',
                                                marginBottom: '1rem',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <h4 className="text-lg font-semibold text-white">Fragrance</h4>
                                            </div>
                                        </Link>
                                        <ul>
                                            <li><Link className=' text-xs text-black' href={'#'}> Gucci</Link></li>
                                            <li><Link className=' text-xs text-black' href={'#'}> Saint Laurent </Link></li>
                                            <li><Link className=' text-xs text-black' href={'#'}>Bottega Veneta</Link></li>
                                        </ul>
                                    </div>

                                    <div>

                                        <Link href={'/'} >
                                            <div style={{
                                                backgroundImage: `url('/images/heroImage3.jpeg')`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: '80px',
                                                borderRadius: '0.5rem',
                                                marginBottom: '1rem',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <h4 className="text-lg font-semibold text-white">Others</h4>
                                            </div>
                                        </Link>
                                        <ul>
                                            <li><Link className=' text-xs text-black' href={'#'}> Gucci</Link></li>
                                            <li><Link className=' text-xs text-black' href={'#'}> Saint Laurent </Link></li>
                                            <li><Link className=' text-xs text-black' href={'#'}>Bottega Veneta</Link></li>
                                        </ul>
                                    </div>


                                    <div>

                                        <Link href={'/'} >
                                            <div style={{
                                                backgroundImage: `url('/images/heroImage2.jpeg')`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: '80px',
                                                borderRadius: '0.5rem',
                                                marginBottom: '1rem',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <h4 className="text-lg font-semibold text-white">Fragrance</h4>
                                            </div>
                                        </Link>
                                        <ul>
                                            <li><Link className=' text-xs text-black' href={'#'}> Gucci</Link></li>
                                            <li><Link className=' text-xs text-black' href={'#'}> Saint Laurent </Link></li>
                                            <li><Link className=' text-xs text-black' href={'#'}>Bottega Veneta</Link></li>
                                        </ul>
                                    </div>





                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Search overlay */}
            {searchOpen && (
                <div className="absolute left-16 right-16 h-2/3 inset-0 bg-[#f1e4dba2] z-40 transform transition-transform duration-300 ">
                    <div className="max-w-4xl mx-auto px-4 py-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold">Search</h2>
                            <button onClick={() => setSearchOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="relative mb-8">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                autoFocus
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <Search className="h-6 w-6 text-gray-400" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-4">Filter by date</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="sort" value="date_desc" className="text-gray-600" />
                                        <span>From most recent to oldest</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="sort" value="date_asc" className="text-gray-600" />
                                        <span>From oldest to most recent</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-4">Filter by section</h3>
                                <div className="space-y-2">
                                    {["Sustainability", "Finance", "Press", "Talent", "Group", "Houses"].map((section) => (
                                        <label key={section} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="categories"
                                                value={section.toLowerCase()}
                                                className="text-gray-600"
                                            />
                                            <span>{section}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

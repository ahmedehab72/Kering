"use client";

import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../Others/LanguageSwitcher";
import HoverMenu from "./HoverMenu";
import { leftNavItems, menuData, rightNavItems } from "./HoverMenuData";
import MobileMenuOpen from "./MobileMenuOpen";
import SearchOpen from "./SearchOpen";
import { useLocalizedHref } from "@/lib/useLocalizedHref";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [showHeader, setShowHeader] = useState(true); // للتحكم في الظهور
  const [lastScrollY, setLastScrollY] = useState(0); // عشان نعرف اتجاه الـ scroll

  const { getLocalizedHref } = useLocalizedHref();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <header
        className={`w-full bg-white fixed top-0 left-0 z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {" "}
        <div className="max-w-none px-4 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Center section - Navigation */}
            <div className="flex items-center justify-center flex-1">
              <nav className="flex items-center xl:space-x-8 space-x-4">
                {/* Left navigation items */}
                <div className="flex items-center xl:space-x-8 space-x-4">
                  <Link
                    href={getLocalizedHref("/about")}
                    className="text-sm md:inline-flex px-4 py-2  font-medium text-gray-600 hover:text-gray-500 transition-colors duration-200"
                  >
                    About US
                  </Link>
                </div>

                {/* KERING Logo - centered */}
                <div className="flex items-center xl:space-x-8 space-x-4">
                  <Link
                    href={getLocalizedHref("/")}
                    className="flex items-center"
                  >
                    {/* <Image src={'/images/WHITE-LOGO-KERING.png'} alt="kering logo" width={140} height={50} /> */}
                    <span className="text-2xl font-semibold text-center ">
                      GA Group
                    </span>
                  </Link>
                </div>

                {/* Right navigation items */}
                <div className="flex items-center xl:space-x-8 space-x-4">
                  {/* <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Search className="h-5 w-5" />
                  </button> */}
                  <Link
                    href={getLocalizedHref("/contact")}
                    className="md:inline-flex px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-500 transition-colors duration-200"
                  >
                    Contact US
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      {searchOpen && <SearchOpen setSearchOpen={setSearchOpen} />}
    </>
  );
}

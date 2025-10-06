"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocalizedHref } from "@/lib/useLocalizedHref";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemsLeft = [
    { href: "about", label: "ABOUT" },
    { href: "#division", label: "DIVISION" },
    { href: "features", label: "FEATURE" },
  ];
  const navItemsRight = [
    { href: "#News", label: "NEWS" },
    { href: "images", label: "IMAGES" },
    { href: "contact", label: "CONTACT" },
  ];
  const navItems = [
    { href: "#about", label: "ABOUT" },
    { href: "#division", label: "DIVISION" },
    { href: "features", label: "FEATURE" },
    { href: "#News", label: "NEWS" },
    { href: "images", label: "IMAGES" },
    { href: "contact", label: "CONTACT" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };
  const { getLocalizedHref } = useLocalizedHref();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center lg:justify-center justify-between ">
          {/* Desktop Navigation left*/}
          <div className="hidden md:flex items-center space-x-8">
            {navItemsLeft.map((item) => (
              <Link
                href={getLocalizedHref(`/${item.href}`)}
                key={item.href}
                className={`font-body font-medium transition-all duration-300 relative group text-sm cursor-pointer ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-primary-light"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          {/* Logo */}
          <Link
            href={getLocalizedHref(`/`)}
            className="font-display text-2xl font-bold text-white lg:mx-20 mx-0"
          >
            {isScrolled ? (
              <Image
                src={"/images/GAGroupLogo.png"}
                width={500}
                height={100}
                alt="GA Group Logo"
                className="h-12 w-24"
              />
            ) : (
              <Image
                src={"/images/logos/ghadeerlogo.png"}
                width={500}
                height={100}
                alt="GA Group Logo"
                className="h-12 w-24"
              />
            )}
          </Link>

          {/* Desktop Navigation right */}
          <div className="hidden md:flex items-center space-x-8">
            {navItemsRight.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(`/${item.href}`)}
                onClick={() => scrollToSection(item.href)}
                className={`font-body font-medium transition-all duration-300 relative group text-sm cursor-pointer ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-primary-light"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-primary-light"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background/95 backdrop-blur-md rounded-lg shadow-[var(--shadow-elegant)]">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-2 font-body font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

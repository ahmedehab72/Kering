'use client'
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className=" py-6 px-4 sm:px-8 lg:px-16 mb-8 ">
      <div className="bg-[#f1e4db] p-6">
        <div className="max-w-4xl mx-auto text-center ">
          {/* Kering Logo */}
          <div className="mb-12">
            {/* <Image
              src="/images/logofooter.png"
              alt="Kering Logo"
              className="h-24 w-44 mx-auto mb-4"
              width={500}
              height={500}
            /> */}
              <span className="text-2xl font-semibold text-center ">Ghadeer Ashoor</span>

          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Youtube size={16} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v6.75a.75.75 0 01-1.5 0V6.08a.75.75 0 01.471-.696A60.026 60.026 0 0111.7 2.805z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
              </svg>
            </a>
          </div>


          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center items-center gap-1 text-xs text-gray-700 font-medium tracking-wide">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t("footer.sitemap")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t("footer.contact")}
                </a>
              </li>
              <li className="mx-2">•</li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t("footer.legal")}
                </a>
              </li>
              <li className="mx-2">•</li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t("footer.credits")}
                </a>
              </li>
              <li className="mx-2">•</li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
              <li className="mx-2">•</li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  {t("footer.cookies")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-xs text-gray-600 font-medium tracking-wide">
            © KERING 2025. {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  )
}

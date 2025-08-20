"use client";

import { usePathname, useRouter, useParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "ar", name: "العربية" },
  { code: "fr", name: "Franch" },
  { code: "gr", name: "German" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // e.g. /en/about
  const params = useParams();     // { locale: 'en' }

  const currentLocale =
    typeof params?.locale === "string"
      ? params.locale
      : Array.isArray(params?.locale)
      ? params.locale[0]
      : "en";

  const switchLocale = (targetLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = targetLocale; // استبدل /en -> /ar أو العكس
    router.push(segments.join("/"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium hover:text-gray-600 transition-colors">
        <span>{currentLocale.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="right"
        align="end"
        className="flex py-3 border-none bg-[#f1e4db] animate-slide-down"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLocale(lang.code)}
            className="cursor-pointer"
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
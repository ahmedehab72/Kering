import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // تجاهل الملفات الداخلية
  if (pathname.startsWith("/_next") || pathname.includes(".")) return;

  // لو المسار مفيهوش لغة، ضيف /en
  if (!pathname.startsWith("/en") && !pathname.startsWith("/ar")) {
    const url = req.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url);
  }
}

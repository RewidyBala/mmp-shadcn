import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";
import { auth as authMiddleware } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "never",
});

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js)$/)
  ) {
    return NextResponse.next();
  }

  try {
    // Get auth session
    const session = await authMiddleware();
    const isAuthenticated = !!session;

    // Define protected and public routes
    const authRoutes = ["/login", "/register"];
    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

    if (isAuthenticated) {
      // If authenticated and on auth route or root, redirect to dashboard
      if (isAuthRoute || pathname === "/") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    } else {
      // If not authenticated and trying to access protected route, redirect to home
      if (pathname !== "/" && !isAuthRoute) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
  }

  // Apply internationalization middleware
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

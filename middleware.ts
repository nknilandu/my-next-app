import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function runs on every request matching the "matcher"
export function middleware(req: NextRequest) {
  const auth = req.cookies.get("auth")?.value;

  // Routes to protect
  const protectedRoutes = ["/add-item"];

  // If the request is for a protected route and auth cookie is missing
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (auth !== "true") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

// Specify which paths should use this middleware
export const config = {
  matcher: ["/add-item"],
};

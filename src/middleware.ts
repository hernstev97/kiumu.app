import { NextResponse, NextRequest } from "next/server";

/**
 * Middleware to protect the preview environment
 * @param request - The request object
 * @returns The response object if the password is not set or the pathname is /login or the cookie is set, otherwise redirects to /login
 */

export function middleware(request: NextRequest) {
    const previewPassword = process.env.PREVIEW_PASSWORD;
    const isPasswordSet = !!previewPassword;
    const pathname = request.nextUrl.pathname; // read out the pathname of the request
    const isCookieSet = request.cookies.get("preview-authorized")?.value === "true";

    if (!isPasswordSet) {
        return NextResponse.next(); // if the password is not set, allow the request to continue
    } else if (pathname === "/login") {
        if (isCookieSet) {
            return NextResponse.redirect(new URL("/", request.url));
        }
        return NextResponse.next();
    } else if (isCookieSet) {
        return NextResponse.next(); // if the cookie is set, allow the request to continue
    } else {
        return NextResponse.redirect(new URL("/login", request.url)); // if the pathname is not /login, redirect to /login
    }
}

export const config = {
    matcher: [
        /*
         * Skip Next.js static assets (CSS/JS bundles, images).
         * Without this, unauthenticated requests for /_next/static/... get redirected
         * to /login and the browser receives HTML instead of CSS.
         */
        "/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
    ],
};
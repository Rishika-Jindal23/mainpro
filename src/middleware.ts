import { configureStore } from "@reduxjs/toolkit";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
    const cookies = request.cookies.get("accessToken")?.value;
    console.log("cookie>>>>>>>>..", cookies);
    const isNotAuthenticate = !cookies;
    const authenticate = !isNotAuthenticate;
    console.log("not allowed", isNotAuthenticate);
    console.log("yes allwed", authenticate);
    console.log("not applicable", !authenticate);

    // const homepage = request.nextUrl.pathname === "/";
    // if (request.nextUrl.pathname === "/") {
    //     return;
    // }
    const loggedInUserNotAccessPaths =
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname === "/register" ||
        request.nextUrl.password === "/";

    if (loggedInUserNotAccessPaths) {
        //  console.log("hhhhhhhhhhhhhhhh");
        if (cookies) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    } else {
        if (!cookies && !loggedInUserNotAccessPaths) {
            // if (request.nextUrl.pathname === "/add") {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    return NextResponse.next(); // Continue to the next Middleware or route handler
}

export const config = {
    matcher: [
        "/add",
        "/gigs",
        "/gigs/:path*",
        "/myProfile",
        "/myGigs",
        "/Orders",
        "/pay",
        "/success",
        "/VideoHome/:path",
        "/contact",
        "/contactform",
        "/sendEmail",
    ],
};

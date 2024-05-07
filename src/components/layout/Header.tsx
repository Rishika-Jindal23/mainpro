"use client";

import newRequest from "@/app/utils/newRequest";
import { logout } from "@/redux_store/slice/authslice";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Header() {
    const [user, setUser] = useState<string | null>(null);
    const dispatch = useDispatch();
    const [isSeller, setIsSeller] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const router = useRouter();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const loggedInUser = useSelector((state) => state.auth.user.currentUser);

    const userinfo = useSelector((state) => state);
    const profilepic = loggedInUser ? JSON.parse(loggedInUser).img : null;

    // {JSON.parse(user).username}

    const token = useSelector((state) => state.auth.token);
    console.log("state-----", token);

    console.log();

    useEffect(() => {
        // const currentUser = localStorage.getItem("currentUser");
        //  console.log(currentUser);
        if (loggedInUser) {
            setUser(loggedInUser);
            const userRole = JSON.parse(loggedInUser).isSeller;
            if (userRole) {
                setIsSeller(true);
            }
        }
    }, [user, isSeller]);

    const handleSignOut = async () => {
        dispatch(logout());
        //  localStorage.removeItem("currentUser");

        setUser(null);
        // window.location.href = "/";

        const response = await newRequest.post("auth/logout");
        const data = await response;
        if (response) {
            alert("successfuly loggedout");
            window.location.href = "/";
        } else {
            alert("error occurred");
        }
    };

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // function handleClick(): void {
    //     if (loggedInUser) {
    //         router.push("/landingpage");
    //     } else {
    //         router.push("/");
    //     }
    // }

    return (
        <>
            <header className="flex items-center justify-between mt-3">
                <Link
                    className="text-blue-700 font-semibold text-3xl p-4"
                    href="/"
                >
                    SkillSphere
                </Link>
                <nav className="flex gap-8 items-aligned text-gray-600 font-semibold relative">
                    <Link href={"/"} className="p-4">
                        Home
                    </Link>
                    <Link href="/about" className="p-4">
                        About
                    </Link>
                    <Link href={""} className="p-4">
                        Contact Us
                    </Link>

                    {user ? (
                        <a
                            // onClick={handleSignOut}
                            // className="bg-blue-700 rounded-full text-white px-7 py-4 cursor-pointer"
                            onClick={handleSignOut}
                            className="bg-blue-700 rounded-full text-white px-4 py-4 w-300 cursor-pointer hover:scale-105 transition-transform"
                            // style={{ fontSize: "0.8rem" }}
                        >
                            Logout
                        </a>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-blue-700 rounded-full text-white px-7 py-4  cursor-pointer hover:scale-105 transition-transform"
                        >
                            Sign In
                        </Link>
                    )}

                    {user ? (
                        <div className="relative inline-block text-left">
                            <button
                                onClick={handleDropdown}
                                className="bg-blue-700 rounded-full text-white px-7 py-4 cursor-pointer hover:scale-105 transition-transform"
                            >
                                {JSON.parse(user).username}
                            </button>
                            {showDropdown && (
                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                    <div
                                        className="py-1"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        {isSeller ? (
                                            <>
                                                <Link
                                                    href={"/add"}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Add Gigs
                                                </Link>
                                                <Link
                                                    href={"/myGigs"}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    My Gigs
                                                </Link>
                                            </>
                                        ) : null}
                                        <Link
                                            href={"/messages"}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem"
                                        >
                                            Messages
                                        </Link>
                                        <Link
                                            href={"/orders"}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem"
                                        >
                                            Orders
                                        </Link>
                                        <button
                                            // onClick={handleSignOut}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                            role="menuitem"
                                        >
                                            My Profile
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            href="/register"
                            className="bg-blue-700 rounded-full text-white px-7 py-4"
                        >
                            Sign up
                        </Link>
                    )}
                    {user ? (
                        <Link href={""} className="p-4">
                            <Avatar alt="Cindy Baker" src={profilepic} />
                        </Link>
                    ) : null}
                </nav>
            </header>
        </>
    );
}

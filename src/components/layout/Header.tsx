"use client";

import { logout } from "@/redux_store/slice/authslice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
    const [user, setUser] = useState<string | null>(null);
    const dispatch = useDispatch();
    const [isSeller, setIsSeller] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const loggedInUser = useSelector((state) => state.auth.user.currentUser);
    // console.log("loggedin>>>>>>>>>>>", loggedInUser);

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

        // const response = await fetch("http://localhost:8000/auth/logout");
        // const data = await response.json();
        // if (response.ok) {
        //     window.location.href = "/";
        // } else {
        //     alert(data.message);
        // }
    };

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <header className="flex items-center justify-between">
                <Link
                    className="text-blue-700 font-semibold text-3xl p-4"
                    href="/"
                >
                    SkillSphere
                </Link>
                <nav className="flex gap-8 items-aligned text-gray-600 font-semibold relative">
                    <Link href={""} className="p-4">
                        Home
                    </Link>
                    <Link href={""} className="p-4">
                        About
                    </Link>
                    <Link href={""} className="p-4">
                        Contact Us
                    </Link>

                    {user ? (
                        <a
                            onClick={handleSignOut}
                            className="bg-blue-700 rounded-full text-white px-7 py-4 cursor-pointer"
                        >
                            Log out {JSON.parse(user).username}
                        </a>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-blue-700 rounded-full text-white px-7 py-4"
                        >
                            Sign In
                        </Link>
                    )}

                    {user ? (
                        <div className="relative inline-block text-left">
                            <button
                                onClick={handleDropdown}
                                className="bg-blue-700 rounded-full text-white px-7 py-4 cursor-pointer"
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
                                                    href={"/mygigs"}
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
                </nav>
            </header>
        </>
    );
}

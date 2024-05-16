"use client";
//import Button from "@mui/material/Button";
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

    const isAuthenticated = useSelector(
        (state: any) => state.auth.isAuthenticated
    );
    const loggedInUser = useSelector(
        (state: any) => state.auth.user.currentUser
    );

    const userinfo = useSelector((state) => state);
    const profilepic = loggedInUser ? JSON.parse(loggedInUser).img : null;
    const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);
    const [avatarDropdownOpen, setAvatarDropdownOpen] = useState<boolean>(
        false
    );

    const token = useSelector((state: any) => state.auth.token);
    //   console.log("state-----", token);

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

        setUser(null);
        try {
            const response = await newRequest.post("auth/logout");
            const data = await response;
            if (response) {
                alert("logout successful");
                window.location.href = "/";
            } else {
                alert("error occurred");
            }
        } catch (error) {
            console.error("Error during logout:", error);
            alert("Logout failed");
        }
    };

    // const handleUserDropdown = () => {
    //     setUserDropdownOpen(!userDropdownOpen);
    //     setAvatarDropdownOpen(false); // Close the avatar dropdown
    // };

    const handleAvatarDropdown = () => {
        setAvatarDropdownOpen(!avatarDropdownOpen);
        setUserDropdownOpen(false); // Close the user dropdown
    };

    const handleService = () => {
        router.push("/gigs");
    };

    return (
        <>
            <header className="flex items-center justify-between mt-3 ">
                <Link
                    className="text-blue-700 font-semibold text-3xl p-4"
                    href="/"
                >
                    SkillSphere
                </Link>
                <nav className="flex gap-8 items-aligned text-gray-600 font-semibold relative">
                    <Button variant="text" href="/">
                        Home
                    </Button>

                    <Button variant="text" href="/about">
                        AboutUs
                    </Button>
                    {user ? (
                        <Button variant="text" onClick={handleService}>
                            Services
                        </Button>
                    ) : null}

                    {user ? (
                        <a
                            onClick={handleSignOut}
                            className="bg-blue-700 rounded-full text-white px-4 py-4 w-300 cursor-pointer hover:scale-105 transition-transform"
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

                    {!user ? (
                        <Link
                            href="/register"
                            className="bg-blue-700 rounded-full text-white px-7 py-4  cursor-pointer hover:scale-105 transition-transform"
                        >
                            Sign up
                        </Link>
                    ) : null}

                    {user ? (
                        <div className="relative inline-block text-left">
                            <button onClick={handleAvatarDropdown}>
                                <Avatar alt="Cindy Baker" src={profilepic} />
                            </button>
                            {avatarDropdownOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                                    <div
                                        className="py-1"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <Link
                                            href={"/myProfile"}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem"
                                        >
                                            My Profile
                                        </Link>
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
                                            href={"/orders"}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem"
                                        >
                                            Orders
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : null}
                </nav>
            </header>
        </>
    );
}

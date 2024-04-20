"use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Header() {
//     const [user, setUser] = useState<string | null>(null);
//     // const user = localStorage.getItem("currentUser");
//     // console.log("headre user : ", user);
//     useEffect(() => {
//         const currentUser = localStorage.getItem("currentUser");
//         console.log("headre user : ", currentUser);
//         setUser(currentUser);
//         //  console.log("currentUser : ", user);
//     }, []);

//     const handleSignOut = () => {
//         localStorage.removeItem("currentUser");
//         setUser(null);
//     };

//     return (
//         <>
//             <header className="flex items-center  justify-between ">
//                 <Link
//                     className="text-blue-700  font-semibold text-3xl   p-4"
//                     href="/"
//                 >
//                     SkillSphere
//                 </Link>
//                 <nav className="flex gap-8  items-aligned  text-gray-600 font-semibold">
//                     <Link href={""} className="p-4">
//                         Home
//                     </Link>
//                     <Link href={""} className="p-4">
//                         About
//                     </Link>
//                     <Link href={""} className="p-4">
//                         Contact Us
//                     </Link>

//                     {user ? (
//                         <a
//                             onClick={handleSignOut}
//                             className="bg-blue-700 rounded-full text-white px-7 py-4 cursor-pointer"
//                         >
//                             Log out {JSON.parse(user).username}
//                         </a>
//                     ) : (
//                         <Link
//                             href="/login"
//                             className="bg-blue-700 rounded-full text-white px-7 py-4"
//                         >
//                             Sign In
//                         </Link>
//                     )}

//                     {user ? (
//                         <a
//                             //onClick={}
//                             className="bg-blue-700 rounded-full text-white px-7 py-4 cursor-pointer"
//                         >
//                             {JSON.parse(user).username}
//                         </a>
//                     ) : (
//                         <Link
//                             href="/register"
//                             className="bg-blue-700 rounded-full text-white px-7 py-4"
//                         >
//                             Sign up
//                         </Link>
//                     )}

//                     {/* <Link
//                         href="/register"
//                         className="bg-blue-700   rounded-full text-white px-6 py-4"
//                     >
//                         Sign Up
//                     </Link> */}
//                 </nav>
//             </header>
//         </>
//     );
// }********************************************
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [user, setUser] = useState<string | null>(null);
    const [isSeller, setIsSeller] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    useEffect(() => {
        const currentUser = localStorage.getItem("currentUser");
        console.log(currentUser);
        if (currentUser) {
            setUser(currentUser);
            const userRole = JSON.parse(currentUser).isSeller;
            if (userRole) {
                setIsSeller(true);
            }
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("currentUser");
        setUser(null);
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
                                                    href={"/add-spheres"}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Add Spheres
                                                </Link>
                                                <Link
                                                    href={"/my-spheres"}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    My Spheres
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

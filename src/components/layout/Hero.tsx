"use client";
import Image from "next/image";
import img1 from "../../../public/img/img1.jpg";
import Right from "../icons/Right";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { FormEvent } from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
function Hero() {
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

    const router = useRouter();

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        console.log("handle submit called");
        if (isLoggedIn) {
            router.push("/gigs");
        } else {
            router.push("/login");
        }
    }

    return (
        <>
            <section className="grid grid-cols-2">
                <div className="py-8 bgcolor">
                    <h1 className="text-4xl  font-semibold  leading-normal  ">
                        Connecting <span className="italic">Skills</span> to
                        Projects
                    </h1>
                    <p className="my-4   ml-9 text-gray-600  text-sm">
                        Connect, Create, Thrive: Freelance Simplified.
                    </p>
                    <div>
                        <form
                            className="max-w-md mx-auto mr-9 mt-7"
                            onSubmit={handleSubmit}
                        >
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative ml- -6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search services here"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-170h-70  relative mt-5 ">
                    <Image
                        src={img1}
                        //   layout={"fill"}*
                        //    objectFit={"contain"}
                        alt="freelance"
                        // layout="responsive"
                    ></Image>
                </div>
            </section>
        </>
    );
}

export default Hero;

"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./Gigs.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchGigsAsync,
    fetchGigsByFiltersAsync,
    selectGigs,
} from "@/redux_store/slice/gigsSlice";

import GigCard from "../../../components/gigCard/GigCard";

const Gigs: React.FC = () => {
    const dispatch = useDispatch();
    const { data: gigs, loading, error } = useSelector(selectGigs);

    const [sort, setSort] = useState<string>("sales");
    const [open, setOpen] = useState<boolean>(false);

    const minRef = useRef<HTMLInputElement>(null);
    const maxRef = useRef<HTMLInputElement>(null);

    //     useEffect(() => {
    //         fetchGigs();
    //     }, []);

    useEffect(() => {
        dispatch(fetchGigsAsync());
    }, [dispatch]);

    const reSort = (type: string) => {
        setSort(type);
        setOpen(false);
    };

    const apply = () => {
        if (minRef.current && maxRef.current) {
            const minPrice = minRef.current?.value;
            const maxPrice = maxRef.current?.value;
            dispatch(fetchGigsByFiltersAsync({ minPrice, maxPrice, sort }));

            // console.log(minRef.current.value);
            // console.log(maxRef.current.value);
        }
    };

    return (
        <div className={styles.gigs}>
            <div className={styles.container}>
                <span className={styles.breadcrumbs}>SkillSphere Services</span>
                {/* <h1>AI Artists</h1> */}
                <p>Explore the boundaries of all </p>
                <div>
                    <form className="max-w-md mx-auto  left-0  mt-7">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
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
                                className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className={styles.menu}>
                    <div className={styles.left}>
                        <span>Budget</span>
                        <input ref={minRef} type="number" placeholder="min" />
                        <input ref={maxRef} type="number" placeholder="max" />
                        <button onClick={apply}>Apply</button>
                    </div>
                    <div className={styles.right}>
                        <span className={styles.sortBy}>Sort by</span>
                        <span className={styles.sortType}>
                            {sort === "sales" ? "Best Selling" : "Newest"}
                        </span>
                        <img
                            src="./img/down.png"
                            alt=""
                            onClick={() => setOpen(!open)}
                        />
                        {open && (
                            <div className={styles.rightMenu}>
                                {sort === "sales" ? (
                                    <span onClick={() => reSort("createdAt")}>
                                        Newest
                                    </span>
                                ) : (
                                    <span onClick={() => reSort("sales")}>
                                        Best Selling
                                    </span>
                                )}
                                <span onClick={() => reSort("sales")}>
                                    Popular
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.cards}>
                    {gigs.map((gig) => (
                        <GigCard
                            key={gig._id}
                            item={gig}
                            //   onClick={handleShowSingleGig}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

{
}

export default Gigs;

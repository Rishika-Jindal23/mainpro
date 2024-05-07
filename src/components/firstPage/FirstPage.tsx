"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Hero from "../layout/Hero";
import HeroTwo from "../layout/HeroTwo";
import { useRouter } from "next/navigation";
import Dashboard from "../layout/Dashboard";
import Loader from "../Loader/loader";

function FirstPage() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const router = useRouter();
    const [loading, setLoading] = useState(true); // Declare loading state

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    // console.log(isAuthenticated);

    return (
        <>
            {loading ? ( // Render loader if loading is true
                <Loader />
            ) : (
                <>
                    {!isAuthenticated ? (
                        <>
                            <Hero />
                            <HeroTwo />
                        </>
                    ) : (
                        <>
                            <Hero />
                            <Dashboard />
                            {/* Add any other components */}
                        </>
                    )}
                </>
            )}

            {/* {!isAuthenticated ? (
                <>
                    {" "}
                    <Hero />
                    <HeroTwo />
                </>
            ) : (
                <>
                    <Hero />
                    <Dashboard />
                    <></>
                </>
            )} */}
        </>
    );
}

export default FirstPage;

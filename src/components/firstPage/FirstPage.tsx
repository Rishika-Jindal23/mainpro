"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Hero from "../layout/Hero";
import HeroTwo from "../layout/HeroTwo";
import { useRouter } from "next/navigation";
import Dashboard from "../layout/Dashboard";
import Loader from "../Loader/loader";
import LandingPageComponent from "../layout/LandingPageComponent";

function FirstPage() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const router = useRouter();
    const [loading, setLoading] = useState(true); // Declare loading state

    // console.log(isAuthenticated);

    return (
        <>
            {!isAuthenticated ? (
                <>
                    <Hero />
                    <HeroTwo />
                </>
            ) : (
                <>
                    <Hero />
                    <LandingPageComponent />
                    {/* <Dashboard /> */}
                    <></>
                </>
            )}
        </>
    );
}

export default FirstPage;

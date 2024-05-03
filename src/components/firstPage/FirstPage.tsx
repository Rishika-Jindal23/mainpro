"use client";

import React from "react";
import { useSelector } from "react-redux";
import Hero from "../layout/Hero";
import HeroTwo from "../layout/HeroTwo";
import { useRouter } from "next/navigation";
import Dashboard from "../layout/Dashboard";

function FirstPage() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const router = useRouter();
    // console.log(isAuthenticated);

    return (
        <>
            {!isAuthenticated ? (
                <>
                    {" "}
                    <Hero />
                    <HeroTwo />
                </>
            ) : (
                <>
                    <Dashboard />
                    <></>
                </>
            )}
        </>
    );
}

export default FirstPage;

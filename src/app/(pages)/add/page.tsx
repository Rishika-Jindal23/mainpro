"use client";

import Image from "next/image";
import AddPage from "./AddPage";
//import LoginForm from "./login";
// import AddPage from "./Add";

export default function Add() {
    return (
        <div>
            <h1>hello from add page</h1>
            <AddPage />
            {/* //<AddPage /> */}
        </div>
    );
}
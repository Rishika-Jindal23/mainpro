"use client";
import React, { useEffect, useState } from "react";
import Pay from "./pay";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

//import styles from "./pay.module.scss";

function PayPage() {
    // const search = useSearchParams();

    // const gigid = search.get("gigid")?.split("?")[0];
    // const amount = search.get("gigid")?.split("?")[1].split("=")[1];

    // console.log(gigid, amount);
    return (
        <div>
            <Pay />
        </div>
    );
}

export default PayPage;

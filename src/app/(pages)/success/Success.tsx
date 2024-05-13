"use client";
import React, { useEffect } from "react";
import payment from "../../../../public/img/payment.webp";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import newRequest from "@/app/utils/newRequest";
import { useRouter } from "next/navigation";
function Success() {
    const router = useRouter();
    const search = useSearchParams();
    const payment_intent = search.get("payment_intent")?.split("?")[0];
    // console.log("payment>>>>>>>>>>>>>>>", payment_intent);
    useEffect(() => {
        const MakeRequest = async () => {
            try {
                await newRequest.patch("/orders", { payment_intent });
                setTimeout(() => {
                    router.push("/orders");
                }, 5000);
            } catch (error) {
                console.log("error>>>>>>>>>>>>>>>>>>", error);
            }
        };
        MakeRequest();
    }, []);
    return (
        <div>
            <div className="w-45 h-70  relative mt-5 items-center ">
                <Image
                    src={payment}
                    //   layout={"fill"}*
                    //    objectFit={"contain"}
                    alt="payment Successful"
                    // layout="responsive"
                ></Image>
                <div>
                    <p>
                        Don't close you will be redirected to nextpage soon...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Success;

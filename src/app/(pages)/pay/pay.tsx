"use client ";

import React, { useEffect, useState } from "react";
import PayPage from "./page";
import { useSearchParams } from "next/navigation";
//import PayPage from "./page";
import { loadStripe } from "@stripe/stripe-js";
import newRequest from "@/app/utils/newRequest";
import { Elements } from "@stripe/react-stripe-js";

import CheckOutForm from "@/components/checkOutForm/CheckOutForm";

const stripePromise = loadStripe(
    "  pk_test_51PA52mSG5CBTN0LhdsrNzbeGRHSkr9reuHpRJyh0kKfKeVjiwVcXNrdU71UB5olpEOfHGI5VLfe3ixxjY0yk7Iue007Un8wmOP"
);

const Pay: React.FC = () => {
    const search = useSearchParams();

    const gigid = search.get("gigid")?.split("?")[0];
    //const amount = search.get("gigid")?.split("?")[1].split("=")[1];

    //  console.log(gigid);

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const MakeRequest = async () => {
            try {
                const res = await newRequest.post(
                    `/orders/create-payment-intent/${gigid}`
                );
                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.log(err);
            }
        };
        MakeRequest();
    }, []);

    const appereance = { theme: "stripe" };
    const options = { clientSecret, appereance };
    return (
        <div className="touch-pan-y">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            )}
        </div>
    );
};

export default Pay;

"use client";

import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState("");
    const [message, setMessage] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage(
                        "Your payment was not successful, please try again."
                    );
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page   "http://localhost:5173/success"
                return_url: "http://localhost:3000/success",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (
            error &&
            (error.type === "card_error" || error.type === "validation_error")
        ) {
            setMessage(error.message);
        } else {
            console.log("Error:", error);
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs",
    };

    return (
        <div className="bg-blue-50 p-6 rounded-lg">
            <form
                id="payment-form"
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4"
            >
                <div>
                    <label htmlFor="email" className="font-semibold">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded-md px-3 py-2 mt-1"
                    />
                </div>
                <div>
                    <PaymentElement
                        id="payment-element"
                        options={paymentElementOptions}
                        className="border rounded-md px-3 py-2"
                    />
                </div>
                <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
                >
                    {isLoading ? (
                        <div className="spinner border-t-2 border-b-2 border-blue-800 rounded-full w-5 h-5"></div>
                    ) : (
                        "Pay now"
                    )}
                </button>
                {/* Show any error or success messages */}
                {message && (
                    <div id="payment-message" className="text-red-500 mt-2">
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default CheckOutForm;

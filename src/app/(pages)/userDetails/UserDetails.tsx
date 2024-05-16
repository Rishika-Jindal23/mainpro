"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import newRequest from "@/app/utils/newRequest";

function UserDetails() {
    const [userData, setUserData] = useState<{
        img: string;
        username: string;
        email: string;
        country: string;
        phone: string;
        desc: string;
        isSeller: boolean;
    } | null>(null);

    const router = useRouter();
    const search = useSearchParams();
    const loggedInUser = useSelector(
        (state: any) => state.auth.user.currentUser
    );

    const originaluser = loggedInUser ? JSON.parse(loggedInUser) : null;
    console.log("originaluse>>>>>>>>>.", originaluser);
    console.log("isSeller", originaluser.isSeller);
    const sellerdetails = "Seller Details";
    const buyerdetails = "Buyer Details";

    const sellerId = search.get("sellerId")?.split("?")[0];
    const buyerId = search.get("buyerId");
    // console.log("seller>>>>>.", sellerId);
    // console.log("buyer>>>>>.", buyerId);

    const id = originaluser.isSeller ? buyerId : sellerId;
    // console.log(id);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await newRequest.get(`users/${id}`);
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);
    console.log("user", userData);

    function handleContact(order: any): void {
        const joinId = sellerId;

        router.push(`/contact?joinId=${joinId}`);
    }
    function handleGoBack(order: any): void {
        router.push("/orders");
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "100vh", // Ensure the entire viewport height is covered
            }}
        >
            {userData && (
                <div
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "20px",
                        width: "400px",
                        backgroundColor: "#ffffff", // White background color for the card
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#4e8fb2", // Medium blue background color inside the card
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "20px",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#b0e0e6", // Light blue background color behind profile pic
                                borderRadius: "50%",
                                width: "200px",
                                height: "200px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={userData.img}
                                alt={userData.username}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                marginTop: "20px",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    margin: "5px 0",
                                    color: "#ffffff",
                                }}
                            >
                                {userData.username}
                            </p>
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    margin: "5px 0",
                                    color: "#ffffff",
                                }}
                            >
                                {userData.email}
                            </p>
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    margin: "5px 0",
                                    color: "#ffffff",
                                }}
                            >
                                {userData.country}
                            </p>
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    margin: "5px 0",
                                    color: "#ffffff",
                                }}
                            >
                                {userData.phone}
                            </p>
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    margin: "5px 0",
                                    color: "#ffffff",
                                }}
                            >
                                {userData.desc}
                            </p>
                            {userData.isSeller && (
                                <p
                                    style={{
                                        fontSize: "1.2rem",
                                        margin: "5px 0",
                                        color: "#ffffff",
                                    }}
                                >
                                    I create Gigs
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={handleContact}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#ffffff", // White button background color
                    color: "#4e8fb2", // Medium blue button text color
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                }}
            >
                Contact
            </button>

            <button
                onClick={handleGoBack}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#ffffff", // White button background color
                    color: "#4e8fb2", // Medium blue button text color
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                }}
            >
                Go Back
            </button>
        </div>
    );
}

export default UserDetails;

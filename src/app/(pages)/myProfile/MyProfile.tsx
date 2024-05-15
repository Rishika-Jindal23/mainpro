"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import newRequest from "@/app/utils/newRequest";
import { useRouter } from "next/navigation";

function MyProfile() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.auth.user.currentUser);
    const originaluser = loggedInUser ? JSON.parse(loggedInUser) : null;
    const userId = originaluser ? originaluser._id : null;

    const router = useRouter();
    // const [userData, setUserData] = useState(null);
    const [userData, setUserData] = useState<{
        img: string;
        username: string;
        email: string;
        country: string;
        phone: string;
        desc: string;
        isSeller: boolean;
    } | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await newRequest.get(`users/${userId}`);
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    console.log("user", userData);

    const handleGoBack = () => {
        router.push("/");
        // console.log("Update button clicked");
    };

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
                GoBack
            </button>
        </div>
    );
}

export default MyProfile;

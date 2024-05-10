"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

function MyProfile() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.auth.user.currentUser);
    const originaluser = JSON.parse(loggedInUser);
    const userId = originaluser._id;

    const handleUpdate = () => {
        console.log("Update button clicked");
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            {originaluser && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                        marginTop: "20px",
                    }}
                >
                    <img
                        src={originaluser.img}
                        alt={originaluser.username}
                        style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            marginRight: "20px",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                        }}
                    >
                        <p style={{ fontSize: "1.2rem" }}>
                            <strong>Username:</strong> {originaluser.username}
                        </p>
                        <p style={{ fontSize: "1.2rem" }}>
                            <strong>Email:</strong> {originaluser.email}
                        </p>
                        <p style={{ fontSize: "1.2rem" }}>
                            <strong>Country:</strong> {originaluser.country}
                        </p>
                        <p style={{ fontSize: "1.2rem" }}>
                            <strong>Phone:</strong> {originaluser.phone}
                        </p>
                        <p style={{ fontSize: "1.2rem" }}>
                            <strong>Description:</strong> {originaluser.desc}
                        </p>
                        {originaluser.isSeller && (
                            <p style={{ fontSize: "1.2rem" }}>
                                <strong>I am a Seller</strong>
                            </p>
                        )}
                    </div>
                </div>
            )}
            {/* <button
                onClick={handleUpdate}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                }}
            >
                Update
            </button> */}
        </div>
    );
}

export default MyProfile;

"use client";
import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import newRequest from "@/app/utils/newRequest";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await newRequest.post(
                "http://localhost:8000/passwords/forgotPassword",
                {
                    email,
                }
            );
            console.log("response>>>>>>>>>>...", response.data);
        } catch (error) {
            console.error("Error submitting email:", error);
        }
    };

    // const handleSubmit = (email: string) => {
    //     // Handle form submission, e.g., send the email to a server
    //     console.log("Submitted email:", email);
    // };

    return (
        <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <h1>Enter your email</h1>
            <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: "grid", gap: "10px" }}
            >
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={() => handleSubmit()}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default ForgotPassword;

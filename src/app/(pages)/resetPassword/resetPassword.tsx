"use client";
import React, { useState } from "react";
import { TextField, Button, Container, Grid } from "@mui/material";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import newRequest from "@/app/utils/newRequest";

function ResetPassword() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const search = useSearchParams();
    const token = search.get("token")?.split("?")[0];
    const router = useRouter();

    const handleResetPassword = async () => {
        try {
            const response = await newRequest.patch(
                `passwords/resetPassword/${token}`,
                { password }
            );
            console.log(response.data);
            alert("password reset successful");
            router.push("/login");
        } catch (error) {
            setError("Error resetting password. Please try again.");
            console.error("Error resetting password:", error);
        }
    };

    return (
        <>
            <Container maxWidth="sm" style={{ marginTop: "50px" }}>
                <h1>Reset Your Password</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleResetPassword();
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="password"
                                label="New Password"
                                variant="outlined"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Reset Password
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </Container>
        </>
    );
}

export default ResetPassword;

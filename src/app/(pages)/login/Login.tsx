"use client";

import React, { useState } from "react";
import { TextField, Button, Grid, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "@/redux_store/slice/authslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newRequest from "@/app/utils/newRequest";
import { useRouter } from "next/navigation";
import loginimage2 from "../../../../public/img/loginimage2.jpeg";
import Image from "next/image";

interface LoginProps {}

const LoginMain: React.FC<LoginProps> = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            const res = await newRequest.post("/auth/login", {
                username,
                password,
            });
            await toast.success("🦄 Login Successful");
            const token = res.data.token;
            const currentUser = JSON.stringify(res.data.info);

            dispatch(login({ currentUser, token }));
            //router.push("/landingpage");
            window.location.href = "/landingpage";
        } catch (err) {
            if (
                err.response &&
                err.response.data &&
                err.response.data.message
            ) {
                setError(err.response.data.message);
            } else {
                setError("invalid username or password");
            }
        }
    };

    return (
        <>
            <section className="grid grid-cols-2 mt-10">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "70vh",
                    }}
                >
                    <Image src={loginimage2} alt="test" />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "70vh",
                    }}
                >
                    <div
                        style={{
                            maxWidth: 400,
                            margin: "auto",
                            textAlign: "center",
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Grid
                                container
                                spacing={2}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Grid item xs={12}>
                                    <TextField
                                        id="username"
                                        label="Username"
                                        variant="outlined"
                                        fullWidth
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        error={error && !username}
                                        helperText={
                                            error && !username
                                                ? "Username is required."
                                                : ""
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        fullWidth
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        error={error && !password}
                                        helperText={
                                            error && !password
                                                ? "Password is required."
                                                : ""
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                            <ToastContainer />
                            <div style={{ textAlign: "center", marginTop: 10 }}>
                                {error && (
                                    <p style={{ color: "red" }}>{error}</p>
                                )}
                                <Link href="/register">Register</Link>
                                <span style={{ marginLeft: 10 }}>
                                    <Link href="/ForgotPassword">
                                        Forget Password
                                    </Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginMain;

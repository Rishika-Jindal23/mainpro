// Login.tsx
"use client";
import React, { useState } from "react";
//import { useRouter } from "next/router";
import styles from "./Login.module.scss"; // Assuming you have a CSS module for styling
import { error } from "console";
import axios from "axios";
import newRequest from "@/app/utils/newRequest";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// import { login } from   "../../../redux_store/slice/"
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "@/redux_store/slice/authslice";
// import { login } from "../../actions/authActions";

interface LoginProps {}

const LoginMain: React.FC<LoginProps> = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // console.log(username, password);
        try {
            const res = await newRequest.post("/auth/login", {
                username,
                password,
            });
            await toast.success("🦄 Login Successful");
            const token = res.data.token;

            const currentUser = JSON.stringify(res.data.info);

            dispatch(login({ currentUser, token }));
            window.location.href = "/landingpage";
            const user = {
                // Define your user properties here
                _id: res.data._id,
                username: res.data.username,
                email: res.data.email,
                isSeller: res.data.isSeller,
                phone: res.data.phone,
            };
        } catch (err) {
            setError(err);
            console.log(err);
        }
    };

    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    //defaultValue={""}
                    placeholder="johndoe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    // defaultValue={" "}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <ToastContainer />
                {/* <span> {error && <p className={styles.error}>{error}</p>}</span> */}
            </form>
        </div>
    );
};

export default LoginMain;

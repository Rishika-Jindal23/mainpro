"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button, Switch } from "@mui/material"; // Assuming you're using Material-UI
import { UploadButton } from "../../../utils1/uploadthing";

import styles from "./Register.module.scss";
import axios from "axios";
import upload from "@/app/utils/upload";
import newRequest from "@/app/utils/newRequest";

interface User {
    username: string;
    email: string;
    password: string;
    img: string | null;
    country: string;
    isSeller: boolean;
    desc: string;
}

const Register1: React.FC = () => {
    const [message, setMessage] = useState("");
    const [user, setUser] = useState<User>({
        username: "",
        email: "",
        password: "",
        img: null,
        country: "",
        isSeller: false,
        desc: "",
    });
    const [error, setError] = useState<string>("");

    const handleFileChange = (imageUrl: string) => {
        setUser((prev) => ({
            ...prev,
            img: imageUrl,
        }));
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSeller = (e: ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => {
            return { ...prev, isSeller: e.target.checked };
        });
    };

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        console.log("userdetails", user);
        try {
            const res = await newRequest.post("/auth/register", {
                user,
            });

            console.log("res : ", res);
            window.location.href = "/login";
        } catch (err) {
            console.log("error", err);
            setError("signup failed"); // Assuming backend sends error message in response
        }
        console.log("submit call");
    };

    return (
        <div className={styles.register}>
            <form onSubmit={handleSubmit} className={styles.gridContainer}>
                <div className={styles.left}>
                    <TextField
                        name="username"
                        label="Username"
                        type="text"
                        placeholder="johndoe"
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="email"
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        onChange={handleChange}
                        required
                    />
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res: { url: string }[]) => {
                            if (res && res.length > 0) {
                                handleFileChange(res[0].url);
                            }
                            console.log("Files: ", res);

                            alert("Upload Completed");
                        }}
                        onUploadError={(error: Error) => {
                            alert(`ERROR! ${error.message}`);
                        }}
                    />
                    <TextField
                        name="country"
                        label="Country"
                        type="text"
                        placeholder="India"
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit">Register</Button>
                    {error && <p className={styles.error}>{error}</p>}
                </div>
                <div className={styles.right}>
                    {/* <h1>Register</h1> */}
                    <div className={styles.toggle}>
                        <label htmlFor="">Activate the seller account</label>
                        <Switch
                            checked={user.isSeller}
                            onChange={handleSeller}
                        />
                    </div>
                    <TextField
                        name="phone"
                        label="Phone Number"
                        type="text"
                        placeholder="+1 234 567 89"
                        onChange={handleChange}
                    />
                    <TextField
                        name="desc"
                        label="Description"
                        multiline
                        rows={4}
                        placeholder="A short description of yourself"
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default Register1;

"use client";

import React, { useState } from "react";
import styles from "./sendEmail.module.scss";

import { Button } from "@mui/material";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import EmailIcon from "@mui/icons-material/Email";
import newRequest from "@/app/utils/newRequest";
import { useRouter } from "next/navigation";

function SendEmail() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const validateEmail = (email) => {
        // Email format validation using regular expression
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        let valid = true;
        if (!name.trim()) {
            setNameError("Name is required");
            valid = false;
        } else {
            setNameError("");
        }

        if (!email.trim()) {
            setEmailError("Email is required");
            valid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Invalid email format");
            valid = false;
        } else {
            setEmailError("");
        }

        if (!message.trim()) {
            setMessageError("Message is required");
            valid = false;
        } else {
            setMessageError("");
        }

        if (!valid) {
            return;
        }

        // Form data
        const data = {
            name,
            email,
            message,
        };

        try {
            // Send request
            const res = await newRequest.post("sendEmails", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.status === 200) {
                // Successful response
                alert("Mail sent successfuly");
                setSubmitted(true);
                setName("");
                setEmail("");
                setMessage("");
                router.push("/contact");
            } else {
                // Handle other responses
                alert("Mail not sent");
            }
        } catch (error) {
            // Handle backend error
            console.error("Error:", error);
            alert("Failed to send email. Please try again later.");
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.main}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.inputField}
                        placeholder="Your Name"
                    />
                    <span className={styles.error}>{nameError}</span>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.inputField}
                        placeholder="Enter Email"
                    />
                    <span className={styles.error}>{emailError}</span>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={styles.inputField}
                        placeholder="Enter Message"
                    />
                    <span className={styles.error}>{messageError}</span>
                </div>
                <Button
                    type="submit"
                    className={styles.submitButton}
                    onClick={handleSubmit}
                >
                    Send Message <SendSharpIcon />
                </Button>
            </form>
        </div>
    );
}

export default SendEmail;

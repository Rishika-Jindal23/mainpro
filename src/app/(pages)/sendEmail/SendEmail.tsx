"use client";
import React from "react";
import styles from "./sendEmail.module.scss";
import { useState } from "react";
import newRequest from "@/app/utils/newRequest";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

function SendEmail() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log("Sending");
        let data = {
            name,
            email,
            message,
        };
        try {
            const res = await newRequest.post("sendEmails", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Response:", res.data);

            if (res.status === 200) {
                alert("mail sent successfully");
                console.log("Response succeeded!");
                setSubmitted(true);
                setName("");
                setEmail("");
                router.push("/contact");

                // setBody('')
            } else {
                alert("mail not sent");
            }

            // Handle success
        } catch (error) {
            console.error("error>>>>>>>>>.", error);
            // alert("mail not sent");
        }
    };

    return (
        <div className="mt-none">
            <div className={styles.container}>
                <form className={styles.main}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        {/* < input type='text' name='name' className={styles.inputField} />   */}
                        <input
                            type="text"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            name="name"
                            className={styles.inputField}
                            placeholder="Your Name"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        {/* < input type='email' name='email' className={styles.inputField} /> */}
                        <input
                            type="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            disabled
                            name="email"
                            className={styles.inputField}
                            placeholder="your email"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        {/* < input type='text' name='message' className={styles.inputField} /> */}
                        <input
                            type="text"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            name="message"
                            className={styles.inputField}
                            placeholder="Enter Message"
                        />
                    </div>
                    <button
                        type="submit"
                        className={styles.submitButton}
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        Send Message <SendSharpIcon />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SendEmail;

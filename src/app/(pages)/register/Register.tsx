"use client";

// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { UploadButton } from "../../../utils1/uploadthing";

// import styles from "./Register.module.scss";
// import axios from "axios";
// import upload from "@/app/utils/upload";
// import newRequest from "@/app/utils/newRequest";

// interface User {
//     username: string;
//     email: string;
//     password: string;
//     img: string | null;
//     country: string;
//     isSeller: boolean;
//     desc: string;
// }

// const Register1: React.FC = () => {
//     // const [file, setFile] = useState<File | null>(null);
//     const [user, setUser] = useState<User>({
//         username: "",
//         email: "",
//         password: "",
//         img: null,
//         country: "",
//         isSeller: false,
//         desc: "",
//     });

//     const handleFileChange = (imageUrl: string) => {
//         setUser((prev) => ({
//             ...prev,
//             img: imageUrl,
//         }));
//     };

//     const handleChange = (
//         e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//         setUser((prev) => {
//             return { ...prev, [e.target.name]: e.target.value };
//         });
//     };

//     const handleSeller = (e: ChangeEvent<HTMLInputElement>) => {
//         setUser((prev) => {
//             return { ...prev, isSeller: e.target.checked };
//         });
//     };

//     const handleSubmit = async (
//         e: FormEvent<HTMLFormElement>
//     ): Promise<void> => {
//         e.preventDefault();

//         console.log("userdetails", user);
//         try {
//             const res = await newRequest.post("/auth/register", {
//                 user,
//             });

//             console.log("res : ", res);
//             window.location.href = "/login";
//         } catch (err) {
//             console.log(err);
//         }
//         console.log("submit call");
//     };
//     console.log("user  : ", user);
//     return (
//         <div className={styles.register}>
//             <form onSubmit={handleSubmit}>
//                 <div className={styles.left}>
//                     <h1>Create a new account</h1>
//                     <label htmlFor="">Username</label>
//                     <input
//                         name="username"
//                         type="text"
//                         placeholder="johndoe"
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="">Email</label>
//                     <input
//                         name="email"
//                         type="email"
//                         placeholder="email"
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="">Password</label>
//                     <input
//                         name="password"
//                         type="password"
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="">Profile Picture</label>
//                     {/* <ImageUpload /> */}
//                     <UploadButton
//                         endpoint="imageUploader"
//                         onClientUploadComplete={(res: { url: string }[]) => {
//                             if (res && res.length > 0) {
//                                 handleFileChange(res[0].url);
//                             }
//                             // Do something with the response
//                             console.log("Files: ", res);
//                             alert("Upload Completed");
//                         }}
//                         onUploadError={(error: Error) => {
//                             // Do something with the error.
//                             alert(`ERROR! ${error.message}`);
//                         }}
//                     />

//                     {/* <input
//                         type="file"
//                         onChange={(e) => setFile(e.target.files?.[0] || null)}
//                     /> */}
//                     <label htmlFor="">Country</label>
//                     <input
//                         name="country"
//                         type="text"
//                         placeholder="India"
//                         onChange={handleChange}
//                     />
//                     <button type="submit">Register</button>
//                 </div>
//                 <div className={styles.right}>
//                     <h1>I want to become a seller</h1>
//                     <div className={styles.toggle}>
//                         <label htmlFor="">Activate the seller account</label>
//                         <label className={styles.switch}>
//                             <input type="checkbox" onChange={handleSeller} />
//                             <span className={styles.slider}></span>
//                         </label>
//                     </div>
//                     <label htmlFor="">Phone Number</label>
//                     <input
//                         name="phone"
//                         type="text"
//                         placeholder="+1 234 567 89"
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="">Description</label>
//                     <textarea
//                         placeholder="A short description of yourself"
//                         name="desc"
//                         id=""
//                         //cols="30"
//                         //rows="10"
//                         onChange={handleChange}
//                     ></textarea>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Register1;
// *************************************

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

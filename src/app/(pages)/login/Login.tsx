// // Login.tsx
"use client";
// import React, { useState } from "react";
// //import { useRouter } from "next/router";
// import styles from "./Login.module.scss"; // Assuming you have a CSS module for styling
// import { error } from "console";
// import axios from "axios";
// import newRequest from "@/app/utils/newRequest";
// import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";
// // import { login } from   "../../../redux_store/slice/"
// import { Bounce, ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { login } from "@/redux_store/slice/authslice";
// // import { login } from "../../actions/authActions";
// import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";

// interface LoginProps {}

// const LoginMain: React.FC<LoginProps> = () => {
//     const dispatch = useDispatch();
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         // console.log(username, password);
//         try {
//             const res = await newRequest.post("/auth/login", {
//                 username,
//                 password,
//             });
//             await toast.success("🦄 Login Successful");
//             const token = res.data.token;

//             const currentUser = JSON.stringify(res.data.info);

//             dispatch(login({ currentUser, token }));
//             window.location.href = "/landingpage";
//             const user = {
//                 // Define your user properties here
//                 _id: res.data._id,
//                 username: res.data.username,
//                 email: res.data.email,
//                 isSeller: res.data.isSeller,
//                 phone: res.data.phone,
//             };
//         } catch (err) {
//             setError(err);
//             console.log(err);
//         }
//     };

//     return (
//         <div className={styles.login}>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username</label>
//                 <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     //defaultValue={""}
//                     placeholder="johndoe"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <label htmlFor="password">Password</label>
//                 <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     // defaultValue={" "}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Login</button>
//                 <ToastContainer />
//                 <span>
//                     {" "}
//                     <Link className={styles.signup} href="/register">
//                         {" "}
//                         Register
//                     </Link>
//                     <span className={styles.forgetpassword}>
//                         <Link href="/ForgotPassword"> Forget Password</Link>
//                     </span>
//                 </span>
//                 {/* <span> {error && <p className={styles.error}>{error}</p>}</span> */}
//             </form>
//         </div>
//     );
// };

// export default LoginMain;

// ********************************************************
// import React, { useState } from "react";
// import { TextField, Button, Grid, Link } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { login } from "@/redux_store/slice/authslice";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import newRequest from "@/app/utils/newRequest";

// interface LoginProps {}

// const LoginMain: React.FC<LoginProps> = () => {
//     const dispatch = useDispatch();
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         try {
//             const res = await newRequest.post("/auth/login", {
//                 username,
//                 password,
//             });
//             await toast.success("🦄 Login Successful");
//             const token = res.data.token;
//             const currentUser = JSON.stringify(res.data.info);

//             dispatch(login({ currentUser, token }));
//             window.location.href = "/landingpage";
//         } catch (err) {
//             setError(err);
//             console.log(err);
//         }
//     };

//     return (
//         <div style={{ maxWidth: 400, margin: "auto" }}>
//             <form onSubmit={handleSubmit}>
//                 <Grid
//                     container
//                     spacing={2}
//                     alignItems="center"
//                     justifyContent="center"
//                 >
//                     <Grid item xs={12}>
//                         <TextField
//                             id="username"
//                             label="Username"
//                             variant="outlined"
//                             fullWidth
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             id="password"
//                             label="Password"
//                             variant="outlined"
//                             type="password"
//                             fullWidth
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                             fullWidth
//                         >
//                             Login
//                         </Button>
//                     </Grid>
//                 </Grid>
//                 <ToastContainer />
//                 <div style={{ textAlign: "center", marginTop: 10 }}>
//                     <Link href="/register">Register</Link>
//                     <span style={{ marginLeft: 10 }}>
//                         <Link href="/ForgotPassword">Forget Password</Link>
//                     </span>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default LoginMain;

// **********************************************
import React, { useState } from "react";
import { TextField, Button, Grid, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "@/redux_store/slice/authslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newRequest from "@/app/utils/newRequest";

interface LoginProps {}

const LoginMain: React.FC<LoginProps> = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
            window.location.href = "/landingpage";
        } catch (err) {
            if (
                err.response &&
                err.response.data &&
                err.response.data.message
            ) {
                setError(err.response.data.message);
            } else {
                setError("An error occurred while logging in.");
            }
        }
    };

    return (
        <>
            <h1 className="text-center">Login Form</h1>
            <section className="grid grid-cols-2">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "70vh",
                    }}
                ></div>
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

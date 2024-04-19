"use client";

// import React from "react";

// const SignUpForm: React.FC = () => {
//     return (
//         <div className="bg-gray-lighter min-h-screen flex flex-col">
//             <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//                 <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
//                     <h1 className="mb-8 text-3xl text-center">Sign up</h1>
//                     <input
//                         type="text"
//                         className="block border border-gray-light w-full p-3 rounded mb-4"
//                         name="fullname"
//                         placeholder="Full Name"
//                     />
//                     <input
//                         type="text"
//                         className="block border border-gray-light w-full p-3 rounded mb-4"
//                         name="email"
//                         placeholder="Email"
//                     />
//                     <input
//                         type="password"
//                         className="block border border-gray-light w-full p-3 rounded mb-4"
//                         name="password"
//                         placeholder="Password"
//                     />
//                     <input
//                         type="password"
//                         className="block border border-gray-light w-full p-3 rounded mb-4"
//                         name="confirm_password"
//                         placeholder="Confirm Password"
//                     />
//                     <button
//                         type="submit"
//                         className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     >
//                         Create Account
//                     </button>
//                     <div className="text-center text-sm text-gray-dark mt-4">
//                         By signing up, you agree to the
//                         <a
//                             className="no-underline border-b border-gray-dark text-gray-dark"
//                             href="#"
//                         >
//                             Terms of Service
//                         </a>{" "}
//                         and
//                         <a
//                             className="no-underline border-b border-gray-dark text-gray-dark"
//                             href="#"
//                         >
//                             Privacy Policy
//                         </a>
//                     </div>
//                 </div>
//                 <div className="text-gray-dark mt-6">
//                     Already have an account?
//                     <a
//                         className="no-underline border-b border-blue text-blue"
//                         href="../login/"
//                     >
//                         Log in
//                     </a>
//                     .
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUpForm;

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
}

const SignUpForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    const [errors, setErrors] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const submitForm = async () => {
        try {
            console.log("form data : ", formData);
            const response = await fetch("http://localhost:8000/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });
            console.log("response : ", response);
            if (response.ok) {
                // Redirect user or show success message
                const data = await response.json();
                // localStorage.setItem('token',data.token)
                //localStorage.setItem("user", data);

                // add user in context or reducer

                console.log("Hello to the registered user!");
            } else {
                console.log("An error occurred");
                throw new Error("Network response was not ok.");
            }
        } catch (error) {
            console.error(
                "There was a problem with the form submission:",
                error
            );
            // Handle error - display error message to user or retry submission
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let formIsValid = true;
        const newErrors: FormData = { ...errors };

        // Validation for Full Name
        if (!formData.name.trim()) {
            newErrors.name = "Full Name is required";
            formIsValid = false;
        } else {
            newErrors.name = "";
        }

        // Validation for Email
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            formIsValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
            formIsValid = false;
        } else {
            newErrors.email = "";
        }

        // Validation for Password
        if (!formData.password) {
            newErrors.password = "Password is required";
            formIsValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
            formIsValid = false;
        } else {
            newErrors.password = "";
        }

        // Validation for Confirm Password
        if (!formData.confirm_password) {
            newErrors.confirm_password = "Confirm Password is required";
            formIsValid = false;
        } else if (formData.confirm_password !== formData.password) {
            newErrors.confirm_password = "Passwords do not match";
            formIsValid = false;
        } else {
            newErrors.confirm_password = "";
        }

        setErrors(newErrors);

        if (formIsValid) {
            // Form submission logic can go here
            console.log("Form submitted successfully!");
            console.log(formData);
            if (formIsValid) {
                // Form submission logic can go here
                console.log("Form submitted successfully!");
                // Example: Send form data to server
                submitForm();
            }
        }
    };

    return (
        <div className="bg-gray-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className={`block border border-gray-light w-full p-3 rounded mb-4 ${
                                errors.name && "border-red-500"
                            }`}
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs italic">
                                {errors.name}
                            </p>
                        )}
                        <input
                            type="text"
                            className={`block border border-gray-light w-full p-3 rounded mb-4 ${
                                errors.email && "border-red-500"
                            }`}
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs italic">
                                {errors.email}
                            </p>
                        )}
                        <input
                            type="password"
                            className={`block border border-gray-light w-full p-3 rounded mb-4 ${
                                errors.password && "border-red-500"
                            }`}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs italic">
                                {errors.password}
                            </p>
                        )}
                        <input
                            type="password"
                            className={`block border border-gray-light w-full p-3 rounded mb-4 ${
                                errors.confirm_password && "border-red-500"
                            }`}
                            name="confirm_password"
                            placeholder="Confirm Password"
                            value={formData.confirm_password}
                            onChange={handleChange}
                        />
                        {errors.confirm_password && (
                            <p className="text-red-500 text-xs italic">
                                {errors.confirm_password}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Create Account
                        </button>
                    </form>
                    <div className="text-center text-sm text-gray-dark mt-4">
                        By signing up, you agree to the
                        <a
                            className="no-underline border-b border-gray-dark text-gray-dark"
                            href="#"
                        >
                            Terms of Service
                        </a>{" "}
                        and
                        <a
                            className="no-underline border-b border-gray-dark text-gray-dark"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div className="text-gray-dark mt-6">
                    Already have an account?
                    <a
                        className="no-underline border-b border-blue text-blue"
                        href="../login/"
                    >
                        Log in
                    </a>
                    .
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;

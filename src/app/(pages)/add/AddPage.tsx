"use client ";

import React, { useEffect, useState } from "react";
import styles from "./Add.module.scss";
import { UploadButton } from "@/utils1/uploadthing";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Add: React.FC = () => {
    const router = useRouter();
    //const token = localStorage.getItem("token");
    //console.log("token>>>>>>>>>>>>>>>>>>>>>", token);

    // const currentUserData = localStorage.getItem("currentUser");
    // const originalUser = JSON.parse(currentUserData);
    const originalUser = useSelector((state) => state.auth.user.currentUser);
    const allData = JSON.parse(originalUser);
    const sellerName = allData.username;
    // console.log("uuuuuuu----", allData);

    console.log(
        "current user ---------",
        useSelector((state) => state)
    );
    const token = useSelector((state) => state.auth.token);

    // console.log("-------------------------------", originalUser.username);

    const sellerusername = "hhh";
    //console.log("sellerusername : ", sellerusername);

    if (typeof window !== "undefined") {
        console.log("we are running on the client");
    } else {
        console.log("we are running on the server");
    }
    const [file, setFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        username: sellerName,
        cat: "",
        cover: "",
        Images: [],
        desc: "",
        shortDesc: "",
        deliveryTime: 0,
        revisionNumber: 0,
        features: [],
        price: 0,
    });

    const handleChange = (
        e: React.ChangeEvent<
            | HTMLInputElement
            | HTMLSelectElement
            | HTMLTextAreaElement
            | HTMLInputElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (imageUrl: string) => {
        setFormData((prev) => ({
            ...prev,
            cover: imageUrl,
        }));
    };

    const handleUploadImagesChange = (imageUrl: string) => {
        setFormData((prev) => ({
            ...prev,
            images: imageUrl,
        }));
    };

    // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, files } = e.target;
    //     if (files) {
    //         setFormData({
    //             ...formData,
    //             [name]: files[0],
    //         });
    //     }
    // };

    // const handleUploadImagesChange = (
    //     e: React.ChangeEvent<HTMLInputElement>
    // ) => {
    //     const { name, files } = e.target;
    //     if (files) {
    //         setFormData({
    //             ...formData,
    //             [name]: files,
    //         });
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        console.log(formData);

        e.preventDefault();
        const response = await fetch("http://localhost:8000/gigs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            credentials: "include",
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            // If submission is successful, you can redirect or show a success message
            console.log("Data sent successfully!");
            router.push("/myGigs");
        } else {
            console.error("Failed to send data");
        }
    };

    return (
        <div className={styles.add}>
            <div className={styles.container}>
                <h1>Add New </h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.sections}>
                        <div className={styles.info}>
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                placeholder="e.g. I will do something I'm really good at"
                                onChange={handleChange}
                            />
                            <label htmlFor="category">Category</label>
                            <input
                                type="text"
                                name="cat"
                                id="cat"
                                value={formData.cat}
                                onChange={handleChange}
                                placeholder="Enter a category"
                            />
                            <label htmlFor="coverImage">Cover Image</label>
                            {/* <input
                                type="file"
                                name="coverImage"
                                value={formData.cover}
                                onChange={handleImageChange}
                            /> */}

                            <UploadButton
                                endpoint="imageUploader"
                                onClientUploadComplete={(
                                    res: { url: string }[]
                                ) => {
                                    if (res && res.length > 0) {
                                        handleFileChange(res[0].url);
                                    }
                                    // Do something with the response
                                    console.log("Files: ", res);
                                    alert("Upload Completed");
                                }}
                                onUploadError={(error: Error) => {
                                    // Do something with the error.
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />

                            <label htmlFor="uploadImages">Upload Image</label>

                            <UploadButton
                                endpoint="imageUploader"
                                onClientUploadComplete={(
                                    res: { url: string }[]
                                ) => {
                                    if (res && res.length > 0) {
                                        handleUploadImagesChange(res[0].url);
                                    }
                                    // Do something with the response
                                    console.log("Files: ", res);
                                    alert("Upload Completed");
                                }}
                                onUploadError={(error: Error) => {
                                    // Do something with the error.
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />

                            {/* <input
                                type="file"
                                name="uploadImages"
                                multiple
                                value={formData.Images}
                                onChange={handleUploadImagesChange}
                            /> */}
                            <label>Description</label>
                            <textarea
                                name="desc"
                                placeholder="Brief descriptions to introduce your service to customers"
                                cols={0}
                                rows={16}
                                value={formData.desc}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit">Create</button>
                        </div>
                        <div className={styles.details}>
                            {/* <label htmlFor="serviceTitle">Service Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                name="Title"
                                placeholder="e.g. One-page web design"
                                onChange={handleChange}
                            /> */}
                            <label htmlFor="shortDescription">
                                Short Description
                            </label>
                            <textarea
                                name="shortDesc"
                                value={formData.shortDesc}
                                placeholder="Short description of your service"
                                cols={30}
                                rows={10}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="deliveryTime">
                                Delivery Time (e.g. 3 days)
                            </label>
                            <input
                                type="number"
                                value={formData.deliveryTime}
                                name="deliveryTime"
                                onChange={handleChange}
                            />
                            <label htmlFor="revisionNumber">
                                Revision Number
                            </label>
                            <input
                                value={formData.revisionNumber}
                                type="number"
                                name="revisionNumber"
                                onChange={handleChange}
                            />
                            <label htmlFor="features">Add Features</label>
                            <input
                                type="text"
                                value={formData.features[0]}
                                name="features1"
                                placeholder="e.g. page design"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="features2"
                                value={formData.features[1]}
                                placeholder="e.g. file uploading"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="features3"
                                value={formData.features[2]}
                                placeholder="e.g. setting up a domain"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="features4"
                                value={formData.features[3]}
                                placeholder="e.g. hosting"
                                onChange={handleChange}
                            />
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Add;

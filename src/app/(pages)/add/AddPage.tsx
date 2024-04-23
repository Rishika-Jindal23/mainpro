"use client ";
// // import "./add.scss";
// // export default function AddPage() {
// //     return (
// //         <div className="add">
// //             <h1>hello from Add component page</h1>
// //         </div>
// //     );
// // }
// import React from "react";
// import styles from "./Add.module.scss"; // Assuming
// // Assuming you're using CSS modules
// // If you're using regular CSS, you can use import "./Add.scss";

// const Add: React.FC = () => {
//     return (
//         <div className={styles.add}>
//             <div className={styles.container}>
//                 <h1>Add New Sphere</h1>
//                 <div className={styles.sections}>
//                     <div className={styles.info}>
//                         <label htmlFor="">Title</label>
//                         <input
//                             type="text"
//                             placeholder="e.g. I will do something I'm really good at"
//                         />
//                         <label htmlFor="">Category</label>
//                         <select name="cats" id="cats">
//                             <option value="design">Design</option>
//                             <option value="web">Web Development</option>
//                             <option value="animation">Animation</option>
//                             <option value="music">Music</option>
//                         </select>
//                         <label htmlFor="">Cover Image</label>
//                         <input type="file" />
//                         <label htmlFor="">Upload Images</label>
//                         <input type="file" multiple />
//                         <label htmlFor="">Description</label>
//                         <textarea
//                             placeholder="Brief descriptions to introduce your service to customers"
//                             cols={0}
//                             rows={16}
//                         ></textarea>
//                         <button>Create</button>
//                     </div>
//                     <div className={styles.details}>
//                         <label htmlFor="">Service Title</label>
//                         <input
//                             type="text"
//                             placeholder="e.g. One-page web design"
//                         />
//                         <label htmlFor="">Short Description</label>
//                         <textarea
//                             placeholder="Short description of your service"
//                             cols={30}
//                             rows={10}
//                         ></textarea>
//                         <label htmlFor="">Delivery Time (e.g. 3 days)</label>
//                         <input type="number" />
//                         <label htmlFor="">Revision Number</label>
//                         <input type="number" />
//                         <label htmlFor="">Add Features</label>
//                         <input type="text" placeholder="e.g. page design" />
//                         <input type="text" placeholder="e.g. file uploading" />
//                         <input
//                             type="text"
//                             placeholder="e.g. setting up a domain"
//                         />
//                         <input type="text" placeholder="e.g. hosting" />
//                         <label htmlFor="">Price</label>
//                         <input type="number" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Add;

import React, { useState } from "react";
import styles from "./Add.module.scss"; // Assuming
// import getToken from "@/app/utils/getToken";

const Add: React.FC = () => {
    console.log("add page--------------------------");

    // const currentUser = localStorage.getItem("currentUser");
    // console.log("add pge user : ", currentUser?.username);
    // const cookieStore = cookies();
    const token = localStorage.getItem("token");
    // const accessToken = cookieStore.get("accessToken");
    // console.log("accessToken : ", accessToken);
    // const accessToken = getToken();
    // console.log("accessToken : ", accessToken);

    const [formData, setFormData] = useState({
        title: "",
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

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files) {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        }
    };

    const handleUploadImagesChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, files } = e.target;
        if (files) {
            setFormData({
                ...formData,
                [name]: files,
            });
        }
    };

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
        } else {
            console.error("Failed to send data");
        }
    };

    return (
        <div className={styles.add}>
            <div className={styles.container}>
                <h1>Add New Sphere</h1>
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
                            <select
                                name="cat"
                                id="cat"
                                value={formData.cat}
                                onChange={handleChange}
                            >
                                <option value="">Select a category</option>
                                <option value="design">Design</option>
                                <option value="web">Web Development</option>
                                <option value="animation">Animation</option>
                                <option value="music">Music</option>
                            </select>
                            <label htmlFor="coverImage">Cover Image</label>
                            <input
                                type="file"
                                name="coverImage"
                                value={formData.cover}
                                onChange={handleImageChange}
                            />
                            <label htmlFor="uploadImages">Upload Images</label>
                            <input
                                type="file"
                                name="uploadImages"
                                multiple
                                value={formData.Images}
                                onChange={handleUploadImagesChange}
                            />
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
                                name="serviceTitle"
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
                                value={formData.features}
                                name="features"
                                placeholder="e.g. page design"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="features"
                                value={formData.features}
                                placeholder="e.g. file uploading"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="features"
                                value={formData.features}
                                placeholder="e.g. setting up a domain"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="features"
                                value={formData.features}
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

"use client ";
import React, { useState } from "react";
import styles from "./Add.module.scss"; // Assuming
//import { ClientComponent } from "react";

interface FormDataType {
    title: string;
    category: string;
    coverImage: string;
    uploadImages: string[];
    description: string;
    serviceTitle: string;
    shortDescription: string;
    deliveryTime: number;
    revisionNumber: number;
    features: string[];
    price: number;
}

const Add: React.FC = () => {
    const [formData, setFormData] = useState<FormDataType>({
        title: "",
        category: "",
        coverImage: "",
        uploadImages: [],
        description: "",
        serviceTitle: "",
        shortDescription: "",
        deliveryTime: 0,
        revisionNumber: 0,
        features: ["", "", "", ""],
        price: 0,
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFeatureChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const newFeatures = [...formData.features];
        newFeatures[index] = e.target.value;
        setFormData({
            ...formData,
            features: newFeatures,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform action
            console.log("Form submitted successfully:", formData);
        } else {
            console.error("Form validation failed");
        }
    };

    const validateForm = () => {
        return (
            formData.title !== "" &&
            formData.description !== "" &&
            formData.category !== "" &&
            formData.price !== 0 &&
            formData.shortDescription !== "" &&
            formData.deliveryTime !== 0 &&
            formData.revisionNumber !== 0
        );
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
                                id="title"
                                placeholder="e.g. I will do something I'm really good at"
                                value={formData.title}
                                onChange={handleChange}
                            />
                            {!formData.title && <p>enter title</p>}
                            <label htmlFor="category">Category</label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                placeholder="e.g. Design, Web Development, Animation, Music"
                                value={formData.category}
                                onChange={handleChange}
                            />
                            <label htmlFor="coverImage">Cover Image</label>
                            <input
                                type="file"
                                name="coverImage"
                                id="coverImage"
                                onChange={handleChange}
                            />
                            <label htmlFor="uploadImages">Upload Images</label>
                            <input
                                type="file"
                                name="uploadImages"
                                id="uploadImages"
                                multiple
                                onChange={handleChange}
                            />
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Brief descriptions to introduce your service to customers"
                                cols={0}
                                rows={16}
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit">Create</button>
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="serviceTitle">Service Title</label>
                            <input
                                type="text"
                                name="serviceTitle"
                                id="serviceTitle"
                                placeholder="e.g. One-page web design"
                                value={formData.serviceTitle}
                                onChange={handleChange}
                            />
                            <label htmlFor="shortDescription">
                                Short Description
                            </label>
                            <textarea
                                name="shortDescription"
                                id="shortDescription"
                                placeholder="Short description of your service"
                                cols={30}
                                rows={10}
                                value={formData.shortDescription}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="deliveryTime">
                                Delivery Time (e.g. 3 days)
                            </label>
                            <input
                                type="number"
                                name="deliveryTime"
                                id="deliveryTime"
                                value={formData.deliveryTime}
                                onChange={handleChange}
                            />
                            <label htmlFor="revisionNumber">
                                Revision Number
                            </label>
                            <input
                                type="number"
                                name="revisionNumber"
                                id="revisionNumber"
                                value={formData.revisionNumber}
                                onChange={handleChange}
                            />
                            <label htmlFor="features">Add Features</label>
                            <input
                                type="text"
                                name="features"
                                id="feature1"
                                placeholder="e.g. page design"
                                value={formData.features[0]}
                                onChange={(e) => handleFeatureChange(e, 0)}
                            />
                            <input
                                type="text"
                                name="features"
                                id="feature2"
                                placeholder="e.g. file uploading"
                                value={formData.features[1]}
                                onChange={(e) => handleFeatureChange(e, 1)}
                            />
                            <input
                                type="text"
                                name="features"
                                id="feature3"
                                placeholder="e.g. setting up a domain"
                                value={formData.features[2]}
                                onChange={(e) => handleFeatureChange(e, 2)}
                            />
                            <input
                                type="text"
                                name="features"
                                id="feature4"
                                placeholder="e.g. hosting"
                                value={formData.features[3]}
                                onChange={(e) => handleFeatureChange(e, 3)}
                            />
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
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

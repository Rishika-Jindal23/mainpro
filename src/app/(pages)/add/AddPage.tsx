// "use client ";

// import React, { useEffect, useState } from "react";
// import styles from "./Add.module.scss";
// import { UploadButton } from "@/utils1/uploadthing";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// const Add: React.FC = () => {
//     const router = useRouter();

//     const originalUser = useSelector((state) => state.auth.user.currentUser);
//     const allData = originalUser ? JSON.parse(originalUser) : null;
//     const sellerName = allData.username;

//     const token = useSelector((state) => state.auth.token);

//     const [file, setFile] = useState<File | null>(null);
//     const [formData, setFormData] = useState({
//         title: "",
//         username: sellerName,
//         cat: "",
//         cover: "",
//         Images: [],
//         desc: "",
//         shortDesc: "",
//         shortTitle: "",
//         deliveryTime: 0,
//         revisionNumber: 0,
//         features: [],
//         price: 0,
//     });

//     const handleChange = (
//         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleFileChange = (imageUrl: string) => {
//         setFormData((prev) => ({
//             ...prev,
//             cover: imageUrl,
//         }));
//     };

//     const handleUploadImagesChange = (imageUrl: string) => {
//         setFormData((prev) => ({
//             ...prev,
//             images: imageUrl,
//         }));
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:8000/gigs", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//             credentials: "include",
//             body: JSON.stringify(formData),
//         });
//         if (response.ok) {
//             console.log("Data sent successfully!");
//             router.push("/myGigs");
//         } else {
//             console.error("Failed to send data");
//             alert("gig is not added");
//         }
//     };

//     return (
//         <div className={styles.add}>
//             <div className={styles.container}>
//                 <h1>Add New </h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className={styles.sections}>
//                         <div className={styles.info}>
//                             <TextField
//                                 label="Title"
//                                 variant="outlined"
//                                 name="title"
//                                 value={formData.title}
//                                 onChange={handleChange}
//                             />
//                             <TextField
//                                 label="Category"
//                                 variant="outlined"
//                                 name="cat"
//                                 value={formData.cat}
//                                 onChange={handleChange}
//                             />
//                             <label htmlFor="coverImage">Cover Image</label>
//                             <UploadButton
//                                 endpoint="imageUploader"
//                                 onClientUploadComplete={(
//                                     res: { url: string }[]
//                                 ) => {
//                                     if (res && res.length > 0) {
//                                         handleFileChange(res[0].url);
//                                     }
//                                     console.log("Files: ", res);
//                                     alert("Upload Completed");
//                                 }}
//                                 onUploadError={(error: Error) => {
//                                     alert(`ERROR! ${error.message}`);
//                                 }}
//                             />

//                             <label htmlFor="uploadImages">Upload Image</label>
//                             <UploadButton
//                                 endpoint="imageUploader"
//                                 onClientUploadComplete={(
//                                     res: { url: string }[]
//                                 ) => {
//                                     if (res && res.length > 0) {
//                                         handleUploadImagesChange(res[0].url);
//                                     }
//                                     console.log("Files: ", res);
//                                     alert("Upload Completed");
//                                 }}
//                                 onUploadError={(error: Error) => {
//                                     alert(`ERROR! ${error.message}`);
//                                 }}
//                             />

//                             <TextField
//                                 label="Description"
//                                 variant="outlined"
//                                 multiline
//                                 rows={2}
//                                 name="desc"
//                                 value={formData.desc}
//                                 onChange={handleChange}
//                             />
//                             {/* <button type="submit">Create</button> */}
//                             <Button type="submit" variant="contained">
//                                 Create
//                             </Button>
//                         </div>

//                         <div className={styles.details}>
//                             <TextField
//                                 label="Service Title"
//                                 variant="outlined"
//                                 multiline
//                                 rows={2}
//                                 name="shortTitle"
//                                 value={formData.shortTitle}
//                                 onChange={handleChange}
//                             />

//                             <TextField
//                                 label="Short Description"
//                                 variant="outlined"
//                                 multiline
//                                 rows={2}
//                                 name="shortDesc"
//                                 value={formData.shortDesc}
//                                 onChange={handleChange}
//                             />
//                             <TextField
//                                 label="Delivery Time"
//                                 variant="outlined"
//                                 type="number"
//                                 name="deliveryTime"
//                                 value={formData.deliveryTime}
//                                 onChange={handleChange}
//                             />
//                             <TextField
//                                 label="Revision Number"
//                                 variant="outlined"
//                                 type="number"
//                                 name="revisionNumber"
//                                 value={formData.revisionNumber}
//                                 onChange={handleChange}
//                             />
//                             <TextField
//                                 label="Price"
//                                 variant="outlined"
//                                 type="number"
//                                 name="price"
//                                 value={formData.price}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Add;

// ****************************************8

import React, { useEffect, useState } from "react";
import styles from "./Add.module.scss";
import { UploadButton } from "@/utils1/uploadthing";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { RootState } from "@/redux_store/store";

const Add: React.FC = () => {
    const router = useRouter();

    const originalUser = useSelector(
        (state: RootState) => state.auth.user.currentUser
    );
    const allData = originalUser ? JSON.parse(originalUser) : null;
    const sellerName = allData.username;

    const token = useSelector((state) => state.auth.token);

    const [file, setFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        username: sellerName,
        cat: "",
        cover: "",
        Images: [],
        desc: "",
        shortDesc: "",
        shortTitle: "",
        deliveryTime: 0,
        revisionNumber: 0,
        features: [],
        price: 0,
    });
    const [errors, setErrors] = useState<any>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: value ? "" : `${name} is required`,
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors: any = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                formErrors[key] = `${key} is required`;
            }
        });
        setErrors(formErrors);
        if (Object.keys(formErrors).length > 0) {
            return;
        }
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
            console.log("Data sent successfully!");
            router.push("/myGigs");
        } else {
            console.error("Failed to send data");
            alert("Failed to add gig");
        }
    };

    return (
        <div className={styles.add}>
            <div className={styles.container}>
                <h1>Add New </h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.sections}>
                        <div className={styles.info}>
                            <TextField
                                label="Title"
                                variant="outlined"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                error={!!errors.title}
                                helperText={errors.title}
                            />
                            <TextField
                                label="Category"
                                variant="outlined"
                                name="cat"
                                value={formData.cat}
                                onChange={handleChange}
                                error={!!errors.cat}
                                helperText={errors.cat}
                            />
                            <label htmlFor="coverImage">Cover Image</label>
                            <UploadButton
                                endpoint="imageUploader"
                                onClientUploadComplete={(
                                    res: { url: string }[]
                                ) => {
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

                            <label htmlFor="uploadImages">Upload Image</label>
                            <UploadButton
                                endpoint="imageUploader"
                                onClientUploadComplete={(
                                    res: { url: string }[]
                                ) => {
                                    if (res && res.length > 0) {
                                        handleUploadImagesChange(res[0].url);
                                    }
                                    console.log("Files: ", res);
                                    alert("Upload Completed");
                                }}
                                onUploadError={(error: Error) => {
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />

                            <TextField
                                label="Description"
                                variant="outlined"
                                multiline
                                rows={2}
                                name="desc"
                                value={formData.desc}
                                onChange={handleChange}
                                error={!!errors.desc}
                                helperText={errors.desc}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large" // Change the size of the button
                                disabled={Object.keys(errors).length > 0} // Disable button if there are errors
                            >
                                Create
                            </Button>
                        </div>

                        <div className={styles.details}>
                            <TextField
                                label="Service Title"
                                variant="outlined"
                                multiline
                                rows={2}
                                name="shortTitle"
                                value={formData.shortTitle}
                                onChange={handleChange}
                                error={!!errors.shortTitle}
                                helperText={errors.shortTitle}
                            />

                            <TextField
                                label="Short Description"
                                variant="outlined"
                                multiline
                                rows={2}
                                name="shortDesc"
                                value={formData.shortDesc}
                                onChange={handleChange}
                                error={!!errors.shortDesc}
                                helperText={errors.shortDesc}
                            />
                            <TextField
                                label="Delivery Time"
                                variant="outlined"
                                type="number"
                                name="deliveryTime"
                                value={formData.deliveryTime}
                                onChange={handleChange}
                                error={!!errors.deliveryTime}
                                helperText={errors.deliveryTime}
                            />
                            <TextField
                                label="Revision Number"
                                variant="outlined"
                                type="number"
                                name="revisionNumber"
                                value={formData.revisionNumber}
                                onChange={handleChange}
                                error={!!errors.revisionNumber}
                                helperText={errors.revisionNumber}
                            />
                            <TextField
                                label="Price"
                                variant="outlined"
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                error={!!errors.price}
                                helperText={errors.price}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Add;

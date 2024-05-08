// // // // pages/index.tsx
// "use client";

// // // import { useEffect, useState } from "react";
// // // import axios from "axios";

// // // interface Data {
// // //     // Define the structure of your data
// // //     userId: number;
// // //     title: string;
// // //     totalstars: number;
// // //     desc: string;
// // //     starNumber: number;
// // //     cat: string;
// // //     cover: string;
// // //     images: string;
// // //     shortDesc: string;
// // //     deliveryTime: number;
// // //     revision: number;
// // //     features: [string];
// // //     sales: number;
// // //     // Add more fields as needed
// // // }

// // // const About = () => {
// // //     const [data, setData] = useState<Data[]>([]);

// // //     useEffect(() => {
// // //         const fetchData = async () => {
// // //             try {
// // //                 const response = await axios.get<Data[]>(
// // //                     "https://localhost:8000/gigs"
// // //                 );
// // //                 setData(response.data);
// // //             } catch (error) {
// // //                 console.error("Error fetching data:", error);
// // //             }
// // //         };

// // //         fetchData();
// // //     }, []);

// // //     return (
// // //         <div>
// // //             <h1>Data from API</h1>
// // //             <ul>
// // //                 {data.map((item) => (
// // //                     <li key={item.title}>{item.userId}</li>
// // //                     // Render other data fields as needed
// // //                 ))}
// // //             </ul>
// // //         </div>
// // //     );
// // // };

// // // export default About;

// // // pages/index.tsx
// // "use client";

// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import newRequest from "../utils/newRequest";

// // import TrustedBy from "@/components/trustedBy/TrustedBy";

// // interface Data {
// //     userId: number;
// //     title: string;
// //     totalstars: number;
// //     desc: string;
// //     starNumber: number;
// //     cat: string;
// //     cover: string;
// //     images: string[];
// //     shortDesc: string;
// //     deliveryTime: number;
// //     revision: number;
// //     features: string[];
// //     sales: number;
// // }

// // const About = () => {
// //     const [data, setData] = useState<Data[]>([]);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 // const res = await newRequest.post("/auth/login", {
// //                 //     username,
// //                 const response = await newRequest.get<Data[]>(
// //                     "http://localhost:8000/gigs"
// //                 );
// //                 setData(response.data);
// //                 console.log(data);
// //             } catch (error) {
// //                 console.error("Error fetching data:", error);
// //             }
// //         };

// //         fetchData();
// //     }, []);

// //     return (
// //         <div>
// //             <h1>Data from API</h1>

// //             <ul>
// //                 {data.map((item) => (
// //                     <li key={item.title}>
// //                         <h2>{item.title}</h2>
// //                         <p>User ID: {item.userId}</p>
// //                         <p>Total Stars: {item.totalstars}</p>
// //                         <p>Description: {item.desc}</p>
// //                         <p>Star Number: {item.starNumber}</p>
// //                         <p>Category: {item.cat}</p>
// //                         <img src={item.cover} alt="Cover" />
// //                         <p>Short Description: {item.shortDesc}</p>
// //                         <p>Delivery Time: {item.deliveryTime}</p>
// //                         <p>Revision: {item.revision}</p>
// //                         <p>Features:</p>
// //                         <ul>
// //                             {item.features.map((feature, index) => (
// //                                 <li key={index}>{feature}</li>
// //                             ))}
// //                         </ul>
// //                         <p>Sales: {item.sales}</p>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default About;
// // ************************************************
// import React, { useEffect, useState } from "react";
// import styles from "./Add.module.scss";
// import { UploadButton } from "@/utils1/uploadthing";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import TextField from "@mui/material/TextField";

// const Add: React.FC = () => {
//     const router = useRouter();

//     const originalUser = useSelector((state) => state.auth.user.currentUser);
//     const allData = JSON.parse(originalUser);
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
//                                 rows={4}
//                                 name="desc"
//                                 value={formData.desc}
//                                 onChange={handleChange}
//                             />
//                             <button type="submit">Create</button>
//                         </div>
//                         <div className={styles.details}>
//                             <TextField
//                                 label="Short Description"
//                                 variant="outlined"
//                                 multiline
//                                 rows={4}
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

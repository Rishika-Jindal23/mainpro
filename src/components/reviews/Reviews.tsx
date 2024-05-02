// import React, { useState } from "react";
// import styles from "./Reviews.module.scss";
// import Review from "../review/Review";

// import axios from "axios";
// import { useDispatch } from "react-redux";
// import newRequest from "@/app/utils/newRequest";

// const Reviews = ({ gigId, userId }) => {
//     const [star, setStar] = useState(1);
//     const [desc, setDesc] = useState("");
//     const dispatch = useDispatch();

//     const handleStarChange = (e) => {
//         setStar(parseInt(e.target.value));
//     };

//     const handleDescChange = (e) => {
//         setDesc(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const reviewData = {
//             gigId: gigId,
//             userId: userId,
//             star,
//             desc,
//         };

//         try {
//             const response = await newRequest.post("reviews", reviewData, {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });

//             // Assuming the API returns some data about the posted review, you can handle it here
//             console.log("Review posted successfully:", response.data);

//             // Reset the form after successful submission
//             setStar(1);
//             setDesc("");
//         } catch (error) {
//             console.error("Error posting review:", error);
//             // Handle error (dispatch error actions, show error message, etc.)
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Rating:
//                 <select value={star} onChange={handleStarChange}>
//                     <option value={1}>1</option>
//                     <option value={2}>2</option>
//                     <option value={3}>3</option>
//                     <option value={4}>4</option>
//                     <option value={5}>5</option>
//                 </select>
//             </label>
//             <br />
//             <label>
//                 Description:
//                 <textarea value={desc} onChange={handleDescChange} />
//             </label>
//             <br />
//             <button type="submit">Submit Review</button>
//         </form>
//     );
// };

// export default Reviews;

import React, { useState } from "react";
import styles from "./Reviews.module.scss"; // You might remove this if not used
import Review from "../review/Review";

import axios from "axios";
import { useDispatch } from "react-redux";
import newRequest from "@/app/utils/newRequest";

const Reviews = ({ gigId, userId }) => {
    const [star, setStar] = useState(1);
    const [desc, setDesc] = useState("");
    const dispatch = useDispatch();

    const handleStarChange = (e) => {
        setStar(parseInt(e.target.value));
    };

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviewData = {
            gigId: gigId,
            userId: userId,
            star,
            desc,
        };

        try {
            const response = await newRequest.post("reviews", reviewData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Assuming the API returns some data about the posted review, you can handle it here
            console.log("Review posted successfully:", response.data);

            // Reset the form after successful submission
            setStar(1);
            setDesc("");
        } catch (error) {
            console.error("Error posting review:", error);
            // Handle error (dispatch error actions, show error message, etc.)
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
        >
            <label className="block">
                Rating:
                <select
                    value={star}
                    onChange={handleStarChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </label>
            <br />
            <label className="block mt-4">
                Add Review:
                <textarea
                    value={desc}
                    onChange={handleDescChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                ></textarea>
            </label>
            <br />
            <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                Submit Review
            </button>
        </form>
    );
};

export default Reviews;

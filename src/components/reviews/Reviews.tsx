import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.scss"; // You might remove this if not used
import Review from "../review/Review";
import { TextField, Button, MenuItem, Box } from "@mui/material";
import { fetchReviewsByGigId } from "../../redux_store/slice/reviewsSlice";
import { currentreviews } from "../../redux_store/slice/reviewsSlice";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import newRequest from "@/app/utils/newRequest";

const Reviews = ({ gigId, userId }) => {
    const [star, setStar] = useState(1);
    const [desc, setDesc] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReviewsByGigId(gigId));
    }, [gigId]);

    const reviews = useSelector(currentreviews);

    const handleStarChange = (e: { target: { value: string } }) => {
        setStar(parseInt(e.target.value));
    };

    const handleDescChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
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
            <span>Review posted </span>;
            dispatch(fetchReviewsByGigId(gigId));

            // Reset the form after successful submission
            setStar(1);
            setDesc("");
        } catch (error) {
            console.error("Error posting review:", error);
            alert("not able to post review");
        }
    };

    return (
        <>
            <div className={styles.reviews}>
                {reviews.map((review) => (
                    <Review key={review._id} review={review} />
                ))}
            </div>
            <div className="text-lg font-semibold text-blue-500 leading-6 tracking-wide items-center">
                Add Review
            </div>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
                >
                    <Box mb={2}>
                        <TextField
                            select
                            label="Rating"
                            value={star}
                            onChange={handleStarChange}
                            variant="outlined"
                            className="w-full mb-4"
                        >
                            {[1, 2, 3, 4, 5].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Your Review"
                            multiline
                            rows={4}
                            value={desc}
                            onChange={handleDescChange}
                            variant="outlined"
                            className="w-full mb-4"
                        />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full"
                    >
                        Submit Review
                    </Button>
                    {/* <label className="block">
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
                    Your Review:
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
                </button> */}
                </form>
            </div>
        </>
    );
};

export default Reviews;

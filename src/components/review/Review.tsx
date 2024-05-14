import React, { useEffect } from "react";
import styles from "./Review.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewsByGigId } from "../../redux_store/slice/reviewsSlice";
import { currentreviews } from "../../redux_store/slice/reviewsSlice";

// const Reviews = ({ gigId, userId }) => {

//const Review = () => {

const Review = ({ review }) => {
    // console.log("review from single review", review);
    // console.log("country----------", review.userId.country);
    // const dispatch = useDispatch();

    return (
        <>
            <div className="border-8">
                <div className={styles.review}>
                    <div className={styles.user}>
                        <img
                            className={styles.pp}
                            src={review.userId.img}
                            alt=""
                        />
                        <div className={styles.info}>
                            <span>{review.userId.username}</span>
                            <div className={styles.country}>
                                <span>{review.userId.country}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.stars}>
                        {Array(review.star)
                            .fill()
                            .map((item, i) => (
                                <img src="/img/star.png" alt="" key={i} />
                            ))}
                        <span>{review.star}</span>
                    </div>
                    <p>{review.desc}</p>
                    <div className={styles.helpful}>
                        <span>Helpful?</span>
                        <img src="/img/like.png" alt="" />
                        <span>Yes</span>
                        <img src="/img/dislike.png" alt="" />
                        <span>No</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;

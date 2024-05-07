"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux_store/store";
import { NextPage } from "next";
import Carousel from "@itseasy21/react-elastic-carousel";
import styles from "./Gig.module.scss";

import {
    fetchGigByIdAsync,
    selectCurrentGig,
} from "@/redux_store/slice/gigsSlice";
import Link from "next/link";
import Reviews from "@/components/reviews/Reviews";

const Gig: React.FC<{ id: string }> = ({ id }: { id: string }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const loggedInUser = useSelector((state) => state.auth.user.currentUser);

    const originaluser = JSON.parse(loggedInUser);
    const loginUserId = originaluser._id;

    // const loginUserName = originaluser.username;
    // const loginUserIsSeller = originaluser.isSeller;

    useEffect(() => {
        dispatch(fetchGigByIdAsync(id));
    }, [dispatch, id]);
    const currentGig = useSelector(selectCurrentGig);
    // console.log("current>>>>>>>>>>>>>>", currentGig);

    if (!currentGig) {
        // If gig data is not available yet, you can render a loading state or handle it accordingly
        return <div>Loading...</div>;
    }
    const payment = (id: string, price: Number) => {
        router.push(`http://localhost:3000/pay?gigid=${id}?price=${price}`);
    };

    return (
        <div className={styles.gig}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <span className={styles.breadcrumbs}>
                        SkillSphere{">"} Graphics & Design{">"}
                    </span>
                    <h1>{currentGig.title}</h1>
                    <div className={styles.user}>
                        {/* userprofilepic */}
                        <img
                            className={styles.pp}
                            src={currentGig.userId.img}
                            alt=""
                        />
                        <span>{currentGig.username}</span>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, index) => (
                                <img key={index} src="/img/star.png" alt="" />
                            ))}
                            <span>5</span>
                        </div>
                    </div>
                    <Carousel itemsToShow={2} isRTL={false}>
                        <img src={currentGig.images} alt="GigImage" />
                    </Carousel>
                    <h2>About This Gig</h2>
                    <p>{currentGig.desc}</p>
                    <div className={styles.seller}>
                        <h2>About The Seller</h2>
                        <div className={styles.user}>
                            {/* userProfilePic */}
                            <img src={currentGig.userId.img} alt="profilepic" />
                            <div className={styles.info}>
                                <span>{currentGig.username}</span>
                                <div className={styles.stars}>
                                    {[...Array(5)].map((_, index) => (
                                        <img
                                            key={index}
                                            src="/img/star.png"
                                            alt=""
                                        />
                                    ))}
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.items}>
                                <div className={styles.item}>
                                    <span className={styles.title}>From</span>
                                    <span className={styles.desc}>
                                        {currentGig.userId.country}
                                    </span>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.title}>
                                        Member since
                                    </span>
                                    <span className={styles.desc}>
                                        Aug 2022
                                    </span>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.title}>
                                        Avg. response time
                                    </span>
                                    <span className={styles.desc}>4 hours</span>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.title}>
                                        Last delivery
                                    </span>
                                    <span className={styles.desc}>1 day</span>
                                </div>
                                <div className={styles.item}>
                                    <span className={styles.title}>
                                        Languages
                                    </span>
                                    <span className={styles.desc}>English</span>
                                </div>
                            </div>
                            <hr />
                            <p>{currentGig.userId.desc}</p>
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <p>for reviews</p>
                        // <Reviews gigId={id} userId={loginUserId} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.price}>
                        <p>short Title</p>
                        {/* <h3>{currentGig.title}</h3> */}
                        <h2>${currentGig.price}</h2>
                    </div>
                    <p>{currentGig.shortDesc}</p>
                    <div className={styles.details}>
                        <div className={styles.item}>
                            <img src="/img/clock.png" alt="" />
                            <span>{currentGig.deliveryTime} Days Delivery</span>
                        </div>
                        <div className={styles.item}>
                            <img src="/img/recycle.png" alt="" />
                            <span>{currentGig.revisionNumber} Revisions</span>
                        </div>
                        {/* Details content here */}
                    </div>
                    <div className={styles.features}>
                        {/* Features content here */}

                        {/* {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                */}
                    </div>

                    <button
                        onClick={() =>
                            payment(currentGig._id, currentGig.price)
                        }
                    >
                        Order Now!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gig;
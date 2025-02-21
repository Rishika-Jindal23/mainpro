"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux_store/store";
import { NextPage } from "next";

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

    const loggedInUser = useSelector(
        (state: any) => state.auth.user.currentUser
    );

    const originaluser = loggedInUser ? JSON.parse(loggedInUser) : null;
    const loginUserId = originaluser ? originaluser._id : null;

    // const loginUserName = originaluser.username;
    // const loginUserIsSeller = originaluser.isSeller;

    useEffect(() => {
        dispatch(fetchGigByIdAsync(id));
    }, [dispatch, id]);
    const currentGig = useSelector(selectCurrentGig);

    if (!currentGig) {
        return <div>Loading...</div>;
    }
    const payment = (id: string, price: Number) => {
        router.push(`http://localhost:3000/pay?gigid=${id}?price=${price}`);
    };
    const joinId = currentGig.userId._id;
    console.log(joinId);
    const handleClick = () => {
        router.push(`/contact?joinId=${joinId}`);
    };

    return (
        <div className={styles.gig}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <span className={styles.breadcrumbs}>
                        SkillSphere Services
                    </span>
                    <h1 className="text-xl font-semibold text-blue-500">
                        {currentGig.title}
                    </h1>
                    <div className={styles.user}>
                        {/* userprofilepic */}

                        <img
                            className={styles.pp}
                            src={currentGig.userId.img}
                            alt=""
                        />
                        <span>{currentGig.username}</span>
                    </div>

                    <img src={currentGig.images} alt="GigImage" />

                    <h2 className="text-lg font-semibold text-blue-500 leading-6 tracking-wide">
                        About This Gig
                    </h2>
                    <p className="text-base font-medium text-green-500 leading-7 tracking-tight">
                        {currentGig.desc}
                    </p>
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
                                <button onClick={handleClick}>
                                    Contact Me
                                </button>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.items}>
                                <>
                                    <div className={styles.item}>
                                        <span className={styles.title}>
                                            From
                                        </span>
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
                                        <span className={styles.desc}>
                                            4 hours
                                        </span>
                                    </div>
                                    <div className={styles.item}>
                                        <span className={styles.title}>
                                            Last delivery
                                        </span>
                                        <span className={styles.desc}>
                                            1 day
                                        </span>
                                    </div>
                                    <div className={styles.item}>
                                        <span className={styles.title}>
                                            Languages
                                        </span>
                                        <span className={styles.desc}>
                                            English
                                        </span>
                                    </div>
                                </>
                            </div>

                            <p>{currentGig.userId.desc}</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-sky-950  text-center   text-xl  font-bold">
                            Reviews
                        </p>
                        <Reviews gigId={id} userId={loginUserId} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.price}>
                        <p>My Gig Features</p>
                        <h3>{currentGig.shortTitle}</h3>
                        <h2>${currentGig.price}</h2>
                    </div>
                    <p>{currentGig.shortDesc}</p>
                    <div className={styles.details}>
                        <div className={styles.item}>
                            <img src="/img/clock.png" alt="" />

                            <span>{`${currentGig.deliveryTime} Days Delivery`}</span>
                        </div>
                        <div className={styles.item}>
                            <img src="/img/recycle.png" alt="" />

                            <span>{`${currentGig.revisionNumber}Revisions`}</span>
                        </div>
                        {/* Details content here */}
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

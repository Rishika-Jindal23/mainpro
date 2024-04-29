"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux_store/store";
import { NextPage } from "next";
import Carousel from "@itseasy21/react-elastic-carousel";
import styles from "./Gig.module.scss";
import { fetchUsers, fetchUserById, user } from "@/redux_store/slice/authslice";

import {
    fetchGigByIdAsync,
    selectCurrentGig,
} from "@/redux_store/slice/gigsSlice";

const Gig: React.FC<{ id: string }> = ({ id }: { id: string }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGigByIdAsync(id));
    }, [dispatch, id]);
    const currentGig = useSelector(selectCurrentGig);
    console.log("current>>>>>>>>>>>>>>", currentGig);

    if (!currentGig) {
        // If gig data is not available yet, you can render a loading state or handle it accordingly
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.gig}>
            <div>
                <div>
                    <h1>Data from API</h1>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.left}>
                    {/* <ul>
                        <li key={currentGig.id}>
                            <h2>sellerCountry{currentGig.title}</h2>
                            <p>Sellername:{currentGig.username}</p>
                            <p>Seller ID: {currentGig.userId._id}</p>
                            <p>sellerDesc{currentGig.userId.desc}</p>
                            <p>Country:{currentGig.userId.country}</p>
                            <p>Total Stars: {currentGig.totalstars}</p>
                            <p>Description: {currentGig.desc}</p>
                            <p>Star Number: {currentGig.starNumber}</p>
                            <p>Category: {currentGig.cat}</p>
                            <img src={currentGig.cover} alt="Cover" />
                            <p>Short Description: {currentGig.shortDesc}</p>
                            <p>Delivery Time: {currentGig.deliveryTime}</p>
                            <p>Revision: {currentGig.revisionNumber}</p>

                            <p>Sales: {currentGig.sales}</p>
                        </li>
                    </ul> */}
                    <span className={styles.breadcrumbs}>
                        SkillSphere Graphics & Design
                    </span>
                    <h1>{currentGig.title}</h1>
                    <div className={styles.user}>
                        {/* userprofilepic */}
                        <img
                            className={styles.pp}
                            src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
                        {/* <img
                            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <img
                            src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <img
                            src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        /> */}
                    </Carousel>
                    <h2>About This Gig</h2>
                    <p>{currentGig.desc}</p>
                    <div className={styles.seller}>
                        <h2>About The Seller</h2>
                        <div className={styles.user}>
                            {/* userProfilePic */}
                            <img
                                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
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
                            <div className={styles.gigs}>
                                <div className={styles.gig}>
                                    <span className={styles.title}>From</span>
                                    <span className={styles.desc}>
                                        {currentGig.userId.country}
                                    </span>
                                </div>
                                <div className={styles.gig}>
                                    <span className={styles.title}>
                                        Member since
                                    </span>
                                    <span className={styles.desc}>
                                        Aug 2022
                                    </span>
                                </div>
                                <div className={styles.gig}>
                                    <span className={styles.title}>
                                        Avg. response time
                                    </span>
                                    <span className={styles.desc}>4 hours</span>
                                </div>
                                <div className={styles.gig}>
                                    <span className={styles.title}>
                                        Last delivery
                                    </span>
                                    <span className={styles.desc}>1 day</span>
                                </div>
                                <div className={styles.gig}>
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
                    <div className={styles.reviews}>
                        <h2>Reviews</h2>
                        <div className={styles.gig}>
                            <div className={styles.user}>
                                <img
                                    className={styles.pp}
                                    src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className={styles.info}>
                                    <span>Garner David</span>
                                    <div className={styles.country}>
                                        <img
                                            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                            alt=""
                                        />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.stars}>
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                I just want to say that art_with_ai was the
                                first, and after this, the only artist Ill be
                                using on Fiverr. Communication was amazing, each
                                and every day he sent me images that I was free
                                to request changes to. They listened,
                                understood, and delivered above and beyond my
                                expectations. I absolutely recommend this gig,
                                and know already that Ill be using it again very
                                very soon
                            </p>
                            <div className={styles.helpful}>
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.gig}>
                            <div className={styles.user}>
                                <img
                                    className={styles.pp}
                                    src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className={styles.info}>
                                    <span>Sidney Owen</span>
                                    <div className={styles.country}>
                                        <img
                                            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                                            alt=""
                                        />
                                        <span>Germany</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.stars}>
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                The designer took my photo for my book cover to
                                the next level! Professionalism and ease of
                                working with designer along with punctuality is
                                above industry standards!! Whatever your project
                                is, you need this designer!
                            </p>
                            <div className={styles.helpful}>
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.gig}>
                            <div className={styles.user}>
                                <img
                                    className={styles.pp}
                                    src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className={styles.info}>
                                    <span>Lyle Giles </span>
                                    <div className={styles.country}>
                                        <img
                                            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                            alt=""
                                        />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.stars}>
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                Amazing work! Communication was amazing, each
                                and every day he sent me images that I was free
                                to request changes to. They listened,
                                understood, and delivered above and beyond my
                                expectations. I absolutely recommend this gig,
                                and know already that Ill be using it again very
                                very soon
                            </p>
                            <div className={styles.helpful}>
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <div />

                        {/* Reviews content here */}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.price}>
                        {/* <h3>{currentGig.title}</h3> */}
                        <h2>{currentGig.price}</h2>
                    </div>
                    <p>{currentGig.shortDesc}</p>
                    <div className={styles.details}>
                        {/* Details content here */}
                    </div>
                    <div className={styles.features}>
                        {/* Features content here */}
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Gig;
function async(arg0: {}): React.FC<{}> {
    throw new Error("Function not implemented.");
}

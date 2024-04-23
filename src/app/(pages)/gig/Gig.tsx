"use client";
import React from "react";
import { NextPage } from "next";
import Carousel from "@itseasy21/react-elastic-carousel";
import styles from "./Gig.module.scss"; // Assuming you're using CSS modules for styling

const Gig: NextPage = () => {
    return (
        <div className={styles.gig}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <span className={styles.breadcrumbs}>
                        SkillSphere Graphics & Design
                    </span>
                    <h1>I will create ai generated art for you</h1>
                    <div className={styles.user}>
                        <img
                            className={styles.pp}
                            src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <span>Anna Bell</span>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, index) => (
                                <img key={index} src="/img/star.png" alt="" />
                            ))}
                            <span>5</span>
                        </div>
                    </div>
                    <Carousel itemsToShow={2} isRTL={false}>
                        <img
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
                        />
                    </Carousel>
                    <h2>About This Gig</h2>
                    <p>
                        I use an AI program to create images based on text
                        prompts. This means I can help you to create a vision
                        you have through a textual description of your scene
                        without requiring any reference images. Some things I've
                        found it often excels at are: Character portraits (E.g.
                        a picture to go with your DnD character) Landscapes
                    </p>
                    <div className={styles.seller}>
                        <h2>About The Seller</h2>
                        <div className={styles.user}>
                            <img
                                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className={styles.info}>
                                <span>Anna Bell</span>
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
                                    <span className={styles.desc}>USA</span>
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
                            <p>
                                My name is Anna, I enjoy creating AI generated
                                art in my spare time. I have a lot of experience
                                using the AI program and that means I know what
                                to prompt the AI with to get a great and
                                incredibly detailed result.
                            </p>
                        </div>
                    </div>
                    <div className={styles.reviews}>
                        <h2>Reviews</h2>
                        {/* Reviews content here */}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.price}>
                        <h3>1 AI generated image</h3>
                        <h2>$ 59.99</h2>
                    </div>
                    <p>
                        I will create a unique high quality AI generated image
                        based on a description that you give me
                    </p>
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

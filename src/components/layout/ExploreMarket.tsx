import React from "react";
import styles from "./ExploreMarket.module.scss";

function ExploreMarket() {
    return (
        <div>
            <div className={styles.explore}>
                <div className={styles.container}>
                    <h1>Explore the marketplace</h1>
                    <div className={styles.container}>
                        <div className={styles.item}>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                                alt=""
                            />
                            <div className={styles.line}></div>
                            <span>Graphics & Design</span>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                                alt=""
                            />
                            <div className={styles.line}></div>

                            <span>Digital Marketing</span>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                                alt=""
                            />
                            <div className={styles.line}></div>
                            <span>Writing & Translation</span>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                                alt=""
                            />
                            <div className={styles.line}></div>
                            <span>Video & Animation</span>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                                alt=""
                            />
                            <div className={styles.line}></div>
                            <span>Music & Audio</span>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                                alt=""
                            />
                            <div className={styles.line}></div>
                            <span>Programming & Tech</span>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                                alt=""
                            />
                            <div className={styles.line}></div>
                            <span>Business</span>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                                alt=""
                            />
                            <div className={styles.line}></div>
                            <span>Lifestyle</span>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                                alt=""
                            />
                            <div className={styles.line}></div>
                            <span>Data</span>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                                alt=""
                            />
                            <div className={styles.line}></div>
                            <span>Photography</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreMarket;

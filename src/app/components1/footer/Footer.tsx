import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.item}>
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                        <span>Programming & Tech</span>
                        <span>Data</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                    </div>
                    <div className={styles.item}>
                        <h2>About</h2>
                        <span>Press & News</span>
                        <span>Partnerships</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Intellectual Property Claims</span>
                        <span>Investor Relations</span>
                        <span>Contact Sales</span>
                    </div>
                    <div className={styles.item}>
                        <h2>Support</h2>
                        <span>Help & Support</span>
                        <span>Trust & Safety</span>
                        <span>Selling on SkillSphere</span>
                        <span>Buying on SkillSphere</span>
                    </div>
                    <div className={styles.item}>
                        <h2>Community</h2>
                        <span>Customer Success Stories</span>
                        <span>Community hub</span>
                        <span>Forum</span>
                        <span>Events</span>
                        <span>Blog</span>
                        <span>Influencers</span>
                        <span>Affiliates</span>
                        <span>Podcast</span>
                        <span>Invite a Friend</span>
                        <span>Become a Seller</span>
                        <span>Community Standards</span>
                    </div>
                    <div className={styles.item}>
                        <h2>More From Fiverr</h2>
                        <span>SkillSphere Business</span>
                        <span>SkillSphere Pro</span>
                        <span>SkillSphere Logo Maker</span>
                        <span>SkillSphere Guides</span>
                        <span>Get Inspired</span>
                        <span>SkillSphere Select</span>
                        <span>ClearVoice</span>
                        <span>SkillSphere Workspace</span>
                        <span>Learn</span>
                        <span>Working Not Working</span>
                    </div>
                </div>
                <hr />
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <h2>SkillSphere</h2>
                        <span>© SkillSphereInternational Ltd. 2023</span>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.social}>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <div className={styles.link}>
                            <img src="" alt="" />
                            <span>English</span>
                        </div>
                        <div className={styles.link}>
                            <img src="" alt="" />
                            <span>USD</span>
                        </div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

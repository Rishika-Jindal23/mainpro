import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.item}>
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                    </div>
                    <div className={styles.item}>
                        <h2>About</h2>
                        <span>Press & News</span>
                        <span>Partnerships</span>
                        <span>Privacy Policy</span>
                    </div>
                    <div className={styles.item}>
                        <h2>Support</h2>
                        <span>Help & Support</span>
                        <span>Trust & Safety</span>
                        <span>Selling </span>
                    </div>
                    <div className={styles.item}>
                        <h2>Community</h2>
                        <span>Customer Success Stories</span>
                        <span>Community hub</span>
                        <span>Forum</span>
                    </div>
                    <div className={styles.item}>
                        <h2>More From SkillSphere</h2>
                        <span> Business</span>
                        <span>SkillSphere Pro</span>
                        <span> Logo Maker</span>
                    </div>
                </div>
                <hr />
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <h2>SkillSphere</h2>
                        <span>© SkillSphere International Ltd. 2023</span>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.social}>
                            <img src="/img/twitter.png" alt="" />
                            <img src="/img/facebook.png" alt="" />
                            <img src="/img/linkedin.png" alt="" />
                            <img src="/img/pinterest.png" alt="" />
                            <img src="/img/instagram.png" alt="" />
                        </div>
                        <div className={styles.link}>
                            <img src="/img/language.png" alt="" />
                            <span>English</span>
                        </div>
                        <div className={styles.link}>
                            <img src="/img/coin.png" alt="" />
                            <span>USD</span>
                        </div>
                        <img src="/img/accessibility.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

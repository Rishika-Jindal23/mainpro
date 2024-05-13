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
                        <Link href="/graphics">
                            <span>Graphics & Design</span>
                        </Link>
                        <Link href="/digital">
                            {" "}
                            <span>Digital Marketing</span>
                        </Link>
                        <Link href="/writing">
                            {" "}
                            <span>Writing & Translation</span>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <h2>About</h2>
                        <Link href="/press">
                            <span>Press & News</span>
                        </Link>
                        <Link href="/partnerships">
                            {" "}
                            <span>Partnerships</span>
                        </Link>
                        <Link href="/privacyPolicy">
                            {" "}
                            <span>Privacy Policy</span>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <h2>Support</h2>
                        <Link href="/Help">
                            <span>Help & Support</span>
                        </Link>
                        <Link href="/Trust">
                            {" "}
                            <span>Trust & Safety</span>
                        </Link>
                        <Link href="/Selling">
                            {" "}
                            <span>Selling </span>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <h2>Community</h2>
                        <Link href="">
                            <span>Customer Success Stories</span>
                        </Link>
                        <Link href="/customer">
                            {" "}
                            <span>Community hub</span>
                        </Link>
                        <Link href="/Forum">
                            {" "}
                            <span>Forum</span>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <h2>More From SkillSphere</h2>
                        <Link href="/Bussiness">
                            <span> Business</span>
                        </Link>
                        <Link href="/skillSpherePro">
                            <span>SkillSphere Pro</span>
                        </Link>
                        <Link href="/logoMaker">
                            <span> Logo Maker</span>
                        </Link>
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

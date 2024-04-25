import React from "react";
import styles from "./GigCard.module.scss";
import Link from "next/link";

interface GigItem {
    images: string;
    pp: string;
    username: string;
    desc: string;
    star: number;
    price: number;
}

interface GigCardProps {
    item: GigItem;
}

const GigCard: React.FC<GigCardProps> = ({ item }) => {
    return (
        <Link href="/gig/123" className={styles.link}>
            <div className={styles.gigCard}>
                <img src={item.images} alt="" />
                <div className={styles.info}>
                    <div className={styles.user}>
                        <img src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className={styles.star}>
                        <img src="./img/star.png" alt="" />
                        <span>{item.star}</span>
                    </div>
                </div>
                <hr />
                <div className={styles.detail}>
                    <img src="./img/heart.png" alt="" />
                    <div className={styles.price}>
                        <span>STARTING AT</span>
                        <h2>
                            $ {item.price}
                            <sup>99</sup>
                        </h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GigCard;

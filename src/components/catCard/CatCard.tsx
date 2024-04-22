import Link from "next/link";
import React from "react";

import styles from "./CatCard.module.scss";
import { Card } from "@/data";

interface CatCardProps {
    card: Card;
}

const CatCard: React.FC<CatCardProps> = ({ card }) => {
    return (
        <Link href="/gigs?cat=design">
            <div className={styles.catCard}>
                <img src={card.img} alt="" />
                <span className={styles.desc}>{card.desc}</span>
                <span className={styles.title}>{card.title}</span>
            </div>
        </Link>
    );
};

export default CatCard;

import React from "react";
import styles from "./ProjectCard.module.scss";
import Link from "next/link";

interface CardProps {
    img: string;
    pp: string;
    cat: string;
    username: string;
}

function ProjectCard({ card }: { card: CardProps }) {
    return (
        <Link href="/gigs">
            <div className={styles.projectCard}>
                <img src={card.img} alt="" />
                <div className={styles.info}>
                    <img src={card.pp} alt="" />
                    <div className={styles.texts}>
                        <h2>{card.cat}</h2>
                        <span>{card.username}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;

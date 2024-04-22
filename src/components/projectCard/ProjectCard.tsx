import React from "react";
import styles from "./ProjectCard.module.scss";

interface CardProps {
    img: string;
    pp: string;
    cat: string;
    username: string;
}

function ProjectCard({ card }: { card: CardProps }) {
    return (
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
    );
}

export default ProjectCard;

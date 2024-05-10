"use client";
import React from "react";
import styles from "./GigCard.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import profilepic from "../../../public/img/pp2.png";
import gigimage from "../../../public/img/cat1.jpg";

interface GigItem {
    userId: any;
    images: string;
    img: string;
    username: string;
    desc: string;
    star: number;
    price: number;
    _id: string;
}

interface GigCardProps {
    item: GigItem;
}

const GigCard: React.FC<GigCardProps> = ({ item }) => {
    const router = useRouter();

    const token = useSelector((state) => state.auth.token);

    const showSingleGig = (id: string) => {
        //Pass the id parameter to handleShowMore function
        if (token) {
            router.push(`/gigs/${id}`);
        } else {
            router.push("login");
        }
    };

    return (
        <>
            {/* <Link href="/gig/123" className={styles.link}> */}
            <div className={styles.gigCard}>
                <img
                    src={
                        item.images ||
                        "data:image/jpeg;base64,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"
                    }
                    alt=""
                />
                <div className={styles.info}>
                    <div className={styles.user}>
                        <img src={item.userId.img || profilepic} alt="" />
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

                    <div className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        <button onClick={() => showSingleGig(item._id)}>
                            View Gig
                        </button>
                    </div>

                    <div className={styles.price}>
                        <span>STARTING AT</span>
                        <h2>$ {item.price}</h2>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </>
    );
};

export default GigCard;

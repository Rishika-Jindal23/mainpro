"use client";
import React from "react";
import styles from "./GigCard.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface GigItem {
    images: string;
    pp: string;
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
    const token = localStorage.getItem("token");

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

                    <div className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        <button onClick={() => showSingleGig(item._id)}>
                            View Gig
                        </button>
                    </div>

                    <div className={styles.price}>
                        <span>STARTING AT</span>
                        <h2>
                            $ {item.price}
                            <sup>99</sup>
                        </h2>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </>
    );
};

export default GigCard;

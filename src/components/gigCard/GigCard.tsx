"use client";
import React from "react";
import styles from "./GigCard.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import profilepic from "../../../public/img/pp2.png";
import gigimage from "../../../public/img/cat1.jpg";
import Image from "next/image";

interface GigItem {
    cover: string;
    userId: any;
    images: string;
    img: string;
    username: string;
    title: string;
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
                <img src={item.cover} alt="" />
                <div className={styles.info}>
                    <div className={styles.user}>
                        <Image
                            src={item.userId.img || profilepic}
                            alt=""
                        ></Image>
                        {/* <img src={item.userId.img || profilepic} alt="" /> */}
                        <span>{item.username}</span>
                    </div>
                    <p>{item.title}</p>
                    <div className={styles.star}>
                        <img src="./img/star.png" alt="" />
                        <span>{item.star}</span>
                    </div>
                </div>
                <hr />
                <div className={styles.detail}>
                    <img src="./img/heart.png" alt="" />

                    <div className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
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

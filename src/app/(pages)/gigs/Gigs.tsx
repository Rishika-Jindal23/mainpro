"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./Gigs.module.scss";

import GigCard from "../../../components/gigCard/GigCard";

interface Gig {
    username: string;
    _id: string;
    userId: string;
    title: string;
    desc: string;
    price: number;
    sales: number;
    cover: string;
    createdAt: string;
    images: string;
}

const Gigs: React.FC = () => {
    const token = localStorage.getItem("token");

    const [sort, setSort] = useState<string>("sales");
    const [open, setOpen] = useState<boolean>(false);
    const [gigs, setGigs] = useState<Gig[]>([]);
    const minRef = useRef<HTMLInputElement>(null);
    const maxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchGigs();
    }, []);

    const fetchGigs = async () => {
        try {
            const response = await fetch("http://localhost:8000/gigs", {
                // mode: "no-cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${token}`,
                },
                credentials: "include",
            });

            console.log(response);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setGigs(data);
        } catch (error) {
            console.error("Error fetching gigs:", error);
        }
    };
    console.log(gigs);

    const reSort = (type: string) => {
        setSort(type);
        setOpen(false);
    };

    const apply = () => {
        if (minRef.current && maxRef.current) {
            console.log(minRef.current.value);
            console.log(maxRef.current.value);
        }
    };

    return (
        <div className={styles.gigs}>
            <div className={styles.container}>
                <span className={styles.breadcrumbs}>
                    SkillSphere Graphics & Design{" "}
                </span>
                <h1>AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with Liverr's
                    AI artists
                </p>
                <div className={styles.menu}>
                    <div className={styles.left}>
                        <span>Budget</span>
                        <input ref={minRef} type="number" placeholder="min" />
                        <input ref={maxRef} type="number" placeholder="max" />
                        <button onClick={apply}>Apply</button>
                    </div>
                    <div className={styles.right}>
                        <span className={styles.sortBy}>Sort by</span>
                        <span className={styles.sortType}>
                            {sort === "sales" ? "Best Selling" : "Newest"}
                        </span>
                        <img
                            src="./img/down.png"
                            alt=""
                            onClick={() => setOpen(!open)}
                        />
                        {open && (
                            <div className={styles.rightMenu}>
                                {sort === "sales" ? (
                                    <span onClick={() => reSort("createdAt")}>
                                        Newest
                                    </span>
                                ) : (
                                    <span onClick={() => reSort("sales")}>
                                        Best Selling
                                    </span>
                                )}
                                <span onClick={() => reSort("sales")}>
                                    Popular
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.cards}>
                    {gigs.map((gig) => (
                        <GigCard key={gig._id} item={gig} />
                    ))}
                    <div>
                        <h1>Data from API</h1>
                        <ul>
                            {gigs.map((item) => (
                                <li key={item.title}>
                                    <h2>{item.title}</h2>
                                    <p>User ID: {item.userId}</p>
                                    {/* <p>Total Stars: {item.totalstars}</p> */}
                                    <p>Description: {item.desc}</p>
                                    {/* <p>Star Number: {item.starNumber}</p> */}
                                    {/* <p>Category: {item.cat}</p> */}
                                    <img src={item.cover} alt="Cover" />
                                    {/* <p>Short Description: {item.shortDesc}</p> */}
                                    {/* <p>Delivery Time: {item.deliveryTime}</p> */}
                                    {/* <p>Revision: {item.revision}</p> */}
                                    <p>Features:</p>
                                    {/* <ul>
                            {item.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul> */}
                                    <p>Sales: {item.sales}</p>
                                    <p>Images: {item.images}</p>
                                    <img src={item.images} alt="Cover" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* {gigs.map((gig) => (
                        <GigCard item={gig} />
                    ))} */}
                </div>
            </div>
        </div>
    );
};

{
}

export default Gigs;

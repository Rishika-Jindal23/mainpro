"use client";
import React, { useRef, useState } from "react";
import styles from "./Sphere.module.scss";
import { Gig } from "../../../data";
import GigCard from "../../../components/gigCard/GigCard";

interface GigsProps {
    gigs: Gig[];
}

const Spheres: React.FC<GigsProps> = ({ gigs }) => {
    const [sort, setSort] = useState<string>("sales");
    const [open, setOpen] = useState<boolean>(false);
    const minRef = useRef<HTMLInputElement>(null);
    const maxRef = useRef<HTMLInputElement>(null);

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
                        <GigCard key={gig.id} item={gig} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Spheres;

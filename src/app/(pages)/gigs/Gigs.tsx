// "use client";
// import React, { useRef, useState } from "react";
// import styles from "./Gigs.module.scss";

// import GigCard from "../../../components/gigCard/GigCard";
// import { Gig, gigs } from "@/data";
// interface GigsProps {
//     gigs: Gig[];
// }

// // const Spheres: React.FC<GigsProps> = ({ gigs }) => {
// const Gigs: React.FC = () => {
//     const [sort, setSort] = useState<string>("sales");
//     const [open, setOpen] = useState<boolean>(false);
//     const minRef = useRef<HTMLInputElement>(null);
//     const maxRef = useRef<HTMLInputElement>(null);

//     const reSort = (type: string) => {
//         setSort(type);
//         setOpen(false);
//     };

//     const apply = () => {
//         if (minRef.current && maxRef.current) {
//             console.log(minRef.current.value);
//             console.log(maxRef.current.value);
//         }
//     };

//     return (
//         <div className={styles.gigs}>
//             <div className={styles.container}>
//                 <span className={styles.breadcrumbs}>
//                     SkillSphere Graphics & Design{" "}
//                 </span>
//                 <h1>AI Artists</h1>
//                 <p>
//                     Explore the boundaries of art and technology with Liverr's
//                     AI artists
//                 </p>
//                 <div className={styles.menu}>
//                     <div className={styles.left}>
//                         <span>Budget</span>
//                         <input ref={minRef} type="number" placeholder="min" />
//                         <input ref={maxRef} type="number" placeholder="max" />
//                         <button onClick={apply}>Apply</button>
//                     </div>
//                     <div className={styles.right}>
//                         <span className={styles.sortBy}>Sort by</span>
//                         <span className={styles.sortType}>
//                             {sort === "sales" ? "Best Selling" : "Newest"}
//                         </span>
//                         <img
//                             src="./img/down.png"
//                             alt=""
//                             onClick={() => setOpen(!open)}
//                         />
//                         {open && (
//                             <div className={styles.rightMenu}>
//                                 {sort === "sales" ? (
//                                     <span onClick={() => reSort("createdAt")}>
//                                         Newest
//                                     </span>
//                                 ) : (
//                                     <span onClick={() => reSort("sales")}>
//                                         Best Selling
//                                     </span>
//                                 )}
//                                 <span onClick={() => reSort("sales")}>
//                                     Popular
//                                 </span>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <div className={styles.cards}>
//                     {gigs.map((gig) => (
//                         <GigCard key={gig.id} item={gig} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Gigs;

"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./Gigs.module.scss";

import GigCard from "../../../components/gigCard/GigCard";

interface Gig {
    userId: string;
    title: string;
    desc: string;
    price: number;
    sales: number;
    cover: string;
    createdAt: string;
}

const Gigs: React.FC = () => {
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
            const response = await fetch("http://localhost:8000/gigs");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setGigs(data);
        } catch (error) {
            console.error("Error fetching gigs:", error);
        }
    };

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
                        <GigCard item={gig} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gigs;

"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./Gigs.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchGigsAsync,
    fetchGigsByFiltersAsync,
    selectFilterGig,
    selectGigs,
} from "@/redux_store/slice/gigsSlice";

import GigCard from "../../../components/gigCard/GigCard";

const Gigs: React.FC = () => {
    const dispatch = useDispatch();
    const { data: gigs, loading, error } = useSelector(selectGigs);
    const filterData = useSelector(selectFilterGig);
    console.log("filter data====", filterData);

    const [sort, setSort] = useState<string>("sales");
    const [open, setOpen] = useState<boolean>(false);

    const minRef = useRef<HTMLInputElement>(null);
    const maxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        dispatch(fetchGigsByFiltersAsync({}));
    }, [dispatch]);

    const reSort = (type: string) => {
        setSort(type);
        setOpen(false);
    };

    const apply = () => {
        if (minRef.current && maxRef.current) {
            const minPrice = minRef.current?.value;
            const maxPrice = maxRef.current?.value;
            dispatch(fetchGigsByFiltersAsync({ minPrice, maxPrice }));
        }
    };

    return (
        <div className={styles.gigs}>
            <div className={styles.container}>
                <span className={styles.breadcrumbs}>SkillSphere Services</span>
                {/* <h1>AI Artists</h1> */}
                {/* <p>Explore the boundaries of all </p> */}

                <div className={styles.menu}>
                    <div className={styles.left}>
                        <span>Budget</span>
                        <input ref={minRef} type="number" placeholder="min" />
                        <input ref={maxRef} type="number" placeholder="max" />
                        <button onClick={apply}>Apply</button>
                    </div>
                </div>

                <div className={styles.cards}>
                    {filterData.map((gig) => (
                        <GigCard
                            key={gig._id}
                            item={gig}
                            //   onClick={handleShowSingleGig}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

{
}

export default Gigs;

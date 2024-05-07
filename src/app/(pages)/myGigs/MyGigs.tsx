"use client";
import React, { useEffect } from "react";
import styles from "./MyGigs.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchGigsByUserIdAsync,
    selectCurrentUserGig,
} from "@/redux_store/slice/gigsSlice";
import newRequest from "@/app/utils/newRequest";

function MyGigs() {
    // const currentUser: {
    //     id: number;
    //     username: string;
    //     isSeller: boolean;
    // } = {
    //     id: 1,
    //     username: "Anna",
    //     isSeller: true,
    // };

    const dispatch = useDispatch();
    const currentuserGig = useSelector(selectCurrentUserGig);

    const loggedInUser = useSelector((state) => state.auth.user.currentUser);
    console.log("Loggedin>>>>>>>>>>>>>>>>>", loggedInUser);
    const originaluser = JSON.parse(loggedInUser);
    const userId = originaluser._id;
    console.log("id>>>>>>>>>>>>>>>>>>", userId);
    const loginUserName = originaluser.username;
    const loginUserIsSeller = originaluser.isSeller;

    useEffect(() => {
        // Dispatch the fetchGigsByUserIdAsync action when the component mounts
        if (userId) {
            dispatch(fetchGigsByUserIdAsync(userId));
        }
    }, [dispatch, userId]);
    console.log("gigss>>>>>>>>>>>>>..", currentuserGig);

    async function handleDelete(_id: any): Promise<void> {
        console.log("id________", _id);
        try {
            // Make an API call to delete the gig
            const response = await newRequest.delete(`/gigs/${_id}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${token}`,
                },
            });
            dispatch(fetchGigsByUserIdAsync(userId));
            console.log("Gig deleted successfully:", response.data);
            // Optionally, update the state or perform any additional actions after successful deletion
        } catch (error) {
            console.error("Error deleting gig:", error);
            // Optionally, handle errors gracefully
        }

        // return console.log("gigid", _id);
        // throw new Error("Function not implemented.");
    }

    return (
        <div className={styles.myGigs}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>{originaluser.isSeller ? "Gigs" : "Orders"}</h1>
                    {originaluser.isSeller && (
                        <Link href="/add">
                            <button>Add New Gig</button>
                        </Link>
                    )}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Sales</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentuserGig.length > 0 ? (
                            currentuserGig.map((gig) => (
                                <tr key={gig._id}>
                                    <td>
                                        <img
                                            className={styles.image}
                                            src={gig.cover}
                                            alt=""
                                        />
                                    </td>
                                    <td>{gig.title}</td>
                                    <td>{gig.price}</td>
                                    <td>{gig.sales}</td>
                                    <td>
                                        <img
                                            className={styles.delete}
                                            src="./img/delete.png"
                                            alt=""
                                            onClick={() =>
                                                handleDelete(gig._id)
                                            }
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <>
                                <h1>No Data</h1>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyGigs;

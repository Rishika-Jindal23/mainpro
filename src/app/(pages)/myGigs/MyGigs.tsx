"use client";
import React, { useEffect } from "react";
import styles from "./MyGigs.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchGigsByUserIdAsync,
    selectCurrentUserGig,
} from "@/redux_store/slice/gigsSlice";

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
                        <tr>
                            <td>
                                <img
                                    className={styles.image}
                                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                            </td>
                            <td>Stunning concept art</td>
                            <td>
                                59.<sup>99</sup>
                            </td>
                            <td>13</td>
                            <td>
                                <img
                                    className={styles.delete}
                                    src="./img/delete.png"
                                    alt=""
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    className={styles.image}
                                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                            </td>
                            <td>Ai generated concept art</td>
                            <td>
                                120.<sup>99</sup>
                            </td>
                            <td>41</td>
                            <td>
                                <img
                                    className={styles.delete}
                                    src="./img/delete.png"
                                    alt=""
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    className={styles.image}
                                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                            </td>
                            <td>High quality digital character</td>
                            <td>
                                79.<sup>99</sup>
                            </td>
                            <td>55</td>
                            <td>
                                <img
                                    className={styles.delete}
                                    src="./img/delete.png"
                                    alt=""
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    className={styles.image}
                                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                            </td>
                            <td>Illustration hyper realistic painting</td>
                            <td>
                                119.<sup>99</sup>
                            </td>
                            <td>29</td>
                            <td>
                                <img
                                    className={styles.delete}
                                    src="./img/delete.png"
                                    alt=""
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    className={styles.image}
                                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                            </td>
                            <td>Original ai generated digital art</td>
                            <td>
                                59.<sup>99</sup>
                            </td>
                            <td>34</td>
                            <td>
                                <img
                                    className={styles.delete}
                                    src="./img/delete.png"
                                    alt=""
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    className={styles.image}
                                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                            </td>
                            <td>Text based ai generated art</td>
                            <td>
                                110.<sup>99</sup>
                            </td>
                            <td>16</td>
                            <td>
                                <img
                                    className={styles.delete}
                                    src="./img/delete.png"
                                    alt=""
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyGigs;

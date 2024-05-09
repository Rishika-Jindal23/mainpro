"use client";
import React from "react";

import styles from "./Orders.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "@/redux_store/slice/ordersSlice";
import { useRouter } from "next/navigation";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orders);
    console.log("order--------", orders);
    const router = useRouter();

    const error = useSelector((state) => state.error);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const loggedInUser = useSelector((state) => state.auth.user.currentUser);

    const originaluser = loggedInUser ? JSON.parse(loggedInUser) : null; // const loginUserId = originaluser._id;
    // const loginUserName = originaluser.username;
    // const loginUserIsSeller = originaluser.isSeller;

    function handleContact(order: any): void {
        router.push("/contact");
    }

    return (
        <div className={styles.orders}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Orders</h1>
                </div>
                {/* <p>orderid{orders.orders.id}</p> */}
                {/* <div>
                    <h1>Orders</h1>
                    {error && <p>{error}</p>}
                    <ul>
                        {orders.map((order) => (
                            <li key={order._id}>{order.title}</li>
                        ))}
                    </ul>
                </div> */}

                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>

                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>
                                    <img
                                        className={styles.image}
                                        src={order.img}
                                        alt=""
                                    />
                                </td>
                                <td>{order.title}</td>
                                <td>{order.price}</td>
                                <td>
                                    <img
                                        className={styles.message}
                                        src="./img/message.png"
                                        alt=""
                                        onClick={() => handleContact(order)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;

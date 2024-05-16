"use client";
import React from "react";

import styles from "./Orders.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "@/redux_store/slice/ordersSlice";
import { useRouter } from "next/navigation";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: any) => state.orders.orders);
    //console.log("order--------", orders);
    const router = useRouter();

    const error = useSelector((state: any) => state.error);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const loggedInUser = useSelector(
        (state: any) => state.auth.user.currentUser
    );

    const originaluser = loggedInUser ? JSON.parse(loggedInUser) : null;
    // console.log("originaluse>>>>>>>>>.", originaluser);
    // console.log("isSeller", originaluser.isSeller);
    const sellerdetails = "  Connect with Seller";
    const buyerdetails = "  Connect with Buyer";

    function handleContact(order: any): void {
        const joinId = order.sellerId;
    }

    function personDetails(order: any): void {
        // console.log("order", order);
        const sellerId = order.sellerId;
        const buyerId = order.buyerId;

        router.push(`/userDetails?sellerId=${sellerId}&buyerId=${buyerId}`);
    }

    return (
        <div className={styles.orders}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Orders</h1>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>

                            {/* <th>Contact</th> */}
                            {/* <th>message</th> */}
                            <th>
                                {originaluser.isSeller
                                    ? buyerdetails
                                    : sellerdetails}
                            </th>
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
                                        onClick={() => personDetails(order)}
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

"use client";
import React, { useEffect } from "react";
import moment from "moment";

import styles from "./Messages.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchConversations,
    selectConversations,
} from "@/redux_store/slice/conversationSlice";
import { RootState } from "@/redux_store/store";

const Messages: React.FC = () => {
    const loggedInUser = useSelector((state) => state.auth.user.currentUser);
    // console.log("Loggedin>>>>>>>>>>>>>>>>>", loggedInUser);
    const originaluser = loggedInUser ? JSON.parse(loggedInUser) : null;
    const userId = originaluser ? originaluser._id : null;
    // console.log("id>>>>>>>>>>>>>>>>>>", userId);
    //  const loginUserName = originaluser originaluser.username;
    const loginUserIsSeller = originaluser ? originaluser.isSeller : null;
    //   console.log("seller>>>>>>>>",loginUserIsSeller)
    // useEffect(() => {
    //     dispatch(fetchGigsAsync());
    // }, [dispatch]);

    // const currentUser = {
    //     id: 1,
    //     username: "Anna",
    //     isSeller: true,
    // };
    const dispatch = useDispatch();
    const { conversations, loading, error } = useSelector(
        (state: RootState) => state.conversation
    );

    useEffect(() => {
        dispatch(fetchConversations());
    }, [dispatch]);

    const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

    return (
        <div className={styles.message}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Messages</h1>
                </div>
                <table>
                    <tr>
                        <th>{loginUserIsSeller ? "Buyer" : "Seller"}</th>
                        <th>Last Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    {conversations.map((c) => (
                        <tr
                            className={
                                ((loginUserIsSeller && !c.readBySeller) ||
                                    (!loginUserIsSeller && !c.readByBuyer)) &&
                                "active"
                            }
                            key={c.id}
                        >
                            <td>
                                {loginUserIsSeller ? c.buyerId : c.sellerId}
                            </td>
                            <td>
                                <Link
                                    href={`/message/${c.id}`}
                                    className={styles.link}
                                >
                                    {c?.lastMessage?.substring(0, 100)}...
                                </Link>
                            </td>
                            <td>{moment(c.updatedAt).fromNow()}</td>
                            <td>
                                {((loginUserIsSeller && !c.readBySeller) ||
                                    (!loginUserIsSeller && !c.readByBuyer)) && (
                                    <button onClick={() => handleRead(c.id)}>
                                        Mark as Read
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Messages;

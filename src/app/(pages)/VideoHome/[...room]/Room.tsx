"use client";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useSelector } from "react-redux";

const Room: React.FC<{ id: string }> = ({ id }: { id: string }) => {
    const loggedInUser = useSelector((state) => state.auth.user.currentUser);
    const originaluser = loggedInUser ? JSON.parse(loggedInUser) : null;
    const userId = originaluser ? originaluser._id : null;
    const userName = originaluser ? originaluser.username : null;
    // console.log("username>>>>>>>", userName);
    // console.log("userId>>>>>>>>", userId);
    const roomId = id;
    // console.log("id>>>>>>>>", id);
    const myMeeting = async (element) => {
        // generate Kit Token
        const appID = 1411158925;
        const serverSecret = "12af6bceac70e470b79b2a82e0f6cf5b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            userId, //userid,
            userName
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:3000/VideoHome/${roomId}`,
                },
            ],
            scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
        });
    };
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
};
export default Room;

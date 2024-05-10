"use client";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";

const Room: React.FC<{ id: string }> = ({ id }: { id: string }) => {
    const roomId = id;
    console.log("id>>>>>>>>", id);
    const myMeeting = async (element) => {
        // generate Kit Token
        const appID = 1411158925;
        const serverSecret = "12af6bceac70e470b79b2a82e0f6cf5b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(), //userid,
            "Rishika Jindal"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:3000/room/${roomId}`,
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

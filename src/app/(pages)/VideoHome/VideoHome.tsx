"use client";
import { useCallback, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

// const loggedInUser = useSelector((state) => state.auth.user.currentUser);
// const originaluser = JSON.parse(loggedInUser);
// const userId = originaluser._id;
// console.log("userId>>>>>>>>", userId);

function VideoHome() {
    const [value, setValue] = useState();
    console.log(value);
    const router = useRouter();
    const handleJoinRoom = useCallback(() => {
        router.push(`/VideoHome/${value}`);
    }, [router, value]);
    return (
        <>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter Room Code"
                />
                <button onClick={handleJoinRoom}>Join</button>
            </div>
        </>
    );
}

export default VideoHome;

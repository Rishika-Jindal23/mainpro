"use client";
import { useCallback, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

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

// *********************
// export default VideoHome;
// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// const VideoHome: React.FC<{ onSubmit: (roomId: string) => void }> = ({
//     onSubmit,
// }) => {
//     const [roomId, setRoomId] = useState("");

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         onSubmit(roomId);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div
//                 style={{
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr",
//                     gap: "10px",
//                     marginTop: "40px",
//                 }}
//             >
//                 <TextField
//                     label="Enter Room ID"
//                     variant="outlined"
//                     value={roomId}
//                     onChange={(e) => setRoomId(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <Button variant="contained" onClick={handleSubmit}>
//                     Join
//                 </Button>
//             </div>
//         </form>
//     );
// };

export default VideoHome;

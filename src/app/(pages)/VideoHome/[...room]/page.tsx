import React from "react";
import Room from "./Room";

function page({ params }) {
    const roomId = params.room[0]; // Accessing the first element of the room array
    // console.log("roomid>>>>>>", roomId);

    return (
        <div>
            <Room id={roomId} />
        </div>
    );
}

export default page;

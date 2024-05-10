import React from "react";
import Room from "./Room";

function page({ params }) {
    const roomId = params.roomId;
    return (
        <div>
            <Room id={roomId} />
        </div>
    );
}

export default page;

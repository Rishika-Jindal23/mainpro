import Image from "next/image";
import Gig from "./Gig";

export default function GigPage({ params }) {
    const gigid = params.gigid;
    return (
        <div>
            <h1> </h1>
            <Gig id={gigid} />
        </div>
    );
}

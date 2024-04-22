import { gigs } from "@/data";
import Spheres from "./Spheres";
import { Key } from "react";
import GigCard from "@/components/gigCard/GigCard";

export default function spherepage() {
    return (
        <>
            <Spheres gigs={[  {gigs.map((gig: { id: Key | null | undefined; }) => (
                        <GigCard key={gig.id} item={gig} />
                    ))}]} />
        </>
    );
}

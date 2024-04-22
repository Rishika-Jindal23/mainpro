"use client";

import CatCard from "@/components/catCard/CatCard";
import Hero from "@/components/layout/Hero";
import { cards } from "@/data";
import Carousel from "@itseasy21/react-elastic-carousel";
import LandingMain from "./landingpage";

export default function landingPage() {
    return (
        <>
            <LandingMain />
            {/* <h1>hello from landing page </h1>
            <Hero />
            <div>need to add </div>
            <div className="flex text-blue-700 6xl  items-center mt-60">
                <h1>Explore the categories</h1>
            </div>
            <Carousel itemsToShow={3} isRTL={false}> */}
            {/* <h4>1</h4>
                <h4>2</h4>
                <h3>3</h3>
                <h4>4</h4>
                <h4>5</h4>
                <h4>6</h4> */}
            {/* {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Carousel> */}
        </>
    );
}

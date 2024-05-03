import { cards, projects } from "@/data";
import Hero from "./Hero";
import ProjectCard from "../projectCard/ProjectCard";
import Carousel from "@itseasy21/react-elastic-carousel";
import Footer from "../footer/Footer";
import CatCard from "../catCard/CatCard";

export default function Dashboard() {
    return (
        <>
            <Hero />
            <h1>need to add something </h1>

            <div className="flex text-blue-700 6xl  items-center mt-60">
                <h1>Explore the categories</h1>
            </div>
            <Carousel itemsToShow={3} isRTL={false}>
                {/* <h4>1</h4>
                <h4>2</h4>
                <h3>3</h3>
                <h4>4</h4>
                <h4>5</h4>
                <h4>6</h4> */}
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Carousel>

            <h1>need to add something</h1>

            <div className="mt-6   font-semibold text-3xl p-4  ">
                our services
                <Carousel itemsToShow={3} isRTL={false}>
                    {projects.map((card) => (
                        <ProjectCard key={card.id} card={card} />
                    ))}
                </Carousel>
            </div>
            <Footer />
        </>
    );
}

import React from "react";
import CatCard from "../catCard/CatCard";
import ProjectCard from "../projectCard/ProjectCard";
//import { projects } from "@/data";
//import CatCard from "@/components/catCard/CatCard";
import { cards, projects } from "@/data";
import Carousel from "@itseasy21/react-elastic-carousel";
//import ProjectCard from "@/components/projectCard/ProjectCard";
import Footer from "@/components/footer/Footer";
import TrustedBy from "../trustedBy/TrustedBy";

function LandingPageComponent() {
    return (
        <div>
            <div className="mt-10 bg-blue-200 rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                    Welcome to SkillSphere{" "}
                </h2>
                <p className="text-blue-700">
                    Are you a freelancer looking to unleash your skills and
                    expertise? Or perhaps you're a business/individual in search
                    of top-notch talent to bring your projects to life? Look no
                    further than SkillSphere.
                </p>
            </div>

            <div className="flex text-blue-700 6xl  ml-7  text-center  text-3xl mt-10">
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
        </div>
    );
}

export default LandingPageComponent;

"use client";

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
import ExploreMarket from "./ExploreMarket";
import heroes from "../../../public/img/hero.png";
import Image from "next/image";
import pc from "../../../public/img/pc.jpg";

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

            <div className="mt-6   font-semibold text-3xl p-4">
                <h1>Explore the categories</h1>
            </div>
            <Carousel itemsToShow={3} isRTL={false}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Carousel>
            {/* <ExploreMarket /> */}
            <div className="mt-10 bg-blue-200 rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                    "Unlock your potential. Join our freelancing platform and
                    turn your skills into opportunities."
                </h2>
            </div>

            <section className="grid grid-cols-2 mt-10">
                <div className="w-45 h-70  relative mt-5 ">
                    <Image src={pc} alt="test" />
                </div>

                <div>
                    <div className="mt-5    bg-blue-200 rounded-lg p-6 shadow-md">
                        <h1 className="text-2xl font-bold text-blue-800 mb-4">
                            A whole world of freelance talent at your fingertips
                        </h1>

                        <p className="text-blue-700">
                            The best for every budget,
                        </p>
                        <p className="text-blue-700">
                            Quality work done quickly
                        </p>
                        <p className="text-blue-700">
                            Protected payments, every time
                        </p>
                        <p className="text-blue-700">24/7 support</p>
                    </div>
                </div>
            </section>
            <div className="mt-10 bg-blue-200 rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                    "Say goodbye to the traditional 9-5 and hello to the
                    flexibility and fulfillment of freelancing."
                </h2>
            </div>

            <div className="mt-6   font-semibold text-3xl p-4  ">
                our services
                <Carousel itemsToShow={3} isRTL={false}>
                    {projects.map((card) => (
                        <ProjectCard key={card.id} card={card} />
                    ))}
                </Carousel>
            </div>
            <TrustedBy />
        </div>
    );
}

export default LandingPageComponent;

import Image from "next/image";
import heroes from "../../../public/img/hero.png";
import undraw from "../../../public/img/imageundraw.png";
import styles from "./HeroTwo.module.scss";
import { cards, projects } from "@/data";
import CatCard from "../catCard/CatCard";
import Carousel from "@itseasy21/react-elastic-carousel";
import ProjectCard from "../projectCard/ProjectCard";
import TrustedBy from "../trustedBy/TrustedBy";
import Footer from "../footer/Footer";

export default function HeroTwo() {
    return (
        <>
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
                <a
                    href="/login"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Learn More
                </a>
            </div>
            <div className="mt-6   font-semibold text-3xl p-4  ">
                our services
                <Carousel itemsToShow={3} isRTL={false}>
                    {projects.map((card) => (
                        <ProjectCard key={card.id} card={card} />
                    ))}
                </Carousel>
            </div>

            {/* <Carousel itemsToShow={3} isRTL={false}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Carousel> */}

            <div className="bg-blue-900 text-white   mt-10  py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">
                        Find Your Next Project
                    </h1>
                    <p className="text-lg mb-8">
                        Browse through a wide range of freelance opportunities.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-blue-800 p-6 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">
                                Web Development
                            </h2>
                            <p className="text-sm">
                                Build beautiful and functional websites for
                                clients.
                            </p>
                        </div>
                        <div className="bg-blue-800 p-6 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">
                                Graphic Design
                            </h2>
                            <p className="text-sm">
                                Create stunning visuals and illustrations.
                            </p>
                        </div>
                        <div className="bg-blue-800 p-6 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">
                                Digital Marketing
                            </h2>
                            <p className="text-sm">
                                Help businesses grow their online presence.
                            </p>
                        </div>
                        <div className="bg-blue-800 p-6 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">
                                Content Writing
                            </h2>
                            <p className="text-sm">
                                Craft compelling and engaging written content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="mt-10 bg-blue-200 rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                    Welcome to SkillSphere{" "}
                </h2>
                <p className="text-blue-700">
                    Find the right freelancer to begin working on your project
                    within minutes.
                </p>
            </div> */}

            <div></div>

            <section className="grid grid-cols-2 mt-10">
                <div className="w-45 h-70  relative mt-5 ">
                    <Image src={heroes} alt="for freelancers"></Image>
                </div>

                <div>
                    <div className="mt-10 bg-blue-200 rounded-lg p-6 shadow-md">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4">
                            For Freelancers:{" "}
                        </h2>
                        <p className="text-blue-700">
                            Join a community of passionate and skilled
                            professionals. Whether you're a designer, developer,
                            writer, marketer, or any other creative or technical
                            expert, our platform offers you the opportunity to
                            showcase your talent and connect with clients from
                            around the globe..
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-2 mt-10">
                <div>
                    <div className="mt-10 bg-blue-200 rounded-lg p-6 shadow-md">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4">
                            For Clients:
                        </h2>
                        <p className="text-blue-700">
                            Discover a pool of talented professionals ready to
                            bring your ideas to life. Whether you need a
                            one-time project or ongoing support, our platform
                            makes it easy to find the perfect freelancer for
                            your needs.
                        </p>
                    </div>
                </div>

                <div className="w-45 h-70  relative mt-5 ">
                    <Image src={undraw} alt="for freelancers"></Image>
                    {/* <img
                      src={}
                      //   layout={"fill"}*
                      //    objectFit={"contain"}
                      alt="freelance"
                      // layout="responsive"
                  ></img> */}
                </div>
            </section>

            <TrustedBy />

            <></>
        </>
    );
}

import Hero from "@/components/layout/Hero";
import CatCard from "@/components/catCard/CatCard";
import { cards, projects } from "@/data";
import Carousel from "@itseasy21/react-elastic-carousel";
import ProjectCard from "@/components/projectCard/ProjectCard";
import Footer from "@/components/footer/Footer";
import LandingPageComponent from "@/components/layout/LandingPageComponent";
import Dashboard from "@/components/layout/Dashboard";

export default function LandingMain() {
    return (
        <>
            <Hero />
            <Dashboard />
        </>
    );
}

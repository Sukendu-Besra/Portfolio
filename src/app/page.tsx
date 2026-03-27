import Navbar from "@/components/ui/Navbar";
import Cursor from "@/components/ui/Cursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
    return (
        <>
            <Cursor />
            <Navbar />
            <main className="flex flex-col relative z-10 w-full overflow-x-hidden">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Achievements />
                <Education />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

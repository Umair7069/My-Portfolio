import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { GithubRepos } from "@/components/sections/GithubRepos";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubRepos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

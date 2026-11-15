import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Intro } from "@/components/sections/Intro";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Intro />
        <Projects />
        <TechStack />
        <Section id="experience" className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.35fr] lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
            <Skills />
            <Experience />
          </div>
        </Section>
        <Education />
        <Contact />
      </main>
    </>
  );
}

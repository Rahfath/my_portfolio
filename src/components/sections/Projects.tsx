import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { AnimatedFade } from "@/components/ui/AnimatedFade";

export const Projects: React.FC = () => {
  // Staggered offsets for the playful editorial feel seen in Figma
  const offsetClasses = [
    "md:pl-[22%]", // Daybook (left-center)
    "md:pl-[40%]", // Pocket (further right)
    "md:pl-[22%]", // Gather (left-center)
  ];

  return (
    <Section id="work" className="py-16 md:py-24">
      <AnimatedFade>
        <Heading as="h2" size="section" className="mb-14 sm:mb-20">
          A few good apps.
        </Heading>
      </AnimatedFade>

      <div className="space-y-12 sm:space-y-16 md:space-y-20">
        {projects.map((project, index) => {
          const offset = offsetClasses[index % offsetClasses.length];

          return (
            <AnimatedFade key={project.id} delay={index * 0.1}>
              <article className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 sm:gap-6 border-b border-transparent pb-2">
                {/* Asymmetric offset block for title + description */}
                <div className={`space-y-1.5 ${offset}`}>
                  <Heading as="h3" size="subsection">
                    {project.title}
                  </Heading>
                  <p className="text-muted text-[clamp(0.95rem,1.8vw,1.0625rem)] font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Right-aligned View App action link */}
                <div className="md:pt-1 self-start">
                  <Link
                    href={project.url}
                    target={project.external ? "_blank" : undefined}
                    rel={project.external ? "noopener noreferrer" : undefined}
                    className="inline-block text-accent text-sm sm:text-base font-medium underline underline-offset-4 decoration-accent/60 hover:decoration-accent hover:opacity-80 transition-all duration-200"
                    aria-label={`View ${project.title} app`}
                  >
                    View app
                  </Link>
                </div>
              </article>
            </AnimatedFade>
          );
        })}
      </div>
    </Section>
  );
};

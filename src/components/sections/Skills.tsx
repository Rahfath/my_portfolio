import React from "react";
import { skillsData } from "@/data/skills";
import { Heading } from "@/components/ui/Heading";
import { AnimatedFade } from "@/components/ui/AnimatedFade";

export const Skills: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <AnimatedFade>
        <Heading as="h2" size="subsection">
          {skillsData.title}
        </Heading>
      </AnimatedFade>

      <AnimatedFade delay={0.1}>
        <ul className="space-y-2.5 text-[clamp(1rem,1.8vw,1.125rem)] text-foreground font-normal">
          {skillsData.items.map((skill) => (
            <li key={skill} className="leading-snug">
              {skill}
            </li>
          ))}
        </ul>
      </AnimatedFade>
    </div>
  );
};

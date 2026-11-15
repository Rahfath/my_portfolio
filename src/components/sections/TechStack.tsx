import React from "react";
import { techStack } from "@/data/techStack";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { AnimatedFade } from "@/components/ui/AnimatedFade";

export const TechStack: React.FC = () => {
  return (
    <Section id="tech-stack" className="py-16 md:py-24">
      <AnimatedFade>
        <Heading as="h2" size="section" className="mb-12 sm:mb-16">
          Tech stack.
        </Heading>
      </AnimatedFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-10">
        {techStack.map((group, groupIndex) => (
          <AnimatedFade key={group.category} delay={groupIndex * 0.08}>
            <div className="space-y-4">
              <Heading as="h3" size="item" className="text-foreground">
                {group.category}
              </Heading>

              <ul className="space-y-2 text-[clamp(0.9375rem,1.6vw,1.0625rem)] text-muted font-normal">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="leading-snug hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedFade>
        ))}
      </div>
    </Section>
  );
};

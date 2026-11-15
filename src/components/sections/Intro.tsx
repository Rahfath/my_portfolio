import React from "react";
import { personalInfo } from "@/data/personal";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { AnimatedFade } from "@/components/ui/AnimatedFade";

export const Intro: React.FC = () => {
  return (
    <Section id="intro" className="pt-10 sm:pt-16 pb-16 md:pb-24">
      <AnimatedFade>
        <div className="space-y-6 md:space-y-8">
          <Heading as="h1" size="display">
            <span>Hi, I’m </span>
            <br />
            <span className="text-accent">{personalInfo.name}.</span>
          </Heading>

          <div className="flex justify-start md:justify-end pt-2 md:pt-4">
            <p className="text-muted text-[clamp(1rem,2vw,1.1875rem)] leading-relaxed max-w-md font-normal">
              {personalInfo.tagline}
            </p>
          </div>
        </div>
      </AnimatedFade>
    </Section>
  );
};

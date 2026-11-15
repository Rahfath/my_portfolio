import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { AnimatedFade } from "@/components/ui/AnimatedFade";

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="pt-16 md:pt-24 pb-24 md:pb-36">
      <AnimatedFade>
        <div className="space-y-6 sm:space-y-8">
          <Heading as="h2" size="section">
            Say hello.
          </Heading>

          <div className="pt-2">
            <Link
              href={`mailto:${personalInfo.email}`}
              className="inline-block font-display font-extrabold text-[clamp(1.75rem,5.5vw,4.5rem)] leading-none text-accent hover:opacity-85 transition-opacity duration-200 tracking-[-0.03em] break-all sm:break-normal"
              aria-label={`Email ${personalInfo.email}`}
            >
              {personalInfo.email}
            </Link>
          </div>

          {(personalInfo.github || personalInfo.linkedin || personalInfo.phone) && (
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2 sm:pt-4 text-sm sm:text-base font-medium text-muted">
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  GitHub ↗
                </a>
              )}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  LinkedIn ↗
                </a>
              )}
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  {personalInfo.phone}
                </a>
              )}
            </div>
          )}
        </div>
      </AnimatedFade>
    </Section>
  );
};

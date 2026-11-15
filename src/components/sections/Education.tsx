import React from "react";
import { educationData } from "@/data/education";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { AnimatedFade } from "@/components/ui/AnimatedFade";

export const Education: React.FC = () => {
  return (
    <Section id="education" className="py-16 md:py-24">
      <AnimatedFade>
        <Heading as="h2" size="section" className="mb-12 sm:mb-16">
          Education.
        </Heading>
      </AnimatedFade>

      <div className="space-y-10 sm:space-y-12">
        {educationData.map((item, index) => (
          <AnimatedFade key={`${item.institution}-${index}`} delay={index * 0.1}>
            <article className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-2 md:gap-10 lg:gap-14">
              {/* Left column: timeline dates */}
              <div className="pt-0.5">
                <span className="text-muted text-sm sm:text-base font-normal">
                  <time>{item.startYear}</time>
                  <span aria-hidden="true"> – </span>
                  <time>{item.endYear}</time>
                </span>
              </div>

              {/* Right column: institution and degree details */}
              <div className="space-y-1.5">
                <Heading as="h3" size="item">
                  {item.institution}
                </Heading>

                <p className="text-foreground text-sm sm:text-base font-medium">
                  {item.degree}
                  {item.field && (
                    <span className="text-muted font-normal"> · {item.field}</span>
                  )}
                </p>

                {item.highlight && (
                  <p className="text-muted text-xs sm:text-sm font-normal pt-1 max-w-xl leading-relaxed">
                    {item.highlight}
                  </p>
                )}
              </div>
            </article>
          </AnimatedFade>
        ))}
      </div>
    </Section>
  );
};

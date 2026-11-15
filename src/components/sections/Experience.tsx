import React from "react";
import { experienceData } from "@/data/experience";
import { Heading } from "@/components/ui/Heading";
import { AnimatedFade } from "@/components/ui/AnimatedFade";

export const Experience: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <AnimatedFade>
        <Heading as="h2" size="subsection">
          {experienceData.title}
        </Heading>
      </AnimatedFade>

      <div className="space-y-8">
        {experienceData.items.map((item, index) => (
          <AnimatedFade key={item.id} delay={0.1 + index * 0.1}>
            <article className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <Heading as="h3" size="item">
                  {item.company}
                </Heading>
                <p className="text-muted text-sm sm:text-base font-normal">
                  {item.role}
                </p>
              </div>

              <span className="text-muted text-sm sm:text-base font-normal whitespace-nowrap pt-0.5">
                {item.period}
              </span>
            </article>
          </AnimatedFade>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  containerClassName,
  children,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-[clamp(3.5rem,8vw,6.5rem)] scroll-mt-12",
        className
      )}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

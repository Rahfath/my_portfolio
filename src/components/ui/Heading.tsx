import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "display" | "section" | "subsection" | "item";
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = "h2",
  size = "section",
  className,
  children,
  ...props
}) => {
  const sizeClasses = {
    display:
      "font-display font-extrabold text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.04] tracking-[-0.035em] text-foreground",
    section:
      "font-display font-extrabold text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.03em] text-foreground",
    subsection:
      "font-display font-bold text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.15] tracking-[-0.025em] text-foreground",
    item: "font-display font-bold text-[clamp(1.125rem,2.5vw,1.375rem)] leading-[1.2] tracking-[-0.015em] text-foreground",
  };

  return (
    <Component
      className={cn(sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

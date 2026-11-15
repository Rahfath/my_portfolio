import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-4xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

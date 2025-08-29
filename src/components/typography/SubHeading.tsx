import * as React from "react";

type SubHeadingProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SubHeading({ className, children }: SubHeadingProps) {
  return (
    <p
      className={`text-neutral-dark mb-4 text-base leading-relaxed sm:mb-5 sm:text-lg md:mb-6 md:max-w-[50rem] md:text-xl ${className || ""}`}
    >
      {children}
    </p>
  );
}

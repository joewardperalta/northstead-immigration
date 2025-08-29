import * as React from "react";

type HeadingProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Heading({ className, children }: HeadingProps) {
  return (
    <h2
      className={`mb-3 text-3xl leading-tight sm:mb-4 sm:max-w-[30rem] sm:text-4xl md:mb-5 md:max-w-[50rem] md:text-5xl ${className || ""}`}
    >
      {children}
    </h2>
  );
}

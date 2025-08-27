import * as React from "react";

type HeadingProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Heading({ className, children }: HeadingProps) {
  return (
    <h2
      className={`text-2xl font-medium leading-7 mb-3 lg:text-4xl lg:leading-12 max-w-[30rem] ${className}`}
    >
      {children}
    </h2>
  );
}

import * as React from "react";

type HeadingProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Heading({ className, children }: HeadingProps) {
  return (
    <h2
      className={`mb-[0.8rem] w-full text-[1.8rem] leading-[1.2] font-medium md:text-[2.7rem] ${className || ""}`}
    >
      {children}
    </h2>
  );
}

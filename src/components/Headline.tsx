import * as React from "react";

type HeadlineProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Headline({ children, className }: HeadlineProps) {
  return (
    <div className={`mb-[2rem] sm:mb-[3rem] md:mb-[4rem] ${className}`}>
      {children}
    </div>
  );
}

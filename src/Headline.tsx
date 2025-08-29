import * as React from "react";

type HeadlineProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Headline({ children, className }: HeadlineProps) {
  return (
    <div className={`mb-8 sm:mb-10 md:mb-12 ${className}`}>{children}</div>
  );
}

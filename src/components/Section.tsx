import * as React from "react";

type SectionProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Section({ className, children }: SectionProps) {
  return (
    <section className={`py-[2rem] md:py-[4rem] lg:py-[6rem] ${className}`}>
      {children}
    </section>
  );
}

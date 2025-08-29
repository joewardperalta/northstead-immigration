import * as React from "react";

type SectionProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Section({ className, children }: SectionProps) {
  return (
    <section className={`py-[6rem] md:py-[8rem] ${className}`}>
      {children}
    </section>
  );
}

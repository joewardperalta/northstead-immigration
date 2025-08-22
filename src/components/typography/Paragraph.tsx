import * as React from "react";

type ParagraphProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p className={`text-neutral text-base md:text-lg ${className ?? ""}`}>
      {children}
    </p>
  );
}

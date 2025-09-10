import * as React from "react";

type ParagraphProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Paragraph({ className, children }: ParagraphProps) {
  return <p className={`text-base ${className ?? ""}`}>{children}</p>;
}

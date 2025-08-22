import * as React from "react";
import Paragraph from "./typography/Paragraph";

type BadgeProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Badge({ className, children }: BadgeProps) {
  return (
    <div
      className={`border border-neutral rounded-full w-fit px-4 py-1 text-secondary mb-4 mx-auto md:mx-0 ${
        className ?? ""
      }`}
    >
      <Paragraph className="text-secondary">{children}</Paragraph>
    </div>
  );
}

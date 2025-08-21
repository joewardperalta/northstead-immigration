import * as React from "react";

type BadgeProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Badge({ className, children }: BadgeProps) {
  return (
    <div
      className={`border border-neutral rounded-full w-fit px-4 py-1 text-secondary ${
        className ?? ""
      }`}
    >
      <p>{children}</p>
    </div>
  );
}

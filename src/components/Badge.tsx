import * as React from "react";

type BadgeProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Badge({ className, children }: BadgeProps) {
  return (
    <div
      className={`border-neutral text-secondary mb-3 w-fit rounded-full border px-4 py-1 leading-[1.5] sm:mb-4 md:mb-5 ${
        className ?? ""
      }`}
    >
      <p>{children}</p>
    </div>
  );
}

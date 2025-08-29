import * as React from "react";

type SubHeadingProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SubHeading({ className, children }: SubHeadingProps) {
  return (
    <div className="mb-[1.2rem]">
      <p className={`w-full text-[1rem] md:text-[1.12rem] ${className ?? ""}`}>
        {children}
      </p>
    </div>
  );
}

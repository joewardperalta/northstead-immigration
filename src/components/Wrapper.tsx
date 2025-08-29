import * as React from "react";

type WrapperProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Wrapper({ className, children }: WrapperProps) {
  return (
    <div
      className={`mx-auto px-[1.2rem] sm:max-w-[700px] lg:max-w-[1200px] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

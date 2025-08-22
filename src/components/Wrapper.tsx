import * as React from "react";

type WrapperProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Wrapper({ className, children }: WrapperProps) {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto px-3 py-12 md:p-20 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}

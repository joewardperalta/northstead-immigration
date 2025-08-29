import * as React from "react";

type WrapperProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Wrapper({ className, children }: WrapperProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-6 py-12 sm:px-12 sm:py-16 md:px-[4.5rem] md:py-20 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}

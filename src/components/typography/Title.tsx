import * as React from "react";

type TitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Title({ className, children }: TitleProps) {
  return (
    <h1
      className={`text-secondary mb-4 max-w-[54rem] text-4xl leading-tight font-medium sm:mb-5 sm:text-5xl md:mb-6 md:text-6xl ${
        className ?? ""
      }`}
    >
      {children}
    </h1>
  );
}

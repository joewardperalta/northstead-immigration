import * as React from "react";

type TitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Title({ className, children }: TitleProps) {
  return (
    <h1
      className={`text-secondary text-4xl font-medium mb-4 leading-11 sm:text-5xl sm:mb-5 sm:leading-14 md:text-6xl md:mb-6 md:leading-[4.25rem] ${
        className ?? ""
      }`}
    >
      {children}
    </h1>
  );
}

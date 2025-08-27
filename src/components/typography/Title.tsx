import * as React from "react";

type TitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Title({ className, children }: TitleProps) {
  return (
    <h1
      className={`text-secondary text-3xl font-medium mb-4 md:mb-6 md:text-6xl md:leading-16 ${
        className ?? ""
      }`}
    >
      {children}
    </h1>
  );
}

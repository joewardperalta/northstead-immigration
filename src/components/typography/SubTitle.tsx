import * as React from "react";

type SubTitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SubTitle({ className, children }: SubTitleProps) {
  return (
    <p
      className={`text-neutral mb-8 text-base leading-relaxed sm:mx-auto sm:mb-9 sm:max-w-[34rem] sm:text-lg md:mx-0 md:mb-10 ${
        className ?? ""
      }`}
    >
      {children}
    </p>
  );
}

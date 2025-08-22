import * as React from "react";

type SubTitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SubTitle({ className, children }: SubTitleProps) {
  return (
    <p
      className={`text-neutral text-base md:text-lg md:max-w-[536px] mb-8 md:mb-12 ${
        className ?? ""
      }`}
    >
      {children}
    </p>
  );
}

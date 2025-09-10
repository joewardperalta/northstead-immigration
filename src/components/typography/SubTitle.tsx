import * as React from "react";

type SubTitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SubTitle({ className, children }: SubTitleProps) {
  return (
    <p
      className={`mb-[2rem] text-[1.18rem] md:text-[1.3rem] ${className ?? ""}`}
    >
      {children}
    </p>
  );
}

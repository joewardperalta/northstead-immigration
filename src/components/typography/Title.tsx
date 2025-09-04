import * as React from "react";

type TitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Title({ className, children }: TitleProps) {
  return (
    <div className="">
      <h1
        className={`mb-[1rem] text-[2.3rem] leading-[1.2] font-semibold capitalize md:text-[3.2rem] ${className ?? ""}`}
      >
        {children}
      </h1>
    </div>
  );
}

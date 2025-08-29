import * as React from "react";

type SubTitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SubTitle({ className, children }: SubTitleProps) {
  return (
    <div className="mb-[2rem]">
      <p className={`text-[1.18rem] md:text-[1.3rem] ${className ?? ""}`}>
        {children}
      </p>
    </div>
  );
}

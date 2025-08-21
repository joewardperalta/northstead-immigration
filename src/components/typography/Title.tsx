import * as React from "react";

type TitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Title({ className, children }: TitleProps) {
  return (
    <h1 className={`text-secondary text-3xl mb-4 ${className ?? ""}`}>
      {children}
    </h1>
  );
}

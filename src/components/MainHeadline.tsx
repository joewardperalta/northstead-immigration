import * as React from "react";

type MainHeadlineProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function MainHeadline({
  children,
  className,
}: MainHeadlineProps) {
  return (
    <div className={`lg:max-w-[40rem] ${className || ""}`}>{children}</div>
  );
}

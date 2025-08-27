import * as React from "react";
import Link from "next/link";
import UpRightArrow from "../../../public/icons/UpRightArrow";

type SecondaryCallToActionButtonProps = {
  className?: string;
  children?: React.ReactNode;
  navigateTo: string;
};

export default function SecondaryCallToActionButton({
  className,
  children,
  navigateTo,
}: SecondaryCallToActionButtonProps) {
  return (
    <Link
      className={`w-fit border-b border-transparent flex items-center gap-2 transition-all duration-300 hover:[&>*]:last:translate-x-0.5  hover:[&>*]:last:-translate-y-0.5 [&>*]:last:transition-all [&>*]:last:duration-300  ${className}`}
      href={navigateTo}
    >
      <span>{children}</span>

      <div className="w-4">
        <UpRightArrow />
      </div>
    </Link>
  );
}

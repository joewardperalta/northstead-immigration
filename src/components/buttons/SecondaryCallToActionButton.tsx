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
      className={`flex w-fit items-center gap-2 border-b border-transparent font-medium transition-all duration-300 [&>*]:last:transition-all [&>*]:last:duration-300 hover:[&>*]:last:translate-x-0.5 hover:[&>*]:last:-translate-y-0.5 ${className}`}
      href={navigateTo}
    >
      <span>{children}</span>

      <div className="w-4">
        <UpRightArrow />
      </div>
    </Link>
  );
}

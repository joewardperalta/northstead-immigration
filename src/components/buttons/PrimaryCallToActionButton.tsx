import * as React from "react";
import Link from "next/link";
import Calendar from "../icons/Calendar";

type PrimaryCallToActionButtonProps = {
  className?: string;
  children?: React.ReactNode;
  navigateTo: string;
};

export default function PrimaryCallToActionButton({
  className,
  children,
  navigateTo,
}: PrimaryCallToActionButtonProps) {
  return (
    <Link
      className={`text-secondary bg-primary hover:bg-primary-dark flex w-fit items-center gap-3 rounded-lg px-6 py-3 font-medium transition-all duration-300 ${className}`}
      href={navigateTo}
    >
      <span>{children}</span>
      <div className="text-secondary w-4">
        <Calendar />
      </div>
    </Link>
  );
}

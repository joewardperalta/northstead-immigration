import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import UpRightArrow from "../../../public/icons/UpRightArrow";
import Calendar from "../../../public/icons/Calendar";

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
      className={`w-fit text-secondary bg-primary px-6 py-3 rounded-lg flex items-center gap-3 font-medium hover:bg-primary-dark transition-all duration-300 ${className}`}
      href={navigateTo}
    >
      <span>{children}</span>
      <div className="w-4 text-secondary">
        <Calendar />
      </div>
    </Link>
  );
}

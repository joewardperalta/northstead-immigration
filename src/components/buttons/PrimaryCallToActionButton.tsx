import * as React from "react";
import Image from "next/image";
import Link from "next/link";

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
      className={`w-fit text-secondary bg-primary px-6 py-3 rounded-lg flex items-center gap-3 ${className}`}
      href={navigateTo}
    >
      <span>{children}</span>
      <Image
        className="w-2.5"
        src="/icons/up-right-arrow.svg"
        alt=""
        width={32}
        height={32}
      />
    </Link>
  );
}

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

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
      className={`w-fit text-secondary border-b border-transparent flex items-center gap-3 hover:border-secondary transition-all duration-300 ${className}`}
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

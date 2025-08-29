import * as React from "react";
import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <Image
        className={className}
        src="/logo.png"
        alt="A blue colored text written as Northstead Immigration."
        width={160}
        height={160}
      />
    </Link>
  );
}

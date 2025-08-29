import * as React from "react";
import Image from "next/image";

type PhotoProps = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Photo({
  className,
  src,
  alt,
  width,
  height,
}: PhotoProps) {
  return (
    <Image
      className={`h-full w-full rounded-xl object-cover ${className}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

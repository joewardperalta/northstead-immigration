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
      className={`rounded-xl h-80 w-full object-cover object-left-top ${className}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

import * as React from "react";
import Link from "next/link";
import Photo from "./Photo";
import UpRightArrow from "./icons/UpRightArrow";

type PhotoProps = {
  src: string;
  alt: string;
};

type ServiceCardProps = {
  photo: PhotoProps;
  title: string;
  description: string;
  link: string;
};

export default function ServiceCard({
  photo,
  title,
  description,
  link,
}: ServiceCardProps) {
  return (
    <Link className="group text-center sm:text-left" href={link}>
      <div className="relative -z-10 mb-[1.5rem] h-[18.75rem] w-full overflow-hidden rounded-xl">
        <Photo
          className=""
          src={photo.src}
          alt={photo.alt}
          width={600}
          height={600}
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 h-full w-full transition-all duration-300 group-hover:bg-black/30">
          <div className="flex h-full w-full items-center justify-center">
            <div className="bg-secondary scale-0 rounded-full p-[1rem] transition-all duration-300 group-hover:scale-100">
              <UpRightArrow />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h3 className="mb-[0.5rem] text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

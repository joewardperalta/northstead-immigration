import * as React from "react";
import Image from "next/image";

type BenefitCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="text-center sm:text-left">
      <div className="bg-primary mx-auto mb-[1rem] w-[3.2rem] rounded-full p-[0.8rem] sm:mx-0">
        <Image
          className="h-full w-full"
          src={icon}
          width={64}
          height={64}
          alt=""
        />
      </div>
      <h3 className="mb-[0.5rem] text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

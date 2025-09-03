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
    <div>
      <div className="bg-primary mb-[1rem] w-[3.2rem] rounded-full p-[0.8rem]">
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

import { exportPages } from "next/dist/export/worker";
import * as React from "react";

type ProcessCardProps = {
  title: string;
  description: string;
  step: number;
};

export default function ProcessCard({
  title,
  description,
  step,
}: ProcessCardProps) {
  return (
    <div>
      <p className="mb-[1.2rem] font-semibold">0{step}</p>
      <h3 className="mb-[0.5rem] text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

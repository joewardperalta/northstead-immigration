import * as React from "react";
import Image from "next/image";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

export default function TestimonialCard({
  quote,
  author,
  role,
}: TestimonialCardProps) {
  return (
    <div className="bg-primary rounded-xl p-[2rem] text-white">
      <Image
        className="mb-[1.5rem] -ml-[.8rem] w-[3rem]"
        src="/icons/quote.png"
        alt=""
        width={64}
        height={64}
      />

      <blockquote>
        <p className="mb-[1rem] text-[1.2rem]">{quote}</p>
        <footer>
          <cite className="font-semibold not-italic">{author}</cite>
          <p className="text-[0.8rem]">{role}</p>
        </footer>
      </blockquote>
    </div>
  );
}

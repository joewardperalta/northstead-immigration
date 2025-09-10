import * as React from "react";
import Photo from "./Photo";
import Link from "next/link";
import Paragraph from "./typography/Paragraph";
import Phone from "./icons/Phone";
import Mail from "./icons/Mail";

type PhotoAttributes = {
  src: string;
  alt: string;
};

type ContactAttributes = {
  icon: string;
  link: string;
};

type TeamMemberCardProps = {
  photo: PhotoAttributes;
  name: string;
  role: string;
  bio: string;
  contacts: ContactAttributes[];
};

export default function TeamMemberCard({
  photo,
  name,
  role,
  bio,
  contacts,
}: TeamMemberCardProps) {
  return (
    <article className="rounded-xl border border-black px-[2rem] py-[3rem]">
      <div className="mx-auto mb-[1rem] h-[6rem] w-[6rem] overflow-hidden rounded-full">
        <Photo
          className="object-top"
          src={photo.src}
          alt={photo.alt}
          width={300}
          height={300}
        />
      </div>

      <div className="space-y-[1rem]">
        <div className="text-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="mb-[0.5rem] font-medium">{role}</p>
          <Paragraph>{bio}</Paragraph>
        </div>

        <ul className="flex justify-center gap-[1rem]">
          {contacts.map((contact, index) => (
            <li className="h-[1.1rem] w-[1.1rem]" key={index}>
              <Link
                href={
                  contact.icon === "phone"
                    ? `tel:${contact.link}`
                    : `mailto:${contact.link}`
                }
              >
                {contact.icon === "phone" ? <Phone /> : <Mail />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

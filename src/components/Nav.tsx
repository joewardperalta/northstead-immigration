import * as React from "react";
import Link from "next/link";

type NavItem = {
  url: string;
  name: string;
};

type NavProps = {
  items: NavItem[];
};

export default function Nav({ items }: NavProps) {
  return (
    <nav>
      <ul className="flex flex-col gap-5 lg:flex-row">
        {items.map((item, index) => (
          <li
            key={index}
            className="hover:text-primary text-base font-medium text-black transition-all duration-300"
          >
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

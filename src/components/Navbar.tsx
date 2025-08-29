"use client";
import Image from "next/image";
import Link from "next/link";
import PrimaryCallToActionButton from "./buttons/PrimaryCallToActionButton";
import { useState } from "react";

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className="bg-secondary w-full">
      <div className="relative z-30 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-3 sm:px-12 sm:py-4 md:px-[4.5rem] md:py-5">
        {/* Logo */}
        <Link href="/">
          <Image
            className="w-32 sm:w-40 md:w-48"
            src="/logo.png"
            alt="A blue colored text written as Northstead Immigration."
            width={160}
            height={160}
          />
        </Link>

        {/* Hamburger button */}
        <button
          className="relative h-3 w-6 lg:hidden"
          onClick={() => setIsToggle(!isToggle)}
        >
          <div
            className={`absolute left-1/2 h-[2px] w-full -translate-x-1/2 rounded-full bg-black transition-all duration-300 ${
              isToggle ? "bottom-1/2 rotate-45" : "bottom-full translate-y-full"
            }`}
          ></div>
          <div
            className={`absolute left-1/2 h-[2px] w-full -translate-x-1/2 translate-y-1/2 rounded-full bg-black ${
              isToggle ? "max-h-0" : "bottom-1/2 max-h-[2px]"
            }`}
          ></div>
          <div
            className={`absolute left-1/2 h-[2px] w-full -translate-x-1/2 rounded-full bg-black transition-all duration-300 ${
              isToggle ? "bottom-1/2 -rotate-45" : "bottom-0"
            }`}
          ></div>
        </button>

        {/* Main navigation */}
        <div
          className={`bg-secondary absolute top-full left-0 max-h-0 w-full overflow-hidden transition-all duration-300 lg:relative lg:max-h-96 ${
            isToggle ? "max-h-96" : ""
          }`}
        >
          <div className="px-3 py-6 lg:flex lg:items-center lg:justify-end lg:gap-8 lg:p-0">
            {/* Navigation links */}
            <nav className="mb-6 lg:mb-0">
              <ul className="space-y-6 lg:flex lg:items-center lg:gap-8 lg:space-y-0">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="hover:text-primary text-base font-medium text-black transition-all duration-300"
                  >
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA button */}
            <PrimaryCallToActionButton navigateTo="/booking">
              Book a consultation
            </PrimaryCallToActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}

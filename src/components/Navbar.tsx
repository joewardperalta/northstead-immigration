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
    <div className="w-full bg-secondary">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="relative flex items-center justify-between w-full px-3 py-6 lg:px-20">
          {/* Logo */}
          <Link href="/">
            <Image
              className="w-36 lg:w-48"
              src="/logo.png"
              alt="A blue colored text written as Northstead Immigration."
              width={160}
              height={160}
            />
          </Link>

          {/* Hamburger button */}
          <button
            className="w-6 h-3 relative lg:hidden"
            onClick={() => setIsToggle(!isToggle)}
          >
            <div
              className={`w-full h-[2px] bg-neutral-black rounded-full absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
                isToggle
                  ? "rotate-45 bottom-1/2"
                  : "bottom-full translate-y-full"
              }`}
            ></div>
            <div
              className={`w-full h-[2px] bg-neutral-black rounded-full absolute left-1/2 -translate-x-1/2 translate-y-1/2  ${
                isToggle
                  ? "max-h-0"
                  : "max-h-[2px] transition-all duration-300 bottom-1/2"
              }`}
            ></div>
            <div
              className={`w-full h-[2px] bg-neutral-black rounded-full absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
                isToggle ? "-rotate-45 bottom-1/2" : "bottom-0"
              }`}
            ></div>
          </button>

          {/* Main navigation */}
          <div
            className={`w-full bg-secondary absolute left-0 top-full max-h-0 overflow-hidden transition-all duration-300 lg:relative lg:max-h-96 ${
              isToggle ? "max-h-96" : ""
            }`}
          >
            <div className="px-3 py-6 lg:flex lg:items-center lg:justify-end lg:gap-8 lg:p-0">
              {/* Navigation links */}
              <nav className="mb-6 lg:mb-0">
                <ul className="space-y-6 lg:space-y-0 lg:flex lg:items-center lg:gap-8">
                  {navLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-base font-medium text-neutral-black hover:text-primary transition-all duration-300"
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
    </div>
  );
}

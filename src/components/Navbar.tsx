"use client";
import PrimaryCallToActionButton from "./buttons/PrimaryCallToActionButton";
import Wrapper from "./Wrapper";
import Logo from "./Logo";
import HamburgerButton from "./buttons/HamburgerButton";
import Nav from "./Nav";
import { useState } from "react";

const navItems = [
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

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  function handleOnToggleMenu() {
    setIsToggle(!isToggle);
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-white py-5">
      <div>
        <Wrapper className="flex flex-col items-center justify-between lg:flex-row lg:items-center">
          <div className="mb-[3rem] flex w-full justify-between lg:mb-0 lg:w-fit">
            <Logo className="w-[9rem] md:min-w-[9rem] lg:min-w-[10rem]" />
            <HamburgerButton onToggleMenu={handleOnToggleMenu} />
          </div>

          <div
            className={`w-full space-y-[2rem] space-x-7 overflow-hidden transition-all lg:flex lg:max-h-[50rem] lg:items-center lg:justify-end lg:space-y-0 ${isToggle ? "max-h-[50rem]" : "max-h-0"}`}
          >
            <Nav items={navItems} />
            <PrimaryCallToActionButton navigateTo="/booking">
              Book a consultation
            </PrimaryCallToActionButton>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

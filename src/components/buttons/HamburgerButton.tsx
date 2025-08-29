import * as React from "react";

type HamburgerButtonProps = {
  onToggleMenu?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function HamburgerButton({
  onToggleMenu,
}: HamburgerButtonProps) {
  return (
    <button className="space-y-1 lg:hidden" onClick={onToggleMenu}>
      <div className="h-[0.18rem] w-[1.5rem] rounded-full bg-black"></div>
      <div className="h-[0.18rem] w-[1.5rem] rounded-full bg-black"></div>
      <div className="h-[0.18rem] w-[1.5rem] rounded-full bg-black"></div>
    </button>
  );
}

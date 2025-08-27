import * as React from "react";

type UpRightArrowProps = {
  className?: string;
};

export default function UpRightArrow({ className }: UpRightArrowProps) {
  return (
    <svg
      className={`w-full ${className}`}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_394_128)">
        <path
          d="M0 8.94141L7.44455 1.49695H2.58361V0H10V7.41639H8.50305V2.55547L1.05859 10L0 8.94141Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_394_128">
          <rect width="10" height="10" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

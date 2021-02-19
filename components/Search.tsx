import * as React from "react";

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <mask id="search_svg__a">
        <path fill="#fff" d="M-16-16h64v64h-64z" />
        <circle cx={16} cy={16} r={8} fill="#000" />
      </mask>
      <g transform="rotate(-45 12.586 17.414)">
        <path
          mask="url(#search_svg__a)"
          strokeLinecap="round"
          d="M15 16h2v16h-2z"
        />
        <circle cx={16} cy={16} r={8} />
        <circle cx={16} cy={16} r={6} />
      </g>
    </svg>
  );
}

export default SvgSearch;

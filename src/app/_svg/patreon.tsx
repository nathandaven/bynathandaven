import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

const Patreon: FunctionComponent<PropsWithChildren> = ({ children, className }) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="2"
    className={classNames("stroke-dark-primary stroke-2 dark:stroke-light-primary", className)}
  >
    <title>Patreon</title>;
    <g transform="matrix(.47407 0 0 .47407 .383 .422)">
      <clipPath id="prefix__a">
        <path d="M0 0h1080v1080H0z" />
      </clipPath>
      <g clip-path="url(#prefix__a)">
        <path
          d="M1033.05 324.45c-.19-137.9-107.59-250.92-233.6-291.7-156.48-50.64-362.86-43.3-512.28 27.2-181.1 85.46-237.99 272.66-240.11 459.36-1.74 153.5 13.58 557.79 241.62 560.67 169.44 2.15 194.67-216.18 273.07-321.33 55.78-74.81 127.6-95.94 216.01-117.82 151.95-37.61 255.51-157.53 255.29-316.38z"
          fill-rule="nonzero"
        />
      </g>
    </g>
  </svg>
);
export default Patreon;

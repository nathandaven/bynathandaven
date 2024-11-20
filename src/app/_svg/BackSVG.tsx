import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

export const BackSVG: FunctionComponent<PropsWithChildren> = ({ children, className }) => (
  <svg width="76" height="76" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="38" cy="38" r="37.5" />
    <path
      d="M54.0782 37.5901H22.0645M22.0645 37.5901L38.2014 21.4531M22.0645 37.5901L38.722 54.2476"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default BackSVG;

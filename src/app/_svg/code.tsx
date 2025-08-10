import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

const Code: FunctionComponent<PropsWithChildren> = ({ children, className }) => (
  <svg
    className={classNames("stroke-light-primary stroke-2", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <title>Code</title>
    <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" />
  </svg>
);
export default Code;

import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

const Flickr: FunctionComponent<PropsWithChildren> = ({ children, className }) => (
  <svg role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={classNames("", className)}>
    <title>Flickr</title>
    <path d="M242.549,256c0,66.844-54.182,121.026-121.025,121.026C54.682,377.025,0.5,322.844,0.5,256 c0-66.843,54.182-121.024,121.024-121.024C188.368,134.975,242.549,189.157,242.549,256z M390.475,134.975 c-66.843,0-121.024,54.182-121.024,121.024c0,66.844,54.182,121.026,121.024,121.026c66.844,0,121.025-54.182,121.025-121.026 C511.5,189.157,457.318,134.975,390.475,134.975z" />
  </svg>
);
export default Flickr;

import classNames from "classnames";
import Link from "next/link";
import React, { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  mobile?: boolean;
  invert?: boolean;
};

// exporting component with OPTIONAL children
export const FooterMenu: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  mobile = false,
  invert = false,
}) => {
  const defaultTheme =
    "text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary";
  const invertTheme = "text-light-primary hover:bg-light-primary hover:text-dark-primary";

  return (
    <div
      className={classNames(
        className,
        "text-md flex h-fit justify-between py-6 xs:text-lg sm:flex-row sm:text-lg dark:text-gray-300" +
          (mobile ? "" : ""),
      )}
    >
      <div className="flex flex-col justify-start gap-x-5 text-left sm:flex-row">
        <div className="w-fit text-nowrap">
          <h3 className="hidden pb-2 text-lg font-bold sm:block">Links</h3>
          <ul className="align-left leading-1 w-full max-w-[35rem] flex-wrap justify-start gap-x-2 pr-10 text-start sm:flex sm:flex-col dark:text-gray-300">
            <li className={classNames("w-fit", invert ? invertTheme : defaultTheme)}>
              <Link href="/archive">archive</Link>
            </li>
            <li className={classNames("w-fit", invert ? invertTheme : defaultTheme)}>
              <Link href="/tags">tags</Link>
            </li>
            <li className={classNames("w-fit", invert ? invertTheme : defaultTheme)}>
              <Link prefetch={false} href="/rss">
                rss
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-fit">
          <h3 className="hidden w-fit text-nowrap pb-2 text-lg font-bold sm:block">Socials</h3>
          <ul className="col-auto justify-start gap-x-10 text-left md:columns-3">
            <li className="mt-2 w-fit hover:bg-dark-primary hover:text-light-primary sm:mt-0 dark:hover:bg-light-primary dark:hover:text-dark-primary">
              <a target="_blank" href="https://instagram.com/bynathandaven">
                instagram
              </a>
            </li>
            <li className={classNames("w-fit", invert ? invertTheme : defaultTheme)}>
              <a target="_blank" href="https://youtube.com/@nathandaven">
                youtube
              </a>
            </li>
            <li className={classNames("w-fit", invert ? invertTheme : defaultTheme)}>
              <a target="_blank" href="https://twitter.com/nathandaven">
                twitter
              </a>
            </li>
            <li className={classNames("w-fit", invert ? invertTheme : defaultTheme)}>
              <a target="_blank" href="https://linkedin.com/in/nathandaven">
                linkedin
              </a>
            </li>
            <li className={classNames("w-fit", invert ? invertTheme : defaultTheme)}>
              <a target="_blank" href="https://tiktok.com/@nathandaven">
                tiktok
              </a>
            </li>
            <li className={classNames("w-fit", invert ? invertTheme : defaultTheme)}>
              <a target="_blank" href="https://github.com/nathandaven">
                github
              </a>
            </li>
            <li className={classNames("w-fit", invert ? invertTheme : defaultTheme)}>
              <a target="_blank" href="https://nathandaven.substack.com/">
                substack
              </a>
            </li>
            <li className={classNames("w-fit", invert ? invertTheme : defaultTheme)}>
              <a target="_blank" href="mailto:nathan@nathandaven.com">
                email
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="w-96 text-center">Made with love by Nathan Davenport</div> */}
      {/* <div className="text-center"></div> */}
      <div className="leading-1 flex max-w-96 flex-col justify-end text-right sm:flex-none">
        © {new Date().getFullYear()} Nathan Davenport
      </div>
    </div>
  );
};

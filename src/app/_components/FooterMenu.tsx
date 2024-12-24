import classNames from "classnames";
import Link from "next/link";
import React, { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  mobile?: boolean;
};

// exporting component with OPTIONAL children
export const FooterMenu: FunctionComponent<PropsWithChildren> = ({ children, className, mobile = false }) => {
  return (
    <footer
      className={classNames(
        className,
        "text-md mt-0 flex justify-between py-6 pt-3 xs:text-lg md:mb-3 md:flex-row md:py-0 md:text-xs dark:text-gray-300" +
          (mobile ? "" : ""),
      )}
    >
      <div className="justify-start text-left">
        <ul className="align-left leading-1 flex w-full max-w-[40rem] flex-col flex-wrap justify-start gap-x-1 pr-10 text-start md:flex-row lg:gap-x-2 dark:text-gray-300">
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <Link href="/archive">archive</Link>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <Link href="/tags">tags</Link>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <Link prefetch={false} href="/rss">
              rss
            </Link>
          </li>
          <li className="hidden cursor-default md:block">-</li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" href="https://youtube.com/@nathandaven">
              youtube
            </a>
          </li>
          <li className="mt-2 w-fit hover:bg-dark-primary hover:text-light-primary md:mt-0 dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" href="https://instagram.com/bynathandaven">
              instagram
            </a>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" href="https://bsky.app/profile/nathandaven.com">
              bluesky
            </a>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" rel="me" href="https://urbanists.social/@nathandaven">
              mastodon
            </a>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" href="https://threads.net/bynathandaven">
              threads
            </a>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" href="https://twitter.com/nathandaven">
              twitter
            </a>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" href="https://linkedin.com/in/nathandaven">
              linkedin
            </a>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" href="https://tiktok.com/@nathandaven">
              tiktok
            </a>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" href="https://github.com/nathandaven">
              github
            </a>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" href="https://nathandaven.substack.com/">
              substack
            </a>
          </li>
          <li className="w-fit hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
            <a target="_blank" href="mailto:nathan@nathandaven.com">
              email
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="w-96 text-center">Made with love by Nathan Davenport</div> */}
      {/* <div className="text-center"></div> */}
      <div className="leading-1 flex max-w-96 flex-col justify-end text-right md:h-fit md:flex-none">
        © {new Date().getFullYear()} Nathan Davenport
      </div>
    </footer>
  );
};

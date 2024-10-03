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
        "text-md mt-0 flex justify-between py-6 pt-3 xs:text-lg sm:mb-3 sm:flex-row sm:text-xs md:py-0 dark:text-gray-300" +
          (mobile ? "" : ""),
      )}
    >
      <div className="justify-start text-left">
        <ul className="align-left leading-1 flex w-full max-w-[35rem] flex-col flex-wrap justify-start gap-x-2 pr-10 text-start sm:flex-row dark:text-gray-300">
          <li className="text-gray-700 transition-colors duration-75 hover:text-dark-primary dark:text-gray-300 dark:hover:text-light-primary">
            <Link href="/archive">archive</Link>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-dark-primary dark:text-gray-300 dark:hover:text-light-primary">
            <Link href="/tags">tags</Link>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-dark-primary dark:text-gray-300 dark:hover:text-light-primary">
            <Link href="/rss.xml">rss</Link>
          </li>
          <li className="hidden cursor-default text-gray-700 transition-colors duration-75 hover:text-dark-primary sm:block dark:text-gray-300 dark:hover:text-light-primary">
            -
          </li>
          <li className="pt-2 text-gray-700 transition-colors duration-75 hover:text-dark-primary sm:pt-0 dark:text-gray-300 dark:hover:text-light-primary">
            <a target="_blank" href="https://instagram.com/nathandaven">
              instagram
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-dark-primary dark:text-gray-300 dark:hover:text-light-primary">
            <a target="_blank" href="https://youtube.com/@nathandaven">
              youtube
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-dark-primary dark:text-gray-300 dark:hover:text-light-primary">
            <a target="_blank" href="https://twitter.com/nathandaven">
              twitter
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-dark-primary dark:text-gray-300 dark:hover:text-light-primary">
            <a target="_blank" href="https://linkedin.com/in/nathandaven">
              linkedin
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-dark-primary dark:text-gray-300 dark:hover:text-light-primary">
            <a target="_blank" href="https://tiktok.com/@nathandaven">
              tiktok
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-dark-primary dark:text-gray-300 dark:hover:text-light-primary">
            <a target="_blank" href="https://github.com/nathandaven">
              github
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-dark-primary dark:text-gray-300 dark:hover:text-light-primary">
            <a target="_blank" href="https://nathandaven.substack.com/">
              substack
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-dark-primary dark:text-gray-300 dark:hover:text-light-primary">
            <a target="_blank" href="mailto:nathan@nathandaven.com">
              email
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="w-96 text-center">Made with love by Nathan Davenport</div> */}
      {/* <div className="text-center"></div> */}
      <div className="leading-1 flex max-w-96 cursor-default flex-col justify-end text-right text-gray-700 sm:h-fit sm:flex-none dark:text-gray-300">
        © {new Date().getFullYear()} Nathan Davenport
      </div>
    </footer>
  );
};

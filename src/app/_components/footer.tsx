import classNames from "classnames";
import Link from "next/link";
import React, { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

// exporting component with OPTIONAL children
export const Footer: FunctionComponent<PropsWithChildren> = ({ children, className }) => {
  return (
    <footer
      className={classNames(
        className,
        "mt-0 flex justify-between py-6 pt-3 text-lg sm:mb-3 sm:flex-row sm:text-xs md:py-0 dark:text-gray-300",
      )}
    >
      <div className="justify-start text-left">
        <ul className="align-left leading-1 flex w-full max-w-[30rem] flex-col flex-wrap justify-start gap-x-2 pr-10 text-start sm:flex-row dark:text-gray-300">
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <Link href="/archive">archive</Link>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <Link href="/tags">tags</Link>
          </li>
          <li className="hidden cursor-default text-gray-700 transition-colors duration-75 hover:text-black sm:block dark:text-gray-300 dark:hover:text-white">
            -
          </li>
          <li className="pt-2 text-gray-700 transition-colors duration-75 hover:text-black sm:pt-0 dark:text-gray-300 dark:hover:text-white">
            <a target="_blank" href="https://instagram.com/nathandaven">
              instagram
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a target="_blank" href="https://youtube.com/@nathandaven">
              youtube
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a target="_blank" href="https://twitter.com/nathandaven">
              twitter
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a target="_blank" href="https://linkedin.com/in/nathandaven">
              linkedin
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a target="_blank" href="https://tiktok.com/@nathandaven">
              tiktok
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a target="_blank" href="https://github.com/nathandaven">
              github
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a target="_blank" href="https://nathandaven.substack.com/">
              substack
            </a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a target="_blank" href="mailto:nathan@nathandaven.com">
              email
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="w-96 text-center">Made with love by Nathan Davenport</div> */}
      {/* <div className="text-center"></div> */}
      <div className="leading-1 flex max-w-96 cursor-default flex-col justify-end text-right text-gray-700 sm:h-fit sm:flex-none dark:text-gray-300">
        © 2024 Nathan Davenport
      </div>
    </footer>
  );
};

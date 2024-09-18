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
      className={classNames(className, "mb-5 mt-0 flex flex-row justify-between pt-0 text-xs dark:text-gray-300")}
    >
      <div className="justify-start text-left">
        <ul className="align-left leading-1 flex w-full max-w-[30rem] flex-wrap justify-start gap-x-2 pr-10 text-start dark:text-gray-300">
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <Link href="/archive">archive</Link>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <Link href="/tags">tags</Link>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            -
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a href="https://instagram.com/nathandaven">instagram</a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a href="https://youtube.com/@nathandaven">youtube</a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a href="https://twitter.com/nathandaven">twitter</a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a href="https://linkedin.com/in/nathandaven">linkedin</a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a href="https://tiktok.com/@nathandaven">tiktok</a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a href="https://github.com/nathandaven">github</a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a href="https://nathandaven.substack.com/">substack</a>
          </li>
          <li className="text-gray-700 transition-colors duration-75 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <a href="mailto:nathan@nathandaven.com">email</a>
          </li>
        </ul>
      </div>
      {/* <div className="w-96 text-center">Made with love by Nathan Davenport</div> */}
      {/* <div className="text-center"></div> */}
      <div className="leading-1 max-w-96 cursor-default justify-end text-right text-gray-700 dark:text-gray-300">
        <span>© 2024 Nathan Davenport</span>
      </div>
    </footer>
  );
};

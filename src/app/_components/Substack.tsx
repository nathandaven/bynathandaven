import classNames from "classnames";
import React, { FunctionComponent, ReactNode, Suspense } from "react";
import SubstackCustom from "@/app/_components/SubstackCustom";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  text?: string;
};

// exporting component with OPTIONAL children
export const Substack: FunctionComponent<PropsWithChildren> = ({ className, text }) => {
  return (
    <div className={classNames("b my-5 flex w-full justify-center gap-8", className)}>
      <div>
        <h3 className="align text-center">{text ?? "For more, consider subscribing to my newsletter via Substack:"}</h3>
        <div className="flex justify-center">
          <Suspense fallback={<p>Loading Substack...</p>}>
            <SubstackCustom className="h-fit max-w-96 border border-dark-primary shadow-2xl dark:shadow-none dark:invert" />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

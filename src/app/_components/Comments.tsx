"use client";
import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { ReactCusdis } from "react-cusdis";
import commentsStyles from "@/app/_components/Comments.module.css";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  appId: string;
  pageId: string;
  pageTitle: string;
  pageUrl: string;
};

// exporting component with OPTIONAL children
const Comments: FunctionComponent<PropsWithChildren> = ({ className, appId, pageId, pageTitle, pageUrl }) => {
  return (
    appId &&
    pageId &&
    pageTitle &&
    pageUrl && (
      <div id={pageId} className={"" + className}>
        <div className="">
          <h2>Comments</h2>
          <ReactCusdis
            style={commentsStyles}
            attrs={{
              host: "https://cusdis.com",
              appId: appId,
              pageId: pageId,
              pageTitle: pageTitle,
              pageUrl: pageUrl,
              theme: "auto",
            }}
          />
        </div>
      </div>
    )
  );
};

export default Comments;

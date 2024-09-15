"use client";
import { getAllPosts } from "@/lib/api";
import React, { FunctionComponent, ReactNode } from "react";
import { ReactCusdis } from "react-cusdis";
import commentsStyles from "./Comments.module.css";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  pageId: string;
  pageTitle: string;
  pageUrl: string;
};

// exporting component with OPTIONAL children
export const Comments: FunctionComponent<PropsWithChildren> = ({ className, pageId, pageTitle, pageUrl }) => {
  return (
    <div id={pageId} className={"" + className}>
      <h2>Comments</h2>
      <ReactCusdis
        style={commentsStyles}
        attrs={{
          host: "https://cusdis.com",
          appId: process.env.CUSDIS_APP_ID ?? "",
          pageId: pageId,
          pageTitle: pageTitle,
          pageUrl: pageUrl,
          theme: "auto",
        }}
      />
    </div>
  );
};

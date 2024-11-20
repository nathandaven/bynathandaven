import React, { FunctionComponent, ReactNode, useEffect } from "react";
import { FooterMenu } from "@/app/_components/FooterMenu";
import classNames from "classnames";
import { MobileMenu } from "@/app/_components/MobileMenu";
import { Post } from "@/interfaces/post";
import { Article } from "./Article";
import { Wrapper } from "./Wrapper";
import { Section } from "./Section";
import { Title } from "./Title";
import { notFound } from "next/navigation";
import { Theme, Themes } from "@/interfaces/themes";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  noWidth?: boolean;
  post?: Post;
  margin?: boolean;
};

// exporting component with OPTIONAL children
export const Container: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  fullWidth = true,
  noWidth = false,
  margin = true,
  post,
}) => {
  /* if (!post) {
    return notFound();
  } */

  const type = post
    ? post.fmContentType && post.fmContentType.length > 0
      ? post.fmContentType?.charAt(0).toUpperCase() + post?.fmContentType.slice(1)
      : "Home"
    : "Home";

  const theme = Themes.get(post?.theme ?? "default") as Theme;
  console.log(theme);
  return (
    <div className={classNames(theme.bg, theme.invertLightText ? "text-light-primary" : "", className)}>
      <MobileMenu
        className={classNames(theme.nav)}
        title={type}
        invert={theme.invertLightText}
        invertBorder={theme.invertBorder}
      />

      {post && (
        <Section className={classNames(theme.header, "pb-10 pt-5")} fullWidth={fullWidth}>
          <Title
            invert={theme.invertLightText}
            className={classNames(theme.invertLightText ? "text-light-primary" : "text-dark-primary")}
            post={post}
            fullWidth={fullWidth}
          />
        </Section>
      )}
      <Section fullWidth={false} noWidth={noWidth}>
        <Wrapper
          border={false}
          className="bg-light-primary dark:bg-dark-primary"
          margin={margin}
          albumMargin={post?.fmContentType == "album" ? true : false}
        >
          {children}
        </Wrapper>
      </Section>
      <Section className={classNames(theme.footer)} border={false}>
        <FooterMenu className="h-36" invert={theme.invertLightText} />
      </Section>
    </div>
  );
};

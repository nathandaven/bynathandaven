import classNames from "classnames";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return <div style={markdownStyles} dangerouslySetInnerHTML={{ __html: content }} />;
}

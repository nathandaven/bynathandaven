import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { Article } from "../_components/Article";
import { Container } from "../_components/Container";

// exporting component with OPTIONAL children
export default function PageTemplate() {
  return (
    <main>
      <Container title={"Newsletter"} fullWidth={false} className={"min-h-[95vh]"}>
        <Article /* metadata={post} */></Article>
      </Container>
    </main>
  );
}

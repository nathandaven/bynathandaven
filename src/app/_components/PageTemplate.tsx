import React, { FunctionComponent, ReactNode } from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";

// exporting component with OPTIONAL children
export default function PageTemplate() {
  return (
    <main>
      <Container title={"Newsletter"} fullWidth={false} className={""}>
        <Article /* metadata={post} */></Article>
      </Container>
    </main>
  );
}

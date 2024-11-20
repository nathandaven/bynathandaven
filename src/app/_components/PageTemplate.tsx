import React, { FunctionComponent, ReactNode } from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { Wrapper } from "./Wrapper";

// exporting component with OPTIONAL children
export default function PageTemplate() {
  return (
    <main>
      <Container title={"Newsletter"} fullWidth={false} className={""}>
        <Wrapper>
          <Article /* metadata={post} */></Article>
        </Wrapper>
      </Container>
    </main>
  );
}

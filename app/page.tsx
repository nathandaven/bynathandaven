import AllArticles from "components/AllArticles";
import { Meta } from "components/Meta";
import { Wrapper } from "components/Wrapper";

export default async function Page() {
  return (
    <Wrapper>

<Meta />
      <AllArticles />
    </Wrapper>
  );
}

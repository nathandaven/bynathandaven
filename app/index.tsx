import { GoogleAnalytics } from "@next/third-parties/google";
import { Meta } from "../components/Meta";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Home from "/articles/landing.mdx";
import "@fontsource/inter";
import { Wrapper } from "../components/Wrapper";

export default function Landing() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}

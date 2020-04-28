import React from "react";
import FullscreenBG from "../atoms/FullscreenBG";
import Logo from "../molecules/Logo";
import LogoSrc from "./../../images/logo.svg";
import bgSrc from "./../../images/topBackgroundIndex.jpg";

const Index = (props) => {
  return (
    <main>
      <Logo src={LogoSrc} />
      <FullscreenBG src={bgSrc} />
    </main>
  );
};

export default Index;

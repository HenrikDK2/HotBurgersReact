import React from "react";
import FullscreenBG from "../FullscreenBG";
import bgImage from "../../images/topBackgroundIndex.jpg";
import LogoSvg from "../../images/Logo.svg";
import Logo from "../Logo";

const Index = (props) => {
  return (
    <main>
      <Logo src={LogoSvg} />
      <FullscreenBG src={bgImage} />
    </main>
  );
};

export default Index;

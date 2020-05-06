import React from "react";
import { css, keyframes } from "emotion";
import { useTheme } from "emotion-theming";
import FullscreenBG from "../atoms/FullscreenBG";
import design from "../../images/design.png";
import Button from "../atoms/frontPageButton";
import bgSrc from "./../../images/topBackgroundIndex.jpg";
import H2 from "../atoms/H2";
import scrollDown from "../../images/scrollDown.svg";
import ImageContainer from "../molecules/ImageContainer";

const IndexFullBgSection = (props) => {
  const theme = useTheme();
  const fade = keyframes`
  to{
    will-change: opacity;
    opacity: 0;
    transform: translate(-50%, 20px);
  }
`;
  const divStyle = css`
    position: absolute;
    margin: 0;
    padding: 0;
    top: 345px;
    left: 172px;
  `;

  const h4Style = css`
    font-size: 1.875rem;
    color: ${theme.colors.bgText};
    max-width: 380px;
    top: 55%;
    left: 35%;
    font-family: "Montserrat";
    font-weight: bold;
    font-style: normal;
    margin: 0;
    transform: translate(-50%, -50%);
    position: absolute;
  `;

  const divBgStyle = css`
    background: url(${design});
    height: 172px;
    width: 783px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
  `;

  const scrollDownStyle = css`
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 63px;
    opacity: 1;
    ${2 ? "" : `animation:  ${fade} 1s ease;`}
  `;

  return (
    <FullscreenBG src={bgSrc}>
      <ImageContainer
        src={scrollDown}
        className={scrollDownStyle}
        alt="You are able to scroll down, this is an indicator."
      />
      <div className={divStyle}>
        <H2>Party Time!</H2>
        <div className={divBgStyle}>
          <h4 className={h4Style}>
            Create your burger and get 1.5L Pepsi Free
          </h4>
        </div>
        <Button value="Create Now" href="/createBurger" />
      </div>
    </FullscreenBG>
  );
};

export default IndexFullBgSection;

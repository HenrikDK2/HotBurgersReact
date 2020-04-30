import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";
import FullscreenBG from "../atoms/FullscreenBG";
import design from "../../images/design.png";
import Button from "../atoms/frontPageButton";
import bgSrc from "./../../images/topBackgroundIndex.jpg";

const Index = (props) => {
  const theme = useTheme();
  const divStyle = css`
    position: absolute;
    margin: 0;
    padding: 0;
    top: 345px;
    left: 172px;
  `;

  const h2Style = css`
    color: ${theme.colors.bgText};
    font-family: "Avengeance";
    font-size: 6rem;
    margin: 0 0 0 50px;
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

  return (
    <main>
      <FullscreenBG src={bgSrc}>
        <div className={divStyle}>
          <h2 className={h2Style}>Party Time!</h2>
          <div className={divBgStyle}>
            <h4 className={h4Style}>
              Create your burger and get 1.5L Pepsi Free
            </h4>
          </div>
          <Button value="Create Now" href="/createBurger" />
        </div>
      </FullscreenBG>
    </main>
  );
};

export default Index;

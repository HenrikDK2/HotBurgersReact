import React from "react";
import { css } from "emotion";

const fullscreenBG = (props) => {
  const backgroundStyle = css`
    background: url(${props.src});
    height: 100vh;
    box-sizing: border-box;
    width: 100vw;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    ${props.className}
  `;
  return <section className={backgroundStyle}>{props.children}</section>;
};

export default fullscreenBG;

import React from "react";
import { css } from "emotion";

const fullscreenBG = (props) => {
  const backgroundStyle = css`
    background: url(${props.src});
    height: 100vh;
    width: 100vw;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  return <div className={backgroundStyle}></div>;
};

export default fullscreenBG;

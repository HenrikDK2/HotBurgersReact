import React from "react";
import { Global, css } from "@emotion/core";

//Fonts
import MontserratRegular from "./fonts/Montserrat-Regular.ttf";
import MontserratLight from "./fonts/Montserrat-Light.ttf";

const globalStyle = css`
  @font-face {
    font-family: "Montserrat";
    src: url(${MontserratRegular}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: url(${MontserratLight}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
`;

const Fonts = () => <Global styles={globalStyle} />;

export default Fonts;
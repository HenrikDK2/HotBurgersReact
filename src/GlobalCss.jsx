import React from "react";
import { Global, css } from "@emotion/core";

const globalStyle = css`
  * {
    user-select: none;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = () => <Global styles={globalStyle} />;

export default GlobalStyle;

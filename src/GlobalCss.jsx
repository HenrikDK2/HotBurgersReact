import React from "react";
import { Global, css, keyframes } from "@emotion/core";
import { useTheme } from "emotion-theming";
import Avengeance from "./fonts/Avengeance.ttf";

const GlobalStyle = () => {
  const theme = useTheme();
  const fade = keyframes`
  to{
    opacity: 0;
    transform: translate(-50%, 20px);
  }
`;
  const globalStyle = css`
    * {
      user-select: none;
      box-sizing: border-box;
    }
    @font-face {
      font-family: "Avengeance";
      src: url(${Avengeance}) format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    html {
      overflow-x: hidden;
    }

    body {
      margin: 0;
      padding: 0;
      background: ${theme.colors.primary};
    }
  `;

  return <Global styles={globalStyle} />;
};

export default GlobalStyle;

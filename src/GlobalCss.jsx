import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

const GlobalStyle = () => {
  const theme = useTheme();
  const globalStyle = css`
    * {
      user-select: none;
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

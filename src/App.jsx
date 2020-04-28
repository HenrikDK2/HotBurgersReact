import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "emotion-theming";
import { defaultTheme } from "./Theme";
import { Global, css } from "@emotion/core";

//Render
import Header from "./Header";

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

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global styles={globalStyle} />
      <Header />
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("root"));

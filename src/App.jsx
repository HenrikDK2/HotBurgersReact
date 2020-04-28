import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "emotion-theming";
import { defaultTheme } from "./Theme";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "./components/Pages/Index";

//Render
import Header from "./components/Header";

//Global
import GlobalCss from "./GlobalCss";
import Fonts from "./Fonts";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalCss />
        <Fonts />
        <Header />
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/Menu"></Route>
        <Route exact path="/Gallery"></Route>
        <Route exact path="/Testiminials"></Route>
        <Route exact path="/Contact Us"></Route>
      </ThemeProvider>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));

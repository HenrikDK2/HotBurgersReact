import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "emotion-theming";
import { defaultTheme } from "./Theme";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "./components/Pages/Index";
import CreateBurger from "./components/Pages/CreateBurger";

//Render
import Header from "./components/organisms/Header";

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
        <Route exact path="/CreateBurger">
          <CreateBurger />
        </Route>
        <Route exact path="/Gallery"></Route>
        <Route exact path="/Testiminials"></Route>
        <Route exact path="/Contact Us"></Route>
      </ThemeProvider>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import { render } from "react-dom";
import { ThemeProvider } from "emotion-theming";
import { defaultTheme } from "./Theme";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "./components/Pages/Index";
import CreateBurger from "./components/Pages/CreateBurger";
import beefPatty from "./images/beefPatty.png";
import cheese from "./images/cheese2.png";
import lettuce from "./images/lettuce2.png";
import Footer from "./components/organisms/Footer";

//Render
import Header from "./components/organisms/Header";

//Global
import GlobalCss from "./GlobalCss";
import { burgerDataContext, burgerContext, priceContext } from "./contexts/burgerContext";

const App = () => {
  const burgerData = useState([
    {
      title: "Beef Patty",
      price: 0.68,
      src: beefPatty,
      alt: "tasty beef patty",
    },
    {
      title: "Lettuce",
      price: 0.1,
      src: lettuce,
      alt: "Fresh lettuce",
    },
    {
      title: "Cheese",
      price: 0.2,
      src: cheese,
      alt: "Perfect cheese for your beef, just delicious.",
    },
  ]);
  const burger = useState([burgerData[0][0]]);
  const price = useState(2);

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalCss />
        <Header />
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/CreateBurger">
          <burgerDataContext.Provider value={burgerData}>
            <burgerContext.Provider value={burger}>
              <priceContext.Provider value={price}>
                <CreateBurger />
              </priceContext.Provider>
            </burgerContext.Provider>
          </burgerDataContext.Provider>
        </Route>
        <Route exact path="/Gallery"></Route>
        <Route exact path="/Testiminials"></Route>
        <Route exact path="/Contact Us"></Route>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));

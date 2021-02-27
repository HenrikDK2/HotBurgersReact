import React, { useEffect, useContext } from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";
import addSvg from "../../images/add.svg";
import removeSvg from "../../images/remove.svg";
import topBun from "../../images/topBun.png";
import bottomBun from "../../images/bottomBun.png";
import List from "../atoms/List";
import ImageContainer from "../molecules/ImageContainer";
import Foedevarer from "../molecules/Foedevarer";
import { burgerDataContext, burgerContext, priceContext } from "../../contexts/burgerContext";
const figureStyle = css`
  width: 100px;
  margin: 0 20px;
  cursor: pointer;
  height: 100px;
`;
const imgDiv = css`
  display: flex;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
`;

const burgerDelContainer = css`
  max-width: 500px;
  width: 50vw;
  margin: -5px 0;
  height: auto;
`;

const burgerCreator = css`
  justify-content: center;
`;

const burgerFoedevareList = css`
  flex-direction: column;
`;
const BurgerCreator = () => {
  const [burger, setBurger] = useContext(burgerContext);
  const [burgerData] = useContext(burgerDataContext);
  const [price, setPrice] = useContext(priceContext);
  const theme = useTheme();

  useEffect(() => {
    let basePrice = 2;
    let price = basePrice;

    burger.forEach((e) => {
      price += e.price;
    });
    setPrice(price.toFixed(2));
  });

  const h4Style = css`
    font-family: "Avengeance";
    text-align: center;
    font-size: 1.688rem;
    color: ${theme.colors["alt-red"]};
  `;

  return (
    <>
      <div className={imgDiv}>
        <ImageContainer
          className={figureStyle}
          src={addSvg}
          onClick={() => setBurger(burger.concat([burgerData[0]]))}
          alt="add more to your burger!"
        />
        <ImageContainer
          className={figureStyle}
          src={removeSvg}
          onClick={() => {
            let currentBurger = Array.from(burger);
            currentBurger.pop();
            setBurger(currentBurger);
          }}
          alt="add more to your burger!"
        />
      </div>

      <List className={burgerCreator}>
        <li>
          <ImageContainer className={burgerDelContainer} src={topBun} alt="Burger bun" />

          <List className={burgerFoedevareList}>
            {burger.map((e, index) => {
              return <Foedevarer src={e.src} index={index} alt={e.alt} key={e.title + index} />;
            })}
          </List>
          <ImageContainer className={burgerDelContainer} src={bottomBun} alt="Burger bun" />
        </li>
      </List>
      <h4 className={h4Style}>{price}$ incl. Shipping.</h4>
    </>
  );
};

export default BurgerCreator;

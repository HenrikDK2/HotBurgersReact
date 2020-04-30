import React, { useState } from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";
import addSvg from "../../images/add.svg";
import removeSvg from "../../images/remove.svg";
import arrow from "../../images/arrow.svg";
import topBun from "../../images/topBun.png";
import bottomBun from "../../images/bottomBun.png";
import beefPatty from "../../images/beefPatty.png";
import List from "../atoms/List";
import ImageContainer from "../molecules/ImageContainer";

const BurgerCreator = (props) => {
  const [price, setPrice] = useState(3);
  const theme = useTheme();
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
    width: 575px;
    margin: -5px 0;
    height: auto;
  `;

  const h4Style = css`
    font-family: "Avengeance";
    text-align: center;
    font-size: 1.688rem;
    color: ${theme.colors["alt-red"]};
  `;
  const arrowRight = css`
    padding: 0;
    margin: 0;
    width: 60px;
    top: 50%;
    right: -100px;
    position: absolute;
    transform: translateY(-50%);
    cursor: pointer;
  `;

  const arrowLeft = css`
    padding: 0;
    margin: 0;
    transform: translateY(-50%) rotate(180deg);
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: -100px;
    width: 60px;
  `;

  const burgerCreator = css`
    justify-content: center;
  `;

  const itemStyle = css`
    position: relative;
  `;
  return (
    <>
      <div className={imgDiv}>
        <ImageContainer
          className={figureStyle}
          src={addSvg}
          alt="add more to your burger!"
        />
        <ImageContainer
          className={figureStyle}
          src={removeSvg}
          alt="add more to your burger!"
        />
      </div>

      <List className={burgerCreator}>
        <li>
          <ImageContainer
            className={burgerDelContainer}
            src={topBun}
            alt="Burger bun"
          />

          <List>
            <li className={itemStyle}>
              <ImageContainer
                className={arrowLeft}
                src={arrow}
                alt="skift fødevare"
              />
              <ImageContainer
                className={burgerDelContainer}
                src={beefPatty}
                alt="Beef patty"
              />
              <ImageContainer
                className={arrowRight}
                src={arrow}
                alt="skift fødevare"
              />
            </li>
          </List>
          <ImageContainer
            className={burgerDelContainer}
            src={bottomBun}
            alt="Burger bun"
          />
        </li>
      </List>
      <h4 className={h4Style}>{price}$ incl. Shipping.</h4>
    </>
  );
};

export default BurgerCreator;

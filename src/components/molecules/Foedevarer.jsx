import React, { useContext, useCallback } from "react";
import { css } from "emotion";
import ImageContainer from "./ImageContainer";
import arrow from "../../images/arrow.svg";
import { burgerDataContext, burgerContext } from "../../contexts/burgerContext";
const itemStyle = css`
  position: relative;
`;

const arrowRight = css`
  padding: 0;
  margin: 0;
  width: 5vw;
  top: 50%;
  right: -100px;
  position: absolute;
  transform: translateY(-50%);
  cursor: pointer;
  max-width: 60px;
`;

const arrowLeft = css`
  padding: 0;
  margin: 0;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: -100px;
  width: 5vw;
  max-width: 60px;
`;

const burgerDelContainer = css`
  max-width: 500px;
  width: 50vw;
  margin: -5px 0;
  height: auto;
`;

const Foedevarer = (props) => {
  const [burger, setBurger] = useContext(burgerContext);
  const [burgerData] = useContext(burgerDataContext);

  const leftHandler = (e) => {
    let currentBurger = Array.from(burger);
    let index = burgerData.findIndex((burger) => burger.title == currentBurger[props.index].title);
    index--;
    if (index < 0) index = burgerData.length - 1;

    currentBurger[props.index] = burgerData[index];
    setBurger(currentBurger);
  };

  const rightHandler = (e) => {
    let currentBurger = Array.from(burger);
    let index = burgerData.findIndex((burger) => burger.title == currentBurger[props.index].title);
    index++;
    if (index > burgerData.length - 1) index = 0;

    currentBurger[props.index] = burgerData[index];
    setBurger(currentBurger);
  };

  return (
    <li className={itemStyle}>
      <ImageContainer
        className={arrowLeft}
        onClick={leftHandler}
        src={arrow}
        alt="skift fødevare"
      />
      <ImageContainer className={burgerDelContainer} src={props.src} alt={props.alt} />
      <ImageContainer
        className={arrowRight}
        onClick={rightHandler}
        src={arrow}
        alt="skift fødevare"
      />
    </li>
  );
};

export default Foedevarer;

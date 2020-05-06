import React from "react";
import { useTheme } from "emotion-theming";
import { css } from "emotion";
import ImageContainer from "../molecules/ImageContainer";
import H4 from "../atoms/H4";
import Paragraph from "../atoms/Paragraph";
import Fast from "./../../images/fast.svg";

const perkItem = () => {
  const theme = useTheme();
  const itemStyle = css`
    width: 326px;
    height: 316px;
    background: #fff;
    margin: 0 25px;
    box-sizing: border-box;
    padding: 20px 60px;
    -webkit-box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.07);
  `;

  const itemImage = css`
    width: 66px;
    margin: 10px auto 0 auto;
  `;

  const yellowBorder = css`
    &::after {
      content: "";
      height: 3px;
      width: 50px;
      background: ${theme.colors.primary};
      display: block;
      margin: 15px auto 0 auto;
    }
  `;

  return (
    <li className={itemStyle}>
      <ImageContainer className={itemImage} src={Fast} alt="Happy delivery" />
      <H4 className={yellowBorder}>Free shipping on first order</H4>
      <Paragraph>Sign up for updates and get free shipping</Paragraph>
    </li>
  );
};

export default perkItem;

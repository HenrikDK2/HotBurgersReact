import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";
import { NavLink } from "react-router-dom";
import arrow from "../../images/buttonRightArrow.svg";

const Button = (props) => {
  const theme = useTheme();
  const buttonStyle = css`
    background: ${theme.colors.primary};
    font-size: 1.688rem;
    border: none;
    box-sizing: border-box;
    border-radius: 90px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.38);
    display: flex;
    align-items: center;
    font-family: "Avengeance";
    margin: 53px 0 50px 50px;
    cursor: pointer;
    color: ${theme.colors["alt-red"]};
    transition: 150ms all;
    letter-spacing: 3px;
    ${props.className}

    &:hover {
      transform: scale(1.1);
    }

    & > a {
      text-decoration: none;
      padding: 20px 20px 20px 40px;

      color: ${theme.colors["alt-red"]};
    }

    & > img {
      padding: 0 1px 0 25px;
      box-sizing: border-box;
      width: 21.44px;
      height: auto;
      display: block;
    }
  `;
  return (
    <button className={buttonStyle}>
      <NavLink exact to={props.href}>
        {props.value} <img src={arrow} alt="Arrow" />
      </NavLink>
    </button>
  );
};

export default Button;

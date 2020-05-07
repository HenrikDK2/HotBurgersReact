import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";
import { NavLink } from "react-router-dom";

const linkItem = (props) => {
  const theme = useTheme();

  const linkStyle = css`
    text-decoration: none;
    font-family: "Montserrat";
    box-sizing: border-box;
    padding: 45px 30px;
    text-transform: capitalize;
    font-weight: 300;
    font-style: normal;
    color: ${theme.colors.bgText};
    ${props.className}
  `;

  const itemStyle = css`
    position: relative;

    font-size: 1rem;
  `;

  const linkActive = css`
    &::after {
      background-color: ${theme.colors.primary};
      width: 80%;
      height: 40px;
      content: "";
      position: absolute;
      transform: translateX(-50%);
      top: -50px;
      left: 50%;
    }
  `;

  return (
    <li className={itemStyle}>
      <NavLink
        activeClassName={linkActive}
        className={linkStyle}
        exact
        to={`${props.url}`}
      >
        {props.value}
      </NavLink>
    </li>
  );
};

export default linkItem;

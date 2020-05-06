import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";

const AltButton = (props) => {
  const theme = useTheme();
  const style = css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.invertText};
    border: none;
    font-family: "Montserrat";
    font-weight: 300;
    border-radius: 60px;
    padding: 10px 36px;
    font-size: 1rem;
    ${props.className}
  `;

  return <button className={style}>{props.children}</button>;
};

export default AltButton;

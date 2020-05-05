import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";

const H2 = (props) => {
  const theme = useTheme();
  const h2Style = css`
    color: ${theme.colors.bgText};
    font-family: "Avengeance";
    font-size: 6rem;
    margin: 0 0 0 50px;
    ${props.className}
  `;

  return <h2 className={h2Style}>{props.children}</h2>;
};

export default H2;

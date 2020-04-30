import React from "react";
import { css } from "emotion";

const Item = (props) => {
  const itemStyle = css`
    font-size: 1rem;
    ${props.className}
  `;
  return <li className={itemStyle}>{props.children}</li>;
};

export default Item;

import React from "react";
import { css } from "emotion";

const H4 = (props) => {
  const h4Style = css`
    font-size: 1.25rem;
    font-family: "Montserrat";
    font-weight: 500;
    text-align: center;
    letter-spacing: 1px;
    margin: 10px 0 15px 0;
    line-height: 30px;
    ${props.className}
  `;
  return <h4 className={h4Style}>{props.children}</h4>;
};

export default H4;

import React from "react";
import { css } from "emotion";

const Paragraph = (props) => {
  const pStyle = css`
    font-size: 1rem;
    font-family: "Montserrat";
    font-weight: 300;
    text-align: center;
    line-height: 25px;
    color: #686868;
    ${props.className}
  `;
  return <p className={pStyle}>{props.children}</p>;
};

export default Paragraph;

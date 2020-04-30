import React from "react";
import { css } from "emotion";

const Img = (props) => {
  const imgStyle = css`
    width: 100%;
    height: auto;
    ${props.className}
  `;
  return <img src={props.src} className={imgStyle} alt={props.alt} />;
};

export default Img;

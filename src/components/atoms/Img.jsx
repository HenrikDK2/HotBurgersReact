import React from "react";
import { css } from "emotion";

const imgStyle = css`
  width: 100%;
  height: auto;
`;

const Img = (props) => {
  return <img src={props.src} className={imgStyle} alt={props.alt} />;
};

export default Img;

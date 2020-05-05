import React from "react";
import { css } from "emotion";
import Img from "../atoms/Img";

const ImageContainer = (props) => {
  const container = css`
    margin: 0;
    padding: 0;
    width: 20px;
    height: auto;
    ${props.className}
  `;

  return (
    <figure className={container} onClick={props.onClick}>
      <Img src={props.src} alt={props.alt} />
    </figure>
  );
};

export default ImageContainer;

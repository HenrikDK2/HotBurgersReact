import React from "react";
import { css } from "emotion";

const Img = (props) => {
  const imgStyle = css`
    width: 100%;
    height: auto;
    object-fit: cover;
    ${props.className}
  `;
  return (
    <img
      src={props.src}
      onDragStart={(e) => e.preventDefault()}
      className={imgStyle}
      alt={props.alt}
    />
  );
};

export default Img;

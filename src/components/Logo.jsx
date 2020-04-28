import React from "react";
import { css } from "emotion";
import Img from "./Img";

const figureStyle = css`
  width: 14rem;
  position: absolute;
  left: 235px;
  top: 40px;
`;

const Logo = (props) => {
  return (
    <figure className={figureStyle}>
      <Img src={props.src} alt="Company Logo" />
    </figure>
  );
};

export default Logo;

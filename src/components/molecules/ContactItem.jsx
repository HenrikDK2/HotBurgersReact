import React from "react";
import { css } from "emotion";
import ImageContainer from "../molecules/ImageContainer";
import Paragraph from "../atoms/Paragraph";
import { useTheme } from "emotion-theming";

const ContactItem = (props) => {
  const theme = useTheme();
  const iconStyle = css`
    width: 60px;
  `;

  const pStyle = css`
    color: ${theme.colors.invertText};
    text-align: left;
    margin: 0 0 0 25px;
  `;

  const spanStyle = css`
    display: block;
  `;

  const divStyle = css`
    align-items: center;
    margin: 25px 0;
    display: flex;
    ${props.border
      ? css`
          &::after {
            content: "";
            width: 411px;
            display: block;
            border-bottom: 1px solid #fff;
          }
        `
      : ""}
  `;
  return (
    <div className={divStyle}>
      <ImageContainer className={iconStyle} src={props.icon} alt="icon" />
      <Paragraph className={pStyle}>
        {props.p}
        <span className={spanStyle}>{props.span}</span>
      </Paragraph>
    </div>
  );
};

export default ContactItem;

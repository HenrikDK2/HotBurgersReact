import React from "react";
import { css } from "emotion";

const List = (props) => {
  const ulStyle = css`
    padding: 0;
    display: flex;
    margin: 0;
    align-items: center;
    list-style: none;
    ${props.className}
  `;
  return <ul className={ulStyle}>{props.children}</ul>;
};

export default List;

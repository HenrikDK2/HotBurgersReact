import React from "react";
import { css } from "emotion";

const ulStyle = css`
  padding: 0;
  display: flex;
  margin: 0;
  align-items: center;
  list-style: none;
`;

const List = (props) => {
  return <ul className={ulStyle}>{props.children}</ul>;
};

export default List;

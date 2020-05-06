import React from "react";
import AltButton from "../atoms/AltButton";
import { Link } from "react-router-dom";

const AltButtonLinik = (props) => {
  return (
    <Link to={props.href}>
      <AltButton className={props.className}>{props.children}</AltButton>
    </Link>
  );
};

export default AltButtonLinik;

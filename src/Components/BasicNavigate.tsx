import React from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps{
    to:string;
    children:string;
    className:string;
}

const ButtonLink = (props:LinkButtonProps) => {
  return (
    <Link to={props.to} className={props.className}>
      <button>{props.children}</button>
    </Link>
  );
};

export default ButtonLink;
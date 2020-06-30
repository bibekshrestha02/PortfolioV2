import React from "react";
import style from "./style.module.scss";
export default function Title(props) {
  return (
    <div>
      <div className={`${style.line}`}></div>
      <div
        className={`${style.Title}`}
        style={{ color: props.color ? "white" : "" }}>
        {props.Title}
      </div>
    </div>
  );
}

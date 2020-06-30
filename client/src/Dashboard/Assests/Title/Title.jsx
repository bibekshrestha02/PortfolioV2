import React from "react";
import style from "./title.module.scss";
export default function Title(props) {
  return (
    <div className={style.title}>
      <span>{props.Title}</span>
    </div>
  );
}

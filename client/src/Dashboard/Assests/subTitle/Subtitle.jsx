import React from "react";
import style from "./style.module.scss";
export default function Subtitle(props) {
  return (
    <div className={`${style.Subtitle}`}>
      <span>{props.Subtitle}</span>
    </div>
  );
}

import React from "react";
import style from "./loading.module.scss";
export default function Loading() {
  return (
    <div className={style.loadingPage}>
      <div className={`${style.ldsripple}`}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

import React from "react";
import style from "./about.module.scss";
export default function Tags() {
  return (
    <div className={` row mt-4 `}>
      <div className={`${style.icons} col-lg-3 col-sm-12 border p-3`}>
        <i className={`${style.icon} fa fa-wpforms`}></i>
        <span className={`${style.tags}`}>Web Development</span>
      </div>
      <div className={`${style.icons} p-3 col-lg-3 col-sm-12 border`}>
        <i className={`${style.icon} fa fa-lightbulb-o`}></i>
        <span className={`${style.tags}`}>BackEnd(node.js)</span>
      </div>
      <div className={`${style.icons} p-3 col-lg-3 col-sm-12 border`}>
        <i className={`${style.icon} fa fa-file-image-o`}></i>
        <span className={`${style.tags}`}> FrontEnd(react.js)</span>
      </div>
      <div className={`${style.icons} p-3 col-lg-3 col-sm-12 border`}>
        <i className={`${style.icon} fa fa-credit-card`}></i>
        <span className={`${style.tags}`}>Web Design</span>
      </div>
    </div>
  );
}

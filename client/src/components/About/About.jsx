import React from "react";
import style from "./about.module.scss";
import Title from "./../../Assest/Title/Title";
import Tags from "./tags";
export default function About(props) {
  return (
    <div className={style.aboutPage}>
      <Title Title={"HERE'S WHAT I'M DOING"} />
      <span className={`${style.subTitle}`}>{props.introDetails}</span>
      <span className={`${style.subTitle} mt-5`}>{props.aboutYou}</span>
      <Tags />
    </div>
  );
}

import React from "react";
import style from "./home.module.scss";
export default function Home(props) {
  return (
    <div className={`${style.home}`}>
      <div>
        <img src={props.image} className={` ${style.image}`} alt='profile' />
        <br />
        <span className={`${style.Name}`}>{props.name}</span>
        <br />
        <span className={`${style.title} m-3`}>{props.tags}</span>
        <br />
        <button className={`btn btn-outline-light btn-lg mt-4`}>
          DOWNLOAD RESUME
        </button>
      </div>
    </div>
  );
}

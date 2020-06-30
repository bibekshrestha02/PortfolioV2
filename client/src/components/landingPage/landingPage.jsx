import React from "react";
import style from "./landing.module.scss";
import Typewriter from "typewriter-effect";
import Nav from "./../../Assest/Nav/Nav";
import { NavHashLink } from "react-router-hash-link";
export default function LandingPage(props) {
  return (
    <div className={style.landingPage}>
      <Nav />
      <div className={style.heroText}>
        <Typewriter
          options={{
            strings: props.introduction,
            autoStart: true,
            loop: true,
          }}
        />
        <NavHashLink smooth to='/#home'>
          <button className={`${style.button} btn btn-lg btn-outline-light`}>
            More About Me
          </button>
        </NavHashLink>
      </div>
    </div>
  );
}

import React from "react";
// import style from "./about.moudle.scss";
import Title from "./../../Assests/Title/Title";
import Subtitle from "./../../Assests/subTitle/Subtitle";
export default function About(props) {
  return (
    <div>
      <Title Title='ABOUT' />
      <Subtitle Subtitle='INTRODUCTION' />
      <input
        type='text'
        onChange={props.introDetailsHandler}
        value={props.introDetails}
        className='form-control'
      />
      <Subtitle Subtitle='About Yourself' />
      <textarea
        onChange={props.aboutYouHandler}
        className='form-control'
        value={props.aboutYou}
        cols='10'></textarea>
    </div>
  );
}

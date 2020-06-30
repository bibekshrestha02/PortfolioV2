import React from "react";
// import style from "./Introduction.moudle.scss";
import Subtitle from "./../../Assests/subTitle/Subtitle";
import Title from "./../../Assests/Title/Title";
export default function Introduction(props) {
  return (
    <div>
      <Title Title='INTRODUCTION' />
      <Subtitle Subtitle='INTRO' />
      <div className='row'>
        {props.introduction.map((element, i) => {
          return (
            <div key={i} className='col'>
              <input
                type='text'
                onChange={props.onIntroductionHandler(i)}
                value={element}
                className='form-control'
              />
            </div>
          );
        })}
      </div>

      <div className='row '>
        <div className='col'>
          <Subtitle Subtitle='NAME' />
          <input
            type='text'
            className='form-control'
            onChange={props.nameHandler}
            value={props.name}
          />
        </div>
        <div className='col'>
          <Subtitle Subtitle='TAGS' />
          <input
            type='text'
            onChange={props.tagsHandler}
            className='form-control'
            value={props.tags}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Subtitle from "./../../Assests/subTitle/Subtitle";
import Title from "./../../Assests/Title/Title";
import Button from "./../../Assests/Button/Button";
export default function Skills(props) {
  return (
    <div>
      <Title Title='SKILLS' />

      {props.skills.map((skill, i) => {
        return (
          <div key={i} className='row '>
            <div className='col'>
              <Subtitle Subtitle='TITLE' />
              <input
                onChange={props.skillsHandler(i, "Title")}
                value={skill.Title}
                type='text'
                className='form-control'
              />
            </div>
            <div className='col'>
              <Subtitle Subtitle='PORTIONS' />
              <input
                onChange={props.skillsHandler(i, "portion")}
                value={skill.portion}
                type='number'
                max='100'
                min='0'
                className='form-control'
              />
            </div>
          </div>
        );
      })}

      <Button onClick={props.addSkills} value='Add Skills' />
    </div>
  );
}

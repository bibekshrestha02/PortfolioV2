import React from "react";
import Subtitle from "./../../Assests/subTitle/Subtitle";
import Title from "./../../Assests/Title/Title";
import Button from "./../../Assests/Button/Button";
export default function Skills(props) {
  return (
    <div>
      <Title Title='PROJECTS' />
      {props.projects.map((project, i) => {
        return (
          <div key={i} className='row '>
            <div className='col'>
              <Subtitle Subtitle='TITLE' />
              <input
                value={project.Title}
                onChange={props.projectsHandler(i, "Title")}
                type='text'
                className='form-control'
              />
            </div>
            <div className='col'>
              <Subtitle Subtitle='LINKS' />
              <input
                onChange={props.projectsHandler(i, "Link")}
                value={project.Link}
                type='text'
                className='form-control'
              />
            </div>
          </div>
        );
      })}

      <Button onClick={props.addProject} value='Add PROJECTS' />
    </div>
  );
}

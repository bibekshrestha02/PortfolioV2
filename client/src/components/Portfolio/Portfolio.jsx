import React from "react";
import style from "./portfolio.module.scss";
import Title from "./../../Assest/Title/Title";
export default function Portfolio(props) {
  const { projects } = props;
  return (
    <div className={`${style.portfolioPage} pt-4`}>
      <Title Title={"My PROJECTS"} />

      {projects.map((project, i) => {
        return (
          <div key={i} className={` mt-3 ${style.imgDiv}`}>
            <p className={`${style.title}`}>{project.Title}</p>
            <div className={`${style.overLay} btn btn-danger `}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: "black", textDecoration: "none" }}
                href={project.Link}>
                visit
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

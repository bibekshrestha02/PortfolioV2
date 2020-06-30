import React from "react";
import Btns from "../Assests/Button/dashbordBtns";
import Projects from "../component/Projects/Projects";
import Skills from "../component/Skills/Skills";
import About from "../component/About/About";
import Introduction from "../component/Introduction/Introduction";
export default function Form(props) {
  const {
    introduction,
    name,
    tags,
    introDetails,
    nameHandler,
    tagsHandler,
    onIntroductionHandler,
    introDetailsHandler,
    aboutYouHandler,
    aboutYou,
    skillsHandler,
    skills,
    addSkills,
    addProject,
    projects,
    projectsHandler,
  } = props;
  return (
    <div>
      <Introduction
        introduction={introduction}
        name={name}
        tags={tags}
        nameHandler={nameHandler}
        tagsHandler={tagsHandler}
        onIntroductionHandler={onIntroductionHandler}
      />
      <About
        introDetailsHandler={introDetailsHandler}
        aboutYouHandler={aboutYouHandler}
        introDetails={introDetails}
        aboutYou={aboutYou}
      />
      <Skills
        skillsHandler={skillsHandler}
        skills={skills}
        addSkills={addSkills}
      />
      <Projects
        projectsHandler={projectsHandler}
        addProject={addProject}
        projects={projects}
      />
      <Btns update={props.update} />
    </div>
  );
}

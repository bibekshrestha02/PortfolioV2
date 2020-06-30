import React, { useState, useEffect } from "react";
import { withRouter, Route } from "react-router-dom";
import style from "./style/dashbord.module.scss";
import Profile from "./component/Profile/Profile";
import Title from "./../Assest/Title/Title";
import LoadingPage from "./../Assest/LoadingPage/Loading";
import PasswordUpdate from "./page/passwordUpdate";
import Form from "./page/Form";
import Axios from "./../axios";
import Message from "./page/message";
function Dashboard() {
  const [email, setEmail] = useState("");
  const [introduction, setIntrduction] = useState();
  const [name, setName] = useState();
  const [tags, setTages] = useState();
  const [introDetails, setintroDetails] = useState("");
  const [about, setAbout] = useState();
  const [skills, setSkills] = useState();
  const [projects, setProjects] = useState();

  const aboutYouHandler = (e) => {
    setAbout(e.target.value);
  };
  const skillsHandler = (id, value) => (e) => {
    let data = [...skills];
    data[id][value] = e.target.value;
    setSkills(data);
  };
  const addSkills = () => {
    let field = [
      ...skills,
      {
        Title: "",
        portion: "",
      },
    ];
    setSkills(field);
  };

  const projectsHandler = (id, value) => (e) => {
    let data = [...projects];
    data[id][value] = e.target.value;
    setProjects(data);
  };
  const addProject = () => {
    let field = [
      ...projects,
      {
        Title: "",
        Link: "",
      },
    ];
    setProjects(field);
  };
  const onIntroductionHandler = (i) => (e) => {
    let data = [...introduction];
    data[i] = e.target.value;
    setIntrduction(data);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const tagsHandler = (e) => {
    setTages(e.target.value);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Axios.get("/api/").then((res) => {
      const { data } = res.data;
      const { about } = data;
      const { introDetails } = data;
      const { introduction } = data;
      const { name } = data;
      const { projects } = data;
      const { skills } = data;
      const { tags } = data;
      const { email } = data;
      setAbout(about);
      setEmail(email);
      setName(name);
      setintroDetails(introDetails);
      setIntrduction(introduction);
      setProjects(projects);
      setSkills(skills);
      setTages(tags);
      setLoading(false);
    });
  }, []);
  const whiteSpaceRemover = (arrays) => {
    arrays.map((obj) => {
      return Object.keys(obj).forEach((key) =>
        obj[key] === "" ? delete obj[key] : {}
      );
    });
    const newArray = arrays.filter((value) => Object.keys(value).length !== 0);
    return newArray;
  };
  const update = () => {
    const data = {
      about: about,
      introDetails: introDetails,
      introduction: introduction,
      name: name,
      projects: whiteSpaceRemover(projects),
      skills: whiteSpaceRemover(skills),
      tags: tags,
      email: email,
    };
    const status = window.confirm("Are you sure?");
    if (status) {
      Axios.patch("/api/", data).then((res) => {
        window.location.reload();
      });
    }
  };
  const introDetailsHandler = (e) => {
    setintroDetails(e.target.value);
  };
  let data;

  loading
    ? (data = <LoadingPage />)
    : (data = (
        <div className='pt-5' style={{ backgroundColor: "#EAF0F1" }}>
          <Title Title='Admin Zone' />
          <div className={` ${style.Dashboard} row container-fluid mt-4 `}>
            <div className='col-lg-3 col-sm-12 border mr-lg-3 mr-sm-0  mb-3 pb-2'>
              <Profile email={email} />
            </div>
            <div className={`col-lg-8 col-sm-12 ${style.secChild} border`}>
              <Route
                exact
                path='/dashboard/'
                render={() => (
                  <Form
                    introduction={introduction}
                    name={name}
                    tags={tags}
                    nameHandler={nameHandler}
                    tagsHandler={tagsHandler}
                    onIntroductionHandler={onIntroductionHandler}
                    introDetailsHandler={introDetailsHandler}
                    aboutYouHandler={aboutYouHandler}
                    introDetails={introDetails}
                    aboutYou={about}
                    skillsHandler={skillsHandler}
                    skills={skills}
                    addSkills={addSkills}
                    projectsHandler={projectsHandler}
                    addProject={addProject}
                    projects={projects}
                    update={update}
                  />
                )}
              />
              <Route path='/dashboard/message' component={Message} />
              <Route
                path='/dashboard/updatePassword'
                component={PasswordUpdate}
              />
            </div>
          </div>
        </div>
      ));

  return data;
}

export default withRouter(Dashboard);

import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skills/Skills";
import LandingPage from "./components/landingPage/landingPage";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./Assest/footer/Footer";
import Map from "./Assest/Map/Map";
import Axios from "./axios";
import LoadingPage from "./Assest/LoadingPage/Loading";
function App() {
  const [isLoading, setLoading] = useState(true);
  const [introduction, setIntrduction] = useState("");
  const [name, setName] = useState("");
  const [tags, setTages] = useState("");
  const [introDetails, setintroDetails] = useState("");
  const [aboutYou, setAboutYou] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");

  const [image, setImage] = useState("/Images/profile.jpg");
  useEffect(() => {
    Axios.get("/api").then((res) => {
      const { data } = res.data;
      const { about } = data;
      const { introDetails } = data;
      const { introduction } = data;
      const { name } = data;
      const { photo } = data;
      const { projects } = data;
      const { skills } = data;
      const { tags } = data;
      setAboutYou(about);
      setImage(photo);
      setName(name);
      setintroDetails(introDetails);
      setIntrduction(introduction);
      setProjects(projects);
      setSkills(skills);
      setTages(tags);
      setLoading(false);
    });
  }, []);
  let pages;
  isLoading
    ? (pages = <LoadingPage />)
    : (pages = (
        <div>
          <LandingPage introduction={introduction} />
          <div id='home'>
            <Home image={image} name={name} tags={tags} />
          </div>
          <div id='about' className='pt-4'>
            <About introDetails={introDetails} aboutYou={aboutYou} />
          </div>
          <div id='skill' className='pt-3'>
            <Skill skills={skills} />
          </div>
          <div id='portfolio' className='pt-4'>
            <Portfolio projects={projects} />
          </div>
          <div id='contact' className='pt-4'>
            <Contact />
          </div>
          <Map />
          <Footer />
        </div>
      ));
  return pages;
}

export default App;

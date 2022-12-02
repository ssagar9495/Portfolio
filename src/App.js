import React, { useRef } from "react";
import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import {
  Home,
  Education,
  Skills,
  Work,
  Experience,
  About,
  Contact,
} from "./pages";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const workRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const executeScroll = () => aboutRef.current.scrollIntoView();

  const homeScroll = () => homeRef.current.scrollIntoView();
  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const skillsScroll = () => skillsRef.current.scrollIntoView();
  const educationScroll = () => educationRef.current.scrollIntoView();
  const workScroll = () => workRef.current.scrollIntoView();
  const experienceScroll = () => experienceRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();

  const scrollingHandler = (e) => {
    // console.log("working=>", e);
    switch (e) {
      case "home":
        return homeScroll();
      case "about":
        return aboutScroll();
      case "skills":
        return skillsScroll();
      case "education":
        return educationScroll();
      case "work":
        return workScroll();
      case "experience":
        return experienceScroll();

      default:
        return <h1>No project match</h1>;
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div id="home" ref={homeRef}>
          <Home aboutHandler={executeScroll} />
        </div>
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="skills" ref={skillsRef}>
          <Skills />
        </div>
        <div id="education" ref={educationRef}>
          <Education />
        </div>
        <div id="work" ref={workRef}>
          <Work />
        </div>
        <div id="experience" ref={experienceRef}>
          <Experience />
        </div>

        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </div>
      <Footer scrollingHandler={scrollingHandler} />
    </>
  );
}

export default App;

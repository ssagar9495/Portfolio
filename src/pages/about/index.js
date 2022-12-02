import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Button from "../../component/button";
import { IMAGES } from "../../constants/assets";
import { AboutPage } from "../../constants/constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  });

  const resumeHanlder = () => {
    toast.error("Need Access To Download");
  };
  return (
    <div id="about" className={styles.mainContainer}>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className={styles.aboutHeading}>
        <img src={IMAGES.USER_IMAGE} className={styles.userImage} />
        About <span>Me</span>
      </div>
      <div className="container">
        <div className="row">
          <div className={`col-sm ${styles.leftSideBox}`}>
            <div className={styles.imageDiv}>
              <img src={IMAGES.ABOUT_IMAGE} className={styles.aboutImage} />
            </div>
          </div>
          <div data-aos="fade-down" className={`col-sm ${styles.rightSideBox}`}>
            <div className={styles.aboutHeadText}>{AboutPage.introHeading}</div>
            <div className={styles.titleText}>{AboutPage.title}</div>
            <p className={styles.aboutParaGraph}>{AboutPage.description}</p>
            <div className="row">
              <div className={`col-sm ${styles.tagText}`}>
                Age :<span>{AboutPage.age}</span>
              </div>
              <div className={`col-sm ${styles.tagText}`}>
                Email :<span>{AboutPage.email}</span>
              </div>
            </div>
            <div className="row">
              <div className={`col-sm ${styles.tagText}`}>
                Phone :<span>{AboutPage.phone}</span>
              </div>
              <div className={`col-sm ${styles.tagText}`}>
                Place :<span>{AboutPage.place}</span>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                label="Resume"
                type="resume"
                buttonType={true}
                onClick={resumeHanlder}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

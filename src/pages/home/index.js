import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import Typewriter from "typewriter-effect";
import Button from "../../component/button";
import SocialIconRow from "../../component/socialIcon";
import { IMAGES } from "../../constants/assets";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = ({ aboutHandler }) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  });

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div id="home" ref={myRef} className={styles.mainHomeContainer}>
      <div className="container">
        <div className="row">
          <div className={`col-sm ${styles.rightBox}`}>
            <div className={styles.HeadingText}>Hi There,</div>
            <div className={styles.HeadingText}>
              I'm Sagar <span>Rana</span>
            </div>
            <div className={styles.movingText}>
              <div className={styles.fixedText}>I Am Into </div>
              <div data-aos="fade-down" className={styles.typeWriterText}>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Frontend Development")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Backend Development")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Web Designing")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Andriod Development")
                      .start();
                  }}
                />
              </div>
            </div>
            <div data-aos="fade-down" className={styles.aboutButton}>
              <Button
                label="About Me"
                type="about"
                onClick={aboutHandler}
                buttonType={false}
              />
            </div>
            <div data-aos="fade-down" className={styles.socialContainer}>
              <SocialIconRow />
            </div>
          </div>

          <div className={`col-sm ${styles.leftBox}`}>
            <div className={styles.headingImage}>
              <img src={IMAGES.FACE} className={styles.imageStyle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

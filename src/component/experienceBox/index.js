import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceBox = ({ companyName, technology, type, Year }) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  });
  return (
    <div className={styles.experienceCard} data-aos="fade-down">
      <div className={styles.companyDiv}>{companyName} </div>
      <div className={styles.techDiv}>{`${technology} | ${type}`}</div>
      <div className={styles.yearDiv}>{Year}</div>
    </div>
  );
};
export default ExperienceBox;

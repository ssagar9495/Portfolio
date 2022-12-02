import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import EducationCard from "../../component/educationCard";
import SchoolIcon from "@mui/icons-material/School";
import {
  EducationPageMenu,
  EducationPageTitle,
} from "../../constants/constant";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
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
    <div id="education" className={styles.mainContainer}>
      <div className={styles.aboutHeading}>
        <SchoolIcon style={{ fontSize: "35px" }} />
        <div className={styles.textStyle}>
          My<span>Education</span>
        </div>
      </div>
      <div className={styles.EducationHeading}>{EducationPageTitle}</div>
      {EducationPageMenu.map((items) => (
        <div className={styles.cardContainer} data-aos="fade-down">
          <EducationCard
            image={items.image}
            heading={items.qualification}
            college={items.college}
            year={items.year}
          />
        </div>
      ))}
    </div>
  );
};
export default Education;

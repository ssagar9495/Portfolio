import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import SkillsBox from "../../component/skillBox";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import { SkillPageMenu } from "../../constants/constant";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
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
    <div id="skills" className={`col-sm ${styles.mainContainer}`}>
      <div className={styles.aboutHeading}>
        <ImportantDevicesIcon style={{ fontSize: "35px" }} />
        <div className={styles.textStyle}>
          Skills &<span>Abilities</span>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className={`col-sm ${styles.skillsBoxContainer}`}
      >
        <div className={`col-sm ${styles.skillsInnerContainer}`}>
          {SkillPageMenu.map((items, index) => {
            return <SkillsBox image={items.image} label={items.label} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Skills;

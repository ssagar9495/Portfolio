import React from "react";
import styles from "./styles.module.scss";

const SkillsBox = ({ image, label }) => {
  return (
    <div className={styles.skillsBoxConatiner}>
      <img src={image} className={styles.imageStyles} />
      <div className={styles.textStyle}>{label}</div>
    </div>
  );
};
export default SkillsBox;

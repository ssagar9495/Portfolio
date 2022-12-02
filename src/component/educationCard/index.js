import React from "react";
import styles from "./styles.module.scss";

const EducationCard = ({ image, heading, college, year }) => {
  return (
    <>
      <div className={styles.educationCard}>
        <div className={` ${styles.leftSide}`}>
          <img src={image} className={styles.insituteImage} />
        </div>
        <div className={`${styles.rightSide}`}>
          <h4 className={styles.headingCss}>{heading}</h4>
          <h5 className={styles.collegeStyles}>{college}</h5>
          <h6 className={styles.yearCss}>{year}</h6>
        </div>
      </div>
    </>
  );
};

export default EducationCard;

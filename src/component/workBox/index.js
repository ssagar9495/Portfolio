import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Button from "../button";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkBox = ({ onClick, image, title, description }) => {
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
    <div
      className={`card ${styles.boxContainer} `}
      style={{ width: "25rem" }}
      data-aos="fade-down"
    >
      <img
        src={image}
        class={`card-img-top ${styles.cardImage}`}
        alt="cardImage"
      />

      <div className={styles.overlay}>
        <div className={` ${styles.cardStyles}`}>
          <h5 className={` ${styles.titleStyles}`}>{title}</h5>
          <p className={`card-text ${styles.description}`}>{description}</p>
          <div className={styles.buttonStyles}>
            <Button label="View" buttonType={true} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBox;

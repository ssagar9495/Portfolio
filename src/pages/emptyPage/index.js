import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import Button from "../../component/button";
import { useNavigate } from "react-router-dom";

const EmptyPage = () => {
  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div
        className={styles.mainContainer}
        style={{ backgroundImage: `url(${IMAGES.EMPTYPAGE})` }}
      >
        <div className={styles.textDiv}>There's nothing here, yet.</div>
        <div className={styles.buttonDiv}>
          <Button
            label="Back to Porfolio"
            buttonType={true}
            type="work"
            fromWork
            onClick={backButtonHandler}
          />
        </div>
      </div>
    </>
  );
};

export default EmptyPage;

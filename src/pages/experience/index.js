import React from "react";
import styles from "./styles.module.scss";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Button from "../../component/button";
import ExperienceBox from "../../component/experienceBox";
import { ExperienceMenu } from "../../constants/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

const Experience = () => {
  const buttonHandler = () => {
    toast.error("Currently Unavailable");
  };
  return (
    <div id="experience" className={styles.mainContainer}>
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
        <BusinessCenterIcon style={{ fontSize: "35px" }} />
        <div className={styles.textStyle}>Experience</div>
      </div>
      <div className={styles.middleBox}>
        <div className="container">
          <div className={`row ${styles.rowStyles}`}>
            {ExperienceMenu.map((items) => {
              return (
                <ExperienceBox
                  companyName={items.companyName}
                  technology={items.technology}
                  type={items.type}
                  Year={items.Year}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          label="View All"
          buttonType={true}
          type="work"
          onClick={buttonHandler}
        />
      </div>
    </div>
  );
};
export default Experience;

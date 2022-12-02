import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import WorkBox from "../../component/workBox";
import Button from "../../component/button";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import { WorkPageMenu } from "../../constants/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

const Work = () => {
  const viewHandler = () => {
    toast.error("Currently Unavailable");
  };
  return (
    <div id="work" className={styles.mainContainer}>
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
        <ImportantDevicesIcon style={{ fontSize: "35px" }} />
        <div className={styles.textStyle}>
          Projects<span>Made</span>
        </div>
      </div>
      <div className={styles.middleBox}>
        {WorkPageMenu.map((items) => (
          <WorkBox
            image={items?.image}
            title={items?.title}
            description={items?.description}
            onClick={viewHandler}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Button
          label="View All"
          buttonType={true}
          type="work"
          fromWork
          onClick={viewHandler}
        />
      </div>
    </div>
  );
};
export default Work;

import React from "react";
import styles from "./styles.module.scss";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import SocialIcon from "../../component/socialIcon";
import {
  footerLeftContainer,
  footerRightContainer,
  footerLinkMenu,
  FoterBottmText,
} from "../../constants/constant";

const Footer = ({ scrollingHandler }) => {
  return (
    <div className={`container ${styles.footerContainer}`}>
      <div className={`row ${styles.rowStyles}`}>
        <div className={`col-sm `}>
          <div className={styles.footerColumnHeading}>
            {footerLeftContainer.heading}
          </div>
          <p className={styles.paraStyles}>
            {footerLeftContainer.description1}
          </p>
          <p className={styles.paraStyles}>
            {footerLeftContainer.description1}
          </p>
        </div>
        <div className={`col-sm ${styles.footerColumn}`}>
          <div className={styles.footerColumnHeading}>Quick Links</div>
          <div className={styles.itemsStyles}>
            {footerLinkMenu.map((item) => {
              return (
                <h6
                  onClick={() => scrollingHandler(item.type)}
                  className={styles.tagStyles}
                >
                  {item.icon}
                  {item.label}
                </h6>
              );
            })}
          </div>
        </div>
        <div className={`col-sm ${styles.rightDiv} `}>
          <div className={`${styles.footerColumnHeading} ${styles.contentDiv}`}>
            {footerRightContainer.heading}
          </div>
          <div className={styles.contactStyles}>
            <div className={styles.userStyles}>
              <PhoneEnabledIcon
                style={{ paddingRight: "5px", color: "#d69b2e" }}
              />
              {footerRightContainer.phoneNumber}
            </div>
            <div className={styles.userStyles}>
              <EmailIcon style={{ paddingRight: "5px", color: "#d69b2e" }} />
              {footerRightContainer.email}
            </div>
            <div className={styles.userStyles}>
              <PinDropIcon style={{ paddingRight: "5px", color: "#d69b2e" }} />
              {footerRightContainer.location}
            </div>
          </div>
          <div className={styles.socialContainer}>
            <SocialIcon footer />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>{FoterBottmText}</div>
    </div>
  );
};

export default Footer;

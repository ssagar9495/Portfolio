import React, { useState } from "react";
import styles from "./styles.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import { socialUrl } from "../../constants/constant";

const SocialIconRow = ({ footer }) => {
  const [instaHover, setInstaHover] = useState(false);
  const [linkedInHover, setLinkedInHover] = useState(false);
  const [twitterHover, setTwitterHover] = useState(false);
  const [gitHover, setGitHover] = useState(false);
  return (
    <>
      <div className={styles.socialIconRow}>
        <Tooltip title="Instagram">
          <div
            onMouseEnter={() => setInstaHover(true)}
            onMouseLeave={() => setInstaHover(false)}
            className={`${
              footer ? styles.footerStyles : styles.socialIconConatiner
            }`}
            onClick={() => window.open(socialUrl.instagram)}
          >
            <InstagramIcon
              className={`${instaHover && styles.iconHover} ${
                styles.iconColor
              }`}
            />
          </div>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <div
            className={`${
              footer ? styles.footerStyles : styles.socialIconConatiner
            }`}
            onMouseEnter={() => setLinkedInHover(true)}
            onMouseLeave={() => setLinkedInHover(false)}
            onClick={() => window.open(socialUrl.linkedin)}
          >
            <LinkedInIcon
              className={`${linkedInHover && styles.iconHover} ${
                styles.iconColor
              }`}
            />
          </div>
        </Tooltip>
        <Tooltip title="Twitter">
          <div
            onMouseEnter={() => setTwitterHover(true)}
            onMouseLeave={() => setTwitterHover(false)}
            className={`${
              footer ? styles.footerStyles : styles.socialIconConatiner
            }`}
            onClick={() => window.open(socialUrl.twiiter)}
          >
            <TwitterIcon
              className={`${twitterHover && styles.iconHover} ${
                styles.iconColor
              }`}
            />
          </div>
        </Tooltip>
        <Tooltip title="GitHub">
          <div
            onMouseEnter={() => setGitHover(true)}
            onMouseLeave={() => setGitHover(false)}
            className={`${
              footer ? styles.footerStyles : styles.socialIconConatiner
            }`}
            onClick={() => window.open(socialUrl.github)}
          >
            <GitHubIcon
              className={`${gitHover && styles.iconHover} ${styles.iconColor}`}
            />
          </div>
        </Tooltip>
      </div>
    </>
  );
};
export default SocialIconRow;

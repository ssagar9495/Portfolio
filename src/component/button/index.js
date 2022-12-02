import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TelegramIcon from "@mui/icons-material/Telegram";

const Button = ({ label, type, onClick, buttonType, fromWork }) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <button
      type={type}
      className={`${styles.buttonStyles}  ${
        buttonType && styles.rectangleStyles
      } ${fromWork && styles.WorkButton}`}
      onClick={onClick}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {label}
      <div className={onHover && styles.iconStyles}>
        {type === "resume" && <NavigateNextIcon />}
        {type === "about" && <KeyboardArrowDownIcon />}
        {type === "work" && <ArrowForwardIcon />}
        {type === "submit" && <TelegramIcon />}
      </div>
    </button>
  );
};

export default Button;

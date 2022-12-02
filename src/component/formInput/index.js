import React, { useState } from "react";
import styles from "./styles.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

const FormInput = ({
  type,
  handleChange,
  handleBlur,
  value,
  errors,
  touched,
}) => {
  const [onNameHover, setOnNameHover] = useState(false);
  const [onEmailHover, setOnEmailHover] = useState(false);
  const [onPhoneHover, setOnPhoneHover] = useState(false);
  const [onMessageHover, setOnMessageHover] = useState(false);
  return (
    <>
      {type === "text" && (
        <div className={styles.inputDiv}>
          <PersonIcon
            className={`${styles.iconStyle} ${onNameHover && styles.focusIcon}`}
          />
          <input
            type="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            className={`${styles.inputContainer} ${
              onNameHover && styles.inputHover
            } `}
            onFocus={() => setOnNameHover(true)}
            // onBlur={() => setOnNameHover(false)}
          />
        </div>
      )}
      {type === "email" && (
        <div className={styles.inputDiv}>
          <EmailIcon
            className={`${styles.iconStyle} ${
              onEmailHover && styles.focusIcon
            }`}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            className={`${styles.inputContainer} ${
              onEmailHover && styles.inputHover
            }`}
            onFocus={() => setOnEmailHover(true)}
            // setOnEmailHover(false)
          />
        </div>
      )}
      {type === "number" && (
        <div className={styles.inputDiv}>
          <LocalPhoneIcon
            className={`${styles.iconStyle} ${
              onPhoneHover && styles.focusIcon
            }`}
          />
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            className={`${styles.inputContainer} ${
              onPhoneHover && styles.inputHover
            }`}
            onFocus={() => setOnPhoneHover(true)}
          />
        </div>
      )}
      {type === "textarea" && (
        <div className={styles.inputDiv}>
          <InsertCommentIcon
            className={`${styles.iconStyle} ${
              onMessageHover && styles.focusIcon
            }`}
          />
          <textarea
            placeholder="Message"
            name="message"
            onChange={handleChange}
            value={value}
            onBlur={handleBlur}
            className={`${styles.inputContainer} ${
              onMessageHover && styles.inputHover
            }`}
            onFocus={() => setOnMessageHover(true)}
            // onBlur={() => setOnMessageHover(false)}
          />
        </div>
      )}
    </>
  );
};
export default FormInput;

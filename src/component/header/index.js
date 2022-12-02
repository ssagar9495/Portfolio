import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { Link } from "react-scroll";

const Header = ({ onClick }) => {
  return (
    <nav class={`navbar navbar-expand-lg navbar-light " ${styles.nabBar}`}>
      <img src={IMAGES.LOGO} className={styles.logoStyles} />

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class={`collapse navbar-collapse ${styles.rightConatiner}`}
        id="navbarSupportedContent"
      >
        <ul className={`navbar-nav mr-auto `}>
          <li className="nav-item active">
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className={`nav-link ${styles.navListing}`} href="#">
                <div className={styles.bottomBorder}>Home</div>
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              activeClass="active"
              to="about"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className={`nav-link ${styles.navListing}`} href="#">
                <div className={styles.bottomBorder}>About</div>
              </a>
            </Link>
          </li>
          <li class="nav-item active">
            <Link
              activeClass="active"
              to="skills"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className={`nav-link ${styles.navListing}`} href="#">
                <div className={styles.bottomBorder}>Skills</div>
              </a>
            </Link>
          </li>
          <li class="nav-item ">
            <Link
              activeClass="active"
              to="education"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className={`nav-link ${styles.navListing}`} href="#">
                <div className={styles.bottomBorder}>Education</div>
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              activeClass="active"
              to="work"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className={`nav-link ${styles.navListing}`} href="#">
                <div className={styles.bottomBorder}>Work</div>
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              activeClass="active"
              to="experience"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className={`nav-link ${styles.navListing}`} href="#">
                <div className={styles.bottomBorder}>Experience</div>
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <a className={`nav-link ${styles.navListing}`} href="#">
                <div className={styles.bottomBorder}> Contact</div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;

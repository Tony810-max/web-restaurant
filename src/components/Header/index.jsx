import React from "react";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import logo from "../../image/Header/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export default function Header() {
  return (
    <div className={classNames(styles.wrapper, 'pt-4')}>
      <div className={classNames(styles.backgroundWrapper, 'container')}>
        <div className={styles.menuNavWrapper}>
          <div className={styles.logoWrapper}>
            <img src={logo} alt="" className={styles.logo} />
          </div>
          <div className={styles.navWrapper}>
            <Link to={"/"} className={styles.nav}>
              Home
            </Link>
            <Link to={"/"} className={styles.nav}>
              Menu
            </Link>
            <Link to={"/"} className={styles.nav}>
              About
            </Link>
            <Link to={"/"} className={styles.nav}>
              Shop
              <div className={styles.subnavWrapper}>
                <Link to={"/"} className={styles.subnav}>
                  Our Products
                </Link>
                <Link to={"/"} className={styles.subnav}>
                  Product Detail
                </Link>
              </div>
            </Link>
            <Link to={"/"} className={styles.nav}>
              Blog
              <div className={styles.subnavWrapper}>
                <Link to={"/"} className={styles.subnav}>
                  Our Products
                </Link>
                <Link to={"/"} className={styles.subnav}>
                  Product Detail
                </Link>
              </div>
            </Link>
            <Link to={"/"} className={styles.nav}>
              Page
              <div className={styles.subnavWrapper}>
                <Link to={"/"} className={styles.subnav}>
                  Our Products
                </Link>
                <Link to={"/"} className={styles.subnav}>
                  Product Detail
                </Link>
                <Link to={"/"} className={styles.subnav}>
                  Our Products
                </Link>
                <Link to={"/"} className={styles.subnav}>
                  Product Detail
                </Link>
              </div>
            </Link>
          </div>
          <div className={styles.searchWrapper}>
            <FontAwesomeIcon
              className={styles.searchIcon}
              icon={faMagnifyingGlass}
            />
            <input
              type="text"
              placeholder="Search here"
              className={styles.searchInput}
            />
          </div>
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.phoneWrapper}>
            <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
            <span className={styles.phoneText}>(+84) 793 990 963</span>
          </div>
          <button className={styles.contactBtn}>
            BOOK A TABLE
            <FontAwesomeIcon icon={faArrowRight} className={styles.btnIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

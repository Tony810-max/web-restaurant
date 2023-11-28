import classNames from "classnames";
import React from "react";

import styles from "./BannerSection.module.scss";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Burger from "../../../../image/Banner/hero-1.jpg";
export default function BannerSection() {
  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.BannerWrapper, "container", "p-0")}>
        <div className={styles.TitleWrapper}>
          <span className={styles.titleText}>Crispy Chicken Burgers</span>
          <span className={styles.descText}>
            Sit amet consectetur adipiscing Malesuada morbigrave ullamore
            alesuada nec pulvinar nisle
          </span>
          <Button className={styles.orderBtn}>
            ORDER NOW
            <FontAwesomeIcon
              icon={faArrowRight}
              className={styles.OrderBtnIcon}
            />
          </Button>
        </div>
        <img src={Burger} className={styles.img} />
      </div>
    </div>
  );
}

import React from "react";

import styles from "./AboutQuichenSection.module.scss";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import prevImg from "../../../../image/AboutQuichen/prev-arrow.png";
import bbQ from "../../../../image/AboutQuichen/image-1.png";
import salad from "../../../../image/AboutQuichen/image-2.png";
export default function AboutQuichenSection() {
  return (
    <div className={classNames(styles.wrapper, "container")}>
      <div>
        <div>
          <img src={prevImg} alt="" className={styles.prevImage} />
          <span className={styles.titleText}>ABOUT QICHEN</span>
        </div>
        <div className={styles.headingWrapper}>
          <span className={styles.headingText}>
            The Best Tasty & Yamee Food and Chief Based on Italiano
          </span>
          <span className={styles.descText}>
            Sit amet consectetur adipiscing elitsue risus mauris quam neque
            adipiscing phasellus aenean ante orcirat scelerisque enim ut nulla
            vestibulum velvitae ut at elementum mauris, etiam ornare diame
          </span>
          <Link to={"/"}>
            <Button className={styles.btnLearnMore}>
              LEAR MORE
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={bbQ} alt="" />
        <img src={salad} alt="" />
      </div>
    </div>
  );
}

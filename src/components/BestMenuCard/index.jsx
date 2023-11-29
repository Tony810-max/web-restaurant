import React from "react";

import styles from "./BestMenuCard.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function BestMenuCard({ image, name, price }) {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="" className={styles.imgFood} />
      <div className={styles.headingWrapper}>
        <Link to={"/"} className={styles.titleWrapper}>
          <span className={styles.headingText}>{name}</span>
          <span className={styles.dotBorder}></span>
          <span className={styles.price}>${price}</span>
        </Link>
        <span className={styles.titleText}>Roasted langoustine, consommé</span>
        <div className={styles.iconStarWrapper}>
          <FontAwesomeIcon icon={faStar} className={styles.iconStar} />
          <FontAwesomeIcon icon={faStar} className={styles.iconStar} />
          <FontAwesomeIcon icon={faStar} className={styles.iconStar} />
          <FontAwesomeIcon icon={faStar} className={styles.iconStar} />
          <FontAwesomeIcon icon={faStar} className={styles.iconStar} />
          <span>(5K Reviews)</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import styles from "./BestFoodMenu.module.scss";

import prevImg from "../../../../image/BestFoodMenu/prev-arrow.png";
import next from "../../../../image/BestFoodMenu/next-arrow.png";
import singleImg from "../../../../image/BestFoodMenu/menu-single.png";
import BestMenuCard from "../../../../components/BestMenuCard";
import burger from '../../../../image/BestFoodMenu/thumb-1.png'
import pizza from '../../../../image/BestFoodMenu/thumb-2.png'
import chicken from '../../../../image/BestFoodMenu/thumb-3.png'
import seafoodPizza from '../../../../image/BestFoodMenu/thumb-4.png'

export default function BestFoodMenu() {
  return (
    <div className={"container"}>
      <div className={styles.wrapper}>
        <div className={styles.headingWrapper}>
          <div className={styles.titleWrapper}>
            <img src={prevImg} alt="" />
            <span className={styles.titleText}>BEST FOOD MENU</span>
            <img src={next} alt="" />
          </div>
          <span className={styles.headingText}>Choose Your Best Menus</span>
        </div>
        <div className={styles.bestMenuWrapper}>
          <img src={singleImg} alt="" />
          <div className={styles.BestFoodWrapper}>
          <BestMenuCard image={burger} name={"Hamburger"} price={"25"} />
          <BestMenuCard image={pizza} name={"Pizza"} price={"63"} />
          <BestMenuCard image={chicken} name={"Baked Chicken Wings"} price={"199"} />
          <BestMenuCard image={seafoodPizza} name={"Seafood Pizza"} price={"352"} />
          </div>
        </div>
      </div>
    </div>
  );
}

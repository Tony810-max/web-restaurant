import React from "react";

import styles from "./CategorySection.module.scss";
import FoodCard from "../../../../components/CategoryCard";

import prevImg from "../../../../image/Category/white-prev-arrow.png";
import nextImg from "../../../../image/Category/white-next-arrow.png";
import pizza from "../../../../image/Category/icon-1.png";
import classNames from "classnames";
export default function CategorySection() {
  return (
    <div className={styles.wrapper}>
      <div className={"container"}>
        <div className={styles.categoryWrapper}>
          <div className={styles.titleWrapper}>
            <img src={prevImg} />
            <span className={styles.title}>OUR POPULAR FOOD</span>
            <img src={nextImg} />
          </div>
          <span className={styles.BestCategory}>Best Category Foods Menu</span>
        </div>
        <div className={classNames(styles.foodWrapper, "mt-4")}>
          <div className="row">
            <div className="col-4">
              <FoodCard image={pizza} name={"Pizza"} />
            </div>
            <div className="col-4">
              <FoodCard image={pizza} name={"Pizza"} />
            </div>
            <div className="col-4">
              <FoodCard image={pizza} name={"Pizza"} />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4">
              <FoodCard image={pizza} name={"Pizza"} />
            </div>
            <div className="col-4">
              <FoodCard image={pizza} name={"Pizza"} />
            </div>
            <div className="col-4">
              <FoodCard image={pizza} name={"Pizza"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

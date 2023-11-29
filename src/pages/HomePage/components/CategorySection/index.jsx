import React, { useEffect, useState } from "react";

import styles from "./CategorySection.module.scss";

import prevImg from "../../../../image/Category/white-prev-arrow.png";
import nextImg from "../../../../image/Category/white-next-arrow.png";
import pizza from "../../../../image/Category/icon-1.png";
import burger from "../../../../image/Category/icon-2.png";
import seafood from "../../../../image/Category/icon-4.png";
import coffe from "../../../../image/Category/icon-5.png";
import bread from "../../../../image/Category/icon-3.png";
import chicken from "../../../../image/Category/icon-6.png";

import classNames from "classnames";
import CategoryCard from "../../../../components/CategoryCard";
import { Link } from "react-router-dom";

export default function CategorySection() {
  return (
    <div className={styles.wrapper}>
      <div className={"container"}>
        <div className={styles.categoryWrapper}>
          <div className={styles.headingWrapper}>
            <img src={prevImg} alt="" />
            <span className={styles.titleText}>OUR POPULAR FOOD</span>
            <img src={nextImg} alt="" />
          </div>
          <span className={styles.BestCategory}>Best Category Foods Menu</span>
        </div>

        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className={classNames(styles.foodWrapper, "mt-4")}
        >
          <div className="row">
            <div className="col-4">
              <CategoryCard image={pizza} name={"Pizza"} />
            </div>
            <div className="col-4">
              <CategoryCard image={burger} name={"Burger"} />
            </div>
            <div className="col-4">
              <CategoryCard image={bread} name={"Bread"} />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4">
              <CategoryCard image={seafood} name={"Seafood"} />
            </div>
            <div className="col-4">
              <CategoryCard image={coffe} name={"Coffe"} />
            </div>
            <div className="col-4">
              <CategoryCard image={chicken} name={"Chicken"} />
            </div>
          </div>
          <div className="row  ">
            <div className="col-5 mx-auto mt-5">
              <span className={styles.orderHeadingWrapper}>
                Need any Special Food or Any Birthday Cakes?
                <Link to="/" className={styles.oderLink}>
                  Order Now
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

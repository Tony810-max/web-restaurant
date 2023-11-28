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
import ReactLoading from "react-loading";
import CategoryCard from "../../../../components/CategoryCard";

export default function CategorySection() {
 
  return (
    <div className={styles.wrapper}>
      <div className={"container"}>
        <div className={styles.categoryWrapper}>
          <div className={styles.headingWrapper}>
            <img src={prevImg} alt=""/>
            <span className={styles.titleText}>OUR POPULAR FOOD</span>
            <img src={nextImg} alt=""/>
          </div>
          <span className={styles.BestCategory}>Best Category Foods Menu</span>
        </div>
        
          <div className={classNames(styles.foodWrapper, "mt-4")}>
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
          </div>
        
      </div>
    </div>
  );
}

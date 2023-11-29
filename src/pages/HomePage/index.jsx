import { useEffect, useState } from "react";
import Header from "../../components/Header";
import BannerSection from "./components/BannerSection";
import CategorySection from "./components/CategorySection";

import styles from "./HomePage.module.scss";
import AboutQuichenSection from "./components/AboutQuichenSection";
import BestFoodMenu from "./components/BestFoodMenu";

function HomePage() {
  

  return (
    <div className={styles.wrapper}>
      <Header />
      <BannerSection />
      <CategorySection />
      <AboutQuichenSection />
      <BestFoodMenu />
    </div>
  );
}
export default HomePage;

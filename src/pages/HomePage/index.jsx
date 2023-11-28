import Header from "../../components/Header";
import BannerSection from "./components/BannerSection";
import CategorySection from "./components/CategorySection";

import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <BannerSection />
      <CategorySection />
    </div>
  );
}
export default HomePage;

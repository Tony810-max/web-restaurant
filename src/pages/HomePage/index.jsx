import { useEffect, useState } from "react";
import Header from "../../components/Header";
import BannerSection from "./components/BannerSection";
import CategorySection from "./components/CategorySection";
import ReactLoading from "react-loading";

import styles from "./HomePage.module.scss";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <ReactLoading type={'spokes'} color={'#f42f2c'} height={100} width={100} />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <BannerSection />
      <CategorySection />
    </div>
  );
}
export default HomePage;

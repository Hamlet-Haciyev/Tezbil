import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;

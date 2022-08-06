import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Main from "../containers/Main";
import InterestSide from "../containers/InterestSide";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main>
        <InterestSide></InterestSide>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;

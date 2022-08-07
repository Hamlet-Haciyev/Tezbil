import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Main from "../containers/Main";
import InterestSide from "../containers/InterestSide";
import PostSide from "../containers/PostSide";
import TrendingSide from "../containers/TrendingSide";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main>
        <InterestSide></InterestSide>
        <PostSide></PostSide>
        <TrendingSide></TrendingSide>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;

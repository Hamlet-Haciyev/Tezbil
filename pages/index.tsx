import type { NextPage } from "next";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Main from "../containers/Main";
import InterestSide from "../containers/InterestSide";
import PostSide from "../containers/PostSide";
import TrendingSide from "../containers/TrendingSide";
import { fakePostData } from "../store";

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className="app">
      <Header />
      <Main>
        <InterestSide></InterestSide>
        <PostSide posts={posts}></PostSide>
        <TrendingSide></TrendingSide>
      </Main>
      <Footer />
    </div>
  );
};
export const getServerSideProps = async () => {
  const fecthData = await fakePostData;
  return {
    props: {
      posts: fecthData,
    },
  };
};
export default Home;

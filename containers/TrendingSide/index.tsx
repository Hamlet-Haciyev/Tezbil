import {
  TrendingSection,
  TrendingContainer,
  TrendingTags,
} from "./TrendingSideStyled";
import Head from "next/head";
import ContainerTags from "./ContainerTags";
import HeaderTrend from "./HeaderTrend";

const TrendingSide = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
        />
      </Head>
      <TrendingSection>
        <TrendingContainer>
          <TrendingTags>
            <HeaderTrend />
            <ContainerTags />
          </TrendingTags>
        </TrendingContainer>
      </TrendingSection>
    </>
  );
};

export default TrendingSide;

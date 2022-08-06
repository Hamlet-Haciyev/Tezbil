import { MainContainer, MainWrapper } from "./MainStyled";
const Main = ({ children }: any) => {
  return (
    <MainWrapper>
      <MainContainer>{children}</MainContainer>
    </MainWrapper>
  );
};

export default Main;

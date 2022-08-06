import styled from "styled-components";

export const HeaderContainer = styled.header<{}>`
  background-color: #262626;
`;
export const NavbarWrapper = styled.nav<{}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1072px;
  margin: 0 auto;
  height: 50px;
`;
export const Logo = styled.h1<{}>`
  display: flex;
  color: #de1616;
  margin: 0;
`;
export const LeftSide = styled.div``;
export const MiddleSide = styled.div``;
export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileIconContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #393839;
  margin-left: 15px;
  & span {
    width: 100%;
    color: grey;
  }
`;
export const ListGroup = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

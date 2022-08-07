import styled from "styled-components";

interface IProfileContainer {
  width?: number;
  height?: number;
  nav?: boolean;
}
export const ProfileIconContainer = styled.div<IProfileContainer>`
  width: ${(props) => props.width && props.width + "px"};
  height: ${(props) => props.height && props.height + "px"};
  border-radius: 50%;
  background-color: #393839;
  margin-left: ${(props) => props.nav && 15 + "px"};
  & span {
    width: 100%;
    color: grey;
  }
`;

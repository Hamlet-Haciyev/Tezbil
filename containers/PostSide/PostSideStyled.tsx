import styled from "styled-components";

export const PostSection = styled.section`
  width: 570px;
  margin-left: 30px;
`;

// Question Section
export const QuestionWrapper = styled.div`
  background-color: #262626;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15%);
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px 4px 16px;
  & > .quest__top__row {
    display: flex;
    & .add__post {
      display: flex;
      align-items: center;
      border-radius: 20px;
      border: 1px solid #393839;
      background-color: #202020;
      margin-left: 5px;
      width: 100%;
      & > p {
        margin-left: 10px;
        margin-right: 10px;
        color: #8e9092;
      }
    }
  }
  & > .quest__bottom__row {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }
`;
export const QuestionOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 0 10px;
  height: 30px;
  min-width: 30px;
  transition: all 60ms ease-out;
  flex: 1 1 0%;
  &:hover {
    background-color: #2f2f2f;
  }
`;
export const QuestionOptionText = styled.span`
  color: #b1b3b6;
  margin-left: 2px;
  font-size: 13px;
`;

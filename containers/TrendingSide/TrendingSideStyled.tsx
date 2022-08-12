import styled from "styled-components";

export const TrendingSection = styled.section`
  width: 300px;
  margin-left: 30px;
  height: 700px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
`;
export const TrendingContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TrendingTags = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const TrendHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #7c7f85;

  & span {
    transform: rotate(90deg);
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  & span {
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #363737;
    color: #7c7f85;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background: #525353;
      color: black;
    }
  }
`;

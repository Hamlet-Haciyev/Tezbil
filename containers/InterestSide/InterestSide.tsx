import styled from "styled-components";

export const InterestSideContainer = styled.aside`
  width: 162px;
  height: 100%;
  cursor: pointer;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding-bottom: 1.8rem;
`;

export const AddContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background: #1d1d1d;
  color: #b1b3b6;
`;

export const DiscoverSpaces = styled(AddContainer)`
  margin-top: 0.2rem;
`;

const FlexHelper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddIconContainer = styled(FlexHelper)`
  margin-right: 0.5rem;
  border-radius: 5px;
  width: 18px;
  height: 18px;
  background: #262626;
`;

export const AddContainerText = styled.div`
  font-size: 14px;
`;

export const AddedCategoriesContainer = styled(FlexHelper)`
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 0.1rem;
`;

export const AddedCategory = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.2rem;
  padding: 0.5rem;
  gap: 0.5rem;

  &:hover {
    background: #1d1d1d;
  }
`;

export const CotegoryImageContainer = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;

export const AddedCategoryName = styled.div`
  white-space: nowrap;
  color: #b1b3b6;
  font-size: 13px;
`;

export const InterestLine = styled.div`
  width: 100%;
  height: 1px;
  background: #393839;
  margin: 1.6rem 0;
`;

export const WebsiteOwnInfos = styled(FlexHelper)`
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.2rem;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #939598;
    &:hover{
      text-decoration: underline;
    }
    & span {
      white-space: pre-line;
    }
  }
  & span {
    color: #939598;
  }
`;

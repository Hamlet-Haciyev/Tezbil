import { InterestSideContainer, InterestLine } from "./InterestSide";
import ContainerAdd from "./ContainerAdd";
import CategoriesAdded from "./CategoriesAdded";
import OwnWebsiteInfos from "./OwnWebsiteInfos";
import SpacesDiscover from "./SpacesDiscover";

const InterestSide = ({ children }: any) => {
  return (
    <InterestSideContainer>
      <ContainerAdd />
      <CategoriesAdded />
      <SpacesDiscover />
      <InterestLine></InterestLine>
      <OwnWebsiteInfos />
    </InterestSideContainer>
  );
};

export default InterestSide;

import {
  AddIconContainer,
  AddContainerText,
  DiscoverSpaces,
} from "../InterestSide";
import Icon from "../../../helpers/icons";

const SpacesDiscover = () => {
  return (
    <DiscoverSpaces>
      <AddIconContainer>
        <Icon name="Discover" width="14" height="14" />
      </AddIconContainer>
      <AddContainerText>Discover Spaces</AddContainerText>
    </DiscoverSpaces>
  );
};

export default SpacesDiscover;

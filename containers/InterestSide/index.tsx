import {
  InterestSideContainer,
  AddContainer,
  AddIconContainer,
  AddContainerText,
  AddedCategoriesContainer,
  AddedCategory,
  AddedCategoryName,
  CotegoryImageContainer,
  DiscoverSpaces,
  WebsiteOwnInfos,
  InterestLine,
} from "./InterestSide";
import Icon from "../../helpers/icons";
import Image from "next/image";

const InterestSide = ({ children }: any) => {
  return (
    <InterestSideContainer>
      <AddContainer>
        <AddIconContainer>
          <Icon name="Add" width="14" height="14" />
        </AddIconContainer>
        <AddContainerText>Create Space</AddContainerText>
      </AddContainer>
      <AddedCategoriesContainer>
        <AddedCategory>
          <CotegoryImageContainer>
            <Image
              src="/mockCategoryImg1.png"
              alt="Picture of the author"
              width="100%"
              height="100%"
              objectFit="cover"
              className="rounded-full"
            />
          </CotegoryImageContainer>
          <AddedCategoryName>Personality Disorders</AddedCategoryName>
        </AddedCategory>
        <AddedCategory>
          <CotegoryImageContainer>
            <Image
              src="/mockCategoryImg1.png"
              alt="Picture of the author"
              width="100%"
              height="100%"
              objectFit="cover"
              className="rounded-full"
            />
          </CotegoryImageContainer>
          <AddedCategoryName>Personality Disorders</AddedCategoryName>
        </AddedCategory>
        <AddedCategory>
          <CotegoryImageContainer>
            <Image
              src="/mockCategoryImg4.png"
              alt="Picture of the author"
              width="100%"
              height="100%"
              objectFit="cover"
              className="rounded-full"
            />
          </CotegoryImageContainer>
          <AddedCategoryName>Personality Disorders</AddedCategoryName>
        </AddedCategory>
        <AddedCategory>
          <CotegoryImageContainer>
            <Image
              src="/mockCategoryImg3.png"
              alt="Picture of the author"
              width="100%"
              height="100%"
              objectFit="cover"
              className="rounded-full"
            />
          </CotegoryImageContainer>
          <AddedCategoryName>Personality Disorders</AddedCategoryName>
        </AddedCategory>
        <AddedCategory>
          <CotegoryImageContainer>
            <Image
              src="/mockCategoryImg2.png"
              alt="Picture of the author"
              width="100%"
              height="100%"
              objectFit="cover"
              className="rounded-full"
            />
          </CotegoryImageContainer>
          <AddedCategoryName>Personality Disorders</AddedCategoryName>
        </AddedCategory>
        <AddedCategory>
          <CotegoryImageContainer>
            <Image
              src="/mockCategoryImg1.png"
              alt="Picture of the author"
              width="100%"
              height="100%"
              objectFit="cover"
              className="rounded-full"
            />
          </CotegoryImageContainer>
          <AddedCategoryName>Literature</AddedCategoryName>
        </AddedCategory>
        <AddedCategory>
          <CotegoryImageContainer>
            <Image
              src="/mockCategoryImg1.png"
              alt="Picture of the author"
              width="100%"
              height="100%"
              objectFit="cover"
              className="rounded-full"
            />
          </CotegoryImageContainer>
          <AddedCategoryName>Fine Art</AddedCategoryName>
        </AddedCategory>
        <AddedCategory>
          <CotegoryImageContainer>
            <Image
              src="/mockCategoryImg4.png"
              alt="Picture of the author"
              width="100%"
              height="100%"
              objectFit="cover"
              className="rounded-full"
            />
          </CotegoryImageContainer>
          <AddedCategoryName>Personality Disorders</AddedCategoryName>
        </AddedCategory>
        <AddedCategory>
          <CotegoryImageContainer>
            <Image
              src="/mockCategoryImg3.png"
              alt="Picture of the author"
              width="100%"
              height="100%"
              objectFit="cover"
              className="rounded-full"
            />
          </CotegoryImageContainer>
          <AddedCategoryName>Personality Disorders</AddedCategoryName>
        </AddedCategory>
        <AddedCategory>
          <CotegoryImageContainer>
            <Image
              src="/mockCategoryImg2.png"
              alt="Picture of the author"
              width="100%"
              height="100%"
              objectFit="cover"
              className="rounded-full"
            />
          </CotegoryImageContainer>
          <AddedCategoryName>Personality Disorders</AddedCategoryName>
        </AddedCategory>
      </AddedCategoriesContainer>
      <DiscoverSpaces>
        <AddIconContainer>
          <Icon name="Discover" width="14" height="14" />
        </AddIconContainer>
        <AddContainerText>Discover Spaces</AddContainerText>
      </DiscoverSpaces>
      <InterestLine></InterestLine>
      <WebsiteOwnInfos>
        <a href="#!">
          <span>About</span>
        </a>
        <span>·</span>
        <a href="#!">
          <span>Careers</span>
        </a>
        <span>·</span>
        <a href="#!">
          <span>Terms</span>
        </a>
        <span>·</span>
        <a href="#!">
          <span>Privacy</span>
        </a>
        <span>·</span>
        <a href="#!">
          <span>Acceptable Use</span>
        </a>
        <span>·</span>
        <a href="#!">
          <span>Businesses</span>
        </a>
        <span>·</span>
        <a href="#!">
          <span>Press</span>
        </a>
        <span>·</span>
        <a href="#!">
          <span>Your Ad Choices</span>
        </a>
      
      </WebsiteOwnInfos>
    </InterestSideContainer>
  );
};

export default InterestSide;

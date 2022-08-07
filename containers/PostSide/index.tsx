import React from "react";
import {
  PostSection,
  PostContainer,
  QuestionContainer,
} from "./PostSideStyled";
const PostSide = () => {
  return (
    <PostSection>
      <QuestionContainer></QuestionContainer>
      <PostContainer></PostContainer>
    </PostSection>
  );
};

export default PostSide;

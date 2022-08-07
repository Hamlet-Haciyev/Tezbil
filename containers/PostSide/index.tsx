import React from "react";
import {
  PostSection,
  PostContainer,
  QuestionContainer,
  QuestionWrapper,
  QuestionOption,
  QuestionOptionText,
} from "./PostSideStyled";
import { UserOutlined } from "@ant-design/icons";
import { Profile } from "../../components";
import { Avatar } from "antd";
import Icon from "../../helpers/icons";
const PostSide = () => {
  return (
    <PostSection>
      <QuestionWrapper>
        <QuestionContainer>
          <div className="quest__top__row">
            <Profile height={32} width={32}>
              <Avatar size={32} icon={<UserOutlined />}></Avatar>
            </Profile>
            <div className="add__post">
              <p>What do you want to ask or share?</p>
            </div>
          </div>
          <div className="quest__bottom__row">
            <QuestionOption>
              <Icon name="Ask"></Icon>
              <QuestionOptionText>Ask</QuestionOptionText>
            </QuestionOption>
            <QuestionOption>
              <Icon name="QuestAnswer"></Icon>
              <QuestionOptionText>Answer</QuestionOptionText>
            </QuestionOption>
            <QuestionOption>
              <Icon name="Post"></Icon>
              <QuestionOptionText>Post</QuestionOptionText>
            </QuestionOption>
          </div>
        </QuestionContainer>
      </QuestionWrapper>
      <PostContainer></PostContainer>
    </PostSection>
  );
};

export default PostSide;

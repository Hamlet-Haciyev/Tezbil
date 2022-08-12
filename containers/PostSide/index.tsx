import {
  PostSection,
  QuestionContainer,
  QuestionWrapper,
  QuestionOption,
  QuestionOptionText,
} from "./PostSideStyled";
import { Profile } from "../../components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Icon from "../../helpers/icons";
import Post from "../../components/Post";
const PostSide = ({ posts }: any) => {
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
      {posts &&
        posts.map((post: any) => {
          return <Post key={post.id} post={post} />;
        })}
    </PostSection>
  );
};

export default PostSide;

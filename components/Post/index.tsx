import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import {
  PostWrapper,
  PostContainer,
  PostShareWho,
  PostAboutContainer,
  PostStatisticContainer,
  PostOption,
} from "./PostStyled";
import { Profile } from "../";
import Icon from "../../helpers/icons";

const Post = ({ post }: any) => {
  return (
    <PostWrapper>
      <PostContainer>
        <PostShareWho>
          <div className="profile__img">
            <Profile height={32} width={32}>
              <Avatar size={32} icon={<UserOutlined />}></Avatar>
            </Profile>
          </div>
          <div className="profile__info">
            <div className="profile__box">
              <div className="profile__l__side">
                <Link href={"/"}>{post.whoShareName}</Link>
                <span>Follow</span>
              </div>
              <div className="profile__r__side">
                <button>
                  <Icon name="Edit"></Icon>
                </button>
                <button>
                  <Icon name="Close"></Icon>
                </button>
              </div>
            </div>
            <div className="profile__box__pos">
              <small>{post.job}</small>
            </div>
          </div>
        </PostShareWho>
        <PostAboutContainer>
          <div className="post__description">
            <h3 className="post__question">
              <Link href={"/"}>{post.question}</Link>
            </h3>
            <p className="post__text">{post.description}</p>
          </div>
          <Image src="/computer.jfif" width={568} height={369} />
        </PostAboutContainer>
        <PostStatisticContainer>
          <div className="post__statistic">
            <div className="post__statistic__vote">
              <button className="upvote__wrapper">
                <Icon name="UpVote" width="20" height="20"></Icon>
                <small>{post.upvote}K</small>
              </button>
              <button className="downvote__wrapper">
                <Icon name="DownVote" width="20" height="20"></Icon>
              </button>
            </div>
            <div className="post__statistic__share">
              <PostOption mr>
                <Icon name="Share" width="20" height="20"></Icon>
                <span>{post.share}</span>
              </PostOption>
            </div>
            <div className="post__statistic__comment">
              <PostOption>
                <Icon name="Comment" width="20" height="20"></Icon>
                <span>{post.comment}</span>
              </PostOption>
            </div>
          </div>
          <div className="post__share">
            <PostOption>
              <Icon name="SharingOption" width="20" height="20"></Icon>
            </PostOption>
          </div>
        </PostStatisticContainer>
      </PostContainer>
    </PostWrapper>
  );
};

export default Post;

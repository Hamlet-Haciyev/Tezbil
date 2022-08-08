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

const Post = () => {
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
                <Link href={"/"}>Luke Stephens</Link>
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
              <small>
                Digital Marketing & Content Creation (2012–present)Updated 4y
              </small>
            </div>
          </div>
        </PostShareWho>
        <PostAboutContainer>
          <div className="post__description">
            <h3 className="post__question">
              <Link href={"/"}>What can a 10-year-old laptop do?</Link>
            </h3>
            <p className="post__text">
              Heyyy there it’s my first time answering a question on Quora
              please be nice😊 Well I am a software engineering student in an
              African country called Uganda and I think I can answer this. My
              laptop is an old Samsung notebook series
            </p>
          </div>
          <Image src="/computer.jfif" width={568} height={369} />
        </PostAboutContainer>
        <PostStatisticContainer>
          <div className="post__statistic">
            <div className="post__statistic__vote">
              <button className="upvote__wrapper">
                <Icon name="UpVote" width="20" height="20"></Icon>
                <small>2.8K</small>
              </button>
              <button className="downvote__wrapper">
                <Icon name="DownVote" width="20" height="20"></Icon>
              </button>
            </div>
            <div className="post__statistic__share">
              <PostOption mr>
                <Icon name="Share" width="20" height="20"></Icon>
                <span>34</span>
              </PostOption>
            </div>
            <div className="post__statistic__comment">
              <PostOption>
                <Icon name="Comment" width="20" height="20"></Icon>
                <span>50</span>
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

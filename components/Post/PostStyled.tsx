import styled, { css } from "styled-components";
// Post
export const PostWrapper = styled.article`
  padding-top: 16px;
  background-color: #262626;
  border-radius: 5px;
  padding-bottom: 4px;
  margin-bottom: 15px;
`;
export const PostContainer = styled.div``;
export const PostShareWho = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 0 16px;

  & > .profile__info {
    flex: 1 1 auto;
    margin-left: 10px;
    & > .profile__box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 100%;
      & > .profile__l__side {
        display: flex;
        align-items: center;
        a {
          color: #d5d6d6;
          margin-right: 10px;
        }
        span {
          color: #4894fd;
          cursor: pointer;
          font-size: 14px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      & > .profile__r__side {
        position: absolute;
        right: 0;
        button {
          border-radius: 50%;
          transition: all 60ms ease-out;
          height: 38px;
          min-width: 38px;
          border: none;
          outline: none;
          background-color: transparent;
          cursor: pointer;
          padding: 0 6px;
          &:hover {
            background-color: rgba(255, 255, 255, 0.04);
          }
        }
      }
    }
    & > .profile__box__pos small {
      color: #b1b3b6;
    }
  }
`;
export const PostAboutContainer = styled.div`
  .post__description {
    padding: 0 18px;
    .post__question {
      margin-bottom: 4px;
      font-size: 18px;
      a {
        display: inline-block;
        color: #cdcdcd;
        cursor: pointer;
        font-weight: bold;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .post__text {
      color: #cdcdcd;
      cursor: pointer;
      margin-bottom: 8px;
    }
  }
`;
export const PostStatisticContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  .post__statistic {
    display: flex;
    .post__statistic__vote {
      display: flex;
      align-items: center;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.04);
      margin-right: 8px;
      .upvote__wrapper {
        display: flex;
        align-items: center;
        padding: 0px 10px;
        height: 30px;
        transition: all 60ms ease-out;
        border-width: 0px;
        outline: none;
        color: inherit;
        background-color: transparent;
        border-right: 1px solid rgba(255, 255, 255, 0.04);
        cursor: pointer;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        small {
          margin-left: 3px;
          color: rgb(213, 214, 214);
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.04);
        }
      }
      .downvote__wrapper {
        display: flex;
        align-items: center;
        padding: 0px 10px;
        height: 30px;
        transition: all 60ms ease-out;
        border-width: 0px;
        outline: none;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        &:hover {
          background-color: rgba(255, 255, 255, 0.04);
        }
      }
    }
  }
`;
interface IOption {
  mr?: {};
}
export const PostOption = styled.div<IOption>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: all 60ms ease-out;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  padding: 2px 4px;
  ${(props) =>
    props.mr &&
    css`
      margin-right: 8px;
    `}
  cursor: pointer;

  span {
    color: #b1b3b6;
    font-size: 13px;
    margin-left: 5px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }
`;

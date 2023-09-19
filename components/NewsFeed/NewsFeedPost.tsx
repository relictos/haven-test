import type { NextPage } from "next";
import styled from "styled-components";

type NewsFeedPostType = {
  author?: string;
  date?: string;
  content?: string;
  avatar?: string;
  likesCount?: number;
  kudosCount?: number;
  commentsCount?: number;
};

const PostAuthorAvatarIcon = styled.img`
  position: relative;
  border-radius: var(--br-51xl-5);
  width: 48px;
  height: 48px;
  object-fit: cover;
`;
const PostAuthorName = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const PostCommentsCount = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const PostAuthorPublishedDate = styled.div`
  position: relative;
  font-size: var(--number-bold-12-size);
  font-weight: 500;
  color: var(--text-text-lvl-3);
`;
const PostAuthorNameDataContaine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const PostAuthorBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Iconsshare = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
`;
const PostShareButton = styled.div`
  border-radius: var(--br-21xl);
  border: 2px solid var(--border-border-defaul);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const PostTopBar = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const PostText = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
  color: var(--text-text-lvl-2);
`;
const Iconslike = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const PostSupportText = styled.div`
  position: relative;
  font-weight: 600;
`;
const PostSupportButton = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--colors-yellow);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-xl) var(--padding-xs)
    var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const PostKudosCount = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--text-text-lvl-3);
`;
const PostLikesBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  color: var(--text-text-lvl-2);
  font-family: var(--number-bold-12);
`;
const Iconscomment = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const PostCommentsIcon = styled.div`
  border-radius: var(--br-41xl);
  background-color: var(--border-border-defaul);
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: flex-start;
`;
const PostCommentsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: right;
  color: var(--text-text-lvl-2);
  font-family: var(--number-bold-12);
`;
const PostBottomBar = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: var(--number-bold-12-size);
`;
const PostContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const NewsFeedPostRoot = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--bg-block-bg-default);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.02),
    0px -1px 1px rgba(0, 0, 0, 0.04) inset, 0px 1px 0px #fff inset;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xl) var(--padding-5xl) var(--padding-xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--text-14-size);
  color: var(--text-text-lvl-1);
  font-family: var(--title-12);
  align-self: stretch;
`;

const NewsFeedPost: NextPage<NewsFeedPostType> = ({
  author = "Jack Nickelson",
  date = "2 hours ago",
  avatar = "/postauthoravatar@2x.png",
  content = "Bitcoin and Ethereum continue to dominate, while Binance Coin, Solana, and Cardano offer unique features and opportunities...",
  likesCount = 145,
  kudosCount = 24.5,
  commentsCount = 13
}) => {
  return (
    <NewsFeedPostRoot>
      <PostContent>
        <PostTopBar>
          <PostAuthorBlock>
            <PostAuthorAvatarIcon alt="" src={avatar} />
            <PostAuthorNameDataContaine>
              <PostAuthorName>{author}</PostAuthorName>
              <PostAuthorPublishedDate>{date}</PostAuthorPublishedDate>
            </PostAuthorNameDataContaine>
          </PostAuthorBlock>
          <PostShareButton>
            <Iconsshare alt="" src="/iconsshare.svg" />
          </PostShareButton>
        </PostTopBar>
        <PostText>{content}</PostText>
        <PostBottomBar>
          <PostAuthorBlock>
            <PostSupportButton>
              <Iconslike alt="" src="/iconslike.svg" />
              <PostSupportText>Support</PostSupportText>
            </PostSupportButton>
            <PostLikesBlock>
              <PostAuthorName>{likesCount}</PostAuthorName>
              <PostKudosCount>${kudosCount} Kudos</PostKudosCount>
            </PostLikesBlock>
          </PostAuthorBlock>
          <PostCommentsBlock>
            <PostCommentsCount>{commentsCount}</PostCommentsCount>
            <PostCommentsIcon>
              <Iconscomment alt="" src="/iconscomment.svg" />
            </PostCommentsIcon>
          </PostCommentsBlock>
        </PostBottomBar>
      </PostContent>
    </NewsFeedPostRoot>
  );
};

export default NewsFeedPost;

import type { NextPage } from "next";
import MainMenu from "../components/General/MainMenu";
import NewPostBlock from "../components/NewsFeed/NewPostBlock";
import NewsFeedPost from "../components/NewsFeed/NewsFeedPost";
import styled from "styled-components";
import NewsFeedPopularHavens from "../components/NewsFeed/NewsFeedPopularHavens";
import NewsFeedBanner from "../components/NewsFeed/NewsFeedBanner";

const NewsFeedPosts = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const PageLeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  @media screen and (max-width: 960px) {
    flex: unset;
    align-self: stretch;
  }
`;
const PageRightColumnContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const PageRightColumn = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--bg-block-bg-default);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.02),
    0px -1px 1px rgba(0, 0, 0, 0.04) inset, 0px 1px 0px #fff inset;
  width: 280px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    align-self: stretch;
    width: auto;
  }
`;
const PageColumns = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 420px) {
    gap: var(--gap-xs);
    flex-direction: column-reverse;
  }
`;
const PageContent = styled.div`
  align-self: stretch;
  min-height: 100vh;
  background-color: var(--bg-body-bg);
`;
const PageContentContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-xl) 40px;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
  @media screen and (max-width: 420px) {
    padding-left: var(--padding-5xl);
    padding-right: var(--padding-5xl);
    box-sizing: border-box;
  }
`;
const NewsFeedRoot = styled.div`
  position: relative;
  background-color: var(--bg-body-outer-bg);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 160px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-61xl);
    padding-right: var(--padding-61xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 960px) {
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 420px) {
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
  }
`;

const NewsFeedLocofyTest: NextPage = () => {
  return (
    <NewsFeedRoot>
      <PageContent>
        <PageContentContainer>
          <MainMenu />
          <PageColumns>
            <PageLeftColumn>
              <NewPostBlock newPostText="Create a new publication" />
              <NewsFeedPosts>
                <NewsFeedPost 
                  author="Jack Nickelson" 
                  date="2 hours ago" 
                  avatar="/postauthoravatar@2x.png"
                  likesCount={145}
                  kudosCount={23.5}
                  commentsCount={12}
                  content="Bitcoin and Ethereum continue to dominate, while Binance Coin, Solana, and Cardano offer unique features and opportunities..."
                />
                <NewsFeedPost author="Jack Nickelson" date="2 hours ago" />
                <NewsFeedPost author="Jack Nickelson" date="2 hours ago" />
              </NewsFeedPosts>
            </PageLeftColumn>
            <PageRightColumn>
              <PageRightColumnContent>
                <NewsFeedPopularHavens />
                <NewsFeedBanner />
              </PageRightColumnContent>
            </PageRightColumn>
          </PageColumns>
        </PageContentContainer>
      </PageContent>
    </NewsFeedRoot>
  );
};

export default NewsFeedLocofyTest;

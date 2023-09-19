import type { NextPage } from "next";
import { memo } from "react";
import styled from "styled-components";
import HavensSmallListRec from "./HavensSmallListRec";

const RightBlockTitle = styled.div`
  position: relative;
  font-weight: 500;
`;
const Iconsexpand = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ExpandArrow = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--color-whitesmoke-100);
  display: none;
  flex-direction: row;
  padding: var(--padding-7xs);
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;
const RightBlockSpoiler = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HavenSmallRecs = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const HavenSmallRecsBlockRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--text-14-size);
  color: var(--text-text-lvl-3);
  font-family: var(--title-12);
`;

const NewsFeedPopularHavens: NextPage = memo(() => {
  return (
    <HavenSmallRecsBlockRoot>
      <RightBlockSpoiler>
        <RightBlockTitle>Popular Havens</RightBlockTitle>
        <ExpandArrow>
          <Iconsexpand alt="" src="/iconsexpand.svg" />
        </ExpandArrow>
      </RightBlockSpoiler>
      <HavenSmallRecs>
        <HavensSmallListRec
          title="Onomy Protocol"
          subtitle="291 followers"
          showHavensSmallRecUnderline
        />
        <HavensSmallListRec
          title="Onomy Protocol"
          subtitle="291 followers"
          showHavensSmallRecUnderline
        />
        <HavensSmallListRec
          title="Onomy Protocol"
          subtitle="291 followers"
          showHavensSmallRecUnderline
        />
        <HavensSmallListRec
          title="Onomy Protocol"
          subtitle="291 followers"
          showHavensSmallRecUnderline
        />
        <HavensSmallListRec
          title="Onomy Protocol"
          subtitle="291 followers"
          showHavensSmallRecUnderline={false}
        />
      </HavenSmallRecs>
    </HavenSmallRecsBlockRoot>
  );
});

export default NewsFeedPopularHavens;

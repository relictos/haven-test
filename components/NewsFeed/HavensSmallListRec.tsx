import type { NextPage } from "next";
import styled from "styled-components";

type HavensSmallListRecType = {
  title?: string;
  subtitle?: string;
  showHavensSmallRecUnderline?: boolean;
};

const HavensSmallRecImgIcon = styled.img`
  position: relative;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;
const HavensSmallRecTitle = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const HavensSmallRecFollowers = styled.div`
  position: relative;
  font-size: var(--number-bold-12-size);
  font-weight: 500;
  color: var(--text-text-lvl-3);
`;
const HavensSmallRecInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const HavensSmallRecContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const HavensSmallRecUnderline = styled.div`
  align-self: stretch;
  position: relative;
  border-top: 1px solid var(--border-border-defaul);
  box-sizing: border-box;
  height: 1px;
`;
const HavensSmallListRecRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--text-14-size);
  color: var(--text-text-lvl-1);
  font-family: var(--title-12);
  align-self: stretch;
`;

const HavensSmallListRec: NextPage<HavensSmallListRecType> = ({
  title = "Onomy Protocol",
  subtitle = "291 followers",
  showHavensSmallRecUnderline,
}) => {
  return (
    <HavensSmallListRecRoot>
      <HavensSmallRecContent>
        <HavensSmallRecImgIcon alt="" src="/havenssmallrecimg@2x.png" />
        <HavensSmallRecInfo>
          <HavensSmallRecTitle>{title}</HavensSmallRecTitle>
          <HavensSmallRecFollowers>{subtitle}</HavensSmallRecFollowers>
        </HavensSmallRecInfo>
      </HavensSmallRecContent>
      {showHavensSmallRecUnderline && <HavensSmallRecUnderline />}
    </HavensSmallListRecRoot>
  );
};

export default HavensSmallListRec;

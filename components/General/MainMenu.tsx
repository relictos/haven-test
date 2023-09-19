import type { NextPage } from "next";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const HavenLogoIcon = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xl);
  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const Iconsmenu = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const MenuMobileButton = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--border-border-defaul);
  width: 40px;
  display: none;
  flex-direction: row;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    display: flex;
  }
  @media screen and (max-width: 420px) {
    display: flex;
  }
`;
const MenuUserAvatarPicIcon = styled.img`
  position: relative;
  border-radius: var(--br-51xl-5);
  width: 40px;
  height: 40px;
  object-fit: cover;
  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const MenuContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const MenuUnderline = styled.div`
  align-self: stretch;
  position: relative;
  border-top: 1px solid var(--border-border-darker);
  box-sizing: border-box;
  height: 1px;
`;
const MainMenuBlockRoot = styled.div`
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

const MainMenu: NextPage = () => {
  return (
    <MainMenuBlockRoot>
      <MenuContainer>
        <HavenLogoIcon alt="" src="/group-2-100.svg" />
        <MenuList>
          <MenuItem title="News Feed" />
          <MenuItem title="Havens" />
          <MenuItem title="Friends" />
          <MenuItem title="Settings" />
        </MenuList>
        <MenuMobileButton>
          <Iconsmenu alt="" src="/menu.svg" />
        </MenuMobileButton>
        <MenuUserAvatarPicIcon alt="" src="/menuuseravatarpic@2x.png" />
      </MenuContainer>
      <MenuUnderline />
    </MainMenuBlockRoot>
  );
};

export default MainMenu;

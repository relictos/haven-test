import type { NextPage } from "next";
import { memo, type CSSProperties } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type MenuItemType = {
  /** Style props */
  active?: CSSProperties["color"];
};

const MenuItemRoot = styled.div<{ active?: Property.Color }>`
  position: relative;
  font-size: var(--text-14-size);
  text-transform: capitalize;
  font-weight: 600;
  font-family: var(--title-12);
  color: var(--text-text-lvl-3);
  text-align: left;
  color: ${(p) => p.active};
`;

const MenuItem: NextPage<MenuItemType> = memo(({ active }) => {
  return <MenuItemRoot active={active}>News Feed</MenuItemRoot>;
});

export default MenuItem;

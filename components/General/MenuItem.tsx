import type { NextPage } from "next";
import { memo, type CSSProperties } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type MenuItemType = {
  /** Style props */
  title?: string;
};

const MenuItemRoot = styled.div`
  position: relative;
  font-size: var(--text-14-size);
  text-transform: capitalize;
  font-weight: 600;
  font-family: var(--title-12);
  color: var(--text-text-lvl-3);
  text-align: left;
  color: --text-text-lvl-2;
`;

const MenuItem: NextPage<MenuItemType> = ({
  title = "News Feed" 
}) => {
  return <MenuItemRoot>{title}</MenuItemRoot>;
};

export default MenuItem;

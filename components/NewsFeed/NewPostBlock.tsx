import type { NextPage } from "next";
import { memo } from "react";
import styled from "styled-components";

type NewPostBlockType = {
  newPostText?: string;
};

const NewPostText = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  opacity: 0.8;
`;
const NewPostSendButtonIcon = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
`;
const NewPostBlockRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--border-border-defaul);
  display: flex;
  flex-direction: row;
  padding: var(--padding-base);
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: var(--text-14-size);
  color: var(--text-text-lvl-3);
  font-family: var(--title-12);
`;

const NewPostBlock: NextPage<NewPostBlockType> = memo(
  ({ newPostText = "Create a new publication" }) => {
    return (
      <NewPostBlockRoot>
        <NewPostText>{newPostText}</NewPostText>
        <NewPostSendButtonIcon alt="" src="/newpostsendbutton.svg" />
      </NewPostBlockRoot>
    );
  }
);

export default NewPostBlock;

import type { NextPage } from "next";
import styled from "styled-components";

type ButtonPrimaryType = {
  text?: string;
};

const ButtonText = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const ButtonPrimaryRoot = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--colors-primary-blue);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1),
    0px -1px 1px rgba(0, 0, 0, 0.2) inset,
    0px 1px 1px rgba(255, 255, 255, 0.2) inset;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-5xl);
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--text-14-size);
  color: var(--bg-block-bg-default);
  font-family: var(--title-12);
`;

const ButtonPrimary: NextPage<ButtonPrimaryType> = ({
  text = "Create Haven",
}) => {
  return (
    <ButtonPrimaryRoot>
      <ButtonText>{text}</ButtonText>
    </ButtonPrimaryRoot>
  );
};

export default ButtonPrimary;

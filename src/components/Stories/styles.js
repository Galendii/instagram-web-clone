import styled, { css } from "styled-components";

import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 99%;
  height: 86px;
  border: 1px solid var(--light-gray);
  border-radius: 3px;
  padding: 16px 0;

  background: var(--primary);
`;

export const ScrollBar = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const AvatarHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 7px;
  width: 94px;
  height: 100%;
  > span {
    margin-top: 4px;
    text-align: center;
    font-size: 12px;
    color: var(--dark);
  }
`;
export const Avatar = styled.div`
  margin: 0 auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--stories);
  background: #dedede;

  &.best {
    border-color: var(--besties);
  }
`;

const iconCss = css`
  position: absolute;
  top: 35px;

  width: 35px;
  height: 35px;
  fill: var(--primary);
  z-index: 6;
  border-radius: 50%;
  cursor: pointer;
`;

// Icons
export const ArrowBack = styled(IoMdArrowDropleftCircle)`
  ${iconCss}
  left: 0;
`;
export const ArrowNext = styled(IoMdArrowDroprightCircle)`
  ${iconCss}
  right: 0;
`;

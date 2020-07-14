import styled, { css } from "styled-components";
import { MdSearch, MdCancel, MdHome } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import {
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineHome,
} from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  background: var(--primary);
`;
export const ContentHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 36px;
  max-width: 935px;
  padding: 0 20px;
  margin: 0 auto;
`;
export const LogoHolder = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  text-align: center;
`;
export const SearchHolder = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    position: relative;
    align-items: center;
    width: 211px;
    padding: 7px;
    border: 1px solid var(--light-gray);
    background: var(--secondary);
    border-radius: 3px;

    &:focus-within {
      > svg {
        left: 7px;
      }
      svg:last-child {
        display: inline;
      }
    }
  }
`;
export const SearchInput = styled.input`
  width: 180px;
  border: none;
  outline: 0;
  font-size: 14px;
  background: var(--secondary);

  &::placeholder {
    font-size: 12px;
    text-align: center;
  }
  &:focus {
    &::placeholder {
      text-align: left;
    }
    padding-left: 18px;
  }
`;
export const IconsHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 66%;
  height: 100%;
  min-width: 225px;
  @media (min-width: 500px) {
    width: calc(66% - 225px);
  }
`;
export const Icons = styled.div`
  max-width: 246px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const NotificationHolder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Notification = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--red);
  position: absolute;
  right: 12px;
  bottom: -9px;
  display: none;
  &.active {
    display: inline;
  }
`;
export const Avatar = styled.div``;

// Icons
const iconCss = css`
  width: 29px;
  height: 29px;
  fill: rgb(38, 38, 38);
`;

export const SearchIcon = styled(MdSearch)`
  width: 14px;
  height: 14px;
  fill: var(--gray);
  position: absolute;
  left: 53px;
`;
export const CloseIcon = styled(MdCancel)`
  width: 14px;
  height: 14px;
  fill: var(--gray);
  display: none;
`;
export const HomeIcon = styled(AiOutlineHome)`
  ${iconCss}
`;
export const DirectIcon = styled(FiSend)`
  ${iconCss}
`;
export const CompassIcon = styled(AiOutlineCompass)`
  ${iconCss}
`;
export const HeartIcon = styled(AiOutlineHeart)`
  ${iconCss}
`;

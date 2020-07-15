import styled, { css } from "styled-components";

import { BsThreeDots, BsChat, BsBookmark } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
export const Container = styled.div`
  border: 1px solid var(--light-gray);
  display: flex;
  flex-direction: column;
  margin: 40px 10px 40px 10px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  height: 60px;
  position: relative;
`;
export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  background: var(--gray);
  margin-right: 20px;
`;
export const TextHolder = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 14px;
    font-weight: bold;
  }
  > span:last-child {
    font-size: 12px;
    font-weight: normal;
  }
`;
export const ImageHolder = styled.div`
  height: 400px;
  width: 100%;
  background: var(--light-gray);
`;
export const Reactions = styled.div`
  padding: 8px 8px;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    padding: 0 10px 0 10px;
  }

  svg:last-child {
    position: absolute;
    top: 8px;
    right: 20px;
  }
`;
export const LikesHolder = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 10px;
`;
export const SmallAvatar = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background: var(--gray);
  margin-right: 10px;
`;
export const Comments = styled.div`
  padding: 0px 4px 10px 10px;
`;
export const Description = styled.div`
  > strong {
    margin-right: 4px;
  }

  > span {
    cursor: pointer;
    color: var(--gray);
  }
`;
export const AllComments = styled.div`
  padding: 4px 0px 2px 0px;
  color: gray;
  cursor: pointer;
`;
export const UserComment = styled.div`
  > strong {
    margin-right: 4px;
  }
  position: relative;
  padding: 3px 24px 3px 0px;
`;

// Icons

const iconCss = css`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DotsIcon = styled(BsThreeDots)`
  ${iconCss}
  position: absolute;
  right: 30px;
  top: 29px;
`;
export const LikeIcon = styled(AiOutlineHeart)`
  ${iconCss}
`;
export const ChatIcon = styled(BsChat)`
  ${iconCss}
`;
export const DirectIcon = styled(FiSend)`
  ${iconCss}
`;
export const SaveIcon = styled(BsBookmark)`
  ${iconCss}
`;
export const SmallLikeIcon = styled(AiOutlineHeart)`
  width: 16px;
  height: 16px;
  color: var(--gray);
  cursor: pointer;
  text-align: right;
  position: absolute;
  right: 8px;
  top: 4px;
`;

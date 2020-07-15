import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media (min-width: 1000px) {
    position: fixed;
    right: 230px;
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    width: 300px;

    background: transparent;
    height: 500px;
    padding-left: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px 8px 0px;
`;

export const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--stories);
  background: #dedede;

  &.best {
    border-color: var(--besties);
  }
`;
export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 10px;
  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;
export const SuggestionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px 4px 0px;
  > span:first-child {
    color: var(--gray);
  }
  > span:last-child {
    font-size: 12px;
  }
`;

export const Suggestions = styled.div``;

export const Footer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 300px;
  font-size: 12px;

  span {
    color: var(--gray);
  }

  > span:first-child {
    padding-bottom: 30px;
  }
`;

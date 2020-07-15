import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
  margin-right: 10px;
`;
export const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    font-size: 12px;
    color: var(--gray);
  }
`;
export const Follow = styled.span`
  font-size: 14px;
  color: var(--blue);
  margin-left: 20px;
  cursor: pointer;
`;

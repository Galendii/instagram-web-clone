import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 40px;
  @media (min-width: 1000px) {
    width: 60%;
  }
`;

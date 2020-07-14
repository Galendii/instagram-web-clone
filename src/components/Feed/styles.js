import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  /* border: 1px solid black; */
  @media (min-width: 1000px) {
    width: 60%;
  }
`;

import React from "react";
import { Container } from "./styles";
import Feed from "../Feed";
import RightMenu from "../RightMenu";

export default function Body() {
  return (
    <Container>
      <Feed />
      <RightMenu />
    </Container>
  );
}

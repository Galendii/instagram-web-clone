import React from "react";
import { Container } from "./styles";
import TopBar from "../TopBar";
import Body from "../Body";

export default function Layout() {
  return (
    <Container>
      <TopBar />
      <Body />
    </Container>
  );
}

import React from "react";
import { Container } from "./styles";
import Stories from "../Stories";
import ContentList from "../ContentList";

export default function Feed() {
  return (
    <Container>
      <Stories />
      <ContentList />
    </Container>
  );
}

import React from "react";
import { Container, Avatar, TextHolder, Follow } from "./styles";

export default function SuggestionItem() {
  return (
    <Container>
      <Avatar />
      <TextHolder>
        <strong>username</strong>
        <span>Seguido por username + mais 17 pessoas</span>
      </TextHolder>
      <Follow>Seguir</Follow>
    </Container>
  );
}

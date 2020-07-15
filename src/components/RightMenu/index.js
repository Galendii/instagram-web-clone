import React from "react";
import {
  Container,
  Profile,
  ProfileText,
  SuggestionTitle,
  Suggestions,
  Avatar,
  Footer,
} from "./styles";
import SuggestionItem from "../SuggestionItem";

export default function RightMenu() {
  return (
    <Container>
      <Profile>
        <Avatar />
        <ProfileText>
          <strong>Username</strong>
          <span>Username Last Name</span>
        </ProfileText>
      </Profile>
      <SuggestionTitle>
        <span>Sugestões para você</span>
        <span>Ver tudo</span>
      </SuggestionTitle>
      <Suggestions>
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
      </Suggestions>
      <Footer>
        <span>
          Sobre - Ajuda - Imprensa - API - Carreiras - Privacidade - Termos -
          Localizações - Contas mais relevantes - Hashtags - Idioma
        </span>
        <span>© 2020 BRENO ZIELINSKI GALENDI</span>
      </Footer>
    </Container>
  );
}

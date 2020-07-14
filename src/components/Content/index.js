import React from "react";
import {
  Container,
  Header,
  Avatar,
  TextHolder,
  DotsIcon,
  ImageHolder,
  Reactions,
  LikeIcon,
  ChatIcon,
  DirectIcon,
  SaveIcon,
  LikesHolder,
  SmallAvatar,
  Comments,
  Description,
  AllComments,
  UserComment,
  SmallLikeIcon,
} from "./styles";

export default function Content() {
  return (
    <Container>
      <Header>
        <Avatar />
        <TextHolder>
          <span>Username</span>
          <span>Place</span>
        </TextHolder>
        <DotsIcon />
      </Header>
      <ImageHolder />
      <Reactions>
        <LikeIcon />
        <ChatIcon />
        <DirectIcon />
        <SaveIcon />
      </Reactions>
      <LikesHolder>
        <SmallAvatar />
        <span>
          Curtido por <strong>Username</strong> e{" "}
          <strong>outras 60 pessoas</strong>
        </span>
      </LikesHolder>
      <Comments>
        <Description>
          <strong>username</strong> Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. <span>mais</span>
        </Description>
        <AllComments>Ver todos os 30 comentários</AllComments>
        <UserComment>
          <strong>username</strong>Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr! <SmallLikeIcon />
        </UserComment>
        <UserComment>
          <strong>username</strong>Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. <SmallLikeIcon />
        </UserComment>
      </Comments>
    </Container>
  );
}

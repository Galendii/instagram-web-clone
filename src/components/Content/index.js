import React, { useEffect, useState } from "react";
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
  const [shrink, setShrink] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [smallDesc, setSmallDesc] = useState("");
  const description = `Lorem ipsum dolor sit amet, consetetur
  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
  et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
  takimata sanctus est Lorem ipsum dolor sit amet.`;

  const descriptionShow = () => {
    if (description.length > 180) {
      setSmallDesc(description.substr(0, 180) + "...");
      setShrink(true);
    }
  };

  useEffect(() => {
    descriptionShow();
  });

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
        <Description className="description">
          <strong>username</strong>
          {shrink ? smallDesc : description}
          <span onClick={() => setShrink(!shrink)}>
            {shrink ? " mais" : " menos"}
          </span>
        </Description>
        <AllComments onClick={() => setShowComments(!showComments)}>
          {!showComments ? "Ver todos os comentários" : "Ocultar comentários"}
        </AllComments>
        <UserComment>
          <strong>username</strong>Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr! <SmallLikeIcon />
        </UserComment>
        <UserComment>
          <strong>username</strong>Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. <SmallLikeIcon />
        </UserComment>
        {showComments && (
          <>
            <UserComment>
              <strong>username</strong>Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.{" "}
              <SmallLikeIcon />
            </UserComment>
            <UserComment>
              <strong>username</strong>Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.{" "}
              <SmallLikeIcon />
            </UserComment>
            <UserComment>
              <strong>username</strong>Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.{" "}
              <SmallLikeIcon />
            </UserComment>
          </>
        )}
      </Comments>
    </Container>
  );
}

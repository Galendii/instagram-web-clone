import React, { useState, useEffect } from "react";
import {
  Container,
  AvatarHolder,
  Avatar,
  ArrowBack,
  ArrowNext,
  ScrollBar,
} from "./styles";

import $ from "jquery";

export default function Stories() {
  const [scroll, setScroll] = useState(0);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const handleScroll = () => {
    setScroll(document.getElementById("story").scrollLeft);
  };

  const scrollBack = () => {
    $("#story").animate({ scrollLeft: scroll - $("#story").width() }, 1000);
  };
  const scrollNext = () => {
    $("#story").animate({ scrollLeft: scroll + $("#story").width() }, 1000);
  };
  useEffect(() => {
    setScrollBarWidth(
      Math.trunc(
        document.getElementById("story").scrollWidth - $("#story").width()
      )
    );
    console.log(scrollBarWidth);
  }, []);
  useEffect(() => {
    console.log(scroll);
  }, [scroll]);
  return (
    <Container id="container" onScroll={handleScroll}>
      {scroll !== 0 && <ArrowBack onClick={scrollBack} />}
      {console.log(scrollBarWidth)}
      <ScrollBar id="story">
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar className="best" />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
        <AvatarHolder>
          <Avatar />
          <span>Username</span>
        </AvatarHolder>
      </ScrollBar>
      {scroll < scrollBarWidth && <ArrowNext onClick={scrollNext} />}
    </Container>
  );
}

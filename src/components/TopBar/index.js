import React from "react";
import {
  Container,
  ContentHolder,
  LogoHolder,
  SearchHolder,
  SearchIcon,
  CloseIcon,
  SearchInput,
  IconsHolder,
  Icons,
  HomeIcon,
  NotificationHolder,
  DirectIcon,
  Notification,
  CompassIcon,
  HeartIcon,
  Avatar,
} from "./styles";

export default function TopBar() {
  return (
    <Container>
      <ContentHolder>
        <LogoHolder>
          <img
            src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="logo"
          />
        </LogoHolder>
        <SearchHolder>
          <SearchIcon />
          <SearchInput placeholder="Pesquisar" />
          <CloseIcon />
        </SearchHolder>
        <IconsHolder>
          <Icons>
            <NotificationHolder>
              <HomeIcon />
              <Notification className="active" />
            </NotificationHolder>
            <NotificationHolder>
              <DirectIcon />
              <Notification />
            </NotificationHolder>
            <NotificationHolder>
              <CompassIcon />
              <Notification />
            </NotificationHolder>
            <NotificationHolder>
              <HeartIcon />
              <Notification />
            </NotificationHolder>

            <Avatar />
          </Icons>
        </IconsHolder>
      </ContentHolder>
    </Container>
  );
}

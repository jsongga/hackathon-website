import React from 'react';
import styled from "styled-components";
import logo from "./uncolored.png";
import name from "./logotext.png";
import center from "./colored.png";
import Grid2 from "@mui/material/Unstable_Grid2";
import {AppBar, Box, Container, Toolbar} from "@mui/material";
import {FaDiscord, FaHandshake, FaInstagram, FaQuestion, FaScroll} from "react-icons/fa";
import {HiOutlineClipboardDocumentCheck} from "react-icons/hi2";
import {Application} from "pixi.js";
import LandingBackground from "./LandingBackground";
import {Link, Outlet} from "react-router-dom";

function Main() {

  const app = new Application()


  return (
    <AppContainer direction={"column"} flexWrap={"nowrap"} container height={"100%"}>
      {/*<Grid2>*/}
      {/*  <OutletContainer flexGrow={1}>*/}
          <Outlet />
      {/*  </OutletContainer>*/}

      {/*</Grid2>*/}
      <Nav>
        <Link to={"/"}>
          <NavImageBigger src={logo}  alt={"Hackathon Logo"}/>
        </Link>
        <Link to={"/"}>
          <NavImage src={name}  alt={"Hackathon ATL"}/>
        </Link>
      </Nav>
      <SocialMediaContainer>
        <SocialMedia>
          <FaInstagram />
          <SocialMediaLabel>Instagram</SocialMediaLabel>
        </SocialMedia>
        <SocialMedia>
          <FaDiscord />
          <SocialMediaLabel>Discord</SocialMediaLabel>
        </SocialMedia>
      </SocialMediaContainer>
    </AppContainer>
  );
}

export default Main;

const AppContainer = styled(Grid2)`
  width: 100vw;
  height: unset !important;
  min-height: 100vh;
  background: rgb(60,61,66);
  background: radial-gradient(circle at top, rgba(60,61,66,1) 0%, rgba(26,26,31,1) 50%);
  position: absolute;
  z-index: -2;
  
  & > div {
    z-index: 0;
  }
`
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem;
  position: absolute;
  width: calc(100% - 6rem);
  //z-index: 10;
  top: 0;
`
const NavImageBigger = styled.img`
  height: 2.8rem;
  cursor: pointer;
  
  &:hover {
    animation: rotate 2s ease infinite ;
  }
  
  @keyframes rotate {
    from {transform: rotate(0deg);}
    to {
      transform: rotate(360deg) scale(120%);
    }
  }
`
const NavImage = styled.img`
  height: 1.1rem;
  cursor: pointer;
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;
  
  &:hover {
    animation: shimmer 2s infinite linear;
  }

  @keyframes shimmer {
    100% {
      -webkit-mask-position: left
    }
  }

  //.img::before {
  //  left: -6px;
  //  animation: glitch-effect 2s infinite linear alternate-reverse;
  //  background-image: url(https://rawcdn.githack.com/Kerthin/links/247cc9065bac7d5c23b45ff677bf1d2bceeb4324/img/glitch/imgTV/vanille.png);
  //  filter: grayscale(100%) sepia(100%) saturate(250%) hue-rotate(120deg) brightness(121%) contrast(121%);
  //}
  //.img::after {
  //  left: 6px;
  //  animation: glitch-effect 3s infinite linear alternate-reverse;
  //  background-image: url(https://rawcdn.githack.com/Kerthin/links/247cc9065bac7d5c23b45ff677bf1d2bceeb4324/img/glitch/imgTV/vanille.png);
  //  filter: grayscale(100%) sepia(100%) saturate(250%) hue-rotate(240deg) brightness(121%) contrast(121%);
  //}
`



const SocialMediaContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  
  & > svg{
    padding: 0.5rem;
    cursor: pointer;
  }
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > p {
    opacity: 0;
    transform: translateX(-20%);
    transition: 0.5s ease;
  }
  &:hover > p {
    opacity: 1;
    transform: translateX(0);
  }
`

const SocialMediaLabel = styled.p`
  font-size: 0.5em;
  padding: 3px;
  border-radius: 2px;
  margin-left: 1em;
  background: rgba(255, 255, 255, 0.24);
`

const OutletContainer = styled(Grid2)`
  display: flex;
  //align-items: center;
  justify-content: center;
  height: 100%;
`
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
    <AppContainer direction={"column"} flexWrap={"nowrap"} container>
      <Grid2>
        <OutletContainer flexGrow={1}>
          <Outlet />
        </OutletContainer>
        <Nav>
          <Link to={"/"}>
            <NavImageBigger src={logo}  alt={"Hackathon Logo"}/>
          </Link>
          <Link to={"/"}>
          <NavImage src={name}  alt={"Hackathon ATL"}/>
          </Link>
        </Nav>
      </Grid2>
      <SocialMedia>
        <FaInstagram />
        <FaDiscord />
      </SocialMedia>
    </AppContainer>
  );
}

export default Main;

const AppContainer = styled(Grid2)`
  width: 100vw;
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
`
const NavImage = styled.img`
  height: 1.1rem;
  cursor: pointer;
`



const SocialMedia = styled.div`
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

const OutletContainer = styled(Grid2)`
  display: flex;
  //align-items: center;
  justify-content: center;
  height: 100%;
`
import React from 'react';
import styled from "styled-components";
import logo from "./uncolored.png";
import name from "./logotext.png";
import center from "./colored.png";
import Grid2 from "@mui/material/Unstable_Grid2";
import {AppBar, Box, Container, Toolbar} from "@mui/material";
import {FaDiscord, FaHandshake, FaInstagram, FaQuestion, FaScroll} from "react-icons/fa";
import {HiOutlineClipboardDocumentCheck} from "react-icons/hi2";

function App() {
  return (
    <AppContainer direction={"column"} flexWrap={"nowrap"} container>
      <Grid2>
        <Nav>
          {/*<Grid2 xs={2}>*/}
            <NavImageBigger src={logo}  alt={"Hackathon Logo"}/>
          {/*</Grid2>*/}
          {/*<Grid2 flexGrow />*/}
          {/*<Grid2 xs={2}>*/}
            <NavImage src={name}  alt={"Hackathon ATL"}/>
          {/*</Grid2>*/}
        </Nav>
      </Grid2>
      <Grid2 flexGrow={1}>
          <MainContentInner>
            <MainContent maxWidth="md">

            <Grid2 container>
              <Grid2 xs={6} display={"flex"} alignItems={"center"}>
                <MainImage src={center}  alt={"Center NavImage"}/>
              </Grid2>
              <Grid2 xs={6} container direction={"column"} justifyContent="space-between">
                <MainButtons>
                  <HiOutlineClipboardDocumentCheck />
                  Register
                </MainButtons>
                <MainButtons style={{marginLeft: "2em"}}>
                  <FaScroll />
                  Rules
                </MainButtons>
                <MainButtons style={{marginLeft: "2em"}}>
                  <FaQuestion />
                  FAQ
                </MainButtons>
                <MainButtons>
                  <FaHandshake />
                  Organizers
                </MainButtons>
              </Grid2>
          </Grid2>
            </MainContent>

          </MainContentInner>
      </Grid2>

      <Grid2>

        <BottomContent>
          <BottomText>Our Theme: Cybersecurity</BottomText>
          <BottomText>April 22-23, 2023</BottomText>
        </BottomContent>

      </Grid2>

      {/*<BottomContent>*/}
      {/*  <BottomText>Our Theme: Cybersecurity</BottomText>*/}
      {/*  <BottomText>April, 22-23, 2023</BottomText>*/}


      {/*</BottomContent>*/}
      <SocialMedia>
        <FaInstagram />
        <FaDiscord />
      </SocialMedia>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled(Grid2)`
  width: 100vw;
  height: 100vh;
  background: rgb(60,61,66);
  background: radial-gradient(circle at top, rgba(60,61,66,1) 0%, rgba(26,26,31,1) 100%);
  
  //font-size: 1vh;
`
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  //width: 100%;
`
const NavImageBigger = styled.img`
  height: 2.5rem;
  cursor: pointer;
`
const NavImage = styled.img`
  height: 1.1rem;
  cursor: pointer;
`

const MainImage = styled.img`
  max-height: 20rem;
  display: block;
  margin-left: auto;
  cursor: pointer;
  
  &:hover {
    animation: MoveUpDown 1.5s ease-in-out infinite;
  }

  @keyframes MoveUpDown {
    0%, 100% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-5%);
    }
  }
`

const MainContent = styled(Container)`
  height: auto;
`
const MainContentInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around ;
  align-items: center;
`
const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`
const BottomText = styled.h1`
  color: white;
  text-align: center;
`


const MainButtons = styled.div`
  border: 2px solid #46474B;
  font-size: 1.6rem;
  padding: 0.8rem;
  margin: 1rem;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  width: 16rem;
  display: flex;
  align-items: center;
  gap: 1em;
  
  &:hover {
    border-color: #90EECF;
    color: #90EECF;
    transform: translateX(0.5rem);
  }
  
  & > svg {
    border: 2px solid white;
    border-radius: 50%;
    font-size: 1em;
    padding: 0.3em;
  }
  
  &:hover > svg {
    border: 2px solid #90EECF;

  }
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
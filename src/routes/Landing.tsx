import React, {Fragment, useEffect} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import center from "../colored.png";
import {HiOutlineClipboardDocumentCheck} from "react-icons/hi2";
import {FaHandshake, FaQuestion, FaScroll} from "react-icons/fa";
import styled from "styled-components";
import {Container} from "@mui/material";
import staticImage from "../static.png";
import {Link} from "react-router-dom";
import LandingBackground from "../LandingBackground";

export default function Landing() {

  useEffect(() => {
    function generateRandomString() {
      let string = ""

      for (let i=0; i<10; i++) {
        string += String.fromCharCode(0x30A0 + Math.random() * (0x30FF - 0x30A0 + 1));
      }

      return string;
    }

    const intervalId = window.setInterval(function(){
      let element = document.getElementById("theme")
      if (!element) return;

      element.innerText = "Our Theme: " + generateRandomString()
    }, 100);

    return () => {
      clearInterval(intervalId)
    }
  })

  return <LandingContainer direction={"column"} flexWrap={"nowrap"} container>
    <LandingBackground />
    <StaticImage src={staticImage} />
    <Grid2 flexGrow={1}>
      <MainContentInner>
        <MainContent maxWidth="md">

          <Grid2 container>
            <Grid2 xs={12} md={6} display={"flex"} alignItems={"center"}>
              <MainImage src={center}  alt={"Center NavImage"} id={"center-image"}/>
            </Grid2>
            <Grid2 xs={12} md={6} container direction={"column"} justifyContent="space-between">
              <Link to={"/signup"}>
                <MainButtons>
                  <HiOutlineClipboardDocumentCheck />
                  Register
                </MainButtons>
              </Link>
              <Link to={"/rules"}>
                <MainButtons style={{marginLeft: "2em"}}>
                  <FaScroll />
                  Rules
                </MainButtons>
              </Link>
              <Link to={"/faq"}>
                <MainButtons style={{marginLeft: "2em"}}>
                  <FaQuestion />
                  FAQ
                </MainButtons>
              </Link>
              <Link to={"/organizers"}>
                <MainButtons>
                  <FaHandshake />
                  Organizers
                </MainButtons>
              </Link>
            </Grid2>
          </Grid2>
        </MainContent>

      </MainContentInner>
    </Grid2>

    <Grid2 flexGrow={0}>

      <BottomContent>
        <BottomText id={"theme"}>Our Theme: Cybersecurity</BottomText>
        <BottomText>April 22-23, 2023</BottomText>
      </BottomContent>

    </Grid2>
  </LandingContainer>
}

const LandingContainer = styled(Grid2)`
  height: 100%;
`

const MainImage = styled.img`
  width: 80%;
  max-width: 50vw;
  //max-height: 20rem;
  //aspect-ratio: 1/1;
  //display: block;
  margin: 0 20% 0 0%;
  //margin-left: auto;
  //margin-right: 10rem;
  cursor: pointer;
  animation: MoveUpDown 2s ease-in-out infinite;

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
  flex-direction: column;
  margin-top: 14rem;
  //justify-content: space-around ;
  align-items: center;
  
`
const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  //margin-bottom: 2rem;
  margin-top: 7rem;
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

const StaticImage = styled.img`
  position: absolute;
  width: 0.8rem;
  bottom: 3rem;
  right: 3rem;
`
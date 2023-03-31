import React, {useEffect} from 'react';
import styled from "styled-components";
import logo from "./uncolored.png";
import name from "./logotext.png";
import Grid2 from "@mui/material/Unstable_Grid2";
import {FaDiscord, FaInstagram} from "react-icons/fa";
import {Link, Outlet} from "react-router-dom";

function Main() {

    useEffect(() => {
        // Pad strings with zeros to make them two digits
        function pad(n: number) {
            return n < 10 ? "0" + n : n;
        }

        // Returns the dd:hh:mm:ss until the date and time
        function getTimeTillDate() {
            const d = new Date("April 25 2023 10:00:00");
            const now = new Date();
            const diff = d.getTime() / 1000 - now.getTime() / 1000;
            const days = Math.floor(diff / 86400);
            const hours = Math.floor(diff % 86400 / 3600);
            const minutes = Math.floor(diff % 86400 % 3600 / 60);
            const seconds = Math.floor(diff % 86400 % 3600 % 60);
            const val = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);

            const element = document.getElementById("countdown");

            if (!element) return;
            element.innerText = val;
        }

        const intervalId = window.setInterval(function(){
            getTimeTillDate();

        }, 1000);

        return () => {
          clearInterval(intervalId)
        }
    }, [])

  return (
    <AppContainer direction={"column"} flexWrap={"nowrap"} container height={"100%"}>
      {/*<Grid2>*/}
      {/*  <OutletContainer flexGrow={1}>*/}
      {/*  </OutletContainer>*/}
        <Outlet />

      {/*</Grid2>*/}
      <Nav>
        <StyledLink to={"/"}>
          <NavImageBigger src={logo}  alt={"Hackathon Logo"}/>
        </StyledLink>
        <StyledLink to={"/"}>
          <NavImage src={name}  alt={"Hackathon ATL"}/>
            <InfoContainer>
                <Info>April 25-27, 2023</Info>
                <Info id={"countdown"}>10:39:33:28</Info>
            </InfoContainer>
        </StyledLink>
      </Nav>
      <SocialMediaContainer>
        <SocialMedia onClick={() => window.open("https://www.instagram.com/hackathonatlanta/")}>
          <FaInstagram />
          <SocialMediaLabel>Instagram</SocialMediaLabel>
        </SocialMedia>
        <SocialMedia onClick={() => window.open("https://discord.gg/M8eEEQEZkq")}>
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

  // height: unset !important;
  min-height: 100vh;
  background: rgb(60,61,66);
  background: radial-gradient(circle at top, rgba(60,61,66,1) 0%, rgba(26,26,31,1) 50%);
  //position: absolute;
  z-index: -2;
  overflow: hidden;
  & > div {
    z-index: 0;
  }
`
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  //align-items: center;
  margin: max(3%, 30px);
  //position: absolute;
  width: calc(100% - 2*max(3%, 30px));
  // z-index: 10;
  //top: 0;
  position: fixed;
`
const NavImageBigger = styled.img`
  height: 5vh;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 0.4vmin #fff);
  }
  
  @keyframes rotate {
    from {transform: rotate(0deg);}
    to {
      transform: rotate(360deg) scale(120%);
    }
  }
`
const NavImage = styled.img`
  height: 2.5vh;
  cursor: pointer;
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;
  object-fit: scale-down;
  
  &:hover {
    animation: shimmer 2s infinite linear;
  }

  @keyframes shimmer {
    100% {
      -webkit-mask-position: left
    }
  }

`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 2em;
  
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
`

const Info = styled.p`
  transition: 0.2s ease;

  &:hover {
    transform: scale(110%);
  }
`


const SocialMediaContainer = styled.div`
  position: fixed;
  bottom: 5%;
  left: 3%;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: max(2vw, 25px);
  //gap: 1em;
  
  & > svg {
    //padding: 2em;
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
  
  transition: 0.5s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 0.4vmin #fff);
  }
  
`

const SocialMediaLabel = styled.p`
  font-size: 0.5em;
  padding: 3px;
  border-radius: 2px;
  margin-left: 1vw;
  background: rgba(255, 255, 255, 0.24);
`

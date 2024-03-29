import React, {useEffect} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import center from "../colored.png";
import {HiOutlineClipboardDocumentCheck} from "react-icons/hi2";
import {FaHandshake, FaQuestion, FaScroll} from "react-icons/fa";
import styled from "styled-components";
import staticImage from "../static.png";
import {useNavigate} from "react-router-dom";
import LandingBackground from "../LandingBackground";
import {BiDonateHeart} from "react-icons/bi";


// TODO: use viewport width to determine if mobile or not
// TODO: put the browser view back

export default function Landing() {
  const navigate = useNavigate();

//   useEffect(() => {
//     function generateRandomString() {
//       let string = ""
//
//       for (let i=0; i<20; i++) {
//         string += String.fromCharCode(0x0030 + Math.random() * (0x007A -   0x0030 + 1));
//       }
//
//       return string;
//     }
//
//     const intervalId = window.setInterval(function(){
//       let element = document.getElementById("theme")
//       if (!element) return;
//
//       element.innerText = "Our Theme: " + generateRandomString()
//     }, 100);
//
//     return () => {
//       clearInterval(intervalId)
//     }
//   })

  // gets viewport width
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  // gets viewport height
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  // if viewport width less than viewport height, then mobile
  const isMobile = width < height;

  if (isMobile) {
    return <LandingContainer>
    <LandingBackground/>
    {/*<Grid2 flexGrow={1}>*/}
      <MainContentInner>
        {/*<MainContent maxWidth="md">*/}
          <Content container>
            <Grid2 xs={12} md={6} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <MobileMainImage src={center}  alt={"Center NavImage"} id={"center-image"}/>
            </Grid2>
            <MobileButtonsContainer xs={12} md={6} container direction={"column"} justifyContent="space-between" id={"button-container"}>
              {/*<StyledLink to={"/signup"}>*/}
              <IntroAnimation>
                <MainButtons onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeZmeQve0PAnBG-JsIachT_2m__OCs0OD-3PMjXqxnyhvBdlQ/viewform?usp=sf_link")}>
                  <HiOutlineClipboardDocumentCheck />
                  Register
                </MainButtons>
              </IntroAnimation>
              <IntroAnimation>
                <MainButtons onClick={() => navigate('/rules')}>
                    <FaScroll />
                    Rules
                  </MainButtons>
              </IntroAnimation>
              <IntroAnimation>
                <MainButtons onClick={() => navigate('/faq')}>
                  <FaQuestion />
                  FAQ
                </MainButtons>
              </IntroAnimation>
              <IntroAnimation>
                <MainButtons onClick={() => navigate('/organizers')}>
                    <FaHandshake />
                    Sponsors + Organizers
                  </MainButtons>
              </IntroAnimation>
              <IntroAnimation>
                <MainButtons onClick={() => window.open("https://bank.hackclub.com/donations/start/hackathon-atl")}>
                  <BiDonateHeart />
                  Donate Here
                </MainButtons>
              </IntroAnimation>
            </MobileButtonsContainer>
            <Grid2 xs={12}>
              <MobileBottomContent>
                <BottomText>
                  <em>Hackathon Atlanta</em> is a <em>two-day</em> hackathon opened to all <em>High School Students.</em> This is an opportunity for
                  students all across our Atlanta to join together and collaborate on coding projects.
                </BottomText>
                {/*<BottomText id={"theme"}>Our Theme: </BottomText>*/}
                {/*<BottomText>April 22-23, 2023</BottomText>*/}
                {/*<BottomDonationText onClick={() => window.open("https://bank.hackclub.com/donations/start/hackathon-atl")}>-&gt; Support Us (Donate) &lt;-</BottomDonationText>*/}
              </MobileBottomContent>
            </Grid2>
          </Content>
        {/*</MainContent>*/}
      </MainContentInner>
    {/*</Grid2>*/}
  
    {/*<Grid2 flexGrow={0}>*/}
  
    {/*</Grid2>*/}
    <LandingBackground/>
  </LandingContainer>
  }
  else return <LandingContainer>
  <LandingBackground/>
  <StaticImage src={staticImage} />
  {/*<Grid2 flexGrow={1}>*/}
    <MainContentInner>
      {/*<MainContent maxWidth="md">*/}
        <Content container>
          <Grid2 xs={12} md={6} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <MainImage src={center}  alt={"Center NavImage"} id={"center-image"}/>
          </Grid2>
          <ButtonsContainer xs={12} md={6} container direction={"column"} justifyContent="space-between" id={"button-container"}>
            {/*<StyledLink to={"/signup"}>*/}
            {/*<IntroAnimation>*/}
            {/*  <MainButtons onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeZmeQve0PAnBG-JsIachT_2m__OCs0OD-3PMjXqxnyhvBdlQ/viewform?usp=sf_link")}>*/}
            {/*    <HiOutlineClipboardDocumentCheck />*/}
            {/*    What Is This?*/}
            {/*  </MainButtons>*/}
            {/*</IntroAnimation>*/}
            <IntroAnimation>
              <MainButtons onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeZmeQve0PAnBG-JsIachT_2m__OCs0OD-3PMjXqxnyhvBdlQ/viewform?usp=sf_link")} style={{marginLeft: "2vw"}}>
                <HiOutlineClipboardDocumentCheck />
                Register
              </MainButtons>
            </IntroAnimation>
            <IntroAnimation>
              <MainButtons onClick={() => navigate('/rules')} style={{marginLeft: "4vw"}}>
                  <FaScroll />
                  Rules
                </MainButtons>
            </IntroAnimation>
            <IntroAnimation>
              <MainButtons onClick={() => navigate('/faq')} style={{marginLeft: "5.5vw"}}>
                <FaQuestion />
                FAQ
              </MainButtons>
            </IntroAnimation>
            <IntroAnimation>
              <MainButtons onClick={() => navigate('/organizers')} style={{marginLeft: "4vw"}}>
                  <FaHandshake />
                  Sponsors + Organizers
                </MainButtons>
            </IntroAnimation>
            <IntroAnimation>
              <MainButtons onClick={() => window.open("https://bank.hackclub.com/donations/start/hackathon-atl")}>
                <BiDonateHeart />
                Donate Here
              </MainButtons>
            </IntroAnimation>
          </ButtonsContainer>
          <Grid2 xs={12}>
            <BottomContent>
              <BottomText>
                <em>Hackathon Atlanta</em> is a <em>two-day</em> hackathon opened to all <em>High School Students.</em> This is an opportunity for
                students all across our Atlanta to join together and collaborate on coding projects.
              </BottomText>
              {/*<BottomText id={"theme"}>Our Theme: l6D4kN)0gGx7&hZ^KiIn</BottomText>*/}
              {/*<BottomText style={{fontWeight: "bolder"}}>April 22-23, 2023</BottomText>*/}
              {/*<BottomDonationText onClick={() => window.open("https://bank.hackclub.com/donations/start/hackathon-atl")}>♥ Support Us (Donate) ♥</BottomDonationText>*/}

              {/*<BottomDonationText onClick={() => window.open("https://bank.hackclub.com/donations/start/hackathon-atl")}>-&gt; Support Us (Donate) &lt;-</BottomDonationText>*/}
            </BottomContent>
          </Grid2>
        </Content>
      {/*</MainContent>*/}
    </MainContentInner>
  {/*</Grid2>*/}

  {/*<Grid2 flexGrow={0}>*/}

  {/*</Grid2>*/}
  <LandingBackground/>
</LandingContainer>
}

const LandingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

const MainImage = styled.img`
  
  max-height: 40vh;
  max-width: 100%;

  // cursor: pointer;
  // animation: MoveUpDown 2s ease-in-out infinite;

  // @keyframes MoveUpDown {
  //   0%, 100% {
  //     transform: translateY(0%);
  //   }
  //   50% {
  //     transform: translateY(-5%);
  //   }
  // }

  animation: pulse 5s ease-in-out infinite;

  @keyframes pulse {
    0% , 100% {
      transform: scale(1);
      filter: drop-shadow(0 0 0 #fff);
    }
    50% {
      transform: scale(1.05);
      filter: drop-shadow(0 0 1vmin #fff);
    }
`

const MobileMainImage = styled.img`
  max-height: 40vh;
  max-width: 100%;
  position: absolute;
  top: 0%;

  // cursor: pointer;
  // animation: MoveUpDown 2s ease-in-out infinite;

  // @keyframes MoveUpDown {
  //   0%, 100% {
  //     transform: translateY(0%);
  //   }
  //   50% {
  //     transform: translateY(-5%);
  //   }
  // }

  animation: pulse 5s ease-in-out infinite;

  @keyframes pulse {
    0% , 100% {
      transform: scale(1);
      filter: drop-shadow(0 0 0 #fff) brightness(0.2);
    }
    50% {
      transform: scale(1.05);
      filter: drop-shadow(0 0 3vmin #fff) brightness(0.2);
    }
`

const MainContentInner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  height: 40vh;
  //width: 60vw;
  //justify-content: flex-end;
  align-items: center;
`
const Content = styled(Grid2)`
  position: absolute;
  width: 70vw;
  //bottom: 5vh;
  //left: 50%;
  //top: 50%;
  //transform: translate(-50%, -50%);
  //padding-top: 10vh;
`
const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  //height: 10vh;
  justify-content: flex-end;
  align-items: center;
  //fle;
  //margin-bottom: 2vh;
  margin-top: 10vh;
  position: relative;
  //bottom: 5vh;
  left: 50%;
  transform: translate(-50%, 0);
`

const MobileBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
  justify-content: space-evenly;
  //margin-bottom: 2vh;
  margin-top: 10vh;
  position: relative;
  top: 200%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 2vw;
`

const BottomText = styled.h1`
  color: white;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ease;
  max-width: 60vw;

  &:hover {
    transform: scale(102%);
  }
  em {
    color: #90EECF;
    text-decoration: none;
    font-style: normal;
  }
`

const BottomDonationText = styled(BottomText)`
  color: #90EECF;
  animation: pulse 2s ease-in-out infinite;
  
  &:hover {
    animation: none;
  }
`

const IntroAnimation = styled.div`
  animation: fadein 1s normal forwards;
  opacity: 0;
  transform: translateX(20%);
  
  @keyframes fadein {
    100%   {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
const MainButtons = styled.div`
  border: 2px solid #46474B;
  font-size: 3vh;
  padding: 1.5vmin;
  margin: 1vmin;
  color: white;
  cursor: pointer;
  min-width: 15vw;
  display: flex;
  align-items: center;
  gap: 1vw;
  transition: transform 0.2s ease;
  
  &:hover {
    border-color: #90EECF;
    color: #90EECF;

    //margin-left: 2em;
    transform: translateX(0.3vw);
  }
  
  & > svg {
    border: 2px solid white;
    border-radius: 50%;
    font-size: 2vh;
    padding: 0.3vmax;
  }
  
  &:hover > svg {
    border: 2px solid #90EECF;

  }
  
`

const ButtonsContainer = styled(Grid2)`
  //&::before > * {
  //  opacity: 0;
  //  transform: translateX(20%)
  //}
  
  & > * {
    //opacity: 1;
    //transform: translateX(0);
    //animation: fadein 1s normal forwards;
    //opacity: 0;
    //display: flex;
    //justify-content: center;
    //@keyframes fadein {
    //  0% {
    //    opacity: 0;
    //    transform: translateX(20%);
    //  }
    //  100%   {
    //    opacity: 1;
    //    transform: translateX(0);
    //  }
    //}
  }
  & :nth-child(2) {animation-delay: 0.1s}
  & :nth-child(3) {animation-delay: 0.2s}
  & :nth-child(4) {animation-delay: 0.3s}
  & :nth-child(5) {animation-delay: 0.4s}
  & :nth-child(6) {animation-delay: 0.5s}
  
  
`

const MobileButtonsContainer = styled(Grid2)`
  //&::before > * {
  //  opacity: 0;
  //  transform: translateX(20%)
  //}
  
  position: absolute;
  top: 15%;
  & > * {
    //opacity: 1;
    //transform: translateX(0);
    //animation: fadein 1s normal forwards;
    //opacity: 0;
    //display: flex;
    //justify-content: center;
    //@keyframes fadein {
    //  0% {
    //    opacity: 0;
    //    transform: translateX(20%);
    //  }
    //  100%   {
    //    opacity: 1;
    //    transform: translateX(0);
    //  }
    //}
  }
  & :nth-child(2) {animation-delay: 0.1s}
  & :nth-child(3) {animation-delay: 0.2s}
  & :nth-child(4) {animation-delay: 0.3s}
  & :nth-child(5) {animation-delay: 0.4s}
  & :nth-child(6) {animation-delay: 0.5s}
  
  
`

const StaticImage = styled.img`
  position: absolute;
  width: 1.5vh;
  bottom: 5vh;
  right: 3vw;
  transition: 0.2s ease;
  
  &:hover {
    transform: scale(110%);
    cursor: pointer;
  }
`

import * as React from "react";
import styled from "styled-components";
import {Container} from "@mui/material";


export default function FAQ() {
  return <PageContainer>
    <Heading>FAQ</Heading>
    <QAGrid>
      <QAContainer>
        <h2>What is Hackathon Atlanta?</h2>
        <p>Hackathon Atlanta is a 32-hour hackathon that brings together students from all over the world to build projects and learn from each other.</p>
      </QAContainer>
      <QAContainer>
        <h2>When is Hackathon Atlanta?</h2>
        <p>Hackathon Atlanta 2023 will be held from April 22 - April 23.</p>
      </QAContainer>
      <QAContainer>
        <h2>Where is Hackathon Atlanta?</h2>
        <p>Hackathon Atlanta 2023 will be held at Johns Creek High School.</p>
      </QAContainer>
      <QAContainer>
        <h2>Who can attend?</h2>
        <p>Hackathon Atlanta is open to all high school students. We welcome students with any skill level.</p>
      </QAContainer>
      <QAContainer>
        <h2>How much does it cost?</h2>
        <p>Hackathon Atlanta is completely free to attend. Food and Drinks will be provided!</p>
      </QAContainer>
      <QAContainer>
        <h2>What if I don't have a team?</h2>
        <p>Don't worry! We will have a team formation event at the beginning of the hackathon. You can also use our Discord server to find teammates.</p>
      </QAContainer>
      <QAContainer>
        <h2>What if I don't have any experience?</h2>
        <p>That's okay! We will have workshops and mentors to help you get started. You can also use our Discord server to ask questions.</p>
      </QAContainer>
      <QAContainer>
        <h2>I still have more questions. Where can I go?</h2>
        <p>Join our discord and ask your questions!</p>
      </QAContainer>
    </QAGrid>
    </PageContainer>
}

const PageContainer = styled(Container)`
  margin-top: 140px;
  color: white;
  display: flex;

`

const Heading = styled.h1`
  color: white;
  text-align: center;
  //position: absolute;
  //top: 7%;
  //right: 50%;
  //transform: translate(50%, -50%);
  font-size: min(4vw, 30px);
`
const QAGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  padding: 0 1em;
  margin: max(3%, 30px);

  //position: absolute;
  //top: 45%;
  //right: 50%;
  //transform: translate(50%, -50%);
  //width: 70%;
  //height: 60%;
`

const QAContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  min-width: 40em;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  padding: 2vh;
  transition: 0.3s;
  animation: fadein 1s ease-out normal forwards;
  @keyframes fadein {
    0%  {
      opacity: 0;
      transform: translateX(50%)
    }
    100%   {
      opacity: 1;
      transform: translateX(0%)
    }
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
    filter: drop-shadow(0 0 0.75vmin white);
  }
  h2 {
    font-size: 3em;
    font-weight: 600;
    margin: 0.5vh 0.5vw;
  }

  p {
    font-size: 1.8em;
    font-weight: 400;
    margin: 0.5vh 0.5vw;
  }
`
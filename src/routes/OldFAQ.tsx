import styled from "styled-components";
import {Container} from "@mui/material";
import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useEffect} from "react";

const questions = `
Q: Do we need to bring own food?
A: We provide food for all attendees but feel free to bring your own
A: hi
Q: What should we bring with us?
A: personal device paper pen water charger ig
`

export default function FAQ() {

  return <PageContainer fixed>
    <MainText>Frequently Asked Questions</MainText>
    {questions.split("\nQ: ").map((line, index) => line.length > 0 && <Question style={{animationDelay: (index*100) + "ms"}} info={line} />)}
  </PageContainer>
}

function Question(props: { style: any, info: string }) {

  // useEffect(() => {
  //   pro
  // }, [props.info])

  return <QuestionContainer style={props.style}>
    {props.info.split("\nA: ").map((line, index) => {
      if (index == 0) return <QuestionText>{line}</QuestionText>
      else return <AnswerText>{line}</AnswerText>
    })}

  </QuestionContainer>
}

const PageContainer = styled(Container)`
  margin-top: 15em;
  color: white;
`

const MainText = styled.h1`
  text-align: center;
  font-size: 4em;
`

const QuestionContainer = styled.div`
  border-radius: 0.5em;
  background-color: rgba(255, 255, 255, 0.15);
  font-size: 2em;
  padding: 0.8em 1em;
  margin: 0.4em 0;
  transition: 0.5s ease-out;
  cursor: pointer;
  
  }
  & > p {
    opacity: 0;
  }
  &:hover > p {
    display: 1;
  }
`

const QuestionText = styled.h2`
  margin: 0;
`

const AnswerText = styled.p`
  animation: fadein 1s normal forwards;
  opacity: 0;
  transform: translateX(1em);

  @keyframes fadein {
    100%   {
      opacity: 1;
      transform: translateX(0%)
    }
  }
`
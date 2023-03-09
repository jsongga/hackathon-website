import styled from "styled-components";
import {Container} from "@mui/material";

const rules = `
1. Teams can have a maximum of 4 people
2. Online Resources are allowed
3. Help from people within this hackathon is allowed only
4. Projects should be original
5. You must be in High School to attend
6. Teams must stop coding once time is up
`

export default function Rules() {

  return <PageContainer fixed>
    <MainText>Hackathon Rules</MainText>
    {rules.split("\n").map((line, index) => line.length > 0 && <RuleContainer style={{animationDelay: (index*100) + "ms"}}>{line}</RuleContainer>)}
  </PageContainer>
}

const PageContainer = styled(Container)`
  margin-top: 15em;
  color: white;
`

const MainText = styled.h1`
  text-align: center;
  font-size: 4em;
`

const RuleContainer = styled.div`
  border-radius: 0.5em;
  background-color: rgba(255, 255, 255, 0.05);
  font-size: 3em;
  padding: 0.5em 1em;
  margin: 0.4em 0;
  transition: 0.5s ease-out;
  
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
    filter: drop-shadow(0 0 0.75vmin white);

  }

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
import styled from "styled-components";
import {Container} from "@mui/material";

export default function Organizers() {

  return <PageContainer>
    <Heading>Organizers</Heading>
    <ProfileTopGrid>
      <ProfileGrid1>
        <ProfileContainer>
          <ProfileImage src="https://cdn.discordapp.com/avatars/309850219581931521/9d8843b79afac392243c2761924b5e50?size=1024" />
          <ProfileH1>John Song</ProfileH1>
          <ProfileP>Lead Coordinator</ProfileP>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileImage src="https://cdn.discordapp.com/avatars/513422459534442516/0b6dfd42a00e947b97eadd1acfbb3a0e?size=1024" />
          <ProfileH1>Austin Song</ProfileH1>
          <ProfileP>Lead Coordinator</ProfileP>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileImage src="https://cdn.discordapp.com/avatars/306210796772261899/c704647b613296aa2cadf0117c75f3c3?size=1024" />
          <ProfileH1>Benjamin Choo</ProfileH1>
          <ProfileP>Organizer's Role</ProfileP>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileImage src="https://cdn.discordapp.com/avatars/485587362534129676/7ae7e229320e0d183de288ecd688d289?size=1024" />
          <ProfileH1>Sasanka Polisetti</ProfileH1>
          <ProfileP>Event + Budget</ProfileP>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileImage src="https://cdn.discordapp.com/avatars/449764032711360533/a_5dedf5954ccd068f04a080944f41d8a3?size=1024" />
          <ProfileH1>Tillman Won</ProfileH1>
          <ProfileP>Organizer's Role</ProfileP>
        </ProfileContainer>
      </ProfileGrid1>
      <ProfileGrid2>
        <ProfileContainer>
          <ProfileImage src="https://cdn.discordapp.com/avatars/338868664596168704/f7776b8f2e6ff967982367814939c079?size=1024" />
          <ProfileH1>Heet Shah</ProfileH1>
          <ProfileP>Organizer's Role</ProfileP>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileImage src="https://media.discordapp.net/attachments/1012550180719054932/1083112500637208576/black-bg-logo.jpg" />
          <ProfileH1>Lalitha</ProfileH1>
          <ProfileP>Organizer's Role</ProfileP>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileImage src="https://cdn.discordapp.com/avatars/510999904986988544/a56fd1c80a96ea628798787c7b51306e?size=1024" />
          <ProfileH1>Steven Chae</ProfileH1>
          <ProfileP>Website Coordinator</ProfileP>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileImage src="https://cdn.discordapp.com/avatars/564655151906947095/a_4863af8e782c3e87ab916fc4bc8e4ab1?size=1024" />
          <ProfileH1>Clara</ProfileH1>
          <ProfileP>Organizer's Role</ProfileP>
        </ProfileContainer>
      </ProfileGrid2>
    </ProfileTopGrid>
    </PageContainer>
}

const PageContainer = styled(Container)`
  margin-top: 0;
  color: white;
`


const Heading = styled.h1`
  color: white;
  text-align: center;
  position: absolute;
  top: 7%;
  right: 50%;
  transform: translate(50%, -50%);
  font-size: 2vw;
`

const ProfileTopGrid = styled.div`
  position: absolute;
  top: 48%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 70%;
  height: 105%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`

const ProfileGrid1 = styled.div`
  position: absolute;
  top: 37%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4%;
`

const ProfileGrid2 = styled.div`
  position: absolute;
  top: 73%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4%;
`
const ProfileContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  padding: 0vh;
  transition: 0.5s ease-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  animation: fadein 1s ease-out normal forwards;
  text-align: center;
  @keyframes fadein {
    0%  {
      opacity: 0;
      transform: translateX(100%)
    }
    100%   {
      opacity: 1;
      transform: translateX(0%)
    }
  }
`

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 3px;
`

const ProfileH1 = styled.h1`
  font-size: 2vh;
`

const ProfileP = styled.p`
  font-size: 1.5vh;
`
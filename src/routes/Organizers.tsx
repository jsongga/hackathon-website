import styled from "styled-components";
import {Container} from "@mui/material";

export default function Organizers() {

  return <PageContainer>
    <Heading>Organizers</Heading>
    <ProfileGrid1>
      <ProfileContainer>
        <ProfileImage src="https://cdn.discordapp.com/avatars/485587362534129676/7ae7e229320e0d183de288ecd688d289?size=1024" />
        <ProfileH1>Organizer</ProfileH1>
        <ProfileP>Organizer's Role</ProfileP>
      </ProfileContainer>
      <ProfileContainer>
        <ProfileImage src="https://cdn.discordapp.com/avatars/510999904986988544/a56fd1c80a96ea628798787c7b51306e?size=1024" />
        <ProfileH1>Organizer</ProfileH1>
        <ProfileP>Organizer's Role</ProfileP>
      </ProfileContainer>
      <ProfileContainer>
        <ProfileImage src="https://cdn.discordapp.com/avatars/513422459534442516/0b6dfd42a00e947b97eadd1acfbb3a0e?size=1024" />
        <ProfileH1>Organizer</ProfileH1>
        <ProfileP>Organizer's Role</ProfileP>
      </ProfileContainer>
      <ProfileContainer>
        <ProfileImage src="https://cdn.discordapp.com/avatars/306210796772261899/c704647b613296aa2cadf0117c75f3c3?size=1024" />
        <ProfileH1>Organizer</ProfileH1>
        <ProfileP>Organizer's Role</ProfileP>
      </ProfileContainer>
      <ProfileContainer>
        <ProfileImage src="https://cdn.discordapp.com/avatars/564655151906947095/a_4863af8e782c3e87ab916fc4bc8e4ab1?size=1024" />
        <ProfileH1>Organizer</ProfileH1>
        <ProfileP>Organizer's Role</ProfileP>
      </ProfileContainer>
    </ProfileGrid1>
    <ProfileGrid2>
      <ProfileContainer>
        <ProfileImage src="https://cdn.discordapp.com/avatars/338868664596168704/f7776b8f2e6ff967982367814939c079?size=1024" />
        <ProfileH1>Organizer</ProfileH1>
        <ProfileP>Organizer's Role</ProfileP>
      </ProfileContainer>
      <ProfileContainer>
        <ProfileImage src="https://cdn.discordapp.com/avatars/739481322900291636/b45a00835df9899314ff3c64e6564729?size=1024" />
        <ProfileH1>Organizer</ProfileH1>
        <ProfileP>Organizer's Role</ProfileP>
      </ProfileContainer>
      <ProfileContainer>
        <ProfileImage src="https://cdn.discordapp.com/avatars/309850219581931521/9d8843b79afac392243c2761924b5e50?size=1024" />
        <ProfileH1>Organizer</ProfileH1>
        <ProfileP>Organizer's Role</ProfileP>
      </ProfileContainer>
      <ProfileContainer>
        <ProfileImage src="https://cdn.discordapp.com/avatars/449764032711360533/a_5dedf5954ccd068f04a080944f41d8a3?size=1024" />
        <ProfileH1>Organizer</ProfileH1>
        <ProfileP>Organizer's Role</ProfileP>
      </ProfileContainer>
    </ProfileGrid2>
    </PageContainer>
}

const PageContainer = styled(Container)`
  margin-top: 15em;
  color: white;
`


const Heading = styled.h1`
  color: white;
  text-align: center;
  position: absolute;
  top: 7%;
  right: 50%;
  transform: translate(50%, -50%);
  font-size: 5em;
`

const ProfileGrid1 = styled.div`
  position: absolute;
  top: 37%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 70%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4%;
  margin: 0 1em;
`

const ProfileGrid2 = styled.div`
  position: absolute;
  top: 73%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 54%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4%;
  margin: 0 1em;
`


const ProfileContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5em;
  padding: 1em;
  transition: 0.5s ease-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  text-align: center;
`

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 0.5em;
`

const ProfileH1 = styled.h1`
  font-size: 3em;
`

const ProfileP = styled.p`
  font-size: 2em;
`
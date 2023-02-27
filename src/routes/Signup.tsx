import Grid2 from "@mui/material/Unstable_Grid2";
import styled from "styled-components";

export default function Signup() {
  // return <Grid2 container>
  //   <Grid2 xs={6}>Hello</Grid2>
  //   <Grid2 xs={6}>Test</Grid2>
  // </Grid2>

  return <FillerText>Signup</FillerText>
}

const Container = styled(Grid2)`
`

const FillerText = styled.h1`
  color: white;
  text-align: center;
  position: absolute;
  top: 25%;
`
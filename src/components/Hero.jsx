import { Box, Typography, Grid, Avatar, Grow } from "@mui/material";
import React from "react";
import PhotoMe from "../../src/media/me2.jpeg"
import Logo from "../../src/media/logo.png"

const Hero = () => {

  return (
    <Box
      sx={{
        mt: 8,
        mb: 12,
        p: 2,
        maxWidth: "1200px",
        mx: "auto",
      }}
      id="home"
    >
<Avatar alt="Logo"
  src={Logo}
  sx={{ width: 500, height: 500, margin: "auto"}}
  
  
 ></Avatar>

<Box sx= {{mt: 8,
        maxWidth: "1000px",
        mx: "auto",
        flexGrow:1,
        border: "3px solid silver"}}>
  <Grid container Spacing={2} columns={16}>
  <Grid  paddingBottom={"10px"} xs={8}>
  <Grow in={true} timeout={2000} >
  <Avatar
  alt="AHarikaran"
  src={PhotoMe}
  sx={{ width: 400, height: 400 }}
  variant="rounded"
/>
</Grow>
</Grid>
<Grid  xs={6} >
<Grow in={true} timeout={5000} >
<Box backgroundColor="black" >
  <Typography sx={{color: "silver",textAlign: 'center', typography: 'subtitle1', fontWeight: 500, fontFamily: 'Monospace', fontSize:"70px" }}>
      About Me
  </Typography>
</Box>
</Grow>
<Grow in={true} timeout={7000} >
<Box backgroundColor="black" >
  <Typography sx={{color: "silver",textAlign: 'center', typography: 'body4', fontWeight: 500, fontFamily: 'Monospace', fontSize:"20px" }}>
  I am looking to transition to a software engineering role as my next step in my career at Redwood/CG.  I am motivated, passionate, and eager to learn. Below are some examples of projects I have been undertaking to continue my development.
  </Typography>
</Box>
</Grow>
</Grid>
</Grid>
</Box>
</Box>
  );
};

export default Hero;

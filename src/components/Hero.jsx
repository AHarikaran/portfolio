import { Box, styled, Typography, Grid, Avatar, Grow } from "@mui/material";
import React from "react";
import PhotoMe from "../../src/media/me.JPG"


const Hero = () => {

  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "silver",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));

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
      <CustomTitle variant="h1">
      <span style={{ color: "silver" }}>Portfolio</span>
      </CustomTitle>

<Box sx= {{       mt: 8,
        mb: 12,
        p: 2,
        maxWidth: "1200px",
        mx: "auto", 
        borderRadius:"16px" }}>
  <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid  paddingBottom={"10px"}  xs={6} >
  <Grow in={true} timeout={2000} >
  <Avatar
  alt="AHarikaran"
  src={PhotoMe}
  sx={{ width: 400, height: 400, marginLeft:"400px" }}
/>
</Grow>
</Grid>
<Grid sx={{border: "3px solid silver"}}>
<Grow in={true} timeout={5000} >
<Box backgroundColor="black" >
  <Typography sx={{color: "silver",textAlign: 'center', typography: 'subtitle1', fontWeight: 500, fontFamily: 'Monospace', fontSize:"40px" }}>
      About Me
  </Typography>
</Box>
</Grow>
<Grow in={true} timeout={7000} >
<Box backgroundColor="black">
  <Typography sx={{color: "silver",textAlign: 'center', typography: 'body4', fontWeight: 500, fontFamily: 'Monospace', fontSize:"16px" }}>
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

import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { icons } from "../constants/icons";
import Icon from "./Icon";

const Stack = () => {


  const StackBox = styled(Box)(({ theme }) => ({
    flex: 1,
    marginLeft:"15rem",
    display: "flex",
    alignItems:"center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "3rem",
    },
  }));

  return (
    <>
        <Box sx={{ maxWidth: "1300px", mx: "auto", my: 12 }} id="techstack">
    <Typography
      variant="h3"
      sx={{ color: "silver" , textAlign: "center", mb: 2 }}
    >
      Tech Stack
    </Typography>
    </Box>
      <StackBox>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"center",
            border:1, 
            borderRadius: 2
          }}
        >
          {icons.map((icon, i) => {
            if (i < 2) {
              return <Icon key={icon.id} name={icon.name} src={icon.src} />;
            } else {
              return "";
            }
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {icons.map((icon, i) => {
            if (i >= 2 && i < 4) {
              return <Icon key={icon.id} name={icon.name} src={icon.src} />;
            } else {
              return "";
            }
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {icons.map((icon, i) => {
            if (i >= 4 && i < 6) {
              return <Icon key={icon.id} name={icon.name} src={icon.src} />;
            } else {
              return "";
            }
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {icons.map((icon, i) => {
            if (i >= 6) {
              return <Icon key={icon.id} name={icon.name} src={icon.src} />;
            } else {
              return "";
            }
          })}
        </Box>
      </StackBox>
      </>
  );
};

export default Stack;

import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import navIcon from "../media/logo.png";

import { Link } from "react-scroll";
import { styled } from "@mui/system";

const Navbar = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  }));

  const CustomToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1, px: 5, py: 2, maxWidth: "1200px", mx: "auto" }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <CustomToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box
              component="img"
              sx={{ maxHeight: "45px", maxWidth: "45px", objectFit: "cover" }}
              src={navIcon}
            />
          </Box>

          <CustomBox>
            <Link to="home" className="link" smooth>
              Home
            </Link>
            <Link to="projectsid" className="link" smooth>
              Projects
            </Link>
            <Link to="techstack" className="link" smooth>
              Tech Stack
            </Link>
            <Link to="Future" className="link" smooth>
              Future Plans
            </Link>
          </CustomBox>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

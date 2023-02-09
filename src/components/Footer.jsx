import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        borderTop: "1px solid #7B89A8",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          PAGES
        </Typography>

        <Link
          to="home"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Home
        </Link>
        <Link
          to="projectsid"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Projects
        </Link>
        <Link
          to="techstack"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Tech Stack
        </Link>
        <Link
          to="Future"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Development Plans
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          SOCIAL
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <a rel="noopener noreferrer" href="https://github.com/AHarikaran/" className="link" target="_blank">
          <GitHubIcon sx={{ mr: 2, color: "white" }} />
          </a>
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            GitHub
          </Typography>
        
        </Box>


        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/aphilash-harikaran-079292132" className="link"  target="_blank">
          <LinkedInIcon sx={{ mr: 2, color: "white" }} />
        </a>
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            LinkedIn
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

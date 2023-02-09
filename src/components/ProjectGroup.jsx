import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../constants/project";
import Project from "./Project";
import Csharp from "./csharp";
import Stack from "./Stack";
import { csharps } from "../constants/csharp";

const ProjectGroup = () => {
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto", my: 12 }} id="projectsid">
      <Typography
        variant="h3"
        sx={{ color: "silver" , textAlign: "center", mb: 2 }}
      >
        Projects:
      </Typography>
      <Typography
        variant="h4"
        sx={{ color: "silver" , textAlign: "center", mb: 2 }}
      >
        Javascript:
      </Typography> 
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            img={project.image}
            src={project.source}
          />
        ))}
      </Box>
      <Typography
        variant="h4"
        sx={{ color: "silver" , textAlign: "center", mt: 4 }}
      >
        c#:
      </Typography> 
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
      
        }}
      >
        {csharps.map((csharp) => (
          <Csharp
            key={csharp.id}
            title={csharp.title}
            description={csharp.description}
            tags={csharp.tags}
            img={csharp.image}
            src={csharp.source}
          />
        ))}
      </Box>
      <Stack />
    </Box>
  );
};

export default ProjectGroup;

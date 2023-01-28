import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";

const ProjectGroup = () => {
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto", my: 12 }} id="projectsid">
      <Typography
        variant="h3"
        sx={{ color: "silver" , textAlign: "center", mb: 2 }}
      >
        Current Projects:
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

      <Stack />
    </Box>
  );
};

export default ProjectGroup;

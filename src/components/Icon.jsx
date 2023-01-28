import { Box, Typography } from "@mui/material";
import React from "react";

const Icon = ({ name, src }) => {
  return (
    <Box
      sx={{
        maxWidth:1300,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 4,
      }}
    >
      <img src={src} height="40px" width="40px" alt = "icons"/>
      <Typography variant="body1" sx={{ color: "silver", mt: 1}}>
        {name}
      </Typography>
    </Box>
  );
};

export default Icon;

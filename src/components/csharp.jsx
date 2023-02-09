import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import Chip from "@mui/material/Chip";
  import { Box } from "@mui/system";
  import React from "react";
  
  
  const Csharp = ({ title, description, tags, img, source }) => {
    
    
    return (
  <>
      <Card sx={{ maxWidth: 375, margin: "1rem", backgroundColor:"black", border: "3px solid silver" }}>
        <CardActionArea >
          <CardMedia height ="200" component="img" image={img}  />
          <CardContent >
            <Typography gutterBottom  variant="h5" component="div" color = "silver" display = "flex" justifyContent="center" >
              {title}
            </Typography>
            <Typography variant="body2" color="silver">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              mx: "auto",
              mb: 3,
            }}
          >
            
            <Button
              size="small"
              style={{ backgroundColor: "grey" }}
              variant="contained"
              href={source}
            >
              <a href={source}>
              Source Code
              </a>
            </Button>
            
          </Box>
  
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
              mb: 2,
            }}
          >
            {tags.map((tag) => (
              <Chip label={tag} color="secondary" variant="outlined" key={tag} />
            ))}
          </Box>
        </CardActions>
      </Card>
      </>
    );
  };
  
  export default Csharp;
  
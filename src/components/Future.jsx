import { Box, Typography, List, ListItem, ListItemText, Divider, Fade } from "@mui/material";
import ScrollTrigger from 'mui-scroll-trigger'
import React from "react";


const Future = () => {

  return (
<>
    <Box sx={{ maxWidth: "1300px", mx: "auto", my: 12 }} id="Future">
    <Typography
      variant="h3"
      sx={{ color: "silver" , textAlign: "center", mb: 2 }}
    >
      Development plans
    </Typography>
    </Box>
<ScrollTrigger onScroll="show" threshold={2000}>
<Box sx={{ maxWidth: "1300px", mx: "auto", my: 12  }}>
<List sx={{ width: '100%', bgcolor: 'black', border: "3px solid silver", borderRadius:"16px" }}>
<ListItem alignItems="flex-start">
  <ListItemText
    primary={
        <React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h3"
            color="silver"
          >
            {"Javascript"}
          </Typography>
        </React.Fragment>
      }
    secondary={
      <React.Fragment>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="silver"
        >
        <List
sx = {{
 listStyleType: 'disc',
 pl: 2,
 '& .MuiListItem-root': {
  display: 'list-item'
 },
}}>
      <ListItem  >
        <Typography>
            Continue learning about state management and lifecyle 
        </Typography>
      </ListItem>
      <ListItem >
            Gain a better understanding of Node.js and its possible applications
      </ListItem>
      <ListItem >
            Create more extensive projects/ build on the current ones.Use Typescript for any projects moving forward
      </ListItem>
      <ListItem >
            Get a deeper udnerstanding of Jest/TDD
      </ListItem>
    </List>
        </Typography>

      </React.Fragment>
    }
  />
</ListItem>
<Divider variant="inset" component="li" />
<ListItem alignItems="flex-start">
  <ListItemText
    primary={
        <React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h3"
            color="silver"
          >
            {"C#"}
          </Typography>
        </React.Fragment>
      }
    secondary={
      <React.Fragment>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="silver"
        >
         <List
sx = {{
 listStyleType: 'disc',
 pl: 2,
 '& .MuiListItem-root': {
  display: 'list-item'
 },
}}>
      <ListItem >
        <Typography>
            Understand core concepts and engage in a course
        </Typography>
      </ListItem>
      <ListItem >
            Build further, more complex applications
      </ListItem>
    </List>
        </Typography>

      </React.Fragment>
    }
  />
</ListItem>
<Divider variant="inset" component="li" />
<ListItem alignItems="flex-start">
  <ListItemText
    primary={
        <React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="h3"
            color="silver"
          >
            {"GoLang"}
          </Typography>
        </React.Fragment>
      }
    secondary={
      <React.Fragment>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="silver"
        >
                <List
sx = {{
 listStyleType: 'disc',
 pl: 2,
 '& .MuiListItem-root': {
  display: 'list-item'
 },
}}>
      <ListItem >
        <Typography>
            Apply knowledge gained to projects, gain a deeper understanding of the capabilities of this language
        </Typography>
      </ListItem>
      <ListItem >
            Build further, more complex applications.
      </ListItem>
    </List>
        </Typography>

      </React.Fragment>
    }
  />
</ListItem>
</List>

</Box>
</ScrollTrigger>
</>
);
}

export default Future;

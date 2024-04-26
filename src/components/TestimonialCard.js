import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const TestimonialCard = (props) => {
  return (
    <Card 
    sx={{ 
      maxWidth: '345px', 
      boxShadow: "none" }}>
      <CardActionArea
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "200px",
          pl: "10px",
        }}
      >
        <Box>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src={props.img}
              sx={{ width: "70px", height: "70px" }}
            />
          </Stack>
        </Box>
        <Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Typography gutterBottom variant="p" component="div" fontSize={17}>
              {props.title}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default TestimonialCard;

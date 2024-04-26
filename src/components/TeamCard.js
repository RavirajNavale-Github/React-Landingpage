import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const TeamCard = (props) => {
  return (
    <Card 
    sx={{ 
      maxWidth: {lg:'250px', md:'190px'}, 
      boxShadow: "none" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={props.img}
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.Designation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TeamCard;

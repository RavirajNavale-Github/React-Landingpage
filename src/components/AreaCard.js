import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const AreaCard = (props) => {
  return (
    <Card
      sx={{
        maxWidth: { lg: "345px", md: "300px", xs:'300px' },
        borderRadius: "20px",
        boxShadow: "none",
        border: "2.5px solid #627254",
        mb:{lg: "0px", md: "0px", xs:'15px'},
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: {lg: "300px", md: "300px", xs:'350px'},
        }}
      >
        <Box>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src={props.img}
              sx={{ 
                width: {lg:"100px", md:'80px', xs:'80px'}, 
                height: {lg:"100px", md:'80px', xs:'80px'}}}
            />
          </Stack>
        </Box>
        <Box>
          <CardContent sx={{ textAlign: "center", color: "#12372A" }}>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="#4F6F52">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default AreaCard;

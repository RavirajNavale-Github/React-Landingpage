import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Box sx={{ width: "90%", m: "auto", mt: "100px" }}>
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "550",
        }}
      >
        Testimonials
      </Typography>

      <Typography
        variant="p"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "500",
          mt: "10px",
          color: "#393E46",
        }}
      >
        Look what cutomers are saying.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection:{lg:'row', md:'row', xs:'column'},
          alignItems: "center",
          justifyContent: "space-around",
          mt: "30px",
        }}
      >
        <TestimonialCard title="-Zaki" img='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'/>
        <TestimonialCard title="-Williams" img='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'/>
        <TestimonialCard title="-Lee" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0OTAqC4xVoXNE8eLYie4DDjlLgZZrwj2cB64su1Z9f5YuarNKHYM8WoOrdFxTqoYjVE&usqp=CAU'/>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection:{lg:'row', md:'row', xs:'column'},
          alignItems: "center",
          justifyContent: "space-around",
          mt: '0px',
        }}
      >
        <TestimonialCard title="-Donna" img='https://images.assetsdelivery.com/compings_v2/fizkes/fizkes2011/fizkes201102042.jpg'/>
        <TestimonialCard title="-Martin" img='https://t4.ftcdn.net/jpg/03/98/85/77/360_F_398857704_n44BPhqM68Xk9vT31BeFkLQwWsgeZS6C.jpg'/>
        <TestimonialCard title="-Nancy" img='https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?s=612x612&w=0&k=20&c=aQw5YhGl99hL1O77thwpQTmqVE7bc8rCX9H0gTeoX_k='/>
      </Box>

      {/* <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "20px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <TestimonialCard title="-Zaki"/>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </Box>
  );
};

export default Testimonials;

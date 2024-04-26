import { Box, Typography } from "@mui/material";
import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <Box sx={{ width: "80%", m: "auto", mt: "80px" }}>
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "550",
        }}
      >
        Team
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
        We are having team who is Excellent in their work.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection:{lg:'row', md:'row', xs:'column'},
          alignItems: "center",
          justifyContent: "space-between",
          mt: "40px",
        }}
      >
        <TeamCard
          img="https://www.eu-startups.com/wp-content/uploads/2022/10/Screen-Shot-2022-10-07-at-10.20.42.png"
          Name="James"
          Designation="Owner"
        />
        <TeamCard
          img="https://online.jwu.edu/wp-content/uploads/2023/06/restaurant20manager20-20tiny.jpg"
          Name="William"
          Designation="Manager"
        />
        <TeamCard
          img="https://richmondmagazine.com/downloads/38353/download/Eat%2BDrink_Q%2BA_Ajay-Kumar-Kismet_JAYPAUL_rp0323.jpg?cb=ade6b3e695c57439b4c51ee2d2cc2b29"
          Name="Thomas"
          Designation="Head-Chef"
        />
        <TeamCard
          img="https://taboonmediterranean.com/wp-content/uploads/2023/04/Taboon-Bussier.png"
          Name="Michael"
          Designation="Head-Server"
        />
      </Box>

      

      {/* <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "40px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 16 }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <TeamCard/>
            </Grid>
          ))}
        </Grid>
      </Box> */}

    </Box>
  );
};

export default Team;

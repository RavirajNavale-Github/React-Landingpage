import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import AreaCard from "./AreaCard";

const Services = () => {
  // const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //     ...theme.typography.body2,
  //     padding: theme.spacing(2),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //   }));

  return (
    <Box sx={{ width: "90%", m: "auto", mt: "80px" }}>
      <Typography
        variant="h4"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontWeight:'550'}}
      >
        Services
      </Typography>

      <Box
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
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <AreaCard title={"Multi-cusion"} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;

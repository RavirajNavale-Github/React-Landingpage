import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AreaCard from "./AreaCard";

const Features = () => {
  const featureData = [
    {
      title: "Muli-cusion",
      img: "https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/4:3/w_4095,h_3071,c_limit/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg",
    },
    {
      title: "Ambiance",
      img:"https://media.istockphoto.com/id/843610508/photo/interior-of-cozy-restaurant-loft-style.jpg?s=612x612&w=0&k=20&c=s_PVQJNzcilxKYpm3O-AxBMx4_om5G0TKuxUmiMl85Y="
    },
    {
      title: "Service",
      img:"https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg"
    },
  ];

  return (
    <Box
      sx={{
        mt: { lg: "0px", md: "0px" },
        backgroundColor: "#C6EBC5",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "550",
          color: "#1A4D2E",
        }}
      >
        Features
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "space-around",
          mt: "40px",
        }}
      >
        {featureData.map((item, i) => {
          return <AreaCard title={item.title} img={item.img} />;
        })}
      </Box>
    </Box>
  );
};

export default Features;

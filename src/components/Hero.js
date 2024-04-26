import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        backgroundImage: `url(${"https://images.moneycontrol.com/static-mcnews/2023/10/pexels-anil-sharma-10580198.jpg?impolicy=website&width=1600&height=900"})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        height:{lg:'100vh', md:'600px'},
        width:{xs:'100%', md:'100%'}
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(2rem, 10vw, 3rem)",
              marginTop: "120px",
              color:'whitesmoke',
              fontWeight:'600'
            }}
          >
            "Discover the Art of Fine Dining"
            {/* <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              Fine Dining
            </Typography> */}
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%", color:'whitesmoke', fontWeight:'500' } }}
          >
            Experience a symphony of flavors at our restaurant, where every dish
            is crafted with precision and passion by our talented chefs.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          ></Stack>
        </Stack>
      </Container>
    </Box>
  );
}

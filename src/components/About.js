import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "95%",
          height: { lg: "90vh", md: "" },
          m: "auto",
          mt: "80px",
          backgroundColor: "#627254",
          borderRadius: "30px",
          paddingTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "550",
            color: "#FFFFEC",
          }}
        >
          About
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "column", xs:'column' },
            alignItems: { lg: "center", md: "center", xs:'center' },
            justifyContent: { lg: "space-around", md: "space-around" },
            mt: "40px",
          }}
        >
          <Box
            sx={{
              width: {lg:"520px", md:"520px", xs:"520px"},
              height: "100%",
              objectFit: "contain",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww"
              alt="Restaurant_image"
              width={520}
            />
          </Box>
          <Box
            sx={{
              width: { lg: "50%", md: "90%" },
              mt: { lg: "0px", md: "20px" },
              color: "#DDDDDD",
            }}
          >
            <Typography variant="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, esse nobis? Eveniet earum temporibus quo hic
              consequuntur, provident dolorem laudantium ea, cupiditate aliquid
              amet officiis qui reprehenderit. Ipsa saepe soluta exercitationem
              ex esse quo quaerat aspernatur in quos ut eaque illo, inventore
              laboriosam magnam eligendi blanditiis culpa. Temporibus, dicta
              nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti consectetur incidunt atque odio doloremque iure molestiae
              rem, nemo labore maxime?
            </Typography>
            <br />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "500",
                mt: "40px",
                color: "#FFFFEC",
                textAlign: { lg: "start", md: "center" },
              }}
            >
              Why We?
            </Typography>

            <List
              sx={{
                width: "100%",
                maxWidth: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // textAlign:{lg:'start', md:'center'}
                ml: { lg: "0px", md: "150px" },
              }}
            >
              <Box>
                <ListItemButton>
                  <DoneAllIcon />
                  <ListItemText
                    primary="Quality & Variety of Food."
                    sx={{ ml: "10px" }}
                  />
                </ListItemButton>
                <ListItemButton>
                  <DoneAllIcon />
                  <ListItemText
                    primary="Accessibility & Parking facilities."
                    sx={{ ml: "10px" }}
                  />
                </ListItemButton>
                <ListItemButton>
                  <DoneAllIcon />
                  <ListItemText
                    primary="Exceptional customer service."
                    sx={{ ml: "10px" }}
                  />
                </ListItemButton>
              </Box>

              <Box>
                <ListItemButton>
                  <DoneAllIcon />
                  <ListItemText
                    primary="Special Dietary Options."
                    sx={{ ml: "10px" }}
                  />
                </ListItemButton>
                <ListItemButton>
                  <DoneAllIcon />
                  <ListItemText
                    primary="Special Events and Promotions."
                    sx={{ ml: "10px" }}
                  />
                </ListItemButton>
                <ListItemButton>
                  <DoneAllIcon />
                  <ListItemText
                    primary="Health and Safety Standards."
                    sx={{ ml: "10px" }}
                  />
                </ListItemButton>
              </Box>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

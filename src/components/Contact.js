import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        mt: "90px",
        backgroundColor: "#627254",
        paddingTop: "50px",
      }}
    >
      <Box
        sx={{
          width: "90%",
          m: "auto",
          display: "flex",
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <Box
          sx={{
            width: "70%",
            m: "auto",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              fontWeight: "550",
              color: "#fff",
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            variant="p"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              fontWeight: "500",
              mt: "10px",
              color: "#fff",
            }}
          >
            Fill the Form for the reservations and to get exciting offers.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              mt: "40px",
            }}
          >
            <Box>
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                sx={{
                  backgroundColor: "#fff",
                  mr: "10px",
                  width: { lg: "49%", md: "48%" },
                }}
              />
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                sx={{ backgroundColor: "#fff", width: "48.5%" }}
              />
            </Box>
            <TextField
              id="filled-multiline-static"
              label="Message"
              variant="filled"
              multiline
              rows={4}
              sx={{ mt: "10px", backgroundColor: "#fff" }}
            />
          </Box>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ color: "#627254", bgcolor: "#fff", mt: "20px" }}
          >
            Send
          </Button>
        </Box>

        <Box
        sx={{
          pr:'300px'
        }}>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              fontWeight: "500",
              fontSize:'20px',
              color: "#fff",
            }}
          >
            Contact Info
          </Typography>

          <Box>
            <Box
            sx={{
              mt:'40px',
              color:'#fff'
            }}>
              <Typography>
                <LocationOnIcon /> Address
              </Typography>
              <Typography
              sx={{
                width:'140px'
              }}>Pune, Maharashtra</Typography>
            </Box>
            <Box
            sx={{
              mt:'20px',
              color:'#fff'
            }}>
              <Typography>
                <PhoneIcon /> Phone
              </Typography>
              <Typography>+91 9876543210</Typography>
            </Box>
            <Box
            sx={{
              mt:'20px',
              color:'#fff'
            }}>
              <Typography>
                <EmailIcon /> Email
              </Typography>
              <Typography>email@gmail.com</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;

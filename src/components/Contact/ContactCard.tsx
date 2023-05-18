import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { buttonPrimary, circle } from "@/constants";
import { buttonSecondary, circleSecondary } from "@/constants/styles";

function ContactCard() {
  const styles = {
    textBox: {
      "& $div": {
        justifyContent: "center",
        "& $input": {
          width: "30%",
        },
      },
      "& $p": {
        alignSelf: "center",
      },
    },
  };

  return (
    <Card sx={{ textAlign: "center" , borderRadius: '50px'}}>
      <CardContent>
        <Typography gutterBottom variant="h4"
        mt={5}
         sx={{
          fontFamily: "Poppins",
          fontSize: { lg: "24px", xs: "18px" },
          
          fontWeight: 700,
        }}
        component="div">
          Request a Callback
        </Typography>
      </CardContent>
      <Box sx={{paddingLeft: {lg: 15 ,xs: 4},paddingRight: {lg: 15 ,xs: 4}}} className="contactField">
        <TextField
          sx={{ width: "100%", margin: "15px 0 0 0" ,fontSize:'15px'}}
          id="standard-basic"
          label="Enter your name"
          variant="standard"
        />
        <TextField
          sx={{ width: "100%", margin: "15px 0 0 0" }}
          id="standard-basic"
          label="Enter your Email address"
          variant="standard"
        />
        <TextField
          sx={{ width: "100%", margin: "15px 0 0 0" }}
          id="standard-basic"
          label="Enter your phone number"
          variant="standard"
        />
        <TextField
          sx={{ width: "100%", margin: "30px 0 40px 0" }}
          id="outlined-multiline-static"
          label="Message"
          
          multiline
          rows={7}
        />
      </Box>
      <CardActions sx={{ justifyContent: "center" }}>
        <Box display="flex" justifyContent="center" mb={6}>
          <Button variant={"outlined"} onClick={() => {}} sx={buttonSecondary}>
            <Typography
              sx={{
                fontSize: { lg: "25px", sm: "17px" },
              }}
            >
              Contact us
            </Typography>
          </Button>
          <Button variant={"outlined"} onClick={() => {}} sx={circleSecondary}>
            <img
              src={"/right.png"}
              alt={"right arrow"}
              width={30}
              height={30}
              style={{ marginTop: "5px" }}
              loading="eager"
            />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ContactCard;

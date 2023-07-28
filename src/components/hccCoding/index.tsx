import {
    Grid,
    Box,
    Typography,
    Chip,
    Button,
    Stack,
  } from "@mui/material";


const Hcc = () => {
    return <Box component="section" py={4} id="why-us">
    <Grid container justifyContent={"center"}>
      <Typography
        variant={"h2"}
        mb={2}
        sx={{
          fontWeight: "700",
          fontFamily: "Poppins",
          fontSize: { lg: "100px", xs: "40px" },
        }}
      >
        Know the{" "}
        <Box component="div" sx={{ display: "inline", color: "#EEB609" }}>
          [
        </Box>
        Hyge
        <Box component="div" sx={{ display: "inline", color: "#EEB609" }}>
          ]
        </Box>
      </Typography>
    </Grid>
    
    
  </Box>
}

export default Hcc
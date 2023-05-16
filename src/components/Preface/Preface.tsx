import { Grid, Box, Typography, Chip, Button, Stack } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ImageGrid, SolutionsList } from "@components";
import {
  process,
  h2,
  h2Primary,
  h2PrimaryHollow,
  caption,
  buttonPrimary,
  circle,
  hLarge,
  darkHallow,
  circleDark,
  circleBlack,
  buttonPrimaryBlack,
} from "@/constants";
import { hLargeVertical, lightHallow } from "@/constants/styles";
import { BorderBottom } from "@mui/icons-material";

const Preface = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Banner  */}
      <Box component="section" py={4} className="banner">
        <Grid container justifyContent="center" pt={7} ml={{ lg: 3, xs: 2 }}>
          <Grid item lg={10} xs={12}>
            <Typography variant="h2" sx={h2} component={"h2"} lineHeight={1.5}>
              Reshape the future <br /> With our
            </Typography>
            <Typography sx={h2Primary} variant="h2" component={"h2"}>
              Revenue
              <Box component="div" sx={h2PrimaryHollow}>
                &ensp;Cycle Management
              </Box>
            </Typography>
          </Grid>
          <Grid item lg={10} sm={12} mt={5}>
            <Grid item lg={10} xs={10} pr={{ lg: 3 }}>
              <Typography align="left" variant="caption" sx={caption}>
                Discover new heights with our IT services. Our innovative
                approaches for RCM, digital marketing, and DevOps can turn your
                business operations into a revenue-generating powerhouse. Let us
                show you how to leverage these services and take your business
                to the next level.
              </Typography>
            </Grid>
          </Grid>
          <Grid display="flex" item mt={4} lg={10}>
            <Grid item>
              <Button
                variant={"outlined"}
                onClick={() => {}}
                sx={buttonPrimary}
              >
                Discover More
              </Button>
            </Grid>
            <Grid item ml={-1}>
              <Button variant={"outlined"} onClick={() => {}} sx={circle}>
                <img
                  src={"right.png"}
                  alt={"right arrow"}
                  width={35}
                  height={30}
                  style={{ marginTop: "5px" }}
                  loading="eager"
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={-5}>
          <Typography sx={hLarge}>hyge</Typography>
        </Grid>
      </Box>
      {/* What Sets Us Apart?  */}
      <Box component="section" py={4}>
        <Grid container px={4} id="whatSetUsApart">
          <Typography
            variant={"body2"}
            align="left"
            ml={2}
            sx={{ fontSize: "20px", color: "#afafaf" }}
            mt={2}
          >
            What set us apart?
          </Typography>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} sm={8} ml={{ lg: 0, xs: 3 }} mt={4}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Poppins",
                fontSize: { lg: "52px", xs: "26px" },
                fontWeight: 500,
              }}
            >
              Nothing ever becomes comfortable till you experience it with
              <Box
                component="div"
                sx={{ display: "inline", color: "#EEB609", fontWeight: 400 }}
              >
                {" "}
                hyge
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: { lg: "40px", xs: "20px" },
                lineHeight: { lg: "65px", xs: "40px" },
                color: "#6C7A89",
              }}
              variant={"h6"}
              mt={4}
            >
              Our solutions are tailored to your needs, with hyper-flexibility,
              expert customer support, continuous improvement, and collaborative
              partnerships. Experience the comfort of working with us and
              streamline your business processes seamlessly.
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <Stack
              mt={-4}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: { lg: "212px", xs: "50px" },
                  height: { lg: "212px", xs: "50px" },
                  border: "1px solid #6C7A89",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src="/vector.png"
                  width={100}
                  height={120}
                  alt={"arrow"}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {/* Difference  */}
      <Box component="section" py={4}>
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
        <Grid container justifyContent={"center"}>
          <Typography variant={"h2"} sx={darkHallow}>
            difference
          </Typography>
        </Grid>
        <Box mt={8}>
          <ImageGrid scrollY={scrollY} />
        </Box>
      </Box>
      {/* Divider */}
      <Box height="4px" bgcolor="#034AB2" my={2} />
      {/* Services */}
      <Box component="section" py={4} px={4}>
        <Typography sx={{ fontSize: "20px", color: "#afafaf" }} px={4}>
          Services
        </Typography>
        <Grid container justifyContent="center" mt={2}>
          <Grid container item lg={11}>
            <Grid item lg={5} xs={12}>
              <Typography component="h3" fontSize="67px" fontWeight={700}>
                Solutions <br />
                We Provide
              </Typography>
            </Grid>
            <Grid item lg={7} xs={12} alignSelf="end">
              <Typography fontSize="24px" color="#6C7A89" fontWeight={400}>
                With every single one of our clients we bring forth a deep
                passion for creative Problem solving innovations forward
                thinking brands boundaries
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Solutions  */}
        <Grid container justifyContent="center" mt={10}>
          <Grid container item lg={11} sx={{ borderBottom: "1px solid #707070",flexDirection:{lg:'row-reverse',sm:'column'} }}>
            <Grid item lg={2} xs={12}>
              <Typography sx={hLargeVertical}>
                Solutions
              </Typography>
            </Grid>
            <Grid item lg={10} xs={12}>
              <SolutionsList />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* process */}
      <Box component="section" py={4}>
        <Grid container justifyContent="center">
          <Grid item lg={11} xs={12} px={4}>
            <Typography sx={{ fontSize: "20px", color: "#afafaf" }}>
              How we do?
            </Typography>
            <Typography
              variant={"h2"}
              
              sx={{
                fontWeight: "700",
                fontSize: { lg: "150px", md: "75px", xs: "50px" },
                lineHeight: { lg: "130px", xs: "normal" },
                color: "#0033FF",
                
              }}
            >
              process
            </Typography>
            <Grid
              item
              display="flex"
              justifyContent={{ lg: "right", xs: "center" }}
              lg={11}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "700",
                  fontSize: { lg: "150px", md: "75px", xs: "50px" },
                  lineHeight: "normal",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: { lg: "inline", xs: "block" },
                    color: "#EEB609",
                  }}
                >
                  driven
                </Box>{" "}
                design
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} mt={5}>
          <Box
            component="img"
            src="processD.png"
            alt={"hygeinfotech process"}
            sx={{
              display: { lg: "block", xs: "none" },
              width: "90%",
            }}
          />
          <Box
            component="img"
            src="processM.png"
            alt={"hygeinfotech process"}
            sx={{
              display: { lg: "none", xs: "block" },
              width: "90%",
            }}
          />
          <Grid
            item
            xs={12}
            sx={{ textAlign: "center", display: { lg: "none", xs: "block" } }}
            mt={3}
          >
            <Grid container justifyContent={"center"} mt={3}>
              {process.map((proc, index) => {
                return (
                  <Grid
                    item
                    justifyContent={"center"}
                    xs={8}
                    key={index}
                    mt={1}
                  >
                    <Typography
                      variant={"h5"}
                      sx={{ fontWeight: "600" }}
                      align="center"
                      mb={3}
                    >
                      {proc.id}
                    </Typography>
                    <Grid container justifyContent={"center"} mb={3}>
                      <Chip
                        variant="outlined"
                        label={proc.topic}
                        sx={{
                          border: "1px solid black",
                          color: "#EEB609",
                          fontSize: "15px",
                          fontFamily: "poppins",
                          fontWeight: "900",
                        }}
                        
                      ></Chip>
                    </Grid>
                    <Typography variant="body1" align="center" mb={4}>
                      {proc.text}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Way of thinking */}
      <Box component="section" py={4} px={4}>
        <Grid container justifyContent="center">
          <Grid item lg={11}>
            <Typography sx={{ fontSize: "20px", color: "#afafaf" }}>
              Way of thinking
            </Typography>
            <Box display="flex" justifyContent="center" py={8}>
              <Image
                src="/girl-banner.png"
                width="900"
                height="540"
                className="roundedImage"
                alt="hygeinfotech girl-banner"
              />
            </Box>
            <Grid container>
              <Grid item lg={6} xs={12}>
                <Typography
                  sx={{
                    fontSize: { lg: "170px", md: "80px", xs: "40px" },
                    fontWeight: "700",
                    textAlign: { lg: "left", xs: "center" },
                    marginTop: { xs: "-50px", lg: "0px" },
                  }}
                >
                  We Are
                </Typography>
              </Grid>
              <Grid item lg={6} xs={12} pr={2}>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { lg: "50px", md: "30px", xs: "21px" },
                    fontWeight: "400",
                    textAlign: { lg: "left", xs: "center" },
                  }}
                >
                  commited to delivering, user centric, Effective and
                  sustainable solution.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Compliances & Certifications */}
      <Box component="section" py={4}>
        <Grid
          container
          justifyContent={"center"}
          sx={{ display: { lg: "none", xs: "flex" } }}
        >
          <Typography variant={"h1"} sx={darkHallow}>
            Certifications
          </Typography>
        </Grid>
        <Grid
          container
          mt={3}
          py={5}
          px={4}
          justifyContent={{ xs: "space-between", lg: "center" }}
          alignItems={"center"}
          sx={{
            backgroundColor: { lg: "#0033FF", xs: "#0033FF" },
            minHeight: { lg: "300px", xs: "200" },
          }}
        >
          <Grid
            item
            lg={3}
            xs={6}
            sx={{ textAlign: "center" }}
            mt={{ lg: 10, xs: 4 }}
          >
            <Box
              component="img"
              src="158.png"
              alt={"hygeinfotech logo"}
              sx={{
                display: { lg: "inline-flex", xs: "none" },
              }}
            />
            <Box
              component="img"
              src="158Dark.png"
              alt={"hygeinfotech logo"}
              sx={{
                display: { lg: "none", xs: "inline-flex" },
              }}
            />
          </Grid>
          <Grid
            item
            lg={3}
            xs={6}
            sx={{ textAlign: "center" }}
            mt={{ lg: 10, xs: 4 }}
          >
            <Box
              component="img"
              src="138.png"
              alt={"hygeinfotech logo"}
              sx={{
                display: { lg: "inline-flex", xs: "none" },
              }}
            />
            <Box
              component="img"
              src="138Dark.png"
              alt={"hygeinfotech logo"}
              sx={{
                display: { lg: "none", xs: "inline-flex" },
              }}
            />
          </Grid>
          <Grid
            item
            lg={3}
            xs={6}
            sx={{ textAlign: "center" }}
            mt={{ lg: 10, xs: 4 }}
          >
            <Box
              component="img"
              src="139.png"
              alt={"hygeinfotech logo"}
              sx={{
                display: { lg: "inline-flex", xs: "none" },
              }}
            />
            <Box
              component="img"
              src="139Dark.png"
              alt={"hygeinfotech logo"}
              sx={{
                display: { lg: "none", xs: "inline-flex" },
              }}
            />
          </Grid>
          <Typography
            variant="body1"
            sx={lightHallow}
            // sx={{ color: "#fff", display: { lg: "block", xs: "none" } }}
            pt={5}
          >
            Compliances & Certifications
          </Typography>
        </Grid>
      </Box>
      {/* Let's talk */}
      <Box component="section" py={4} mt={5} mb={15}>
        <Grid container justifyContent="center">
          <Grid item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: { lg: "212px", xs: "50px" },
                  height: { lg: "212px", xs: "50px" },
                  border: "1px solid #6C7A89",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src="/vector.png"
                  width={100}
                  height={120}
                  alt={"arrow"}
                />
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { lg: "150px", sm: "50px" },
                  fontWeight: 700,
                }}
                component={"h2"}
              >
                Let&#39;s talk!
              </Typography>
              <Grid container mt={10} justifyContent={"center"}>
                <Grid item>
                  <Button
                    variant={"outlined"}
                    onClick={() => {}}
                    sx={buttonPrimary}
                  >
                    <Typography fontSize="25px">Contact us</Typography>
                  </Button>
                </Grid>
                <Grid item ml={-1}>
                  <Button variant={"outlined"} onClick={() => {}} sx={circle}>
                    <img
                      src={"/right.png"}
                      alt={"right arrow"}
                      width={30}
                      height={30}
                      style={{ marginTop: "5px" }}
                      loading="eager"
                    />
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Preface;

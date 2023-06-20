import * as React from "react"
import Box from "@mui/material/Box"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "/gridImage/sectionOne.svg",
  },
  {
    label: "Bird",
    imgPath: "/gridImage/sectionTwo.svg",
  },
];
const SliderGrid = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  return (
    <Box>
      <Carousel>
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: { lg: 680, sm: 300 },
                  display: "block",

                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default SliderGrid;

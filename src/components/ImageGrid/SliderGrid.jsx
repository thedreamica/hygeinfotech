import * as React from 'react';
import { makeStyles, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      '/gridImage/sectionOne.svg',
  },
  {
    label: 'Bird',
    imgPath:
    '/gridImage/sectionTwo.svg',
  },
];

const  SliderGrid =()=> {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                
                sx={{
                  height: {lg:680,sm:300},
                  display: 'block',
                 
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        classes={{
            
        }}
        sx={{ maxWidth: 400, flexGrow: 1 ,justifyContent: 'center',margin:'auto'}}
      />
    </Box>
  );
}

export default SliderGrid;

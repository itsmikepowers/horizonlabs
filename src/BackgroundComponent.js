import { Box } from '@chakra-ui/react';
import React from 'react';

const ColoredCircle = ({ width, height, bgColor, top, left, animationName }) => {

  // Add 10% more transparency 
  const bgColorWithSmoothing = `radial-gradient(circle, ${bgColor} 0%, rgba(0,0,0,0) 71%)`;

  return (
    <Box
      w={width}  
      h={height}
      bg={bgColorWithSmoothing} 

      borderRadius="50%"
      pos="absolute"
      top={top}
      left={left}
      transform="translate(-50%, -50%)"
      animation={`${animationName} 12s infinite`} 
    />
  );
}

const BackgroundComponent = ({ children }) => {

  return (
    <Box className="background-component" pos="relative" w="100%" h="100vh" >
      
      <Box w="100%" h="100vh" pos="absolute" top={0} left={0} zIndex={0} overflow="hidden">
      
        <ColoredCircle  
          width="1000px"
          height="1000px"
          bgColor="#ff9050"
          top="60%"
          left="20%"
          animationName="colorChangeOrange" 
        />

        <ColoredCircle
          width="1200px" 
          height="1200px"
          bgColor="#25b6f2"
          top="30%"
          left="70%"
          animationName="colorChangeBlue" 
        />
        
        <ColoredCircle
          width="1100px"
          height="1100px"  
          bgColor="#fb4f59"
          top="70%"
          left="90%"
          animationName="colorChangeRed" 
        />

        <ColoredCircle
          width="1000px"
          height="1000px" 
          bgColor="#4e2474"
          top="15%"
          left="40%"
          animationName="colorChangePurple" 
        />

      </Box>

      <Box zIndex={3}>
        {children}
      </Box>
    
    </Box>
  );
}

export default BackgroundComponent;
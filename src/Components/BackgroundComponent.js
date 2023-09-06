import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';

const colors = ["#ff9050", "#25b6f2", "#fb4f59", "#8013ac"];
const ColoredCircle = ({ width, height, initialColor, top, left }) => {
    const [{ bgColor }, set] = useSpring(() => ({
      bgColor: initialColor,
      config: { tension: 280, friction: 280 }
    }));
  
    // Start the color transition on mount
    React.useEffect(() => {
      let currentIndex = colors.indexOf(initialColor);
      const timer = setInterval(() => {
        currentIndex = (currentIndex + 1) % colors.length;
        set({ bgColor: colors[currentIndex] });
      }, 3000); // Change color every 4 seconds
  
      return () => clearInterval(timer);
    }, [initialColor, set]);
  
    return (
      <animated.div
        style={{
          width: width,
          height: height,
          background: bgColor.interpolate(color => `radial-gradient(circle, ${color} 0%, rgba(0,0,0,0) 71%)`),
          borderRadius: '50%',
          position: 'absolute',
          top: top,
          left: left,
          transform: 'translate(-50%, -50%)'
        }}
      />
    );
  }

const BackgroundComponent = ({ children }) => {
  return (
    <Box className="background-component" pos="relative" w="100%" h="100vh" >
      <Box w="100%" h="100vh" pos="absolute" top={0} left={0} zIndex={0} overflow="hidden">
        <ColoredCircle  
          width="1200px"
          height="1200px"
          initialColor="#ff9050"
          top="60%"
          left="20%"
        />
        <ColoredCircle
          width="1400px" 
          height="1400px"
          initialColor="#25b6f2"
          top="30%"
          left="70%"
        />
        <ColoredCircle
          width="1300px"
          height="1300px"  
          initialColor="#fb4f59"
          top="70%"
          left="90%"
        />
        <ColoredCircle
          width="1200px"
          height="1200px" 
          initialColor="#8013ac"
          top="15%"
          left="40%"
        />
        <ColoredCircle
          width="1900px"
          height="1900px"  
          initialColor="#fb4f59"
          top="-10%"
          left="-10%"
        />
        <ColoredCircle  
          width="1500px"
          height="1500px"
          initialColor="#ff9050"
          top="-10%"
          left="110%"
        />
      </Box>
      <Box zIndex={3}>
        {children}
      </Box>
    </Box>
  );
}

export default BackgroundComponent;

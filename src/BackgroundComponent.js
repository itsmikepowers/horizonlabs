import { Box } from '@chakra-ui/react';
import React from 'react';

const BackgroundComponent = ({ children }) => {
    return (
        <Box className="background-component" pos="relative" w="100%" h="100vh">
            <Box w="100%" h="100vh" pos="absolute" top={0} left={0} zIndex={-10} overflow="hidden">
                <Box
                    w="700px" h="700px"
                    bg="#ff9050"
                    borderRadius="50%"
                    pos="absolute"
                    top="60%"
                    left="20%"
                    transform="translate(-50%, -50%)"
                    filter="blur(100px)"
                    animation=" colorChangeOrange 12s infinite"
                />
                <Box
                    w="900px" h="900px"
                    bg="#25b6f2"
                    borderRadius="50%"
                    pos="absolute"
                    top="30%"
                    left="70%"
                    transform="translate(-50%, -50%)"
                    filter="blur(130px)"
                    animation="colorChangeBlue 12s infinite"
                />
                <Box
                    w="800px" h="800px"
                    bg="#fb4f59"
                    borderRadius="50%"
                    pos="absolute"
                    top="70%"
                    left="90%"
                    transform="translate(-50%, -50%)"
                    filter="blur(110px)"
                    animation="moveRedDot 12s infinite, colorChangeRed 12s infinite"
                />
                <Box
                    w="700px" h="700px"
                    bg="#4e2474"
                    borderRadius="50%"
                    pos="absolute"
                    top="15%"
                    left="40%"
                    transform="translate(-50%, -50%)"
                    filter="blur(100px)"
                    animation="movePurpleDot 12s infinite, colorChangePurple 12s infinite"
                />
            </Box>
            <Box zIndex={2}>
                {children}
            </Box>
        </Box>
    );
}

export default BackgroundComponent;

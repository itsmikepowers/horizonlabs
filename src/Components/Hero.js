import React, { useState, useEffect } from 'react';
import { Box, Center, VStack, Heading, Text, Flex, Circle, Button, useBreakpointValue } from "@chakra-ui/react";
import buttonBackground from '../Assets/button.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stackWidth = useBreakpointValue({ base: "90%", sm: "70%", md: "50%", lg: "40%" });
  const stackHeight = useBreakpointValue({ base: "65vh", sm: "65vh", md: "75vh", lg: "75vh" });
  const headingSize = useBreakpointValue({ base: "4xl", sm: "4xl", md: "5xl", lg: "5xl" });
  const textSize = useBreakpointValue({ base: "xl", sm: "xl", md: "2xl", lg: "2xl" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // 100ms delay, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box bg="transparent" h={stackHeight} w="100%">
      <Center h="100%">
        <VStack 
          spacing="0" 
          w={stackWidth} 
          h="85%"
          transform={isVisible ? "translateY(0)" : "translateY(100%)"}
          opacity={isVisible ? 1 : 0}
          transition="opacity 3s, transform 2s"
          zIndex={10}
        >
          <Box bg="gray.900" w="100%" h="40px" borderTopRadius="20px">
            <Flex justifyContent="flex-start" alignItems="center" paddingLeft="5" h="100%">
              <Circle size="12px" bg="#ff1c24" marginRight="2" />
              <Circle size="12px" bg="#ffac1c" marginRight="2" />
              <Circle size="12px" bg="#0dd110" />
            </Flex>
          </Box>
          <Box bg="gray.800" w="100%" flex="1">
            <Center h="100%">
              <VStack>
                <Heading as="h1" fontSize={headingSize} fontWeight="bold" textAlign="center" color="white">
                  Digital <br /> Re-Imagined
                </Heading>
                <Text fontSize={textSize} textAlign="center" color="gray.200">
                  Websites, Automation, and AI <br /> To Supercharge Your Business
                </Text>
                <Flex mt={4} spacing={4}>
                <a href="#services">
                  <Button 
                      color="white" 
                      variant="outline" 
                      border="2px solid white" 
                      size="lg" 
                      mr={5} 
                      borderRadius="20px"
                      transition="transform 0.3s, background-color 0.3s" 
                      _hover={{
                          color: "black",
                          transform: "scale(1.1)",
                          backgroundColor: "white"
                      }}>
                      Services
                  </Button>
</a>
                  <Button 
                    color="white" 
                    variant="solid" 
                    size="lg" 
                    borderRadius="20px"
                    style={{
                      backgroundImage: `url(${buttonBackground})`,
                      backgroundSize: '120%',
                      backgroundPosition: 'center',
                    }}
                    transition="transform 0.3s" 
                    _hover={{
                      transform: "scale(1.1)",
                    }}>
                    Let's Talk
                  </Button>
                </Flex>
              </VStack>
            </Center>
          </Box>
          <Box w="100%" h="80px" bgGradient="linear(to-b, gray.800, transparent)" borderBottomRadius="20px" />
        </VStack>
      </Center>
    </Box>
  );
};

export default Hero;

import React from 'react';
import { Box, VStack, Heading, Image, useBreakpointValue, Button } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  return (
    <Box
      backgroundColor="#151a54"
      width="100%"
      paddingY="50px"
      zIndex={5}
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
    >
      {/* Header */}
      <Heading as="h1" color="white" size="2xl" textAlign="center" marginX="auto" maxWidth="1000px">
        Portfolio
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns={[
          "1fr",           // 1 column for smallest screens
          "repeat(2, 1fr)", // 2 columns for slightly larger screens
          "repeat(3, 1fr)", // 3 columns for medium and large screens
          "repeat(3, 1fr)"  // Same as above for extra large screens
        ]}
        gap={10}
        maxWidth="1000px"
        width="100%"
        margin="0 auto"
        padding="5%"
        alignItems="stretch"
        zIndex={5}
        justifyContent="center"
      >
        <BoxItem imageSrc="https://via.placeholder.com/300" />
        <BoxItem imageSrc="https://via.placeholder.com/300" />
        <BoxItem imageSrc="https://via.placeholder.com/300" />
        <BoxItem imageSrc="https://via.placeholder.com/300" />
        <BoxItem imageSrc="https://via.placeholder.com/300" />
        <BoxItem imageSrc="https://via.placeholder.com/300" />
      </Box>

      <Button 
        colorScheme="blue"
        rightIcon={<Box as="span" display="inline-block" ml="8px" fontSize="32px" >{'>'}</Box>}
        padding="2rem 3rem"
        rounded="full"
      >
        <Heading as="h2" size="md" fontWeight="bold">
          Full Portfolio
        </Heading>
      </Button>
    </Box>
  );
};

const BoxItem = ({ imageSrc }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Define the box size based on the breakpoint
  const boxSize = useBreakpointValue({
    base: '100%',   // Full width for smallest screens
    md: '100%',     // Full width when there are 2 columns
    lg: '100%'      // Full width when there are 3 columns
  });

  return (
    <VStack
      ref={ref}
      opacity={inView ? 1 : 0}
      transition="opacity 1s ease-out, transform 0.3s ease-out" 
      _hover={{ transform: "scale(1.07)", zIndex: 10 }}
      backgroundColor="#202987"
      borderRadius="20px"
      padding="50px"
      alignItems="center"
      spacing={4}
      width={boxSize}
      height={boxSize}
      zIndex={1}
    >
      <Image src={imageSrc} alt="Placeholder" borderRadius="10px" boxSize="100%" objectFit="cover" />
    </VStack>
  );
};

export default Portfolio;
